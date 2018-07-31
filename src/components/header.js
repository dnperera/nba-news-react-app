import React from "react";
import { Link } from "react-router-dom";
import "../css/header.css";

const Header = () => {
  const logo = () => {
    return (
      <Link to="/" className="logo">
        <img src="/images/nba_logo.png" alt="NBA logo" />
      </Link>
    );
  };

  return (
    <header className="header">
      <div className="headerOpt">{logo()}</div>
    </header>
  );
};
export default Header;
