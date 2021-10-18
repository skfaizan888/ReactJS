import React, { Component } from "react";

class Counter3Child extends Component {
  render() {
    return (
      <div>
        <h2>Child-Counter</h2>
        <h4>Counter:{this.props.ChildShow}</h4>
        <button>Plus{this.props.buttonShow}</button>
        <button>minius{this.props.buttonHide}</button>
        <button>Resert{this.props.buttonResert}</button>
      </div>
    );
  }
}
export default Counter3Child;
