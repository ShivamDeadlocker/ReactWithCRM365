// MyComponent.tsx
import React from "react";

// Define the props interface for the component
interface MyComponentProps {
  name: string;
  age: number;
}

// Functional Component
const MyComponent: React.FC<MyComponentProps> = ({ name, age }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default MyComponent;
