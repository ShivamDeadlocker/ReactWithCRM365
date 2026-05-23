import React, { useState } from "react";

/**
 * Input Element Event Example
 *
 * @returns
 */

const EventHandlingInFunctionalComponent = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <h3>Event Handling In Functional Component Using The Input Element!!!</h3>
      <input
        type="text"
        placeholder="Please Enter Your Name!!!"
        onChange={(e) => {
          console.log(e);
          setName(e.target.value);
        }}
      />
      <h4>Name: {name}</h4>
    </div>
  );
};

export default EventHandlingInFunctionalComponent;
