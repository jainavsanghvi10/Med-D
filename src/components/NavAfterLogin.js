import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import siteLogo from '../assets/images/site-logo.png'

export const NavAfterLogin = (props) => {

  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
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
    <>
      {/* <nav className="navbar navbar-expand-lg navbar-dark p-0 headerColor" style={{ height: '10vh' }}>
          <a className="navbar-brand" href="/">
            <img src={siteLogo} width="100" alt="Med-D" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse headerColor pb-2" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-2">
              <li className="nav-item active">
                <a className="nav-link fw-bold text-light" style={{ fontSize: '2vh' }} >About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold text-light" style={{ fontSize: '2vh' }} aria-current="page" href="/offline-booking">Book Appointment</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold text-light" style={{ fontSize: '2vh' }} aria-current="page" href="#">Customer Support</a>
              </li>

            </ul>
            <form className="d-flex">
              <Link to="/">
                <button type="button" onClick={handleLogout}
                  className="btn btn-dark btn-outline-light mx-2 fw-bold fs-6 rounded">Logout</button>
              </Link>
            </form>
        </div>
      </nav> */}

      <nav className="navbar navbar-expand-lg navbar-dark p-0 headerColor px-2" style={{ height: '10vh' }}>
        <a className="navbar-brand" href="#">
          <img src={siteLogo} style={{ height: '10vh' }} alt="Med-D" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse headerColor pb-2" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-2">
              <li className="nav-item active">
                <a className="nav-link fw-bold text-light" style={{ fontSize: '2vh' }} href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold text-light" style={{ fontSize: '2vh' }} href="/offline-booking">Book Appointment</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold text-light" style={{ fontSize: '2vh' }} href="#">Customer Support</a>
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

    </>
  );
};