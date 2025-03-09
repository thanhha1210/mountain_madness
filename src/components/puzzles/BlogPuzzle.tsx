import React, { useState } from 'react';

const BlogPuzzle = ({ onReturnToMenu, onSetPuzzleStatus }: { onReturnToMenu: () => void, onSetPuzzleStatus: (index: number, status: boolean) => void }) => {
  const title = `Have you ever felt like something was watching you?`;
  const message = `A fleeting shadow in the corner of your eye, a whisper when no one is there? You're not imagining it. FOUR things lurk in the darkness, and they thrive when you look away. Some call them hallucinations. Some say it's the mind playing tricks. But what if it's something else? Scientists have studied the phenomenon of shadow figures appearing in dimly lit rooms. They found that TWO types exist—one that watches, and one that follows.

  The watchers remain still. You might see them in your periphery, standing just outside your vision. The followers? They are different. They move when you're not looking. You take a step, and suddenly, they are EIGHT steps closer.

  People report waking up at exactly THREE a.m., feeling their breath turn cold. The room is silent, but the shadows are moving, shifting, SIX inches closer with each blink.

  But the real horror? When the light flickers, and you realize—there was never just ONE shadow.`;

  const [userAnswer, setUserAnswer] = useState('');
  const [error, setError] = useState('');

  const correctAnswer = '4'; 

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
