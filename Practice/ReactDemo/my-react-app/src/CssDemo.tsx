import React from "react";
interface MyComponentProps {
  isHighlighted: boolean;
}
const StyleConditional: React.FC<MyComponentProps> = ({ isHighlighted }) => {
  const myStyle: React.CSSProperties = {
    backgroundColor: isHighlighted ? "yellow" : "white",
    color: isHighlighted ? "black" : "blue",
    padding: "10px",
    borderRadius: "5px"
  };
  return <div style={myStyle}>Hello, I am a styled component.</div>;
};
export default StyleConditional;
