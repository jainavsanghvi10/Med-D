import React, { useRef, useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import db, { auth } from '../firebase';
import firebase from 'firebase';
import { storage } from '../firebase';
import { state, cities, specialization } from './Arrays';

export default function SignupDoctors() {
	const firstNameRef = useRef();
	const lastNameRef = useRef();
	const emailRef = useRef();
	// const cityRef = useRef();
	// const stateRef = useRef();
	// const specialityRef = useRef();
	const phoneNumberRef = useRef();
	const UserOtpRef = useRef();
	const { signup } = useAuth();
	const { currentUser } = useAuth();
	const [errorMsg, setErrorMsg] = useState("");
	const [successMsg, setSuccessMsg] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const [final, setfinal] = useState('');
	const [show, setShow] = useState(true);
	const [otpDisplay, setOtpDisplay] = useState(false);
	const [userValidate, setUserValidate] = useState(false);

	useEffect(() => {
		if (userValidate) {
			firebase
				.firestore()
				.collection('DoctorData')
				.doc(currentUser.uid)
				.set({
					FirstName: firstNameRef.current.value.toLowerCase(),
					LastName: lastNameRef.current.value.toLowerCase(),
					Email: emailRef.current.value.toLowerCase(),
					Mobile: phoneNumberRef.current.value.toLowerCase(),
					Approved: false
				})
				.then(() => {
					console.log('User Added Succesfully!');
					navigate(`/?id=${currentUser.uid}`);
				})
				.catch((error) => {
					console.error('Error writing document: ', error);
				});
		}
		//eslint-disable-next-line
	}, [userValidate]);

	// Sent OTP
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
				console.log('Wrong code');
				setSuccessMsg("");
				setErrorMsg("Incorrect Otp")
			});
	}

	const uploadFiles = (file) => {
		console.log('Registering User');
		// if (!file) return;
		const storageRef = firebase
			.storage()
			.ref(storage, `/${currentUser.uid}/${file.name}`);
		firebase
			.storage()
			.uploadBytes(storageRef, file)
			.then((snapshot) => {
				console.log('User Registered!');
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
		// console.log("Helo there");
		// console.log(stateRef.current.value, cityRef.current.value, specialityRef.current.value);

		const form = document.getElementById('signup-form');
		if (form.checkValidity()) {
			// console.log("valid form")
			db.collection("DoctorData").where("Mobile", "==", phoneNumberRef.current.value)
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
					setErrorMsg("This User Already Exists");
				}
			})
			.catch((error) => {
				console.log("Error getting documents: ", error);
			});
		}

		setLoading(false);
	}

	let stateDropdown = [];
	stateDropdown.push(<option key={"nostate"} value="" disabled selected>Select State</option>);
	for (let i = 0; i < state.length; i++) {
		stateDropdown.push(
			<option key={"state" + i}>{state[i]}</option>
		);
	}
	let cityDropdown = [];
	cityDropdown.push(<option key={"nocity"} value="" disabled selected>Select City</option>);
	for (let i = 0; i < cities.length; i++) {
		cityDropdown.push(
			<option key={"city" + i}>{cities[i]}</option>
		);
	}
	let specializationDropdown = [];
	specializationDropdown.push(<option key={"nospecialization"} value="" disabled selected>Select Specialization</option>);
	for (let i = 0; i < cities.length; i++) {
		specializationDropdown.push(
			<option key={"special" + i}>{specialization[i]}</option>
		);
	}

	document.body.style.background = 'white';

	return (
		<div className='container my-5 ' style={{ maxWidth: '500px', position: 'relative' }}>
			<div className="shadow-lg row mt-0 pt-0">
				{/* <h1 className='mt-100 text-center' style={{ marginBottom: '50px' }}>
					Sign Up As Doctor
				</h1> */}
				<form className='row g-3 needs-validation mt-0 px-0 mx-0' id='signup-form' onSubmit={otpDisplay ? handleSubmit: signin} noValidate>
					<div className="col-6 text-center border mt-0 py-3 darkerTextColor greyishColor fw-bold fs-4">
						<Link to="/login" style={{textDecoration:'none'}}> <a type='button' className='w-100 darkerTextColor' style={{textDecoration:'none'}}>Login</a> </Link>
					</div>
					<div className="col-6 text-center border mt-0 py-3 btn-group dropdown darkerTextColor fw-bold fs-4">
						{/* <span type="button" className="dropdown-toggle w-100" data-bs-toggle="dropdown" aria-expanded="false"><u>Sign Up</u></span>
						<ul className="dropdown-menu">
							<Link to="/signup"><button className="dropdown-item darkerTextColor" type="button">As Patient</button></Link>
							<Link to="/signup-doctor"><button className="dropdown-item darkerTextColor" type="button">As Doctor</button></Link>
						</ul> */}
						<Link to="/signup"> <a type='button' className='w-100 darkerTextColor'>Signup</a> </Link>
					</div>

					<span className="text-center darkerTextColor fw-bold">Signup as a Healthcare Professional</span>
					{errorMsg &&
					<div className="alert alert-danger" role="alert">
						{errorMsg}
					</div>}
					{successMsg &&
					<div className="alert alert-success" role="alert">
						{successMsg}
					</div>}
					<div className='col-6 pe-1 mt-4'>
						<input type='text' className='form-control rounded-pill' placeholder='First Name' id='fname' ref={firstNameRef} required />
						<div className='valid-feedback'>Looks Good!</div>
					</div>
					<div className='col-6 ps-1 mt-4'>
						<input type='text' className='form-control rounded-pill' id='lname' ref={lastNameRef} placeholder='Last Name' required />
						<div className='valid-feedback'>Looks Good!</div>
					</div>

					<div className='form-outline'>
						<div className='input-group has-validation'>
							<input type='email' className='form-control rounded-pill' id='email' ref={emailRef} placeholder='Email' aria-describedby='inputGroupPrepend' />
							<div className='invalid-feedback'>Please choose a username.</div>
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
					{/* <div className='form-outline'>
						<select ref={stateRef} id="state-dropdown" className="rounded-pill mx-auto form-select" required>
							{stateDropdown}
						</select>

					</div>
					<div className='form-outline'>
						<select ref={cityRef} id="city-dropdown" className="rounded-pill mx-auto form-select" required>
							{cityDropdown}
						</select>
					</div>

					<div className='form-outline'>
						<select ref={specialityRef} id="specialization-dropdown" className="rounded-pill form-select" required>
							{specializationDropdown}
						</select>
					</div> */}
					
					{otpDisplay ?
					<div className='form-outline mb-4'>
						<input
							type='text'
							className='form-control rounded-pill'
							id='otp'
							ref={UserOtpRef}
							placeholder='Enter OTP'
							// pattern="[0-9]{6}"
							required
						/>
						<div className='invalid-feedback'>Please enter OTP.</div>
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
						Already a Registered Healthcare Professional ? <Link to="/login-doctor"> Login </Link>
					</p>
				</div>
				<div className="d-flex justify-content-around align-items-center">
					<p>
						<Link to="/signup"> Signup as a User </Link>
					</p>
				</div>
			</div>
		</div>
	);
}
