import React, { useEffect, useState } from "react";
import useCounterHook from "./useCounterHook";

const ForwardCounter = () => {
  const count = useCounterHook(true);
  return (
    <div>
      <h2>{count}</h2>
    </div>
  );
};

export default ForwardCounter;
