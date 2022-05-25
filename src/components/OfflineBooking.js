import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import db from "../firebase";
import doctorProfile from "../assets/images/doctorProfile.svg";
import { state, cities, specialization } from "./Arrays";

export const OfflineBooking = () => {
  const cityRef = useRef();
  const stateRef = useRef();
  const specialityRef = useRef();

  const [docData, setDocData] = useState(null);

  useEffect(() => {
    /* To fetch all doctors at load */
    // if (docData === null) {
    //   db.collection("DoctorData")
    //     .get()
    //     .then((querySnapshot) => {
    //       const tempData = [];
    //       querySnapshot.forEach((doc) => {
    //         // doc.data() is never undefined for query doc snapshots
    //         console.log(doc.id, " => ", doc.data());
    //         tempData.push([doc.id, doc.data()]);
    //       });
    //       console.log("available", tempData);
    //       setDocData(tempData);
    //     })
    //     .catch((error) => {
    //       console.log("Error getting documents: ", error);
    //     });
    // }
  });

  function SearchDoctors() {
    db.collection("DoctorData")
      .where("State", "==", `${stateRef.current.value.toLowerCase()}`)
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
        <div className="card text-left shadow-lg docCard-parent-offlineBooking">
          <div className="card-body row docCard-offlineBooking">
            <div className="col-2 text-center">
              <img
                src={doctorProfile}
                className="img-thumbnail border-info"
                alt="..."
              />
              <a className="text-info desktopView" href="">
                <b>View Profile</b>
              </a>
            </div>
            <div className="col-8">
              <h5 className="card-title text-info">
                {"Dr. " + doc.FirstName + " " + doc.LastName}
              </h5>
              <span className="doc-speciality text-secondary">
                {doc.Speciality}
              </span>
              <span> | </span>
              <span className="doc-experience text-secondary">
                31 Years of Experience
              </span>

              <p className="doc-location">
                <b>Koramangala 5 Block, Bangalore</b>
              </p>
              <p className="doc-location text-secondary">
                ₹500 Consultation Fee at Clinic
              </p>
              <Link to={`/book-patient-side?Did=${docData[i][0]}`}>
                <button
                  id="book-now-btn"
                  className="btn btn-info btn-outline-light"
                >
                  Book Appointment
                </button>
              </Link>
            </div>
          </div>
          <div className="card-footer text-muted">
            <button className="btn btn-success btn-sm me-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-hand-thumbs-up-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
              </svg>
              95%
            </button>
            <a className="text-black" href="">
              XXX Paitent Stories
            </a>
          </div>
        </div>
      );
    }
  }

  // Creating dropdown arrays
  let stateDropdown = [];
  stateDropdown.push(
    <option key={"nostate"} defaultValue>
      Select State
    </option>
  );
  for (let i = 0; i < state.length; i++) {
    stateDropdown.push(<option key={"state" + i}>{state[i]}</option>);
  }
  let cityDropdown = [];
  cityDropdown.push(
    <option key={"nocity"} defaultValue>
      Select City
    </option>
  );
  for (let i = 0; i < cities.length; i++) {
    cityDropdown.push(<option key={"city" + i}>{cities[i]}</option>);
  }
  let specializationDropdown = [];
  specializationDropdown.push(
    <option key={"nospecialization"} defaultValue>
      Select Specialization
    </option>
  );
  for (let i = 0; i < cities.length; i++) {
    specializationDropdown.push(
      <option key={"special" + i}>{specialization[i]}</option>
    );
  }
  document.body.style.background = 'white';
  return (
    <>
      <div id='findDoc-offlineBooking' className="row container my-4 mx-0 pe-0">
        <div className="col-3">
          <label htmlFor="specialization-dropdown mobileView">Specialization</label>
          <select
            ref={specialityRef}
            id="specialization-dropdown"
            className="form-select"
            aria-label="Default select example"
          >
            {specializationDropdown}
          </select>
          <div className="valid-feedback">Looks Good!</div>
        </div>
        <div className="col-3">
          <label htmlFor="state-dropdown">State</label>
          <select
            ref={stateRef}
            id="state-dropdown"
            className="form-select"
            aria-label="Default select example"
          >
            {stateDropdown}
          </select>
          <div className="valid-feedback">Looks Good!</div>
        </div>
        <div className="col-3">
          <label htmlFor="city-dropdown">City</label>
          <select
            ref={cityRef}
            id="city-dropdown"
            className="form-select"
            aria-label="Default select example"
          >
            {cityDropdown}
          </select>
          <div className="valid-feedback">Looks Good!</div>
        </div>


        <div className="col-3 mt-auto button-offlineBooking">
          <div class="input-group">
            <select class="custom-select" id="inputGroupSelect04">
              <option selected> Sort Result by...</option>
              <option value="1">By Customer Rating  </option>
              <option value="2">By Consultation Fees</option>
            </select>
            <div class="input-group-append">
              <button
                className="btn btn-light btn-outline-dark fw-bold"
                type="submit"
                id="search-btn"
                onClick={SearchDoctors}
              >
                Search
              </button>
            </div>
          </div>
          {/* <button
            className="btn btn-light btn-outline-dark fw-bold"
            type="submit"
            id="search-btn"
            onClick={SearchDoctors}
          >
            Search
          </button> */}
        </div>
      </div>

      <div className="cards">{docBox}</div>
    </>
  );
};
