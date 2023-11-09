import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ w3_open, sidebarOpen, w3_close }) => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid ">
        <div className="NavIconLogo">
          <i
            style={{ cursor: "pointer" }}
            class="fa-solid fa-bars"
            onClick={!sidebarOpen ? w3_open : w3_close}
          ></i>
          <a className="navbar-brand">Geniies</a>
        </div>

        <div className="Navbar-links" role="search">
          <h6>Exit</h6>

          <Link to="/">
            <h6>Home</h6>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
