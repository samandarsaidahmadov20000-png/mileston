import React, { useEffect, useState } from "react";
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import Audio from "./components/audio/audio";
import SelectAduio from "./components/select-audio/select-aduio";

function App() {
  const { onToggleButton, tg } = useTelegram();
  const [selectPageData, setSelectPageData] = useState([]);

  const [showBtns, setShowBtns] = useState(true);

  useEffect(() => {
    tg.ready();
  });

  const audioData = [
    {
      page: 1,
      audios: [
        "/1/01.MP3",
        "/1/02.MP3",
        "/1/03.MP3",
        "/1/04.MP3",
        "/1/05.MP3",
        "/1/06.MP3",
        "/1/07.MP3",
        "/1/08.MP3",
        "/1/09.MP3",
        "/1/10.MP3",
      ],
    },
  ];
  // console.log(selectPage);

  function selectedPage(numberPage) {
    for (let i = 0; i < audioData.length; i++) {
      if (numberPage == audioData[i].page) {
        // console.log(audioData[i].audios);
        setSelectPageData([...selectPageData, audioData[i].audios]);
        setShowBtns(false);
      }
    }
  }

  function closeAudio() {
    setShowBtns(true);
    setSelectPageData([]);
  }

  return (
    <div>
      {/* <Header /> */}

      {showBtns ? (
        <SelectAduio selectedPage={selectedPage} />
      ) : (
        <Audio closeAudio={closeAudio} selectPageData={selectPageData} />
      )}

      {/* <button onClick={onToggleButton}>Toggle</button> */}
    </div>
  );
}

export default App;
