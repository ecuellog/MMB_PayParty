var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

//routes
var index = require('./routes/index.js');
var spanish = require('./routes/spanish.js');
var english = require('./routes/english.js');
var newattend = require('./routes/newattend.js');
var paypal = require('./routes/paypal.js');
var attendees = require('./routes/attendees.js');
var admin = require('./routes/admin.js');
var weddingInvite = require('./routes/wedding-invite.js');
var interac = require('./routes/interac.js');

var app = express();

//public directory setup
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js'))); // redirect bootstrap JS
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css'))); // redirect bootstrap CSS

//bodyparser setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//cookieparser setup
app.use(cookieParser());

//view engine setup
app.set('views', path.join(__dirname, '/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//router setup
app.use('/', index);
app.use('/spanish', spanish);
app.use('/english', english);
app.use('/newattend', newattend);
app.use('/paypal', paypal);
app.use('/attendees', attendees);
app.use('/admin', admin);
app.use('/wedding-invite', weddingInvite);
app.use('/interac', interac);

app.use(function(req, res, next){
  res.end();
});

// Set up event listener
port = process.argv[2] || 3000;
app.listen(port, function(){
  console.log('Listening on port ' + port);
});

