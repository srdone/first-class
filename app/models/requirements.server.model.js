var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var RequirementSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  itemNumber: {
    type: String,
    required: true
  },
  order: {
    type: Number,
    required: true
  },
  parentAward: {
    type: String,
    required: true
  },
  isAward: {
    type: Boolean,
    required: true
  },
  awardType: {
    type: String,
    required: true,
    enum: ['rank', 'meritbadge', 'other']
  },
  parent: {
    type: String,
    required: true
  }
});

RequirementSchema.pre('save', function (next) {
  this.id = this.parentAward + '-' + this.itemNumber;

  next();
});

mongoose.model('Requirement', RequirementSchema);