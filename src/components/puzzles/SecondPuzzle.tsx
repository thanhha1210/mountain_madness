import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/img/google.png';

const SecondPuzzle = () => {
  const [userAnswer, setUserAnswer] = useState('');
  const [message, setMessage] = useState('Can you solve the mystery?');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Shift by 3
  const encryptedMessage = "Wkh txhvw lv rxw wkhuh"; 
  const decryptedMessage = "THE QUEST IS OUT THERE";
  
  const handleSubmit = () => {
    // Check if the user decoded the message correctly
    if (userAnswer.toUpperCase() === decryptedMessage) {
      setError('Correct! You’ve solved the mystery.');
      setTimeout(() => {
        navigate('/third-puzzle'); // Navigate to the 3rd puzzle
      }, 1000);
    } 
    else {
      setError('Incorrect. Hint: W = T');
    }
  };

  return (
    <div className="w-[70%] h-screen flex flex-col items-center relative p-6 mx-auto">
      <div className="flex flex-col items-center mb-2 z-10 w-full">
        <img src={Logo} alt="Logo" className="w-32 mb-2" />
        <input
          type="text"
          className="px-2 py-2 border border-gray-500 rounded-md w-full mb-4"
          value={message}
          disabled={true}
        />
        <p className="mb-2">Cryptic Message:</p>
        <p className="text-blue-900 mb-4">{encryptedMessage}</p>
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          className="px-2 py-2 border border-gray-500 rounded-md w-full mb-4"
          placeholder="Your answer"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white py-2 px-6 rounded-md mt-4"
        >
          Submit Answer
        </button>
        <p className="text-red-500 mt-4">{error}</p>
      </div>
    </div>
  );
};

export default SecondPuzzle;
