// import React, { Component } from "react";
// import { CounterClassChild } from "./CounterClassChild";

// export class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }
//   handleIncreament = () => {
//     this.setState((Anyname) => ({ count: Anyname.count + 1 }));
//   };
//   handleDecreament = () => {
//     this.setState({ count: this.state.count - 1 });
//   };
//   render() {
//     return (
//       <div>
//         <CounterClassChild countBatao={this.state.count} />

//         <button onClick={this.handleIncreament}>Increment</button>
//         <button onClick={() => this.handleDecreament()}>Decrement</button>
//       </div>
//     );
//   }
// }

// import React, { Component } from "react";

// export class Counter extends Component {
//   constructor() {
//     super();
//     this.state = { count: 0 };
//   }
//   UpdateCount = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };
//   render() {
//     return (
//       <div>
//         <h2>Count : {this.state.count}</h2>
//         <button>
//           onClick=
//           {() => this.UpdateCount()}
//         </button>
//       </div>
//     );
//   }
// }
