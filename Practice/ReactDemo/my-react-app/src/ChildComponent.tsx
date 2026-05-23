// ChildComponent.tsx
import React from "react";

interface ChildComponentProps {
  increment: () => void;
}

const ChildComponent: React.FC<ChildComponentProps> = ({ increment }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default ChildComponent;
