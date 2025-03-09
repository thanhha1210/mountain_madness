import React, { useEffect, useState } from 'react';

const WordGlitchPuzzle = ({ onReturnToMenu, onSetPuzzleStatus, onGoToWinPage, puzzles, onGoToPuzzle, randomNumber }: { 
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
        <div className="p-6" style={{ position: 'absolute', top: 90, width: '100%' }}> 
            <h1>Word Glitch Puzzle</h1>
            <p>Solve the puzzle by finding the hidden words!</p>
            <div className="flex flex-wrap justify-center items-center" style={{ height: '40vh' }}>
                {timer % selectedWords.length === 0 && timer !== 0 && (
                    <div style={{ width: '30px', height: '30px', backgroundColor: 'green', borderRadius: '50%', marginLeft: '10px', marginRight: "10px" }}></div>
                )}
                <h1>{selectedWords[timer % selectedWords.length]}</h1>
            </div>
            <div className="flex justify-center items-center">
                <input 
                    type="text"
                    style={{ border: '2px solid black', padding: '10px', borderRadius: '5px' }}
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
                {(message === 'Correct!' || puzzles[2].solved) && (
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                        fontSize: '48px',
                        zIndex: 1000
                    }}>
                        {randomNumber}
                        <button 
                            onClick={() => onSetPuzzleStatus(1, true)} 
                            style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: '#000000', color: 'white', border: 'none', marginTop: '20px' }}
                        >
                            Next Puzzle
                        </button>
                    </div>
                )}
            </div>
            <button 
                onClick={onReturnToMenu} 
                style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: '#000000', color: 'white', border: 'none', marginTop: '20px' }}
            >
                Home
            </button>
        </div>
    );
};

export default WordGlitchPuzzle;