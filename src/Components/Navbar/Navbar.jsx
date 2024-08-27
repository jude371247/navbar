import React, { useState } from "react";
import './Navbar.css';
import { IoCartOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

  // Function to handle menu item clicks
  const handleMenuItemClick = () => {
    if (hamburgerIsOpen) {
      setHamburgerIsOpen(false);
    }
  };

  return (
    <div className='navbar'>
      <h2 className='logo'>TrustCart</h2>
      <div className={`rightNav ${hamburgerIsOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={handleMenuItemClick}>Home</Link></li>
          <li><Link to="/Shop" onClick={handleMenuItemClick}>Shop</Link></li>
          <li><Link to="/Contact" onClick={handleMenuItemClick}>Contact</Link></li>
          <li><Link to="/About" onClick={handleMenuItemClick}>About Us</Link></li>
          <li><IoCartOutline className="icon" /></li>
          <li><CiUser className="icon" /></li>
        </ul>
      </div>
      <div className="hamburger">
        <Hamburger toggled={hamburgerIsOpen} toggle={setHamburgerIsOpen} />
      </div>
    </div>
  );
}

export default Navbar;
