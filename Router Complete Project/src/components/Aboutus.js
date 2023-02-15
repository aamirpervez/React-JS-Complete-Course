import React from "react";
import { Link } from "react-router-dom";

function Aboutus() {
  return (
    <div>
      <h1>Hi, I am about us page..</h1>
      <p>
        Go to <Link to="/">Home Page</Link>
      </p>
    </div>
  );
}

export default Aboutus;
