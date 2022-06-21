import React, { useState, useEffect } from 'react'
import 'bootstrap/js/dist/carousel'
import { Link } from 'react-router-dom';
import '../assets/styles/newDesign.css';

import hospitalSeats from "../assets/images/whoWeAre/hospitalSeats.jpg";

export default function whoWeAre() {
    return (
        <>
            <div className='container' style={{height:'80vh', background:'mintcream', maxWidth:'100%'}}>
                <div className='row h-100'>
                    <div className='col ps-0 d-flex align-items-center'>
                        <h1 className='display-4 ps-5 fw-bold' style={{position:'absolute', top:'20vh'}}>Who We Are</h1>
                        <div className='darkerWebsiteColor text-white p-5' style={{ marginRight:'-100px', position:'absolute', width:'55%'}}>
                            <h4>
                                Launched in 2022, MED D is technology startup that makes booking offline doctor appointments easier and more flexible so that our customers don’t have to wait for their turn when visiting a doctor. With technology being pivotal to us, we promise to deliver the best experience between our customers and doctors.
                            </h4>
                        </div>

                    </div>
                    <div className='hospitalSeatsImg col p-0 m-0'>

                    </div>
                </div>
            </div>
        </>
    );

}