import React, { useState } from 'react'
import './board.css'
import { motion } from 'framer-motion'

const ActiveClue = ({ 
  question, 
  answer, 
  isAnswered,
  setIsAnswered, 
  setIsShowing,
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
      // reveals answer and stays indefinitely
      setIsRevealed(true)
      setIsAnswered(true)
    }
  }
  
  const clueVariant = {
    hidden: { 
      x: '-50%',
      y: '-50%',
      opacity: 1,
      scale: 0,
    },
    show: {
      x: '-50%',
      y: '-50%',
      opacity: 1,
      scale: 1,
      transition: {
        duration: .5,
        stiffness: 260,
      }
    },
    leaving: {
      x: '-50%',
      y: '-50%',
      scale: 0,
      opacity: 0,
      transition: {
      duration: .5,
      }
    }
  }
  
  return (
    <motion.div
      variants={clueVariant}
      initial='hidden'
      animate='show' 
      exit='leaving'
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
