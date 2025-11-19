'use client';

import { Card, CardBody } from '@heroui/card';

export interface ScoreBoardProps {
  scores: {
    X: number;
    O: number;
    draws: number;
  };
  currentPlayer: 'X' | 'O';
  winner: 'X' | 'O' | null;
  isDraw: boolean;
}

export const ScoreBoard = ({
  scores,
  currentPlayer,
  winner,
  isDraw,
}: ScoreBoardProps) => {
  const isGameOver = winner !== null || isDraw;

  return (
    <div className="flex gap-3 sm:gap-4 w-full justify-center">
      <Card
        className={`flex-1 max-w-32 ${
          !isGameOver && currentPlayer === 'X'
            ? 'ring-2 ring-primary'
            : ''
        }`}
      >
        <CardBody className="text-center py-3">
          <p className="text-xs sm:text-sm text-default-500">Player X</p>
          <p className="text-xl sm:text-2xl font-bold text-primary">
            {scores.X}
          </p>
        </CardBody>
      </Card>

      <Card className="flex-1 max-w-32">
        <CardBody className="text-center py-3">
          <p className="text-xs sm:text-sm text-default-500">Draws</p>
          <p className="text-xl sm:text-2xl font-bold text-default-600">
            {scores.draws}
          </p>
        </CardBody>
      </Card>

      <Card
        className={`flex-1 max-w-32 ${
          !isGameOver && currentPlayer === 'O'
            ? 'ring-2 ring-secondary'
            : ''
        }`}
      >
        <CardBody className="text-center py-3">
          <p className="text-xs sm:text-sm text-default-500">Player O</p>
          <p className="text-xl sm:text-2xl font-bold text-secondary">
            {scores.O}
          </p>
        </CardBody>
      </Card>
    </div>
  );
};
