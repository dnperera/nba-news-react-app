import React from "react";
import { Link } from "react-router-dom";
import "../css/header.css";
import FontAwesome from "react-fontawesome";

const Header = () => {
  const navBars = () => {
    return (
      <div className="bars">
        <FontAwesome name="bars" />
      </div>
    );
  };
  const logo = () => {
    return (
      <Link to="/" className="logo">
        <img src="/images/nba_logo.png" alt="NBA logo" />
      </Link>
    );
  };

  return (
    <header className="header">
      <div className="headerOpt">
        {navBars()}
        {logo()}
      </div>
    </header>
  );
};
export default Header;
