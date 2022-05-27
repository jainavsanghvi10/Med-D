import React, { useRef, useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import firebase from "firebase";
import { storage } from "../firebase";

export default function AppointmentEditor() {
    document.body.style.background = 'white';
    return (
        <>
            <div className="container border my-3">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Slot Time</th>
                            <th scope="col">Patients</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>HH:MM</td>
                            <td>
                                <ul class="list-group mb-4">
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        Patient Name 1
                                        <div>
                                            <span class="btn btn-sm fw-bold btn-outline-success rounded-pill mx-1">Completed</span>
                                            <span class="btn btn-sm fw-bold btn-warning rounded-pill mx-1">Postpone</span>
                                        </div>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        Patient Name 2
                                        <div>
                                            <span class="btn btn-sm fw-bold btn-outline-success rounded-pill mx-1">Completed</span>
                                            <span class="btn btn-sm fw-bold btn-warning rounded-pill mx-1">Postpone</span>
                                        </div>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        Patient Name 3
                                        <div>
                                            <span class="btn btn-sm fw-bold btn-outline-success rounded-pill mx-1">Completed</span>
                                            <span class="btn btn-sm fw-bold btn-warning rounded-pill mx-1">Postpone</span>
                                        </div>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>HH:MM</td>
                            <td>
                                <ul class="list-group mb-4">
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        Patient Name 1
                                        <div>
                                            <span class="btn btn-sm fw-bold btn-outline-success rounded-pill mx-1">Completed</span>
                                            <span class="btn btn-sm fw-bold btn-warning rounded-pill mx-1">Postpone</span>
                                        </div>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        Patient Name 2
                                        <div>
                                            <span class="btn btn-sm fw-bold btn-outline-success rounded-pill mx-1">Completed</span>
                                            <span class="btn btn-sm fw-bold btn-warning rounded-pill mx-1">Postpone</span>
                                        </div>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        Patient Name 3
                                        <div>
                                            <span class="btn btn-sm fw-bold btn-outline-success rounded-pill mx-1">Completed</span>
                                            <span class="btn btn-sm fw-bold btn-warning rounded-pill mx-1">Postpone</span>
                                        </div>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>HH:MM</td>
                            <td>
                                <ul class="list-group mb-4">
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        Patient Name 1
                                        <div>
                                            <span class="btn btn-sm fw-bold btn-outline-success rounded-pill mx-1">Completed</span>
                                            <span class="btn btn-sm fw-bold btn-warning rounded-pill mx-1">Postpone</span>
                                        </div>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        Patient Name 2
                                        <div>
                                            <span class="btn btn-sm fw-bold btn-outline-success rounded-pill mx-1">Completed</span>
                                            <span class="btn btn-sm fw-bold btn-warning rounded-pill mx-1">Postpone</span>
                                        </div>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        Patient Name 3
                                        <div>
                                            <span class="btn btn-sm fw-bold btn-outline-success rounded-pill mx-1">Completed</span>
                                            <span class="btn btn-sm fw-bold btn-warning rounded-pill mx-1">Postpone</span>
                                        </div>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}