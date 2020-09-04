import React, { useState } from "react"

import {Data} from "../classes";

import TripElement from "./TripElement";
const MyTripContainer = (props) => {

    const [data, setData] = useState( (props.data != null) ? props.data : Data.load());
    console.log("props.numberOfElements: ", props.numberOfElements);

    //Need to bring the data back from local and display this infor here
    //Date, Time, trip details, vehicle number -> please refer to design wireframe
    
    let trips = data.trips;
    let maxTrips = trips.length;
    if(props !== null && props.numberOfElements !== null){
        if(props.numberOfElements < maxTrips){
            console.log("Number of Elements is being changed");
            maxTrips = props.numberOfElements;
        }
    }

    trips = trips.sort((tripA, tripB) => {
        return tripB.startTime - tripA.startTime;
    });
    trips = trips.slice(0, maxTrips);

    return (
        <div className="container">
            <h2>Trip History</h2>

            {trips.map((trip, key) => {
               
                return (
                    <div key={key} >
                        <TripElement trip={trip}/>
                        <br />
                    </div>
                )
            })}
        </div>
    )
}

export default MyTripContainer