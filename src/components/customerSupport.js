import React, { useState, useEffect } from 'react'
import 'bootstrap/js/dist/carousel'
import { Link } from 'react-router-dom';
import '../assets/styles/newDesign.css';
import '../assets/styles/whoWeAre-newDesign.css';

import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';


export default function customerSupport() {
    return (
        <>
            <div className='text-center text-white py-5' style={{ background: 'rgb(8,196,222' }}>
                <h1 className='fw-bold mb-5 display-3'>Customer Support</h1>
                <h2 className='fw-bold mb-4'>We're ready to help you</h2>
                <h5>Have an issue with your booking or any other issues?</h5>
                <h5>Our team is ready to help you.</h5>
                <h5>7am – 9pm</h5>

                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col d-flex flex-column align-items-center'>
                            <LocalPhoneIcon style={{ fontSize: '40px' }} />
                            <h3 className='m-0 fw-bold' style={{ width: 'fit-content' }}>Call Us</h3>
                            <hr
                                className="mt-0 d-inline-block mx-auto mt-2"
                                style={{ width: "200px", backgroundColor: "white", height: "3px",opacity:'.8' }}
                            />
                            <h5 className='w-50 desktopView'>Call us at +91 8983176450
                                to speak to our support representative
                            </h5>
                            <h5 className='mobileView'>Call us at +91 8983176450
                                to speak to our support representative
                            </h5>
                        </div>

                        <div className='col d-flex flex-column align-items-center'>
                            <EmailIcon style={{ fontSize: '40px' }} />
                            <h3 className='m-0 fw-bold' style={{ width: 'fit-content' }}>Drop a mail</h3>
                            <hr
                                className="mt-0 d-inline-block mx-auto mt-2"
                                style={{ width: "200px",backgroundColor: "white", height: "3px", opacity:'.8' }}
                            />
                            <h5 className='w-50 desktopView'>Send us an email to support@friskanow.com
                            </h5>
                            <h5 className='mobileView'>Send us an email to support@friskanow.com
                            </h5>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}