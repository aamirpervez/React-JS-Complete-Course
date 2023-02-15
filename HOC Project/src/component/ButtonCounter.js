import React from "react";
import CounterHoc from "./CounterHoc";

function ButtonCounter(props) {
  const { count, countHandler } = props;
  return (
    <div>
      <button onClick={countHandler}>Counter X {count}</button>
    </div>
  );
}

export default CounterHoc(ButtonCounter);
