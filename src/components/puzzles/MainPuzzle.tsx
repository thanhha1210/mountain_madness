import React, { useState } from 'react';
import BlogPuzzle from './BlogPuzzle';
import SecondPuzzle from './SecondPuzzle';
import ThirdPuzzle from './ThirdPuzzle';
import FourthPuzzle from './FourthPuzzle';
import FinalPuzzle from './FinalPuzzle';

const MainPuzzle = () => {
    const [index, setIndex] = useState(0);
    const puzzles = [BlogPuzzle, SecondPuzzle, ThirdPuzzle, FourthPuzzle, FinalPuzzle];

    const handleNextPuzzle = () => {
        if (index < puzzles.length - 1) {
        setIndex(index + 1);
        }
    };

    const CurrentPuzzle = puzzles[index];

    return (
        <div className="flex flex-col items-center justify-center w-[90%] my-20  mx-auto">
            <CurrentPuzzle onNextPuzzle={handleNextPuzzle} />
        </div>
    );
};

export default MainPuzzle;
