import React, { useState } from 'react';
import Logo from '../../assets/img/google.png';

const FourthPuzzle = ({ onNextPuzzle }: { onNextPuzzle: () => void }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [error, setError] = useState('Decrypt the message to proceed.');

  const cipherMessage = "Zpv bmsfbez tbx uif botxfs!";
  const correctAnswer = "You already saw the answer!";

  const handleSubmit = () => {
    if (userAnswer.toUpperCase() === correctAnswer.toUpperCase()) {
      setError('Correct! You decrypted the message.');
      setTimeout(() => {
        onNextPuzzle(); // Proceed to next puzzle
      }, 1000);
    } else {
      setError('Incorrect. Hint: shift by 1!');
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center p-6">
      <div className="flex flex-col items-center z-10 w-full max-w-lg">
        <img src={Logo} alt="Logo" className="w-32 mb-4" />
        <p className="text-lg mb-4">Cipher Puzzle:</p>
        <p className="text-lg mb-4">
          Encoded message: <strong>{' ' + cipherMessage}</strong>
        </p>
        <input 
          type="text" 
          value={userAnswer} 
          onChange={(e) => setUserAnswer(e.target.value)} 
          className="px-2 py-2 border border-gray-500 rounded-md w-full mb-4" 
          placeholder="Your decoded message" 
        />
        <button onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-6 rounded-md mt-4">
          Submit Answer
        </button>
        <p className="text-red-500 mt-4">{error}</p>
      </div>
    </div>
  );
};

export default FourthPuzzle;
