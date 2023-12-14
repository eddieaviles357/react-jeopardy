import setBoardData from './api/api';
import Home from './components/home/Home';
import { useState } from 'react'
import JeopardyContext from './JeopardyContext'

function App() {
  const [jpardyData, setJpardyData] = useState([])
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState({ isError: false, message: [] })
  // used to avoid multiple calls to api
  const [isPlayedBtnStarted, setisPlayedBtnStarted] = useState(false)

  const startGame = async () => {
    try {
      if (isPlayedBtnStarted) return
      setisPlayedBtnStarted(true)
      setIsLoading(true)
      setJpardyData(await setBoardData())
      setIsPlaying(true)
      setIsLoading(false)
    } catch (err) {
      // err is an array coming from our api
      setError({ isError: true, message: err })
    }
  }

  if (error.isError) return <div className='Error'>Something bad happened. Message: <em>{error.message}</em></div>

  return (
    <JeopardyContext.Provider value={{
      jpardyData,
      setJpardyData,
      isPlaying,
      setIsPlaying,
      startGame,
      isLoading,
    }}>
      <Home />
    </JeopardyContext.Provider>
  );
}

export default App;
