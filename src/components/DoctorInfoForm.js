import React, { useRef, useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import firebase from "firebase";
import db from "../firebase";
import docImage from "../assets/images/Appointment.png"

export const DoctorInfoForm = () => {
    document.body.style.background = 'white';
    return (
        <>

            <div className="container w-75 shadow my-5 py-4 px-5">

                <form id='userProfile'>
                    <h2 className='text-center fw-bold'>User Profile</h2>
                    <img src={docImage} class="rounded mx-auto d-block" alt="..." height={'300vh'}></img>
                    <div class="input-group mb-3 justify-content-center align-items-center">
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="profileImg"></input>
                            <label class="custom-file-label fw-bold " for="profileImg">Profile Image</label>
                        </div>
                        <div class="input-group-append">
                            <span class="input-group-text" id="">Upload</span>
                        </div>
                    </div>

                    {/* //Form Starts */}
                    <div class="form-group row">
                        <label for="inputName" class="col-sm-2 col-form-label">Name:</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputName" placeholder="Enter Full Name"></input>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPhn" class="col-sm-2 col-form-label">MobileNo.:</label>
                        <div class="col-sm-10">
                            <input type="number" class="form-control" id="inputPhn" placeholder="Enter Mobile Number"></input>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputEmail" class="col-sm-2 col-form-label">Email:</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control" id="inputEmail" placeholder="Email"></input>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputRegNo" class="col-sm-2 col-form-label">RegistrationNo.:</label>
                        <div class="col-sm-10">
                            <input type="number" class="form-control" id="inputRegNo" placeholder="Enter Registration Number"></input>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputQual" class="col-sm-2 col-form-label">Qualification:</label>
                        <div class="col-sm-10">
                            {/* <input type="text" class="form-control" id="inputName" placeholder="Enter Full Name"></input> */}
                            <div class="input-group col-sm-10">
                                <div class="input-group-prepend col-sm-4">
                                    <label class="input-group-text" style={{fontWeight:'normal'}} for="inputGroupSelect01">Choose Qualification</label>
                                </div>
                                <select class="custom-select col-sm-8" id="inputGroupSelect01">
                                    <option selected>...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputQual" class="col-sm-2 col-form-label">Speciality:</label>
                        <div class="col-sm-10">
                            {/* <input type="text" class="form-control" id="inputName" placeholder="Enter Full Name"></input> */}
                            <div class="input-group col-sm-10">
                                <div class="input-group-prepend col-sm-4">
                                    <label class="input-group-text" style={{fontWeight:'normal'}} for="inputGroupSelect01">Choose Speciality</label>
                                </div>
                                <select class="custom-select col-sm-8" id="inputGroupSelect01">
                                    <option selected>...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="inputDegree" class="col-sm-2 col-form-label">Degree:</label>
                        <div class="col-sm-10">
                            <div class="input-group align-items-center">
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="inputGroupFile02" multiple></input>
                                </div>
                                <div class="input-group-append">
                                    <span class="input-group-text" id="">Upload</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputExp" class="col-sm-2 col-form-label">Experience:</label>
                        <div class="col-sm-10">
                            <input type="number" class="form-control" id="inputExp" placeholder="Enter Years of Experience"></input>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputFee" class="col-sm-2 col-form-label">Fees:</label>
                        <div class="col-sm-10">
                            <div className="input-group">
                                <span className="input-group-text">₹</span>
                                <input type="number" class="form-control" id="inputFee" placeholder="Enter Expected Consultation Fees"></input>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputAadhar" class="col-sm-2 col-form-label">Aadhar Card:</label>
                        <div class="col-sm-10">
                            <div class="input-group align-items-center">
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="inputGroupFile02"></input>
                                </div>
                                <div class="input-group-append">
                                    <span class="input-group-text" id="">Upload</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPAN" class="col-sm-2 col-form-label">PAN Card:</label>
                        <div class="col-sm-10">
                            <div class="input-group align-items-center">
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="inputGroupFile02"></input>
                                </div>
                                <div class="input-group-append">
                                    <span class="input-group-text" id="">Upload</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputpass" class="col-sm-2 col-form-label">Password:</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="inputpass" placeholder="Password"></input>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputPerAddress">Permanent Address:</label>
                        <input type="text" class="form-control" id="inputPerAddress" placeholder="Enter Premanent Residential Address"></input>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <input type="text" class="form-control" id="inputCity-1" placeholder="City"></input>
                        </div>
                        <div class="form-group col-md-4">
                            <select id="inputState-1" class="form-control">
                                <option selected>Choose State...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div class="form-group col-md-2">
                            {/* <label for="inputZip">Zip</label> */}
                            <input type="text" class="form-control" id="inputZip-1" placeholder="Zip"></input>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="inputAddress">Clinic Address:</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="Enter Premanent Residential Address"></input>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <input type="text" class="form-control" id="inputCity-2" placeholder="City"></input>
                        </div>
                        <div class="form-group col-md-4">
                            {/* <label for="inputState">State</label> */}
                            <select id="inputState-2" class="form-control">
                                <option selected>Choose State...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div class="form-group col-md-2">
                            {/* <label for="inputZip">Zip</label> */}
                            <input type="text" class="form-control" id="inputZip-2" placeholder="Zip"></input>
                        </div>
                    </div>
            
                    <button type="button" class="btn btn-outline-dark fw-bold mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Account Details
                    </button>


                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Payment Options</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    RTGS/NEFT/UPI
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <fieldset class="form-group">
                        <div class="row">
                            <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
                            <div class="col-sm-10">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked></input>
                                    <label class="form-check-label" for="gridRadios1">
                                        First radio
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"></input>
                                    <label class="form-check-label" for="gridRadios2">
                                        Second radio
                                    </label>
                                </div>
                                <div class="form-check disabled">
                                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled></input>
                                    <label class="form-check-label" for="gridRadios3">
                                        Third disabled radio
                                    </label>
                                </div>
                            </div>
                        </div>
                    </fieldset> */}
                    {/* <div class="form-group row">
                        <div class="col-sm-2">Checkbox</div>
                        <div class="col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck1"></input>
                                <label class="form-check-label" for="gridCheck1">
                                    Example checkbox
                                </label>
                            </div>
                        </div>
                    </div> */}
                    <div class="form-group row">
                        <div class="text-center">
                            <button type="submit" class="btn btn-info fw-bold">Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}