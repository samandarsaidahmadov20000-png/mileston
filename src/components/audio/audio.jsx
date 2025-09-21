import React, { useEffect, useRef, useState } from "react";

function Audio({ selectPageData, closeAudio }) {
  const audioRef = useRef(null);

  const selectData = selectPageData[0] || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.log("Ошибка воспроизведения:", err);
      });
    }
  };

  const handleEnded = () => {
    if (currentIndex < selectData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      console.log(currentIndex);
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
        // onEnded={handleEnded}
        ref={audioRef}
        src={selectData[currentIndex]}
      ></audio>

      {isPlaying && (
        <div>
          <button onClick={handleEnded}>Хорошо</button>
          <button onClick={handleEnded}>Нормально</button>
          <button onClick={handleEnded}>Плохо</button>
        </div>
      )}
    </div>
  );
}

export default Audio;
