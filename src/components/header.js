import React from "react";
import { Link } from "react-router-dom";
import "../css/header.css";
import FontAwesome from "react-fontawesome";
import SideNavigation from "./sideNav";

const Header = props => {
  const navBars = () => {
    return (
      <div className="bars">
        <FontAwesome name="bars" onClick={props.onOpenNav} />
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
      <SideNavigation {...props} />
      <div className="headerOpt">
        {navBars()}
        {logo()}
      </div>
    </header>
  );
};
export default Header;
