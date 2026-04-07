import React, { useState } from "react";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["home", "about", "project", "contact"];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home">
          <h2 className="logo">Abhilash.</h2>
        </a>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          {links.map((link, index) => (
            <a key={index} href={`#${link}`} onClick={() => setMenuOpen(false)}>
              {link}
            </a>
          ))}
        </div>

        <div className="nav-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiXMark /> : <HiBars3BottomRight />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
