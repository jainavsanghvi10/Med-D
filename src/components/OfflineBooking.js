import React, { useRef, useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import firebase from 'firebase';
import { storage } from '../firebase';
import doctorProfile from '../assets/images/doctorProfile.svg';




export const OfflineBooking = () => {
    const cityRef = useRef();
    const stateRef = useRef();
    const specialityRef = useRef();

    function bookAppoinmentBtn() {
        const bookAppoinmentBtn = document.getElementById('collapseExample');
        bookAppoinmentBtn.classList.toggle("show");
        console.log("toggle")
    }

    return (
        <>
            <div className="row container my-4 ms-0">
                <div className='col-3'>
                    <label htmlFor='validationCustom03' className='form-label'>
                        Speciality
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        id='speciality'
                        ref={specialityRef}
                        required
                    />
                    <div className='valid-feedback'>Looks Good!</div>
                </div>
                <div className='col-3'>
                    <label htmlFor='validationCustom03' className='form-label'>
                        City
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        id='city'
                        ref={stateRef}
                        required
                    />
                    <div className='valid-feedback'>Looks Good!</div>
                </div>

                <div className='col-3'>
                    <label htmlFor='validationCustom03' className='form-label'>
                        State
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        id='state'
                        ref={stateRef}
                        required
                    />
                    <div className='valid-feedback'>Looks Good!</div>
                </div>
                <div className='col-3 mt-auto'>
                    <button
                        className='btn btn-light btn-outline-dark fw-bold'
                        type='submit'
                        id='signup-btn'
                    >
                        Search
                    </button>
                </div>
            </div>

            <div className="cards">
                <div className="card text-left">
                    <div className="card-body row">
                        <div className="col-2 text-center">
                            <img src={doctorProfile} className="img-thumbnail border-info" alt="..." />
                            <a className="text-info" href=""><b>View Profile</b></a>
                        </div>
                        <div className="col-8">
                            <h5 className="card-title text-info">Dr. P Harihara Murthy</h5>
                            <span className="doc-speciality text-secondary">Shit Specialist</span>
                            <span> | </span>
                            <span className="doc-experience text-secondary">31 Years of Experience</span>

                            <p className="doc-location"><b>Koramangala 5 Block, Bangalore</b></p>
                            <p className="doc-location text-secondary">₹500 Consultation Fee at Clinic</p>
                            <Link to={"/book-patient-side"}>
                                <button id="book-now-btn" className="btn btn-info btn-outline-light" type="button"
                                    onClick={bookAppoinmentBtn}>
                                    Book Appointment
                                </button>
                            </Link>

                        </div>

                    </div>

                    <div className="collapse" id="collapseExample">
                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <a className="nav-item nav-link active" id="day-1-tab" data-toggle="tab" href="#day-1" role="tab" aria-controls="day-1" aria-selected="true">day-1</a>
                                <a className="nav-item nav-link" id="day-2-tab" data-toggle="tab" href="#day-2" role="tab" aria-controls="day-2" aria-selected="false">day-2</a>
                                <a className="nav-item nav-link" id="day-3-tab" data-toggle="tab" href="#day-3" role="tab" aria-controls="day-3" aria-selected="false">day-3</a>
                                <a className="nav-item nav-link" id="day-4-tab" data-toggle="tab" href="#day-4" role="tab" aria-controls="day-4" aria-selected="false">day-4</a>
                                <a className="nav-item nav-link" id="day-5-tab" data-toggle="tab" href="#day-5" role="tab" aria-controls="day-5" aria-selected="false">day-5</a>
                                <a className="nav-item nav-link" id="day-6-tab" data-toggle="tab" href="#day-6" role="tab" aria-controls="day-6" aria-selected="false">day-6</a>
                                <a className="nav-item nav-link" id="day-7-tab" data-toggle="tab" href="#day-7" role="tab" aria-controls="day-7" aria-selected="false">day-7</a>
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="day-1" role="tabpanel" aria-labelledby="day-1-tab">
                                {/* Its DAY1 */}
                                <div className='container'>
                                    <div className='row my-2'>
                                        <div className='col-2 align-self-center'>
                                            Morning
                                        </div>
                                        <div className='col-8'>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>

                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className='row my-2'>
                                        <div className='col-2 align-self-center'>
                                            Afternoon
                                        </div>
                                        <div className='col-8'>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>

                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className='row my-2'>
                                        <div className='col-2 align-self-center'>
                                            Evening
                                        </div>
                                        <div className='col-8'>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>
                                            <button className='btn btn-sm btn-info mx-2 my-2'>6:30</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="day-2" role="tabpanel" aria-labelledby="day-2-tab">Its DAY2</div>
                            <div className="tab-pane fade" id="day-3" role="tabpanel" aria-labelledby="day-3-tab">Its DAY3</div>
                            <div className="tab-pane fade" id="day-4" role="tabpanel" aria-labelledby="day-4-tab">Its DAY4</div>
                            <div className="tab-pane fade" id="day-5" role="tabpanel" aria-labelledby="day-5-tab">Its DAY5</div>
                            <div className="tab-pane fade" id="day-6" role="tabpanel" aria-labelledby="day-6-tab">Its DAY6</div>
                            <div className="tab-pane fade" id="day-7" role="tabpanel" aria-labelledby="day-7-tab">Its DAY7</div>
                        </div>
                    </div>
                    <div className="card-footer text-muted">
                        <button className="btn btn-success btn-sm me-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                                <path
                                    d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                            </svg>
                            95%
                        </button>
                        <a className="text-black" href="">XXX Paitent Stories</a>
                    </div>
                </div>
            </div>

        </>
    );
}
