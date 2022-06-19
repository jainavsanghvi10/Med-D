import React, { useState, useEffect } from 'react'
import 'bootstrap/js/dist/carousel'
import { Link } from 'react-router-dom';
import '../assets/styles/newDesign.css';

import thumbnailDoc from '../assets/images/thumbnailDoc.png'

import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { Button, IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { Chip } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import Badge from '@mui/material/Badge';
import ButtonGroup from '@mui/material/ButtonGroup';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';

import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import TimerIcon from '@mui/icons-material/Timer';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { People } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { Avatar } from '@mui/material';
import { Rating } from '@mui/material';

import MedicationIcon from '@mui/icons-material/Medication';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MapIcon from '@mui/icons-material/Map';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

export default function PatientSideBooking() {

    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <div style={{ background: '#F6FCFF' }} className='container py-4'>
                <div className='row align-items-center'>
                    <div className='col-12 col-sm-6'>
                        <Avatar
                            className='my-2 mx-auto'
                            alt="Doc Avatar"
                            src={thumbnailDoc}
                            sx={{ width: 240, height: 240, bgcolor: 'pink' }}
                        />
                        <h4 className='text-center fw-bold'>Anna De Armas</h4>
                    </div>
                    <div className='col-12 col-sm-6'>

                        <div class="row g-3 mb-1 align-items-center">
                            <div class="col-6 col-sm-6 col-md-5 col-lg-4">
                                <label for="inputPassword6" class="col-form-label">Specialization</label>
                            </div>
                            <div class="col">
                                <input disabled type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                            </div>
                        </div>
                        <div class="row g-3 mb-1 align-items-center">
                            <div class="col-6 col-sm-6 col-md-5 col-lg-4">
                                <label for="inputPassword6" class="col-form-label">Clinic Name</label>
                            </div>
                            <div class="col">
                                <input disabled type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                            </div>
                        </div>
                        <div class="row g-3 mb-1 align-items-center">
                            <div class="col-6 col-sm-6 col-md-5 col-lg-4">
                                <label for="inputPassword6" class="col-form-label">Clinic Location</label>
                            </div>
                            <div class="col">
                                <input disabled type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                            </div>
                        </div>
                        <div class="row g-3 mb-1 align-items-center">
                            <div class="col-6 col-sm-6 col-md-5 col-lg-4">
                                <label for="inputPassword6" class="col-form-label">City</label>
                            </div>
                            <div class="col">
                                <input disabled type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                            </div>
                        </div>
                        <div class="row g-3 mb-1 align-items-center">
                            <div class="col-6 col-sm-6 col-md-5 col-lg-4">
                                <label for="inputPassword6" class="col-form-label">State</label>
                            </div>
                            <div class="col">
                                <input disabled type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                            </div>
                        </div>
                        <div class="row g-3 mb-1 align-items-center">
                            <div class="col-6 col-sm-6 col-md-5 col-lg-4">
                                <label for="inputPassword6" class="col-form-label">Experience</label>
                            </div>
                            <div class="col">
                                <input disabled type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                            </div>
                        </div>
                        <div class="row g-3 mb-1 align-items-center">
                            <div class="col-6 col-sm-6 col-md-5 col-lg-4">
                                <label for="inputPassword6" class="col-form-label">Fees</label>
                            </div>
                            <div class="col">
                                <input disabled type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container p-0 mt-4'>
                    <Box sx={{ width: '100%', bgcolor: 'primary.dark' }} className='px-0'>
                        <Box className='px-0' sx={{ borderBottom: 1, borderColor: 'divider'}} >
                            <Tabs style={{ background: '#C6E7FF' }} value={value} onChange={handleChange} aria-label="basic tabs example" variant='scrollable' scrollButtons="auto">
                                <Tab label="Item One" {...a11yProps(0)} />
                                <Tab label="Item Two" {...a11yProps(1)} />
                                <Tab label="Item Three" {...a11yProps(2)} />
                                <Tab label="Item Three" />
                                <Tab label="Item Three" />
                                <Tab label="Item Three" />
                                <Tab label="Item Three" />
                                <Tab label="Item Three" />
                            </Tabs>
                        </Box>
                        <TabPanel style={{ background: '#F6FCFF' }} value={value} index={0}>
                            <div className='px-0'>
                                <h4 className='fw-bold'>Morning</h4>
                                <div>
                                    {/* Available */}
                                    <ButtonGroup style={{ background: '#C6E7FF' }} className='me-1 mb-2 me-sm-3 mb-sm-3' variant="outlined" aria-label="outlined button group">
                                        <Button className='text-black' startIcon={<WatchLaterIcon fontSize='small' />}>HH:MM</Button>
                                    </ButtonGroup>

                                    {/* Disabled  */}
                                    <ButtonGroup className='me-1 mb-2 me-sm-3 mb-sm-3' variant="contained" aria-label="outlined button group">
                                        <Button className='text-black' disabled startIcon={<WatchLaterIcon fontSize='small' />}>HH:MM</Button>
                                    </ButtonGroup>

                                </div>
                            </div>

                            <Divider className='my-4 my-md-5' />

                            <div>
                                <h4 className='fw-bold'>Afternoon</h4>
                            </div>

                            <Divider className='my-4 my-md-5' />

                            <div>
                                <h4 className='fw-bold'>Evening</h4>
                            </div>


                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            Item Two
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            Item Three
                        </TabPanel>
                    </Box>
                </div>
            </div>
        </>
    );
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
