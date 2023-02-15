import { useReducer } from "react";
import "./examples.css";

const initalState = 0;

const reducer = (state, action) => {
  console.log(state, action);

  if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    return state - 1;
  }

  return state;
};

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <div className="Heading">
      <h1>Use Reducer Hook example in React JS</h1>
      <p className="pTag">{state}</p>

      <div>
        <button className="btn" onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button className="btn" onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default UseReducerHook;
