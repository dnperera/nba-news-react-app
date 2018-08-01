import React, { Component } from "react";
import axios from "axios";
import SliderTemplates from "./sliderTemplates";
class Slider extends Component {
  state = {
    news: []
  };
  componentDidMount = async () => {
    const response = await axios.get(
      "http://localhost:3004/articles?_start=0&_end=3"
    );
    this.setState({
      news: response.data
    });
  };

  render() {
    return <SliderTemplates data={this.state.news} type="featured" />;
  }
}
export default Slider;
