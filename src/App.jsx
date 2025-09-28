import React, { useEffect, useState } from "react";
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import Audio from "./components/audio/audio";
import SelectAduio from "./components/select-audio/select-aduio";
import CHeck_audio from "./components/beginner/check-audio/check-audio";
import Home from "./components/home/home";

function App() {
  const { onToggleButton, tg } = useTelegram();

  const [page, setPage] = useState("home");

  useEffect(() => {
    tg.ready();
  });

  return (
    <div>
      <Header />

      {page === "home" && <Home />}

      {/* <button onClick={onToggleButton}>Toggle</button> */}
    </div>
  );
}

export default App;
