import React, { useState } from 'react';
import Logo from '../../assets/img/Amazon-Logo.png';
import Light from '../../assets/img/lb.png';
import Prime from '../../assets/img/prime.jfif';

const FourthPuzzle = ({ onReturnToMenu, onSetPuzzleStatus, onGoToWinPage, answerKey }: { 
  onReturnToMenu: () => void, 
  onSetPuzzleStatus: (index: number, status: boolean) => void, 
  onGoToWinPage: () => void,
  answerKey: string
}) => {

  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(''); 

  const handleClick = () => {
    // Handle the place order action here
    if (answer === answerKey) {
      onSetPuzzleStatus(5, true);
      onGoToWinPage();
    } 
    else {
      setError('Incorrect. Try again!'); 
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between w-full mb-6">
        <button
            onClick={onReturnToMenu}
            className="border border-1 border-black py-2 px-6 rounded-md"
          >
            Home
        </button>
        <img src={Logo} alt="Amazon" className="w-32" />
        <div></div>
      </div>

      <div className="flex justify-between space-x-6">
        {/* Shipping Address Section */}
        <div className="flex border-2 border-gray-600 p-4 rounded-md shadow-md w-[60%]">
          <div className='w-[70%]'>
            <strong className="block text-xl mb-2 text-left">NEW LIGHTBULB</strong>
            <div className='flex justify-content-between align-center'>
              <p className="font-semibold text-xl text-left">OTP: </p>
              <input
                type="text"
                value={answer}
                placeholder='Enter the 4 Number OTP'
                onChange={(e) => setAnswer(e.target.value)}
                className="px-2 py-2 border border-gray-500 rounded-md mb-4"
              />
            </div>
            <div className="text-gray-700 blur-xs text-left">
              <p>Address: 1313 Hasting Avenue Lorem, ipsum dolor.</p>
              <p>Post code: V3V 3V3  Lorem, ipsum dolor.</p>
              <p>City: Vancouver, Canada  Lorem, ipsum dolor.</p>
            </div>
          </div>
          <div className="flex flex-col items-center mx-auto">
            <img src={Light} alt="Light" className="mt-4 w-16 h-16" />
            <img src={Prime} alt="Prime" className="mt-4 w-16 h-16" />
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="border-2 border-gray-600 p-4 rounded-md shadow-md">
          <button
            className="bg-yellow-500 text-white py-2 px-20 rounded-md mb-4 transition-all hover:bg-yellow-600"
            onClick={handleClick}
          >
            Place order
          </button>
          <strong className="block text-xl mb-2 text-left">Order Summary</strong>
          <div className="text-gray-700 blur-xs text-left">
            <p>Items: $123 Lorem ipsum dolor sit amet.</p>
            <p>Shipping & Handling: $123</p>
            <p>Total: $246</p>
          </div>
        </div>
      </div>

      {/* Error message display */}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default FourthPuzzle;
