// Define schema
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const user = new Schema({
  user_name: String,
  pass_word: String,
  tests: [{
    test_name: String,
    score: Number,
}], 
});

// Compile model from schema
module.exports = mongoose.model('user',user);

