var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ScoutSchema = new Schema({
  firstName: String,
  lastName: String,
  photoUrl: {
    type: String,
    required: true,
    default: '/avatars/robertbadenpowell.jpg'
  },
  isOA: Boolean,
  _completedReqs: [
    {
      requirement: {
        type: Schema.ObjectId,
        ref: 'Requirement'
      },
      dateCompleted: {
        type: Date,
        required: true,
        default: Date.now()
      }
    }
  ],
  currentPatrol: String,
  troop: String,
  _positionHistory: [
    {
      title: {
        type: String,
        required: true
      },
      start: {
        type: Date,
        required: true
      },
      end: Date
    }],
  _campingHistory: [
    {
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
    }
  ],
  _serviceHistory: [
    {
      description: {
        type: String,
        required: true
      },
      hours: {
        type: Number,
        required: true
      }
    }
  ],
  creator: {
    type: String,
    required: true
  }
});

// register the model
mongoose.model('Scout', ScoutSchema);