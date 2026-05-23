import React, { Component } from "react";

//Define the State Type
interface StateType {
  count: number;
}

class SetStateInClassComponent extends Component<{}, StateType> {
  state = {
    count: 0,
  };

  //Increase the count
  increase = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <h1>setState Example In the Class Component </h1>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increase}>Increase</button>
      </div>
    );
  }
}

export default SetStateInClassComponent;
