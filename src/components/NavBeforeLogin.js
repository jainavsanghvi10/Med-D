import React from "react";
import { Link } from "react-router-dom";
import '../assets/styles/customMade.css';
import siteLogo from '../assets/images/dashboard/Med-D.svg'

export const NavBeforeLogin = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light p-0 px-2" style={{ height: '10vh', zIndex:'101',background:'white'}}>
        <a className="navbar-brand" href="/">
          <img src={siteLogo} style={{ height: '7vh' }} alt="Med-D" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse pb-2 bg-white" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-2">
              <li className="nav-item active">
                <a className="nav-link fw-bold text-dark" style={{ fontSize: '2vh' }} href="/who-we-are">Who We Are</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold text-dark" style={{ fontSize: '2vh' }} href="/book-appointment-info">Book Appointment</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold text-dark" style={{ fontSize: '2vh' }} href="#">Customer Support</a>
              </li>
            </ul>
            <form className="d-flex">
              <Link to="/login">
                <button type="button"
                  className="btn btn-dark btn-outline-info mx-2 fw-bold rounded" style={{ fontSize: '2vh' }}>Login</button>
              </Link>
              <Link to="/signup">
                <button type="button"
                  className="btn btn-dark btn-outline-info mx-2 fw-bold rounded" style={{ fontSize: '2vh' }}>SignUp</button>
              </Link>
            </form>
          </div>
      </nav>
    </>
  );
};