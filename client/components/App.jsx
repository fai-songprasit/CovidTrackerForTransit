import React, { useEffect, useState } from "react"
import { HashRouter as Router, Route } from 'react-router-dom'
import socketIoClient from 'socket.io-client';

import {Data, Trip} from "./../classes";

import Home from "./Home.jsx"
import MyTripContainer from "./MyTripContainer.jsx";
import Nav from "./Nav.jsx";
import CovidPositiveBroadcast from "./CovidPositiveBroadcast.jsx";
import CovidPositiveModal from "./CovidPositiveModal.jsx";

const ENDPOINT = "localhost:3001";
const App = () => {
  const [data, setData] = useState(Data.load());
  const socket = socketIoClient(ENDPOINT);
  const [showPositiveContact, setShowPositiveContact] = useState();

  useEffect(() => {
    socket.on('new state', function (trip) {
      //No need to alert people who are already covid positive if they were 
      // on a trip with someone else who has become covid positive
      if (data.getCovidPositive()) {
        return;
      }
      console.log("New State Found!");

      if (trip instanceof Trip !== true) {
        trip = new Trip(trip.route, trip.startTime, trip.endTime, trip.vehicleRef);
      }

      const overlappingTrips = getOverlappingTrips(trip);
      if (overlappingTrips.length > 0) {
        $('#positiveCovidModal').modal({ show: true });
        setShowPositiveContact(true);
        console.log("Found a covid positive trip");
      }
    });
  }, []);


  const getOverlappingTrips = (tripA) => {
    const myTrips = data.trips;
    const filteredTrips = myTrips.filter(trip => trip.overlaps(tripA));
    return filteredTrips;
  }


  return (
    <Router>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route exact path="/my-trip" component={MyTripContainer} />
      <Route exact path="/covid-positive" component={CovidPositiveBroadcast} />
      <CovidPositiveModal />
    </Router>
  )
}

export default App
