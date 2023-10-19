import { setBoardData } from './api/api';
import Home from './components/home/Home';
import { useState } from 'react'
import JeopardyContext from './JeopardyContext'

function App() {
  const [ jpardyData, setJpardyData ] = useState( [] )
  const [ isPlaying, setIsPlaying ] = useState( false )
  // used to avoid multiple calls to api
  const [ isClicked, setIsClicked ] = useState( false )

  const startGame = async () => {
    if(isClicked) return;
    setIsClicked( true );
    const boardData = await setBoardData()

    setJpardyData( boardData )
    
    // wait 2 seconds so we can apply some animations
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
