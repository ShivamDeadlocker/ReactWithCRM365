import React from "react";
import './style1.module.css';

interface MyComponentProps {
  isHighlighted: boolean;
}

const CssConditional: React.FC<MyComponentProps> = ({ isHighlighted }) => {
  const cssClass = isHighlighted ? "highlighted" : "normal";

  return <div className={cssClass}>Hello, I am a styled component.</div>;
};
export default CssConditional;
