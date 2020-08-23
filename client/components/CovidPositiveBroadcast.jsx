import React, { useState } from "react";
import Data from "./../classes/Data";
import Trip from "../classes/Trip";

import socketIoClient from 'socket.io-client';
const ENDPOINT = "localhost:3001";
const socket = socketIoClient(ENDPOINT);

const CovidPositiveBroadcast = (props) => {

    let testInfectedData = {
        covidPositive: false,
    };
    testInfectedData.trips = [{route:1, startTime: 1098181030220, endTime: 2098181030220, vehicleRef: 3706}]

    const [data, setData] = useState(Data.load());

    const positiveCovidTestClicked = () => {
        // data.setCovidPositive(true);
        const trips = testInfectedData.trips;
        trips.forEach(trip => {
            console.log(trip);
            socket.emit('new state', trip);
        });
    }
    return (
        <div className="container">
            <button id="positiveCovidTest" onClick={positiveCovidTestClicked}>Positive COVID Test</button>
        </div >
    )
}

export default CovidPositiveBroadcast;