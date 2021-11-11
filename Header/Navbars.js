import React, { useContext } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Route as Router, Link, Redirect } from "react-router-dom";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { store } from "../Store/store";
import CallIcon from "@material-ui/icons/Call";
import LocationOnIcon from "@material-ui/icons/LocationOn";

export default function Navbars() {
  const token = useContext(store);
  return (
    <div>
      {!token[0] ? (
        <div>
          <p style={{ textAlign: "right", color: "blue" }}>
            <CallIcon />
            Emergency Contact: +1234567890 | <CallIcon />
            108 | <LocationOnIcon />
            Location{" "}
          </p>
          <Router>
            <Navbar
              collapseOnSelect
              expand="lg"
              bg="light"
              variant="primary"
              className="shadow"
            >
              <Container>
                <Navbar.Brand as={Link} to={"/home"}>
                  <Image
                    src="https://aighospitals.com/wp-content/themes/aig/assets/imgs/aig-hospitals.png"
                    rounded
                  />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                  <MenuIcon />
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto"></Nav>
                  <Nav>
                    <Nav.Link as={Link} to="/home">
                      Home |
                    </Nav.Link>
                    <Nav.Link as={Link} to="/about">
                      About Us |
                    </Nav.Link>
                    <Nav.Link as={Link} to="/contact">
                      Contact Us |
                    </Nav.Link>
                    <Nav.Link as={Link} to="/regPatient">
                      Patient Registration |
                    </Nav.Link>
                    <Nav.Link as={Link} to="/login">
                      Login
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Router>
        </div>
      ) : (
        <div>
          <Redirect to="/check" />
        </div>
      )}
    </div>
  );
}
