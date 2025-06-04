import React from 'react'
import styles from './InformationLayout.module.css'

type Player = 'X' | 'O'

interface InformationLayoutProps {
  currentPlayer: Player
  isGameEnded: boolean
  isDraw: boolean
}

const InformationLayout: React.FC<InformationLayoutProps> = ({
  currentPlayer,
  isGameEnded,
  isDraw,
}) => {
  const getStatusMessage = () => {
    if (isDraw) {
      return 'Ничья'
    }
    if (isGameEnded) {
      return `Победа: ${currentPlayer}`
    }
    return `Ходит: ${currentPlayer}`
  }

  const getStatusClass = () => {
    if (isDraw) return styles.draw
    if (isGameEnded) return styles.winner
    return styles.currentPlayer
  }

  return (
    <div className={styles.information}>
      <p className={`${styles.message} ${getStatusClass()}`}>
        {getStatusMessage()}
      </p>
    </div>
  )
}

export default InformationLayout 