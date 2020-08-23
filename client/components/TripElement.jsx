import React, { useState } from "react"


const TripElement = (props) => {

    const trip = props.trip;
    const startDate   = new Date(trip.startTime);
    const endDate     = new Date(trip.endTime);
    const displayDate = `${startDate.getDate()}/${startDate.getMonth() +1 }/${startDate.getFullYear()}` ;

    const displayStartTime = `${startDate.getHours()}:${startDate.getMinutes().toString().padStart(2, 0) }` ;
    const displayEndTime = (trip.endTime !== null) ? `${endDate.getHours()}:${endDate.getMinutes().toString().padStart(2, 0) }` : "Trip Not Yet Complete";
    
    return (
        <div>
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
        </div>)
}

export default TripElement;