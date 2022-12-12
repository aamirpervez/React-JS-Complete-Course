import { useState } from "react";
import Button from "../UI/Button/Button";
import style from "./GoalInput.module.css";

const GoalInput = (props) => {
  const [goalValue, setGoalValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.length > 0) {
      setIsValid(true);
    }
    setGoalValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (goalValue.length < 1) {
      setIsValid(false);
      return;
    }

    props.onAddNewGoal(goalValue);
    setGoalValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${style["form-control"]} ${!isValid && style.invalid}`}>
        <label>New Year Goal for 2023</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          value={goalValue}
        />
      </div>
      <Button type="submit">Add New Goal</Button>
    </form>
  );
};

export default GoalInput;
