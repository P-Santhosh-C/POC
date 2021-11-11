const express = require("express");
const mongoose = require("mongoose");
const Registeruser = require("./model");
const DoctorRegister = require("./DoctorRegister");
const AppointmentReq = require("./AppointmentModel");
const jwt = require("jsonwebtoken");
const middleware = require("./middleware");
const cors = require("cors");
const app = express();

mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://localhost:27017/poc", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB is connected"));

app.use(express.json());

app.use(cors({ origin: "*" }));

// ================================

app.post("/register", async (req, res) => {
  try {
    const { username, email, cell, category, password, confirmpassword } =
      req.body;
    let exist = await Registeruser.findOne({ email });
    if (exist) {
      return res.status(400).send("User Already Exist");
    }
    if (password !== confirmpassword) {
      return res.status(400).send("Passwords are not matching");
    }
    let newUser = new Registeruser({
      username,
      email,
      cell,
      category,
      password,
      confirmpassword,
    });
    await newUser.save();
    res.status(200).send("Registered Successfully Now You Can Login");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internel Server Error");
  }
});

// ================================

app.post("/docregister", async (req, res) => {
  try {
    const {
      username,
      email,
      category,
      cell,
      password,
      confirmpassword,
      specialist,
    } = req.body;
    let exist = await DoctorRegister.findOne({ email });
    if (exist) {
      return res.status(400).send("User Already Exist");
    }
    if (password !== confirmpassword) {
      return res.status(400).send("Passwords are not matching");
    }
    let newUser = new DoctorRegister({
      username,
      email,
      cell,
      specialist,
      category,
      password,
      confirmpassword,
    });
    await newUser.save();
    res.status(200).send("Registered Successfully Now You Can Login");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internel Server Error");
  }
});

// ================================

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    let exist;
    if (Registeruser.findOne({ email })) {
      exist = await Registeruser.findOne({ email });
    }
    if (!exist) {
      exist = await DoctorRegister.findOne({ email });
    }
    if (!exist) {
      return res.status(400).send("user not found");
    }
    if (exist.password !== password) {
      return res.status(400).send("Invalid credentials");
    }
    let payload = {
      user: {
        id: exist.id,
      },
    };
    jwt.sign(payload, "jwtSecret", (err, token) => {
      if (err) throw err;
      return res.json({ token });
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
});

// ================================

app.get("/myprofile", middleware, async (req, res) => {
  try {
    let exist;
    exist = await Registeruser.findById(req.user.id);
    if (!exist) {
      exist = await DoctorRegister.findById(req.user.id);
    }
    if (!exist) {
      return res.status(400).send("User not found");
    }
    res.json(exist);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
});

// ================================

app.post("/addreq", async (req, res) => {
  try {
    const { patientId, patientName, doctorName, problem, date, appStatus } =
      req.body;
    let newAppointment = new AppointmentReq({
      patientId,
      patientName,
      doctorName,
      problem,
      date,
      appStatus: "Pending",
    });
    await newAppointment.save();
    res.status(200).send("Appointment Booked Successfully");
  } catch (err) {
    console.log(err);
  }
});

// ================================

app.get("/doctor", async (req, res) => {
  try {
    let exist = await DoctorRegister.find({ category: "Doctor" });
    if (!exist) {
      return res.status(400).send("User not found");
    }
    res.json(exist);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
});

// =============================

app.get("/patient", async (req, res) => {
  try {
    let exist = await Registeruser.find({ category: "Patient" });
    if (!exist) {
      return res.status(400).send("User not found");
    }
    res.json(exist);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
});

// =============================

app.get("/getreqs", async (req, res) => {
  try {
    let exist = await AppointmentReq.find();
    if (!exist) {
      return res.status(400).send("User not found");
    }
    res.json(exist);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
});

// ==============================

app.get("/getreqd/:doctorName", async (req, res) => {
  try {
    let exist = await AppointmentReq.find({
      doctorName: req.params.doctorName,
    });
    if (!exist) {
      return res.status(400).send("User not found");
    }
    res.json(exist);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
});

// =========================

app.get("/getreqa", async (req, res) => {
  try {
    let exist = await AppointmentReq.find();
    if (!exist) {
      return res.status(400).send("User not found");
    }
    res.json(exist);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
});

// =============================

app.put("/activereq/:id", async (req, res) => {
  const id = req.params.id;
  AppointmentReq.findByIdAndUpdate(
    id,
    { appStatus: "Active" },
    { useFindAndModify: false }
  )
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Appointment`,
        });
      } else res.send({ message: "Appointment was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Appointment with",
      });
    });
});

// =============================

app.put("/rejectreq/:id", async (req, res) => {
  const id = req.params.id;
  AppointmentReq.findByIdAndUpdate(
    id,
    { appStatus: "Reject" },
    { useFindAndModify: false }
  )
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Appointment`,
        });
      } else res.send({ message: "Appointment was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Appointment with",
      });
    });
});

// =============================

app.put("/compeleted/:id", async (req, res) => {
  const id = req.params.id;
  AppointmentReq.findByIdAndUpdate(
    id,
    { appStatus: "Compeleted" },
    { useFindAndModify: false }
  )
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Appointment`,
        });
      } else res.send({ message: "Appointment was compeletd successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Appointment with",
      });
    });
});

// =============================

app.delete("/deletedoctor/:id", async (req, res) => {
  const id = req.params.id;
  DoctorRegister.findByIdAndDelete(id)
    .then(res.send({ message: "Doctor was delete successfully." }))
    .catch((err) => {
      res.status(500).send({
        message: "Error deleteing",
      });
    });
});

// =============================

app.listen(5000, () => {
  console.log("server is running....");
});
