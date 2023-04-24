const mongoose = require("mongoose");

let CarScheme = mongoose.Schema({
  model: {
    type: Number,
    required: true,
  },
  make: {
    type: String,
    required: true,
  },
  Color: {
    type: String,
    required: true,
  },
  Owner: {
    type: String,
    required: false,
  },
  Registration: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Car", CarScheme);
