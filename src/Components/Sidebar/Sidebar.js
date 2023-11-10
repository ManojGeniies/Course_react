import React, { useState } from "react";
import "../../App.css";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebarOpen, w3_close }) => {
  return (
    <>
      <div
        className={`w3-sidebar w3-bar-block w3-card w3-animate-left ${
          sidebarOpen ? "w3-open" : ""
        }`}
        style={{ width: sidebarOpen ? "25%" : "0" }}
      >
        <h1>Menus</h1>
        <hr className="hrtag"/>
        <Link
          to="learningObjectives"
          className="w3-bar-item w3-button"
          id="objectives"
        >
          Learning Objectives
        </Link>
        <Link to="introduction" className="w3-bar-item w3-button" id="intro">
          Introduction
        </Link>
        <Link to="types" className="w3-bar-item w3-button" id="thank_you">
          Thank You
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
