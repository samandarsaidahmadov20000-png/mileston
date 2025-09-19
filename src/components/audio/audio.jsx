import React, { useRef } from "react";

function Audio() {
  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div>
       
      <button onClick={playAudio}>▶️ Воспроизвести</button>
      <audio ref={audioRef} src="../../src/assets/audios/fon.mp3" />
    </div>
  );
}

export default Audio;
