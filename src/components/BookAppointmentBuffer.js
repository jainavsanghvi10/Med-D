import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../assets/styles/newDesign.css';
import '../assets/styles/whoWeAre-newDesign.css';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

import saveRecordsImg from '../assets/images/ConsultationOffilneDoc.jpeg';

export default function BookAppointmentBuffer() {
    return (
        <>
            <div className='container bufferCardBg px-0 text-white borderedBufferCards'>
                <div className='row h-100'>
                    <img className='col-lg-5 leftBorderedBufferImg' src={saveRecordsImg} />
                    <div className='col-lg-7 d-flex flex-column justify-content-center p-4 p-sm-5 py-lg-0 px-lg-5'>
                        <h1 className='display-4'>Book Offline Appointments</h1>
                        <h3>No more standing in queues, sitting in the waiting area.
                            Skip the hassle and get your health checked up
                            quickly with our system

                        </h3>
                        <Link to="/offline-booking">
                            <button className='btn btn-light btn-lg fw-bold bufferCardTextColor'>BOOK NOW</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='container my-5 text-white fw-bold'>
                <div className='row justify-content-around'>
                    <div className='bufferBubbles'>
                        <h3>Fast & Simple</h3>
                    </div>
                    <div className='bufferBubbles'>
                        <h3>Time Saving</h3>
                    </div>
                    <div className='bufferBubbles'>
                        <h3>Flexible</h3>
                    </div>
                    <div className='bufferBubbles'>
                        <h3>Cost Effective</h3>
                    </div>
                </div>
            </div>

            <div className='container text-white promoCodes'>
                <div className='row bufferCardBg d-flex flex-row py-2 mb-1'>
                    <h5 className='col-10 mb-0'>50% OFF ON YOUR FIRST APPOINTMENT   CODE : FIRSTAPPOINT</h5>
                    <h5 className='col-2 text-end mb-0'>T&C</h5>
                </div>
                <div className='row bufferCardBg d-flex flex-row py-2'>
                    <h5 className='col-10 mb-0'>15% OFF ON XXX BANK CARDS</h5>
                    <h5 className='col-2 text-end mb-0'>T&C</h5>
                </div>
            </div>
            <h5 className='text-center text-decoration-underline'>More Offers</h5>

            <div className='container text-center my-4'>
                <Link to="/offline-booking">
                    <button className='btn btn-lg btn-dark'>Book Now</button>
                </Link>
            </div>
        </>
    );
}