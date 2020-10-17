import React from "react";

const Tables = ({ good, bad, nuetral, total }) => {
  return (
    <div>
      <table id="feedback">
        <caption>Total FeedBacks = {total}</caption>
        <tr>
          <th>{""}</th>
          <th>Number of FeedBack</th>
        </tr>
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
      </table>
    </div>
  );
};

export default Tables;
