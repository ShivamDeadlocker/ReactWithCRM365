import React, { Component } from "react";

interface PropsType {
  name: string;
  age: number;
}

class PropsInClassComponent extends Component<PropsType> {
  render() {
    return (
      <div>
        <h1>
            Props In The Class Components!!!!!
        </h1>
        <h2>Name: {this.props.name}</h2>
        <h2>Age: {this.props.age}</h2>
      </div>
    );
  }
}

export default PropsInClassComponent;
