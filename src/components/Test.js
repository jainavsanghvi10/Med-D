import React, { useEffect, useRef, useState } from "react";
import db from "../firebase";
import { useAuth } from "../context/AuthContext";
// import * as admin from 'firebase-admin'

export const Test = () => {
  const {currentUser} = useAuth();
  const [docData, setDocData] = useState(null);

  useEffect(() => {
    if(docData === null){
      call();
    }
  });

  async function call(){
    const cityRef = db.collection('DoctorData').doc(`${currentUser.uid}`);
    const doc = await cityRef.get();
    if (!doc.exists) {
      console.log('No such document!');
    } else {
      console.log('Document data:', doc.data());
      setDocData(doc.data());
    }
  }
  // if(docData===null)
  //   call();

  
  return (
    <div>
      <h1> Test Pageblank</h1>
      <div className="container pt-4">
          <button onClick={call}>Call function</button>
      </div>
    </div>
  );
};
