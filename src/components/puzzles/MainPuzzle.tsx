import { useState } from 'react';
import BlogPuzzle from './BlogPuzzle';
import SecondPuzzle from './SecondPuzzle';
import ThirdPuzzle from './ThirdPuzzle';
import FourthPuzzle from './FourthPuzzle';
import FinalPuzzle from './FinalPuzzle';
import StartPage from './StartPage';
import EndPage from './EndPage';
import MenuPuzzle from './MenuPuzzle';

const MainPuzzle = () => {
  const [index, setIndex] = useState(0);
  const [puzzles, setPuzzles] = useState([
    { component: MenuPuzzle, solved: true },
    { component: StartPage, solved: false },
    { component: BlogPuzzle, solved: false },
    { component: SecondPuzzle, solved: false },
    { component: ThirdPuzzle, solved: false },
    { component: FourthPuzzle, solved: false },
    { component: FinalPuzzle, solved: false },
    { component: EndPage, solved: false }
  ]);

  const handleHome = () => setIndex(0);

  const handleIndex = (i: number) => {
    setIndex(i); // Set index to selected puzzle
  };

  const setPuzzleStatus = (i: number, solved: boolean) => {
    const updatedPuzzles = [...puzzles];
    updatedPuzzles[i].solved = solved;
    setPuzzles(updatedPuzzles);

    // Always return to menu after solving
    setIndex(0);
  };

  const CurrentPuzzle = puzzles[index].component;

  return (
    <div className="flex flex-col items-center justify-center w-[90%] my-20 mx-auto">
      <CurrentPuzzle
        puzzles={puzzles}
        onGoToPuzzle={handleIndex}
        onReturnToMenu={handleHome}
        onSetPuzzleStatus={setPuzzleStatus}
      />
    </div>
  );
};

export default MainPuzzle;
