import React, { useState } from 'react'
import './board.css'
import { motion } from 'framer-motion'

const ActiveClue = ({ 
  question, 
  answer, 
  isAnswered,
  setIsAnswered, 
  setIsShowing 
}) => {
  const [isRevealed, setIsRevealed] = useState(false)
  const activeClueEventHandler = (evt) => {
    // avoid all other events
    evt.stopPropagation()
    
    // extract id
    const id = evt.target.id
    
    if(id === 'go-back') { 
      // go back to board
      setIsShowing(false)
    }
    if(id === 'reveal-answer') {
      // reveals answer and stays reveals indefinitely
      setIsRevealed(true)
      setIsAnswered(true)
    }
  }
  
  const container = {
    hidden: { 
      x: '-50%',
      y: '-50%',
      opacity: 0,
      // transform: 'scale(0.1)' 
      scale: 0,
    },
    show: {
      x: '-50%',
      y: '-50%',
      opacity: 1,
      // transform: 'scale(1)',
      scale: 1,
      transition: {
        stiffness: 260,
        type: "spring",
        staggerChildren: 0.5
      }
    }
  }
  
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show" 
      className='Active' 
      onClick={activeClueEventHandler} >
      <div className='clue-choices-container'>
        <span id='go-back'>Go Back</span>
        <span id='reveal-answer'>Reveal Answer</span>
      </div>
      <hr />
      <div className='Active-qa-container'>
        <span className='Active-content'>{ question }</span>
        <span className='Active-revealed'>{ (isRevealed || isAnswered) && answer }</span>
      </div>
    </motion.div>
  )
}

export default ActiveClue
