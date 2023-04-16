import React from "react";
import "./Nav.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import bigTruck from "../assets/images.png";
import logo from '../assets/logo.png'

const Navbar1 = () => {
  return (
    <div className="header-section">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand className="logo" href="#home">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <ul className="me-auto menu-item">
              <li>
                <a href="#work">Home</a>
              </li>
              <li>
                <a href="#services">Academy</a>
              </li>
              <li>
                <a href="#about">Services</a>
              </li>
              <li>
                <a href="#about">Shop Trucks</a>
              </li>
              <li>
                <a href="#about">Join Now</a>
              </li>
              <li className="log-in">
                <a className="log-in-link" href="#about">Login</a>
              </li>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="header container">
        <div className="row">
          <div className="col-md-6">
            <h1>
              what is next after CDL training ?
            </h1>
            <p>
              Leading your first job as a truck driver. here are over 5000
              trucking companies that hire new cdl drivers.
            </p>
          </div>
          <div className="pic-truck col-md-6">
            <img className="bigTruck" src={bigTruck} alt="Truck" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar1;
