import React from "react"

const App = () => {
  const startTripClicked = (e)=>{
    console.log("Start Trip Clicked!");
  }

  const routeNameChanged = (e)=>{
    console.log("Route name changed");
  }

  const endTripClicked = (e)=>{
    console.log("End Trip Clicked!");
  }

  return (
    <div>
      <h1>COVID Tracker For Transit</h1>
      <button onClick={startTripClicked}>Start Trip</button>
      <input id="routeName" onChange={routeNameChanged}></input>
      <button onClick={endTripClicked}>End Trip</button>
    </div>
  )
}

export default App
