import React, {useContext} from 'react'
import JeopardyContext from '../../JeopardyContext'
import Title from './Title'
import PlayBtn from './PlayBtn'
import Board from '../Board/Board'
import './home.css'

const Home = () => {
  const { isPlaying } = useContext( JeopardyContext )

  return (
      <div className={ !isPlaying ? 'Home' : 'playing'}>
        {
          !isPlaying ? 
          <>
            <Title />
            <PlayBtn />
          </> : <Board />
        }
      </div>
  )
}

export default Home
