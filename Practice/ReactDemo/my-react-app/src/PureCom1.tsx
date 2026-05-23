import React from "react";

interface MyPureComponentProps {
  name: string;
}

interface MyPureComponentState {
  count: number;
}

class MyPureComponent extends React.PureComponent<
  MyPureComponentProps,
  MyPureComponentState
> {
  constructor(props: MyPureComponentProps) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    const { name } = this.props;
    const { count } = this.state;
    console.log("render invoke");

    return (
      <div>
        {/* name will not rerender only count will rerender */}
        <h2>{name}</h2>
        <p>Count: {count}</p>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
export default MyPureComponent;
