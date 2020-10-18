import React from "react";

const Tables = ({ good, bad, nuetral, total,average,positivePercentage }) => {
  return (
    <div>
      <table id="feedback">
        <caption>Total FeedBacks = {total}</caption>
        <thead>
        <tr>
          <th>{""}</th>
          <th>Number of FeedBack</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Positive</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>Nuetral</td>
          <td>{nuetral}</td>
        </tr>
        <tr>
          <td>Negative</td>
          <td>{bad}</td>
        </tr>
        </tbody>
      </table>
      <section className="average">
        <p>Average FeedBack Percentage= <span>{""}{average}</span></p>
        <p>Positive FeedBack Percentage = <span>{""} {positivePercentage} </span></p>
      </section>
    </div>
  );
};

export default Tables;
