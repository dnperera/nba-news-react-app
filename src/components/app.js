import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div>
        <h1>Latest uptodate NBA news ...</h1>
        <p>Current Count :{this.state.count}</p>
        <p>
          <button onClick={this.increaseCount}>Count</button>
        </p>
      </div>
    );
  }
}
export default App;
