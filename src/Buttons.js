import React from "react";

const Buttons = ({handleGood,handleBad,handleNuetral}) => {
  return (
    <div>
      <button className="btn btn-1" onClick={handleGood} >Positive</button>
      <button className="btn btn-2" onClick={handleNuetral} >Nuetral</button>
      <button className="btn btn-3" onClick={handleBad} >Negative</button>
    </div>
  );
};

export default Buttons;
