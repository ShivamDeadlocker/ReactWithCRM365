import React, { useRef } from "react";
import ChildComponent1, { type ChildComponentRef } from "./UseRefChild";

const ParentComponent1: React.FC = () => {
  const childRef = useRef<ChildComponentRef>(null);
//In the handleButtonClick function of ParentComponent1, the current value of the childRef is checked. 
//If it exists (i.e., if the child component has been mounted and the ref is pointing to something), 
//the changeBackgroundColor method is called on childRef.current. This method is provided by the 
//useImperativeHandle hook within ChildComponent1, and it changes the background color of the child 
//component's div element.

  const handleButtonClick = () => {
    if (childRef.current) {
      // Call a method on the child component using the ref
      childRef.current.changeBackgroundColor("red");
    }
  };

  return (
    <div>
      <ChildComponent1 ref={childRef} />
      <button onClick={handleButtonClick}>Change Child Background Color</button>
    </div>
  );
};

export default ParentComponent1;
//the childRef is passed as a ref prop to the ChildComponent1 component. This allows the ChildComponent1 to receive and utilize the childRef.

// Now, the ParentComponent can access and interact with the ChildComponent's
// changeBackgroundColor method through childRef.current, where childRef is the ref created
// in the ParentComponent and passed to the ChildComponent.
//In the handleButtonClick function of ParentComponent1, the current value of the childRef is checked. 
//If it exists (i.e., if the child component has been mounted and the ref is pointing to something), 
//the changeBackgroundColor method is called on childRef.current. This method is provided by the 
//useImperativeHandle hook within ChildComponent1, and it changes the background color of the child 
//component's div element.
