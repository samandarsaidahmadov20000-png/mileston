import React from "react";
import "./result.css";

function Result({ resultAudio }) {
  // console.log(resultAudio.good);
  // console.log(resultAudio);

  const maxLength = Math.max(
    resultAudio.good.length,
    resultAudio.middle.length,
    resultAudio.bad.length
  );

  return (
    <>
      <h2 className="result__title">Sizning natijangiz</h2>
      <table className="result">
        <thead>
          <tr>
            <th>Yahshi</th>
            <th>O'rta</th>
            <th>Yomon</th>
          </tr>
        </thead>
        <tbody className="result-data">
          {Array.from({ length: maxLength }).map((_, i) => (
            <tr key={i}>
              <td>{resultAudio.good[i] || ""}</td>
              <td>{resultAudio.middle[i] || ""}</td>
              <td>{resultAudio.bad[i] || ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Result;
