import Logo from "../../assets/img/google.png";

const MenuPuzzle = ({ puzzles, onGoToPuzzle }: { puzzles: any[], onGoToPuzzle: (i: number) => void }) => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Logo and Input on the same row */}
      <div className="flex items-center w-full">
        <img src={Logo} alt="Logo" className="w-32 mr-4" />
        <input
          type="text"
          className="px-4 py-2 border border-black rounded-md text-black w-full"
          value="Start Investigation"
          disabled={true}
        />
      </div>

      {/* Puzzle links */}
      <div className="flex flex-col items-start w-full px-4">
        {puzzles.map((puzzle, index) => {
          if (index === 0) return null; // Skip MenuPuzzle itself
          return (
            <div key={index} className="mb-2 w-full">
              <button
                onClick={() => onGoToPuzzle(index)}
                className={`w-full text-left ${puzzle.solved ? 'line-through text-gray-400' : ''}`}
              >
                {puzzle.solved ? 'Puzzle Solved' :
                  <div>
                    <p className="hover:underline font-bold text-xl text-blue-600 hover:text-blue-800">{puzzle.link}</p>
                    <p className="text-black">{puzzle.msg}</p>
                  </div>
                }
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuPuzzle;
