import React, { useState } from "react"

import Data from "./../classes/Data";

const MyTrip = () => {

    const [data, setData] = useState(Data.load());
    console.log(data.trips)

    //Need to bring the data back from local and display this infor here
    //Date, Time, trip details, vehicle number -> please refer to design wireframe

    return (
        <>
            <h2>Trip History</h2>
            {data.trips.map((trip, key) => {
                const displayDate = new Date(trip.startTime).toDateString();


                const displayStartTime = new Date(trip.startTime).toDateString();
                const displayEndTime = new Date(trip.startTime).toDateString();

                return (
                    <div key={key}>
                        <div>
                            <b>{displayDate} -  {trip.route}</b>
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