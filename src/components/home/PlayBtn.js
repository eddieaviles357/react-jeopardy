import React, { useContext } from 'react'
import './home.css'
import JeopardyContext from '../../JeopardyContext'
import Loading from '../common/Loading'
import { motion } from 'framer-motion'

const PlayBtn = () => {
  const { startGame, isLoading } = useContext( JeopardyContext )

  const motionAttr = {
    hover: { 
      scale: 1.2, 
      boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: 'rgb(0, 0, 198)'
      },
    tap: { 
      scale: 1, 
      backgroundColor: 'yellow',
      border: '3px solid blue',
      color: 'blue',
      },
    animate: {
      boxShadow: "10px 10px 4px rgba(0, 0, 0, 0.2)",
    }
  }
  
  return (
    <>
    { isLoading ?
        <Loading /> :
        <motion.button layout
          initial={motionAttr.initial}
          whileHover={motionAttr.hover}
          whileTap={motionAttr.tap}
          animate={motionAttr.animate}
          onClick={startGame}
          className='Play-btn btn'>
          Play
        </motion.button> }

    </>
  )
}

export default PlayBtn
