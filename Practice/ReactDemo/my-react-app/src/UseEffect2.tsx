import React, { useState, useEffect } from "react";
const UseEffectEx: React.FC = () => {
  const [data, setData] = useState<string>("");
  useEffect(() => {
    // This will run after the initial render and every time the 'data' state changes
    console.log("Controls enter in useeffect");
    fetchData();
  }, [data]);
  const fetchData = async () => {
    try{
    // Simulate an API call or async operation
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.json();
    setData(result);
    }
    catch(error)
    {
      console.log(error);
    }
  };

  return (
    <div>
      <p>Data: {data}</p>
    </div>
  );
};
export default UseEffectEx;
//In this example, the useEffect hook is used to trigger the fetchData function whenever the
// data state changes.This allows you to update the component's data based on external factors
// (e.g., data fetched from an API) and keep it in sync with the component's state.
