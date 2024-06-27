import React from 'react'
import './Sidebar.css'
import { IoMdHome } from "react-icons/io";
import { TbBrandSafari } from "react-icons/tb";
import { FaHelmetSafety } from "react-icons/fa6";
import { PiPlaylistBold } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import { MdOutlinePodcasts } from "react-icons/md";
import { FaClock } from "react-icons/fa6";
import { FaRadio } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="logo">
            <h2>Musify</h2>
        </div>

        <div className="nav-items">
            <ul>
                <a href=""><IoMdHome className='icon' /><li> Home</li></a>
                <a href=""><TbBrandSafari className='icon' /><li> Feed</li></a>
                <a href=""><FaHelmetSafety className='icon' /><li> Concerts</li></a>
                <a href=""><PiPlaylistBold className='icon' /><li> Playlist</li></a>
                <a href=""><FaHeart className='icon' /><li> Favourite</li></a>
                <a href=""><MdOutlinePodcasts className='icon' /><li>Podcase</li></a>
                <a href=""><FaClock className='icon' /><li> Listen later</li></a>
                <a href=""><FaRadio  className='icon'/><li> Radio</li></a>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar