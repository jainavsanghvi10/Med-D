import React from "react";
import { Link } from "react-router-dom";
import '../assets/styles/customMade.css';
import siteLogo from '../assets/images/companyName.png'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PersonIcon from '@mui/icons-material/Person';

import Button from '@mui/material/Button';


export const NavBeforeLogin = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light p-0 px-lg-2" style={{ height: '10vh', zIndex:'101',background:'white'}}>
        <a className="navbar-brand ms-3 ps-md-5" href="/">
          <img src={siteLogo} style={{ height: '4vh' }} alt="Med-D" />
        </a>
        <button className="navbar-toggler me-3" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse bg-white" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-2">
              <li className="nav-item active ms-2 mx-lg-3">
                <a className="nav-link fw-bold text-dark" style={{ fontSize: '2.3vh' }} href="/who-we-are">Who We Are</a>
              </li>
              <li className="nav-item ms-2 mx-lg-3">
                <a className="nav-link fw-bold text-dark" style={{ fontSize: '2.3vh' }} href="/book-appointment-info">Book Appointment</a>
              </li>
              <li className="nav-item ms-2 mx-lg-3">
                <a className="nav-link fw-bold text-dark" style={{ fontSize: '2.3vh' }} href="/customer-support">Customer Support</a>
              </li>
            </ul>
            <form className="d-flex mb-3 ms-2 m-sm-0">
              <Link to="/login">
                <Button variant='contained' className="mx-2 fw-bold" style={{ fontSize: '2vh'}}>
                    <PersonIcon/> Login</Button>
              </Link>
              <Link to="/signup">
                {/* <button type="button"
                  className="btn btn-outline-secondary mx-2 fw-bold rounded" style={{ fontSize: '2.3vh',fontFamily:'sans-serif' }}>SignUp</button> */}
                <Button variant="contained" className="mx-2 fw-bold" style={{ fontSize: '2vh'}}>Sign Up</Button>
              </Link>
            </form>
          </div>
      </nav>
    </>
  );
};