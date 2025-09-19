import React, { useEffect } from 'react'
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';
import Audio from './components/audio/audio';


function App() {

  const { onToggleButton, tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  },)



  return (
    <div>
      
      <Audio />
      <Header />
      <button onClick={onToggleButton}>Toggle</button>


    </div>
  )
}

export default App
