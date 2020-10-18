import React, { useState,useEffect } from "react";
import Tables from "./Tables";
import Buttons from "./Buttons";

import "./App.css";

function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [nuetral, setNeutral] = useState(0);
  const [total, setTotal] = useState(0);
  const [average,setAverage] = useState(0)
  const [positivePercentage,setPositivePercentage] = useState(null)

  //click hanlders 
  const handleGood = () => {
    setGood(good+1)
  }
  const handleBad = () => {
    setBad(bad +1)
  }
  const handleNuetral = () => {
    setNeutral(nuetral+1)
  }
  const totalArray = [good,bad,nuetral]
  const calcTotal = totalArray.reduce((acc,curValue) => {
    return acc + curValue
  },0)

  const calcAverage = (([calcTotal]/totalArray.length)* 100).toFixed(2)
  const calcPositivePercentage = Number.parseFloat((good/total * 100)).toFixed(2)
 
  useEffect(() => {
    setTotal(calcTotal)
    setAverage(calcAverage)
    setPositivePercentage(calcPositivePercentage)
  }, [calcTotal, calcAverage, calcPositivePercentage],)
  return (
    <div className="App">
      <h2>Give FeedBack About our Service At UniCafe.</h2>
      <div className="app-body">
        <Buttons handleGood={handleGood} handleBad={handleBad} handleNuetral={handleNuetral} />
        <Tables good={good} bad={bad} nuetral={nuetral} total={total} average={average} positivePercentage={positivePercentage} />
      </div>
    </div>
  );
}

export default App;
