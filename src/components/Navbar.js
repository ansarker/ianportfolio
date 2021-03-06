import React from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark_ m-4 mb-0">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <FaBars className="navbar-toggler-icon" style={{ color: "#f3f1ea" }} />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/iansarker">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/ianportfolio">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Random
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
