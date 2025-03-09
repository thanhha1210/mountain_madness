import React, { useState } from 'react';
import Logo from '../../assets/img/google.png';

const SecondPuzzle = ({ onNextPuzzle, onPrevPuzzle }: { onNextPuzzle: () => void, onPrevPuzzle: () => void }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [message, setMessage] = useState('Can you solve the mystery?');
  const [error, setError] = useState('');

  const encryptedMessage = "Wkh txhvw lv rxw wkhuh"; 
  const decryptedMessage = "THE QUEST IS OUT THERE";

  const handleSubmit = () => {
    if (userAnswer.toUpperCase() === decryptedMessage) {
      setError('Correct! You’ve solved the mystery.');
      setTimeout(onNextPuzzle, 1000);
    } else {
      setError('Incorrect. Hint: W = T');
    }
  };

  return (
    <div className="w-full flex justify-center items-center p-6">
      <div className="flex flex-col items-center mb-2 z-10 w-full max-w-lg">
        <div className="flex items-center justify-between w-full mb-6">
          <button 
            onClick={onPrevPuzzle} 
            className="bg-red-500 py-2 px-6 rounded-md"
          >
            Back
          </button>
          <img src={Logo} alt="Logo" className="w-32" />
          <div></div>
        </div>

        
        
        
        <input type="text" className="px-2 py-2 border border-gray-500 rounded-md w-full mb-4" value={message} disabled />
        <p className="mb-2">Cryptic Message:</p>
        <p className="text-blue-900 mb-4">{encryptedMessage}</p>
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          className="px-2 py-2 border border-gray-500 rounded-md w-full mb-4"
          placeholder="Your answer"
        />
        <button onClick={handleSubmit} className="bg-blue-500 py-2 px-6 rounded-md mt-4">
          Submit Answer
        </button>
        <p className="text-red-500 mt-4">{error}</p>
      </div>
    </div>
  );
};

export default SecondPuzzle;
