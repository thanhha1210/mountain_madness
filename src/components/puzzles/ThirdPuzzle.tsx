import React, { useState } from 'react';
import Logo from '../../assets/img/google.png';

const ThirdPuzzle =  ({ onReturnToMenu, onSetPuzzleStatus }: { onReturnToMenu: () => void, onSetPuzzleStatus: (index: number, status: boolean) => void })  => {
  const [userAnswer, setUserAnswer] = useState('');
  const [message, setMessage] = useState('Solve the sequence and find the next number.');
  const [error, setError] = useState('');

  // Sequence puzzle: 2, 5, 10, 17, 26 (Next number is 37)
  const sequence = [2, 5, 10, 17, 26];
  const correctAnswer = 37;

  const handleSubmit = () => {
    if (parseInt(userAnswer) === correctAnswer) {
      setError('Correct! You’ve solved the mystery.');
      onSetPuzzleStatus(4,true);
      setTimeout(onReturnToMenu, 1000); 
    } 
    else {
     setError('Incorrect. Try again!');
    }
  };

  return (
    <div className="w-full flex justify-center items-center p-6">
         <div className="flex flex-col items-center p-6 w-[90%] md:w-[50%] rounded-lg shadow-lg">
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

        <input type="text" className="px-2 py-2 border border-gray-500 rounded-md w-full mb-4" value={message} disabled />
        <p className="text-lg mb-2">Sequence Puzzle:</p>
        <p className="text-xl">
          {sequence.join(', ')}... What is the next number in the sequence?
        </p>
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          className="px-4 py-2 border rounded-md w-full mb-4"
          placeholder="Your answer"
        />
        
        {/* Minimal Submit Button */}
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
  );
};

export default ThirdPuzzle;
