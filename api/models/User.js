const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  'name': {
    type: String,
    required: true,
    length: 50,
  },
  age: {
    type: Number,
    required: true,
    // length: 200,
  },
  'blood group': {
    type: String,
    required: true,
    length: 50,
  },
  'bp': {
    type: Number,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;