import React, { useState, useEffect } from 'react'
import 'bootstrap/js/dist/carousel'
import { Link } from 'react-router-dom';
import '../assets/styles/newDesign.css';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

import dashboardDoctor from '../assets/images/dashboard/dashboardDoctor.png';
import bookAppointmentCardPic from '../assets/images/dashboard/docAndKidConsultation.png'
import uploadDocumentCardPic from '../assets/images/dashboard/macLappi.png';
import whyDoctorsJoinCard from '../assets/images/dashboard/docWithTab.png';
import whyPatientsJoinCard from '../assets/images/dashboard/womenLaptop.png';

import { Accordion } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Card } from 'react-bootstrap';

export default function Dashboard() {
	const [index, setIndex] = useState(0);
	const [id, setId] = useState();
	const { currentUser } = useAuth();
	const { isDoctor } = useAuth();
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

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	const [open, setOpen] = useState(false);

	return (
		<>
			<div className='dashboard-frame'>
				<div className='px-0 dashboard-rectangle h-100'>
					<div className='row h-100'>
						<div className='order-2 order-md-1 ps-0 col-sm-12 col-md-5 ps-md-5 pe-0 d-flex flex-column justify-content-around align-items-start h-100'>
							<span className='px-2 dashboard-headline display-4 mt-3 mt-md-4'>Book Offline Appointments Directly From Your Home</span>
							<span className='mx-3 dashboard-content h5 mt-3'>Med D makes booking offline doctor appointments easier and more flexible so that you never have to wait for your turn when visiting a doctor.</span>
							<button className='dashboard-knowmore mt-3 mb-3 mb-md-5 btn btn-outline-dark text-white button-color rounded-pill'>Know More</button>
						</div>
						<div className='order-1 order-md-2 col-sm-12 col-md-7 d-flex align-items-end'>
							<img className='dashboard-doctor' src={dashboardDoctor}></img>
							<svg className='amoeba' viewBox="0 0 3222 2639" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M2782.8 1037.52C2906.13 1254.29 3198.06 1386.27 3219.87 1634.72C3240.4 1868.67 3073.64 2102.86 2889.04 2248.09C2705.53 2392.47 2448.12 2380.07 2218.51 2422.55C2051.64 2453.42 1876.32 2407.18 1716.76 2464.95C1517.73 2537.01 1417.07 2663.16 1207.47 2633.66C1007.88 2605.57 669.527 2579.94 504 2464.95C326.621 2341.72 340.897 2279.53 201.341 2114.7C67.7495 1956.92 134.142 1713.58 102.481 1509.28C68.5243 1290.17 -25.6632 1077.76 6.64679 858.393C40.8518 626.164 117.977 380.595 291.942 222.966C465.757 65.4727 717.85 -13.5511 951.897 1.90528C1180.31 16.99 1331.19 283.323 1558.91 306.637C1764.08 327.641 1940.71 83.4054 2142.95 123.839C2336 162.436 2467.54 349.624 2580.46 510.873C2689.53 666.618 2688.77 872.254 2782.8 1037.52Z" fill="url(#paint0_linear_557_249)" />
								<defs>
									<linearGradient id="paint0_linear_557_249" x1="1122.76" y1="-105.454" x2="1912.05" y2="2604.57" gradientUnits="userSpaceOnUse">
										<stop stop-color="#2193B0" />
										<stop offset="1" stop-color="#6DD5ED" />
									</linearGradient>
								</defs>
							</svg>
						</div>
					</div>
				</div>
			</div>

			{isDoctor ? <>
			<div className='container bookAppointment-card'>
				<div className='row'>
					<div className='col-8 col-sm-6 d-flex'>
						<img src={bookAppointmentCardPic} className='bookAppointmentCard-image w-100'></img>
					</div>
					<div className='col-4 col-sm-6 d-flex flex-column justify-content-evenly bookAppointment-contentCol'>
						<span className='dashboard-card-headline mb-5`'>Make Appointment Slots</span>
						<span className='dashboard-card-content'>No more standing in queues, sitting in the waiting area. Skip the hassle and get your health checked up quickly with live tracking system.</span>
						<Link to="book-doctor-side">
							<button className='dashboard-card-button btn btn-dark text-white rounded-pill'>Create Slots</button>
						</Link>
					</div>
				</div>
			</div>
			<div className='container bookAppointment-card uploadDocument-card'>
				<div className='row'>
					<div className='col-4 col-sm-6 col-md-4 offset-md-1 d-flex flex-column justify-content-evenly uploadDocument-contentCol'>
						<span className='dashboard-card-headline'>Book Appointment For Patients</span>
						<span className='dashboard-card-content'>Save your medical records securely, so that you never misplace them again.Get 5GB of storage for free.</span>
						<Link to="appointment-editor">
							<button className='dashboard-card-button btn btn-dark text-white rounded-pill'>Book Appointment</button>
						</Link>
					</div>
					<div className='col-8 col-sm-6 offset-md-1 d-flex'>
						<img src={uploadDocumentCardPic} className='uploadDocumentCard-image w-100'></img>
					</div>
				</div>
			</div>
			<div className='container bookAppointment-card uploadDocument-card'>
				<div className='row'>
					<div className='col-4 col-sm-6 col-md-4 offset-md-1 d-flex flex-column justify-content-evenly uploadDocument-contentCol'>
						<span className='dashboard-card-headline'>Patient Queue</span>
						<span className='dashboard-card-content'>Save your medical records securely, so that you never misplace them again.Get 5GB of storage for free.</span>
						<Link to="patient-queue">
							<button className='dashboard-card-button btn btn-dark text-white rounded-pill'>Patient Queue</button>
						</Link>
					</div>
					<div className='col-8 col-sm-6 offset-md-1 d-flex'>
						<img src={uploadDocumentCardPic} className='uploadDocumentCard-image w-100'></img>
					</div>
				</div>
			</div>
			</> : <>
			<div className='container bookAppointment-card'>
				<div className='row'>
					<div className='col-8 col-sm-6 d-flex'>
						<img src={bookAppointmentCardPic} className='bookAppointmentCard-image w-100'></img>
					</div>
					<div className='col-4 col-sm-6 d-flex flex-column justify-content-evenly bookAppointment-contentCol'>
						<span className='dashboard-card-headline mb-5`'>Book Offline Appointments</span>
						<span className='dashboard-card-content'>No more standing in queues, sitting in the waiting area. Skip the hassle and get your health checked up quickly with live tracking system.</span>
						<Link to="offline-booking">
							<button className='dashboard-card-button btn btn-dark text-white rounded-pill'>Book Now</button>
						</Link>
					</div>
				</div>
			</div>
			<div className='container bookAppointment-card uploadDocument-card'>
				<div className='row'>
					<div className='col-4 col-sm-6 col-md-4 offset-md-1 d-flex flex-column justify-content-evenly uploadDocument-contentCol'>
						<span className='dashboard-card-headline'>Save Medical Records</span>
						<span className='dashboard-card-content'>Save your medical records securely, so that you never misplace them again.Get 5GB of storage for free.</span>
						<Link to="medicalRecords">
							<button className='dashboard-card-button btn btn-dark text-white rounded-pill'>Upload</button>
						</Link>
					</div>
					<div className='col-8 col-sm-6 offset-md-1 d-flex'>
						<img src={uploadDocumentCardPic} className='uploadDocumentCard-image w-100'></img>
					</div>
				</div>
			</div>
			</>}

			<div className='container why-us-container py-4 py-md-5 ps-4'>
				<div className='row w-100 mx-0'>
					<div className='col-md-6 d-flex flex-column align-self-center h-100'>
						<span className='why-us-heading'>Why Choose Our Clinic?</span>
						<span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr</span>

						<div class="row justify-content-center">
							<div className='rounded mt-md-4 col-5 text-center border text-white bg-dark d-flex flex-column siteGrowth-infoCards'>
								<span className='siteGrowth-infoCards-data'>25</span>
								<span>Certified Doctors</span>
							</div>
							<div className='rounded mt-md-4 offset-md-1 col-5 text-center border text-white bg-dark d-flex flex-column siteGrowth-infoCards'>
								<span className='siteGrowth-infoCards-data'>3</span>
								<span>Cities</span>
							</div>
							<div className='rounded mt-md-4 col-5 text-center border text-white bg-dark d-flex flex-column siteGrowth-infoCards'>
								<span className='siteGrowth-infoCards-data'>1500+</span>
								<span>Happy Patients</span>
							</div>
							<div className='rounded mt-md-4 offset-md-1 col-5 text-center border text-white bg-dark d-flex flex-column siteGrowth-infoCards'>
								<span className='siteGrowth-infoCards-data'>1900+</span>
								<span>Patients Cured</span>
							</div>
						</div>
					</div>
					<div className='col-md-6 d-flex flex-column mt-4 my-md-auto whyjoin-doc-pat-container'>
						<div className='row d-flex flex-row mb-2'>
							<div className='row' style={{ alignItems: 'center' }}>
								<div className='col h-100'>
									<div className="card mx-auto h-100 whyPatient-reason-card">
										<div className="card-body">
											<h4 className="card-title text-center">Patients</h4>
											<img className='whyJoin-cards' src={whyPatientsJoinCard}></img>
											{/* <p className="card-text text-white" >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p> */}
											{/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
										</div>
									</div>
								</div>
								{/* <div className='col-6'>
									<img className='whyJoin-cards' src={whyPatientsJoinCard}></img>
								</div> */}
							</div>
						</div>
						<div className='row d-flex flex-row mt-2'>
							<div className='row' style={{ alignItems: 'center' }}>
								<div className='col h-100'>
									<div className="card mx-auto h-100 whyDoctor-reason-card">
										<div className="card-body why-front">
											<h4 className="card-title text-center">Doctors</h4>
											<img className='whyJoin-cards' src={whyDoctorsJoinCard}></img>
											{/* <p className="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p> */}
											{/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
										</div>
									</div>
								</div>
								{/* <div className='col-6'>
									<img className='whyJoin-cards' src={whyDoctorsJoinCard}></img>
								</div> */}
							</div>
						</div>
					</div>
				</div>

			</div>

			{/* Testimonials */}
			<div className='container mt-5'>
				<div className='row text-center'>
					<h3>Testimonials</h3>
					<Carousel className='testimonials' style={{ height: '400px' }} variant='dark' activeIndex={index} onSelect={handleSelect}>
						<Carousel.Item className='testimonial-items'>
							<Card className='testimonial-cards'>
								<Card.Body>1.This is some text within a card body.</Card.Body>
							</Card>
						</Carousel.Item>

						<Carousel.Item className='testimonial-items'>
							<Card className='testimonial-cards'>
								<Card.Body>2.This is some text within a card body.</Card.Body>
							</Card>
						</Carousel.Item>

						<Carousel.Item className='testimonial-items'>
							<Card className='testimonial-cards'>
								<Card.Body>3.This is some text within a card body.</Card.Body>
							</Card>
						</Carousel.Item>
					</Carousel>
				</div>
			</div>

			<div className='container mt-5'>
				<div className='row text-center'>
					<h3>Frequently Asked Questions</h3>
					{/* <span className='w-75 mx-auto'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr</span> */}
				</div>
				<Accordion>
					<Accordion.Item eventKey="0">
						<Accordion.Header>Can I book appointment on behalf of someone else?</Accordion.Header>
						<Accordion.Body>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
							veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
							commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
							velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
							est laborum.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="1">
						<Accordion.Header>Do I need a referral to see a Physiotherapist?</Accordion.Header>
						<Accordion.Body>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
							veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
							commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
							velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
							est laborum.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="3">
						<Accordion.Header>Do you Have Venue Option for appointments?</Accordion.Header>
						<Accordion.Body>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
							veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
							commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
							velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
							est laborum.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="4">
						<Accordion.Header>What if I Have More questions that are not answered Here?</Accordion.Header>
						<Accordion.Body>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
							veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
							commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
							velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
							est laborum.
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</div>

		</>
	);
}


