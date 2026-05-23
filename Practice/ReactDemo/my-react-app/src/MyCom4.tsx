// MyClassComponent.tsx
import React from "react";

// Define the props interface for the component
interface MyClassComponentProps {
    name: string;
    age: number;
}

// Define the state interface for the component
interface MyClassComponentState {
    message: string;
}

// Class Component
class MyClassComponent extends React.Component<
    MyClassComponentProps,
    MyClassComponentState
    > 
    {
        
    constructor(props: MyClassComponentProps) {
        super(props);
        this.state = {
            message: "Hello!"
        };
    }

    render() {
        const { name, age } = this.props;
        const { message } = this.state;

        return (
            <div>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>{message}</p>
            </div>
        );
    }
}

export default MyClassComponent;


