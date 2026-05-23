import React from "react";

interface MyComponentProps {}

interface MyComponentState {
  count: number;
}

class MyComponentLife extends React.Component<
  MyComponentProps,
  MyComponentState
> {
  constructor(props: MyComponentProps) {
    super(props);
    this.state = {
      count: 0
    };
    console.log("Constructor called");
  }

  componentDidMount() {
    console.log("Component did mount");
  }

  componentDidUpdate(prevProps: MyComponentProps, prevState: MyComponentState) {
    console.log("Component did update"+prevProps + prevState);
    // You can perform actions based on previous props or state here
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  handleIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    console.log("Render called");
    const { count } = this.state;

    return (
      <div>
        <h1>Life Cycle Method Example</h1>
        <p>Count: {count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default MyComponentLife;
