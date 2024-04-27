import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <center style={{marginTop:"10px"}}><h1>E-Comm Dashboard </h1></center> */}
      <Outlet/>
    </div>
  )
}

export default App
