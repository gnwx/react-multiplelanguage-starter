import React, { useState } from "react";
import "../index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? "open" : ""}`}>
      <button
        className="navbar-toggle"
        onClick={toggleNavbar}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? "Close" : "Menu"}
      </button>
      <ul
        className={`navbar-menu ${isOpen ? "open" : ""}`}
        role="menu"
        aria-hidden={!isOpen}
      >
        <li role="none">
          <a href="/" role="menuitem">
            Home
          </a>
        </li>
        <li role="none">
          <a href="/" role="menuitem">
            About
          </a>
        </li>
        <li role="none">
          <a href="/" role="menuitem">
            Products
          </a>
        </li>
        <li role="none">
          <a href="/" role="menuitem">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
