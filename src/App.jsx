import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div style={{margin:0}} className='app'>
      <Navbar/>
      <Sidebar className="sidebar-main"/>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
    </div>
  )
}

export default App