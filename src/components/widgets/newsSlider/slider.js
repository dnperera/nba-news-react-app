import React, { Component } from "react";
import axios from "axios";
import SliderTemplates from "./sliderTemplates";
import { URL } from "../../../config";
class Slider extends Component {
  state = {
    news: []
  };
  componentDidMount = async () => {
    const response = await axios.get(
      `${URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`
    );
    this.setState({
      news: response.data
    });
  };

  render() {
    return (
      <SliderTemplates
        data={this.state.news}
        type={this.props.type}
        settings={this.props.settings}
      />
    );
  }
}
export default Slider;
