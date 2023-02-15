import React from "react";
import "./examples.css";

function EnvDemo() {
  return (
    <div className="Heading">
      <h1>Hide Sensitive data using .env file</h1>
      <h3>API KEY: {process.env.REACT_APP_API_KEY}</h3>
    </div>
  );
}

export default EnvDemo;
