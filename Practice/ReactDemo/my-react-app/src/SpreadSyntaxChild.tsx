import React from "react";

interface ChildComponentProps {
  name: string;
  age: number;
  gender: string;
  color: string;
  height: string;
}

const SpreadSyntaxChild: React.FC<ChildComponentProps> = ({
  name,
  age,
  gender,
  color,
  height
}) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>
      <p>Color: {color}</p>
      <p>height: {height}</p>
    </div>
  );
};
export default SpreadSyntaxChild;
