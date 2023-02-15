import ChildRefComponent from "./ChildRefComponent";
import "../examples.css";
import { useRef } from "react";

const ParentRefComponet = () => {
  let inputRef = useRef("");

  const passValueToChildComponent = () => {
    inputRef.current.value = "Value from Parent.";
    inputRef.current.style.color = "Green";
  };
  return (
    <div className="Heading">
      <h1>Forwarding Refs in React JS</h1>

      <p>
        Ref forwarding is a technique for automatically passing a ref through a
        component to one of its children.
      </p>
      <p>
        Ref forwarding is an opt-in feature that lets some components take a ref
        they receive, and pass it further down (in other words, “forward” it) to
        a child.
      </p>

      <ChildRefComponent ref={inputRef} />
      <br />
      <button onClick={passValueToChildComponent}>
        Send Value to Child Component
      </button>
    </div>
  );
};

export default ParentRefComponet;
