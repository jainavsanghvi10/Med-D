import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import siteLogo from '../assets/images/dashboard/Med-D.svg'

export const NavAfterLogin = (props) => {

  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const {isDoctor} = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate("/");
    } catch {
      setError("Logout Failed");
    }
  }

  return (
      <nav className="navbar navbar-expand-lg navbar-loght p-0 px-2" style={{ height: '10vh',background:'white' }}>
        <Link className="navbar-brand" to="/">
          <img src={siteLogo} style={{ height: '10vh' }} alt="Med-D" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse pb-2" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-2">
              <li className="nav-item active">
                <Link className="nav-link fw-bold text-dark" style={{ fontSize: '2vh'}} to="/who-we-are">Who We Are</Link>
              </li>
              {isDoctor===true ?
              <>
                <li className="nav-item">
                  <Link className="nav-link fw-bold text-dark" style={{ fontSize: '2vh' }} to="/book-doctor-side">Create Slots</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold text-dark" style={{ fontSize: '2vh' }} to="/appointment-editor">Book For Patients</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold text-dark" style={{ fontSize: '2vh' }} to="/patient-queue">Appointment Queue</Link>
                </li>
              </>
              : <></>}
              {isDoctor===false ?
              <li className="nav-item">
                <Link className="nav-link fw-bold text-dark" style={{ fontSize: '2vh' }} to="/book-appointment-info">Book Appointment</Link>
              </li> : <></>
            }
              <li className="nav-item">
                <Link className="nav-link fw-bold text-dark" style={{ fontSize: '2vh' }} to="#">Customer Support</Link>
              </li>
            </ul>
            <form className="d-flex">
              <Link to="/">
                <button type="button" onClick={handleLogout}
                  className="btn btn-dark btn-outline-light mx-2 fw-bold fs-6 rounded">Logout</button>
              </Link>
            </form>
          </div>
      </nav>
  );
};