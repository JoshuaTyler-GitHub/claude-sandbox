'use client';

import { GameCell } from './GameCell';

export interface GameBoardProps {
  board: (('X' | 'O' | null)[]);
  onCellClick: (index: number) => void;
  winningLine: number[] | null;
  disabled: boolean;
}

export const GameBoard = ({
  board,
  onCellClick,
  winningLine,
  disabled,
}: GameBoardProps) => {
  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-3">
      {board.map((value, index) => (
        <GameCell
          key={`cell-${index}`}
          disabled={disabled}
          index={index}
          isWinningCell={winningLine?.includes(index) ?? false}
          value={value}
          onClick={() => onCellClick(index)}
        />
      ))}
    </div>
  );
};
