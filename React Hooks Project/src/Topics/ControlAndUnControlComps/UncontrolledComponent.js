import { useRef } from "react";

const UncontrolledComponent = () => {
  let inputRef = useRef("");

  const SubmitHandler = () => {
    let val1 = inputRef.current.value;
    let val2 = document.getElementById("input2").value;

    alert(val1 + " ---- " + val2);
  };

  return (
    <div className={"Heading"}>
      <h1>Uncontrolled in React JS</h1>

      <form onSubmit={SubmitHandler}>
        <input type="text" ref={inputRef} />
        <br />
        <br />
        <input type="text" id="input2" />
        <br />
        <br />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default UncontrolledComponent;
