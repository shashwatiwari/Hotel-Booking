import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import logo from "../images/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" className="logo">
            {/* <img src={logo} alt="Beach Resort" /> */}
            My Hotel
          </Link>
          <button
            type="button"
            className="nav-btn"
            onClick={handleToggle}
          >
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul
          className={isOpen ? "nav-links show-nav" : "nav-links"}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
          <li>
            <Link to="/about">About US</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
