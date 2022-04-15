import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
 
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
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{marginBottom: "0px"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{
      fontSize: "32px",
      fontWeight: "800",
      textTransform: "uppercase",
      fontFamily: 'Poppins',
    }}>
      Med- <em style={{ color: "#ed563b", fontStyle: 'normal' }}>D</em>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item" style={{
          minWidth: "300px", display: "flex",
          justifyContent: "center"
        }}>
          <Link className="nav-link active" aria-current="page" to="/" style={{
            fontWeight: "500",
            fontsize: "17px",
            fontFamily: 'Poppins',
            textTransform: "uppercase"
          }}>
            Dashboard
          </Link>
        </li>

        <li className="nav-item" style={{
          minWidth: "300px", display: "flex",
          justifyContent: "center"
        }}>
          <a className="nav-link" href="#Contact" style={{
            fontWeight: "500",
            fontsize: "17px",
            fontFamily: 'Poppins',
            textTransform: "uppercase"
          }}> Contact </a>
        </li>
      </ul>
      <ul className="navbar-nav" >
      <li className="nav-item">
             <button
               onClick={handleLogout}
               className="btn btn-danger ms-4"
               type="button"
             >
               Logout
             </button>
           </li>
      </ul>

    </div>
  </div>
</nav>
 );
};