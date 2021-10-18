import React, { Component } from "react";

export class CounterChild extends Component {
  //   constructor(props) {
  //     super(props);
  //   }
  render() {
    return (
      <div>
        <h1>Class Component </h1>
        <h4>Count:{this.props.showCounter}</h4>
      </div>
    );
  }
}
