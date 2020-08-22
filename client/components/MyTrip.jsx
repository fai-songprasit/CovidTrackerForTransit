import React, { useState } from "react"

import Data from "./../classes/Data";

const MyTrip = () => {

    const [data, setData] = useState(Data.load());
    console.log(data)

    //Need to bring the data back from local and display this infor here
    //Date, Time, trip details, vehicle number -> please refer to design wireframe

    return (
        <>
        <h2>Trip History</h2>
        </>
    )
}

export default MyTrip