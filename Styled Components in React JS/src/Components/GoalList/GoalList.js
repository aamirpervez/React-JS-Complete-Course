import WrapGoals from "../Common/WrapGoals";

const GoalList = (props) => {
  return (
    <ul>
      {props.items.map((goal) => (
        <WrapGoals key={goal.id} id={goal.id} onDelete={props.onDeleteItem}>
          {goal.text}
        </WrapGoals>
      ))}
    </ul>
  );
};

export default GoalList;
