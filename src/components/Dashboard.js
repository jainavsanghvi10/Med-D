import React, { useState, useEffect } from 'react'
import 'bootstrap/js/dist/carousel'
import { Link } from 'react-router-dom';
import '../assets/styles/customMade.css';
import DoctorBlack from '../assets/images/undraw_doctor.svg'
import dashboardDoctor from '../assets/images/dashboard-doctor.jpeg'
import PercentOff50 from '../assets/images/50percentoff.png'
import PercentOff25 from '../assets/images/25percentoff.png'
import Refer100Off from '../assets/images/Refer100Off.png'
import ConsultOfflineDoc from '../assets/images/ConsultationOffilneDoc.jpeg'
import SaveMedicalRecords from '../assets/images/saveMedicalRecords.jpeg'
import saveFiles from '../assets/images/saveFiles.svg'
import events from '../assets/images/events.svg'
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
	const [id, setId] = useState();
	const { currentUser } = useAuth();
	const navigate = useNavigate();
	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		const id = params.get('id');
		setId(id);
		console.log(currentUser);
		if (currentUser && id == null) {
			navigate({
				pathname: '/',
				search: `?id=${currentUser.uid}`
			})
		}
		//eslint-disable-next-line
	}, []);

	let valueDisplays = document.querySelectorAll('.data-fact');
	let interval = 5000;
	valueDisplays.forEach((valueDisplay) => {
		let startValue = 0;
		let endValue = parseInt(valueDisplay.getAttribute('data-val'));
		console.log(endValue);
		let duration = Math.floor(interval / endValue);
		let counter = setInterval(function () {
			startValue += 1;
			valueDisplay.textContent = startValue;
			if (startValue == endValue) {
				clearInterval(counter);
			}
		}, duration);
	});

	return (
		<>
			{/* <!--font-family--> */}
			<link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i,900,900i" rel="stylesheet" />
			<link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
			<link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet" />
			<div style={{ height: '90vh' }}>
				<div className="row h-100 dashboardSlogan">
					<div className="col-6 p-0">
						<div className="h-80 d-flex justify-content-center align-items-start flex-column pt-5 ps-5">
							<h1 className="display-4 fw-bold bigText p-4 ps-5 text-white" style={{ fontSize: '8vh' }}>Book Offline <br></br>
								Appointments <br></br>
								Directly From Your <br></br>
								Phone
							</h1>
							<p className="ps-5 text-white" style={{ fontSize: '2.5vh' }}>Med D makes booking offline doctor appointments easier and <br></br>
								more flexible so that you never have to wait for <br></br>
								your turn when visiting a doctor.
							</p>
							<button className="btn btn-light btn-outline-info ms-5 mb-5 rounded-pill fw-bold">Learn More</button>
						</div>
					</div>
					<img src={dashboardDoctor} className="img-fluid align-self-center p-0 ml-auto border-left" style={{ height: '90vh', width: 'auto', marginLeft: 'auto' }} alt="Responsive image" />

				</div>
			</div>
			<div className='greyishColor pt-5'>
				<div className='shadow-lg darkerWebsiteColor row col-10 ps-3 mx-auto styleCarousel'>
					<div className="jumbotron col-6 p-4">
						<h1 className="display-5 fw-bold text-white">Book Offline Appointments</h1>
						<p className="lead text-white pt-2">No more standing in queues, sitting in the waiting area.<br></br>
							Skip the hassle and get your health checked up<br></br>
							quickly with live tracking system.<br></br>
						</p>
						<hr className="my-4"></hr>

						<Link to="/offline-booking">
							<button className="btn btn-light btn-outline-info rounded-pill fw-bold">BOOK NOW</button>
						</Link>

					</div>
					<img className='col-6 me-0 p-0 borderRight' src={ConsultOfflineDoc} alt="Responsive image"></img>
				</div>
			</div>
			<div className='greyishColor py-5'>
				<div className='shadow-lg darkerWebsiteColor row col-10 pe-3 mx-auto styleCarousel'>
					<img className='col-6 ms-0 p-0 borderLeft' src={SaveMedicalRecords} alt="Responsive image"></img>
					<div className="jumbotron col-6 p-4">
						<h1 className="display-5 fw-bold text-white">Save Your Medical Records</h1>
						<p className="lead text-white pt-2">No more standing in queues, sitting in the waiting area.<br></br>
							Skip the hassle and get your health checked up<br></br>
							quickly with live tracking system.<br></br>
						</p>
						<hr className="my-4"></hr>

						<Link to={"/medicalRecords?id=" + id}>
							<button className="btn btn-light btn-outline-info rounded-pill fw-bold">UPLOAD</button>
						</Link>

					</div>

				</div>
			</div>
			{/* <div className="greyishColor py-5">
				<div id="carouselExampleCaptions" className="carousel slide carousel-dark" data-bs-ride="carousel" style={{height:'75vh'}}>
					<div className="carousel-indicators">
						<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
						<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
						<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
					</div>
					<div className="carousel-inner h-100">
						<div className="carousel-item active h-100">
							<img src={PercentOff50} className="img-fluid d-block mx-auto w-100 h-auto align-middle" alt="..." />
						</div>
						<div className="carousel-item">
							<img src={PercentOff25} className="img-fluid d-block mx-auto w-100 h-auto " alt="..." />
						</div>
						<div className="carousel-item">
							<img src={Refer100Off} className="img-fluid d-block mx-auto w-75 " alt="..." />
						</div>
					</div>
					<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div> */}

			{/* Offers Carousel*/}
			<div id="carouselExampleIndicators" className="carousel carousel-dark pt-5 slide" data-ride="carousel">
					<ol className="carousel-indicators">
						<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
					</ol>
					<div className="carousel-inner" style={{ height: '50vh' }}>
						<div className="carousel-item active">
							<img className="d-block mx-auto w-auto thickBorder" style={{ height: '50vh' }} src={PercentOff25} alt="First slide"></img>
						</div>
						<div className="carousel-item">
							<img className="d-block mx-auto w-auto thickBorder" style={{ height: '50vh' }} src={PercentOff50} alt="Second slide"></img>
						</div>
						<div className="carousel-item">
							<img className="d-block mx-auto w-auto thickBorder" style={{ height: '50vh' }} src={Refer100Off} alt="Third slide"></img>
						</div>
					</div>
					<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						{/* <span className="sr-only text-black">Previous</span> */}
					</a>
					<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						{/* <span className="sr-only text-black border rounded">Next</span> */}
					</a>
				</div>

			<div className='container py-5'>
				<div className='row d-flex flex-row justify-content-around' style={{ color: '#40B2C1' }}>
					<div className='col-3 bg-white rounded-circle d-flex justify-content-center align-items-center flex-column' style={{ height: '30vh', width: '30vh' }}>
						<h2 className='fw-bold data-fact' style={{ fontSize: '5vh' }} data-val='1500'>0</h2>
						<h3 style={{ fontSize: '3vh' }}>Happy Patients</h3>
						<span className="material-icons">
							emoji_emotions
						</span>

					</div>
					<div className='col-3 bg-white rounded-circle d-flex justify-content-center align-items-center flex-column' style={{ height: '30vh', width: '30vh' }}>
						<h2 className='fw-bold data-fact' style={{ fontSize: '5vh' }} data-val='1000'>0</h2>
						<h3 style={{ fontSize: '3vh' }}>Certified Doctors</h3>
						<span className="material-icons">
							medication
						</span>
					</div>
					<div className='col-3 bg-white rounded-circle d-flex justify-content-center align-items-center flex-column' style={{ height: '30vh', width: '30vh' }}>
						<h2 className='fw-bold data-fact' style={{ fontSize: '5vh' }} data-val='3'>0</h2>
						<h3 style={{ fontSize: '3vh' }}>Cities</h3>
						<span className="material-icons">
							apartment
						</span>
					</div>
				</div>
				{/* Our Happy Customers */}
				<div id="HappyCustomer" className="carousel slide" data-bs-ride="carousel">
					<div className="carousel-indicators">
						<button type="button" data-bs-target="#HappyCustomer" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
						<button type="button" data-bs-target="#HappyCustomer" data-bs-slide-to="1" aria-label="Slide 2"></button>
						<button type="button" data-bs-target="#HappyCustomer" data-bs-slide-to="2" aria-label="Slide 3"></button>
					</div>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<div className='row styleCarousel mx-auto darkerWebsiteColor mt-5 pb-5 w-75'>
								<h2 className='text-white fw-bold text-center py-2'>Our Happy Customers</h2>
								<h5 className='text-white text-center py-3'>“Perfect for people who have to take hours from their work just for a consultation with a doctor.”
								</h5>
								<div className='text-center align-middle'>

									<span className="material-icons text-white align-middle" style={{ fontSize: '40px' }}>
										account_circle
									</span>
									<span className='text-white fw-bold align-middle' style={{ fontSize: '15px' }}>ShahRukh Khan</span>
								</div>

							</div>
						</div>
						<div className="carousel-item">
							<div className='row styleCarousel mx-auto darkerWebsiteColor mt-5 pb-5 w-75'>
								<h2 className='text-white fw-bold text-center py-2'>Our Happy Customers</h2>
								<h5 className='text-white text-center py-3'>"Helped me Save a lot of time during regular checkups."</h5>
								<div className='text-center align-middle'>

									<span className="material-icons text-white align-middle" style={{ fontSize: '40px' }}>
										account_circle
									</span>
									<span className='text-white fw-bold align-middle' style={{ fontSize: '15px' }}>ShahRukh Khan</span>
								</div>

							</div>
						</div>
						<div className="carousel-item">
							<div className='row styleCarousel mx-auto darkerWebsiteColor mt-5 pb-5 w-75'>
								<h2 className='text-white fw-bold text-center py-2'>Our Happy Customers</h2>
								<h5 className='text-white text-center py-3'>"This is a dummy text."</h5>
								<div className='text-center align-middle'>

									<span className="material-icons text-white align-middle" style={{ fontSize: '40px' }}>
										account_circle
									</span>
									<span className='text-white fw-bold align-middle' style={{ fontSize: '15px' }}>ShahRukh Khan</span>
								</div>

							</div>
						</div>
					</div>
					<button className="carousel-control-prev" type="button" data-bs-target="#HappyCustomer" data-bs-slide="prev">
						<span className="carousel-control-prev-icon websiteColor" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="carousel-control-next" type="button" data-bs-target="#HappyCustomer" data-bs-slide="next">
						<span className="carousel-control-next-icon websiteColor" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>

				
			</div>

			{/* <div className="cards row mt-5 py-5 justify-content-center">
				<div className="card py-3 w-25 styleCarousel mx-5 border-top-0 border-dark border-4 bg-light">
					<img className="card-img-top w-75 align-self-center" src={events} alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title">Book Offline Appointment</h5>
						<p className="card-text">This is a wider card with supporting text below as a natural lead-in.</p>

					</div>
					<Link to="/offline-booking">
						<button className="btn btn-dark w-100">Know More</button>
					</Link>
				</div>

				<div className="card py-3 w-25 styleCarousel mx-5 border-top-0 border-dark border-4 bg-light">
					<img className="card-img-top w-75 align-self-center" src={saveFiles} alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title">Save Your Medical Records</h5>
						<p className="card-text">This content is a little bit longer.</p>

					</div>
					<Link to={"/medicalRecords?id=" + id}>
						<button className="btn btn-dark w-100">Know More</button>
					</Link>
				</div>
			</div> */}
		</>
	);
}
