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

export const Footer = () => {
	return (


		<>
			{/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
			{/* <!-- Footer --> */}
			<footer
				className="text-center text-lg-start text-dark mt-5"
				style={{ backgroundColor: "#ECEFF1", alignSelf:'end', padding: "20px"}}
			>

				{/* <!-- Section: Links  --> */}"
				<section className="">
					<div className="container text-center text-md-start mt-5">
						{/* <!-- Grid row --> */}
						<div className="row mt-3">
							{/* <!-- Grid column --> */}
							<div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
								{/* <!-- Content --> */}
								<h6 className="text-uppercase fw-bold">Friska</h6>
								<hr
									className="mb-4 mt-0 d-inline-block mx-auto"
									style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
								/>
								<p>
									<a href="#!" className="text-dark">Who We Are</a>
								</p>
								<p>
									<a href="#!" className="text-dark">Careers</a>
								</p>
								<p>
									<a href="#!" className="text-dark">Contact Us</a>
								</p>
								<p>
									<a href="#!" className="text-dark">Privacy Policy</a>
								</p>
								<p>
									<a href="#!" className="text-dark">Terms & Conditions </a>
								</p>
							</div>
							{/* <!-- Grid column --> */}

							{/* <!-- Grid column --> */}
							<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
								{/* <!-- Links --> */}
								<h6 className="text-uppercase fw-bold">For Patients</h6>
								<hr
									className="mb-4 mt-0 d-inline-block mx-auto"
									style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
								/>
								<p>
									<a href="#!" className="text-dark">Login</a>
								</p>
								<p>
									<a href="#!" className="text-dark">SignUp</a>
								</p>
							</div>
							{/* <!-- Grid column --> */}

							{/* <!-- Grid column --> */}
							<div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
								{/* <!-- Links --> */}
								<h6 className="text-uppercase fw-bold">For Doctors</h6>
								<hr
									className="mb-4 mt-0 d-inline-block mx-auto"
									style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
								/>
								<p>
									<a href="#!" className="text-dark">Login</a>
								</p>
								<p>
									<a href="#!" className="text-dark">SignUp</a>
								</p>
							</div>
							{/* <!-- Grid column --> */}

							{/* <!-- Grid column --> */}
							<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
								{/* <!-- Links --> */}
								<h6 className="text-uppercase fw-bold">Customer Support</h6>
								<hr
									className="mb-4 mt-0 d-inline-block mx-auto"
									style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
								/>
								<p><EmailIcon />support@friskanow.com</p>
								<p><LocalPhoneIcon />+91 8983176450</p>
								{/* <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
									<p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
									<p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
									<p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p> */}
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
