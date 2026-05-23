// ParentComponent.tsx
import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

interface ParentComponentProps { }

const ParentComponent: React.FC<ParentComponentProps> = () => {
    const [count, setCount] = useState<number>(0);

    const handleIncrement = () => {
        // setCount(count + 1);
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div>
            <h1>Parent Component</h1>
            <p>Count: {count}</p>
            <ChildComponent increment={handleIncrement} />
        </div>
    );
};

export default ParentComponent;
