import React, { useState, useEffect } from 'react'
import 'bootstrap/js/dist/carousel'
import { Link } from 'react-router-dom';
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

export default function doctorCards() {


    return (
        <>
            <div className='text-center mt-3 mt-sm-4'>
                <h1>Search Doctors, Make Appointments</h1>
                <h3 className='text-secondary'>Discover the best doctors and clinics</h3>
            </div>
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-6 col-md-3'>
                        <FormControl className='w-100'>
                            <InputLabel id="demo-simple-select-label">Speciality</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Age"
                            // onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
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
                            // onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
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
                            // onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
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
                            // onChange={handleChange}
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
                        <Button><PersonSearchIcon sx={{ fontSize: 50 }} /></Button>
                    </div>
                </div>

            </div>

            <div className='container border mt-2 mt-sm-5 py-2 py-sm-4' style={{borderRadius:'25px', background:'rgb(12,25,41)'}}>
                <div className='row'>
                    <div className='col my-3 doctor-card'>
                        <div className='doctor-card-inner'>
                            <div className='doctor-card-front d-flex flex-column justify-content-center'>
                                <Avatar
                                    className='my-2 mx-auto'
                                    alt="Doc Avatar"
                                    src={thumbnailDoc}
                                    sx={{ width: 136, height: 136, bgcolor: 'lightblue' }}
                                />
                                <span className='fw-bold'>Anna De Armas</span>
                                    <div>
                                        <Rating name="read-only" value='4' readOnly />
                                    </div>
                                <div className='d-flex justify-content-around flex-column'>
                                    <div>
                                        <span>Experience: </span>
                                        <span className='text-muted'>5yrs</span>
                                    </div>
                                    <div>
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
                                        <span>Dermatologist</span>
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
                    </div>
                    <div className='col my-3 doctor-card'>
                        <div className='doctor-card-inner'>
                            <div className='doctor-card-front d-flex flex-column justify-content-center'>
                                <Avatar
                                    className='my-2 mx-auto'
                                    alt="Doc Avatar"
                                    src={thumbnailDoc}
                                    sx={{ width: 136, height: 136, bgcolor: 'lightblue' }}
                                />
                                <span className='fw-bold'>Anna De Armas</span>
                                    <div>
                                        <Rating name="read-only" value='4' readOnly />
                                    </div>
                                <div className='d-flex justify-content-around flex-column'>
                                    <div>
                                        <span>Experience: </span>
                                        <span className='text-muted'>5yrs</span>
                                    </div>
                                    <div>
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
                                        <span>Dermatologist</span>
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
                    </div>
                    <div className='col my-3 doctor-card'>
                        <div className='doctor-card-inner'>
                            <div className='doctor-card-front d-flex flex-column justify-content-center'>
                                <Avatar
                                    className='my-2 mx-auto'
                                    alt="Doc Avatar"
                                    src={thumbnailDoc}
                                    sx={{ width: 136, height: 136, bgcolor: 'lightblue' }}
                                />
                                <span className='fw-bold'>Anna De Armas</span>
                                    <div>
                                        <Rating name="read-only" value='4' readOnly />
                                    </div>
                                <div className='d-flex justify-content-around flex-column'>
                                    <div>
                                        <span>Experience: </span>
                                        <span className='text-muted'>5yrs</span>
                                    </div>
                                    <div>
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
                                        <span>Dermatologist</span>
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
                    </div>
                    <div className='col my-3 doctor-card'>
                        <div className='doctor-card-inner'>
                            <div className='doctor-card-front d-flex flex-column justify-content-center'>
                                <Avatar
                                    className='my-2 mx-auto'
                                    alt="Doc Avatar"
                                    src={thumbnailDoc}
                                    sx={{ width: 136, height: 136, bgcolor: 'lightblue' }}
                                />
                                <span className='fw-bold'>Anna De Armas</span>
                                    <div>
                                        <Rating name="read-only" value='4' readOnly />
                                    </div>
                                <div className='d-flex justify-content-around flex-column'>
                                    <div>
                                        <span>Experience: </span>
                                        <span className='text-muted'>5yrs</span>
                                    </div>
                                    <div>
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
                                        <span>Dermatologist</span>
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
                    </div>
                    <div className='col my-3 doctor-card'>
                        <div className='doctor-card-inner'>
                            <div className='doctor-card-front d-flex flex-column justify-content-center'>
                                <Avatar
                                    className='my-2 mx-auto'
                                    alt="Doc Avatar"
                                    src={thumbnailDoc}
                                    sx={{ width: 136, height: 136, bgcolor: 'lightblue' }}
                                />
                                <span className='fw-bold'>Anna De Armas</span>
                                    <div>
                                        <Rating name="read-only" value='4' readOnly />
                                    </div>
                                <div className='d-flex justify-content-around flex-column'>
                                    <div>
                                        <span>Experience: </span>
                                        <span className='text-muted'>5yrs</span>
                                    </div>
                                    <div>
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
                                        <span>Dermatologist</span>
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
                    </div>
                    <div className='col my-3 doctor-card'>
                        <div className='doctor-card-inner'>
                            <div className='doctor-card-front d-flex flex-column justify-content-center'>
                                <Avatar
                                    className='my-2 mx-auto'
                                    alt="Doc Avatar"
                                    src={thumbnailDoc}
                                    sx={{ width: 136, height: 136, bgcolor: 'lightblue' }}
                                />
                                <span className='fw-bold'>Anna De Armas</span>
                                    <div>
                                        <Rating name="read-only" value='4' readOnly />
                                    </div>
                                <div className='d-flex justify-content-around flex-column'>
                                    <div>
                                        <span>Experience: </span>
                                        <span className='text-muted'>5yrs</span>
                                    </div>
                                    <div>
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
                                        <span>Dermatologist</span>
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
                    </div>
                    <div className='col my-3 doctor-card'>
                        <div className='doctor-card-inner'>
                            <div className='doctor-card-front d-flex flex-column justify-content-center'>
                                <Avatar
                                    className='my-2 mx-auto'
                                    alt="Doc Avatar"
                                    src={thumbnailDoc}
                                    sx={{ width: 136, height: 136, bgcolor: 'lightblue' }}
                                />
                                <span className='fw-bold'>Anna De Armas</span>
                                    <div>
                                        <Rating name="read-only" value='4' readOnly />
                                    </div>
                                <div className='d-flex justify-content-around flex-column'>
                                    <div>
                                        <span>Experience: </span>
                                        <span className='text-muted'>5yrs</span>
                                    </div>
                                    <div>
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
                                        <span>Dermatologist</span>
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
                    </div>
                    <div className='col my-3 doctor-card'>
                        <div className='doctor-card-inner'>
                            <div className='doctor-card-front d-flex flex-column justify-content-center'>
                                <Avatar
                                    className='my-2 mx-auto'
                                    alt="Doc Avatar"
                                    src={thumbnailDoc}
                                    sx={{ width: 136, height: 136, bgcolor: 'lightblue' }}
                                />
                                <span className='fw-bold'>Anna De Armas</span>
                                    <div>
                                        <Rating name="read-only" value='4' readOnly />
                                    </div>
                                <div className='d-flex justify-content-around flex-column'>
                                    <div>
                                        <span>Experience: </span>
                                        <span className='text-muted'>5yrs</span>
                                    </div>
                                    <div>
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
                                        <span>Dermatologist</span>
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
                    </div>
                    <div className='col my-3 doctor-card'>
                        <div className='doctor-card-inner'>
                            <div className='doctor-card-front d-flex flex-column justify-content-center'>
                                <Avatar
                                    className='my-2 mx-auto'
                                    alt="Doc Avatar"
                                    src={thumbnailDoc}
                                    sx={{ width: 136, height: 136, bgcolor: 'lightblue' }}
                                />
                                <span className='fw-bold'>Anna De Armas</span>
                                    <div>
                                        <Rating name="read-only" value='4' readOnly />
                                    </div>
                                <div className='d-flex justify-content-around flex-column'>
                                    <div>
                                        <span>Experience: </span>
                                        <span className='text-muted'>5yrs</span>
                                    </div>
                                    <div>
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
                                        <span>Dermatologist</span>
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
                    </div>
                    <div className='col my-3 doctor-card'>
                        <div className='doctor-card-inner'>
                            <div className='doctor-card-front d-flex flex-column justify-content-center'>
                                <Avatar
                                    className='my-2 mx-auto'
                                    alt="Doc Avatar"
                                    src={thumbnailDoc}
                                    sx={{ width: 136, height: 136, bgcolor: 'lightblue' }}
                                />
                                <span className='fw-bold'>Anna De Armas</span>
                                    <div>
                                        <Rating name="read-only" value='4' readOnly />
                                    </div>
                                <div className='d-flex justify-content-around flex-column'>
                                    <div>
                                        <span>Experience: </span>
                                        <span className='text-muted'>5yrs</span>
                                    </div>
                                    <div>
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
                                        <span>Dermatologist</span>
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
                    </div>

                </div>
            </div>


           
        </>
    );
}

