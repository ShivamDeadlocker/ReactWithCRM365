import React, { useRef, useState } from "react";

const MyComponentUseRef: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.focus(); // Focus on the input element
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value); // Update the state with the input value
  };

  return (
    <div>
      <input
        type="text"
        ref={inputRef} // Assign the ref to the input element
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
};
export default MyComponentUseRef;
// In this example, we use useRef to create a reference to the input element.
