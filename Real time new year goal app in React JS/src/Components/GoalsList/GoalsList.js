import React from "react";

import WrapGoals from "../Common/WrapGoals";

const GoalsList = (props) => {
  return (
    <ul className="goal-list">
      {props.items.map((goal) => (
        <WrapGoals key={goal.id} id={goal.id} onDelete={props.onDeleteItem}>
          {goal.text}
        </WrapGoals>
      ))}
    </ul>
  );
};

export default GoalsList;
