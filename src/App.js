import "./App.css";
import React, { useState } from "react";
import Navbars from "../src/components/Header/Navbars";
import { BrowserRouter } from "react-router-dom";
import { store } from "./components/Store/store";
import { Route as Router, Switch, Redirect, Route } from "react-router-dom";
import Home from "../src/components/Home/Home";
import About from "../src/components/Aboutus/About";
import Contact from "../src/components/Contactus/Contact";
import PatientReg from "../src/components/Patient/PatientReg";
import Login from "./components/Login/Login";
import PageNotFound from "../src/components/PageNotFound/PageNotFound";
import PatientDashboard from "../src/components/Patient/PatientDashboard";
import AdminDashboard from "./components/Admin/AdminDashboard";
import DoctorDashboard from "./components/Doctor/DoctorDashboard";
import Check from "./components/Home/Check";
import AppointmentReq from "./components/Patient/AppointmentReq";
import AppointmentStatus from "./components/Patient/AppointmentStatus";
import DoctorReg from "./components/Doctor/DoctorReg";
import DoctorStatus from "./components/Doctor/DoctorStatus";
import AdminDoctor from "./components/Admin/AdminDoctor";
import AdminPatient from "./components/Admin/AdminPatient";
import AdminAppointment from "./components/Admin/AdminAppointment";

function App() {
  const [token, setToken] = useState(null);
  return (
    <div className="App">
      <store.Provider value={[token, setToken]}>
        <BrowserRouter>
          <Navbars />
          <Router>
            <Switch>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route exact path="/regPatient">
                <PatientReg />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/patient/dashboard">
                <PatientDashboard />
              </Route>
              <Route exact path="/doctor/dashboard">
                <DoctorDashboard />
              </Route>
              <Route exact path="/admin/dashboard">
                <AdminDashboard />
              </Route>
              <Route exact path="/check">
                <Check />
              </Route>
              <Route exact path="/appointmentReq">
                <AppointmentReq />
              </Route>
              <Route exact path="/appointmentstatus">
                <AppointmentStatus />
              </Route>
              <Route exact path="/doctor/appointment/status">
                <DoctorStatus />
              </Route>
              <Route exact path="/docregister">
                <DoctorReg />
              </Route>
              <Route exact path="/docdashboard">
                <AdminDoctor />
              </Route>
              <Route exact path="/patdashboard">
                <AdminPatient />
              </Route>
              <Route exact path="/appointments">
                <AdminAppointment />
              </Route>
              <Route path="*">
                <PageNotFound />
              </Route>
            </Switch>
          </Router>
        </BrowserRouter>
      </store.Provider>
    </div>
  );
}

export default App;
