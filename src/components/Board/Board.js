import React, { useContext } from 'react'
import JeopardyContext from '../../JeopardyContext'
import CategoryHeader from './CategoryHeader'
import Clue from './Clue'
import { NUM_CLUES } from '../../constants'

const Board = () => {
  const { jpardyData } = useContext( JeopardyContext )
  
  // question, answer, showing
  const jpardyClues = ( cluesArr, idx1 ) => (
    cluesArr.map( (clue, idx2) => ( 
      <Clue 
        key={ new Date().getTime() + idx1 + idx2} 
        id={ `${idx1} - ${idx2}` }
        >{ clue.question }</Clue> 
    ))
  )

  console.log('Board.Component', jpardyData)
  // const defaultClue = {quesiton: 'NA', answer: 'NA', showing: null}

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