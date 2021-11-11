import React from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import TwitterIcon from "@material-ui/icons/Twitter";

const Footer = () => {
  const history = useHistory();
  return (
    <div
      style={{ backgroundColor: "#414345", color: "white", padding: "3rem" }}
    >
      <div>
        <center>
          <FacebookIcon fontSize="large" /> {"  "}
          <InstagramIcon fontSize="large" /> {"  "}
          <MailOutlineIcon fontSize="large" /> {"  "}
          <TwitterIcon fontSize="large" />
        </center>
      </div>
      <div style={{ paddingTop: "2rem" }}>
        <p>
          <center>© Copyright 2021, AIG Hospitals</center>
        </p>
      </div>
      <div>
        <center>
          <Button
            variant="outline-primary"
            onClick={() => {
              history.push("/login");
            }}
          >
            Request an Appointment
          </Button>
        </center>
      </div>
    </div>
  );
};
export default Footer;
