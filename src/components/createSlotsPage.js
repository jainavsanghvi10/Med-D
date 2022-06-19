import React, { useState, useEffect } from 'react'
import 'bootstrap/js/dist/carousel'
import { Link } from 'react-router-dom';
import '../assets/styles/newDesign.css';

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
import InfoIcon from '@mui/icons-material/Info';

export default function CreateSlotsPage() {
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

    // const [open, setOpen] = React.useState(false);
    // const handleModalOpen = () => setOpen(true);
    // const handleModalClose = () => setOpen(false);

    return (
        <>
            <div style={{background:'#F6FCFF'}} className='container mt-4 py-3 p-sm-5 border rounded'>
                <div className='row d-flex justify-content-between'>
                    <TextField
                        className='col-12 my-2 px-1 col-sm-4 col-xl-2'
                        id="date"
                        label="Choose Date"
                        type="date"
                        defaultValue="2017-05-24"
                        // sx={{ width: 150 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        className='col-6 my-2 px-1 col-sm-4 col-xl-2'
                        id="time1"
                        label="From"
                        type="time"
                        defaultValue="07:30"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            step: 300, // 5 min
                        }}
                    // sx={{ width: 150 }}
                    />
                    <TextField
                        className='col-6 my-2 px-1 col-sm-4 col-xl-2'
                        id="time2"
                        label="To"
                        type="time"
                        defaultValue="08:30"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            step: 300, // 5 min
                        }}
                    // sx={{ width: 150 }}
                    />
                    <div className='col-6 my-2 col-sm-4 col-xl-2 d-flex flex-row align-items-end'>
                        <PeopleAltIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField className='w-100' id="input-with-sx" label="People Per Slot" variant="standard" />
                    </div>

                    <div className='col-6 my-2 px-1 col-sm-4 col-xl-2 d-flex flex-row align-items-end'>
                        <TimerIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField className='w-100' id="input-with-sx" label="Duration Of Slot" variant="standard" />
                    </div>
                    <Button className='col-6 mx-auto my-2 px-1 col-sm-4 col-xl-2' variant="contained" style={{ fontWeight: '700', backgroundColor: 'rgb(33, 209, 146)' }} size='small'>Make Slots</Button>
                </div>
            </div>
            <div className='container p-0 mt-4'>
                <Box sx={{ width: '100%', bgcolor: 'primary.dark' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
                        <Tabs style={{background:'#C6E7FF'}} value={value} onChange={handleChange} aria-label="basic tabs example" variant='scrollable' scrollButtons="auto">
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
                    <TabPanel style={{background:'#F6FCFF'}} value={value} index={0}>
                        <div>
                            <h4 className='fw-bold'>Morning</h4>
                            <div>
                                <ButtonGroup className='me-1 mb-2 me-sm-3 mb-sm-3' variant="contained" aria-label="outlined button group">
                                    <Button className='text-black editableButton' disabled startIcon={<WatchLaterIcon fontSize='small' />}>HH:MM</Button>
                                    <Button className='px-0 py-1 desktopView editableButton-icon'>
                                        <IconButton sx={{ borderRadius: '0px', color: 'white' }}>
                                            <EditIcon fontSize='small' />
                                        </IconButton>
                                    </Button>
                                    <Button className='px-0 py-1 desktopView'>
                                        <IconButton sx={{ borderRadius: '0px', color: 'white' }}>
                                            <DeleteIcon fontSize='small' />
                                        </IconButton>
                                    </Button>
                                    <Button className='px-0 py-1 mobileView'
                                        id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                    >
                                        <IconButton sx={{ borderRadius: '0px', color: 'white' }}>
                                            <KeyboardArrowDownIcon fontSize='small' />
                                        </IconButton>
                                    </Button>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem onClick={handleClick}>Edit</MenuItem>
                                        <MenuItem onClick={handleClose}>Delete</MenuItem>
                                    </Menu>
                                    
                                    {/* Modal That Opens When clicked on Pen Button */}
                                    <div class="modal" tabindex="-1">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title">Modal title</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <p>Modal body text goes here.</p>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Save changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ButtonGroup>



                                <ButtonGroup className='me-1 mb-2 me-sm-3 mb-sm-3' variant="contained" aria-label="outlined button group">
                                    <Button className='text-black infoButton' disabled startIcon={<WatchLaterIcon fontSize='small' />}>HH:MM</Button>
                                    <Button className='px-0 py-1 desktopView infoButton-icon'>
                                        <IconButton sx={{ borderRadius: '0px', color: 'white' }}>
                                            <InfoIcon fontSize='small' />
                                        </IconButton>
                                    </Button>
                                    <Button className='px-0 py-1 mobileView'
                                        id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                    >
                                        <IconButton sx={{ borderRadius: '0px', color: 'white' }}>
                                            <KeyboardArrowDownIcon fontSize='small' />
                                        </IconButton>
                                    </Button>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem onClick={handleClick}>Edit</MenuItem>
                                        <MenuItem onClick={handleClose}>Delete</MenuItem>
                                    </Menu>
                                    
                                    {/* Modal That Opens When clicked on Pen Button */}
                                    <div class="modal" tabindex="-1">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title">Modal title</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <p>Modal body text goes here.</p>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Save changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
