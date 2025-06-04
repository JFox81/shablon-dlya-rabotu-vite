import React from 'react'
import InformationLayout from './InformationLayout'

type Player = 'X' | 'O'

interface InformationProps {
  currentPlayer: Player
  isGameEnded: boolean
  isDraw: boolean
}

const Information: React.FC<InformationProps> = ({ 
  currentPlayer, 
  isGameEnded, 
  isDraw 
}) => {
  return (
    <InformationLayout 
      currentPlayer={currentPlayer}
      isGameEnded={isGameEnded}
      isDraw={isDraw}
    />
  )
}

export default Information 