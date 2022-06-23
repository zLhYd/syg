import React from "react";
import "./nav.css";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <span className="toggle">zLhYd</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav fw-bold">
            <li className="nav-item ">
              <a className="nav-link active" href="/bro">
                Home
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link active" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/project">
                Porject
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
