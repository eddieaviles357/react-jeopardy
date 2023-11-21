import React, {useState} from 'react'
import './board.css'
import ActiveClue from './ActiveClue'
import { AnimatePresence } from 'framer-motion'

const Clue = ({ id, question, answer, value, showing }) => {
  const [isShowing, setIsShowing] = useState(false)
  const [isAnswered, setIsAnswered] = useState(false)

  const expandClue = (evt) => {
    setIsShowing( prev => !prev )
    const id = evt.target
    // extract index from clue
    const categoryIdx = +id[0]
    const clueIdx = +id[id.length - 1]
  }

  return (
    <div 
      onClick={ expandClue }
      className={`Board-clue ${isAnswered ? 'answered' : ''}`} 
      id={id} >
      { value }
      <AnimatePresence>
        { isShowing && (
          <ActiveClue 
            key={id}
            question={question} 
            answer={answer} 
            isAnswered={isAnswered}
            setIsAnswered={setIsAnswered} 
            setIsShowing={setIsShowing} 
          />
        )}
      </AnimatePresence>
      </div>
  )
}

export default Clue
