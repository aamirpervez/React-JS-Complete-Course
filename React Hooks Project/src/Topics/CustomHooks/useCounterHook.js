import React, { useEffect, useState } from "react";

const useCounterHook = (forward = true) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forward) {
        setCount((prevCounter) => prevCounter + 1);
      } else {
        setCount((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [forward]);

  return count;
};

export default useCounterHook;
