import { setBoardData } from './api/api';
import Home from './components/home/Home';
import { useState } from 'react'
import JeopardyContext from './JeopardyContext'

function App() {
  const [ jpardyData, setJpardyData ] = useState( [] )
  const [ isPlaying, setIsPlaying ] = useState( false )

  const startGame = async () => {
    const boardData = await setBoardData()

    setJpardyData( boardData )
    
    setTimeout( () => setIsPlaying( true ), 2000 )
  }

  return (
    <JeopardyContext.Provider value={{ 
      jpardyData, 
      setJpardyData,
      isPlaying,
      setIsPlaying,
      startGame
      }}>
      <Home />
    </JeopardyContext.Provider>
  );
}

export default App;
