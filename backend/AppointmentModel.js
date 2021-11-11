const mongoose = require("mongoose");

let AppointmentReq = new mongoose.Schema({
  patientId: {
    type: String,
    required: true,
  },
  patientName: {
    type: String,
    required: true,
  },
  doctorName: {
    type: String,
    required: true,
  },
  problem: {
    type: String,
  },
  appStatus: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("AppointmentReq", AppointmentReq);
