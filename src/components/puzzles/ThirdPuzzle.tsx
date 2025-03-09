import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/img/google.png';

const ThirdPuzzle = () => {
  const [userAnswer, setUserAnswer] = useState('');
  const [message, setMessage] = useState('Solve the sequence and find the next number.');
  const navigate = useNavigate();

  // Sequence puzzle: 2, 5, 10, 17, 26 (The next number is 37)
  const sequence = [2, 5, 10, 17, 26]; 
  const correctAnswer = 37; // The next number in the sequence
  
  const handleSubmit = () => {
    // Check if the user found the next number in the sequence
    if (parseInt(userAnswer) === correctAnswer) {
      setMessage('Correct! The next number is 37.');
      setTimeout(() => {
        navigate('/fourth-puzzle'); // Navigate to the 4th puzzle
      }, 1000);
    } else {
      setMessage('Incorrect. Try again!');
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
        <p className="text-lg mb-4">Sequence Puzzle:</p>
        <p className="text-xl text-blue-900 mb-4">
          {sequence.join(', ')}... What is the next number in the sequence?
        </p>
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
        <p className="text-red-500 mt-4">{message}</p>
      </div>
    </div>
  );
};

export default ThirdPuzzle;
