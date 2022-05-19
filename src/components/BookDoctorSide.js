import React, { useRef, useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import firebase from 'firebase';
import { storage } from '../firebase';

export const BookDoctorSide = () => {
    return (
        <div className='container border border-5 mt-4 mb-4 rounded'>
            <div></div>
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
    );
}