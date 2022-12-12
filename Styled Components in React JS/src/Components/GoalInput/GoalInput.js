import { useState } from "react";
import Button from "../UI/Button/Button";
import styled from "styled-components";

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
    background: ${(props) => (props.invalid ? "pink" : "transparent")};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #cceeff;
    border-color: #01245e;
  }

  &.invalid input {
    border-color: red;
    background-color: rgb(211, 181, 181);
  }

  &.invalid label {
    color: red;
  }
`;

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
      <FormControl invalid={!isValid}>
        <label>New Year Goal for 2023</label>
        <label>Test Value</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          value={goalValue}
        />
      </FormControl>
      <Button type="submit">Add New Goal</Button>
    </form>
  );
};

export default GoalInput;
