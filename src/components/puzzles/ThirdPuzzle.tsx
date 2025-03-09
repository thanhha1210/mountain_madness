import React, { useState } from 'react';
import Logo from '../../assets/img/google.png';

const ThirdPuzzle = ({ onNextPuzzle }: { onNextPuzzle: () => void }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [message, setMessage] = useState('Solve the sequence and find the next number.');

  // Sequence puzzle: 2, 5, 10, 17, 26 (Next number is 37)
  const sequence = [2, 5, 10, 17, 26];
  const correctAnswer = 37;

  const handleSubmit = () => {
    if (parseInt(userAnswer) === correctAnswer) {
      setMessage('Correct! The next number is 37.');
      setTimeout(() => {
        onNextPuzzle(); // Proceed to FourthPuzzle
      }, 1000);
    } else {
      setMessage('Incorrect. Try again!');
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center p-6">
      <div className="flex flex-col items-center mb-2 z-10 w-full max-w-lg">
        <img src={Logo} alt="Logo" className="w-32 mb-4" />
        <input type="text" className="px-2 py-2 border border-gray-500 rounded-md w-full mb-4" value={message} disabled />
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
        <button onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-6 rounded-md mt-4">
          Submit Answer
        </button>
        <p className="text-red-500 mt-4">{message}</p>
      </div>
    </div>
  );
};

export default ThirdPuzzle;
