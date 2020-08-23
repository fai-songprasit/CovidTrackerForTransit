import React, { useState } from "react"

import Data from "./../classes/Data";
import Trip from "./Trip";
const MyTrips = (props) => {

    const [data, setData] = useState(Data.load());
    //console.log(data.trips)
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

    trips = trips.slice(0, maxTrips);
    trips = trips.sort((tripA, tripB) => {
        return tripB.startTime - tripA.startTime;
    });

    return (
        <div className="container">
            <h2>Trip History</h2>

            {trips.map((trip, key) => {
               
                return (
                    <div key={key} >
                        <Trip trip={trip}/>
                        <br />
                    </div>
                )
            })}
        </div>
    )
}

export default MyTrips