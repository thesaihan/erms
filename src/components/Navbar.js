import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="Navbar main-menu">
      <ul>
        <li>
          <Link to="/">
            <i className="fas fa-home fa-2x" />
            <span className="nav-text">Dashboard</span>
          </Link>
        </li>
        <li className="has-subnav">
          <Link to="/student">
            <i className="fas fa-user-friends fa-2x" />
            <span className="nav-text">Student</span>
          </Link>
        </li>
        <li className="has-subnav">
          <Link to="/subject">
            <i className="fas fa-book fa-2x" />
            <span className="nav-text">Subject</span>
          </Link>
        </li>
      </ul>

      <ul className="logout">
        <li>
          <a href="#">
            <i className="fas fa-power-off fa-2x" />
            <span className="nav-text">Logout</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
