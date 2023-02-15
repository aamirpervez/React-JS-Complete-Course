import { useState } from "react";
import "../examples.css";

const ControlledComponent = () => {
  let [val, setVale] = useState("");

  return (
    <div className={"Heading"}>
      <h1>Controlled Component in React JS</h1>
      <input
        type="text"
        value={val}
        onChange={(e) => setVale(e.target.value)}
      />

      <p>Value Entered : {val}</p>
    </div>
  );
};

export default ControlledComponent;
