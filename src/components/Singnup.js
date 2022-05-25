import React, { useRef, useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import firebase from "firebase";
import { storage } from "../firebase";

import signUpImage from '../assets/images/signUpPage.png';

export default function Signup() {
	const firstNameRef = useRef();
	const lastNameRef = useRef();
	const emailRef = useRef();
	const phoneNumberRef = useRef();
	const UserOtpRef = useRef();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const { currentUser } = useAuth();
	const [final, setfinal] = useState("");
	const [show, setShow] = useState(true);
	const [userValidate, setUserValidate] = useState(false);

	useEffect(() => {
		if (userValidate) {
			firebase
				.firestore()
				.collection("UserData")
				.doc(currentUser.uid)
				.set({
					FirstName: firstNameRef.current.value.toLowerCase(),
					LastName: lastNameRef.current.value.toLowerCase(),
					Email: emailRef.current.value.toLowerCase(),
					Mobile: phoneNumberRef.current.value.toLowerCase(),
				})
				.then(() => {
					console.log("User Added Succesfully!");
					navigate(`/?id=${currentUser.uid}`);
				})
				.catch((error) => {
					console.error("Error writing document: ", error);
				});
			const file = "userTest";
			console.log(currentUser.uid);
			const storageRef = firebase
				.storage()
				.ref()
				.child(`${currentUser.uid}/${file}`);
			storageRef.put("").then((snapshot) => {
				console.log("Folder Created");
			});
		}

	}, [userValidate]);


	const signin = () => {
		console.log("otp sending");
		if (
			phoneNumberRef.current.value === "" ||
			phoneNumberRef.current.value.length < 10
		)
			return;

		let verify = new firebase.auth.RecaptchaVerifier("recaptcha-container");
		auth
			.signInWithPhoneNumber("+91" + phoneNumberRef.current.value, verify)
			.then((result) => {
				setfinal(result);
				console.log("code sent");
				setShow(false);
			})
			.catch((err) => {
				console.log(err, "er");
				window.location.reload();
			});
	};

	function ValidateOtp() {
		if (UserOtpRef.current.value === null || final === null) return;
		final
			.confirm(UserOtpRef.current.value)
			.then((result) => {
				console.log("User Loged in");
				setUserValidate(true);
			})
			.catch((err) => {
				console.log("Wrong code");
			});
	}

	const uploadFiles = (file) => {
		console.log("Registering User");

		const storageRef = firebase
			.storage()
			.ref(storage, `/${currentUser.uid}/${file.name}`);
		firebase
			.storage()
			.uploadBytes(storageRef, file)
			.then((snapshot) => {
				console.log("User Registered!");
			});
	};

	async function handleSubmit(e) {
		e.preventDefault();


		const form = document.getElementById("signup-form");
		if (form.checkValidity()) {

			ValidateOtp();
		}

		setLoading(false);
	}
	document.body.style.background = 'white';


	return (
		<>
			<div style={{ height: '80vh' }}>
				<div id='signupContainer' className="container h-100 mt-0 mb-0 d-flex align-items-center" style={{ width: '35vw' }}>
					<div className="shadow-lg row mt-0 pt-0">
						{error && (
							<div className="console.log console.log-danger" role="console.log">
								{error}
							</div>
						)}
						<form className="row g-3 needs-validation mt-0 px-0 mx-0" id="signup-form" onSubmit={handleSubmit} noValidate>

							{/* NavBar For Signup Login options */}


							<div className="col-6 text-center border mt-0 py-3 darkerTextColor greyishColor fw-bold fs-4">
								<Link to="/login"> <a type='button' className='w-100 darkerTextColor'>Login</a> </Link>
							</div>
							<div className="col-6 text-center border mt-0 py-3 btn-group dropdown darkerTextColor fw-bold fs-4">
								<span type="button" className="dropdown-toggle w-100" data-bs-toggle="dropdown" aria-expanded="false"><u>Sign Up</u></span>
								<ul className="dropdown-menu">
									<Link to="/signup"><button className="dropdown-item darkerTextColor" type="button">As Patient</button></Link>
									<Link to="/signup-doctor"><button className="dropdown-item darkerTextColor" type="button">As Doctor</button></Link>
								</ul>
							</div>

							<span className="text-center darkerTextColor fw-bold">Patient Sign Up Form</span>

							<div className="col-6 pe-1 mt-4">
								<input type="text" className="form-control rounded-pill" id="fname" ref={firstNameRef} placeholder='First Name' required />
								<div className="valid-feedback">Looks Good!</div>
							</div>
							<div className="col-6 ps-1 mt-4">
								<input type="text" className="form-control rounded-pill" id="lname" ref={lastNameRef} placeholder='Last Name' required />
								<div className="valid-feedback">Looks Good!</div>
							</div>

							<div className="form-outline">
								<div className="input-group has-validation">
									<input type="email" className="form-control rounded-pill" id="email" ref={emailRef} placeholder="Email" aria-describedby="inputGroupPrepend" />
									<div className="invalid-feedback">Please choose a username.</div>
								</div>
							</div>
							<div className="form-outline">
								<input type="text" className="form-control rounded-pill" id="phonenumber" ref={phoneNumberRef} placeholder='Phone Number' required />
								<div className="invalid-feedback">
									Please provide a valid phone number.
								</div>
							</div>
							<div className="form-outline">
								<input type="text" className="form-control rounded-pill" id="otp" ref={UserOtpRef} placeholder='Enter OTP' required />
								<div className="invalid-feedback">Please enter OTP.</div>
							</div>

							<div className="form-check d-flex justify-content-center" >
								<input className="form-check-input me-2" type="checkbox" style={{ textAlign: 'center' }} value="" id="invalidCheck" required />
								<label className="form-check-label" htmlFor="invalidCheck">
									Agree to terms and conditions
								</label>
								<div className="invalid-feedback">
									You must agree before submitting.
								</div>

							</div>
							<div className="col-12" style={{ textAlign: 'center' }}>
								<>
									<div style={{ display: show ? "block" : "none" }} id="recaptcha-container"></div>
									<button className="btn btn-outline-info greyishColor darkerTextColor fw-bold rounded-pill mb-1" id="send-otp-btn" onClick={signin} style={{ marginBottom: "30px", marginRight: "20px" }} >
										Send OTP
									</button>
								</>
								<button className="btn btn-outline-info greyishColor darkerTextColor fw-bold rounded-pill mb-1" type="submit" id="signup-btn" style={{ marginBottom: "30px" }} >
									Signup
								</button>
							</div>
						</form>
						<hr className="w-75 mx-auto my-auto mt-3"></hr>
						<div className="d-flex justify-content-around align-items-center">
							<p className="mb-1 mt-2">
								Already a User ? <Link to="/login"> Login </Link>
							</p>
						</div>
						<div className="d-flex justify-content-around align-items-center">
							<p>
								<Link to="/signup-doctor"> Signup as Doctor </Link>
							</p>
						</div>

					</div>
				</div>
			</div>
		</>
	);
}
