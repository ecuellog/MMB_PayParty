var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  res.render('index');
  console.log('Rendering index page...');
});

module.exports = router;
