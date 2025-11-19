'use client';

import { Chip } from '@heroui/chip';

export interface GameStatusProps {
  currentPlayer: 'X' | 'O';
  winner: 'X' | 'O' | null;
  isDraw: boolean;
}

export const GameStatus = ({
  currentPlayer,
  winner,
  isDraw,
}: GameStatusProps) => {
  if (winner) {
    return (
      <Chip
        className="text-lg px-4 py-2"
        color="success"
        size="lg"
        variant="solid"
      >
        Player {winner} Wins!
      </Chip>
    );
  }

  if (isDraw) {
    return (
      <Chip
        className="text-lg px-4 py-2"
        color="warning"
        size="lg"
        variant="solid"
      >
        It&apos;s a Draw!
      </Chip>
    );
  }

  return (
    <Chip
      className="text-lg px-4 py-2"
      color={currentPlayer === 'X' ? 'primary' : 'secondary'}
      size="lg"
      variant="flat"
    >
      Player {currentPlayer}&apos;s Turn
    </Chip>
  );
};
