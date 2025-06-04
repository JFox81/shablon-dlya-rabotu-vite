import React from 'react'
import FieldLayout from './FieldLayout'

type Player = 'X' | 'O'
type Cell = '' | Player

interface FieldProps {
  cells: Cell[]
  onCellClick: (index: number) => void
}

const Field: React.FC<FieldProps> = ({ cells, onCellClick }) => {
  return <FieldLayout cells={cells} onCellClick={onCellClick} />
}

export default Field 