import React, { useState, useEffect } from "react";
import axios from "axios";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Button, Grid, Paper, Avatar } from "@material-ui/core";
import AdminDashboard from "../Admin/AdminDashboard";
import { useHistory } from "react-router-dom";
import validation from "../Patient/validation";

const Doctor = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    cell: "",
    category: "Doctor",
    specialist: "",
    password: "",
    confirmpassword: "",
  });
  const [errors, setErrors] = useState({});

  const history = useHistory();

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setErrors(validation(data));
  };

  useEffect(() => {
    if (
      !(
        errors.username ||
        errors.cell ||
        errors.email ||
        errors.specialist ||
        errors.password ||
        errors.confirmpassword
      )
    ) {
      axios
        .post("http://localhost:5000/docregister", data)
        .then((res) => {
          alert(res.data);
          history.push("/docdashboard");
        })
        .catch(() => {
          console.log("invalid data");
        });
    }
  }, [errors, data, history]);

  const paperStyle = {
    padding: 20,
    height: "80vh",
    width: 450,
    margin: "30px auto",
  };
  const inputStyle = {
    border: "2px solid #ccc",
    borderRadius: "5px",
    width: "20rem",
  };

  const ErrorStyle = {
    color: "red",
    size: "small",
  };

  const avatarStyle = { backgroundColor: "#23609e" };

  return (
    <div>
      <AdminDashboard />
      <Grid>
        <Paper style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2 style={{ fontSize: "xx-large", color: "#23609e" }}>
              Doctor Register
            </h2>
          </Grid>
          <br />
          <br />
          <center>
            <form onSubmit={submitHandler} autocomplete="off">
              <input
                type="text"
                onChange={changeHandler}
                name="username"
                placeholder="Name"
                style={inputStyle}
              />
              <br />
              {errors.username && (
                <small style={ErrorStyle}>{errors.username}</small>
              )}
              <br />
              <input
                type="email"
                onChange={changeHandler}
                name="email"
                placeholder="Email"
                style={inputStyle}
              />
              <br />
              {errors.email && <small style={ErrorStyle}>{errors.email}</small>}
              <br />
              <input
                type="text"
                onChange={changeHandler}
                name="specialist"
                placeholder="specialist"
                style={inputStyle}
              />
              <br />
              {errors.specialist && (
                <small style={ErrorStyle}>{errors.specialist}</small>
              )}
              <br />
              <input
                type="text"
                onChange={changeHandler}
                name="cell"
                placeholder="Cell"
                style={inputStyle}
              />
              <br />
              {errors.cell && <small style={ErrorStyle}>{errors.cell}</small>}
              <br />
              <input
                type="password"
                onChange={changeHandler}
                name="password"
                placeholder="Password"
                style={inputStyle}
              />
              <br />
              {errors.password && (
                <small style={ErrorStyle}>{errors.password}</small>
              )}
              <br />
              <input
                type="password"
                onChange={changeHandler}
                name="confirmpassword"
                placeholder="Confirm Password"
                style={inputStyle}
              />
              <br />
              {errors.confirmpassword && (
                <small style={ErrorStyle}>{errors.confirmpassword}</small>
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
  );
};

export default Doctor;
