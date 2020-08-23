import React, { useState } from "react"

import Data from "./../classes/Data";

const MyTrip = (props) => {

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

    return (
        <>
            <h2>Trip History</h2>

            {trips.map((trip, key) => {
                const startDate   = new Date(trip.startTime);
                const endDate     = new Date(trip.endTime);
                const displayDate = `${startDate.getDate()}/${startDate.getMonth() +1 }/${startDate.getFullYear()}` ;

                const displayStartTime = `${startDate.getHours()}:${startDate.getMinutes() }` ;
                const displayEndTime = `${endDate.getHours()}:${endDate.getMinutes() }`;

                return (
                    <div key={key}>
                        <div>
                            <b>{displayDate} - Route {trip.route}</b>
                        </div>

                        <div>
                            <label>Start Time:</label>{displayStartTime}
                        </div>
                        <div>
                            <label>End Time: </label>{displayEndTime}
                        </div>

                        <div>
                            <label>Vehicle Reference: </label> {trip.vehicleRef}
                        </div>
                        <br />
                    </div>
                )
            })}
        </>
    )
}

export default MyTrip