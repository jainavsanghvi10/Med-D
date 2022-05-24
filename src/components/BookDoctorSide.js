import React, { useRef, useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import firebase from "firebase";

export const BookDoctorSide = () => {
  const dateRef = useRef();
  const timefromRef = useRef();
  const timetoRef = useRef();
  const peopleperslotRef = useRef();
  const slotdurationRef = useRef();

  const [slotInfo, setSlotInfo] = useState();
  const [Did, setId] = useState();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  /* Setting dates of 7 days from today */
  const weekDates = [null];
  // add Today's date
  weekDates.push(new Date(Date.now()));
  for(let i=1;i<=7;i++){
    let dateI = new Date((weekDates[1]));
    dateI.setDate(dateI.getDate() + i);
    weekDates.push(dateI);
  }

  /* function to convert from Date object to string */
  function DateToString(date){
    return (date.getFullYear() +
    "-" +
    `${date.getMonth() < 10 ? "0" : ""}` +
    (date.getMonth() + 1) +
    "-" +
    `${date.getDate() < 10 ? "0" : ""}` +
    date.getDate());
  }

  /* function to fetch slot data of a date */
  function fetchSlotWithDate(date){
    var ref = firebase.database().ref(`Doctors/${Did}/${DateToString(date)}`);
    ref.on("value", (snapshot) => {
      const data = snapshot.val();
      setSlotInfo(data);
    });
  }

  useEffect(() => {
    if (currentUser == null) {
      navigate("/signup");
    }
    const params = new URLSearchParams(window.location.search);
    const Did = params.get("Did");
    setId(Did);
    console.log(currentUser);
    if (currentUser && Did == null) {
      navigate({
        pathname: "/book-doctor-side",
        search: `?Did=${currentUser.uid}`,
      });
    }
    //eslint-disable-next-line

    // fetching today's slot details
    var ref = firebase.database().ref(`Doctors/${Did}/${DateToString(weekDates[1])}`);
    ref.on("value", (snapshot) => {
      const data = snapshot.val();
      setSlotInfo(data);
    });
  }, []);

  const morningSlots = [];
  const afternoonSlots = [];
  const eveningSlots = [];
  for (let s in slotInfo) {
    let time = s.split("_")[0];

    if (time.split(":")[0] < 12) {
      morningSlots.push(
        <button className="btn btn-sm mx-2 my-2 btn-primary">{time}</button>
      );
    } else {
      if (time.split(":")[0] < 17) {
        afternoonSlots.push(
          <button className="btn btn-sm mx-2 my-2 btn-primary">{time}</button>
        );
      } else {
        eveningSlots.push(
          <button className="btn btn-sm mx-2 my-2 btn-primary">{time}</button>
        );
      }
    }
  }

  function createSlots(e) {
    e.preventDefault();
    console.log("creating slots");
    console.log(Did);

    let slotTimeFrom = new Date(0, 0, 0);
    let slotTimeTo = new Date(0, 0, 0);
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

    slotTimeFrom.setHours(startTime[0]);
    slotTimeFrom.setMinutes(startTime[1]);
    slotTimeTo.setHours(startTime[0]);
    slotTimeTo.setMinutes(startTime[1]);

    let start, end;

    for (let i = 0; i < totalSlots; i++) {
      start = slotTimeTo.getHours() + ":" + slotTimeTo.getMinutes();
      slotTimeTo.setMinutes(slotTimeTo.getMinutes() + Number(slotDuration));
      end = slotTimeTo.getHours() + ":" + slotTimeTo.getMinutes();

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
    console.log(totalSlots, start);
    console.log("___________");
  }

  const dateNavigation = [];
  for(let i=1;i<=7;i++){
    dateNavigation.push(
    <a className={"nav-item nav-link " + `${i===1 ? "active" : ""}`}
      id={"day-" + i + "-tab"}
      data-toggle="tab"
      href={"#day-" + i}
      role="tab"
      aria-controls={"day-" + i}
      aria-selected="true"
      onClick={() => {fetchSlotWithDate(weekDates[i])}}
    >
      {weekDates[i].getDate() + " / " + `${weekDates[i].getMonth() < 10 ? "0" : ""}` + weekDates[i].getMonth()}
    </a>);
  }

  return (
    <div className="bg-white mt-auto">
      <h2 className="ms-5 ps-3 pt-3">Doctors' ID</h2>
      <form
        onSubmit={createSlots}
        id="create-slot-form"
        className="container border border-5 mt-4 mb-4 rounded"
      >
        <div className="form-group col-2 mt-3">
          <label htmlFor="SlotFrom" className="form-label">
            Choose Date
          </label>
          <input
            ref={dateRef}
            type="date"
            className="form-control"
            id="SlotFrom"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            min={DateToString(weekDates[1])}
            max={DateToString(weekDates[7])}
            required
          />
          {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>
        <div className="container border border-5 mt-4 mb-4 rounded">
          <div className="row mt-3 mb-4">
            <div className="form-group col-2">
              <label htmlFor="SlotFrom" className="form-label">
                From
              </label>
              <input
                ref={timefromRef}
                type="time"
                className="form-control"
                id="SlotFrom"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                required
              />
              {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>
            <div className="form-group col-2">
              <label htmlFor="SlotTo" className="form-label">
                To
              </label>
              <input
                ref={timetoRef}
                type="time"
                className="form-control"
                id="SlotTo"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                required
              />
              {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>
            <div className="form-group col-3">
              <label htmlFor="PeoplePerSlot" className="form-label">
                People per Slot
              </label>
              <div className="col-sm-10">
                <input
                  ref={peopleperslotRef}
                  type="number"
                  className="form-control"
                  id="PeoplePerSlot"
                  placeholder="Enter Number"
                  required
                />
              </div>
            </div>
            <div className="form-group col-3">
              <label htmlFor="SlotDuration" className="form-label">
                Slot Duration {"( in minutes )"}
              </label>
              <div className="col-sm-10">
                <input
                  ref={slotdurationRef}
                  type="number"
                  className="form-control"
                  id="SlotDuration"
                  placeholder="Enter 1 Slot Time"
                  required
                />
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-dark mb-3">
            Create Slot
          </button>
        </div>
      </form>


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
                <div className="col-8">{morningSlots}</div>
              </div>
              <hr></hr>
              <div className="row my-2">
                <div className="col-2 align-self-center">Afternoon</div>
                <div className="col-8">{afternoonSlots}</div>
              </div>
              <hr></hr>
              <div className="row my-2">
                <div className="col-2 align-self-center">Evening</div>
                <div className="col-8">{eveningSlots}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// firebase.database().ref(`Doctors/${Did}/${dateRef.current.value}/${key}/${j}`).set({
//   Duration: slotTimeArr[i],
//   NumberOfPeople: peopleperslotRef.current.value
// });

// var newRef = ref.push();
// newRef.set({
//  Duration: slotTimeArr[i],
//   NumberOfPeople: peopleperslotRef.current.value
// })

// firebase.database().ref(`Doctors/${Did}/${dateRef.current.value}`).set({

// });
