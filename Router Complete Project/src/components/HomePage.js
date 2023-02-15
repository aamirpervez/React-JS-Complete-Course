import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const nagivate = useNavigate();

  const navigateHanlder = () => {
    nagivate("/contactus");
  };

  return (
    <div>
      <h1>Hello, Welcome to Home Page..</h1>
      <button onClick={navigateHanlder}>Go to Contact us Page</button>
    </div>
  );
}

export default HomePage;
