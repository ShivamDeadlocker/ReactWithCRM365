import React, { Component } from "react";

interface StateType {
  count: number;
}

class LifecycleDemo extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);

    console.log("1. Constructor called");

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("3. Component Mounted");
  }

  shouldComponentUpdate() {
    console.log("4. Should Update?");
    return true;
  }

  componentDidUpdate() {
    console.log("6. Component Updated");
  }

  componentWillUnmount() {
    console.log("7. Component Unmounted");
  }

  increase = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    console.log("2 / 5. Render called");

    return (
      <div>
        <h1>{this.state.count}</h1>

        <button onClick={this.increase}>Increase</button>
      </div>
    );
  }
}

export default LifecycleDemo;
