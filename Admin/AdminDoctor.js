import React, { useState, useEffect } from "react";
import AdminDashboard from "./AdminDashboard";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Table } from "react-bootstrap";
import { IconButton } from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

export default function AdminDoctor() {
  const [Doctor, setDoctor] = useState([]);

  const history = useHistory();

  useEffect(() => {
    axios
      .get("http://localhost:5000/doctor")
      .then((arr) => setDoctor(arr.data))
      .catch(() => {
        console.log("error");
      });
  });

  function addDoctor() {
    history.push("/docregister");
  }

  function deleteDoctor(id, e) {
    console.log(id);
    const timer = setTimeout(() => {
      axios
        .delete(`http://localhost:5000/deletedoctor/${id}`)
        .then(alert("doctor has been delete successfully"))
        .catch(() => {
          console.log("error");
        });
    }, 100);
    return () => clearTimeout(timer);
  }

  return (
    <div>
      <AdminDashboard />
      <center>
        <h3 style={{ padding: "2rem 0", textDecoration: "underline" }}>
          DOCTOR DETAILS
        </h3>
      </center>
      <center>
        <IconButton onClick={addDoctor} color="primary">
          <PersonAddIcon />
          Add Doctor
        </IconButton>
      </center>
      <div style={{ padding: "0 15rem" }}>
        <Table bordered hover>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Doctor's Name</th>
              <th>Doctor's Email</th>
              <th>Doctor's Cell</th>
              <th>Specialist</th>
              <th>Actions</th>
            </tr>
          </thead>
          {Doctor.map((DoctorData, index) => (
            <tbody>
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{DoctorData.username}</td>
                <td>{DoctorData.email}</td>
                <td>{DoctorData.cell}</td>
                <td>{DoctorData.specialist}</td>
                <td>
                  <IconButton
                    onClick={(e) => deleteDoctor(DoctorData._id, e)}
                    color="secondary"
                  >
                    <DeleteForeverIcon />
                  </IconButton>{" "}
                </td>{" "}
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
}
