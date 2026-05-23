import React from "react";

interface childProps {
  handleclick: () => void;
}

const MethodAsProps = ({ handleclick }: childProps) => {
  return (
    <div>
      <button onClick={handleclick}>Show Messsage</button>
    </div>
  );
};

export default MethodAsProps;
