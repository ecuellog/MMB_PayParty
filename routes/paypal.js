var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var assert = require('assert');

var url = 'mongodb://localhost:27017/data';

router.get('/success', function(req, res, next){
  // Get sessionID from request cookies
  var attendee;
  var cookie = req.headers.cookie;
  cookie = cookie.split('=');
  var sessionID = cookie[1];
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
  	});
  }/*, function(){
  	console.log(attendee);
  	db.close();
  	res.render('paypalSuccess');
  }*/);

  //res.render('paypalSuccess');
});

router.get('/failure', function(req, res, next){
	res.render('paypalFail');
});

module.exports = router;
