import React, { useState, useEffect } from "react";
import axios from "axios";
import PatientDashboard from "./PatientDashboard";
import { Table } from "react-bootstrap";

export default function AppointmentStatus() {
  const [status, setStatus] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getreqs")
      .then((arr) => setStatus(arr.data))
      .catch(() => {
        console.log("error");
      });
  });

  return (
    <div>
      <PatientDashboard />
      <div style={{ padding: "0 15rem" }}>
        <Table bordered hover>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Doctor Name</th>
              <th>Reson</th>
              <th>Appointment Slot</th>
              <th>Status</th>
            </tr>
          </thead>
          {status.map((AppointmentData, index) => (
            <tbody>
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{AppointmentData.doctorName}</td>
                <td>{AppointmentData.problem}</td>
                <td>{new Date(AppointmentData.date).toLocaleString()}</td>
                <td>{AppointmentData.appStatus}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
}
