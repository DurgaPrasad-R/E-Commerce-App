import React from "react";
import "./NavBar.css";
import navlogo from "../../assets/nav-logo.svg";
import navProfile from "../../assets/nav-profile.svg";
const NavBar = () => {
  return (
    <div className="navbar">
      <img src={navlogo} alt="logo" className="nav-logo" />{" "}
      <img src={navProfile} alt="" className="nav-profile" />
    </div>
  );
};

export default NavBar;
