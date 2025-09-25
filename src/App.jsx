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
        {
          audiPath: "/1/01.MP3",
          ru: "родственник",
          en: "relative",
        },
        {
          audiPath: "/1/02.MP3",
          ru: "семья",
          en: "family",
        },

        // {
        //   audiPath: "/1/03.MP3",
        //   ru: "родители",
        //   en: "parents",
        // },

        // {
        //   audiPath: "/1/04.MP3",
        //   ru: "отец",
        //   en: "father; dad",
        // },

        // {
        //   audiPath: "/1/05.MP3",
        //   ru: "мама",
        //   en: "mother; mum / mom",
        // },

        // {
        //   audiPath: "/1/06.MP3",
        //   ru: "брат",
        //   en: "brother",
        // },

        // {
        //   audiPath: "/1/07.MP3",
        //   ru: "сестра",
        //   en: "sister",
        // },

        // {
        //   audiPath: "/1/08.MP3",
        //   ru: "брат или сестра",
        //   en: "sibling",
        // },
        // {
        //   audiPath: "/1/09.MP3",
        //   ru: "муж",
        //   en: "husband",
        // },
        // {
        //   audiPath: "/1/10.MP3",
        //   ru: "жена",
        //   en: "wife",
        // },
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
