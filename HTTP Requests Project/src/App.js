import logo from "./logo.svg";
import "./App.css";
import Posts from "./HttpAxiosCalls/Posts";
import PostCall from "./HttpAxiosCalls/PostCall";
function App() {
  return (
    <div className="App">
      <h1>Axios HTTP requests to REST endpoints</h1>
      <Posts />
      {/* <PostCall /> */}
    </div>
  );
}

export default App;
