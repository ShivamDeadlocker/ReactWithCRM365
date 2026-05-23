import React from "react";
import {
  PrimaryButton,
  DefaultButton,
  ActionButton,
  IconButton,
} from "@fluentui/react";

const FluentU = () => {
  return (
    <div>
      <h1>Fluent UI Buttons!!!</h1>
      <PrimaryButton>Primary Button</PrimaryButton>
      <br /> <br />
      <DefaultButton>DefaultButton Button</DefaultButton>
      <br /> <br />
      <ActionButton>ActionButton Button</ActionButton>
      <br /> <br />
      <IconButton iconProps={{ iconName: "Add" }}>IconButton Button</IconButton>
      <br /> <br />
      {/* <h1>Fluent TextField!!!</h1>
      <TextField label="User Name" placeholder="Please Enter Your Name">IconButton Button</TextField> */}
    </div>
  );
};

export default FluentU;
