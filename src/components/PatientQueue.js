import React, { useRef, useState, useEffect } from "react";
import firebase from "firebase";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { enc, AES } from "crypto-js/core";

import { Button } from "@mui/material";

import CheckIcon from '@mui/icons-material/Check';
import SwapVertIcon from '@mui/icons-material/SwapVert';

export default function AppointmentEditor() {
    const [slotInfo, setSlotInfo] = useState(null);
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    let todayDate = new Date(Date.now());
    let firstPerson = null;
    let slotNumber = 1;

    useEffect(() => {
        if (currentUser == null) {
            navigate("/signup");
        }

        // fetching today's slot details
        if (slotInfo === null) {
            var ref = firebase
                .database()
                .ref(`Doctors/${currentUser.uid}/${DateToString(todayDate)}`);
            ref.on("value", (snapshot) => {
                const data = snapshot.val();
                setSlotInfo(data);
            });
        }
    }, []);

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

    /* function to set Attendance variable true at appointment completion */
    function appointmentComplete(time, patientNumber) {
        var ref = firebase.database()
            .ref(`Doctors/${currentUser.uid}/${DateToString(todayDate)}/${time}/${patientNumber}`);
        ref.update({
            Attendance: true
        });
    }

    /* function to swap appointment with the topmost person in the queue */
    function reschedulePatient(time, swapPatientNumber, swapPatientId) {
        var ref = firebase.database()
            .ref(`Doctors/${currentUser.uid}/${DateToString(todayDate)}/${time}/${swapPatientNumber}`);
        ref.update({
            PatientId: firstPerson.patientId
        });

        ref = firebase.database()
            .ref(`Doctors/${currentUser.uid}/${DateToString(todayDate)}/${firstPerson.Time}/${firstPerson.patientNumber}`);
        ref.update({
            PatientId: swapPatientId
        });
    }

    let slotData = [];
    let subSlotData = [];
    function makeQueue() {
        let t = 0;
        for (let s in slotInfo) {
            let time = s.split("_")[0];
            let totalSlotAtTime = s.split("_")[1];
            let slot = Object.values(slotInfo)[t];

            const temp = [];
            for (let i = 0; i < totalSlotAtTime; i++) {
                let id = slot[i].PatientId;
                let patientName;
                let decrypted;

                if (!slot[i].Attendance && id != "NULL") {
                    if (id.search("!@#%") != -1) {
                        decrypted = AES.decrypt(id.split("!@#%")[1], currentUser.uid);
                    }
                    else {
                        decrypted = AES.decrypt(id, currentUser.uid);
                    }

                    patientName = decrypted.toString(enc.Utf8);
                    console.log(patientName);

                    temp.push(
                        <>
                            <li className="desktopView list-group-item patient-list d-flex justify-content-between align-items-center me-2" style={{ background: 'mintcream' }}>
                                {patientName}
                                <div style={{ width: '120px' }}>
                                    {firstPerson != null ?
                                        <button className="btn fw-bold rounded-0" style={{ width: '120px', background: '#FFDBA5' }}
                                            onClick={() => {
                                                reschedulePatient(s, i, id);
                                            }}>SWAP</button>
                                        : <button className="btn fw-bold rounded-0" style={{ width: '120px', background: '#95F9B7' }}
                                            onClick={
                                                () => { appointmentComplete(s, i) }
                                            }>COMPLETE</button>}
                                    {/* <Button className='col-6 px-1 py-2 col-sm-4 col-xl-2' variant="contained" style={{ fontWeight: '700', backgroundColor: 'rgb(33, 209, 146)',borderRadius:'0px', width:'150px' }}>Mark Complete</Button> */}
                                </div>
                            </li>
                            <li className="mobileView list-group-item patient-list d-flex justify-content-between align-items-center me-2" style={{ background: 'mintcream' }}>
                                {patientName}
                                <div style={{ width: '120px' }}>
                                    {firstPerson != null ?
                                        <button className="btn fw-bold rounded-0" style={{ width: '120px', background: '#FFDBA5' }}
                                            onClick={() => {
                                                reschedulePatient(s, i, id);
                                            }}>SWAP</button>
                                        : <button className="btn fw-bold rounded-0" style={{ width: '120px', background: '#95F9B7' }}
                                            onClick={
                                                () => { appointmentComplete(s, i) }
                                            }>COMPLETE</button>}
                                    {/* <Button className='col-6 px-1 py-2 col-sm-4 col-xl-2' variant="contained" style={{ fontWeight: '700', backgroundColor: 'rgb(33, 209, 146)',borderRadius:'0px', width:'150px' }}>Mark Complete</Button> */}
                                </div>
                            </li>
                        </>
                    )
                    // Set first person in the queue
                    if (firstPerson === null) {
                        firstPerson = { Time: s, patientNumber: i, patientId: id };
                        console.log(firstPerson, patientName);
                    }
                }
            }
            subSlotData.push(temp);

            if (subSlotData[t].length != 0) {
                slotData.push(
                    <tr style={{ verticalAlign: 'middle' }}>
                        <th scope="row">{slotNumber}</th>
                        <td>{time}</td>
                        <td>
                            <ul className="list-group my-2">
                                {subSlotData[t]}
                            </ul>
                        </td>
                    </tr>
                )
                slotNumber++;
            }

            t++;
        }
    }
    makeQueue();

    // document.body.style.fontFamily
    return (
        <>
            <div className="container rounded my-3">
                <h2 className="text-center">Today's Patient Queue</h2>
                <table className="table border" style={{ background: 'linear-gradient(270deg, #C7EDF5 0%, rgba(199, 237, 245, 0.5) 103.29%)' }}>
                    <thead className="text-white" style={{ background: 'black' }}>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Slot Time</th>
                            <th scope="col">Patients</th>
                        </tr>
                    </thead>
                    <tbody>
                        {slotData}
                    </tbody>
                </table>
            </div>
        </>
    );
}