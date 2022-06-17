import React, { useRef, useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import firebase from "firebase";
import { enc, AES } from "crypto-js/core";

export const AppointmentEditor = () => {

  const [slotInfo, setSlotInfo] = useState();
  const [Did, setDid] = useState();
  const [ddate, setDDate] = useState();
  const [error, setError] = useState("");

  const { currentUser } = useAuth();
  const {isDoctor} = useAuth();
  const navigate = useNavigate();

  // check if user is a doctor
  if(isDoctor === false){
    navigate("/");
  }

  useEffect(() => {
    if (currentUser == null) {
      navigate("/signup");
    }

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

    // fetching today's slot details
    var ref = firebase
      .database()
      .ref(`Doctors/${Did}/${DateToString(weekDates[1])}`);
    ref.on("value", (snapshot) => {
      const data = snapshot.val();
      setSlotInfo(data);
    });
  }, []);

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
  function fetchSlotWithDate(date) {
    var ref = firebase.database().ref(`Doctors/${Did}/${DateToString(date)}`);
    ref.on("value", (snapshot) => {
      const data = snapshot.val();
      setSlotInfo(data);
      setDDate(DateToString(date));
    });
  }

  function updateSlot(time, maxPerson,i) {
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

  const morningSlots = [];
  const afternoonSlots = [];
  const eveningSlots = [];
  let t=0;
  for (let s in slotInfo) {
    let time = s.split("_")[0];
    let totalSlotAtTime = s.split("_")[1];

    let bookedslots = Object.values(slotInfo)[t].AttendanceCount;
    t++;

    if (time.split(":")[0] < 12) {
        if(bookedslots<totalSlotAtTime)
        morningSlots.push(
            <button
            className="btn btn-sm mx-2 my-2 btn-primary"
            onClick={() => {
                updateSlot(time, totalSlotAtTime);
            }}>
            {time}
            </button>
        );
    } else {
      if (time.split(":")[0] < 17) {
        if(bookedslots<totalSlotAtTime)
        afternoonSlots.push(
          <button
          className="btn btn-sm mx-2 my-2 btn-primary"
          onClick={() => {
            updateSlot(time, totalSlotAtTime);
          }}>
            {time}
          </button>
        );
      } else {
        if(bookedslots<totalSlotAtTime)
        eveningSlots.push(
          <button
          className="btn btn-sm mx-2 my-2 btn-primary"
          onClick={() => {
            updateSlot(time, totalSlotAtTime);
          }}>
            {time}
          </button>
        );
      }
    }
  }

  const dateNavigation = [];
  for (let i = 1; i <= 7; i++) {
    dateNavigation.push(
      <a
        className={"nav-item nav-link " + `${i === 1 ? "active" : ""}`}
        id={"day-" + i + "-tab"}
        data-toggle="tab"
        href={"#day-" + i}
        role="tab"
        aria-controls={"day-" + i}
        aria-selected="true"
        onClick={() => {
          fetchSlotWithDate(weekDates[i]);
        }}
      >
        {weekDates[i].getDate() +
          " / " +
          `${weekDates[i].getMonth() < 10 ? "0" : ""}` +
          weekDates[i].getMonth()}
      </a>
    );
  }

  return (
    <div className="bg-white mt-auto mb-2 pb-2">
      {error &&
      <div className="alert alert-success" role="alert">
      {error}
      </div>}
      <h2 className="ms-5 ps-3 pt-3">Appointments</h2>
      <div className="container mt-5">
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            {dateNavigation}
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="day-1"
            role="tabpanel"
            aria-labelledby="day-1-tab"
          >
            <div className="container">
              <div className="row my-2">
                <div className="col-2 align-self-center">Morning</div>
                <div className="col-8">
                  {morningSlots.length != 0 ? (
                    morningSlots
                  ) : (
                    <h3 style={{ color: "grey" }}>No Slots Available</h3>
                  )}
                </div>
              </div>
              <hr></hr>
              <div className="row my-2">
                <div className="col-2 align-self-center">Afternoon</div>
                <div className="col-8">
                  {afternoonSlots != 0 ? (
                    afternoonSlots
                  ) : (
                    <h3 style={{ color: "grey" }}>No Slots Available</h3>
                  )}
                </div>
              </div>
              <hr></hr>
              <div className="row my-2">
                <div className="col-2 align-self-center">Evening</div>
                <div className="col-8">
                  {eveningSlots != 0 ? (
                    eveningSlots
                  ) : (
                    <h3 style={{ color: "grey" }}>No Slots Available</h3>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
