import React, { useState } from "react";
import "../index.css";
import { useLanguage } from "react-multiplelanguage";
import { Flags } from "react-multiplelanguage";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { texts } = useLanguage();
  const { navbar } = texts;
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? "open" : ""}`}>
      <Flags />
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
            {navbar.home}
          </a>
        </li>
        <li role="none">
          <a href="/" role="menuitem">
            {navbar.about}
          </a>
        </li>
        <li role="none">
          <a href="/" role="menuitem">
            {navbar.products}
          </a>
        </li>
        <li role="none">
          <a href="/" role="menuitem">
            {navbar.contact}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
