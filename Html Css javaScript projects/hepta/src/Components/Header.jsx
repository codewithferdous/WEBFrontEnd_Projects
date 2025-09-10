import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
 import "../../src/Styling/Header.css";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  const isActive = (path) => location.pathname === path;
  return (
    <header className="header">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          Hepta
        </Link>
        <button className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav className={`nav-menu ${isOpen ? "show-menu" : ""}`}>
        <button className="close-button" onClick={closeMenu}>&times;</button>
        <ul>
          <li>
            <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
          </li>
          <li>
            <Link to="/hotels" className={isActive('/hotels') ? 'active' : ''}>Hotels</Link>
          </li>
          <li>
            <Link to="/about" className={isActive('/about') ? 'active' : ''}>About Us</Link>
          </li>
          <li>
            <Link to="/gallery" className={isActive('/gallery') ? 'active' : ''}>Gallery</Link>
          </li>
          <li>
            <Link to="/news" className={isActive('/news') ? 'active' : ''}>News</Link>
          </li>
          <li>
            <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
