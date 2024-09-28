import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  // Toggle menu on click
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  // Handle active link change
  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuActive(false);
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        <span>Amr</span> Abo Hassab
      </Link>
      <i
        className={`bx bx-menu ${menuActive ? "bx-x" : ""}`}
        id="menu-icon"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      ></i>
      <nav className={`navbar ${menuActive ? "navbarActive" : ""}`}>
        <Link
          to="/"
          className={activeLink === "#home" ? "active" : ""}
          onClick={() => handleLinkClick("#home")}
          aria-label="Go to home"
        >
          الصفحه الرئيسسة
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
