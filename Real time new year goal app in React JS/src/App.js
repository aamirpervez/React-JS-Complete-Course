import { useState } from "react";
import "./App.css";
import GoalInput from "./Components/GoalInput/GoalInput";
import GoalsList from "./Components/GoalsList/GoalsList";

function App() {
  const [newyeargoals, setNewYearGoals] = useState([
    { text: "Start new react course.", id: Math.random().toString() },
    {
      text: "Excerise daily for 30 mintues atleast.",
      id: Math.random().toString(),
    },
  ]);

  const addGoalHandler = (enteredText) => {
    setNewYearGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });

    console.log("App " + setNewYearGoals.length);
  };

  const deleteItemHandler = (goalId) => {
    setNewYearGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  return (
    <div>
      <section id="goal-form">
        <GoalInput onAddGoal={addGoalHandler} />
      </section>

      <section id="goals">
        {newyeargoals.length > 0 ? (
          <GoalsList items={newyeargoals} onDeleteItem={deleteItemHandler} />
        ) : (
          <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
        )}
      </section>
    </div>
  );
}

export default App;
