var express = require('express'),
  morgan = require('morgan');

var app = express();

// add logging
app.use(morgan('dev'));


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.use('/', express.static(__dirname + '/public/'));

var server = app.listen(3000, function () {
  var address = server.address().address;
  var port = server.address().port;

  console.log('Listening on http://%s:%s', address, port);
});