import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { useState } from "react";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { NavAfterLogin } from "./components/NavAfterLogin"
import Dashboard from "./components/Dashboard"
import Signup from "./components/Singnup"
import SignupDoctors from "./components/SignupDoctors";
import Login from "./components/Login"
import LoginDoctor from "./components/LoginDoctor";
import { Test } from "./components/Test"
import { MedRecords } from "./components/MedRecords"
import { OfflineBooking } from "./components/OfflineBooking"
import { BookPatientSide } from "./components/BookPatientSide"
import { BookDoctorSide } from "./components/BookDoctorSide"
import ForgotPassword from "./components/ForgotPassword"
import { AppointmentEditor } from "./components/AppointmentEditor"
import PatientQueue from "./components/PatientQueue"
import { DoctorInfoForm } from "./components/DoctorInfoForm"
import DoctorCards from "./components/doctorCards"
import CreateSlotsPage from "./components/createSlotsPage"
import PatientSideBooking from "./components/patientSideBooking"
import WhoWeAre from "./components/whoWeAre"
import SaveRecordsBuffer from "./components/SaveRecordsBuffer"
import BookAppointmentBuffer from "./components/BookAppointmentBuffer"
import CustomerSupport from "./components/customerSupport"

// Styles
// import "./assets/styles/Style.css"

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup-doctor" element={<SignupDoctors />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login-doctor" element={<LoginDoctor />} />
          <Route path="/medicalRecords" element={<MedRecords />} />
          <Route path="/offline-booking" element={<OfflineBooking />} />
          <Route path="/test" element={<Test />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/book-patient-side" element={<BookPatientSide />} />
          <Route path="/book-doctor-side" element={<BookDoctorSide />} />
          <Route path="/appointment-editor" element={<AppointmentEditor />} />
          <Route path="/patient-queue" element={<PatientQueue />} />
          <Route path="/doctor-info-form" element={<DoctorInfoForm />} />

          {/* New Pages Created */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/doctor-cards" element={<DoctorCards />} />
          <Route path="/create-slots" element={<CreateSlotsPage />} />
          <Route path="/patient-side-booking" element={<PatientSideBooking />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/save-records-info" element={<SaveRecordsBuffer />} />
          <Route path="/book-appointment-info" element={<BookAppointmentBuffer />} />
          <Route path='/customer-support' element={<CustomerSupport/> } />
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
