import React from 'react';
import Logo from '../../assets/img/google.png';

const BlogPuzzle = ({ onNextPuzzle }: { onNextPuzzle: () => void }) => {
  const title = `Have you ever felt like something was watching you?`;
  const message = ` A fleeting shadow in the corner of your eye, a whisper when no one is there? You're not imagining it. FOUR things lurk in the darkness, and they thrive when you look away. Some call them hallucinations. Some say it's the mind playing tricks. But what if it's something else? Scientists have studied the phenomenon of shadow figures appearing in dimly lit rooms. They found that TWO types exist—one that watches, and one that follows.

  The watchers remain still. You might see them in your periphery, standing just outside your vision. The followers? They are different. They move when you're not looking. You take a step, and suddenly, they are EIGHT steps closer.

  People report waking up at exactly THREE a.m., feeling their breath turn cold. The room is silent, but the shadows are moving, shifting, SIX inches closer with each blink.

  But the real horror? When the light flickers, and you realize—there was never just ONE shadow.`;

  return (
    <div className="flex justify-center items-center text-white ">
      <div className="text-center p-4 bg-black rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold leading-relaxed mb-3">{title}</h2>
        <p className="leading-loose text-left">{message}</p>

        {/* Next Button to Proceed */}
        <button
          onClick={onNextPuzzle}
          className="mt-4 px-10 p-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogPuzzle;
