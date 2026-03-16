import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {

  const [navColor, setNavColor] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <nav
      className={
        navColor
          ? "navbar navbar-expand-lg navbar-dark bg-dark shadow fixed-top"
          : "navbar navbar-expand-lg navbar-dark bg-transparent fixed-top"
      }
    >
      <div className="container">

        {/* LOGO / NAME */}
        <a className="navbar-brand fw-bold text-info fs-4" href="#home">Nasurudeen</a>

        {/* MOBILE MENU BUTTON */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#portfolio">Portfolio</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;