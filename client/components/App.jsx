import React from "react"
import { HashRouter as Router, Route} from 'react-router-dom'

import Home from "./Home.jsx"
import MyTrip from "./MyTrip.jsx";
import Nav from "./Nav.jsx";

const App = () => {
  return (
    <Router>
      <Nav />
      <Route exact path="/" component={Home}/>
      <Route exact path="/my-trip" component={MyTrip}/>
    </Router>
  )
}

export default App
