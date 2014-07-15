var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var root = {};
// plugins
var timestamp = require('../modules/timestamp');

root.schema = new Schema({
  body: { type: String, required: true },
  answers: [{
    body: { type: String }
  }],
});
root.schema.plugin(timestamp);

module.exports = exports = mongoose.model('Question', root.schema);
