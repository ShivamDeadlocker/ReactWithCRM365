import React, { useState } from "react";

const StateInFunctionalC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>State in Functional Component: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};
export default StateInFunctionalC;
