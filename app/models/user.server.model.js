//MEAN Web Development - PACKT Publishing

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    index: true,
    match: /.+\@.+\..+/
  },
  username: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  password: {
    type: String,
    validate: [validatePassword, 'Password must be 6 or more characters'],
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  role: {
    type: String,
    enum: ['Admin', 'Owner', 'User']
  }
});

function validatePassword (password) {
  return password.length >= 6;
};

mongoose.model('User', UserSchema);