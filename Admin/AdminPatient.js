import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import AdminDashboard from "./AdminDashboard";

export default function AdminPatient() {
  const [Patient, setPatient] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/patient")
      .then((arr) => setPatient(arr.data))
      .catch(() => {
        console.log("error");
      });
  });

  return (
    <div>
      <AdminDashboard />
      <center>
        <h3 style={{ padding: "2rem 0", textDecoration: "underline" }}>
          PATIENT DETAILS
        </h3>
      </center>
      <div style={{ padding: "0 15rem" }}>
        <Table bordered hover>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Patient's Name</th>
              <th>Patient's Email</th>
              <th>Patient's Cell</th>
            </tr>
          </thead>
          {Patient.map((PatinetData, index) => (
            <tbody>
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{PatinetData.username}</td>
                <td>{PatinetData.email}</td>
                <td>{PatinetData.cell}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
}
