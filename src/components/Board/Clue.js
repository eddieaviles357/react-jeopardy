import React, {useState} from 'react'
import './board.css'
import ActiveClue from './ActiveClue'

const Clue = ({ id, question, answer, value, showing }) => {
  const [isShowing, setIsShowing] = useState(false)
  const [isAnswered, setIsAnswered] = useState(false)
  
  
  const expandClue = (evt) => {
    // console.log('evt', evt)
    setIsShowing( prev => !prev )
    console.log('isSHOWING', isShowing)
    console.log('isANSWERED', isAnswered)
    // (isShowing === null) ? setIsShowing( true) : setIsShowing( false )
    const id = evt.target.id
    // extract index from clue
    const categoryIdx = +id[0]
    const clueIdx = +id[id.length - 1]
    console.log(categoryIdx, clueIdx)
  }

  
  // const content = (isShowing === null) ? value : (isShowing === true) ? question : answer

  return (
    <div 
      onClick={ expandClue }
      className={`Board-clue ${isAnswered ? 'answered' : ''}`} 
      id={id} >
      { value }
      { isShowing && 
        <ActiveClue 
          question={question} 
          answer={answer} 
          isAnswered={isAnswered}
          setIsAnswered={setIsAnswered} 
          setIsShowing={setIsShowing} /> }
      </div>
  )
}

export default Clue
