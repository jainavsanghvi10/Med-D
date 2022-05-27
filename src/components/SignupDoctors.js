import React, { useRef, useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import firebase from 'firebase';
import { storage } from '../firebase';
import { state, cities, specialization } from './Arrays';

export default function SignupDoctors() {
	const firstNameRef = useRef();
	const lastNameRef = useRef();
	const emailRef = useRef();
	const cityRef = useRef();
	const stateRef = useRef();
	const specialityRef = useRef();
	const phoneNumberRef = useRef();
	const UserOtpRef = useRef();
	const { signup } = useAuth();
	const { currentUser } = useAuth();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const [final, setfinal] = useState('');
	const [show, setShow] = useState(true);
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
					City: cityRef.current.value.toLowerCase(),
					State: stateRef.current.value.toLowerCase(),
					Speciality: specialityRef.current.value.toLowerCase(),
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
	const signin = () => {
		console.log('otp sending');
		if (
			phoneNumberRef.current.value === '' ||
			phoneNumberRef.current.value.length < 10
		)
			return;

		let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
		auth
			.signInWithPhoneNumber("+91" + phoneNumberRef.current.value, verify)
			.then((result) => {
				setfinal(result);
				console.log('code sent');
				setShow(false);
			})
			.catch((err) => {
				console.log(err, 'er');
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
				console.log('Wrong code');
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
		console.log(stateRef.current.value, cityRef.current.value, specialityRef.current.value);

		const form = document.getElementById('signup-form');
		if (form.checkValidity()) {
			// console.log("valid form")
			ValidateOtp();
		}

		setLoading(false);
	}

	let stateDropdown = [];
	stateDropdown.push(<option key={"nostate"} defaultValue>Select State</option>);
	for (let i = 0; i < state.length; i++) {
		stateDropdown.push(
			<option key={"state" + i}>{state[i]}</option>
		);
	}
	let cityDropdown = [];
	cityDropdown.push(<option key={"nocity"} defaultValue>Select City</option>);
	for (let i = 0; i < cities.length; i++) {
		cityDropdown.push(
			<option key={"city" + i}>{cities[i]}</option>
		);
	}
	let specializationDropdown = [];
	specializationDropdown.push(<option key={"nospecialization"} defaultValue>Select Specialization</option>);
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
				{error && (
					<div className='console.log console.log-danger' role='console.log'>
						{error}
					</div>
				)}
				<form className='row g-3 needs-validation mt-0 px-0 mx-0' id='signup-form' onSubmit={handleSubmit} noValidate>
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

					<span className="text-center darkerTextColor fw-bold">Doctor Sign Up Form</span>
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
					<div className='form-outline'>
						<input
							type='text'
							className='form-control rounded-pill'
							id='phonenumber'
							ref={phoneNumberRef}
							placeholder='Enter Your Phone Number'
							// pattern="[0-9]{10}"
							required
						/>
						<div className='invalid-feedback'>
							Please provide a valid phone number.
						</div>
					</div>
					<div className='form-outline'>
						<select ref={stateRef} id="state-dropdown" className="rounded-pill mx-auto form-select" aria-label="Default select example">
							{stateDropdown}
						</select>

					</div>
					<div className='form-outline'>
						<select ref={cityRef} id="city-dropdown" className="rounded-pill mx-auto form-select" aria-label="Default select example">
							{cityDropdown}
						</select>
					</div>

					<div className='form-outline'>
						<select ref={specialityRef} id="specialization-dropdown" className="rounded-pill form-select" aria-label="Default select example">
							{specializationDropdown}
						</select>
					</div>

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
					</div>

					<div className='form-check d-flex justify-content-center'>
						<input
							className='form-check-input me-2'
							type='checkbox'
							style={{textAlign:'center'}}
							value=''
							id='invalidCheck'
							required
						/>
						<label className='form-check-label' htmlFor='invalidCheck'>
							Agree to terms and conditions
						</label>
						<div className='invalid-feedback'>
							You must agree before submitting.
						</div>
					</div>
					<div className='col-12' style={{ textAlign: 'center' }}>
						<>
							<div
								style={{ display: show ? 'block' : 'none' }}
								id='recaptcha-container'></div>
							<button
								className='btn btn-outline-info greyishColor darkerTextColor fw-bold rounded-pill'
								id='send-otp-btn'
								onClick={signin}
								style={{ marginBottom: '30px', marginRight: '20px' }}>
								Send OTP
							</button>
						</>
						<button
							className='btn btn-outline-info greyishColor darkerTextColor fw-bold rounded-pill'
							type='submit'
							id='signup-btn'
							style={{ marginBottom: '30px' }}>
							Signup
						</button>
					</div>
				</form>
				<div className='d-flex justify-content-around align-items-center mb-4'>
					<p>
						Already a Registered Doctor ? <Link to='/login-doctor'> Login </Link>
					</p>
				</div>
			</div>
		</div>
	);
}
