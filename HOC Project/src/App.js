import logo from "./logo.svg";
import "./App.css";
import ButtonCounter from "./component/ButtonCounter";
import InputCounter from "./component/InputCounter";

function App() {
  return (
    <div className="App">
      <h2>Need of Higher Order Components (HOC) in React JS</h2>
      <br />
      <br />
      <ButtonCounter />

      <br />
      <br />
      <InputCounter />
    </div>
  );
}

export default App;
