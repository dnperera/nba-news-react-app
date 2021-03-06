import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link } from "react-router-dom";
import axios from "axios";
import { URL } from "../../../config";
import Button from "../buttons/button";
import CardInfo from "../cardInfo/cardInfo";
import "../../../css/newsList.css";

class NewsList extends Component {
  state = {
    items: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount,
    teams: []
  };

  componentDidMount = () => {
    this.request(this.state.start, this.state.end);
  };

  request = async (start, end) => {
    //check whether teams already loaded. if not load once from the db
    if (this.state.teams.length === 0) {
      let results = await axios.get(`${URL}/teams`);
      this.setState({
        teams: results.data
      });
    }

    const response = await axios.get(
      `${URL}/articles?_start=${this.state.start}&_end=${this.state.end}`
    );
    this.setState({
      items: [...this.state.items, ...response.data]
    });
  };

  loadMore = () => {
    let newEnd = this.state.end + this.state.amount;
    this.request(this.state.end, newEnd);
    this.setState({
      end: newEnd
    });
  };
  renderNews = type => {
    let template = null;
    switch (type) {
      case "card":
        template = this.state.items.map((item, index) => {
          return (
            <CSSTransition
              classNames={{
                enter: "newsList_wrapper",
                enterActive: "newsList_wrapper_enter"
              }}
              timeout={800}
              key={index}
            >
              <div>
                <div className="newsList_item">
                  <Link to={`/articles/${item.id}`}>
                    <CardInfo
                      teams={this.state.teams}
                      teamId={item.teamId}
                      date={item.date}
                    />
                    <h2>{item.title}</h2>
                  </Link>
                </div>
              </div>
            </CSSTransition>
          );
        });
        break;

      default:
        template = null;
        break;
    }
    return template;
  };
  render() {
    return (
      <div>
        <TransitionGroup component="div" className="list">
          {this.renderNews(this.props.type)}
        </TransitionGroup>
        <Button
          type="loadmore"
          loadMore={() => {
            this.loadMore();
          }}
          cta="Load More News"
        />
      </div>
    );
  }
}
export default NewsList;
