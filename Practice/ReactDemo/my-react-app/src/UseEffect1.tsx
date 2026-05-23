import React, { useState, useEffect } from 'react';

const UseEffectDemo: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log('Count value changed:', count);
    // This effect runs whenever the 'count' state changes
  }, [count]);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
};
export default UseEffectDemo;