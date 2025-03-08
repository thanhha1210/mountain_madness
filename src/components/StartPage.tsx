import React, { useState } from 'react';
import Logo from '../assets/img/google.png';

const StartPage = () => {
    const [clickable, setClickable] = useState(false);
    const [moves, setMoves] = useState(0);
    const [position, setPosition] = useState({ top: "60%", left: "50%" });
    
    const startMessage = "Start Investigation";
    const [index, setIndex] = useState(0);
    const [message, setMessage] = useState("");

    const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
        if (index < startMessage.length) {
            setMessage((prev) => prev + startMessage[index]);
            setIndex(index + 1);
        }
    };

    const moveButton = () => {
        if (moves < 6) {
            const randomX = Math.random() * 70 + "%";
            setPosition({ top: "60%", left: randomX });
            setMoves(moves + 1);
        } 
        else {
            setClickable(true);
        }
    };

    const handleClick = () => {
        if (message !== startMessage) {
            return;
        }
        setMessage("Case Opened");
    };

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-white text-black relative">
            <div className="flex flex-col items-center mb-6 z-10 w-[60%]">
                <img src={Logo} alt="Logo" className="w-32 mb-4" />
                <input 
                    type="text" 
                    className="px-4 py-2 border border-black rounded-md text-black w-full"
                    onInput={e => handleInput(e)}
                    placeholder="Type to reveal message..."
                    value={message}
                />
            </div>
            
            <button
                className='text-sm border border-black px-8 py-3 rounded-lg absolute transition-all font-mono shadow-lg tracking-widest z-0'
                style={
                    { 
                        top: position.top, 
                        left: position.left 
                    }
                }
                onMouseEnter={!clickable ? moveButton : undefined}
                onClick={handleClick}
            >
                Search
            </button>
        </div>
    );
};

export default StartPage;
