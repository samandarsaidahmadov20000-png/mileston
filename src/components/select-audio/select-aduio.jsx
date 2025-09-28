import React from "react";
import "./audio-btn.css";

function SelectAduio({ selectedPage }) {
  const btnDataAuduio = [
    1, 2, 33, 47,
  ];

  function selectHandle(item) {
    selectedPage(item);
  }

  return (
    <>
      <h2 className="title">Выбрать страницу</h2>
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
