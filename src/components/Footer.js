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

import fb_icon from '../assets/images/social_icons/fb.png'
import insta_icon from '../assets/images/social_icons/insta.png'
import twitter_icon from '../assets/images/social_icons/twitter.png'
import linkedin_icon from '../assets/images/social_icons/linkedin.png'
import microsoftBadgeDark from '../assets/images/footer/microsoftBadgeDark.png'
import microsoftBadgeLight from '../assets/images/footer/microsoftBadgeLight.png'

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
										<a href="/who-we-are" className="text-secondary">Who We Are</a>
									</li>
									<li className="mb-sm-2">
										<a href="#!" className="text-secondary">Careers</a>
									</li>
									<li className="mb-sm-2">
										<a href="#!" className="text-secondary">Contact Us</a>
									</li>
									<li className="mb-sm-2">
										<a href="#!" className="text-secondary">Privacy Policy</a>
									</li>
									<li className="mb-sm-2">
										<a href="#!" className="text-secondary">Terms & Conditions </a>
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
										<a href="/login" className="text-secondary">Login</a>
									</li>
									<li>
										<a href="/signup" className="text-secondary">SignUp</a>
									</li>
								</ul>

								<h6 className="fw-bold mt-4">For Doctors</h6>
								{/* <hr
									className="mt-0 d-inline-block mx-auto"
									style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
								/> */}
								<ul className="m-0 p-0" style={{ listStyleType: 'none', fontSize: '15px' }}>
									<li>
										<a href="/login-doctor" className="text-secondary">Login</a>
									</li>
									<li>
										<a href="/signup-doctor" className="text-secondary">SignUp</a>
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
								{/* <br/>
								<a href="mailto:support@friskanow.com">
									<span className="text-secondary"><EmailIcon/> support@friskanow.com</span>
								</a>
								<br/>
								<a href="tel:+91-898-317-6450">
									<span className="text-secondary"><LocalPhoneIcon/> +91 8983176450</span>
								</a> */}
								<ul className="m-0 p-0" style={{ listStyleType: 'none', fontSize: '15px' }}>
									<a href="mailto:support@friskanow.com" style={{ textDecoration: 'unset' }}><li className="text-secondary my-sm-3"><EmailIcon style={{ fontSize: '18px' }} /> support@friskanow.com </li></a>
									<a href="tel:+91-898-317-6450" style={{ textDecoration: 'unset' }}><li className="text-secondary"><LocalPhoneIcon style={{ fontSize: '18px' }} /> +91 8983176450</li></a>
								</ul>

								
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
									{/* <img className="me-2" height={30} width={30} src={fb_icon}></img>
									<img className="me-2" height={30} width={30} src={twitter_icon}></img>
									<img className="me-2" height={30} width={30} src={insta_icon}></img> */}
									<a href="https://www.linkedin.com/company/friskanow" target="_blank">
										<img className="me-2" height={30} width={30} src={linkedin_icon}></img>
									</a>
								</p>

								<img style={{width:'55%'}} src={microsoftBadgeDark}/>
								<br/>
								<br/>

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
