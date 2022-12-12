import "./WrapGoals.css";

const WrapGoals = (props) => {
  const deletelHandler = () => {
    props.onDelete(props.id);
  };
  return (
    <li className="goal-item" onClick={deletelHandler}>
      {props.children}
    </li>
  );
};

export default WrapGoals;
