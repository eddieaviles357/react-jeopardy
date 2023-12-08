import React, { useContext } from 'react'
import './home.css'
import { MOTION_BTN_ATTR } from '../../constants'
import JeopardyContext from '../../JeopardyContext'
import Loading from '../common/Loading'
import { motion } from 'framer-motion'

const PlayBtn = () => {
  const { startGame, isLoading } = useContext(JeopardyContext)


  return (
    <>
      {isLoading ?
        <Loading /> :
        <motion.button layout
          initial={MOTION_BTN_ATTR.initial}
          whileHover={MOTION_BTN_ATTR.hover}
          whileTap={MOTION_BTN_ATTR.tap}
          animate={MOTION_BTN_ATTR.animate}
          onClick={startGame}
          className='Play-btn btn'>
          Play
        </motion.button>}

    </>
  )
}

export default PlayBtn
