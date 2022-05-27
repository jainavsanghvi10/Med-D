import React, { useRef, useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import firebase from "firebase";
import { storage } from "../firebase";

export default function AppointmentEditor() {

    document.body.style.background = 'white'
    return (
        <>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button className="nav-link active" id="day-1-tab" data-bs-toggle="tab" data-bs-target="#day-1" type="button" role="tab" aria-controls="day-1" aria-selected="true">DAY1</button>
                    <button className="nav-link" id="day-2-tab" data-bs-toggle="tab" data-bs-target="#day-2" type="button" role="tab" aria-controls="day-2" aria-selected="false">DAY2</button>
                    <button className="nav-link" id="day-3-tab" data-bs-toggle="tab" data-bs-target="#day-3" type="button" role="tab" aria-controls="day-3" aria-selected="false">DAY3</button>
                    <button className="nav-link" id="day-4-tab" data-bs-toggle="tab" data-bs-target="#day-4" type="button" role="tab" aria-controls="day-4" aria-selected="false">DAY4</button>
                    <button className="nav-link" id="day-5-tab" data-bs-toggle="tab" data-bs-target="#day-5" type="button" role="tab" aria-controls="day-5" aria-selected="false">DAY5</button>
                    <button className="nav-link" id="day-6-tab" data-bs-toggle="tab" data-bs-target="#day-6" type="button" role="tab" aria-controls="day-6" aria-selected="false">DAY6</button>
                    <button className="nav-link" id="day-7-tab" data-bs-toggle="tab" data-bs-target="#day-7" type="button" role="tab" aria-controls="day-7" aria-selected="false">DAY7</button>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="day-1" role="tabpanel" aria-labelledby="day-1-tab">
                    <div id='slotContainer-bookPatient' className="container">
                        <div className="row my-2">
                            <div className="col-2 align-self-center">Morning</div>
                            <div className="col-8">
                                <button type="button" class="btn btn-info btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">HH:MM</button>

                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Add Offline Patient</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <form>
                                                    <div class="mb-3">
                                                        {/* <label for="recipient-name" class="col-form-label">Recipient:</label> */}
                                                        <input type="text" class="form-control" id="patient-name" placeholder="Enter Patient Name"></input>
                                                    </div>
                                                    {/* <div class="mb-3">
                                                        <label for="message-text" class="col-form-label">Message:</label>
                                                        <textarea class="form-control" id="message-text"></textarea>
                                                    </div> */}
                                                </form>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary">Book Slot</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="row my-2">
                            <div className="col-2 align-self-center">Afternoon</div>
                            <div className="col-8"><p className='my-2' style={{ color: "grey" }}>No Slots Available</p></div>
                        </div>
                        <hr></hr>
                        <div className="row my-2">
                            <div className="col-2 align-self-center">Evening</div>
                            <div className="col-8"><p className='my-2' style={{ color: "grey" }}>No Slots Available</p></div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="day-2" role="tabpanel" aria-labelledby="day-2-tab">ITS DAY 2</div>
                <div className="tab-pane fade" id="day-3" role="tabpanel" aria-labelledby="day-3-tab">ITS DAY 3</div>
                <div className="tab-pane fade" id="day-4" role="tabpanel" aria-labelledby="day-4-tab">ITS DAY 4</div>
                <div className="tab-pane fade" id="day-5" role="tabpanel" aria-labelledby="day-5-tab">ITS DAY 5</div>
                <div className="tab-pane fade" id="day-6" role="tabpanel" aria-labelledby="day-6-tab">ITS DAY 6</div>
                <div className="tab-pane fade" id="day-7" role="tabpanel" aria-labelledby="day-7-tab">ITS DAY 7</div>
            </div>
        </>
    );
}