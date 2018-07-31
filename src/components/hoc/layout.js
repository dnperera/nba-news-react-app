import React, { Component } from "react";
import "../../css/layout.css";
import Header from "../header";

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
export default Layout;
