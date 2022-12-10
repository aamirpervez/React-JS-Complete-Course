import React from "react";

import "./WrapGoals.css";

const WrapGoals = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default WrapGoals;
