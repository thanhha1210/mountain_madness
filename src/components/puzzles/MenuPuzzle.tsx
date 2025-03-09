const MenuPuzzle = ({ puzzles, onGoToPuzzle }: { puzzles: any[], onGoToPuzzle: (i: number) => void }) => {
    return (
      <div className="flex flex-col items-center">
        {puzzles.map((puzzle, index) => {
          if (index === 0) return null; // Skip MenuPuzzle itself
          return (
            <button
              key={index}
              onClick={() => onGoToPuzzle(index)}
              className="mb-2 px-10 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white"
            >
              {puzzle.solved ? 'Puzzle Solved' : `Go to Puzzle ${index}`}
            </button>
          );
        })}
      </div>
    );
  };
  
  export default MenuPuzzle;
  