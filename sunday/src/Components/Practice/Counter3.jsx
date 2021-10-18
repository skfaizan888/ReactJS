import React, { Component } from "react";
import Counter3Child from "./Counter3Child";

class Counter3 extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  handleIncreament = () => {
    this.setState((data) => ({ count: data.count + 1 }));
  };
  handledecreament = () => {
    this.setState((data) => ({ count: data.count - 1 }));
  };
  handleReset = () => {
    this.setState((data) => ({ count: data.count * 0 }));
  };
  render() {
    return (
      <div>
        <Counter3Child
          ChildShow={this.state.count}
          buttonShow={this.handleIncreament}
          buttonHide={this.handledecreament}
          buttonResert={this.handleReset}
        />
      </div>
    );
  }
}
export default Counter3;
