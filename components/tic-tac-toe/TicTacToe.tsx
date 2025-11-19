'use client';

import { useState, useCallback } from 'react';
import { Card, CardBody, CardHeader } from '@heroui/card';

import { GameBoard } from './GameBoard';
import { GameStatus } from './GameStatus';
import { ScoreBoard } from './ScoreBoard';
import { GameControls } from './GameControls';

type Player = 'X' | 'O';
type CellValue = Player | null;
type Board = CellValue[];

interface Scores {
  X: number;
  O: number;
  draws: number;
}

const WINNING_COMBINATIONS = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Diagonal top-left to bottom-right
  [2, 4, 6], // Diagonal top-right to bottom-left
];

const INITIAL_BOARD: Board = Array(9).fill(null);

export const TicTacToe = () => {
  const [board, setBoard] = useState<Board>(INITIAL_BOARD);
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
  const [winner, setWinner] = useState<Player | null>(null);
  const [isDraw, setIsDraw] = useState(false);
  const [winningLine, setWinningLine] = useState<number[] | null>(null);
  const [scores, setScores] = useState<Scores>({
    X: 0,
    O: 0,
    draws: 0,
  });

  const checkWinner = useCallback(
    (
      boardState: Board,
    ): {
      winner: Player | null;
      line: number[] | null;
    } => {
      for (const combination of WINNING_COMBINATIONS) {
        const [a, b, c] = combination;
        if (
          boardState[a] &&
          boardState[a] === boardState[b] &&
          boardState[a] === boardState[c]
        ) {
          return {
            winner: boardState[a] as Player,
            line: combination,
          };
        }
      }
      return { winner: null, line: null };
    },
    [],
  );

  const checkDraw = useCallback((boardState: Board): boolean => {
    return boardState.every((cell) => cell !== null);
  }, []);

  const handleCellClick = useCallback(
    (index: number) => {
      if (board[index] || winner || isDraw) {
        return;
      }

      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);

      const result = checkWinner(newBoard);
      if (result.winner) {
        setWinner(result.winner);
        setWinningLine(result.line);
        setScores((prev) => ({
          ...prev,
          [result.winner as Player]: prev[result.winner as Player] + 1,
        }));
      } else if (checkDraw(newBoard)) {
        setIsDraw(true);
        setScores((prev) => ({
          ...prev,
          draws: prev.draws + 1,
        }));
      } else {
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
      }
    },
    [board, currentPlayer, winner, isDraw, checkWinner, checkDraw],
  );

  const handleReset = useCallback(() => {
    setBoard(INITIAL_BOARD);
    setCurrentPlayer('X');
    setWinner(null);
    setIsDraw(false);
    setWinningLine(null);
  }, []);

  const handleNewGame = useCallback(() => {
    handleReset();
    setScores({
      X: 0,
      O: 0,
      draws: 0,
    });
  }, [handleReset]);

  const isGameOver = winner !== null || isDraw;

  return (
    <Card className='w-full max-w-md mx-auto'>
      <CardHeader className='flex flex-col gap-4 pb-0'>
        <h2 className='text-2xl font-bold text-center'>Tic-Tac-Toe</h2>
        <ScoreBoard
          currentPlayer={currentPlayer}
          isDraw={isDraw}
          scores={scores}
          winner={winner}
        />
      </CardHeader>
      <CardBody className='flex flex-col items-center gap-6 pt-4'>
        <GameStatus
          currentPlayer={currentPlayer}
          isDraw={isDraw}
          winner={winner}
        />
        <GameBoard
          board={board}
          disabled={isGameOver}
          winningLine={winningLine}
          onCellClick={handleCellClick}
        />
        <GameControls
          isGameOver={isGameOver}
          onNewGame={handleNewGame}
          onReset={handleReset}
        />
      </CardBody>
    </Card>
  );
};
