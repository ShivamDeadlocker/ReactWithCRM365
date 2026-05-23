import React, { useState } from "react";

interface MyPureComponentProps {
  name: string;
}
const MyPureComponent1: React.FC<MyPureComponentProps> = ({ name }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>{name}</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Increment
      </button>
    </div>
  );
};
// By using React.memo, you're optimizing the rendering performance of MyPureComponent1
// by preventing unnecessary re-renders when the name prop remains the same.
//  This is particularly useful when you have components with expensive rendering or complex logic,
//   and you want to ensure they don't re - render unless the relevant props change.
export default React.memo(MyPureComponent1);
