import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { IconButton } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import AdminDashboard from "./AdminDashboard";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

export default function AdminAppointment() {
  const [status, setStatus] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      axios
        .get(`http://localhost:5000/getreqa`)
        .then((arr) => setStatus(arr.data))
        .catch(() => {
          console.log("error");
        });
    }, 500);
    return () => clearTimeout(timer);
  });

  const activeAppointment = (id, e) => {
    const timer = setTimeout(() => {
      axios
        .put(`http://localhost:5000/activereq/${id}`)
        .then()
        .catch(() => {
          console.log("error");
        });
    }, 100);
    return () => clearTimeout(timer);
  };

  const rejectAppointment = (id, e) => {
    const timer = setTimeout(() => {
      axios
        .put(`http://localhost:5000/rejectreq/${id}`)
        .then()
        .catch(() => {
          console.log("error");
        });
    }, 100);
    return () => clearTimeout(timer);
  };

  const compeletedAppointment = (id, e) => {
    const timer = setTimeout(() => {
      axios
        .put(`http://localhost:5000/compeleted/${id}`)
        .then()
        .catch(() => {
          console.log("error");
        });
    }, 100);
    return () => clearTimeout(timer);
  };

  return (
    <div>
      <AdminDashboard />
      <center>
        <h3 style={{ padding: "2rem 0", textDecoration:"underline" }}>APPOINTMENT DETAILS</h3>
      </center>
      <div style={{ padding: "0 15rem" }}>
        <Table bordered hover>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Patient's Name</th>
              <th>Doctor's Name</th>
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
                <td>{AppointmentData.doctorName}</td>
                <td>{AppointmentData.problem}</td>
                <td>{new Date(AppointmentData.date).toLocaleString()}</td>
                <td>{AppointmentData.appStatus}</td>
                <td>
                  <IconButton
                    onClick={(e) => activeAppointment(AppointmentData._id, e)}
                    color="secondary"
                  >
                    <AddCircleOutlineIcon />
                  </IconButton>
                  <IconButton
                    onClick={(e) => rejectAppointment(AppointmentData._id, e)}
                    color="secondary"
                  >
                    <HighlightOffIcon />
                  </IconButton>
                  <IconButton
                    onClick={(e) =>
                      compeletedAppointment(AppointmentData._id, e)
                    }
                    color="primary"
                  >
                    <CheckCircleOutlineIcon />
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
