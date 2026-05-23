import React, { forwardRef, useImperativeHandle, useRef } from 'react';

type ChildProps = {};
 //This is an interface defining the shape of the reference that will be forwarded from the child component. It specifies a method changeBackgroundColor, which takes a color string as an argument and returns void.
export interface ChildComponentRef {
    changeBackgroundColor: (color: string) => void;
}
//ChildComponentRef: This specifies the type of the ref that the component accepts.
// It typically defines the shape of the methods or properties exposed by the ref.
//ChildProps: This specifies the type of the props expected by the component.

const ChildComponent1: React.ForwardRefRenderFunction<ChildComponentRef, ChildProps> = ({}, ref) => {
    const divRef = useRef<HTMLDivElement | null>(null);
//useImperativeHandle is called to customize what will be accessible to the parent when it uses the ref.
// This ref is passed down to the child and can be used to interact with it, but instead of 
// exposing the entire DOM element, you control what the parent can interact with by using useImperativeHandle.

   // ref: The ref object that's forwarded from the parent component.
//A callback function: This function returns an object containing methods or properties that you want to expose on the ref.
    useImperativeHandle(ref, () => ({
        changeBackgroundColor: (color: string) => {
            if (divRef.current) {
                divRef.current.style.backgroundColor = color;
            }
        },
    }));

    return (
        <div ref={divRef}>
            This is the child component
    </div>
    );
};

export default forwardRef(ChildComponent1);
// In the ChildComponent, we use the forwardRef function to get the ref object passed
//from the ParentComponent.We create a divRef using the useRef hook to keep a reference to
//the DOM element inside the child component.

//     Then, we use the useImperativeHandle hook to expose the changeBackgroundColor
//method to the parent component through the ref object.This method will be used to update
//the background color of the child component's DOM element.

//useImperativeHandle: This hook customizes the value that is exposed by the ref. It takes two arguments:
//The first argument is the ref that was passed to the component.
//The second argument is a function that returns an object. This object represents the methods that will be available when accessing the forwarded ref. In this case, it exposes a method changeBackgroundColor, which changes the background color of the div element.

//The component returns a div element with the ref set to divRef.
// useImperativeHandle is a React hook that allows the ChildComponent1 to customize and
//  control the values or methods exposed to the parent component via a ref. Normally, 
//  refs in React are used to access DOM elements directly, but by using
//  useImperativeHandle, you can expose specific functions or properties from the child 
//  component to the parent.
//useRef: This is a React Hook that provides a mutable object whose .current property is initialized to the passed argument (null in this case).

// Without useImperativeHandle:
// If you did not use useImperativeHandle, the parent would have direct access to the DOM 
// node itself rather than a controlled set of methods like changeBackgroundColor. 
// For example, you could get the div element, but you would not be able to call a 
// method like changeBackgroundColor unless you directly manipulate the DOM.
// useImperativeHandle in this example is allowing you to expose a custom method (changeBackgroundColor)
//  to the parent component via a ref, instead of giving direct access to the DOM element.