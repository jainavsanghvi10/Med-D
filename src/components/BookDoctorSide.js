import React, { useRef, useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import firebase from "firebase";
import db from "../firebase";

import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import { Button, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { Chip } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";
import Badge from "@mui/material/Badge";
import ButtonGroup from "@mui/material/ButtonGroup";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";

import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import TimerIcon from "@mui/icons-material/Timer";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from '@mui/icons-material/Info';
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { People } from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { weeksToDays } from "date-fns";

export const BookDoctorSide = () => {
  const dateRef = useRef();
  const timefromRef = useRef();
  const timetoRef = useRef();
  const peopleperslotRef = useRef();
  const slotdurationRef = useRef();
  const modalTimeRef = useRef();
  const modalNumRef = useRef();
  const [slotInfo, setSlotInfo] = useState();
  const [Did, setDid] = useState();

  const { currentUser } = useAuth();
  const { isDoctor } = useAuth();
  const navigate = useNavigate();

  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
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
  console.log(isDoctor);
  if (isDoctor === false) {
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
        pathname: "/book-doctor-side",
        search: `?Did=${currentUser.uid}`,
      });
    }
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
    console.log("slot data fetched");
  }

  ////////////////////////////////////////////////////////

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
      PatientId: Pid,
    });
  }
  ////////////////////////////////////////////////////////

  function updateAttendance(Did, date, key, i, isPresent, isCheck) {
    var ref = firebase
      .database()
      .ref(`Doctors/${Did}/${date}/${key}/${i}/Attendance`);
    let count = false;
    ref.on("value", (snapshot) => {
      const data = snapshot.val();
      count = data;
    });

    if (isCheck) {
      return count;
    }

    var ref = firebase.database().ref(`Doctors/${Did}/${date}/${key}/${i}`);
    ref.update({
      Attendance: isPresent,
    });
  }
  ////////////////////////////////////////////////////////

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
  ////////////////////////////////////////////////////////

  function decreAttendanceCount(Did, date, key) {
    var ref = firebase
      .database()
      .ref(`Doctors/${Did}/${date}/${key}/AttendanceCount`);
    let count = 99;
    ref.on("value", (snapshot) => {
      const data = snapshot.val();
      count = data;
    });

    count = count - 1;
    var ref = firebase.database().ref(`Doctors/${Did}/${date}/${key}`);
    ref.update({
      AttendanceCount: count,
    });
  }

  ////////////////////////////////////////////////////////

  function deleteSlot(date, key) {
    console.log(date + key);
    if(window.confirm("Do You Want To Delete This Slot")){
      var ref = firebase
        .database()
        .ref(`Doctors/${currentUser.uid}/${date}/${key}`);
      ref.remove();
    }
  }
  ////////////////////////////////////////////////////////
  function editSlot(Did, date, key, time, num) {
    let timex = key.split("_")[0];
    let totalSlotAtTimex = key.split("_")[1];
    console.log("hello Edit " + key);
    var newKey = time + "_" + num;

    var Pid = [];
    var attendance = [];
    let count = 0;

    if (num === totalSlotAtTimex) {
      var ref = firebase.database().ref(`Doctors/${Did}/${date}`);
      ref
        .child(key)
        .once("value")
        .then(function (snap) {
          var data = snap.val();
          var update = {};
          update[key] = null;
          update[newKey] = data;
          ref.update(update);
        });
    } else {
      for (let i = 0; i < totalSlotAtTimex; i++) {
        var ref = firebase.database().ref(`Doctors/${Did}/${date}/${key}/${i}`);
        ref.on("value", (snapshot) => {
          const data = snapshot.val();
          attendance.push(data.Attendance);
          Pid.push(data.PatientId);
          if (data.PatientId !== "NULL") {
            count = count + 1;
          }
        });
      }
      if (num > totalSlotAtTimex) {
        for (let i = 0; i < totalSlotAtTimex; i++) {
          firebase.database().ref(`Doctors/${Did}/${date}/${newKey}/${i}`).set({
            PatientId: Pid[i],
            Attendance: attendance[i],
          });
        }
        for (let i = totalSlotAtTimex; i < num; i++) {
          firebase.database().ref(`Doctors/${Did}/${date}/${newKey}/${i}`).set({
            PatientId: "NULL",
            Attendance: false,
          });
        }
      } else {
        console.log(num);
        console.log(count);
        if (num < count) {
          window.alert(
            "There are " + count + " patients already booked in the slot"
          );
        } else {
          for (let i = 0; i < num; i++) {
            firebase
              .database()
              .ref(`Doctors/${Did}/${date}/${newKey}/${i}`)
              .set({
                PatientId: Pid[i],
                Attendance: attendance[i],
              });
          }
        }
      }
    }
  }

  function createSlots(e) {
    e.preventDefault();

    let slotInterval = new Date(0, 0, 0);
    let startTime = timefromRef.current.value.split(":");
    let endTime = timetoRef.current.value.split(":");
    let slotDuration = slotdurationRef.current.value;
    let totalMinutes =
      60 * (endTime[0] - startTime[0]) + (endTime[1] - startTime[1]);
    let totalSlots = Math.floor(totalMinutes / slotDuration);

    var database = firebase.database();
    var ref = firebase
      .database()
      .ref(`Doctors/${Did}/${dateRef.current.value}`);

    slotInterval.setHours(startTime[0]);
    slotInterval.setMinutes(startTime[1]);

    let start, end;

    for (let i = 0; i < totalSlots; i++) {
      start = slotInterval.getHours() + ":" + slotInterval.getMinutes();
      slotInterval.setMinutes(slotInterval.getMinutes() + Number(slotDuration));
      end = slotInterval.getHours() + ":" + slotInterval.getMinutes();

      var key = start + "_" + peopleperslotRef.current.value;
      console.log(key);

      for (let j = 0; j < peopleperslotRef.current.value; j++) {
        firebase
          .database()
          .ref(`Doctors/${Did}/${dateRef.current.value}/${key}/${j}`)
          .set({
            PatientId: "NULL",
            Attendance: false,
          });
      }

      firebase
        .database()
        .ref(`Doctors/${Did}/${dateRef.current.value}/${key}`)
        .update({
          AttendanceCount: 0,
        });
    }
  }

  const allSlots = [];
  const dateNavigation = [null];
  const morningSlots = [null];
  const afternoonSlots = [null];
  const eveningSlots = [null];
  let t = 0;
  if (slotInfo != undefined) {
    console.log(slotInfo);
    for (let i = 1; i <= 7; i++) {
      dateNavigation.push(
        <Tab
          label={
            weekDates[i].getDate() +
            " / " +
            `${weekDates[i].getMonth() < 10 ? "0" : ""}` +
            weekDates[i].getMonth()
          }
          {...a11yProps(i - 1)}
        />
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
        console.log(totalSlotAtTime, bookedslots);

        let notbookedElement = (
        <ButtonGroup className='me-1 mb-2 me-sm-3 mb-sm-3' variant="contained" aria-label="outlined button group">
        <Button className='text-black editableButton' disabled startIcon={<WatchLaterIcon fontSize='small' />}>{time}</Button>
        <Button className='px-0 py-1 desktopView editableButton-icon'>
            <IconButton sx={{ borderRadius: '0px', color: 'white' }}>
                <EditIcon fontSize='small' />
            </IconButton>
        </Button>
        <Button onClick={() => {
                  deleteSlot(DateToString(weekDates[i]), s);
                }}
                className='px-0 py-1 desktopView'>
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
        </ButtonGroup>);
        let bookedElement = (
          <ButtonGroup className='me-1 mb-2 me-sm-3 mb-sm-3' variant="contained" aria-label="outlined button group">
              <Button className='text-black infoButton' disabled startIcon={<WatchLaterIcon fontSize='small' />}>{time}</Button>
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
        )

        let selectedElement = (totalSlotAtTime > bookedslots ? notbookedElement : bookedElement);
        if (time.split(":")[0] < 12) {
          morningSlotsDayI.push(selectedElement);
        } else {
          if (time.split(":")[0] < 17) {
            afternoonSlotsDayI.push(selectedElement);
          } else {
            eveningSlotsDayI.push(selectedElement);
          }
        }
      }
      morningSlots.push(morningSlotsDayI);
      afternoonSlots.push(afternoonSlotsDayI);
      eveningSlots.push(eveningSlotsDayI);

      allSlots.push(
        <TabPanel style={{ background: "#F6FCFF" }} value={value} index={i - 1}>
          <div>
            <h4 className="fw-bold">Morning</h4>
            <div>{morningSlots[i]}</div>
          </div>

          <Divider className="my-4 my-md-5" />

          <div>
            <h4 className="fw-bold">Afternoon</h4>
            <div>{afternoonSlots[i]}</div>
          </div>

          <Divider className="my-4 my-md-5" />

          <div>
            <h4 className="fw-bold">Evening</h4>
            <div>{eveningSlots[i]}</div>
          </div>
        </TabPanel>
      );
    }
  }

  return (
    <div className="bg-white mt-auto mb-2 pb-2">
      <h2 className="ms-5 ps-3 pt-3">Doctors' ID</h2>
      <form onSubmit={createSlots}>
        <div
          style={{ background: "#F6FCFF" }}
          className="container mt-4 py-3 p-sm-5 border rounded"
        >
          <div className="row d-flex justify-content-between">
            <TextField
              inputRef={dateRef}
              min={DateToString(weekDates[1])}
              max={DateToString(weekDates[7])}
              InputProps={{
                inputProps: {
                  min: DateToString(weekDates[1]),
                  max: DateToString(weekDates[7]),
                },
              }}
              className="col-12 my-2 px-1 col-sm-4 col-xl-2"
              id="date"
              label="Choose Date"
              type="date"
              defaultValue="2022-05-19"
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              inputRef={timefromRef}
              className="col-6 my-2 px-1 col-sm-4 col-xl-2"
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
              required
            />
            <TextField
              inputRef={timetoRef}
              className="col-6 my-2 px-1 col-sm-4 col-xl-2"
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
              required
            />
            <div className="col-6 my-2 col-sm-4 col-xl-2 d-flex flex-row align-items-end">
              <PeopleAltIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                inputRef={peopleperslotRef}
                type="number"
                className="w-100"
                id="input-with-sx"
                label="People Per Slot"
                variant="standard"
                required
              />
            </div>

            <div className="col-6 my-2 px-1 col-sm-4 col-xl-2 d-flex flex-row align-items-end">
              <TimerIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                inputRef={slotdurationRef}
                type="number"
                className="w-100"
                id="input-with-sx"
                label="Duration Of Slot"
                variant="standard"
                required
              />
            </div>
            <Button
              type="submit"
              className="col-6 mx-auto my-2 px-1 col-sm-4 col-xl-2"
              variant="contained"
              style={{
                fontWeight: "700",
                backgroundColor: "rgb(33, 209, 146)",
              }}
              size="small"
            >
              Make Slots
            </Button>
          </div>
        </div>
      </form>

      <h2 className="ms-5 ps-3 pt-3">Appointments</h2>
      <div className="container p-0 mt-4">
        <Box sx={{ width: "100%", bgcolor: "primary.dark" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              style={{ background: "#C6E7FF" }}
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              variant="scrollable"
              scrollButtons="auto"
            >
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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
