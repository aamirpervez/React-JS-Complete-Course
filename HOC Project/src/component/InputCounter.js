import React from "react";
import CounterHoc from "./CounterHoc";

function InputCounter(props) {
  const { count, countHandler } = props;

  return (
    <div>
      <input onChange={countHandler} />
      <br />
      <h3>
        Total Characters : {count} {props.name}
      </h3>
    </div>
  );
}

export default CounterHoc(InputCounter);
