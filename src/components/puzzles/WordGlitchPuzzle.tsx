import React, { useEffect, useState } from 'react';

const WordGlitchPuzzle = (props: { 
    onReturnToMenu: () => void, 
    onSetPuzzleStatus: (index: number, status: boolean) => void, 
    onGoToWinPage: (index: number, status: boolean) => void,
    puzzles: any[],
    onGoToPuzzle: (index: number) => void,
    randomNumber: number
}) => {
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const words = ['apple', 'banana', 'cherry', 'date', 'elephant', 'fig', 'grape', 'honeydew', 'kiwi', 'lemon', 'mango', 'nectarine', 'orange', 'pear', 'quince', 'raspberry', 'sugarcane', 'tangerine', 'ugli', 'vanilla', 'wealthy', 'ximenia', 'yellow', 'zucchini'];
    const [selectedWords, setSelectedWords] = useState<string[]>([]);

    const [wordLengths, setWordLengths] = useState<number[]>([]);
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        const shuffledWords = words.sort(() => 0.5 - Math.random());
        const selected = shuffledWords.slice(0, 6);
        setSelectedWords(selected);
        setWordLengths(selected.map(word => word.length));
    }, []);

    return (
        <div className="p-6 absolute top-[90px] w-full">
            <h1>Word Glitch Puzzle</h1>
            <p>Solve the puzzle by finding the hidden words!</p>
            <div className="flex flex-wrap justify-center items-center h-[40vh]">
                {timer % selectedWords.length === 0 && timer !== 0 && (
                    <div className="w-[30px] h-[30px] bg-green-500 rounded-full mx-2"></div>
                )}
                <h1>{selectedWords[timer % selectedWords.length]}</h1>
            </div>
            <div className="flex justify-center items-center">
                <input 
                    type="text"
                    className="border-2 border-black p-2 rounded-md"
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            const value = (e.target as HTMLInputElement).value;
                            if (value === wordLengths.join('')) {
                                setMessage('Correct!');
                            } else {
                                setMessage('Wrong!');
                            }
                        }
                    }} 
                />
            </div>
            <div className="flex justify-center items-center">
                <p>{message}</p>
                {(message === 'Correct!' || props.puzzles[2].solved) && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-4xl z-50">
                        {props.randomNumber}
                        <button 
                            onClick={() => props.onSetPuzzleStatus(1, true)} 
                            className="py-2 px-5 rounded bg-black text-white border-none mt-5"
                        >
                            Next Puzzle
                        </button>
                    </div>
                )}
            </div>
            <button 
                onClick={props.onReturnToMenu} 
                className="py-2 px-5 rounded bg-black text-white border-none mt-5"
            >
                Home
            </button>
        </div>
    );
};

export default WordGlitchPuzzle;
