import React, { useRef, useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import firebase from 'firebase';
import { storage } from '../firebase';
import doctorProfile from '../assets/images/doctorProfile.svg'

export const BookPatientSide = () => {
    return (
        <div className='bg-white'>

            <div className='container pt-4'>
                <div className='row'>
                    <div className="col-3 text-center">
                        <img src={doctorProfile} className="img-thumbnail border-info" alt="..." />
                    </div>
                    <div className='col-6 mt-auto mb-auto'>
                        {/* <span>Doctor: </span>
                        <span>Experience: </span>
                        <span>Specialisation: </span>
                        <span>Contact: </span> */}
                        <form>
                            <div class="form-group row">
                                <label for="docName" class="col-sm-4 col-form-label">Doctor Name:</label>
                                <div class="col-sm-6">
                                    <input type="text" readonly class="form-control" id="docName" value="email@example.com"></input>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="experience" class="col-sm-4 col-form-label">Experience:</label>
                                <div class="col-sm-6">
                                    <input type="text" readonly class="form-control" id="experience" value="email@example.com"></input>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="specialisation" class="col-sm-4 col-form-label">Specialisation:</label>
                                <div class="col-sm-6">
                                    <input type="text" readonly class="form-control" id="specialisation" value="email@example.com"></input>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="contact" class="col-sm-4 col-form-label">Contact:</label>
                                <div class="col-sm-6">
                                    <input type="text" readonly class="form-control" id="contact" value="email@example.com"></input>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>

            </div>

            <div className='container mt-5'>
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
        </div>
    );
}