var express = require('express');
var router = express.Router();
var srs = require('secure-random-string');

router.get('/', function(req, res, next){
  var sessionID = srs();
  console.log('new sessionID: ' + sessionID);
  res.render('spanish', {sessionID: sessionID});
});

module.exports = router;