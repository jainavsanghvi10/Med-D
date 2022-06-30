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
import thumbnailDoc from '../assets/images/thumbnailDoc.png';
import promo1 from '../assets/images/dashboard/promo1.png';
import promo2 from '../assets/images/dashboard/promo2.png';
import promo3 from '../assets/images/dashboard/promo3.png';
import microsoftTemplate from '../assets/images/dashboard/microsoft_template.jpg';

import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

import { Accordion } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Card } from 'react-bootstrap';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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
					<div className='row h-100 mx-0'>
						<div className='order-2 order-md-1 ps-0 col-sm-12 col-md-5 ps-md-5 pe-0 d-flex flex-column justify-content-around align-items-start h-100'>
							<span className='px-2 dashboard-headline display-5 mt-3 mt-md-4'>Book Offline Appointments Directly From Your Phone</span>
							<span className='mx-3 dashboard-content h5 mt-3'>Friska makes booking offline doctor appointments easier and more flexible so that you never have to wait for your turn when visiting a doctor.</span>
							<Link to="/book-appointment-info" className='dashboard-knowmore mt-3 mb-3 mb-md-5 btn btn-outline-dark text-white button-color rounded-pill mx-3'>Learn More</Link>
						</div>
						<div className='order-1 order-md-2 col-sm-12 col-md-7 d-flex align-items-end'>
							<img className='dashboard-doctor' src={dashboardDoctor}></img>
							{/* <svg className='amoeba' viewBox="0 0 4104 3475" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M742.664 881.814C527.884 1099.64 140.178 1163.59 35.6782 1451.1C-62.721 1721.81 60.7418 2052.11 233.497 2282.65C405.239 2511.83 714.187 2578.64 972.814 2701.67C1160.77 2791.08 1383.15 2791.79 1553.94 2910.76C1766.96 3059.16 1822.62 3441.79 2080.32 3473.2C2325.73 3503.11 2445.24 3131.58 2677.79 3047.73C2926.99 2957.87 3242.97 3126.66 3460.53 2975.53C3668.78 2830.86 3667.15 2521.5 3769.35 2289.43C3878.96 2040.55 4057.82 1818.67 4088.98 1548.5C4121.97 1262.49 4108.33 947.088 3952.1 705.227C3796 463.575 3522.3 290.122 3240.07 234.337C2964.63 179.893 2701.53 447.718 2424.31 403.244C2174.54 363.176 2042.57 17.8478 1790.13 1.73004C1549.15 -13.6563 1334.02 166.508 1149.16 321.828C970.609 471.847 906.401 715.755 742.664 881.814Z" fill="url(#paint0_linear_534_232)" />
								<defs>
									<linearGradient id="paint0_linear_534_232" x1="3593.03" y1="3349.94" x2="1799.76" y2="6311.3" gradientUnits="userSpaceOnUse">
										<stop stop-color="#00D1FF" />
										<stop offset="1" stop-color="#4000FF" />
										<stop offset="1" stop-color="white" />
									</linearGradient>
								</defs>
							</svg> */}

							{/* <svg className='amoeba' viewBox="0 0 3222 2639" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M2782.8 1037.52C2906.13 1254.29 3198.06 1386.27 3219.87 1634.72C3240.4 1868.67 3073.64 2102.86 2889.04 2248.09C2705.53 2392.47 2448.12 2380.07 2218.51 2422.55C2051.64 2453.42 1876.32 2407.18 1716.76 2464.95C1517.73 2537.01 1417.07 2663.16 1207.47 2633.66C1007.88 2605.57 669.527 2579.94 504 2464.95C326.621 2341.72 340.897 2279.53 201.341 2114.7C67.7495 1956.92 134.142 1713.58 102.481 1509.28C68.5243 1290.17 -25.6632 1077.76 6.64679 858.393C40.8518 626.164 117.977 380.595 291.942 222.966C465.757 65.4727 717.85 -13.5511 951.897 1.90528C1180.31 16.99 1331.19 283.323 1558.91 306.637C1764.08 327.641 1940.71 83.4054 2142.95 123.839C2336 162.436 2467.54 349.624 2580.46 510.873C2689.53 666.618 2688.77 872.254 2782.8 1037.52Z" fill="url(#paint0_linear_557_249)" />
								<defs>
									<linearGradient id="paint0_linear_557_249" x1="1122.76" y1="-105.454" x2="1912.05" y2="2604.57" gradientUnits="userSpaceOnUse">
										<stop stop-color="#2193B0" />
										<stop offset="1" stop-color="#6DD5ED" />
									</linearGradient>
								</defs>
							</svg> */}
							<svg className='amoeba' viewBox="0 0 3255 2520" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M2815.43 918.52C2938.76 1135.29 3230.69 1267.27 3252.5 1515.72C3273.03 1749.67 3106.27 1983.86 2921.67 2129.09C2738.16 2273.47 2480.75 2261.07 2251.14 2303.55C2084.27 2334.42 1908.95 2288.18 1749.39 2345.95C1550.36 2418.01 1449.69 2544.16 1240.09 2514.66C1040.5 2486.57 702.154 2460.94 536.627 2345.95C359.248 2222.72 178.831 2220.83 39.2747 2056C-94.3166 1898.22 166.769 1594.58 135.108 1390.28C101.151 1171.17 6.96386 958.76 39.2738 739.393C73.4789 507.164 230.663 345.265 404.628 187.636C578.443 30.1436 723.581 88.5091 957.628 103.966C1186.04 119.05 1363.82 164.322 1591.54 187.636C1796.71 208.64 1973.34 -35.5948 2175.58 4.83832C2368.63 43.4353 2500.17 230.623 2613.09 391.872C2722.16 547.617 2721.4 753.253 2815.43 918.52Z" fill="url(#paint0_linear_557_249)" />
								<defs>
									<linearGradient id="paint0_linear_557_249" x1="1105.76" y1="-224.455" x2="2037" y2="2777" gradientUnits="userSpaceOnUse">
										<stop offset="0.328125" stop-color="#4682B4" />
										<stop offset="0.84375" />
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
							<span className='dashboard-card-headline'>Save Your Medical Records</span>
							<span className='dashboard-card-content'>Save your medical records here securely so that you never forget them and get amazing discounts on booking appointments.</span>
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


			{/* Promotion */}
			<div className='container mb-5'>
				<Carousel className='border py-5' variant="dark" style={{}}>
					<Carousel.Item interval={3000}>
						<img
							className="d-block mx-auto"
							src={promo1}
							alt="First slide"
							style={{ width: '80%' }}
						/>
					</Carousel.Item>
					<Carousel.Item interval={3000}>
						<img
							className="d-block mx-auto"
							src={promo2}
							alt="Second slide"
							style={{ width: '80%' }}
						/>
					</Carousel.Item>
					<Carousel.Item interval={3000}>
						<img
							className="d-block mx-auto"
							src={promo3}
							alt="Third slide"
							style={{ width: '80%' }}
						/>
					</Carousel.Item>
				</Carousel>
			</div>


			{/* Why Choose us */}
			<div className='container why-us-container py-4 py-md-5 ps-4'>
				<div className='row w-100 mx-0'>
					<div className='col-md-6 d-flex flex-column align-self-center h-100 text-center'>
						<span className='why-us-heading mb-3'>Why Choose Us?</span>
						<span>
							Friska makes booking offline doctor appointments easier and more flexible so that our customers don’t have to wait for their turn when visiting a doctor. We promise to deliver the best experience between our customers and doctors.
						</span>

						<div class="row justify-content-center mt-3 mt-sm-0">
							<div className='rounded mt-md-4 col-5 text-center border text-white bg-dark d-flex flex-column siteGrowth-infoCards'>
								<span className='siteGrowth-infoCards-data'>100+</span>
								<span>Certified Doctors</span>
							</div>
							<div className='rounded mt-md-4 offset-md-1 col-5 text-center border text-white bg-dark d-flex flex-column siteGrowth-infoCards'>
								<span className='siteGrowth-infoCards-data'>2</span>
								<span>Cities</span>
							</div>
							<div className='rounded mt-md-4 col-5 text-center border text-white bg-dark d-flex flex-column siteGrowth-infoCards'>
								<span className='siteGrowth-infoCards-data'>1500+</span>
								<span>Happy Patients</span>
							</div>
							{/* <div className='rounded mt-md-4 offset-md-1 col-5 text-center border text-white bg-dark d-flex flex-column siteGrowth-infoCards'>
								<span className='siteGrowth-infoCards-data'>1900+</span>
								<span>Patients Cured</span>
							</div> */}
						</div>
					</div>
					<div className='col-md-6 d-flex flex-column mt-4 my-md-auto whyjoin-doc-pat-container'>
						<div className='row d-flex flex-row mb-2 mx-auto'>
							<div className='row' style={{ alignItems: 'center' }}>
								<div className='col h-100'>
									{/* <div className="card mx-auto h-100 whyPatient-reason-card">
										<div className="card-body">
											<h4 className="card-title text-center">Patients</h4>
											<img className='whyJoin-cards' src={whyPatientsJoinCard}></img>
										</div>
									</div> */}
									<div class="flip-card">
										<div class="flip-card-inner">
											<div class="flip-card-front-patient">
												<h4>Patients</h4>
												<img className='whyJoin-cards' src={whyPatientsJoinCard}></img>
											</div>
											<div class="flip-card-back-patient">
												<div className='mx-auto' style={{ width: '75%' }}>
													<h1 className='mb-3'>Patients</h1>
													<span className='px-3'>We strive to provide our customers with a simple platform to book, modify and track appointments with their doctors thereby saving their time at discounted prices.</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='row d-flex flex-row mt-2 mx-auto'>
							<div className='row' style={{ alignItems: 'center' }}>
								<div className='col h-100'>
									{/* <div className="card mx-auto h-100 whyDoctor-reason-card">
										<div className="card-body why-front">
											<h4 className="card-title text-center">Doctors</h4>
											<img className='whyJoin-cards' src={whyDoctorsJoinCard}></img>
										</div>
									</div> */}
									<div class="flip-card">
										<div class="flip-card-inner">
											<div class="flip-card-front-doctor">
												<h4>Doctors</h4>
												<img className='whyJoin-cards' src={whyDoctorsJoinCard}></img>
											</div>
											<div class="flip-card-back-doctor">
												<div className='mx-auto' style={{ width: '75%' }}>
													<h1 className='mb-3'>Doctors</h1>
													<span className='px-3'>We support our doctors with the simplicity of our technology so that, they can operate with ease, multiply their earnings and establish their digital presence.</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>



			{/* Testimonials */}
			<div className='container py-4 pb-5 px-0' style={{ maxWidth: '100%', background: '#f4fdff' }}>
				<div className='row text-center mx-0'>
					<h2 className='pt-5 pb-2'>Our Happy Customers</h2>
					<Carousel id='testimonials' className='testimonials mb-5' variant='dark' activeIndex={index} onSelect={handleSelect}>
						<Carousel.Item interval={3000} className='testimonial-items'>
							<Card className='testimonial-cards mx-auto'>
								<FormatQuoteIcon className='opening-quote' />
								<FormatQuoteIcon className='closing-quote' />
								<Card.Body className='d-flex justify-content-center'>
									{/* <Avatar
										className='mb-2 mx-auto desktopView'
										alt="Doc Avatar"
										src={thumbnailDoc}
										sx={{ width: 186, height: 186, bgcolor: 'lightblue' }}
									/>
									<Avatar
										className='mb-2 mx-auto mobileView'
										alt="Doc Avatar"
										src={thumbnailDoc}
										sx={{ width: 146, height: 146, bgcolor: 'lightblue' }}
									/> */}
									<Card.Title className='fw-bold testimonial-title' style={{ color: '#0d47a1' }}>
										Helped me save my time from the queue.
									</Card.Title>
									<Card.Text className='mt-3 text-black testimonial-content d-flex flex-row justify-content-center align-items-center'>
										<AccountCircleIcon className='me-1' /> Anurag Singh Naruka
									</Card.Text>
								</Card.Body>
							</Card>
						</Carousel.Item>

						<Carousel.Item interval={3000} className='testimonial-items'>
							<Card className='testimonial-cards mx-auto'>
								<FormatQuoteIcon className='opening-quote' />
								<FormatQuoteIcon className='closing-quote' />
								<Card.Body className='d-flex justify-content-center'>
									<Card.Title className='fw-bold testimonial-title' style={{ color: '#0d47a1' }}>
										Perfect for people who have to take hours from their work just for a consultation with doctor.
									</Card.Title>
									<Card.Text className='mt-3 text-black testimonial-content d-flex flex-row justify-content-center align-items-center'>
										<AccountCircleIcon className='me-1' /> Rakshit Bang
									</Card.Text>
								</Card.Body>
							</Card>
						</Carousel.Item>

						<Carousel.Item interval={3000} className='testimonial-items'>
							<Card className='testimonial-cards mx-auto'>
								<FormatQuoteIcon className='opening-quote' />
								<FormatQuoteIcon className='closing-quote' />
								<Card.Body className='d-flex justify-content-center'>
									{/* <Avatar
										className='mb-2 mx-auto desktopView'
										alt="Doc Avatar"
										src={thumbnailDoc}
										sx={{ width: 186, height: 186, bgcolor: 'lightblue' }}
									/>
									<Avatar
										className='mb-2 mx-auto mobileView'
										alt="Doc Avatar"
										src={thumbnailDoc}
										sx={{ width: 146, height: 146, bgcolor: 'lightblue' }}
									/> */}
									<Card.Title className='fw-bold testimonial-title' style={{ color: '#0d47a1' }}>
										Very Helpful. Easy to take an appointment and manage medical records.
									</Card.Title>
									<Card.Text className='mt-3 text-black testimonial-content d-flex flex-row justify-content-center align-items-center'>
										<AccountCircleIcon className='me-1' /> Jainav Sanghvi
									</Card.Text>
								</Card.Body>
							</Card>
						</Carousel.Item>

					</Carousel>
				</div>
			</div>

			<div className='container'>
				<img className='w-100 my-5' src={microsoftTemplate}/>
			</div>
		</>
	);
}


