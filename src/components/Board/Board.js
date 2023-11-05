import React, { useContext } from 'react'
import JeopardyContext from '../../JeopardyContext'
import CategoryHeader from './CategoryHeader'
import Clue from './Clue'
import { v4 as uuidv4 } from 'uuid';
import { DEFAULT_CLUE } from '../../constants'

const Board = () => {
  const { jpardyData } = useContext( JeopardyContext )
  
  // question, answer, showing
  const jpardyClues = ( cluesArr, idx1 ) => {
    // if api returns an empty array of clues use default values
    while(cluesArr.length < 5) {
      cluesArr.push( DEFAULT_CLUE )
    }

    return (
    cluesArr.map( ({ question,answer,value,showing }, idx2) => ( 
      <Clue 
        key={ uuidv4()} 
        id={ `${idx1} - ${idx2}` }
        question={ question }
        answer={ answer }
        value={ value }
        showing={ showing }
        /> 
    ))
  )}

  console.log('Board.Component', jpardyData)

  return (
    <div className='Board'>
    {jpardyData.map( ({ title, clues }, idx1 ) => ( 
        <div className='Board-column' key={ uuidv4() }>
          <CategoryHeader>{ title }</CategoryHeader> 
          { jpardyClues(clues, idx1) }
        </div>
      ))}
    </div>
  )
}

export default Board