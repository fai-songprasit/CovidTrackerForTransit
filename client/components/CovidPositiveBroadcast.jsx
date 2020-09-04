import React, { useState } from "react";

import {Data, ProgramModeEnum} from "./../classes";

import {settings} from "../settings/settings";

//Socket io
import socketIoClient from 'socket.io-client';
const socket = socketIoClient();


const CovidPositiveBroadcast = (props) => {

    let testInfectedData = {
        covidPositive: false,
        trips: [{ route: 1, startTime: 1098181030220, endTime: 2098181030220, vehicleRef: 1509 }]
    };

    const [data, setData] = useState(Data.load());

    const positiveCovidTestClicked = () => {
        let trips;
        if (settings.MODE == ProgramModeEnum.TEST) {
            // For testing
            // data.setCovidPositive(true);
            trips = testInfectedData.trips;
        } else {
            //PROD
            data.setCovidPositive(true);
            trips = data.trips;
        }

        trips.forEach(trip => {
            console.log(trip);
            socket.emit('new state', trip);
        });
    }
    return (
        <div className="jumbotron">
            <label>By clicking on this button you will alert others that a person who has tested positive for COVID shared a trip with them</label>
            <div className="mx-auto mt-5">
                <button id="positiveCovidTest" className="btn-danger btn btn-lg col sm12 align-middle" onClick={positiveCovidTestClicked}>Positive COVID Test</button>
            </div>
        </div >
    )
}

export default CovidPositiveBroadcast;