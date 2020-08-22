import React from "react"

const App = () => {
  const startTripClicked = (e)=>{
    console.log("Start Trip Clicked!");
    const trip = {
      startTime: Date.now(),
      route: 22
    }

  }
 
  // Save
  save = (dataToSave) => {
    const dataString = JSON.stringify(dataToSave);
    window.localStorage.setItem("data", dataString);
  }

  load = () => {
    const dataJsonString = window.localStorage.getItem("data");
    return JSON.parse(dataJsonString);
  }

  const routeNameChanged = (e)=>{
    console.log("Route name changed");
  }

  const endTripClicked = (e)=>{
    console.log("End Trip Clicked!");
  }

  const routes = [
      "203",
      "170",
      "WHF",
      "58",
      "29",
      "145",
      "201",
      "251",
      "52",
      "33",
      "N22",
      "N1",
      "202",
      "226",
      "22",
      "36",
      "CCL",
      "57",
      "114",
      "N88",
      "27",
      "121",
      "18e",
      "KPL",
      "19",
      "111",
      "83",
      "N5",
      "WRL",
      "N8",
      "1",
      "N4",
      "19e",
      "18",
      "JVL",
      "N6",
      "120",
      "210",
      "23",
      "160",
      "84",
      "154",
      "204",
      "81",
      "206",
      "60",
      "115",
      "264",
      "300",
      "3",
      "N66",
      "112",
      "85x",
      "2",
      "200",
      "23e",
      "23z",
      "291",
      "29e",
      "26",
      "17e",
      "25",
      "230",
      "28",
      "261",
      "14",
      "HVL",
      "MEL",
      "130",
      "250",
      "24",
      "150",
      "31x",
      "N3",
      "32x",
      "260",
      "17",
      "60e",
      "281",
      "12",
      "12e",
      "220",
      "34",
      "110",
      "290",
      "56",
      "113",
      "30x",
      "21",
      "236",
      "35",
      "37",
      "20",
      "13",
      "262",
      "7",
      "280",
      "N2"
    ]
    

  

  return (
    <div>
      <h1>COVID Tracker For Transit</h1>
      <button onClick={startTripClicked}>Start Trip</button>
      <input id="routeName" onChange={routeNameChanged}></input>
      <select id="routes">
        {routes}
        <option value></option>
      </select>
      <button onClick={endTripClicked}>End Trip</button>
    </div>
  )
}

export default App
