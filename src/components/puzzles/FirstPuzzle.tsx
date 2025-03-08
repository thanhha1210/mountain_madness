import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/img/google.png';

const FirstPuzzle = () => {
  const [message, setMessage] = useState("Start Investigation");

  const page1 = {
    title: "You are not alone",
    desc: "Don't click this link.",
    link: "www.google.com/you-are-not-alone"
  };

  const page2 = {
    title: "A deeper mystery",
    desc: "Proceed at your own risk.",
    link: "www.google.com/deep-mystery"
  };

  const navigate = useNavigate();

  const handleClick = (a: number) => {
    if (a === 1) {
      navigate('/');
    } else {
      navigate('/second-puzzle');
    }
  };

  return (
    <div className="w-[70%] h-screen flex flex-col items-center relative p-6  mx-auto">
      <div className="flex flex-col items-center mb-2 z-10 w-full ">
        <img src={Logo} alt="Logo" className="w-32 mb-2" />
        <input
          type="text"
          className="px-2 py-2 border border-gray-500 rounded-md w-full"
          value={message}
          disabled={true}
        />
      </div>

      <div className="mr-auto w-full">
        <button
          className="block w-full text-left mb-4"
          onClick={() => handleClick(1)}
        >
          <p className="text-xl text-blue-900 font-semibold hover:underline">{page1.title}</p>
          <p className="text-sm">{page1.desc}</p>
          <p className="text-green-700 hover:underline">{page1.link}</p>
        </button>

        <button
          className="block w-full text-left"
          onClick={() => handleClick(2)}
        >
          <p className="text-xl text-blue-900 font-semibold hover:underline">{page2.title}</p>
          <p className="text-sm">{page2.desc}</p>
          <p className="text-green-700 hover:underline">{page2.link}</p>
        </button>
      </div>
    </div>
  );
}

export default FirstPuzzle;
