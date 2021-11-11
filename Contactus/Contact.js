import React from "react";
import Footer from "../Footer/Footer";
import { Figure } from "react-bootstrap";
import { Grid, Paper, Button } from "@material-ui/core";

export default function Contact() {
  const figureStyle = {
    position: "absolute",
    bottom: "17rem",
    left: "5rem",
    color: "#ffffff",
  };
  const enquiry = {
    backgroundColor: "#23609e",
    width: "30rem",
    color: "white",
    borderRadius: "3rem",
    height: "2.2rem",
  };
  const paperStyle = {
    padding: 20,
    height: "55vh",
    width: 650,
    margin: "30px auto",
  };
  const inputStyle = {
    border: "2px solid #ccc",
    borderRadius: "5px",
    width: "20rem",
  };
  return (
    <div>
      <Figure style={{ padding: "1rem 0" }}>
        <Figure.Image src="https://aighospitals.com/wp-content/uploads/2018/06/Contact-us.jpg" />
        <Figure.Caption style={figureStyle}>
          <h4>GET IN TOUCH ! </h4>
          <h6>Have questions about our services or anything else? </h6>
          <h6> Let us know and we'll get back to you.</h6>
        </Figure.Caption>
      </Figure>
      <Grid>
        <Paper style={paperStyle}>
          <Grid align="center">
            <center>
              <h3 style={enquiry}>ENQUIRY / QUERY / SUGGESTION</h3>
            </center>{" "}
          </Grid>
          <br />
          <center>
            <form autocomplete="off">
              <input
                type="text"
                name="name"
                placeholder="Name"
                style={inputStyle}
              />{" "}
              <br />
              <br />
              <input
                type="email"
                name="mail"
                placeholder="Emali"
                style={inputStyle}
              />
              <br />
              <br />
              <input
                type="text"
                name="phone"
                placeholder="Cell/Phone Number"
                style={inputStyle}
              />
              <br />
              <br />
              <input
                type="text"
                name="name"
                placeholder="Start Tyeping Here"
                style={inputStyle}
              />
              <br /> <br />
              <Button type="submit" color="primary" variant="contained">
                Send
              </Button>
            </form>
          </center>
        </Paper>
      </Grid>
      <Footer />
    </div>
  );
}
