import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import DoctorDashboard from "./DoctorDashboard";
import { Table } from "react-bootstrap";
import { store } from "../Store/store";
import { IconButton } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

export default function Doctoe(props) {
  const token = useContext(store);
  const [status, setStatus] = useState([]);
  const [data, setData] = useState(null);

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
          console.log(data.username);
        })
        .catch((err) => console.log(err));
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      axios
        .get(`http://localhost:5000/getreqd/${data.username}`)
        .then((arr) => setStatus(arr.data))
        .catch(() => {
          console.log("error");
        });
    }, 500);
    return () => clearTimeout(timer);
  });

  function activeAppointment(id, e) {
    const timer = setTimeout(() => {
      axios
        .put(`http://localhost:5000/activereq/${id}`)
        .then()
        .catch(() => {
          console.log("error");
        });
    }, 100);
    return () => clearTimeout(timer);
  }

  function rejectAppointment(id, e) {
    const timer = setTimeout(() => {
      axios
        .put(`http://localhost:5000/rejectreq/${id}`)
        .then()
        .catch(() => {
          console.log("error");
        });
    }, 100);
    return () => clearTimeout(timer);
  }

  return (
    <div>
      <DoctorDashboard />
      <center>
        <h3 style={{ padding: "2rem 0", textDecoration: "underline" }}>
          APPOINTMENT DETAILS
        </h3>
      </center>
      <div style={{ padding: "0 15rem" }}>
        <Table bordered hover>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Patient Name</th>
              <th>Reson</th>
              <th>Appointment Slot</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {status.map((AppointmentData, index) => (
            <tbody>
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{AppointmentData.patientName}</td>
                <td>{AppointmentData.problem}</td>
                <td>{new Date(AppointmentData.date).toLocaleString()}</td>
                <td>{AppointmentData.appStatus}</td>
                <td>
                  <IconButton
                    onClick={(e) => activeAppointment(AppointmentData._id, e)}
                    color="primary"
                  >
                    <CheckCircleOutlineIcon />
                  </IconButton>
                  <IconButton
                    onClick={(e) => rejectAppointment(AppointmentData._id, e)}
                    color="secondary"
                  >
                    <HighlightOffIcon />
                  </IconButton>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
}
