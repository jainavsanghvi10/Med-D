import React, { useState, useEffect } from 'react'

import '../assets/styles/font-awesome.min.css';
import '../assets/styles/icon-font.min.css';
import '../assets/styles/animate.css';
import '../assets/styles/hover-min.css';
import '../assets/styles/magnific-popup.css';
import '../assets/styles/owl.carousel.min.css';
import '../assets/styles/owl.theme.default.min.css';
import '../assets/styles/bootstrap.min.css';
import '../assets/styles/bootsnav.css';
import '../assets/styles/Style.css';
import '../assets/styles/responsive.css';

import imageOC from '../assets/images/home/consultency.png';
import imageOB from "../assets/images/home/busisness_grow.png";
import imageOS from "../assets/images/home/support-logo.png";
import imageAbout from "../assets/images/about/about-part.jpg";


import StatHP from "../assets/images/counter/counter1.png";
import StatCD from "../assets/images/counter/counter2.png";
import StatC from "../assets/images/counter/counter3.png";
import StatCS from "../assets/images/counter/counter4.png";

export default function Dashboard(){
	const [id, setId] = useState();
	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		const id = params.get('id');
		setId(id ? id : '');
		//eslint-disable-next-line
	  }, []);
  return (
	  <>		
		{/* <!--font-family--> */}
		<link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i,900,900i" rel="stylesheet"/>	
		<link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900" rel="stylesheet"/>
		<link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet"/>

		{/* <!-- header-slider-area start --> */}
		<section className="header-slider-area">
			<div id="carousel-example-generic" className="carousel slide carousel-fade" data-ride="carousel">
			
			  {/* <!-- Indicators --> */}
				<ol className="carousel-indicators">
					<li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
					<li data-target="#carousel-example-generic" data-slide-to="1"></li>
				</ol>

				{/* <!-- Wrapper for slides --> */}
				<div className="carousel-inner" role="listbox">
					<div className="item active">
						<div className="single-slide-item slide-1">
							<div className="container">
								<div className="row">
									<div className="col-sm-12">
										<div className="single-slide-item-content">
											<h2>Book Offline Appointments Directly from your Phone</h2>
											<p>
												Med D makes booking offline appointments easier and more flexible so that you never have to wait for your turn when visiting a doctor.
											</p>
											<button type="button" className="slide-btn">
											get started
											</button>
											<button type="button"  className="slide-btn">
												explore more
											</button>
											
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="single-slide-item slide-2">
							<div className="container">
								<div className="row">
									<div className="col-sm-12">
										<div className="single-slide-item-content">
											<h2>
												Consult Your Business
											</h2>
											<p>
												We are the unique Consultancy Farm for your business solution, That is ready to take challenge and knockout your business problems.  
											</p>
											<button type="button"  className="slide-btn">
												get started
											</button>
											<button type="button"  className="slide-btn
											">
												explore more
											</button>
										</div>
									
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- Controls --> */}
				<a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
					<span className="lnr lnr-chevron-left"></span>
				</a>
				<a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
					<span className="lnr lnr-chevron-right"></span>
				</a>
			</div>

		</section>
		{/* <!-- header-slider-area end --> */}
		
		{/* <!--we-do start --> */}
		<section  className="we-do">
			<div className="container">
				<div className="we-do-details">
					<div className="section-header text-center">
						<h2>what we do</h2>
						<p>
							Pallamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						</p>
					</div>
					<div className="we-do-carousel">
						<div className="row">
							<div className="col-sm-4 col-xs-12">
								<div className="single-we-do-box text-center">
									<div className="we-do-description">
										<div className="we-do-info">
											<div className="we-do-img">
												<img src={imageOC} alt="image of consultency" />
											</div>
											<div className="we-do-topics">
												<h2>
													<a href="#">
														Book Offline Appointments
													</a>
												</h2>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-4 col-xs-12">
								<div className="single-we-do-box text-center">
									<div className="we-do-description">
										<div className="we-do-info">
											<div className="we-do-img">
												<img src={imageOC} alt="image of consultency" />
											</div>
											<div className="we-do-topics">
												<h2>
													<a href="#">
														Consult Doctor Online
													</a>
												</h2>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-4 col-xs-12">
								<div className="single-we-do-box text-center">
									<div className="we-do-description">
										<div className="we-do-info">
											<div className="we-do-img">
												<img src={imageOC} alt="image of consultency" />
											</div>
											<div className="we-do-topics">
												<h2>
													<a href="#">
														Lab Tests
													</a>
												</h2>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-4 col-xs-12">
								<div className="single-we-do-box text-center">
									<div className="we-do-description">
										<div className="we-do-info">
											<div className="we-do-img">
												<img src={imageOC} alt="image of consultency" />
											</div>
											<div className="we-do-topics">
												<h2>
													<a href="#">
														Shop Health Items
													</a>
												</h2>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-4 col-xs-12">
								<div className="single-we-do-box text-center">
									<div className="we-do-description">
										<div className="we-do-info">
											<div className="we-do-img">
												<img src={imageOB} alt="image of business" />
											</div>
											<div className="we-do-topics">
												<h2>
													<a href="#">
														Insurance
													</a>
												</h2>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-4 col-xs-12">
								<div className="single-we-do-box text-center">
									<div className="we-do-description">
										<div className="we-do-info">
											<div className="we-do-img">
												<img src={imageOS} alt="image of support" />
											</div>
											<div className="we-do-topics">
												<h2>
													<a href="#">
														Save your Medical Records
													</a>
												</h2>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</section>
		{/* <!--we-do end--> */}

		
		{/* <!--statistics start--> */}
		<section  className="statistics">
			<div className="container">
				<div className="statistics-counter "> 
					<div className="col-md-3 col-sm-6">
						<div className="single-ststistics-box">
							<div className="statistics-img">
								<img src={StatHP} alt="counter-icon" />
							</div>
							<div className="statistics-content">
								<div className="counter">1500+</div>
								<h3>Happy Patients</h3>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-6">
						<div className="single-ststistics-box">
							<div className="statistics-img">
								<img src={StatCD} alt="counter-icon" />
							</div>
							<div className="statistics-content">
								<div className="counter">1000+</div>
								<h3>Certified Doctors</h3>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-6">
						<div className="single-ststistics-box">
							<div className="statistics-img">
								<img src={StatC} alt="counter-icon" />
							</div>
							<div className="statistics-content">
								<div className="counter">3</div>
								<h3>Cities</h3>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-6">
						<div className="single-ststistics-box">
							<div className="statistics-img">
								<img src={StatCS} alt="counter-icon" />
							</div>
							<div className="statistics-content">
								<div className="counter">1000+</div>
								<h3>Client Satisfied</h3>
							</div>
						</div>
					</div>
				</div>	
			</div>
		</section>
		{/* <!-- testemonial Start --> */}
		<section  style={{position: "relative"}} className="testemonial">
			<div className="container">
				<div className="section-header text-center">
					<h2>
						<span>
							what our client say about us
						</span>
					</h2>
				</div>
				<div className="owl-carousel owl-theme" id="testemonial-carousel">
					<div className="home1-testm item">
						<div className="home1-testm-single text-center">
							<div className="home1-testm-img">
								<img src="assets/images/client/testimonial1.jpg" alt="img"/>
							</div>
							<div className="home1-testm-txt">
								<span className="icon section-icon">
									<i className="fa fa-quote-left" aria-hidden="true"></i>
								</span>
								<p>
									Lorem ipsum dolor sit amet conse adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam..
								</p>
								<h3>
									<a href="#">
										kevin watson
									</a>
								</h3>
								<h4>CEO, Kingston</h4>
							</div>	
						</div>
					</div>
					<div className="home1-testm item">
						<div className="home1-testm-single text-center">
							<div className="home1-testm-img">
								<img src="assets/images/client/testimonial2.jpg" alt="img"/>
							</div>
							<div className="home1-testm-txt">
								<span className="icon section-icon">
									<i className="fa fa-quote-left" aria-hidden="true"></i>
								</span>
								<p>
									Lorem ipsum dolor sit amet conse adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam..
								</p>
								<h3>
									<a href="#">
										kevin watson
									</a>
								</h3>
								<h4>CEO, Kingston</h4>
							</div>	
						</div>
					</div>
					<div className="home1-testm item">
						<div className="home1-testm-single text-center">
							<div className="home1-testm-img">
								<img src="assets/images/client/testimonial1.jpg" alt="img"/>
							</div>
							<div className="home1-testm-txt">
								<span className="icon section-icon">
									<i className="fa fa-quote-left" aria-hidden="true"></i>
								</span>
								<p>
									Lorem ipsum dolor sit amet conse adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam..
								</p>
								<h3>
									<a href="#">
										kevin watson
									</a>
								</h3>
								<h4>CEO, Kingston</h4>
							</div>	
						</div>
					</div>
				</div>
			</div>
		</section>	
		{/* <!-- testemonial End --> */}

		{/* <!--about-us start --> */}
		{/* <section className="about-us">
			<div className="container">
				<div className="about-us-content">
					<div className="row">
						<div className="col-sm-6">
							<div className="single-about-us">
								<div className="about-us-txt">
									<h2>about us</h2>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.
									</p>
									<div className="project-btn">
										<a href="#"  className="project-view">learn more
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="single-about-us">
								<div className="about-us-img">
									<img src={imageAbout} alt="about images"/>
								</div>
							</div>
						</div>
				</div>
			</div>
		</div>
		</section> */}
	</>
	);
}
