import React, { useRef, useState, useEffect } from "react";
import firebase from "firebase";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { enc, AES } from "crypto-js/core";

export default function AppointmentEditor() {
    const [slotInfo, setSlotInfo] = useState(null);
    const {currentUser} = useAuth();
    const navigate = useNavigate();

    let todayDate = new Date(Date.now())

    useEffect(() => {
        if (currentUser == null) {
          navigate("/signup");
        }
    
        // fetching today's slot details
        if(slotInfo===null){
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
    
    let slotData = [];
    let subSlotData = [];
    function makeQueue(){
        let t=0;
        for(let s in slotInfo){
            let time = s.split("_")[0];
            let totalSlotAtTime = s.split("_")[1];
            let slot = Object.values(slotInfo)[t];

            const temp = [];
            for(let i=0;i<totalSlotAtTime;i++){
                let id = slot[i].PatientId;
                let patientName;
                let decrypted;

                if(!slot[i].Attendance && id != "NULL"){
                    if(id.search("!@#%") != -1){
                        decrypted = AES.decrypt(id.split("!@#%")[1], currentUser.uid);
                    }
                    else{
                        decrypted = AES.decrypt(id, currentUser.uid);
                    }

                    patientName = decrypted.toString(enc.Utf8);
                    console.log(patientName);

                    temp.push(
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            {patientName}
                            <div>
                                <span className="btn btn-sm fw-bold btn-outline-success rounded-pill mx-1">Completed</span>
                                <span className="btn btn-sm fw-bold btn-warning rounded-pill mx-1">Postpone</span>
                            </div>
                        </li>
                    )
                }
            }
            subSlotData.push(temp);

            slotData.push(
                <tr>
                <th scope="row">{t+1}</th>
                <td>{time}</td>
                <td>
                    <ul className="list-group mb-4">
                        {subSlotData[t]}
                    </ul>
                </td>
            </tr>
            )

            t++;
        }
    }
    makeQueue();

    document.body.style.background = 'white';
    return (
        <>
            <div className="container border my-3">
                <table className="table">
                    <thead>
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