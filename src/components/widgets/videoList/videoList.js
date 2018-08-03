import React, { Component } from "react";
import "../../../css/videoList.css";
import axios from "axios";
import { URL } from "../../../config";

class VideoList extends Component {
  state = {
    videos: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount,
    teams: []
  };

  render() {
    return (
      <div className="videoList_wrapper">
        {this.props.title && (
          <h3>
            <strong>NBA</strong> Videos
          </h3>
        )}
      </div>
    );
  }
}
export default VideoList;
