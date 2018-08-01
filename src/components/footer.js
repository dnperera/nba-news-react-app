import React from "react";
import { Link } from "react-router-dom";
import "../css/footer.css";
import { CURRENT_YEAR } from "../config";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/" className="logo">
        <img src="/images/nba_logo.png" alt="NBA logo" />
      </Link>
      <div className="right">
        &copy; NBA {CURRENT_YEAR} All rights reserved.
      </div>
    </div>
  );
};
export default Footer;
