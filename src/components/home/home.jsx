import React from "react";
import "./home.css";
import Audio from "../audio/audio";
import SelectAduio from "../select-audio/select-aduio";

function Home({showBtns,selectedPage,closeAudio,selectPageData}) {
  return (
    <div>
     
      {showBtns ? (
        <SelectAduio selectedPage={selectedPage} />
      ) : (
        <Audio closeAudio={closeAudio} selectPageData={selectPageData} />
      )}
    </div>
  );
}

export default Home;
