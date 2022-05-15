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
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const cityRef = useRef();
	const stateRef = useRef();
	const specialityRef = useRef();
	const phoneNumberRef = useRef();
	const UserOtpRef = useRef();
	const { signup } = useAuth();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const [authMethod, setAuthMethod] = useState('email');
	const [final, setfinal] = useState('');
	const [show, setShow] = useState(true);
	const [userValidate, setUserValidate] = useState(false);

	useEffect(() => {
		if(userValidate){
			firebase
				.firestore()
				.collection('DoctorData')
				.doc(phoneNumberRef.current.value)
				.set({
					FirstName: firstNameRef.current.value.toLowerCase(),
					LastName: lastNameRef.current.value.toLowerCase(),
					City: cityRef.current.value.toLowerCase(),
					State: stateRef.current.value.toLowerCase(),
					Speciality: specialityRef.current.value.toLowerCase(),
					Email: emailRef.current.value.toLowerCase(),
					Mobile: phoneNumberRef.current.value.toLowerCase()
				})
				.then(() => {
					console.log('User Added Succesfully!');
					navigate(`/?id=${phoneNumberRef.current.value.hashCode()}`);
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
			.signInWithPhoneNumber(phoneNumberRef.current.value, verify)
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
	String.prototype.hashCode = function () {
		var hash = 0,
			i,
			chr;
		if (this.length === 0) return hash;
		for (i = 0; i < this.length; i++) {
			chr = this.charCodeAt(i);
			hash = (hash << 5) - hash + chr;
			hash |= 0; // Convert to 32bit integer
		}
		return hash;
	};
	const uploadFiles = (file) => {
		console.log('Registering User');
		// if (!file) return;
		const storageRef = firebase
			.storage()
			.ref(storage, `/${phoneNumberRef.current.value.hashCode()}/${file.name}`);
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
			if (authMethod === 'email') {
				if (passwordRef.current.value !== passwordConfirmRef.current.value) {
					return setError('Passwords do not match');
				}

				try {
					// console.log("Helo there");

					setError('');
					setLoading(true);

					firebase
						.auth()
						.createUserWithEmailAndPassword(
							emailRef.current.value,
							passwordRef.current.value
						)
						.then((userCredential) => {
							// Signed in
							var user = userCredential.user;
							console.log('User Added Succesfully!');
							// ...
						})
						.catch((error) => {
							var errorCode = error.code;
							var errorMessage = error.message;
							console.log(errorMessage);
							// ..
						});
					// await signup(emailRef.current.value, passwordRef.current.value);
					// console.log("Helo there");

					firebase
						.firestore()
						.collection('DoctorData')
						.doc(phoneNumberRef.current.value)
						.set({
							FirstName: firstNameRef.current.value.toLowerCase(),
							LastName: lastNameRef.current.value.toLowerCase(),
							City: cityRef.current.value.toLowerCase(),
							State: stateRef.current.value.toLowerCase(),
							Speciality: specialityRef.current.value.toLowerCase(),
							Email: emailRef.current.value.toLowerCase(),
							Mobile: phoneNumberRef.current.value.toLowerCase()
							
						})
						.then(() => {
							console.log('User Added Succesfully!');
							// console.log("Document successfully written!");
						})
						.catch((error) => {
							console.error('Error writing document: ', error);
						});
					//write here
					console.log('OTP verified');

					firebase
					.database()
            		.ref(`Doctors/`+ phoneNumberRef.current.value.toLowerCase()).update({
						DoctorID: phoneNumberRef.current.value.toLowerCase(),
						City: cityRef.current.value.toLowerCase(),
						State: stateRef.current.value.toLowerCase(),
						Speciality: specialityRef.current.value.toLowerCase() 

            		});
					console.log("Registering User")
					
					const file = 'userTest';
					console.log(phoneNumberRef.current.value.hashCode());
					const storageRef = firebase
						.storage()
						.ref()
						.child(`${phoneNumberRef.current.value.hashCode()}/${file}`);
					storageRef.put('').then((snapshot) => {
						console.log('Folder Created');
					});
					// firebase.storage().uploadBytes(storageRef, file).then((snapshot) => {
					// console.log('User Registered!');
					// }).then(() => { alert("folder created")})
					// .catch((error) => {console.error(error)})
					// uploadFiles('');
					navigate(`/?id=${phoneNumberRef.current.value.hashCode()}`);
				} catch {
					setError('Failed to create an account');
				}
			}
			if (authMethod == 'otp') {
				ValidateOtp();
			}
		}

		setLoading(false);
	}

	let stateDropdown = [];
	stateDropdown.push(<option key={"nostate"} defaultValue>Select State</option>);
	for(let i=0;i<state.length;i++){
		stateDropdown.push(
			<option key={"state" + i}>{state[i]}</option>
		);
	}
	let cityDropdown = [];
	cityDropdown.push(<option key={"nocity"} defaultValue>Select City</option>);
	for(let i=0;i<cities.length;i++){
		cityDropdown.push(
			<option key={"city" + i}>{cities[i]}</option>
		);
	}
	let specializationDropdown = [];
	specializationDropdown.push(<option key={"nospecialization"} defaultValue>Select City</option>);
	for(let i=0;i<cities.length;i++){
		specializationDropdown.push(
			<option key={"special" + i}>{specialization[i]}</option>
		);
	}
	

	return (
		<div
			className='container-md'
			style={{ maxWidth: '500px', position: 'relative', marginTop: '100px' }}>
			<h1 className='mt-100 text-center' style={{ marginBottom: '50px' }}>
				Sign Up As Doctor
			</h1>
			{error && (
				<div className='console.log console.log-danger' role='console.log'>
					{error}
				</div>
			)}
			<form
				className='row g-3 needs-validation'
				id='signup-form'
				onSubmit={handleSubmit}
				noValidate>
				<div className='col-md-6'>
					<label htmlFor='validationCustom03' className='form-label'>
						First Name
					</label>
					<input
						type='text'
						className='form-control'
						id='fname'
						ref={firstNameRef}
						required
					/>
					<div className='valid-feedback'>Looks Good!</div>
				</div>
				<div className='col-md-6'>
					<label htmlFor='validationCustom03' className='form-label'>
						Last Name
					</label>
					<input
						type='text'
						className='form-control'
						id='lname'
						ref={lastNameRef}
						required
					/>
					<div className='valid-feedback'>Looks Good!</div>
				</div>

				{/* <div className='col-md-6'>
					<label htmlFor='validationCustom03' className='form-label'>
						City
					</label>
					<input
						type='text'
						className='form-control'
						id='city'
						ref={cityRef}
						required
					/>
					<div className='valid-feedback'>Looks Good!</div>
				</div> */}

				{/* <div className='col-md-6'>
					<label htmlFor='validationCustom03' className='form-label'>
						State
					</label>
					<input
						type='text'
						className='form-control'
						id='state'
						ref={stateRef}
						required
					/>
					<div className='valid-feedback'>Looks Good!</div>
				</div> */}

				{/* <div className='col-md-6'>
					<label htmlFor='validationCustom03' className='form-label'>
						Speciality
					</label>
					<input
						type='text'
						className='form-control'
						id='speciality'
						ref={specialityRef}
						required
					/>
					<div className='valid-feedback'>Looks Good!</div>
				</div> */}

				<div className='form-outline mb-4'>
					<label htmlFor='validationCustomUsername' className='form-label'>
						Email
					</label>
					<div className='input-group has-validation'>
						{authMethod === 'email' ? (
							<input
								type='email'
								className='form-control'
								id='email'
								ref={emailRef}
								placeholder='abc@gmail.com'
								aria-describedby='inputGroupPrepend'
								required
							/>
						) : (
							<input
								type='email'
								className='form-control'
								id='email'
								ref={emailRef}
								placeholder='abc@gmail.com (optional)'
								aria-describedby='inputGroupPrepend'
							/>
						)}
						<div className='invalid-feedback'>Please choose a username.</div>
					</div>
				</div>
				<div className='form-outline mb-4'>
					<label htmlFor='validationCustom03' className='form-label'>
						Phone Number
					</label>
					<input
						type='text'
						className='form-control'
						id='phonenumber'
						ref={phoneNumberRef}
						// pattern="[0-9]{10}"
						required
					/>
					<div className='invalid-feedback'>
						Please provide a valid phone number.
					</div>
				</div>

				<label htmlFor="state-dropdown">State</label>
				<select ref={stateRef} id="state-dropdown" className="form-select" aria-label="Default select example">
					{stateDropdown}
				</select>
				<label htmlFor="city-dropdown">City</label>
				<select ref={cityRef} id="city-dropdown" className="form-select" aria-label="Default select example">
					{cityDropdown}
				</select>
				<label htmlFor="specialization-dropdown">Specialization</label>
				<select ref={specialityRef} id="specialization-dropdown" className="form-select" aria-label="Default select example">
					{specializationDropdown}
				</select>

				{authMethod === 'otp' ? (
					<div className='form-outline mb-4'>
						<label htmlFor='validationCustom03' className='form-label'>
							OTP
						</label>
						<input
							type='text'
							className='form-control'
							id='otp'
							ref={UserOtpRef}
							// pattern="[0-9]{6}"
							required
						/>
						<div className='invalid-feedback'>Please enter OTP.</div>
					</div>
				) : (
					<>
						<div className='form-outline mb-4'>
							<label className='form-label'> Password </label>
							<input
								type='password'
								id='pass'
								className='form-control form-control-lg'
								ref={passwordRef}
								required
							/>
						</div>
						<div className='form-outline mb-4'>
							<label className='form-label'> Confirm Password </label>
							<input
								type='password'
								id='confirmpass'
								className='form-control form-control-lg'
								ref={passwordConfirmRef}
								required
							/>
						</div>
					</>
				)}
				<div className='col-12'>
					<div className='form-check'>
						<input
							className='form-check-input'
							type='checkbox'
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
				</div>
				<div style={{ marginTop: '20px' }}>
					<input
						type='radio'
						id='emailSelect'
						name='fav_language'
						value='checked'
						onClick={() => setAuthMethod('email')}
					/>
					<label htmlFor='email'>Signup with Email</label>
					<input
						type='radio'
						id='otpSelect'
						name='fav_language'
						value='waschecked'
						onClick={() => setAuthMethod('otp')}
						style={{ marginLeft: '15px' }}
					/>
					<label htmlFor='otp'>Signup with OTP</label>
				</div>d
				<div className='col-12'>
					{authMethod === 'otp' ? (
						<>
							<div
								style={{ display: show ? 'block' : 'none' }}
								id='recaptcha-container'></div>
							<button
								className='btn btn-primary'
								id='send-otp-btn'
								onClick={signin}
								style={{ marginBottom: '30px', marginRight: '20px' }}>
								Send OTP
							</button>
						</>
					) : (
						<></>
					)}
					<button
						className='btn btn-primary'
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
	);
}
