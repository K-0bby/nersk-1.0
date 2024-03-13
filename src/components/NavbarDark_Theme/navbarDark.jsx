import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbarDark.css'
import '../../index.css'

const Navbar = () => { 
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbarDark">
      <div className="nav-logo">
        <Link to="/">
          <h1>NERSK LLC</h1>
          <p>INFORMATION TECH AGENCY</p>
        </Link>
      </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={toggleMenu}>Products</Link></li>
          <li><Link to="/" onClick={toggleMenu}>Agencies</Link></li>
          <li><Link to="/" onClick={toggleMenu}>Attorneys</Link></li>
          <li><Link to="/CaseStudies" onClick={toggleMenu}>Case Studies</Link></li>
          <li><Link to="/About" onClick={toggleMenu}>About</Link></li>
        </ul>
        <button className="button" onClick={toggleMenu}>
          <Link to="/">Talk To Us</Link>
        </button>
      <div className={`mobileMenuIcon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
