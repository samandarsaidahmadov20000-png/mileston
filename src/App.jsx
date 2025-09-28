import React, { useEffect, useState } from "react";
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import Audio from "./components/audio/audio";
import SelectAduio from "./components/select-audio/select-aduio";
import Home from "./components/home/home";
import beginnerImg from "../public/images/child.svg";
import toddler from "../public/images/toddler.svg";
import teenager from "../public/images/teenager.svg";
import adult from "../public/images/adult.svg";
import upper_Intermediate from "../public/images/upper-Intermediate.svg";

function App() {
  const { onToggleButton, tg } = useTelegram();
  const [selectPageData, setSelectPageData] = useState([]);

  const [showBtns, setShowBtns] = useState(true);
  const [page, setPage] = useState("home");

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
      <Header />

      <div className="wrapper">
        <div className="box">
          <img className="box__img" src={beginnerImg} alt="" />
          <h3 className="box__title">Beginner</h3>
          <span className="box__title-subtitle">Boshlang'ich</span>
        </div>
        <div className="box">
          <img className="box__img" src={toddler} alt="" />
          <h3 className="box__title">Elementary</h3>
          <span className="box__title-subtitle">Oddiy daraja</span>
        </div>
        <div className="box">
          <img className="box__img" src={teenager} alt="" />
          <h3 className="box__title">Pre-Intermediate</h3>
          <span className="box__title-subtitle">O'rta daraja</span>
        </div>
        <div className="box">
          <img className="box__img" src={adult} alt="" />
          <h3 className="box__title">Intermediate</h3>
          <span className="box__title-subtitle">O'rta yuqori</span>
        </div>
        <div className="box">
          <img className="box__img" src={upper_Intermediate} alt="" />
          <h3 className="box__title">Upper-Intermediate</h3>
          <span className="box__title-subtitle">Yuqori daraja</span>
        </div>
      </div>

      {page === "home" && (
        <Home
          showBtns={showBtns}
          selectedPage={selectedPage}
          closeAudio={closeAudio}
          selectPageData={selectPageData}
        />
      )}

      {/* <button onClick={onToggleButton}>Toggle</button> */}
    </div>
  );
}

export default App;
