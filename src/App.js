import { getCategoryIds } from './api/api';
import Home from './components/home/Home';
import { useState, useContext } from 'react'
import JeopardyContext from './JeopardyContext'

function App() {
  const [ categories, setCategories ] = useState( [] )
  const [ isPlaying, setIsPlaying ] = useState( false )

  const startGame = async () => {
    const catIds = await getCategoryIds()
    setCategories( prev => [ ...prev, ...catIds ] )
    setIsPlaying( true )
  }

  return (
    <JeopardyContext.Provider value={{ 
      categories, 
      setCategories,
      getCategoryIds,
      isPlaying,
      setIsPlaying,
      startGame
      }}>
      <Home />
    </JeopardyContext.Provider>
  );
}

export default App;
