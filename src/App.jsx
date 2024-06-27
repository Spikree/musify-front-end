import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home/Home'
import Categories from './components/categories/Categories'

const App = () => {
  return (
    <div style={{margin:0}} className='app'>
      <Navbar/>
      <Sidebar/>
      <Home/>
      <Categories/>
    </div>
  )
}

export default App