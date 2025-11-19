'use client';

import { Button } from '@heroui/button';

export interface GameCellProps {
  index: number;
  value: 'X' | 'O' | null;
  onClick: () => void;
  isWinningCell: boolean;
  disabled: boolean;
}

export const GameCell = ({
  index,
  value,
  onClick,
  isWinningCell,
  disabled,
}: GameCellProps) => {
  const getColor = () => {
    if (isWinningCell) return 'success';
    if (value === 'X') return 'primary';
    if (value === 'O') return 'secondary';
    return 'default';
  };

  const getAriaLabel = () => {
    const position = ['top-left', 'top-center', 'top-right', 'middle-left', 'center', 'middle-right', 'bottom-left', 'bottom-center', 'bottom-right'][index];
    if (value) {
      return `${position}: ${value}`;
    }
    return `${position}: empty`;
  };

  return (
    <Button
      aria-label={getAriaLabel()}
      className="w-20 h-20 sm:w-24 sm:h-24 text-3xl sm:text-4xl font-bold"
      color={getColor()}
      disabled={disabled || value !== null}
      variant={value || isWinningCell ? 'solid' : 'bordered'}
      onPress={onClick}
    >
      {value}
    </Button>
  );
};
