import React, { useContext } from 'react'
import './home.css'
import JeopardyContext from '../../JeopardyContext'

const PlayBtn = () => {
  const { startGame } = useContext( JeopardyContext )
  
  return (
    <button 
      onClick={startGame}
      className='Play-btn btn'>
      Play
    </button>
  )
}

export default PlayBtn
