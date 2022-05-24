import React from "react";
import { Link } from "react-router-dom";
import '../assets/styles/customMade.css';
import siteLogo from '../assets/images/site-logo.png'

export const NavBeforeLogin = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark p-0 headerColor px-2" style={{ height: '10vh' }}>
        <a className="navbar-brand" href="#">
          <img src={siteLogo} style={{ height: '10vh' }} alt="Med-D" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <div className="headerColor pt-0 mt-0 pb-2">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-2">
              <li className="nav-item active">
                <a className="nav-link fw-bold text-light" style={{ fontSize: '2vh' }} href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold text-light" style={{ fontSize: '2vh' }} href="#">Book Appointment</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold text-light" style={{ fontSize: '2vh' }} href="#">Customer Support</a>
              </li>
              {/* <li className="nav-item">
              <a className="nav-link fw-bold text-light disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li> */}
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
            {/* <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search"></input>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> */}
          </div>
        </div>
      </nav>
      {/* <nav className="navbar navbar-expand-lg navbar-dark p-0 headerColor" style={{ height: '10vh' }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={siteLogo} style={{ height: '10vh' }} alt="Med-D" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <a className="nav-link active fw-bold text-light" style={{ fontSize: '2vh' }} aria-current="page" href="#">About
                  Us</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active fw-bold text-light" style={{ fontSize: '2vh' }} aria-current="page" href="#">Book
                  Appointment</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active fw-bold text-light" style={{ fontSize: '2vh' }} aria-current="page" href="#">Customer
                  Support</a>
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
        </div>
      </nav> */}
    </>
  );
};