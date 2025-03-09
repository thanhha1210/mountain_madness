import Logo from "../../assets/img/google.png";
import { useState } from 'react';


const MenuPuzzle = ({ puzzles, onGoToPuzzle }: { puzzles: any[], onGoToPuzzle: (i: number) => void }) => {
  const [volume, setVolume] = useState(1);
  return (
    <div className="flex flex-col items-center w-full my-8">
      {/* Logo and Input on the same row */}
      <div className="flex items-center w-full mb-3">
        <img src={Logo} alt="Logo" className="w-32 mr-4" />
        <input
          type="text"
          className="px-4 py-2 border border-black rounded-md text-black w-full"
          value="Why can I see shadows move?"
          disabled={true}
        />
      </div>

      {/* Puzzle links */}
      <div className="flex flex-col items-start w-full px-4">
        {puzzles.map((puzzle, index) => {
          if (index === 0) return null; // Skip MenuPuzzle itself
          return (
            <div key={index} className="w-full">
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

