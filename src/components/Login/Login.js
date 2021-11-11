import React, { useState, useContext } from "react";
import axios from "axios";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { store } from "../Store/store";
import { Button, Grid, Paper, Avatar } from "@material-ui/core";

const PatientLogin = () => {
  const token = useContext(store);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [Error, setError] = useState();
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", data)
      .then((res) => {
        token[1](res.data.token);
      })
      .catch(() => {
        setError("invalid credentials");
      });
    console.log("login");
    console.log(token);
  };

  const paperStyle = {
    padding: 20,
    height: "50vh",
    width: 450,
    margin: "30px auto",
  };

  const avatarStyle = { backgroundColor: "#23609e" };

  return (
    <div>
      <Grid>
        <Paper style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2 style={{ fontSize: "xx-large", color: "#23609e" }}>LogIn</h2>
            <h2 style={{ fontSize: "large", color: "red" }}>{Error}</h2>
          </Grid>
          <br />
          <center>
            <h6 style={{ color: "#23609e" }}>
              Email<span style={{ paddingLeft: "8rem" }}>Password</span>
            </h6>
            <form onSubmit={submitHandler} autocomplete="off">
              <input
                type="email"
                onChange={changeHandler}
                name="email"
                placeholder="Email"
                style={{ border: "2px solid #ccc", borderRadius: "5px" }}
              />{" "}
              <input
                type="password"
                onChange={changeHandler}
                name="password"
                placeholder="Password"
                style={{ border: "2px solid #ccc", borderRadius: "5px" }}
              />
              <br /> <br />
              <Button
                type="submit"
                color="primary"
                disabled={!data.email || !data.password}
                variant="contained"
              >
                login
              </Button>
              <br />
            </form>
          </center>
        </Paper>
      </Grid>
    </div>
  );
};

export default PatientLogin;
