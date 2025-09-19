import React, { useRef } from "react";

function Audio() {
  const audioRef = useRef(null);

  const playAudio = async () => {
    try {
      await audioRef.current.play();
    } catch (err) {
      console.error("Ошибка при воспроизведении:", err);
    }

  };

  return (
    <div>
       
      <button onClick={playAudio}>▶️ Воспроизвести</button>
      <audio ref={audioRef} src="/fon.mp3" preload="auto"/>
      <button>хорошо</button>
      <button>нормально</button>
      <button>плоха</button>
    </div>
  );
}

export default Audio;
