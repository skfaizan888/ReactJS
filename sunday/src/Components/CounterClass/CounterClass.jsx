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


import React,{Component} from "react";

export class CounterClass extends Component {
  constructor(){
    super()
    this.state={count :0};
    

    handleIncrement=()=>{
      this.setCount ((anyName)=> ({this.anyName.count +1}))
    }
  }
  render(){
    return(
      <div>
       <h3>Counte : {this.count}</h3>
       <button>Increment</button>
       <button>Decrement</button>

      </div>
    )
  }
} 