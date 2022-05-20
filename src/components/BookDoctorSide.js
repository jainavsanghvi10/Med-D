import React, { useRef, useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import firebase from 'firebase';
import { storage } from '../firebase';

export const BookDoctorSide = () => {
    return (
        <div className='bg-white mt-auto'>
            <h2 className='ms-5 ps-3 pt-3'>Doctors' ID</h2>
            <div className='container border border-5 mt-4 mb-4 rounded'>
                <div className="form-group col-2 mt-3">
                    <label for="SlotFrom" className="form-label">Choose Date</label>
                    <input type="date" className="form-control" id="SlotFrom" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <div className='container border border-5 mt-4 mb-4 rounded'>
                    <div className='row mt-3 mb-4'>
                        <div className="form-group col-2">
                            <label for="SlotFrom" className="form-label">From</label>
                            <input type="time" className="form-control" id="SlotFrom" aria-describedby="emailHelp" placeholder="Enter email"></input>
                            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                        </div>
                        <div className="form-group col-2">
                            <label for="SlotTo" className="form-label">To</label>
                            <input type="time" className="form-control" id="SlotTo" aria-describedby="emailHelp" placeholder="Enter email"></input>
                            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                        </div>
                        <div className="form-group col-3">
                            <label for="PeoplePerSlot" className="form-label">People per Slot</label>
                            <div className="col-sm-10">
                                <input type="number" className="form-control" id="PeoplePerSlot" placeholder="Enter Number"></input>
                            </div>
                        </div>
                        <div className="form-group col-3">
                            <label for="SlotDuration" className="form-label">Slot Duration</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="SlotDuration" placeholder="Enter 1 Slot Time"></input>
                            </div>
                        </div>
                    </div>
                    <div className='btn btn-dark mb-3'>Create Slot</div>
                </div>
            </div>

            <div className='container border border-5 mt-4 mb-4 rounded'>
                <h2>Today's Slots</h2>

                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="day-1" role="tabpanel" aria-labelledby="day-1-tab">
                        {/* Its DAY1 */}
                        <div className='container'>
                            <div className='row my-2'>
                                <div className='col-2 align-self-center'>
                                    Morning
                                </div>
                                <div className='col-8'>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-primary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-primary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-primary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>

                                </div>
                            </div>
                            <hr></hr>
                            <div className='row my-2'>
                                <div className='col-2 align-self-center'>
                                    Afternoon
                                </div>
                                <div className='col-8'>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-primary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>

                                </div>
                            </div>
                            <hr></hr>
                            <div className='row my-2'>
                                <div className='col-2 align-self-center'>
                                    Evening
                                </div>
                                <div className='col-8'>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>
                                    <button className='btn btn-sm btn-secondary mx-2 my-2'>6:30</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}