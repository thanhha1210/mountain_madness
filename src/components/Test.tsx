import { useState, useEffect, act } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import laptopImg from '../assets/img/laptop.png';

import lightButtonUnpressed from '../assets/img/lightButtonUnpressed.png';
import lightButtonPressed from '../assets/img/lightButtonPressed.png';

import LightsOutMain from '../assets/img/LightsOutMain.png';
import LightsOutRight from '../assets/img/LightsOutRight.png';
import LightsOutLeft from '../assets/img/LightsOutLeft.png';
import LightsOnMain from '../assets/img/LightsOnMain.png';
import LightsOnRight from '../assets/img/LightsOnRight.png';
import LightsOnLeft from '../assets/img/LightsOnLeft.png';
import ghost from '../assets/img/ghost.png';

import MainPuzzle from './puzzles/MainPuzzle';

import { motion } from "framer-motion";


function Test() {
  const [idx, setIdx] = useState(0);
  const [mainTimer, setMainTimer] = useState(120); // Initialize timer with 120 seconds
  const [lightTimer, setLightTimer] = useState(0);
  const pictures = [lightButtonUnpressed, lightButtonPressed];
    const [ghostPosition, setGhostPosition] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    
  useEffect(() => {
    const interval = setInterval(() => {
        if (!idx) {
            setMainTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
        }
    }, 1000);

    return () => clearInterval(interval);
  }, [idx]);

  useEffect(() => {
        // Move the ghost down over time
        if (!gameOver && !idx) {
          const ghostInterval = setInterval(() => {
            setGhostPosition((prev) => {
              if (prev >= 50) {
                setGameOver(true);
                return prev;
              }
              return prev + 1; // Moves down gradually
            });
          }, 2000);
          return () => clearInterval(ghostInterval);
        }
      }, [gameOver, idx]);

function resetLight() {
    setIdx(1);
    setLightTimer(10);
    const interval = setInterval(() => {
        setLightTimer((prevTimer) => {
            if (prevTimer > 1) {
                return prevTimer - 1;
            } else {
                clearInterval(interval);
                setIdx(0);
                return 0;
            }
        });
    }, 1000);
}

  return (
    <div className="Test">
        <div style={{ marginTop: '0px', width: '100vw', marginLeft: '0', padding: '0', marginBottom: '0px' }}>
            <Carousel
            nextIcon={<span className="carousel-control-next-icon" style={{ filter: 'invert(100%)' }} />}
            prevIcon={<span className="carousel-control-prev-icon" style={{ filter: 'invert(100%)' }} />}
            wrap={false}
            indicators={false}
            controls={true}
            defaultActiveIndex={1}
            >
        {!gameOver &&  (<Carousel.Item>
            <div style={{ ...styles.LightsContainer, backgroundImage: idx ? `url(${LightsOnLeft})` : `url(${LightsOutLeft})`, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}></div>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '64px' }}>
                {Math.floor(mainTimer / 60)}:{('0' + (mainTimer % 60)).slice(-2)}
            </div>
        </Carousel.Item>)
        }
                    
        <Carousel.Item>

            <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
                <div style={{ ...styles.LightsContainer, backgroundImage: idx ? `url(${LightsOnMain})` : `url(${LightsOutMain})`, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}></div>
                {/*Ghost Image (Animated)*/}
                { !idx ? <motion.img
                    src={ghost}
                    alt="Ghost"
                    className="absolute"
                    initial={{ y: "0vh", scale: 0.05, opacity: 1 }}
                    animate={{ y: `${ghostPosition -215}vh`, scale: 0.3 + (ghostPosition / 25) * 0.25, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                /> : null }

                {/* Game Over Screen */}
                {gameOver && (
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-80 text-white" style={{ zIndex: 100 }}>
                    <h1 className="text-5xl font-bold mb-4">👻 Spooky Game Over! 👻</h1>
                    <p className="text-xl">You survived for {120 - mainTimer} seconds!</p>
                    <button
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                        onClick={() => {
                            setIdx(0);
                            setGameOver(false);
                            setMainTimer(120);
                            setGhostPosition(0);
                        }}
                    >
                        Restart Game
                    </button>
                    </div>
                )}
            </div>

            <div  
                className="bg-cover bg-center bg-no-repeat w-full h-[90vh] flex items-center justify-center mx-auto"
                style={{ backgroundImage: `url(${laptopImg})`, marginTop: '-170px', position: 'relative', zIndex: 1 }}
                >
                <MainPuzzle />
            </div>

        </Carousel.Item>

        {!gameOver && 
        (<Carousel.Item>
            <div style={{ ...styles.LightsContainer, backgroundImage: idx ? `url(${LightsOnRight})` : `url(${LightsOutRight})`, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}></div>

            <div>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '64px' }}>
                    <button className="light" onClick={resetLight} style={{ transform: 'scale(0.3)' }}>
                        <img src={pictures[idx]} alt="lightButton" />
                    </button>
                </div>
            </div>
        </Carousel.Item>
    )
    }
            
        </Carousel>
        </div>
        </div>
  );
}

export default Test;

const styles = {
    LightsContainer: {
        backgroundPosition: 'center center', // Center the image
        backgroundSize: 'cover', // Cover the whole screen width
        backgroundRepeat: 'no-repeat', // Prevent tiling
        width: '100vw', // Ensure full width
        height: '175vh', // Ensure full height
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
};

