import React, { useState, useEffect, useContext } from "react";
import { store } from "../Store/store";
import axios from "axios";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Button, Grid, Paper, Avatar } from "@material-ui/core";
import PatientDashboard from "./PatientDashboard";
import { useHistory } from "react-router-dom";
import validation from "./validation";

export default function AppointmentReq() {
  const token = useContext(store);
  const [data, setData] = useState(null);
  const [AppointmentData, setAppointmentData] = useState({
    patientId: "",
    patientName: "",
    doctorName: "",
    problem: "",
    date: "",
  });
  const [dName, setdName] = useState([]);
  const history = useHistory();
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (data == null)
      axios
        .get("http://localhost:5000/myprofile", {
          headers: {
            "x-token": token[0],
          },
        })
        .then((res) => {
          setData(res.data);
          console.log(res.data);
          setAppointmentData({
            patientId: res.data._id,
            patientName: res.data.username,
          });
        })
        .catch((err) => console.log(err));
  });

  if (!token[0]) {
    history.push("/login");
  }

  useEffect(() => {
    axios
      .get("http://localhost:5000/doctor")
      .then((arr) => setdName(arr.data))
      .catch(() => {
        console.log("error");
      });
  });

  const changeHandler = (e) => {
    setAppointmentData({ ...AppointmentData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setErrors(validation(AppointmentData));
    console.log(AppointmentData);
  };

  useEffect(() => {
    if (!(errors.doctorName || errors.problem || errors.date)) {
      axios
        .post("http://localhost:5000/addreq", AppointmentData)
        .then((res) => {
          alert(res.data);
          history.push("/appointmentstatus");
        });
    }
  }, [errors, AppointmentData, history]);

  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 450,
    margin: "30px auto",
  };

  const inputStyle = {
    border: "2px solid #ccc",
    borderRadius: "5px",
    width: "20rem",
  };

  const ErrorStyle = { color: "red" };

  const avatarStyle = { backgroundColor: "#23609e" };

  return (
    <div>
      {data && (
        <div>
          <PatientDashboard />
          <Grid>
            <Paper style={paperStyle}>
              <Grid align="center">
                <Avatar style={avatarStyle}>
                  <LockOutlinedIcon />
                </Avatar>
                <h2 style={{ fontSize: "xx-large", color: "#23609e" }}>
                  APPOINTMENT BOOKING
                </h2>
              </Grid>
              <br />
              <br />
              <center>
                <form onSubmit={submitHandler} autocomplete="off">
                  <select
                    style={inputStyle}
                    onChange={changeHandler}
                    name="doctorName"
                  >
                    <option value="" selected="true" disabled="disabled">
                      Select A Doctor
                    </option>
                    {dName.map((doc) => (
                      <option value={doc.username}>{doc.username}</option>
                    ))}
                  </select>
                  <br />
                  {errors.doctorName && (
                    <small style={ErrorStyle}>{errors.doctorName}</small>
                  )}
                  <br />
                  <input
                    type="text"
                    name="problem"
                    onChange={changeHandler}
                    placeholder="Problem / Diseases"
                    style={inputStyle}
                  />
                  <br />
                  {errors.problem && (
                    <small style={ErrorStyle}>{errors.problem}</small>
                  )}
                  <br />
                  <input
                    type="datetime-local"
                    name="date"
                    onChange={changeHandler}
                    placeholder="Date"
                    style={inputStyle}
                  />
                  <br />
                  {errors.date && (
                    <small style={ErrorStyle}>{errors.date}</small>
                  )}
                  <br />
                  <Button type="submit" color="primary" variant="contained">
                    Submit
                  </Button>
                  <br />
                </form>
              </center>
            </Paper>
          </Grid>
        </div>
      )}
    </div>
  );
}
