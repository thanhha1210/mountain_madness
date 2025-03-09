import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FinalPuzzle = ({ onNextPuzzle, onPrevPuzzle }: { onNextPuzzle: () => void, onPrevPuzzle: () => void }) => {
  const [answer, setAnswer] = useState('');
  const [message, setMessage] = useState('Final puzzle. Solve to escape!');
  const navigate = useNavigate();

  const correctAnswer = '428361'; // The word to win.

  const handleSubmit = () => {
    if (answer.toLowerCase() === correctAnswer) {
      navigate('/end'); // End page after successful puzzle completion
    } 
    else {
      setMessage('Incorrect answer. Try again!');
    }
  };

  return (
    <div className="w-full flex flex-col items-center relative p-6 mx-auto">
      <div className="flex flex-col items-center mb-2 z-10 w-full">
        <div className="flex items-center justify-between w-full mb-6">
          <button 
            onClick={onPrevPuzzle} 
            className="bg-red-500 py-2 px-6 rounded-md"
          >
            Back
          </button>
          <h1 className="text-xl mb-4">Final Puzzle</h1>
          <div></div>
        </div>
        <p className="text-sm mb-4">What is the ultimate word to escape the room?</p>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="px-2 py-2 border border-gray-500 rounded-md mb-4"
        />
        <button onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-6 rounded-md">
          Submit Answer
        </button>
        <p className="text-red-500 mt-4">{message}</p>
      </div>
    </div>
  );
};

export default FinalPuzzle;
