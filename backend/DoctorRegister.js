const mongoose = require("mongoose");

let DoctorRegister = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  cell: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmpassword: {
    type: String,
    required: true,
  },
  specialist: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("DoctorRegister", DoctorRegister);
