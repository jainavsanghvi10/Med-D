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
        <Link to="/">
          <button type="button" onClick={handleLogout}
          className="btn btn-dark btn-outline-info mx-2 fw-bold fs-6 rounded">Logout</button>
        </Link>
      </form>
    </div>
  </div>
</nav>
//   <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{marginBottom: "0px"}}>
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#" style={{
//       fontSize: "32px",
//       fontWeight: "800",
//       textTransform: "uppercase",
//       fontFamily: 'Poppins',
//     }}>
//       Med- <em style={{ color: "#ed563b", fontStyle: 'normal' }}>D</em>
//     </a>
//     <button
//       className="navbar-toggler"
//       type="button"
//       data-bs-toggle="collapse"
//       data-bs-target="#navbarNavDropdown"
//       aria-controls="navbarNavDropdown"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//     >
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNavDropdown">
//       <ul className="navbar-nav">
//         <li className="nav-item" style={{
//           minWidth: "300px", display: "flex",
//           justifyContent: "center"
//         }}>
//           <Link className="nav-link active" aria-current="page" to="/" style={{
//             fontWeight: "500",
//             fontsize: "17px",
//             fontFamily: 'Poppins',
//             textTransform: "uppercase"
//           }}>
//             Dashboard
//           </Link>
//         </li>

//         <li className="nav-item" style={{
//           minWidth: "300px", display: "flex",
//           justifyContent: "center"
//         }}>
//           <a className="nav-link" href="#Contact" style={{
//             fontWeight: "500",
//             fontsize: "17px",
//             fontFamily: 'Poppins',
//             textTransform: "uppercase"
//           }}> Contact </a>
//         </li>
//       </ul>
//       <ul className="navbar-nav" >
//       <li className="nav-item">
//              <button
//                onClick={handleLogout}
//                className="btn btn-danger ms-4"
//                type="button"
//              >
//                Logout
//              </button>
//            </li>
//       </ul>

//     </div>
//   </div>
// </nav>
 );
};