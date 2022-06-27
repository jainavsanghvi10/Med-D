import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../assets/styles/newDesign.css';
import '../assets/styles/whoWeAre-newDesign.css';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

import saveRecordsImg from '../assets/images/ConsultationOffilneDoc.jpeg';
import pic1 from '../assets/images/bufferPage/pic1.png';
import pic2 from '../assets/images/bufferPage/pic2.png';
import pic3 from '../assets/images/bufferPage/pic3.png';
import howItWorks from '../assets/images/bufferPage/howItWorks.png'
import howIt1 from '../assets/images/bufferPage/howit1.png'
import howIt2 from '../assets/images/bufferPage/howit2.png'

export default function BookAppointmentBuffer() {
    return (
        <>
            <div className='container bufferCardBg px-0 text-white borderedBufferCards'>
                <div className='row h-100'>
                    <img className='col-lg-4 leftBorderedBufferImg' src={saveRecordsImg} />
                    <div className='col-lg-8 d-flex flex-column justify-content-center p-4 p-sm-5 py-lg-0 px-lg-5'>
                        <h1 className='mb-lg-5 fw-bold'>Book Offline Appointments</h1>
                        <h5 className='w-75 mb-lg-5'>No more standing in queues, sitting in the waiting area.
                            Skip the hassle and get your health checked up
                            quickly with our system

                        </h5>
                        <Link to="/offline-booking">
                            <button className='btn btn-light fw-bold bufferCardTextColor rounded-pill'>BOOK NOW</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='container my-5 text-white fw-bold'>
                <div className='row justify-content-around'>
                    <div className='bufferBubbles'>
                        <h5 className='fw-bold'>Time Saving</h5>
                    </div>
                    <div className='bufferBubbles'>
                        <h5 className='fw-bold'>Fast & Simple</h5>
                    </div>
                    <div className='bufferBubbles'>
                        <h5 className='fw-bold'>Flexible</h5>
                    </div>
                    <div className='bufferBubbles'>
                        <h5 className='fw-bold'>Cost Effective</h5>
                    </div>
                </div>
            </div>

            <div className='container text-white promoCodes'>
                <div className='row bufferCardBg d-flex flex-row py-2 mb-1'>
                    <h5 className='col-10 mb-0'>50% OFF ON YOUR FIRST APPOINTMENT   CODE : FIRSTAPPOINT</h5>
                    <h5 className='col-2 text-end mb-0' style={{ textDecoration: 'underline' }}>T&C</h5>
                </div>
                <div className='row bufferCardBg d-flex flex-row py-2'>
                    <h5 className='col-10 mb-0'>15% OFF ON XXX BANK CARDS</h5>
                    <h5 className='col-2 text-end mb-0' style={{ textDecoration: 'underline' }}>T&C</h5>
                </div>
            </div>
            <h5 className='text-center text-decoration-underline pb-4'>More Offers</h5>

            {/* <div className='container text-center my-4'>
                <Link to="/offline-booking">
                    <button className='btn btn-lg btn-dark'>Book Now</button>
                </Link>
            </div> */}

            <div className='container mt-5'>
                {/* <h2 className='text-center fw-bold'>HOW IT WORKS ?</h2>
                <div className='row align-items-center bufferCardBg my-3'>       
                    <div className='col-1'>
                        <h1 className='display-1'>1</h1>
                    </div>
                    <div className='col-2'>
                        <img className='w-100' src={pic1}></img>
                    </div>
                    <div className='col-4'>
                        <h3 className='fw-bold'>Click on Book Now</h3>
                        <h5>Click on Book Now button. Login to your account and select your city.</h5>
                    </div>
                </div>

                <div className='row align-items-center bufferCardBg my-3'>       
                    <div className='col-1'>
                        <h1 className='display-1'>2</h1>
                    </div>
                    <div className='col-2'>
                        <img className='w-100' src={pic2}></img>
                    </div>
                    <div className='col-4'>
                        <h3 className='fw-bold'>Select your Doctor & Time</h3>
                        <h5>Select the doctor where you wish to book your appointment with and choose your preferred time slot.</h5>
                    </div>
                </div>

                <div className='row align-items-center bufferCardBg my-3'>       
                    <div className='col-1'>
                        <h1 className='display-1'>3</h1>
                    </div>
                    <div className='col-2'>
                        <img className='w-100' src={pic3}></img>
                    </div>
                    <div className='col-4'>
                        <h3 className='fw-bold'>Its Done!</h3>
                        <h5>Review your appointment, pay and its done. Find your booking under my appointments section.</h5>
                    </div>
                </div> */}
                <img className='w-100' src={howItWorks}/>
                {/* <img className='w-100' src={howIt1}/> */}
                {/* <img className='w-100 mt-3' src={howIt2}/> */}
            </div>
        </>
    );
}