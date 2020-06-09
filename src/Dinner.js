import React from "react";
import "./Styles.css";

function Dinner({ savory, sweet }) {
  return (
    <div className="dish-css">
      <h1>Today we are serving {savory}</h1>
      <h1>Today we are serving {sweet}</h1>
    </div>
  );
}

export default Dinner;
