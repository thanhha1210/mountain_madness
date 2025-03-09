import React, { useState } from 'react';
import Logo from '../../assets/img/google.png';

const SecondPuzzle = ({ onReturnToMenu, onSetPuzzleStatus }: { onReturnToMenu: () => void, onSetPuzzleStatus: (index: number, status: boolean) => void }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [message, setMessage] = useState('Can you find the imposter? Hint: string length 3');
  const [error, setError] = useState('');

  // Complicated string with imposters
  const stringWithImposters = `qwertyasabc0000zxa0sdjllm00a9bcdxSAsASas
                               asdljk0asd0asdsa2dmnq0aasdszv0a0bcxasd0z
                               1xasds0qwertyasd0z0asdsad000aaaADASDSAD`; 
  const correctAnswer = '921'; 
  const handleSubmit = () => {
    if (userAnswer === correctAnswer) {
      setError('Correct! You’ve found the imposters.');
      onSetPuzzleStatus(3, true);
      setTimeout(onReturnToMenu, 1000);
    } else {
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
          <p className="text-blue-900 mb-4 font-semibold whitespace-pre-wrap">{stringWithImposters}</p>

          {/* Input for user's answer */}
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="px-4 py-2 border rounded-md w-full mb-4"
            placeholder="Enter the imposter numbers (e.g. 123)"
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
    </div>
  );
};

export default SecondPuzzle;
