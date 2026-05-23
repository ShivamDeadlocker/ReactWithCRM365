import React, { useState, useEffect } from "react";
const UseEffectEx1: React.FC = () => {
    const [data, setData] = useState<string[]>([]);
    useEffect(() => {
        // This function will run only once just like componentdidmount
        fetchData();
        console.log("useEffect");
    },[]);

    const fetchData = () => {
      
        console.log("Fetching Data");
        setTimeout(() => {
            setData(["Item 1", "Item 2", "Item 3"]);
        }, 2000); // Simulating a 2-second delay for demonstration purposes
    };
    return (
        <div>
            <h2>Data</h2>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};
export default UseEffectEx1;
