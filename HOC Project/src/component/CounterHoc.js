import React from "react";
import { useState } from "react";

const CounterHoc = (OldComponent) => {
  return function WrapperCounter(props) {
    const [count, setCount] = useState(0);

    const countHandler = () => {
      setCount(count + 1);
    };

    return (
      <OldComponent
        name="Aamir"
        {...props}
        countHandler={countHandler}
        count={count}
      ></OldComponent>
    );
  };
};

export default CounterHoc;
