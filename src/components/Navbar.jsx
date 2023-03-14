import React from 'react';
import { FaLessThan } from 'react-icons/fa';
import { BsMic } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li className="lessthan">
            <NavLink to="/" className="navlink"><span className="icon"><FaLessThan /></span></NavLink>
            <span className="year">2015</span>
          </li>
          <li className="logo">Navbar</li>
          <li className="mic_set">
            <span className="icon"><BsMic /></span>
            <span className="icon"><FiSettings /></span>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
