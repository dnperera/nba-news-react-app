import React, { Component } from "react";
import "../../css/layout.css";
import Header from "../header";

class Layout extends Component {
  state = {
    showNav: false
  };

  toggleSideNave = status => {
    this.setState({ showNav: status });
  };

  render() {
    return (
      <div>
        <Header
          showNav={this.state.showNav}
          onHideNav={() => this.toggleSideNave(false)}
          onOpenNav={() => this.toggleSideNave(true)}
        />
        {this.props.children}
      </div>
    );
  }
}
export default Layout;
