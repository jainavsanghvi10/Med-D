import React, { useRef, useState} from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import firebase from 'firebase';


export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [userMobile, setUserMobile] = useState();
  const navigate = useNavigate();

  String.prototype.hashCode = function() {
    var hash = 0, i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
      chr   = this.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  };

  async function handleSubmitLogin(e) {
    e.preventDefault();

    try {

      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      
      var userData;
      firebase.firestore().collection("UserData").where("Email", "==",emailRef.current.value )
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            userData = doc.data();
            console.log(userData.Mobile, userData.FirstName, userData.LastName, userData.Email);
            setUserMobile(userData.Mobile);
          });
      })
      console.log(userMobile);
    } catch {
      setError("Incorrect Username or Password");
    }

    setLoading(false);
  }

  return (
    <div
      className="container-md"
      style={{ maxWidth: "500px", marginTop: "100px" }}
    >
      <h1 className="mt-100 text-center"> Login </h1>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmitLogin} className="d-flex flex-column">
        <div className="form-outline mb-4">
          <label className="form-label"> Email </label>
          <input
            type="email"
            id="email"
            className="form-control form-control-lg"
            ref={emailRef}
            required
          />
        </div>
        <div className="form-outline mb-4">
          <label className="form-label"> Password </label>
          <input
            type="password"
            id="pass"
            className="form-control form-control-lg"
            ref={passwordRef}
            required
          />
        </div>
        <div className="d-flex justify-content-around align-items-center mb-4">
          <p>
            Don't have an account? <Link to="/signup"> Signup </Link>
          </p>
        </div>
        <div className="d-flex justify-content-around align-items-center mb-4">
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary btn-lg btn-block"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}