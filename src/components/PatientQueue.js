import React, { useRef, useState, useEffect } from "react";
import firebase from "firebase";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { enc, AES } from "crypto-js/core";

export default function AppointmentEditor() {
    const [slotInfo, setSlotInfo] = useState(null);
    const {currentUser} = useAuth();
    const navigate = useNavigate();

    let todayDate = new Date(Date.now());
    let firstPerson = null;

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

    /* function to set Attendance variable true at appointment completion */
    function appointmentComplete(time, patientNumber){
        var ref = firebase.database()
        .ref(`Doctors/${currentUser.uid}/${DateToString(todayDate)}/${time}/${patientNumber}`);
        ref.update({
            Attendance: true
        });
    }

    /* function to swap appointment with the topmost person in the queue */
    function reschedulePatient(time, swapPatientNumber, swapPatientId){
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
                                <span className="btn btn-sm fw-bold btn-outline-success rounded-pill mx-1"
                                onClick={
                                    ()=>{appointmentComplete(s, i)}
                                }>Completed</span>
                                {firstPerson!=null ?
                                <span className="btn btn-sm fw-bold btn-warning rounded-pill mx-1"
                                onClick={()=>{
                                    reschedulePatient(s, i, id);
                                }}>Swap</span> 
                                : <></>}
                            </div>
                        </li>
                    )
                    // Set first person in the queue
                    if(firstPerson===null){
                        firstPerson = {Time: s, patientNumber: i, patientId: id};
                        console.log(firstPerson, patientName);
                    }
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