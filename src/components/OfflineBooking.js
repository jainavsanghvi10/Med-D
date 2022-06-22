import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import db from "../firebase";
import doctorProfile from "../assets/images/doctorProfile.svg";
import { state, cities, specialization } from "./Arrays";
import 'bootstrap/js/dist/carousel'
import '../assets/styles/newDesign.css';
import thumbnailDoc from '../assets/images/thumbnailDoc.png'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { IconButton } from '@mui/material';
import { Button } from '@mui/material';
import { height } from '@mui/system';
import { Avatar } from '@mui/material';
import { Rating } from '@mui/material';
import { Chip } from '@mui/material';

import MedicationIcon from '@mui/icons-material/Medication';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MapIcon from '@mui/icons-material/Map';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
// import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export const OfflineBooking = () => {
  const [stateVal, setStateVal] = useState();
  const [cityVal, setCityVal] = useState();
  const [specialityVal, setSpecialityVal] = useState();


  const [docData, setDocData] = useState(null);

  useEffect(() => {
    /* To fetch all doctors at load */
    if (docData === null) {
      db.collection("DoctorData")
        .get()
        .then((querySnapshot) => {
          const tempData = [];
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            tempData.push([doc.id, doc.data()]);
          });
          console.log("available", tempData);
          setDocData(tempData);
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    }
  });

  function SearchDoctors() {
    db.collection("DoctorData")
      .where("State", "==", `${stateVal.toLowerCase()}`)
      .get()
      .then((querySnapshot) => {
        const tempData = [];
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          tempData.push([doc.id, doc.data()]);
        });
        console.log("available", tempData);
        setDocData(tempData);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }

  const docBox = [];
  if (docData != null) {
    for (let i = 0; i < docData.length; i++) {
      let doc = docData[i][1];
      docBox.push(
        
        <div className='col my-3 doctor-card'>
            <Link to={`/book-patient-side?Did=${docData[i][0]}`}>
                <div className='doctor-card-inner'>
                    <div className='doctor-card-front'>
                        <Avatar
                            className='my-2 mx-auto'
                            alt="Doc Avatar"
                            src={thumbnailDoc}
                            sx={{ width: 136, height: 136, bgcolor: 'pink' }}
                        />
                        <span><b>{"Dr. " + doc.FirstName + " " + doc.LastName}</b></span>
                        <div className='row'>
                            <div className='col'>
                                <Rating name="read-only" value='4' readOnly />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <span>Experience: </span>
                                <span className='text-muted'>5yrs</span>
                            </div>
                            <div className='col'>
                                <span>Fee: </span>
                                <span className='text-muted'>₹500</span>
                            </div>
                        </div>
                    </div>
                    <div className='doctor-card-back'>
                    
                        <div className='row my-1 doctor-card-info'>
                            <div className='col'>
                                <Chip icon={<MedicationIcon />} label="Specialization:" />
                            </div>
                            <div className='col'>
                                <span>{doc.Speciality}</span>
                            </div>
                        </div>

                        <div className='row my-1 doctor-card-info'>
                            <div className='col'>
                                <Chip icon={<LocationCityIcon />} label="Clinic Name:" />
                            </div>
                            <div className='col'>
                                <span>Fortis</span>
                            </div>
                        </div>

                        <div className='row my-1 doctor-card-info'>
                            <div className='col-6'>
                                <Chip size='small' icon={<MyLocationIcon />} label="Clinic Location:" />
                            </div>
                            <div className='col'>
                                <span>32 Jump Street</span>
                            </div>
                        </div>

                        <div className='row my-1 doctor-card-info'>
                            <div className='col'>
                                <Chip icon={<LocationSearchingIcon />} label="City:" />
                            </div>
                            <div className='col'>
                                <span>Jaipur</span>
                            </div>
                        </div>

                        <div className='row my-1 doctor-card-info'>
                            <div className='col'>
                                <Chip icon={<MapIcon />} label="State:" />
                            </div>
                            <div className='col'>
                                <span>Rajasthan</span>
                            </div>
                        </div>

                        <div className='row my-1 doctor-card-info'>
                            <div className='col'>
                                <Chip icon={<WatchLaterIcon />} label="Experience:" />
                            </div>
                            <div className='col'>
                                <span>32 Jump Street</span>
                            </div>
                        </div>
                        <div className='row my-1 doctor-card-info'>
                            <div className='col'>
                                <Chip icon={<CurrencyRupeeIcon />} label="Fees:" />
                            </div>
                            <div className='col'>
                                <span>32 Jump Street</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
        
      );
    }
  }

  // Creating dropdown arrays
  let stateDropdown = [];
  for (let i = 0; i < state.length; i++) {
    stateDropdown.push(<MenuItem onClick={()=>{setStateVal(state[i])}} value={state[i]}>{state[i]}</MenuItem>);
  }
  let cityDropdown = [];
  for (let i = 0; i < cities.length; i++) {
    cityDropdown.push(<MenuItem onClick={()=>{setCityVal(cities[i])}} value={cities[i]}>{cities[i]}</MenuItem>);
  }
  let specializationDropdown = [];
  for (let i = 0; i < cities.length; i++) {
    specializationDropdown.push(
      <MenuItem onClick={()=>{setSpecialityVal(specialization[i])}} value={specialization[i]}>{specialization[i]}</MenuItem>
    );
  }

  function handleChange(){
    console.log(stateVal);
  }
  document.body.style.background = 'white';
  return (
    <>
      <div className='text-center'>
          <h1>Search Doctors, Make Appointments</h1>
          <h3 className='text-secondary'>Discover the best doctors and clinics</h3>
      </div>
      <div className='container'>
          <div className='row d-flex justify-content-center'>
              <div className='col-6 col-md-3'>
                  <FormControl className='w-100'>
                      <InputLabel id="demo-simple-select-label">Speciality</InputLabel>
                      <Select
                          value=""
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Age"
                      >
                          {specializationDropdown}
                      </Select>
                  </FormControl>
              </div>

              <div className='col-6 col-md-3'>
                  <FormControl className='w-100'>
                      <InputLabel id="demo-simple-select-label">State</InputLabel>
                      <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Age"
                          onChange={handleChange}
                      >
                          {stateDropdown}
                      </Select>
                  </FormControl>
              </div>

              <div className='col-6 col-md-3'>
                  <FormControl className='w-100'>
                      <InputLabel id="demo-simple-select-label">City</InputLabel>
                      <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Age"
                      >
                          {cityDropdown}
                      </Select>
                  </FormControl>
              </div>

              <div className='col-6 col-md-2'>
                  <FormControl className='w-100'>
                      <InputLabel id="demo-simple-select-helper-label">Sort By</InputLabel>
                      <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          // value={age}
                          label="Sort"
                      >
                          <MenuItem value="">
                              <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Rating</MenuItem>
                          <MenuItem value={20}>Fee</MenuItem>
                          <MenuItem value={30}>Experience</MenuItem>
                      </Select>
                  </FormControl>
              </div>

              <div className='col col-md-1 text-center'>
                  <Button onClick={SearchDoctors}><PersonSearchIcon sx={{ fontSize: 50 }} /></Button>
              </div>
          </div>

      </div>

      <div className='container border mt-5 py-4'>
          <div className='row'>
            {docBox}
          </div>
      </div>
    </>
  );
};
