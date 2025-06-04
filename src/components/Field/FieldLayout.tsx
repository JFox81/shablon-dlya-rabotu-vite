import React from 'react'
import styles from './FieldLayout.module.css'

type Player = 'X' | 'O'
type Cell = '' | Player

interface FieldLayoutProps {
  cells: Cell[]
  onCellClick: (index: number) => void
}

const FieldLayout: React.FC<FieldLayoutProps> = ({ cells, onCellClick }) => {
  return (
    <div className={styles.field}>
      {cells.map((cell, index) => (
        <button
          key={index}
          className={`${styles.cell} ${cell === 'X' ? styles.cellX : cell === 'O' ? styles.cellO : ''}`}
          onClick={() => onCellClick(index)}
        >
          {cell}
        </button>
      ))}
    </div>
  )
}

export default FieldLayout 