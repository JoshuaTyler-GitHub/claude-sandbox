import { TicTacToe } from '@components/tic-tac-toe';

import { title } from '@components/primitives';

export default function GamePage() {
  return (
    <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
      <div className='inline-block max-w-xl text-center justify-center'>
        <h1 className={title()}>Game</h1>
      </div>

      <div className='mt-8 w-full max-w-md'>
        <TicTacToe />
      </div>
    </section>
  );
}
