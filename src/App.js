import React, { useState } from "react";
import Tables from "./Tables";
import Buttons from "./Buttons";

import "./App.css";

function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [nuetral, setNeutral] = useState(0);
  const [total, setTotal] = useState(0);
  return (
    <div className="App">
      <h2>Give FeedBack About our Service At UniCafe.</h2>
      <div className="app-body">
        <Buttons />
        <Tables good={good} bad={bad} nuetral={nuetral} total={total} />
      </div>
    </div>
  );
}

export default App;
