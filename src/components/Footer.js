import React from "react";
import logo from "../assets/images/logo/logo.png";
import siteLogo from '../assets/images/site-logo.png'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Link } from "react-router-dom";

import fb_icon from '../assets/images/social_icons/fb.png'
import insta_icon from '../assets/images/social_icons/insta.png'
import twitter_icon from '../assets/images/social_icons/twitter.png'
import linkedin_icon from '../assets/images/social_icons/linkedin.png'

export const Footer = () => {
	return (
		<>
			{/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
			{/* <!-- Footer --> */}
			<footer
				id="footer"
				className="text-center text-lg-start text-dark mt-0"
				style={{ backgroundColor: "#ECEFF1", alignSelf: 'end' }}
			>

				{/* <!-- Section: Links  --> */}
				<section className="">
					<div className="container text-center text-md-start mt-0">
						{/* <!-- Grid row --> */}
						<div className="row pt-5">
							{/* <!-- Grid column --> */}
							<div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
								{/* <!-- Content --> */}
								<h6 className="fw-bold">About Us</h6>
								{/* <hr
									className="mt-0 d-inline-block mx-auto"
									style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
								/> */}
								<ul className="m-0 p-0" style={{ listStyleType: 'none', fontSize: '15px' }}>
									<li className="mb-sm-2">
										<Link to="/who-we-are" className="text-secondary">Who We Are</Link>
									</li>
									<li className="mb-sm-2">
										<Link to="#!" className="text-secondary">Careers</Link>
									</li>
									<li className="mb-sm-2">
										<Link to="#!" className="text-secondary">Contact Us</Link>
									</li>
									<li className="mb-sm-2">
										<Link to="#!" className="text-secondary">Privacy Policy</Link>
									</li>
									<li className="mb-sm-2">
										<Link to="#!" className="text-secondary">Terms & Conditions </Link>
									</li>
								</ul>
							</div>
							{/* <!-- Grid column --> */}

							{/* <!-- Grid column --> */}
							<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
								{/* <!-- Links --> */}
								<h6 className="fw-bold">For Patients</h6>
								{/* <hr
									className="mt-0 d-inline-block mx-auto"
									style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
								/> */}
								<ul className="m-0 p-0" style={{ listStyleType: 'none', fontSize: '15px' }}>
									<li>
										<Link to="/login" className="text-secondary">Login</Link>
									</li>
									<li>
										<Link to="/signup" className="text-secondary">SignUp</Link>
									</li>
								</ul>

								<h6 className="fw-bold mt-4">For Doctors</h6>
								{/* <hr
									className="mt-0 d-inline-block mx-auto"
									style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
								/> */}
								<ul className="m-0 p-0" style={{ listStyleType: 'none', fontSize: '15px' }}>
									<li>
										<Link to="/login-doctor" className="text-secondary">Login</Link>
									</li>
									<li>
										<Link to="/signup-doctor" className="text-secondary">SignUp</Link>
									</li>
								</ul>
							</div>
							{/* <!-- Grid column --> */}

							{/* <!-- Grid column --> */}
							<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
								{/* <!-- Links --> */}
								<h6 className="fw-bold">Customer Support</h6>
								{/* <hr
									className="mt-0 d-inline-block mx-auto"
									style={{ width: "120px", backgroundColor: "#7c4dff", height: "2px" }}
								/> */}
								<p className="text-secondary" style={{fontSize:'15px'}}><EmailIcon/> support@friskanow.com</p>
								<p className="text-secondary" style={{fontSize:'15px'}}><LocalPhoneIcon/> +91 8983176450</p>
							</div>
							{/* <!-- Grid column --> */}

							{/* <!-- Grid column --> */}
							<div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
								{/* <!-- Links --> */}
								<h6 className="fw-bold">Socials</h6>
								{/* <hr
									className="mt-0 d-inline-block mx-auto"
									style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
								/> */}
								<p>
									{/* <InstagramIcon className="me-1" color='primary' />
									<TwitterIcon className="me-1" color='primary' />
									<FacebookIcon className="me-1" color='primary' />
									<LinkedInIcon className="me-1" color='primary' /> */}
									<img className="me-2" height={30} width={30} src={fb_icon}></img>
									<img className="me-2" height={30} width={30} src={twitter_icon}></img>
									<img className="me-2" height={30} width={30} src={insta_icon}></img>
									<img className="me-2" height={30} width={30} src={linkedin_icon}></img>
								</p>

								<span className="text-secondary">
									© Friska Technologies
								</span>

							</div>
							{/* <!-- Grid column --> */}
						</div>
						{/* <!-- Grid row --> */}
					</div>
				</section>
				{/* <!-- Section: Links  --> */}
			</footer>
			{/* <!-- Footer --> */}

			{/* <!-- End of .container --> */}
		</>
	);
}
