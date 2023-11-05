import React, { useContext } from 'react'
import './home.css'
import JeopardyContext from '../../JeopardyContext'
import { motion } from 'framer-motion'

const PlayBtn = () => {
  const { startGame } = useContext( JeopardyContext )

  const motionAttr = {
    initial: {        
      // x: '-50%',
      // y: '75%',
      },
    hover: { 
      scale: 1.2, 
      boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.1)' 
      },
    tap: { 
      scale: 1, 
      backgroundColor: '#8585f0'
      },
    animate: {
      boxShadow: "10px 10px 4px rgba(0, 0, 0, 0.2)",
    }
  }
  
  return (
    <motion.button layout
      initial={motionAttr.initial}
      whileHover={motionAttr.hover}
      whileTap={motionAttr.tap}
      animate={motionAttr.animate}
      onClick={startGame}
      className='Play-btn btn'>
      Play
    </motion.button>
  )
}

export default PlayBtn
