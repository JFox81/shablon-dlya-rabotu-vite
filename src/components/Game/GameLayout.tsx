import React from 'react'
import styles from './GameLayout.module.css'

interface GameLayoutProps {
  onRestart: () => void
  children: React.ReactNode
}

const GameLayout: React.FC<GameLayoutProps> = ({ onRestart, children }) => {
  return (
    <div className={styles.game}>
      {children}
      <button className={styles.restartButton} onClick={onRestart}>
        Начать заново
      </button>
    </div>
  )
}

export default GameLayout 