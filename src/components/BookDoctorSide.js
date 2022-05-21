import React, { useRef, useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import firebase from 'firebase';
import { storage } from '../firebase';

export const BookDoctorSide = () => {
    const dateRef = useRef();
    const timefromRef = useRef();
    const timetoRef = useRef();
    const peopleperslotRef = useRef();
    const slotdurationRef = useRef();

    function createSlots(e){
        e.preventDefault();
        console.log("creating slots");

        const form = document.getElementById("create-slot-form");
        console.log(dateRef.current.value, timefromRef.current.value, timetoRef.current.value, peopleperslotRef.current.value, slotdurationRef.current.value);
    }
    
    return (
        <div className='bg-white mt-auto'>
            <h2 className='ms-5 ps-3 pt-3'>Doctors' ID</h2>
            <form onSubmit={createSlots} id="create-slot-form" className='container border border-5 mt-4 mb-4 rounded'>
                <div className="form-group col-2 mt-3">
                    <label htmlFor="SlotFrom" className="form-label">Choose Date</label>
                    <input ref={dateRef} type="date" className="form-control" id="SlotFrom" aria-describedby="emailHelp" placeholder="Enter email"/>
                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <div className='container border border-5 mt-4 mb-4 rounded'>
                    <div className='row mt-3 mb-4'>
                        <div className="form-group col-2">
                            <label htmlFor="SlotFrom" className="form-label">From</label>
                            <input ref={timefromRef} type="time" className="form-control" id="SlotFrom" aria-describedby="emailHelp" placeholder="Enter email"/>
                            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                        </div>
                        <div className="form-group col-2">
                            <label htmlFor="SlotTo" className="form-label">To</label>
                            <input ref={timetoRef} type="time" className="form-control" id="SlotTo" aria-describedby="emailHelp" placeholder="Enter email"/>
                            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                        </div>
                        <div className="form-group col-3">
                            <label htmlFor="PeoplePerSlot" className="form-label">People per Slot</label>
                            <div className="col-sm-10">
                                <input ref={peopleperslotRef} type="number" className="form-control" id="PeoplePerSlot" placeholder="Enter Number"/>
                            </div>
                        </div>
                        <div className="form-group col-3">
                            <label htmlFor="SlotDuration" className="form-label">Slot Duration {"( in minutes )"}</label>
                            <div className="col-sm-10">
                                <input ref={slotdurationRef} type="number" className="form-control" id="SlotDuration" placeholder="Enter 1 Slot Time"/>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className='btn btn-dark mb-3'>Create Slot</button>
                </div>
            </form>

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