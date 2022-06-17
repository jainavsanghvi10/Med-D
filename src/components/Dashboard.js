import React, { useState, useEffect } from 'react'
import 'bootstrap/js/dist/carousel'
import { Link } from 'react-router-dom';
import '../assets/styles/newDesign.css';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

import dashboardDoctor from '../assets/images/dashboard/dashboardDoctor.png';
import bookAppointmentCardPic from '../assets/images/dashboard/docAndKidConsultation.png'
import uploadDocumentCardPic from '../assets/images/dashboard/macLappi.png';
import whyDoctorsJoinCard from '../assets/images/dashboard/doctorHandDirecting.png';
import whyPatientsJoinCard from '../assets/images/dashboard/womenLaptop.png';

import { Accordion } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Card } from 'react-bootstrap';

export default function Dashboard() {
	const [index, setIndex] = useState(0);
	const [id, setId] = useState();
	const { currentUser } = useAuth();
	const {isDoctor} = useAuth();
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
	return (
		<>
			<div className='dashboard-frame'>
				<div className='container px-0 dashboard-rectangle h-100'>
					<div className='row h-100'>
						<div className='col-5 ps-4 ps-sm-5 col-sm-6 col-md-5 ps-md-5 pe-0 d-flex flex-column justify-content-around align-items-start h-100'>
							<span className='dashboard-headline mt-3 mt-md-4'>Book Offline Appointments Directly From Your Home</span>
							<span className='dashboard-content mt-3'>Med D makes booking offline doctor appointments easier and more flexible so that you never have to wait for your turn when visiting a doctor.</span>
							<button className='dashboard-knowmore mt-3 mb-3 mb-md-5 btn btn-outline-dark text-white button-color rounded-pill'>Know More</button>
						</div>
						<div className='col-7 col-sm-6 col-md-7 d-flex align-items-end'>
							<svg className='ps-0 ms-0 amoeba' width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g className='amoeba-path' style={{ mixBlendMode: 'color-burn' }}>
									<path fillRule="evenodd" clipRule="evenodd" d="M576.235 145.045C717.632 97.1924 857.731 -52.8468 988.323 19.5265C1118.65 91.7511 1084.41 286.742 1099.47 435.018C1111.94 557.819 1142.72 692.604 1066.55 789.684C993.777 882.423 857.378 867.678 741.815 890.827C630.418 913.142 524.392 951.8 415.267 920.146C257.189 874.291 47.3727 837.195 6.79823 677.617C-33.7741 518.047 129.615 381.88 249.822 269.455C338.239 186.762 461.577 183.848 576.235 145.045Z" fill="url(#paint0_linear_227_1132)" />
								</g>
								<defs>
									<linearGradient id="paint0_linear_227_1132" x1="471.531" y1="93.7829" x2="656.14" y2="925.27" gradientUnits="userSpaceOnUse">
										<stop stopColor="#104069" />
										<stop offset="0.630208" stopColor="#222065" />
									</linearGradient>
								</defs>
							</svg>
							<img className='dashboard-doctor' src={dashboardDoctor}></img>
						</div>
					</div>
				</div>
			</div>

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

			<div className='container why-us-container py-4 ps-4'>
				<div className='row w-100 mx-0'>
					<div className='col-md-6 d-flex flex-column align-self-center h-100'>
						<span className='why-us-heading'>Why Choose Our Clinic?</span>
						<span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr</span>
						{/* <div className='container'>
							<div className='row'>
								<div className='col d-flex flex-column'>
									<span>25</span>
									<span>Certified Doctors</span>
								</div>
								<div className='col d-flex flex-column'>
									<span>3</span>
									<span>Cities</span>
								</div>
							</div>
							<div className='row'>
								<div className='col d-flex flex-column'>
									<span>1500+</span>
									<span>Happy Patients</span>
								</div>
								<div className='col d-flex flex-column'>
									<span>1900+</span>
									<span>Patients Cured</span>
								</div>
							</div>
						</div> */}
						{/* <div class="container h-75"> */}
						<div class="row g-2 align-center">
							<div className='mt-md-4 col-5 text-center border bg-light d-flex flex-column siteGrowth-infoCards'>
								<span className='siteGrowth-infoCards-data'>25</span>
								<span>Certified Doctors</span>
							</div>
							<div className='mt-md-4 offset-1 col-5 text-center border bg-light d-flex flex-column siteGrowth-infoCards'>
								<span className='siteGrowth-infoCards-data'>3</span>
								<span>Cities</span>
							</div>
							<div className='mt-md-4 col-5 text-center border bg-light d-flex flex-column siteGrowth-infoCards'>
								<span className='siteGrowth-infoCards-data'>1500+</span>
								<span>Happy Patients</span>
							</div>
							<div className='mt-md-4 offset-1 col-5 text-center border bg-light d-flex flex-column siteGrowth-infoCards'>
								<span className='siteGrowth-infoCards-data'>1900+</span>
								<span>Patients Cured</span>
							</div>
							{/* <div class="col-6">
									<div class="p-3 border bg-light">Custom column padding</div>
								</div>
								<div class="col-6">
									<div class="p-3 border bg-light">Custom column padding</div>
								</div>
								<div class="col-6">
									<div class="p-3 border bg-light">Custom column padding</div>
								</div>
								<div class="col-6">
									<div class="p-3 border bg-light">Custom column padding</div>
								</div> */}
						</div>
						{/* </div> */}
					</div>
					<div className='col-md-6 d-flex flex-column mt-4 my-md-auto whyjoin-doc-pat-container'>
						<div className='row d-flex flex-row mb-2'>
							<div className='row' style={{ alignItems: 'center' }}>
								<div className='col-6 h-100'>
									<div className="card h-100 whyPatient-reason-card">
										<div className="card-body">
											<h5 className="card-title">Patients</h5>
											<p className="card-text text-white" >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
											{/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
										</div>
									</div>
								</div>
								<div className='col-6'>
									<img className='whyJoin-cards' src={whyPatientsJoinCard}></img>
								</div>
							</div>
						</div>
						<div className='row d-flex flex-row mt-2'>
							<div className='row' style={{ alignItems: 'center' }}>
								<div className='col-6 h-100'>
									<div className="card h-100 whyDoctor-reason-card">
										<div className="card-body">
											<h5 className="card-title">Doctors</h5>
											<p className="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
											{/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
										</div>
									</div>
								</div>
								<div className='col-6'>
									<img className='whyJoin-cards' src={whyDoctorsJoinCard}></img>
								</div>
							</div>
						</div>
					</div>
					{/* <div className='col d-flex flex-column'>
						<div className='row'>
							<img src={whyPatientsJoinCard}></img>
						</div>
						<div className='row'>
							<img src={whyDoctorsJoinCard}></img>
						</div>
					</div> */}
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


