import React, { useState, useEffect } from 'react'
import 'bootstrap/js/dist/carousel'
import { Link } from 'react-router-dom';
import '../assets/styles/newDesign.css';
import '../assets/styles/whoWeAre-newDesign.css';

import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

import hospitalSeats from "../assets/images/whoWeAre/hospitalSeats.jpg";
import mobileInHand from "../assets/images/whoWeAre/mobileInHand.jpg";
import whoWeAre_doc1 from "../assets/images/whoWeAre/doc1.jpg";
import whoWeAre_doc2 from "../assets/images/whoWeAre/doc2.jpg";
import whoWeAre_doc3 from "../assets/images/whoWeAre/doc3.jpg";

import section1 from "../assets/images/whoWeAre/section1.png"
import section2 from "../assets/images/whoWeAre/section2.png"
import section3 from "../assets/images/whoWeAre/section3.png"
import section4 from "../assets/images/whoWeAre/section4.png"
import section5 from "../assets/images/whoWeAre/section5.png"
import section6 from "../assets/images/whoWeAre/section6.png"
import section7 from "../assets/images/whoWeAre/section7.png"
import section8 from "../assets/images/whoWeAre/section8Alt.png"

export default function whoWeAre() {
    return (
        <>
            {/* <div id='whoWeAre-container' className='container mb-5'>
                <div className='row h-100'>
                    <div className='col-12 col-md-6 ps-0 d-flex align-items-center'>
                        <h1 id='whoWeAre-heading' className='display-4 ps-5 fw-bold'>Who We Are</h1>
                        <div id='whoWeAre-content' className='text-white py-5 p-sm-5'>
                            <h4 className='py-md-5'>
                                Launched in 2022, MED D is technology startup that makes booking offline doctor appointments easier and more flexible so that our customers don’t have to wait for their turn when visiting a doctor. With technology being pivotal to us, we promise to deliver the best experience between our customers and doctors.
                            </h4>
                        </div>

                    </div>

                    <div className='col-12 hospitalSeatsImg col-md-6 p-0 m-0'></div>
                </div>
            </div>

            <div id='whatWeProvide-container-1' className='container my-5'>
                <div className='row h-100'>
                    <FormatQuoteIcon className='opening-quote' />
                    <div id='whatWeProvide-1-content' className='col-12 col-md-11 col-lg-10 whoWeAre-theme text-white d-flex ps-5 pe-5 pe-md-0 align-items-center'>
                        <h3 className='w-75 pt-5 pb-3 py-sm-5'>We strive to provide our customers with a simple platform to book, modify and track appointments with their doctors thereby saving their time at discounted prices.</h3>
                        <img id='whoWeAre-mobilePic' src={mobileInHand} />
                    </div>
                </div>
            </div>

            <div id='whatWeProvide-container-1' className='container my-5'>
                <div className='row h-100'>
                    <FormatQuoteIcon className='opening-quote' />
                    <div id='whatWeProvide-1-content' className='col-12 col-md-11 whoWeAre-theme text-white d-flex ps-5 pe-5 pe-md-0 align-items-center'>
                        <h3 className='w-75 pt-5 pb-3 py-sm-5'>We support our doctors with the simplicity of our technology so as to operate with ease, multiply their earnings and establish their digital presence.</h3>
                        <div className='h-100 d-flex'>
                            <img id='whoWeAre-doc1' src={whoWeAre_doc1} />
                        </div>
                        <div className='h-100 d-flex align-items-center'>
                            <img id='whoWeAre-doc2' src={whoWeAre_doc2} />
                        </div>
                        <div className='h-100 d-flex align-items-end'>
                            <img id='whoWeAre-doc3' src={whoWeAre_doc3} />
                        </div>
                    </div>
                </div>
            </div> */}
                <img className='w-100' src={section1} />
                <img className='w-100' src={section2} />
            <div className='container'>
                <img className='w-100' src={section3} />
                <img className='w-100' src={section4} />
                <img className='w-100' src={section5} />
                <img className='w-100' src={section6} />
                <img className='w-100' src={section7} />
                <img className='w-100 contact-us' src={section8} />
            </div>



        </>
    );

}