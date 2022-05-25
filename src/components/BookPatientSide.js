import React, { useRef, useState, useEffect } from "react";
import db from "../firebase";
import doctorProfile from "../assets/images/doctorProfile.svg";
import firebase from "firebase";

export const BookPatientSide = () => {
  const [docData, setDocData] = useState(null);
  const [Did, setDid] = useState();
  const [slotInfo, setSlotInfo] = useState();

  /* Setting dates of 7 days from today */
  const weekDates = [null];
  // add Today's date
  weekDates.push(new Date(Date.now()));
  for (let i = 1; i <= 7; i++) {
    let dateI = new Date((weekDates[1]));
    dateI.setDate(dateI.getDate() + i);
    weekDates.push(dateI);
  }

  /* function to convert from Date object to string */
  function DateToString(date) {
    return (date.getFullYear() +
      "-" +
      `${date.getMonth() < 10 ? "0" : ""}` +
      (date.getMonth() + 1) +
      "-" +
      `${date.getDate() < 10 ? "0" : ""}` +
      date.getDate());
  }

  /* function to fetch slot data of a date */
  function fetchSlotWithDate(date) {
    var ref = firebase.database().ref(`Doctors/${Did}/${DateToString(date)}`);
    ref.on("value", (snapshot) => {
      const data = snapshot.val();
      setSlotInfo(data);
    });
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const DID = params.get("Did");
    setDid(DID);

    if (docData === null) {
      fetchDocDetails();
    }

    // fetching today's slot details
    if (slotInfo === null) {
      fetchSlotWithDate(weekDates[1]);
    }
  });

  async function fetchDocDetails() {
    const doctorRef = db.collection("DoctorData").doc(`${Did}`);
    const doc = await doctorRef.get();
    if (!doc.exists) {
      console.log("No such document!");
    } else {
      console.log("Document data:", doc.data());
      setDocData(doc.data());
    }
  }

  const morningSlots = [];
  const afternoonSlots = [];
  const eveningSlots = [];
  for (let s in slotInfo) {
    let time = s.split("_")[0];
    let totalSlotAtTime = s.split("_")[1];

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

  const dateNavigation = [];
  for (let i = 1; i <= 7; i++) {
    dateNavigation.push(
      <a className={"nav-item nav-link dateCSS " + `${i === 1 ? "active" : ""}`}
        id={"day-" + i + "-tab"}
        data-toggle="tab"
        href={"#day-" + i}
        role="tab"
        aria-controls={"day-" + i}
        aria-selected="true"
        onClick={() => { fetchSlotWithDate(weekDates[i]) }}
      >
        {weekDates[i].getDate() + " /" + `${weekDates[i].getMonth() < 10 ? "0" : ""}` + weekDates[i].getMonth()}
      </a>);
  }

  document.body.style.background = 'white';

  return (
    <div className="bg-white">
      {docData != null ?
        <div className="container pt-4">
          <div className="row" id="row-bookPatient">
            <div className="col-3 text-center">
              <img
                src={doctorProfile}
                className="img-thumbnail border-info"
                alt="..."
              />
            </div>
            <div className="col-6 mt-auto mb-auto">
              <div className="form-group row">
                <label htmlFor="docName" className="col-sm-4 fieldName-bookPatient col-form-label">
                  Doctor Name:
                </label>
                <div className="col-sm-6 fieldEntry-bookPatient">
                  <h3 id="doc-name" type="text" readOnly className="form-control">
                    {"Dr. " + docData.FirstName + " " + docData.LastName}
                  </h3>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="experience" className="col-sm-4 fieldName-bookPatient col-form-label">
                  Experience:
                </label>
                <div className="col-sm-6 fieldEntry-bookPatient">
                  <h3 id="doc-exp" type="text" readOnly className="form-control">
                    blank
                  </h3>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="specialisation" className="col-sm-4 fieldName-bookPatient col-form-label">
                  Specialisation:
                </label>
                <div className="col-sm-6 fieldEntry-bookPatient">
                  <h3 id="doc-splz" type="text" readOnly className="form-control">
                    {docData.Speciality}
                  </h3>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="contact" className="col-sm-4 fieldName-bookPatient col-form-label">
                  Contact:
                </label>
                <div className="col-sm-6 fieldEntry-bookPatient">
                  <h3 type="text" readOnly className="form-control">
                    {docData.Mobile}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div> : <></>}


      <div className="container  mt-4 pt-3">
        <h3 className="pb-3 darkerTextColor fw-bold "><u>Book Appointment:</u></h3>
        <nav>
          <div className="nav nav-tabs" style={{ flexWrap: 'nowrap', fontSize: 'x-small' }} id="nav-tab" role="tablist">
            {dateNavigation}
          </div>
        </nav>
        <div className="tab-content " id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="day-1"
            role="tabpanel"
            aria-labelledby="day-1-tab"
          >
            <div id='slotContainer-bookPatient' className="container">
              <div className="row my-2">
                <div className="col-2 align-self-center">Morning</div>
                <div className="col-8">{morningSlots.length != 0 ? morningSlots : <p className='my-2' style={{ color: "grey" }}>No Slots Available</p>}</div>
              </div>
              <hr></hr>
              <div className="row my-2">
                <div className="col-2 align-self-center">Afternoon</div>
                <div className="col-8">{afternoonSlots != 0 ? afternoonSlots : <p className='my-2' style={{ color: "grey" }}>No Slots Available</p>}</div>
              </div>
              <hr></hr>
              <div className="row my-2">
                <div className="col-2 align-self-center">Evening</div>
                <div className="col-8">{eveningSlots != 0 ? eveningSlots : <p className='my-2' style={{ color: "grey" }}>No Slots Available</p>}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
