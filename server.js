var express = require('express'),
  morgan = require('morgan'),
  bodyParser = require('body-parser'),
  session = require('express-session');

var app = express();

// add logging
app.use(morgan('dev'));
// parse json data
app.use(bodyParser.json());

// configure session
app.use(session({
  secret: 'developmentSecret',
  saveUninitialized: false, //make sure we don't save empty sessions
  resave: false //don't save when session has not changed
}));

// serve the index file
app.get('/', function (req, res) {
  req.session.lastVisit = Date.now();
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/lastVisit', function (req, res) {
  res.json({'lastVisit':req.session.lastVisit});
});

// server static files
app.use('/', express.static(__dirname + '/public/'));

var server = app.listen(3000, function () {
  var address = server.address().address;
  var port = server.address().port;

  console.log('Listening on http://%s:%s', address, port);
});