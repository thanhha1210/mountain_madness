import React, { useState, useEffect } from 'react';
import Logo from '../../assets/img/google.png';

const StartPage = ({
  onReturnToMenu,
  onSetPuzzleStatus,
  puzzles,
  randomNumber,
}: {
  onReturnToMenu: () => void;
  onSetPuzzleStatus: (index: number, status: boolean) => void;
  puzzles: any[];
  randomNumber: number;
}) => {
  const [moves, setMoves] = useState(0);
  const [position, setPosition] = useState({ top: '60%', left: '50%' });

  const startMessage = 'How many times does it move?';
  const [index, setIndex] = useState(0);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [answer, setAnswer] = useState(0);
  const [showRandomNumber, setShowRandomNumber] = useState(puzzles[3]?.solved); 

  useEffect(() => {
    console.log('puzzles[1]?.solved:', puzzles[1]?.solved);
    console.log('randomNumber:', randomNumber); 
    if (puzzles[1]?.solved) {
      setShowRandomNumber(true);
    }
  }, [puzzles, randomNumber]); 

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    if (index < startMessage.length) {
      setMessage((prev) => prev + startMessage[index]);
      setIndex(index + 1);
    }
  };

  const moveButton = () => {
    if (moves < randomNumber) {
      const randomX = Math.random() * 70 + '%';
      setPosition({ top: '60%', left: randomX });
      setMoves(moves + 1);
    }
  };

  const handleSubmit = () => {
    if (answer === randomNumber) {
      setMessage('Case Opened');
    } 
    else {
      setError('Incorrect answer. Try again!');
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center text-black relative">
      <div className="flex flex-col items-center mb-2 z-10 w-[60%]">
        <div className="flex mb-2 items-center justify-between">
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

      {/* Modal showing the random number after correct answer or if solved */}
      {(showRandomNumber || message == 'Case Opened') && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-4xl z-50">
          <div className="flex items-center justify-center">
            <div
              className="w-[80px] h-[80px] rounded-full mx-2 text-center flex justify-center items-center"
              style={{
                animation: `moveBox 2s ease`,
                position: 'relative',
              }}
            >
              {randomNumber} {/* This should display the random number */}
            </div>
          </div>
          <button
            onClick={() => onSetPuzzleStatus(1, true)}
            className="py-2 px-5 rounded bg-black text-white border-none mt-5"
          >
            Next Puzzle
          </button>
        </div>
      )}
    </div>
  );
};

export default StartPage;
