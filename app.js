var express = require('express');
var path = require('path');

//routes
var index = require('./routes/index.js');
var spanish = require('./routes/spanish.js');

var app = express();

//view engine setup
app.set('views', path.join(__dirname, '/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js'))); // redirect bootstrap JS
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css'))); // redirect bootstrap CSS

app.use('/', index);
app.use('/spanish', spanish);

/*app.use('/', function(req, res, next){
	return res.render('index');
	next();
});*/

app.use(function(req, res, next){
  res.end();
});

// Set up event listener
port = process.argv[2] || 3000;
app.listen(port, function(){
  console.log('Listening on port ' + port);
});

