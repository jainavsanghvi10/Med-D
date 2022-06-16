import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import db from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const [isDoctor, setIsDoctor] = useState(null);
  const [isApproved, setIsApproved] = useState(false);
  const [isPatient, setIsPatient] = useState(null);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email){
    return auth.sendPasswordResetEmail(email)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);

      if(user!=null){
        // verify if user is doctor
        var docRef = db.collection("DoctorData").doc(`${user.uid}`);
        docRef.get().then((doc) => {
            if (doc.exists) {
              setIsDoctor(true);
              if(doc.data().Approved)
                setIsApproved(true);
            } else {
                setIsDoctor(false);
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
            setIsDoctor(false);
        });
        // verify if user is patient
        var patientRef = db.collection("UserData").doc(`${user.uid}`);
        patientRef.get().then((doc) => {
            if (doc.exists) {
                setIsPatient(true);
            } else {
                setIsPatient(false);
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
            setIsPatient(false);
        });
      }

      setLoading(false);
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    isDoctor,
    isApproved,
    isPatient
    // updateEmail,
    // updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}