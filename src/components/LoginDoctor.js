import React, { useRef, useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import firebase from "firebase";
import { storage } from "../firebase";

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
			navigate(`/?id=${currentUser.uid}`);
		}
		//eslint-disable-next-line
	}, [userValidate]);

	// Sent OTP
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
	// Validate OTP
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
		// if (!file) return;
		const storageRef = firebase
			.storage()
			.ref(storage, `/${currentUser.uid}/${file.name}`);
		firebase
			.storage()
			.uploadBytes(storageRef, file)
			.then((snapshot) => {
				console.log("User Registered!");
			});
		// const uploadTask = uploadBytesResumable(sotrageRef, file);

		// uploadTask.on(
		// 	'state_changed',
		// 	(snapshot) => {
		// 		const prog = Math.round(
		// 			(snapshot.bytesTransferred / snapshot.totalBytes) * 100
		// 		);
		// 		setProgress(prog);
		// 	},
		// 	(error) => console.log(error),
		// );
	};

	async function handleSubmit(e) {
		e.preventDefault();

		const form = document.getElementById("signup-form");
		if (form.checkValidity()) {
			// console.log("valid form")
			ValidateOtp();
		}

		setLoading(false);
	}

	document.body.style.background = 'white';

	return (
		<div className='FormsHeightMobile' style={{ height: '90vh' }}>
			<div id='loginContainer' className="container h-100 mt-0 mb-0 d-flex align-items-center" style={{ width: '35vw' }}>
				<div className="shadow-lg row mt-0 pt-0">
					{/* <h1 className="mt-100 text-center" style={{ marginBottom: "50px" }}>
						Sign Up
					</h1> */}
					{error && (
						<div className="console.log console.log-danger" role="console.log">
							{error}
						</div>
					)}
					<form
						className="row g-3 needs-validation mt-0 px-0 mx-0"
						id="signup-form"
						onSubmit={handleSubmit}
						noValidate
					>
						<div className="col-6 text-center border mt-0 py-3 darkerTextColor fw-bold fs-4">
							<Link to="/login"> <a type='button' className='w-100 darkerTextColor'>Login</a> </Link>
						</div>
						<div className="col-6 text-center border mt-0 py-3 btn-group dropdown greyishColor darkerTextColor fw-bold fs-4">
							<span type="button" className="dropdown-toggle w-100" data-bs-toggle="dropdown" aria-expanded="false"><u>Sign Up</u></span>
							<ul className="dropdown-menu">
								<Link to="/signup"><button className="dropdown-item darkerTextColor" type="button">As Patient</button></Link>
								<Link to="/signup-doctor"><button className="dropdown-item darkerTextColor" type="button">As Doctor</button></Link>
							</ul>
						</div>

						<span className="text-center darkerTextColor fw-bold">Doctor Login Form</span>
						<div className="form-outline mb-2">
							<input
								type="text"
								className="form-control rounded-pill"
								placeholder="Enter Your Phone Number"
								id="phonenumber"
								ref={phoneNumberRef}
								required
							/>
							<div className="invalid-feedback">
								Please provide a valid phone number.
							</div>
						</div>
						<div className="form-outline mb-4">
							<input
								type="text"
								className="form-control rounded-pill"
								placeholder="Enter OTP"
								id="otp"
								ref={UserOtpRef}
								// pattern="[0-9]{6}"
								required
							/>
							<div className="invalid-feedback">Please enter OTP.</div>
						</div>
						<div className="form-check  d-flex justify-content-center">
							<input
								className="form-check-input me-2"
								type="checkbox"
								value=""
								id="invalidCheck"
								required
							/>
							<label className="form-check-label" htmlFor="invalidCheck">
								Agree to terms and conditions
							</label>
							<div className="invalid-feedback">
								You must agree before submitting.
							</div>
						</div>
						<div className="col-12" style={{ textAlign: 'center' }}>
							<>
								<div
									style={{ display: show ? "block" : "none" }}
									id="recaptcha-container"
								></div>
								<button
									className="btn btn-outline-info greyishColor darkerTextColor fw-bold rounded-pill"
									id="send-otp-btn"
									onClick={signin}
									style={{ marginBottom: "20px", marginRight: "20px" }}
								>
									Send OTP
								</button>
							</>
							<button
								className="btn btn-outline-info greyishColor darkerTextColor fw-bold rounded-pill"
								type="submit"
								id="signup-btn"
								style={{ marginBottom: "20px" }}
							>
								Login
							</button>
						</div>
					</form>
					<hr className="w-75 mx-auto my-auto mt-3"></hr>
					<div className="d-flex justify-content-around align-items-center">
						<p className="mb-1 mt-2">
							Register as Doctor <Link to="/signup-doctor"> Signup </Link>
						</p>
					</div>
					<div className="d-flex justify-content-around align-items-center mb-4">
						<p>
							<Link to="/login"> Login as Patient </Link>
						</p>
					</div>
				</div>
			</div >
		</div >
	);
}