const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const test = new Schema({
  name: String,
  author: String,
  duration: Number,
  attempts: Number,
  questions:[{
    question:String,
    option_a:String, 
    option_b:String,
    option_c:String,
    option_d:String,
    correct_option:String,
  }],
});

// Compile model from schema
module.exports = mongoose.model('test',test);