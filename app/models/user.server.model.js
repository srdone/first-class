var mongoose = require('mongoose'),
  crypto = require('crypto'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  salt: {
    type: String
  }
});

// this pre save function taken from MEAN Web Development - PACKT Publishing
UserSchema.pre('save', function (next) {
  if (this.password) {
    this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
    this.password = this.hashPassword(this.password);
  }

  next();
});

// this hash password method from MEAN Web Developtment - PACKT Publishing
UserSchema.methods.hashPassword = function (password) {
  return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64');
};

// this authentication method from MEAN Web Development - PACKT Publishing
UserSchema.methods.authenticate = function (password) {
  return this.password === this.hashPassword(password);
};

mongoose.model('User', UserSchema);