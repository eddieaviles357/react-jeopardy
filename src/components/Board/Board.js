import React, { useContext } from 'react'
import JeopardyContext from '../../JeopardyContext'
import CategoryHeader from './CategoryHeader'
import Clue from './Clue'

const Board = () => {
  const {
    categories
  } = useContext( JeopardyContext )

  console.log('kjsfkjasdkfj', categories)
  
  return (
    <>
      <CategoryHeader>Header1</CategoryHeader>
      <Clue>one clue</Clue>
    </>
  )
}

export default Board
