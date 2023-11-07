import React, {useContext} from 'react'
import JeopardyContext from '../../JeopardyContext'
import Title from './Title'
import PlayBtn from './PlayBtn'
import Board from '../Board/Board'
import './home.css'
import { AnimatePresence } from 'framer-motion'

const Home = () => {
  const { isPlaying } = useContext( JeopardyContext )
  const style = isPlaying ? 'playing' : 'Home'

  return (
      <div className={ style }>
        <AnimatePresence>
        {!isPlaying ? 
          <>
            <Title />
            <PlayBtn />
          </> : <Board />
        }
        </AnimatePresence>
      </div>
  )
}

export default Home
