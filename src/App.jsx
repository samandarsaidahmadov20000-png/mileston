import React, { useEffect } from 'react'
import { useTelegram } from './hooks/useTelegram';




function App() {

  const {onToggleButton, tg} = useTelegram(); 

  useEffect(() => {

    tg.ready();


  },)

 

  return (
    <div>
      App
      <button onClick={onToggleButton}></button>

      
    </div>
  )
}

export default App
