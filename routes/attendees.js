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
			res.render('attendees', {attendees: resultArray});
		});
	});
	//res.render('attendees');
});

module.exports = router;