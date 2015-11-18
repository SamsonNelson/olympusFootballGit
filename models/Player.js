var mongoose = require('mongoose');

var schema = new mongoose.Schema ({
  firstName: { type: String, maxlength: 120, required: true },
  lastName: { type: String, maxlength: 120, required: true },
  // position: { type: String, maxlength: 120, required: true },
  // homeTown: { type: String, maxlength: 120, required: true },
  rushingYards: { type: Number, required: false, default: 0 },
  passingYards: { type: Number, required: false, default: 0 },
  receivingYards: { type: Number, required: false, default: 0 },
  allPurposeYards: { type: Number, required: false, default: 0 },
  touchdowns: { type: Number, required: false, default: 0 },
  tackles: { type: Number, required: false, default: 0 },
  sacks: { type: Number, required: false, default: 0 },
  interceptions: { type: Number, required: false, default: 0 },
});

module.exports = mongoose.model('Player', schema);
