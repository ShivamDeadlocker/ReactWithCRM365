// MyComponent.tsx
import React from "react";
const MyComponentStyle: React.FC = () => {
  const containerStyle = {
    backgroundColor: "#f0f0f0",
    padding: "10px",
    borderRadius: "5px"
  };
  const textStyle = {
    fontSize: "18px",
    color: "#333",
    fontWeight: "bold"
  };
  return (
    <div style={containerStyle}>
      <p style={textStyle}>Hello, React 17 with TypeScript!</p>
    </div>
  );
};
export default MyComponentStyle;
