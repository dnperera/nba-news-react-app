import React, { Component } from "react";
import "../../../css/videoList.css";
import axios from "axios";
import { URL } from "../../../config";
import Button from "../buttons/button";

class VideoList extends Component {
  state = {
    videos: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount,
    teams: []
  };

  getDetails = async (start, end) => {
    //check whether teams already loaded. if not load once from the db
    if (this.state.teams.length === 0) {
      let results = await axios.get(`${URL}/teams`);
      this.setState({
        teams: results.data
      });
    }
    //Load videos
    let videos = await axios.get(`${URL}/videos?_start=${start}&_end=${end}`);
    this.setState({
      videos: videos.data
    });
  };

  componentDidMount() {
    this.getDetails(this.state.start, this.state.end);
  }

  loadMore = () => {};
  render() {
    return (
      <div className="videoList_wrapper">
        {this.props.title && (
          <h3>
            <strong>NBA</strong> Videos
          </h3>
        )}
        {this.props.loadmore === true ? (
          <Button
            type="loadmore"
            loadmore={() => this.loadMore()}
            cta="Load More Videos"
          />
        ) : (
          <Button type="linkTo" cta="More videos" linkTo="/videos" />
        )}
      </div>
    );
  }
}
export default VideoList;
