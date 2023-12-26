const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const educationSchema = new Schema({
  levelofedu: {
    type: String,
    required: true,
  },
  field: {
    type: String,
    required: true,
  },
  school: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  fromMonth: {
    type: String,
    required: true,
  },
  fromYear: {
    type: String,
    required: true,
  },
});

const jobSchema = new Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
  },
  fromMonth: {
    type: String,
    required: true,
  },
  fromYear: {
    type: String,
    required: true,
  },
  description: String,
  toMonth: String,
  toYear: String,
});

const surveySchema = new Schema({
  "What is your gender identity?": {
    type: String,
    required: true,
  },
  "What is your race? (Select all that apply)": {
    "Asian": Boolean,
    "Native Hawaiian or Pacific Islander": Boolean,
    "Black or African American": Boolean,
    "White": Boolean,
    "Hispanic or Latinx": Boolean,
    "Not listed": Boolean,
    "Native American or Alaskan Native": Boolean,
  },
  "What is your sexual orientation?": {
    type: String,
    required: true,
  },
  "What is your age range?": {
    type: String,
    required: true,
  },
  "What is your military status?": {
    type: String,
    required: true,
  },
});

const profileSchema = new Schema({
  UserId:{
    type: Schema.Types.ObjectId, // Use ObjectId type for references
    ref: 'User', // Replace 'User' with the actual model name referencing this UserId
    required: true
  },
  FullName: {
    FirstName: {
      type: String,
      required: true,
    },
    LastName: {
      type: String,
      required: true,
    },
  },
  Location: {
    Country: {
      type: String,
      required: true,
    },
    StreetAddress: {
      type: String,
    },
    City: {
      type: String,
      required: true,
    },
    PinCode: {
      type: String,
    },
  },
  education: [educationSchema],
  jobs: [jobSchema],
  skills: [String],
  currentRole: String,
  WorkLocation: [String],
  Survey: surveySchema,
},
{
  timestamps: true,
});
module.exports = mongoose.model('Profile',profileSchema)