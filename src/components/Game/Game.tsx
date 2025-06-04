import React, { useState } from 'react'
import GameLayout from './GameLayout'
import Information from '../Information/Information'
import Field from '../Field/Field'

type Player = 'X' | 'O'
type Cell = '' | Player

const WIN_PATTERNS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
  [0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
] as const

const Game: React.FC = () => {
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X')
  const [isGameEnded, setIsGameEnded] = useState<boolean>(false)
  const [isDraw, setIsDraw] = useState<boolean>(false)
  const [field, setField] = useState<Cell[]>(Array(9).fill(''))

  const checkWinner = (cells: Cell[]): boolean => {
    return WIN_PATTERNS.some(pattern => {
      const [a, b, c] = pattern
      return cells[a] && cells[a] === cells[b] && cells[a] === cells[c]
    })
  }

  const checkDraw = (cells: Cell[]): boolean => {
    return cells.every(cell => cell !== '')
  }

  const isCellAvailable = (index: number): boolean => {
    // Проверяем, что клетка пуста и игра не окончена
    return field[index] === '' && !isGameEnded
  }

  const handleCellClick = (index: number) => {
    // Проверяем доступность клетки
    if (!isCellAvailable(index)) {
      return
    }

    // Обновление поля
    const newField = [...field]
    newField[index] = currentPlayer
    setField(newField)

    // Проверяем результат хода
    if (checkWinner(newField)) {
      // Если есть победитель
      setIsGameEnded(true)
      setIsDraw(false)
    } else if (checkDraw(newField)) {
      // Если ничья
      setIsGameEnded(true)
      setIsDraw(true)
    } else {
      // Если игра продолжается
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
    }
  }

  const handleRestart = () => {
    setCurrentPlayer('X')
    setIsGameEnded(false)
    setIsDraw(false)
    setField(Array(9).fill(''))
  }

  return (
    <GameLayout onRestart={handleRestart}>
      <Information 
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
      />
      <Field cells={field} onCellClick={handleCellClick} />
    </GameLayout>
  )
}

export default Game 