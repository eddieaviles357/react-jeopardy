import React, { useContext } from 'react'
import JeopardyContext from '../../JeopardyContext'
import CategoryHeader from './CategoryHeader'
import Clue from './Clue'
import { DEFAULT_CLUE, NUM_CLUES } from '../../constants'

const Board = () => {
  const { jpardyData } = useContext( JeopardyContext )
  
  // question, answer, showing
  const jpardyClues = ( cluesArr, idx1 ) => {
    // if api returns an empty array of clues use default values
    if(cluesArr.length === 0) {
      let numberOfClues = NUM_CLUES;

      while(numberOfClues > 0) {
        cluesArr.push( DEFAULT_CLUE )
        numberOfClues--;
      }
    }

    return (
    cluesArr.map( (clue, idx2) => ( 
      <Clue 
        key={ new Date().getTime() + idx1 + idx2} 
        id={ `${idx1} - ${idx2}` }
        >{ clue.question }</Clue> 
    ))
  )}

  console.log('Board.Component', jpardyData)

  return (
    <>
    {jpardyData.map( ({ title, clues }, idx1 ) => ( 
        <div className='Board-column' key={ new Date().getTime() + idx1 }>
          <CategoryHeader>{ title }</CategoryHeader> 
          {jpardyClues(clues, idx1)}
        </div>
      ))}
    </>
  )
}

export default Board