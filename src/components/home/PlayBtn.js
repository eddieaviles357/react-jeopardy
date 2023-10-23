import React, { useContext } from 'react'
import './home.css'
import JeopardyContext from '../../JeopardyContext'
import { motion } from 'framer-motion'

const PlayBtn = () => {
  const { startGame } = useContext( JeopardyContext )
  
  return (
    <motion.button 
      whileHover={{ scale: 1.2, boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.1)' }}
      whileTap={{ scale: 1, backgroundColor: '#8585f0'}}
      animate={{
        boxShadow: "10px 10px 4px rgba(0, 0, 0, 0.2)",
      }}
      onClick={startGame}
      className='Play-btn btn'>
      Play
    </motion.button>
  )
}

export default PlayBtn
