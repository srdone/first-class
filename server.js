var port = 3000;

var express = require('./config/express.js'),
  mongoose = require('./config/mongoose.js');

var db = mongoose();
var app = express();

app.listen(port, function() {
  console.log('Server listening on port ' + port);
});