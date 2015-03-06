var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var RequirementSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String
  },
  requirementNumber: {
    type: String,
    required: true
  },
  order: {
    type: Number,
    required: true
  },
  requirementType: {
    type: String,
    required: true,
    enum: ['requirement', 'award']
  },
  parentRequirement: {
    type: String,
    required: true
  },
  numberOfChildrenToComplete: Number,
  completeAllChildren: Boolean,
  effectiveDate: Date
});

mongoose.model('Requirement', RequirementSchema);