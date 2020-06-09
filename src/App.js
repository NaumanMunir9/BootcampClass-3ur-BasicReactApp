import React from "react";
import Dinner from "./Dinner";
import "./Styles.css";

function App() {
  return (
    <div className="App">
      <Dinner savory="Chiken Karhai" sweet="Qulab Jamun" />
      <hr className="darkLine-css"></hr>
      <Dinner savory="Chiken Qourma" sweet="Kheer" />
      <hr className="darkLine-css"></hr>
      <Dinner savory="Nihari" sweet="Gajar ka Halwa" />
    </div>
  );
}

export default App;
