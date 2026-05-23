// MyComponent.tsx
import React from "react";

// Define the props interface for the component
interface MyComponentProps {
  name: string;
  age: number;
}

// Functional Component
const MyComponent1: React.FC<MyComponentProps> = (props: MyComponentProps) => {
  return (
    <div>
      {/* Error */}
      {/* {props.name="John"} */}
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

export default MyComponent1;
