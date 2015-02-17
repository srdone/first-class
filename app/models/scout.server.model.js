var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ScoutSchema = new Schema({
  firstName: String,
  lastName: String,
  photoUrl: String,
  isOA: Boolean,
  completedRequirements: [{requirement: String, date: Date}],
  currentPatrol: String,
  troop: String,
  positionHistory: [{title: String, start: Date, end: Date}],
  campingHistory: [{description: String, start: Date, end: Date}],
  serviceHistory: [{description: String, hours: Number}],
  creator: {
    type: String,
    required: true
  }
});

mongoose.model('Scout', ScoutSchema);