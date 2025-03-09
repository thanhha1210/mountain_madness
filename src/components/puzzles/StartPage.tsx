import React, { useState } from 'react';
import Logo from '../../assets/img/google.png';

const StartPage = ({ onReturnToMenu, onSetPuzzleStatus }: { onReturnToMenu: () => void, onSetPuzzleStatus: (index: number, status: boolean) => void }) => {
  const [moves, setMoves] = useState(0);
  const [position, setPosition] = useState({ top: '60%', left: '50%' });

  const startMessage = 'How many times does it move?';
  const [index, setIndex] = useState(0);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [answer, setAnswer] = useState(0);

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    if (index < startMessage.length) {
      setMessage((prev) => prev + startMessage[index]);
      setIndex(index + 1);
    }
  };

  const moveButton = () => {
    if (moves < 6) {
      const randomX = Math.random() * 70 + '%';
      setPosition({ top: '60%', left: randomX });
      setMoves(moves + 1);
    } 
  };

  const handleSubmit = () => {
    if (answer === 6) {
      setMessage('Case Opened');
      onSetPuzzleStatus(1, true);
      onReturnToMenu();
    } 
    else {
      setError('Incorrect answer. Try again!');
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center text-black relative">
      <div className="flex flex-col items-center mb-2 z-10 w-[60%]">
        <div className='flex mb-2 items-center justify-between'>
          {/* Minimal Back Button */}
          <button
            onClick={onReturnToMenu}
            className="px-4 py-1 border border-black border-1 rounded-md text-black w-[25%]"
          >
            Back
          </button>
          <img src={Logo} alt="Logo" className="w-32 mr-8" />
          {/* Submit Answer Input */}
          <input
            type="number"
            value={answer}
            onChange={(e) => setAnswer(Number(e.target.value))}
            className="px-4 py-1 border border-black text-black w-[25%]"
            placeholder="0"
          />
        </div>
        <input
          type="text"
          className="px-4 py-2 border border-black rounded-md text-black w-full"
          onInput={handleInput}
          placeholder="Type to reveal message..."
          value={message}
        />
      </div>

      <div className="flex flex-col items-center">
        {/* Search Button: Moves around the screen */}
        <button
          className="text-sm border border-black px-8 py-1 rounded-lg absolute transition-all font-mono shadow-lg tracking-widest z-0"
          style={{
            top: position.top,
            left: position.left,
          }}
          onMouseEnter={moveButton}
          onClick={handleSubmit}
        >
          Search
        </button>

       

        {/* Error message */}
        {error && <p className=" text-red-500 mb-3">{error}</p>}
      </div>
    </div>
  );
};

export default StartPage;
