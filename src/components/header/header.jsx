// Imports
import React from 'react'
import { Link, NavLink } from 'react-router-dom';

import Logo from '../../images/Logo.png'
import './header.css'
function Header() {
  return (
    <header>
      <div className='container'>
        <div>
          <Link to="/"><img src={Logo} alt="Logo" /></Link>
        </div>

        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </div>
    </header>
  )
}

export default Header
