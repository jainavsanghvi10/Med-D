import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../assets/styles/newDesign.css';
import '../assets/styles/whoWeAre-newDesign.css';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

import saveRecordsImg from '../assets/images/MedicalRecords.png';

export default function SaveRecordsBuffer() {
    return (
        <>
            <div className='container bufferCardBg rounded px-0 text-white borderedBufferCards'>
                <div className='row h-100'>
                    <img className='col-lg-5 leftBorderedBufferImg' src={saveRecordsImg} />
                    <div className='col-lg-7 d-flex flex-column justify-content-center p-4 p-sm-5 py-lg-0 px-lg-5'>
                        <h1 className='display-4'>Save Your Medical Records</h1>
                        <h3>Save your medical records here securely so that you
                            never forget them and get amazing discounts
                            on booking appointments
                        </h3>
                        <Link to="/medicalRecords">
                            <button className='btn btn-light btn-lg fw-bold bufferCardTextColor'>UPLOAD</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='container my-5 text-white fw-bold'>
                <div className='row justify-content-around'>
                    <div className='bufferBubbles'>
                        <h3>100% Secure</h3>
                    </div>
                    <div className='bufferBubbles'>
                        <h3>Fast & Simple</h3>
                    </div>
                    <div className='bufferBubbles'>
                        <h3>Time Saving</h3>
                    </div>
                </div>
            </div>
        </>
    );
}