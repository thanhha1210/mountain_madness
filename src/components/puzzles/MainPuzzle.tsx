import { useState } from 'react';
import BlogPuzzle from './BlogPuzzle';
import SecondPuzzle from './SecondPuzzle';
import ThirdPuzzle from './ThirdPuzzle';
import FourthPuzzle from './FourthPuzzle';
import StartPage from './StartPage';
import MenuPuzzle from './MenuPuzzle';
import WinScreen from './WinScreen';

const MainPuzzle = () => {
  const [index, setIndex] = useState(0);
  const [puzzles, setPuzzles] = useState([
    { component: MenuPuzzle, solved: true, 
      link: '', 
      msg: '' 
    },
    { component: StartPage, solved: false, 
      link: 'Find the number',
      msg: 'Can you catch me? I move fast, just like your mind!'
    },
    { component: BlogPuzzle, solved: false,
      link: 'You are not alone',
      msg: 'The night feels still, yet shadows shift in ways that defy explanation. You glance over your shoulder—nothing. But the sense of being watched lingers.'
    },
    { component: SecondPuzzle, solved: false,
      link: 'Error 404: Page Not Found',
      msg: 'Amidst the madness, a few numbers are playing hide and seek. Can you find them before they escape?'
    },
    { component: ThirdPuzzle, solved: false, 
      link: "Number Ninja: What’s the Next Hit?",
      msg: "Unleash your inner mathematician and crack the code — what's the missing number?"
    },
    { component: FourthPuzzle, solved: false,
      link: 'Go get the prize!!!', 
      msg: 'The numbers are partying together. Can you find the secret code to crash the party? Let’s crack this mystery!'
     },
    { component: WinScreen, solved: false }
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

  const handleWin = () => setIndex(6); 

  const CurrentPuzzle = puzzles[index].component;

  return (
    <div className="flex flex-col items-center justify-center w-[90%] my-20 mx-auto">
      <CurrentPuzzle
        puzzles={puzzles}
        onGoToPuzzle={handleIndex}
        onReturnToMenu={handleHome}
        onSetPuzzleStatus={setPuzzleStatus}
        onGoToWinPage={handleWin}
      />
    </div>
  );

};

export default MainPuzzle;
