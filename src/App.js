import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { useState } from "react";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import {NavAfterLogin} from "./components/NavAfterLogin"
import Dashboard from "./components/Dashboard"
import Signup from "./components/Singnup"
import Login from "./components/Login"
import {Test} from "./components/Test"
import {MedRecords} from "./components/MedRecords"
import ForgotPassword from "./components/ForgotPassword"

// Styles
// import "./assets/styles/Style.css"

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header/>
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/medicalRecords" element={<MedRecords/>} />
            <Route path="/test" element={<Test/>} />
            <Route path="/forgot-password" element={<ForgotPassword/>}/>
          </Routes>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
