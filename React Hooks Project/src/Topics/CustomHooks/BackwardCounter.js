import useCounterHook from "./useCounterHook";
import React, { useEffect, useState } from "react";

const BackwardCounter = () => {

  const count = useCounterHook(false);

  return (
    <div>
      <h2>{count}</h2>
    </div>
  );
};

export default BackwardCounter;
