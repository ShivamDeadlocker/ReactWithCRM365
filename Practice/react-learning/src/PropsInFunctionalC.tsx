import React from "react";

interface StudentProps {
  name: string;
  age: number;
}

//With Props Destructuring 

export const PropsInFunctionalCDestructing = ({ name, age }: StudentProps) => {
  return (
    <div>
      <h1>Props In The Functional Component!!!</h1>
      <h2>With Destructuring</h2>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
    </div>
  );
};

//Without Props Destructuring 

export const PropsInFunctionalC = (props: StudentProps) => {
  return (
    <div>
      <h1>Props In The Functional Component!!!</h1>
      <h2>Without Destructuring</h2>
      <h2>Name: {props.name}</h2>
      <h2>Age: {props.age}</h2>
    </div>
  );
};


// export default PropsInFunctionalC;
