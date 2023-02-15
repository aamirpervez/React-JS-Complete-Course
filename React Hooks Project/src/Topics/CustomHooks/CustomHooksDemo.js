import React from "react";
import ForwardCounter from "./ForwardCounter";
import "../examples.css";
import BackwardCounter from "./BackwardCounter";

function CustomHooksDemo() {
  return (
    <div className="Heading">
      <ForwardCounter />
      <BackwardCounter />
    </div>
  );
}

export default CustomHooksDemo;
