var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ScoutSchema = new Schema({
  firstName: String,
  lastName: String,
  photoUrl: String,
  isOA: Boolean,
  _completedReqs: [{requirement: {
    type: Schema.ObjectId,
    ref: 'Requirement'
  }, dateCompleted: Date}],
  currentPatrol: String,
  troop: String,
  _positionHistory: [{title: String, start: Date, end: Date}],
  _campingHistory: [{description: String, start: Date, end: Date}],
  _serviceHistory: [{description: String, hours: Number}],
  creator: {
    type: String,
    required: true
  }
});

// register the model
mongoose.model('Scout', ScoutSchema);