var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CampoutSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  }
});

mongoose.model('Campout', CampoutSchema);