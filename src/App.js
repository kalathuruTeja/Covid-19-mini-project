import "./App.css"
import { Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import NotFound from './components/NotFound'
import About from './components/About'
import Vaccination from './components/Vaccination'
import StateWiseCases from './components/StateWiseCases'
//import Header from "./components/Header"

const App = () => {
  return (
    
      <Routes>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/vaccination" component={Vaccination} />
      <Route exact path="/state/:stateCode" component={StateWiseCases} />
      <Route component={NotFound} />
        
      </Routes>
    
  )
}

export default App
