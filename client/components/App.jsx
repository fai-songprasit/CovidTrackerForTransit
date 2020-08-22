import React from "react"
import { HashRouter as Router, Route} from 'react-router-dom'

import MyTrip from "./MyTrip.jsx"
import Home from "./Home.jsx"

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home}/>
      <Route path="/my-trip" component={MyTrip}/>
    </Router>
  )
}

export default App
