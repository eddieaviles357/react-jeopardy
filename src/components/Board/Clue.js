import React, {useState} from 'react'
import './board.css'

const Clue = ({ id, question, answer, value, showing }) => {
  const [isShowing, setIsShowing] = useState(showing)
  
  
  const clickHandler = (e) => {
    (isShowing === null) ? setIsShowing( true) : setIsShowing( false )
    console.log(`CLUE::ID=>>>%c${id}`, "color: red")
  }
  
  const content = 
  (isShowing === null) ? value : (isShowing === true) ? question : answer

  return (
    <div 
      onClick={ clickHandler}
      className='Board-clue' 
      id={id}
      >{ content }</div>
  )
}

export default Clue
