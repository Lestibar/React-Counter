import React, { Component } from "react";

// define navbar as stateless functional component
const NavBar = ({ totalCounters1 }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge-pill badge-secondary">{totalCounters1}</span>
      </a>
    </nav>
  );
};

export default NavBar;
