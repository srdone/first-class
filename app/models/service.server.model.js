var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ServiceSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  hours: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

mongoose.model('Service', ServiceSchema);