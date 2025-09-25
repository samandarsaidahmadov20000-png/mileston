import React, { useEffect, useRef, useState } from "react";
import Result from "../result/result";

function Audio({ selectPageData, closeAudio }) {
  const audioRef = useRef(null);

  const selectData = selectPageData[0] || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const [showButtons, setShowButtons] = useState(false);
  const [countMassive, setCountMassive] = useState(0);
  const [showRu, setShowRu] = useState(false);
  const [order, setOrder] = useState([]);
  const [word, setWord] = useState(false);

  // console.log(selectData);
  // console.log(countMassive);

  const [resultAudio, setResultAudio] = useState({
    good: [],
    middle: [],
    bad: [],
  });

  console.log(resultAudio.bad);

  // console.log(currentIndex, showButtons);

  useEffect(() => {
    if (selectData.length > 0) {
      const shuffled = [...Array(selectData.length).keys()] // [0,1,2,...]
        .sort(() => Math.random() - 0.5);
      setOrder(shuffled);
      setCurrentIndex(shuffled[0]);
    }
  }, [selectData]);

  const playAudio = () => {
    setIsPlaying(true);
    setShowButtons(false);
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.log("Ошибка воспроизведения:", err);
      });
    }
  };

  const handleEnded = () => {
    setShowButtons(true);
  };

  const handleChoice = (result, data) => {
    const randomIndex = Math.floor(Math.random() * selectData.length);

    const currentPos = order.indexOf(currentIndex);
    const nextPos = currentPos + 1;
    setResultAudio((prev) => {
      if (result === "good") {
        return { ...prev, good: [...prev.good, data] };
      } else if (result === "middle") {
        return { ...prev, middle: [...prev.middle, data] };
      } else if (result === "bad") {
        return { ...prev, bad: [...prev.bad, data] };
      }
      return prev;
    });

    if (nextPos < order.length) {
      const nextIndex = order[nextPos];
      setCountMassive(countMassive + 1);
      setCurrentIndex(nextIndex);
      setShowButtons(false);
      setIsPlaying(true);

      // if (result === "good") {
      //   setResultAudio((prev) => ({
      //     ...prev,
      //     good: [...prev.good, data],
      //   }));
      // } else if (result === "middle") {
      //   setResultAudio((prev) => ({
      //     ...prev,
      //     middle: [...prev.middle, data],
      //   }));
      // } else if (result === "bad") {
      //   setResultAudio((prev) => ({
      //     ...prev,
      //     bad: [...prev.bad, data],
      //   }));
      // }
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play().catch((err) => {
            console.log("Ошибка воспроизведения:", err);
          });
        }
      }, 100);
    } else {
      console.log("Все треки закончились 🎵");
      setIsPlaying(false);
      setCurrentIndex(null);
      setShowButtons(false);
    }
  };

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  }, [currentIndex, isPlaying]);

  // console.log(selectData[currentIndex].ru);

  return (
    <div>
      <button onClick={playAudio}>Start</button>
      <button
        onClick={() => {
          if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
          }
          closeAudio();
        }}
      >
        Назад
      </button>
      {currentIndex !== null ? (
        <audio
          onEnded={handleEnded}
          ref={audioRef}
          src={selectData[currentIndex].audiPath}
        ></audio>
      ) : (
        <Result resultAudio={resultAudio} />
      )}

      {showButtons && (
        <div>
          <button
            onClick={() => handleChoice("good", selectData[currentIndex].en)}
          >
            Хорошо
          </button>
          <button
            onClick={() => handleChoice("middle", selectData[currentIndex].en)}
          >
            Нормально
          </button>
          <button
            onClick={() => handleChoice("bad", selectData[currentIndex].en)}
          >
            Плохо
          </button>
        </div>
      )}

      {currentIndex !== null &&
        (showButtons ? (
          <p>{selectData[currentIndex].en}</p>
        ) : (
          <p>{selectData[currentIndex].ru}</p>
        ))}
    </div>
  );
}

export default Audio;
