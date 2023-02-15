import { useRef, useState } from "react";
import "./examples.css";

const UseRefHook = (props) => {
  const [name, setname] = useState("");
  const [age, setage] = useState("");

  const refName = useRef();
  const refAge = useRef();

  //   const bindName = (e) => {
  //     setname(e.target.value);
  //   };

  //   const bindAge = (e) => {
  //     setage(e.target.value);
  //   };

  const buttonClick = () => {
    console.log(refName);
    console.log(refName.current.value);

    console.log(refAge);
    console.log(refAge.current.value);
  };

  return (
    <div className="Heading">
      <h1>useRef Hook in React JS</h1>
      <table style={{ margin: "0 auto" }}>
        <tr>
          <td>Name</td>
          <td>
            <input
              type="text"
              placeholder="Enter Name"
              //   value={name}
              //   onChange={bindName}
              ref={refName}
            />
          </td>
        </tr>
        <tr>
          <td>Age</td>
          <td>
            <input
              type="text"
              placeholder="Enter Age"
              //   onChange={bindAge}
              //   value={age}
              ref={refAge}
            />
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <input type="submit" label="Click" onClick={buttonClick} />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default UseRefHook;
