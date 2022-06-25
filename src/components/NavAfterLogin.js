import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import siteLogo from '../assets/images/companyName.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
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
      <nav id='navAfterLogin' className="navbar navbar-expand-lg navbar-light p-0 px-lg-2" style={{ background:'white', zIndex:'101' }}>
        <Link className="navbar-brand ms-3 px-lg-5" to="/">
          <img src={siteLogo} style={{ height: '4vh' }} alt="Med-D" />
        </Link>
        <button className="navbar-toggler me-3" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse bg-white" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-2">
              <li className="nav-item active mx-2 mx-lg-3">
                <Link className="nav-link fw-bold text-dark" style={{ fontSize: '2.3vh'}} to="/who-we-are">Who We Are</Link>
              </li>
              {isDoctor===true ?
              <>
                <li className="nav-item ms-2 mx-lg-3">
                  <Link className="nav-link fw-bold text-dark" style={{ fontSize: '2.3vh' }} to="/book-doctor-side">Create Slots</Link>
                </li>
                <li className="nav-item ms-2 mx-lg-3">
                  <Link className="nav-link fw-bold text-dark" style={{ fontSize: '2.3vh' }} to="/appointment-editor">Book For Patients</Link>
                </li>
                <li className="nav-item ms-2 mx-lg-3">
                  <Link className="nav-link fw-bold text-dark" style={{ fontSize: '2.3vh' }} to="/patient-queue">Appointment Queue</Link>
                </li>
              </>
              : <></>}
              {isDoctor===false ?
              <li className="nav-item ms-2 mx-lg-3">
                <Link className="nav-link fw-bold text-dark" style={{ fontSize: '2.3vh' }} to="/book-appointment-info">Book Appointment</Link>
              </li> : <></>
            }
              <li className="nav-item ms-2 mx-lg-3">
                <Link className="nav-link fw-bold text-dark" style={{ fontSize: '2.3vh' }} to="/customer-support">Customer Support</Link>
              </li>
            </ul>
            <form className="d-flex mb-3 ms-2 m-sm-0">
              <Link to="/">
                <button type="button" onClick={handleLogout}
                  className="btn btn-outline-dark mx-2 fw-bold fs-6 rounded" style={{fontFamily:'sans-serif'}}>
                    <AccountCircleIcon className="me-2"/>Logout</button>
              </Link>
            </form>
          </div>
      </nav>
  );
};