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
  <nav className="navbar navbar-expand-lg navbar-dark p-0 aestheticColor1">
  <div className="container-fluid">
      <img src={siteLogo} width="100" alt="Med-D" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
      aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-2">
          <a className="nav-link active fw-bold fs-6 text-light" aria-current="page" href="/">About
            Us</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link active fw-bold fs-6 text-light" aria-current="page" href="/offline-booking">Book
            Appointment</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link active fw-bold fs-6 text-light" aria-current="page" href="#">Customer
            Support</a>
        </li>

      </ul>
      <form className="d-flex">
        <Link to="/">
          <button type="button" onClick={handleLogout}
          className="btn btn-dark btn-outline-info mx-2 fw-bold fs-6 rounded">Logout</button>
        </Link>
      </form>
    </div>
  </div>
</nav>
 );
};