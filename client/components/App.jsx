import React from "react"
import { HashRouter as Router, Route} from 'react-router-dom'

import Home from "./Home.jsx"

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home}/>
    </Router>
  )
}

export default App
