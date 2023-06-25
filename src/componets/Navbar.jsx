import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar
