import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="logo">
          <h1>Musify</h1>
        </div>

        <div className="get-started">
          <ul>
            <li className='footer-bold'>Get Started</li>
            <li>Download app</li>
            <li>Pricing</li>
            <li>Get support</li>
          </ul>
        </div>

        <div className="discover-musify">
          <ul>
            <li className='footer-bold'>Discover musify</li>
            <li>About us</li>
            <li>Explore App</li>
            <li>Orignals</li>
            <li>Sound Quality</li>
          </ul>
        </div>

        <div className="accounts">
          <ul>
            <li className='footer-bold'>Accounts</li>
            <li>Login</li>
            <li>Sign up</li>
            <li>Reedm Gift cards</li>
          </ul>
        </div>

    </div>
  )
}

export default Footer