import React from "react";
import logo from "../assets/images/logo/logo.png";
import siteLogo from '../assets/images/site-logo.png'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'

export const Footer = () => {
	return (


		<>
			<div className="py-4 pb-5 mt-0 bg-white darkerTextColor" id="footerInfo">
				<div className="container">
					<div className="row">
						<div className="col-2 ps-5">
							<h4><b>Med-D</b></h4>
							<ul className="list-unstyled text-small">
								<li><a className="text-secondary" href="#">About Us</a></li>
								<li><a className="text-secondary" href="#">Careers</a></li>
								<li><a className="text-secondary" href="#">Press</a></li>
								<li><a className="text-secondary" href="#">Contact Us</a></li>
							</ul>
						</div>
						<div className="col-2">
							<h4><b>For Patients</b></h4>
							<ul className="list-unstyled text-small">
								<li><a className="text-secondary" href="#">Login</a></li>
								<li><a className="text-secondary" href="#">Sign Up</a></li>
							</ul>

							<h4><b>For Doctors</b></h4>
							<ul className="list-unstyled text-small">
								<li><a className="text-secondary" href="#">Login</a></li>
								<li><a className="text-secondary" href="#">Sign Up</a></li>
							</ul>
						</div>
						<div className="col-2">
							<h4><b>More</b></h4>
							<ul className="list-unstyled text-small">
								<li><a className="text-secondary" href="#">Legal</a></li>
								<li><a className="text-secondary" href="#">Privacy Policy</a></li>
								<li><a className="text-secondary" href="#">Terms & Conditions</a></li>
							</ul>
						</div>
						<div className="col-3 ps-5">
							<h4><b>Customer Support</b></h4>
							<ul className="list-unstyled text-small">
								<li className="align-top"><a className="text-secondary" href="#">
									<span className="material-icons  align-top">
									email
								</span>support@medd.com</a></li>
								<li className="align-top"><a className="text-secondary" href="#">
									<span className="material-icons align-top">
										phone
									</span>
									+91 XXXXXXXXXX
								</a></li>
							</ul>
						</div>
						<div className="col-3 ps-5">
							<h4><b>Socials</b></h4>
							<svg className="me-1 socialIcons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<path
									d="M11.984 16.815c2.596 0 4.706-2.111 4.706-4.707 0-1.409-.623-2.674-1.606-3.538-.346-.303-.735-.556-1.158-.748-.593-.27-1.249-.421-1.941-.421s-1.349.151-1.941.421c-.424.194-.814.447-1.158.749-.985.864-1.608 2.129-1.608 3.538 0 2.595 2.112 4.706 4.706 4.706zm.016-8.184c1.921 0 3.479 1.557 3.479 3.478 0 1.921-1.558 3.479-3.479 3.479s-3.479-1.557-3.479-3.479c0-1.921 1.558-3.478 3.479-3.478zm5.223.369h6.777v10.278c0 2.608-2.114 4.722-4.722 4.722h-14.493c-2.608 0-4.785-2.114-4.785-4.722v-10.278h6.747c-.544.913-.872 1.969-.872 3.109 0 3.374 2.735 6.109 6.109 6.109s6.109-2.735 6.109-6.109c.001-1.14-.327-2.196-.87-3.109zm2.055-9h-12.278v5h-1v-5h-1v5h-1v-4.923c-.346.057-.682.143-1 .27v4.653h-1v-4.102c-1.202.857-2 2.246-2 3.824v3.278h7.473c1.167-1.282 2.798-2 4.511-2 1.722 0 3.351.725 4.511 2h7.505v-3.278c0-2.608-2.114-4.722-4.722-4.722zm2.722 5.265c0 .406-.333.735-.745.735h-2.511c-.411 0-.744-.329-.744-.735v-2.53c0-.406.333-.735.744-.735h2.511c.412 0 .745.329.745.735v2.53z" />
							</svg>
							<svg className="me-1 socialIcons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<path
									d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z" />
							</svg>
							<svg className="me-1 socialIcons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<path
									d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z" />
							</svg>
							<svg className="me-1 socialIcons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<path
									d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
							</svg>
						</div>
					</div>
				</div>
			</div>
			<div className="section d-flex justify-content-center flex-column align-items-center pt-5 darkerWebsiteColor">
				<span className="text-white">© Med D Technologies Private Limited</span>
				<img src={siteLogo} className="w-25 text-center" alt="Med-D" />
			</div>
		</>
	);
};
