import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import db from "../firebase";
// import * as admin from 'firebase-admin'

export const Test = () => {
  // const {currentUser} = useAuth();
  // var docRef = db.collection("DoctorData").doc(`${currentUser.uid}`);
  // docRef.get().then((doc) => {
  //     if (doc.exists) {
  //         console.log("YOU ARE A DOCTOR");
  //         console.log("Document data:", doc.data());
  //     } else {
  //         // doc.data() will be undefined in this case
  //         console.log("YOU ARE NOT A DOCTOR!!");
  //     }
  // }).catch((error) => {
  //     console.log("Error getting document:", error);
  // });
  const {isDoctor} = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(isDoctor);
    if(isDoctor === false){
      navigate("/");
    }
  });

  return (
    <div>
      <h1> Test Page </h1>
      <div className="container pt-4">
      </div>
    </div>
  );
};
