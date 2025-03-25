import React from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Home from './pages/Home'
import EmployeeForm from "./pages/EmployeeForm";


const App = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/employee' element={<EmployeeForm/>} />
        </Routes>
    </Router>
  )
}

export default App