var express = require('express'),
  morgan = require('morgan');

var app = express();

// add logging
app.use(morgan('dev'));

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(3000, function () {
  console.log('Listening on port 3000');
});