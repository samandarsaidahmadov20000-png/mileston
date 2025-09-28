import React, { useState } from "react";

import CHeck_audio from "./check-audio/check-audio";
import learn from "../../../public/images/learn-book.svg";
import read from "../../../public/images/read.svg";
import listening from "../../../public/images/listening.svg";
import words from "../../../public/images/words.svg";

function Beginner({ backhandle }) {
  const [showBtns, setShowBtns] = useState(true);
  const [selectPageData, setSelectPageData] = useState([]);
  const [selectLearn, setSelectLearn] = useState("");

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

  function categories(item) {
    setSelectLearn(item);
  }

  return (
    <>
      {selectLearn === "" && (
        <div className="wrap">
          <div
            className="wrap__box"
            onClick={() => categories("So'z tekshirish")}
          >
            <img className="wrap__img" src={learn} alt="" />
            <h3 className="wrap__title">So'z tekshirish</h3>
          </div>
          <div className="wrap__box">
            <img className="wrap__img" src={read} alt="" />
            <h3 className="wrap__title">O'qish</h3>
          </div>
          <div className="wrap__box">
            <img className="wrap__img" src={listening} alt="" />
            <h3 className="wrap__title">Tinglash</h3>
          </div>
          <div className="wrap__box">
            <img className="wrap__img" src={words} alt="" />
            <h3 className="wrap__title">So'z yodlash</h3>
          </div>
          <div className="wrap__box">
            <img className="wrap__img" src={learn} alt="" />
            <h3 className="wrap__title">Gramatika</h3>
          </div>
        </div>
      )}

      {selectLearn === "So'z tekshirish" && (
        <CHeck_audio
          setSelectLearn={setSelectLearn}
          showBtns={showBtns}
          selectedPage={selectedPage}
          closeAudio={closeAudio}
          selectPageData={selectPageData}
        />
      )}
      {selectLearn == "" && (
        <button onClick={backhandle} className="wrap-back">
          Ortga
        </button>
      )}
    </>
  );
}

export default Beginner;
