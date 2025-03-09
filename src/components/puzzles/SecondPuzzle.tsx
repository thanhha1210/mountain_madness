import React, { useState } from 'react';
import Logo from '../../assets/img/google.png';

const SecondPuzzle = ({ onReturnToMenu, onSetPuzzleStatus }: { onReturnToMenu: () => void, onSetPuzzleStatus: (index: number, status: boolean) => void }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [message, setMessage] = useState('Can you solve the mystery?');
  const [error, setError] = useState('');

  const encryptedMessage = "Wkh txhvw lv rxw wkhuh"; 
  const decryptedMessage = "THE QUEST IS OUT THERE";

  const handleSubmit = () => {
    if (userAnswer.toUpperCase() === decryptedMessage) {
      setError('Correct! You’ve solved the mystery.');
      onSetPuzzleStatus(3,true);
      setTimeout(onReturnToMenu, 1000); 
    } 
    else {
      setError('Incorrect. Hint: W = T');
    }
  };

  return (
    <div className="w-full flex justify-center items-center border border-1 border-black">
      <div className="flex flex-col items-center p-6 w-full rounded-lg shadow-lg">
        {/* Header section */}
        <div className="flex items-center justify-between w-full mb-6">
          <button 
            onClick={onReturnToMenu}  
            className="bg-red-500 py-2 px-6 rounded-md hover:bg-red-600"
          >
            Home
          </button>
          <img src={Logo} alt="Logo" className="w-32" />
          <div></div>
        </div>

        {/* Main content section */}
        <div className="flex flex-col items-center w-[50%]">
          <input 
            type="text" 
            className="px-4 py-2 border rounded-md w-full mb-2" 
            value={message} 
            disabled 
          />
          <p className="text-blue-400 text-lg mb-2">Cryptic Message:</p>
          <p className="text-blue-900 mb-4 font-semibold">{encryptedMessage}</p>

          {/* Input for user's answer */}
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="px-4 py-2 border rounded-md w-full mb-4"
            placeholder="Your answer"
          />
          
          {/* Submit button */}
          <button 
            onClick={handleSubmit} 
            className="bg-blue-500 text-white py-2 px-6 rounded-md mt-4 hover:bg-blue-600"
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
