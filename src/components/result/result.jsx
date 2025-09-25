import React from "react";

function Result({ resultAudio }) {
  console.log(resultAudio.good);

  return (
    <table>
      <thead>
        <tr>
          <th>Хорошо</th>
          <th>Нормально</th>
          <th>Плохо</th>
        </tr>
      </thead>
      <tbody>
        {resultAudio.good.map((item, i) => (
          <tr key={i}>
            <td>{item}</td>
          </tr>
        ))}
        {resultAudio.middle.map((item, i) => (
          <tr key={i}>
            <td>{item}</td>
          </tr>
        ))}
        {resultAudio.bad.map((item, i) => (
          <tr key={i}>
            <td>{item}</td>
          </tr>
        ))}
      
      </tbody>
    </table>
  );
}

export default Result;
