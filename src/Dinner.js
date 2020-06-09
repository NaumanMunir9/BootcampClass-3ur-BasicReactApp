import React from "react";
import "./Styles.css";

function Dinner({dishName, sweetDish}) {
  return (
    <div className="dish-css">
      <h1>Today we are serving {dishName}</h1>
      <h1>Today we are serving {sweetDish}</h1>
    </div>
  );
}

export default Dinner;

