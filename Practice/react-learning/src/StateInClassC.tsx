import react, { Component } from "react";

interface StateType {
  count: number;
}

class Counter extends Component<StateType> {
  state = {
    count: 0,
  };

  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render(): react.ReactNode {
      return (
        <div>
            <h1>State in the Class Component: {this.state.count}</h1>
            <button onClick={this.increase}>
                Increase
            </button>
        </div>
      )
  }
}

export default Counter;
