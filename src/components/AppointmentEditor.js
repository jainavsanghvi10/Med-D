import React, { useRef, useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import firebase from "firebase";
import { enc, AES } from "crypto-js/core";
import { Box } from '@mui/system';
import { Button, IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import ButtonGroup from '@mui/material/ButtonGroup';
import WatchLaterIcon from '@mui/icons-material/WatchLater';

export const AppointmentEditor = () => {

  const [slotInfo, setSlotInfo] = useState();
  const [Did, setDid] = useState();
  const [error, setError] = useState("");

  const { currentUser } = useAuth();
  const {isDoctor} = useAuth();
  const navigate = useNavigate();

  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
      setValue(newValue);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
      setAnchorEl(null);
  };

  // check if user is a doctor
  if(isDoctor === false){
    navigate("/");
  }

  useEffect(() => {
    if (currentUser == null) {
      navigate("/signup");
    }

    var ref = firebase.database().ref(`Doctors/${currentUser.uid}/`);
    ref.on("value", (snapshot) => {
      const data = snapshot.val();
      setSlotInfo(data);
    });

    const params = new URLSearchParams(window.location.search);
    const DID = params.get("Did");
    setDid(DID);
    console.log(currentUser);
    if (currentUser && DID == null) {
      navigate({
        pathname: "/appointment-editor",
        search: `?Did=${currentUser.uid}`,
      });
    }
    //eslint-disable-next-line
  }, []);

  window.onload = (event) => {
    fetchSlotData();
  };

  /* Setting dates of 7 days from today */
  const weekDates = [null];
  // add Today's date
  weekDates.push(new Date(Date.now()));
  for (let i = 1; i <= 7; i++) {
    let dateI = new Date(weekDates[1]);
    dateI.setDate(dateI.getDate() + i);
    weekDates.push(dateI);
  }

  /* function to convert from Date object to string */
  function DateToString(date) {
    return (
      date.getFullYear() +
      "-" +
      `${date.getMonth() < 10 ? "0" : ""}` +
      (date.getMonth() + 1) +
      "-" +
      `${date.getDate() < 10 ? "0" : ""}` +
      date.getDate()
    );
  }

  /* function to fetch slot data of a date */
  function fetchSlotData() {
    var ref = firebase.database().ref(`Doctors/${currentUser.uid}/`);
    ref.on("value", (snapshot) => {
      const data = snapshot.val();
      setSlotInfo(data);
    });
    console.log("slot data fetched")
  }

  function updateSlot(ddate, time, maxPerson) {
    if (!currentUser) navigate("/signup");
    else {
        let patientName = prompt("Please Enter Patient's Name");
        if(window.confirm("Do You Want To Confirm This Slot Booking")){
            var key = time + "_" + maxPerson;
            let data = increAttendanceCount(Did, ddate, key, true);
            console.log("Data = "  + data)
            if (data < maxPerson) {
                let t = true;
                for (let i = 0; i < maxPerson && t; i++) {
                    let id = updatePatientId(Did, ddate, key, i, "xxx", true);
                    console.log(i +  " "  + id)

                    if (id === "NULL") {
                        let encrypted = AES.encrypt(patientName, currentUser.uid);
                        const identificationKey = "!@#%";
                        let pid = identificationKey + encrypted;
                        updatePatientId(Did, ddate, key, i, pid, false);
                        console.log("Slots Avalaible !");
                        console.log("Patient Booked SuccesFully!");
                        setError("Patient Booked Successfully");
                        t = false;
                    }
                }
                increAttendanceCount(Did, ddate, key, false);
            } else console.log("Sorry, Slots are full!");
        }
    }
  }

  function updatePatientId(Did, date, key, i, Pid, isCheck) {
    var ref = firebase
      .database()
      .ref(`Doctors/${Did}/${date}/${key}/${i}/PatientId`);
    let count = "NULL";
    ref.on("value", (snapshot) => {
      const data = snapshot.val();
      count = data;
    });

    if (isCheck) {
      return count;
    }
    var ref = firebase.database().ref(`Doctors/${Did}/${date}/${key}/${i}`);
    ref.update({
      PatientId: Pid
    });
  }

  function increAttendanceCount(Did, date, key, isCheck) {
    var ref = firebase
      .database()
      .ref(`Doctors/${Did}/${date}/${key}/AttendanceCount`);
    let count = 99;
    ref.on("value", (snapshot) => {
      const data = snapshot.val();
      count = data;
    });

    if (isCheck) {
      return count;
    }

    count = count + 1;
    var ref = firebase.database().ref(`Doctors/${Did}/${date}/${key}`);
    ref.update({
      AttendanceCount: count,
    });
  }

  const allSlots = [];
  const dateNavigation = [null];
  const morningSlots = [null];
  const afternoonSlots = [null];
  const eveningSlots = [null];
  if(slotInfo != undefined){
    console.log(slotInfo);
    for (let i = 1; i <= 7; i++) {
      dateNavigation.push(
        <Tab label={weekDates[i].getDate() + " / " +`${weekDates[i].getMonth() < 10 ? "0" : ""}` +
              weekDates[i].getMonth()} 
              {...a11yProps(i-1)} />
      );

      let temp = slotInfo[DateToString(weekDates[i])];
      const morningSlotsDayI = [];
      const afternoonSlotsDayI = [];
      const eveningSlotsDayI = [];
      let t = 0;
      for (let s in temp) {
        let time = s.split("_")[0];
        let totalSlotAtTime = s.split("_")[1];

        let bookedslots = Object.values(temp)[t].AttendanceCount;
        t++;

        if (time.split(":")[0] < 12) {
          if(totalSlotAtTime > bookedslots)
          morningSlotsDayI.push(
            <ButtonGroup
            onClick={()=>{updateSlot(DateToString(weekDates[i]),time, totalSlotAtTime);}}
            style={{ background: '#C6E7FF' }} className='me-1 mb-2 me-sm-3 mb-sm-3' variant="outlined" aria-label="outlined button group">
                <Button className='text-black' startIcon={<WatchLaterIcon fontSize='small' />}>{time}</Button>
            </ButtonGroup>
          );
        } else {
          if (time.split(":")[0] < 17) {
            if(totalSlotAtTime > bookedslots)
            afternoonSlotsDayI.push(
              <ButtonGroup
              onClick={()=>{updateSlot(DateToString(weekDates[i]),time, totalSlotAtTime);}}
              style={{ background: '#C6E7FF' }} className='me-1 mb-2 me-sm-3 mb-sm-3' variant="outlined" aria-label="outlined button group">
                <Button className='text-black' startIcon={<WatchLaterIcon fontSize='small' />}>{time}</Button>
              </ButtonGroup>
            );
          } else {
            if(totalSlotAtTime > bookedslots)
            eveningSlotsDayI.push(
              <ButtonGroup
              onClick={()=>{updateSlot(DateToString(weekDates[i]),time, totalSlotAtTime);}}
              style={{ background: '#C6E7FF' }} className='me-1 mb-2 me-sm-3 mb-sm-3' variant="outlined" aria-label="outlined button group">
                <Button className='text-black' startIcon={<WatchLaterIcon fontSize='small' />}>{time}</Button>
              </ButtonGroup>
            );
          }
        }
      }
      morningSlots.push(morningSlotsDayI);
      afternoonSlots.push(afternoonSlotsDayI);
      eveningSlots.push(eveningSlotsDayI);

      allSlots.push(
        <TabPanel style={{background:'#F6FCFF'}} value={value} index={i-1}>
          <div>
              <h4 className='fw-bold'>Morning</h4>
              <div>
                  {morningSlots[i]}
              </div>
          </div>

          <Divider className='my-4 my-md-5' />

          <div>
              <h4 className='fw-bold'>Afternoon</h4>
              <div>
                  {afternoonSlots[i]}
              </div>
          </div>

          <Divider className='my-4 my-md-5' />

          <div>
              <h4 className='fw-bold'>Evening</h4>
              <div>
                  {eveningSlots[i]}
              </div>
          </div>
        </TabPanel>
      )
    }
  }

  return (
    <div className="bg-white mt-auto mb-2 pb-2">
      {error &&
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        {error}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>}
      <h2 className="ms-5 ps-3 pt-3">Appointments</h2>
      <div className='container p-0 mt-4'>
          <Box sx={{ width: '100%', bgcolor: 'primary.dark' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
                  <Tabs style={{background:'#C6E7FF'}} value={value} onChange={handleChange} aria-label="basic tabs example" variant='scrollable' scrollButtons="auto">
                      {dateNavigation}
                  </Tabs>
              </Box>
              {allSlots}
          </Box>
      </div>
    </div>
  );
};




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