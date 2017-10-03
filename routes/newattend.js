var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var assert = require('assert');

var url = 'mongodb://localhost:27017/data';

router.get('/', function(req, res, next){
	res.render('index');
});

router.post('/', function(req, res, next){
	var attendee = {
		sessionID: req.body.sessionID,
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		party: req.body.party,
		partypackage: req.body.partypackage,
		paid: false
	};

	mongo.connect(url, function(err, db){
		assert.equal(null, err);
		db.collection('attendees').insertOne(attendee, function(err, result){
			assert.equal(null, err);
			console.log('New Attendee: ' + attendee.firstname + ' ' + attendee.lastname);
			db.close();
		});
	});
	res.redirect('/');
});

module.exports = router;