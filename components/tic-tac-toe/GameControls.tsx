'use client';

import { Button } from '@heroui/button';

export interface GameControlsProps {
  isGameOver: boolean;
  onReset: () => void;
  onNewGame: () => void;
}

export const GameControls = ({
  isGameOver,
  onReset,
  onNewGame,
}: GameControlsProps) => {
  return (
    <div className="flex gap-3 justify-center flex-wrap">
      {isGameOver && (
        <Button
          color="primary"
          size="md"
          variant="solid"
          onPress={onReset}
        >
          Play Again
        </Button>
      )}
      <Button
        color="default"
        size="md"
        variant="bordered"
        onPress={onReset}
      >
        Reset Board
      </Button>
      <Button
        color="danger"
        size="md"
        variant="flat"
        onPress={onNewGame}
      >
        New Match
      </Button>
    </div>
  );
};
