import React, { useRef } from "react";
const MyComponentUseRef1: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const countRef = useRef<number>(0);

  const handleButtonClick = () => {
    countRef.current += 1;
    console.log("Button clicked " + countRef.current + " times.");
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleButtonClick}>Click me</button>
    </div>
  );
};
export default MyComponentUseRef1;
