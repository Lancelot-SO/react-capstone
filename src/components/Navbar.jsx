import React from 'react';
import { FaLessThan } from 'react-icons/fa';
import { BsMic } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';

import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li className="lessthan">
            <span className="icon"><FaLessThan /></span>
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
