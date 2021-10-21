import React, { Component } from "react";

export class CounterClassChild extends Component {
  render() {
    return (
      <div>
        <h2>Count Class :{this.props.countBatao}</h2>
      </div>
    );
  }
}
