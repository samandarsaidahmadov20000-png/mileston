import React from "react";
import "./check-audio.css";
import Audio from "../../audio/audio";
import SelectAduio from "../../select-audio/select-aduio";

function CHeck_audio({
  showBtns,
  selectedPage,
  closeAudio,
  selectPageData,
  setSelectLearn,
}) {
  function back() {
    setSelectLearn("");
  }

  return (
    <div>
      {showBtns ? (
        <SelectAduio selectedPage={selectedPage} />
      ) : (
        <Audio closeAudio={closeAudio} selectPageData={selectPageData} />
      )}

      {showBtns && (
        <button onClick={back} className="wrap-back">
          Ortga
        </button>
      )}
    </div>
  );
}

export default CHeck_audio;
