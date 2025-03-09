import React, { useState } from 'react';

const BlogPuzzle = ({ onReturnToMenu, onSetPuzzleStatus }: { onReturnToMenu: () => void, onSetPuzzleStatus: (index: number, status: boolean) => void }) => {
  const title = `You Are Not Alone`;
  const message = `The night feels still, yet shadows shift in ways that defy explanation. You glance over your shoulder—nothing. But the sense of being watched lingers.
  
  Some say it’s just the mind playing tricks, but others know better. THREE nights ago, someone else noticed the same creeping figures. They spoke of silhouettes standing at the foot of their bed, whispering in voices too soft to understand.
  
  You try to shake off the fear, but the shadows grow bolder. They crawl along the walls, moving in patterns that make NO sense. One moment, they stretch long and thin—unnatural. The next, they scatter, reforming in different corners of the room.
  
  Last night, you counted the times they appeared. It wasn’t just once. Not just twice. It happened SIX times before you finally lost the courage to keep looking.
  
  They never leave. They never rest. And soon, you’ll realize the truth: You are not alone.`;

  const [userAnswer, setUserAnswer] = useState('');
  const [error, setError] = useState('');

  const correctAnswer = '306'; 

  const handleSubmit = () => {
    if (userAnswer.trim() === correctAnswer) {
      setError('');
      onSetPuzzleStatus(2, true); 
      onReturnToMenu();
    } else {
      setError('Incorrect answer. Try again!');
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="text-center p-4 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold leading-relaxed mb-3">{title}</h2>
        <p className="leading-loose text-left">{message}</p>

        {/* Input field for the user to enter the correct number */}
        <div className="mt-4">
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="px-2 py-2 border border-gray-500 rounded-md mb-4 text-black w-[50%]"
            placeholder="Enter the number"
          />
        </div>

        {/* Buttons: Submit and Back */}
        <div className="flex justify-between mt-4">
          <button
            onClick={onReturnToMenu}
            className="px-6 py-2 bg-gray-600 hover:bg-gray-700 rounded-md text-white"
          >
            Back to Menu
          </button>

          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white"
          >
            Submit Answer
          </button>
        </div>

        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default BlogPuzzle;
