import React, { useEffect, useRef, useState } from "react";

function Audio({ selectPageData, closeAudio }) {
  const audioRef = useRef(null);

  const selectData = selectPageData[0] || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const [showButtons, setShowButtons] = useState(false);

  const [countMassive, setCountMassive] = useState(0);

  console.log(countMassive);

  console.log(selectData);

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

  const handleChoice = () => {
    const randomIndex = Math.floor(Math.random() * selectData.length);
   
    if (selectData.length > countMassive) {
      setCountMassive(countMassive + 1);
      setCurrentIndex(randomIndex);
      setShowButtons(false);
      setIsPlaying(true);
    } else {
      console.log("Все треки закончились 🎵");
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  }, [currentIndex, isPlaying]);

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
      <audio
        onEnded={handleEnded}
        ref={audioRef}
        src={selectData[currentIndex]}
      ></audio>

      {showButtons && (
        <div>
          <button onClick={handleChoice}>Хорошо</button>
          <button onClick={handleChoice}>Нормально</button>
          <button onClick={handleChoice}>Плохо</button>
        </div>
      )}
    </div>
  );
}

export default Audio;
