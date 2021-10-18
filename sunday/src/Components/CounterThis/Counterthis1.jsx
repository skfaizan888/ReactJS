import React, { Component } from "react";
import { CounterChild } from "./CounterChild";

class Counterthis1 extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  handleIncrement = () => {
    this.setState((anyname) => ({ count: anyname.count + 1 }));
  };
  handleDicrement = () => {
    this.setState((anyname) => ({ count: anyname.count - 1 }));
  };
  handleResert = () => {
    this.setState((anyname) => ({ count: anyname.count * 0 }));
  };
  render() {
    return (
      <div>
        <CounterChild showCounter={this.state.count} />
        <button onClick={() => this.state.count < 10 && this.handleIncrement()}>
          Increament
        </button>

        <button onClick={() => this.state.count > 0 && this.handleDicrement()}>
          Decreament
        </button>
        <br />
        <button onClick={this.handleResert}>Reset</button>
      </div>
    );
  }
}
export default Counterthis1;
