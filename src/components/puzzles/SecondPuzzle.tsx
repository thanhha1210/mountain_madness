import React, { useState } from 'react';
import Logo from '../../assets/img/google.png';

interface SecondPuzzleProps {
  onReturnToMenu: () => void;
  onSetPuzzleStatus: (index: number, status: boolean) => void;
  randomNumber: number;
  puzzles: any[];
}

const SecondPuzzle: React.FC<SecondPuzzleProps> = ({ onReturnToMenu, onSetPuzzleStatus, randomNumber, puzzles }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [message, setMessage] = useState('Can you find the imposter? Hint: string length 2');
  const [error, setError] = useState('');
  const [showRandomNumber, setShowRandomNumber] = useState(puzzles[3]?.solved); 

  // Complicated string with imposters
  const stringWithImposters = `qwertyasabc0000zxa0sdjllm00a9bcdxSAsASas
                               asdljk0asd0asdsaadmnq0aasdszv0a0bcxasd0z
                               1xasds0qwertyasd0z0asdsad000aaaADASDSAD`; 
  const correctAnswer = '91'; 

  const handleSubmit = () => {
    if (userAnswer === correctAnswer) {
      setError('Correct! You’ve found the imposters.');
      // onSetPuzzleStatus(3, true); 
      setShowRandomNumber(true); 
    }
    else {
      setError('Incorrect. Try again!');
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-col items-center p-6 w-[90%] md:w-[50%] rounded-lg shadow-lg">
        {/* Header section */}
        <div className="flex items-center justify-between w-full mb-6">
          <button
            onClick={onReturnToMenu}
            className="border border-1 border-black py-2 px-6 rounded-md"
          >
            Home
          </button>
          <img src={Logo} alt="Logo" className="w-32" />
          <div></div>
        </div>

        {/* Main content section */}
        <div className="flex flex-col items-center w-full">
          <input
            type="text"
            className="px-4 py-2 border rounded-md w-full mb-4 bg-gray-200"
            value={message}
            disabled
          />
          <p className="text-blue-900 mb-4 font-semibold whitespace-pre-wrap text-white">{stringWithImposters}</p>

          {/* Input for user's answer */}
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="px-4 py-2 border rounded-md w-full mb-4"
            placeholder="Enter the imposter numbers (e.g. 12)"
          />
          
          {/* Submit button */}
          <button 
            onClick={handleSubmit} 
            className="bg-gray-500 text-white py-2 px-6 rounded-md mt-4 hover:bg-gray-600"
          >
            Submit Answer
          </button>

          {/* Error message */}
          <p className="text-red-500 mt-4">{error}</p>
        </div>
      </div>

      {(showRandomNumber || error === 'Correct! You’ve found the imposters.') && (   
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-4xl z-50">    
          <div className="flex items-center justify-center">
            <div 
              className="w-[80px] h-[80px] rounded-full mx-2 text-center flex justify-center items-center"
              style={{ 
                animation: `moveBox 2s ease`, 
                position: 'relative' 
              }}
            >
              {randomNumber}
            </div>
          </div>
          <button 
            onClick={() => onSetPuzzleStatus(3, true)} 
            className="py-2 px-5 rounded bg-black text-white border-none mt-5"
          >
            Next Puzzle
          </button>
        </div>
      )}
    </div>
  );
};

export default SecondPuzzle;
