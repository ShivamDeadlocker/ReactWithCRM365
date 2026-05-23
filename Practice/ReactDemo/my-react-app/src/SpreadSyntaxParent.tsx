import React from "react";
import SpreadSyntaxChild from "./SpreadSyntaxChild";

interface ParentComponentProps {
  name: string;
  age: number;
  gender: string;
}
const SpreadSyntaxParent: React.FC<ParentComponentProps> = ({
  name,
  age,
  gender
}) => {
        const additionalProps = {
          color: "white",
          height: "medium"
        };
        //This approach is particularly useful when 
        //you want to pass a mix of specific and dynamically generated props to a child component.
        return (
          <div>
            <SpreadSyntaxChild
              {...additionalProps}
              name={name}
              age={age}
              gender={gender}
            />
          </div>
        );
      };
export default SpreadSyntaxParent;
