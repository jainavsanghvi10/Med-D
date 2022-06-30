import React, { useRef, useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

import { Link, useNavigate } from "react-router-dom";
import db, { auth } from "../firebase";
import firebase from "firebase";
import { storage } from "../firebase";

import signUpImage from '../assets/images/signUpPage.png';

export default function Signup() {
	const firstNameRef = useRef();
	const lastNameRef = useRef();
	const emailRef = useRef();
	const phoneNumberRef = useRef();
	const UserOtpRef = useRef();
	const [errorMsg, setErrorMsg] = useState("");
	const [successMsg, setSuccessMsg] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const { currentUser } = useAuth();
	const [final, setfinal] = useState("");
	const [show, setShow] = useState(true);
	const [otpDisplay, setOtpDisplay] = useState(false);
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


	const signin = (e) => {
		console.log("....")
		e.preventDefault();
		const form = document.getElementById("signup-form");
		if (form.checkValidity()) {
			if (
				phoneNumberRef.current.value === "" ||
				phoneNumberRef.current.value.length != 10
			){
				setErrorMsg("Enter a valid mobile number");
				return;
			}

			console.log("otp sending");
			let verify = new firebase.auth.RecaptchaVerifier("recaptcha-container");
			auth
				.signInWithPhoneNumber("+91" + phoneNumberRef.current.value, verify)
				.then((result) => {
					setfinal(result);
					console.log("code sent");
					setOtpDisplay(true);
					setShow(false);
					setErrorMsg("");
					setSuccessMsg("Otp Sent Successfully");
				})
				.catch((err) => {
					console.log(err, "er");
					window.location.reload();
				});
		}
		else{
			console.log("Invalid Form");
			setErrorMsg("Please Fill the required fields");
		}
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
				setSuccessMsg("");
				setErrorMsg("Incorrect Otp");
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
			db.collection("UserData").where("Mobile", "==", phoneNumberRef.current.value)
			.get()
			.then((querySnapshot) => {
				let alreadyRegistered=false;
				querySnapshot.forEach((doc) => {
					console.log(doc.id, " => ", doc.data());
					alreadyRegistered=true;
				});
				if(!alreadyRegistered)
					ValidateOtp();
				else{
					console.log("The number is already registered!!")
					setErrorMsg("This User Already Exists!!");
				}
			})
			.catch((error) => {
				console.log("Error getting documents: ", error);
			});
		}

		setLoading(false);
	}
	document.body.style.background = 'white';


	return (
		<>
			<div className='FormsHeightMobile' style={{ height: '90vh' }}>
				<div id='signupContainer' className="container h-100 mt-0 mb-0 d-flex align-items-center" style={{ width: '35vw' }}>
					<div className="shadow-lg row mt-0 pt-0">
						<form className="row g-3 needs-validation mt-0 px-0 mx-0" id="signup-form" onSubmit={otpDisplay ? handleSubmit: signin} noValidate>
							{/* NavBar For Signup Login options */}
							<div className="col-6 text-center border mt-0 py-3 darkerTextColor greyishColor fw-bold fs-4">
							<Link to="/login" style={{textDecoration:'none'}}> <a type='button' className='w-100 darkerTextColor' style={{textDecoration:'none'}}>Login</a> </Link>
							</div>
							<div className="col-6 text-center border mt-0 py-3 btn-group dropdown darkerTextColor fw-bold fs-4">
								{/* <span type="button" className="dropdown-toggle w-100" data-bs-toggle="dropdown" aria-expanded="false"><u>Sign Up</u></span>
								<ul className="dropdown-menu">
									<Link to="/signup"><button className="dropdown-item darkerTextColor" type="button">As Patient</button></Link>
									<Link to="/signup-doctor"><button className="dropdown-item darkerTextColor" type="button">As Doctor</button></Link>
								</ul> 
								<Link to="/signup"> <a type='button' className='w-100 darkerTextColor'>Signup</a> </Link>*/}
								<Link to="/signup"> <a type='button' className='w-100 darkerTextColor'>Signup</a> </Link>
							</div>

							<span className="text-center darkerTextColor fw-bold">User Sign Up Form</span>
							{errorMsg &&
							<div className="alert alert-danger" role="alert">
								{errorMsg}
							</div>}
							{successMsg &&
							<div className="alert alert-success" role="alert">
								{successMsg}
							</div>}
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
									<input type="email" className="form-control rounded-pill" id="email" ref={emailRef} placeholder="Email (optional)" aria-describedby="inputGroupPrepend" />
									<div className="invalid-feedback">Please choose a username.</div>
								</div>
							</div>
							{!otpDisplay ?
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
						</div> :
						<div className="form-outline mb-2">
							<input
								type="text"
								className="form-control rounded-pill"
								placeholder="Enter Your Phone Number"
								id="phonenumber"
								ref={phoneNumberRef}
								value={phoneNumberRef.current.value}
								disabled
							/>
						</div>}
							{otpDisplay ? 
							<div className="form-outline">
								<input type="text" className="form-control rounded-pill" id="otp" ref={UserOtpRef} placeholder='Enter OTP' required />
								<div className="invalid-feedback">Please enter OTP.</div>
							</div> : null}

							<div className="col-12" style={{ textAlign: 'center' }}>
								<>
									<div style={{ display: show ? "block" : "none" }} id="recaptcha-container"></div>
									{!otpDisplay ?
									<button className="btn btn-outline-info greyishColor darkerTextColor fw-bold rounded-pill mb-1" 
										id="send-otp-btn" 
										style={{ marginBottom: "30px", marginRight: "20px" }} 
										type={otpDisplay ? "button" : "submit"}>
										Send OTP
									</button> : null}
								</>
								{otpDisplay ?
								<button className="btn btn-outline-info greyishColor darkerTextColor fw-bold rounded-pill mb-1" type="submit" id="signup-btn" style={{ marginBottom: "30px" }} >
									Signup
								</button> : null}
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
								<Link to="/signup-doctor"> Signup as a Healthcare Professional </Link>
							</p>
						</div>

					</div>
				</div>
			</div>
		</>
	);
}
