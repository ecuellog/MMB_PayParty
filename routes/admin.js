var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var assert = require('assert');

var url = 'mongodb://localhost:27017/data';

router.get('/', function(req, res, next){
	var resultArray = [];
	mongo.connect(url, function(err, db){
		assert.equal(null, err);
		var cursor = db.collection('attendees').find();
		cursor.forEach(function(doc, err){
			assert.equal(null, err);
			resultArray.push(doc);
		}, function(){
			db.close();
			console.log(resultArray);
			resultArray = JSON.stringify(resultArray);
			res.render('admin', {attendees: resultArray});
		});
	});
});

router.post('/delete', function(req, res, next){
	var sessionID = req.body.sessionID;

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
      res.redirect('/admin');
    });
  });
});

router.post('/paidToggle', function(req, res, next){
	var sessionID = req.body.sessionID;
	var paid = req.body.paid;
	var notPaid;

	paid == 'true' ? notPaid = false : notPaid = true;

	console.log('Toggled from ' + paid + ' to ' + notPaid);

	mongo.connect(url, function(err, db){
    assert.equal(null, err);
    db.collection('attendees').findAndModify(
      {'sessionID':sessionID},
      [],
      {'$set' : {'paid': notPaid}},
      {'update': true}
    )
    .then(function(result){
      console.log('Paid attribute toggled');
      db.close();
      res.redirect('/admin');
    });
  });
});

module.exports = router;