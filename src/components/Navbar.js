// Navbar.js
import React, { useState } from 'react';
import '../styles/components/Navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-icon">A</span>
        <span className="logo-text">AYESHA.M</span>
        <ul className={`navbar-links ${drawerOpen ? 'open' : ''}`}>
        <li><a href="/store">Store</a></li>
        <li><a href="/office">Office</a></li>
        <li><a href="/home-office">Home Office</a></li>
      </ul>
      </div>

      <div className="navbar-hamburger" onClick={toggleDrawer}>
        <i className="hamburger-icon">☰</i>
      </div>

      <ul className={`navbar-links ${drawerOpen ? 'open' : ''}`}>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      <div className="navbar-actions">
        <input type="text" placeholder="Search products ..." className="navbar-search" />
        <div className="icon-basket">
          <FontAwesomeIcon icon={faCartShopping} color='white'/>
        </div >
        <FontAwesomeIcon icon={faUser} color='white' />
      </div>
    </nav>
  );
};

export default Navbar;
