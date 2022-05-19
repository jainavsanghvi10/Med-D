import React, { useState, useEffect } from 'react'
import 'bootstrap/js/dist/carousel'
import { Link } from 'react-router-dom';
import '../assets/styles/customMade.css';
import DoctorBlack from '../assets/images/Doctor1Black.svg'
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
		if(currentUser && id == null){
			navigate({
				pathname: '/',
				search: `?id=${currentUser.uid}`})
		}
		//eslint-disable-next-line
	}, []);
	return (
		<>
			{/* <!--font-family--> */}
			<link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i,900,900i" rel="stylesheet" />
			<link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
			<link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet" />
			<div className='websiteColor' style={{height: '90vh'}}>
				<div className="row h-100 border-bottom border-5">
					<div className="w-50 p-0">
						<div className="websiteColor h-80 d-flex justify-content-center align-items-start flex-column pt-5 ps-5">
							<h1 className="display-4 fw-bold bigText p-4 ps-5 text-black">Book Offline <br></br>
								Appointments <br></br>
								Directly From Your <br></br>
								Phone
							</h1>
							<p className="ps-5 text-dark">Med D makes booking offline doctor appointments easier and <br></br>
								more flexible so that you never have to wait for <br></br>
								your turn when visiting a doctor.
							</p>
							<button className="btn btn-dark btn-outline-info ms-5 mb-5 rounded-pill">Learn More</button>
						</div>
					</div>
					<img src={DoctorBlack} className="w-50 img-fluid align-self-center" alt="Responsive image" />
				</div>
			</div>
			<div className="greyishColor">
				{/* <div className="gallery js-flickity pt-5" data-flickity-options='{ "wrapAround": true }' data-ride="carousel">
					<div className="gallery-cell">
						<div className="carousel-caption d-none d-md-block fw-bold fs-2">
							<h2>Refer and you both get a coupon worth 50% off!</h2>
							<button className="btn btn-light">REFER NOW</button>
						</div>
					</div>
					<div className="gallery-cell">
						<div className="carousel-caption d-none d-md-block fw-bold fs-2">
							<h2>Sign up and Get upto 50% off!!</h2>
						</div>
					</div>
					<div className="gallery-cell">
						<div className="carousel-caption d-none d-md-block fw-bold fs-2">
							<h2>You are in safe hands!!</h2>
							<button className="btn btn-light">Know more</button>
						</div>
					</div>
				</div> */}
				<div id="carouselExampleCaptions" className="carousel slide carousel-dark" data-bs-ride="carousel">
					<div className="carousel-indicators">
						<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
						<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
						<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
					</div>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img src={DoctorBlack} className="d-block w-50 mx-auto" alt="..."/>
								<div className="carousel-caption d-none d-md-block">
									<h5>First slide label</h5>
									<p>Some representative placeholder content for the first slide.</p>
								</div>
						</div>
						<div className="carousel-item">
							<img src={DoctorBlack} className="d-block w-50 mx-auto" alt="..."/>
								<div className="carousel-caption d-none d-md-block">
									<h5>Second slide label</h5>
									<p>Some representative placeholder content for the second slide.</p>
								</div>
						</div>
						<div className="carousel-item">
							<img src={DoctorBlack} className="d-block w-50 mx-auto" alt="..."/>
								<div className="carousel-caption d-none d-md-block">
									<h5>Third slide label</h5>
									<p>Some representative placeholder content for the third slide.</p>
								</div>
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
			</div>

			<div className="cards row mt-5 py-5 justify-content-center darkerWebsiteColor">
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
			</div>
		</>
	);
}
