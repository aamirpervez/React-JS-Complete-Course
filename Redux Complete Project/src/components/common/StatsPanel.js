import React from "react";
import "./module.StatsPanel.css";

function StatsPanel(props) {
  return (
    <div className="divpanel">
      <h1>{props.heading}</h1>
      <h2>{props.total}</h2>
    </div>
  );
}

export default StatsPanel;
