import React from "react";
import "./audio-btn.css";

function SelectAduio({ selectedPage }) {
  const btnDataAuduio = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62,
  ];

  function selectHandle(item) {
    selectedPage(item);
  }

  return (
    <>
      <h1 className="title">Select page</h1>
      <div className="buttons">
        {btnDataAuduio.map((item, i) => (
          <button
            onClick={() => selectHandle(item)}
            className="buttons-btn"
            key={i}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
}

export default SelectAduio;
