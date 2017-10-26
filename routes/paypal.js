var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var assert = require('assert');

var url = 'mongodb://localhost:27017/data';

router.get('/success', function(req, res, next){
  // Get sessionID from request cookies
  console.log('success page in');
  var attendee;
  var cookie = req.headers.cookie;
  var sessionID;

  var name = 'sessionID=';
  var ca = cookie.split(';');
  for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          sessionID = c.substring(name.length, c.length);
      }
  }

  console.log(sessionID);

  mongo.connect(url, function(err, db){
  	assert.equal(null, err);
  	db.collection('attendees').findAndModify(
  		{'sessionID':sessionID},
  		[],
  		{'$set' : {'paid': true}},
  		{'update': true}
  	)
  	.then(function(result){
  		attendee = result.value;
  		attendeeObj = JSON.stringify(attendee);
  	  	console.log(attendeeObj);
  		db.close();
  		res.render('paypalSuccess', {name: attendee.firstname + ' ' + attendee.lastname});
		console.log('success page out');
  	});
  });
});

router.get('/failure', function(req, res, next){
	// Get sessionID from request cookies
  console.log('fail page in');
  var attendee;
  var cookie = req.headers.cookie;
  var sessionID;
	
	console.log('cookie: ' + cookie);
	console.log('type of cookie:' + typeof(cookie));

  var name = 'sessionID=';
  var ca = cookie.split(';');
  for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          sessionID = c.substring(name.length, c.length);
      }
  }

  console.log(sessionID);
  console.log(typeof(sessionID));

  mongo.connect(url, function(err, db){
    assert.equal(null, err);
    db.collection('attendees').findAndModify(
      {'sessionID':sessionID},
      [],
      {'$set' : {'paid': false}},
      {'remove': true}
    )
    .then(function(result){
      db.close();
      res.render('paypalFail');
      console.log('fail page out');
    });
  });
});

module.exports = router;
