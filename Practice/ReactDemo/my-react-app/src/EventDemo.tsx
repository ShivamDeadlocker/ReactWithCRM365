// MyClassComponent.tsx
import React from "react";

interface MyClassComponentProps {
  name: string;
}

interface MyClassComponentState {
  count: number;
}

class EventDemo extends React.Component<
  MyClassComponentProps,
  MyClassComponentState
> {
  constructor(props: MyClassComponentProps) {
    super(props);
    this.state = {
      count: 0
    };

    // Binding the event handler to the component instance
   this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    // Access the state using this.state
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }
handleIncrement1=()=>{
  this.setState(prevState=>({
    count:prevState.count+1
  }))
}
  render() {
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Count: {this.state.count}</p>
        {/* Use the bound event handler */}
        {/* <button onClick={this.handleIncrement}>Increment</button> */}
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default EventDemo;
