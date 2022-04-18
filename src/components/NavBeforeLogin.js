import React from "react";
import { Link } from "react-router-dom";
import '../assets/styles/customMade.css';
import siteLogo from '../assets/images/site-logo.png'

export const NavBeforeLogin = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark p-0 aestheticColor1">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={siteLogo} width="100" alt="Med-D" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <a className="nav-link active fw-bold fs-6 text-light" aria-current="page" href="#">About
                Us</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link active fw-bold fs-6 text-light" aria-current="page" href="#">Book
                Appointment</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link active fw-bold fs-6 text-light" aria-current="page" href="#">Customer
                Support</a>
            </li>

          </ul>
          <form className="d-flex">
            <Link to="/login">
            <button type="button"
              className="btn btn-dark btn-outline-info mx-2 fw-bold fs-6 rounded">Login</button>
              </Link>
              <Link to="/signup">
            <button type="button"
              className="btn btn-dark btn-outline-info mx-2 fw-bold fs-6 rounded">SignUp</button>
              </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};