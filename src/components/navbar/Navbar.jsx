import React from 'react'
import './Navbar.css'
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="search">
            <input type="text" placeholder='search a Song, Artist or an Album' />
        </div>

        <div className="user-icon">
        <FaRegUserCircle className='icon' />
        </div>
    </div>
  )
}

export default Navbar