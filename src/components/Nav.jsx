import React from 'react'
import './Nav.css'
import { Link as Link } from 'react-router-dom'

const Nav = () => {
  return (
    <section className='navbar'>
        <div className="logo">THANAKRIT</div>
        <ul>
          <li><a href="/#Home">HOME</a></li>
          <li><a href="/#About">ABOUT</a></li>
          <li><Link to="/project">PROJECTS</Link></li>
          <li><a href="#">CERTIFICATE</a></li>
        </ul>
    </section>
  )
}

export default Nav