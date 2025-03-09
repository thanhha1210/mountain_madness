import { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Test.css';
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
  const [mainTimer, setMainTimer] = useState(100); // Initialize timer with 300 seconds
  const [lightTimer, setLightTimer] = useState(0);
  const pictures = [lightButtonUnpressed, lightButtonPressed];
    // const ghostStyle: React.CSSProperties = {
    //     width: `${50 + (100 - 50) * (300 - timer) / 300}%`,
    //     height: `${50 + (100 - 50) * (300 - timer) / 300}%`,
    //     position: 'absolute',
    //     top: `${(300 - timer) / 3}%`,
    //     animation: `zoomIn 0.5s linear forwards, shake 0.5s infinite, moveDown ${4 - (timer / 100)}s linear forwards`
    // };

    // const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
      const [ghostPosition, setGhostPosition] = useState(0);
      const [gameOver, setGameOver] = useState(false);
    
    //   useEffect(() => {
    //     // Timer Countdown
    //     if (mainTimer > 0 && !gameOver) {
    //       const timer = setInterval(() => {
    //         setMainTimer((prev) => prev - 1);
    //       }, 1000);
    //       return () => clearInterval(timer);
    //     }
    //   }, [mainTimer, gameOver]);

  useEffect(() => {
    const interval = setInterval(() => {
        setMainTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
        // Move the ghost down over time
        if (!gameOver) {
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
      }, [gameOver]);

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

                {/* <div style={{ ...styles.container, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '10px', right: '10px', color: 'white', fontSize: '24px' }}>
                        {Math.floor(timer / 60)}:{('0' + (timer % 60)).slice(-2)}
                    </div>
                    <img src={ghost} alt="ghost" style={ghostStyle} />
                </div> */}

        <Carousel.Item>
            <div style={{ ...styles.LightsContainer, backgroundImage: idx ? `url(${LightsOnLeft})` : `url(${LightsOutLeft})`, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}></div>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '64px' }}>
                {Math.floor(mainTimer / 60)}:{('0' + (mainTimer % 60)).slice(-2)}
            </div>
        </Carousel.Item>
                    
        <Carousel.Item>
            <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
                <img 
                    src={idx ? LightsOnMain : LightsOutMain} 
                    alt="background" 
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top center', // Ensures top of image is visible
                    }}
                />
            </div>

            <div  
                className="bg-cover bg-center bg-no-repeat w-full h-[90vh] flex items-center justify-center mx-auto"
                style={{ backgroundImage: `url(${laptopImg})`, marginTop: '-170px', position: 'relative', zIndex: 1 }}
                >
                <MainPuzzle />
            </div>

            {/* <div className="relative w-screen h-screen flex justify-center items-center" style={{ marginTop: '-1700px' }}> */}

                {/*Ghost Image (Animated)*/}
                {/* <motion.img
                    src={ghost}
                    alt="Ghost"
                    className="absolute"
                    initial={{ y: "-70vh", scale: 0.2, opacity: 1 }}
                    animate={{ y: `${ghostPosition}vh`, scale: 0.3 + (ghostPosition / 50) * 0.25, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                /> */}

                {/* Game Over Screen */}
                {/* {gameOver && (
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-80 text-white">
                    <h1 className="text-5xl font-bold mb-4">👻 Spooky Game Over! 👻</h1>
                    <p className="text-xl">You survived for {120 - mainTimer} seconds!</p>
                    </div>
                )}
            </div> */}
        </Carousel.Item>
        <Carousel.Item>
            <div style={{ ...styles.LightsContainer, backgroundImage: idx ? `url(${LightsOnRight})` : `url(${LightsOutRight})`, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}></div>

            <div>
                <div className="lightButton" style={{ position: 'relative', top: -900 }}>
                    <button className="light" onClick={resetLight} style={{ transform: 'scale(0.3)' }}>
                        <img src={pictures[idx]} alt="lightButton" />
                    </button>
                </div>
            </div>
        </Carousel.Item>
            
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
        height: '100vh', // Ensure full height
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
};


// const Test = () => {
//   const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
//   const [ghostPosition, setGhostPosition] = useState(0);
//   const [gameOver, setGameOver] = useState(false);

//   useEffect(() => {
//     // Timer Countdown
//     if (timeLeft > 0 && !gameOver) {
//       const timer = setInterval(() => {
//         setTimeLeft((prev) => prev - 1);
//       }, 1000);
//       return () => clearInterval(timer);
//     }
//   }, [timeLeft, gameOver]);

//   useEffect(() => {
//     // Move the ghost down over time
//     if (!gameOver) {
//       const ghostInterval = setInterval(() => {
//         setGhostPosition((prev) => {
//           if (prev >= 50) {
//             setGameOver(true);
//             return prev;
//           }
//           return prev + 2; // Moves down gradually
//         });
//       }, 2000);
//       return () => clearInterval(ghostInterval);
//     }
//   }, [gameOver]);

//   return (
//     <div className="relative w-screen h-screen flex justify-center items-center">
//       {/* Timer Display */}
//       <div className="absolute top-4 left-4 text-black text-xl font-bold">
//         Time Left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, "0")}
//       </div>

//       {/* Ghost Image (Animated) */}
//       <motion.img
//         src={ghost}
//         alt="Ghost"
//         className="absolute"
//         initial={{ y: "-70vh", scale: 0.5, opacity: 0 }}
//         animate={{ y: `${ghostPosition}vh`, scale: ghostPosition / 50, opacity: 1 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//       />

//       {/* Game Over Screen */}
//       {gameOver && (
//         <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-80 text-white">
//           <h1 className="text-5xl font-bold mb-4">👻 Spooky Game Over! 👻</h1>
//           <p className="text-xl">You survived for {120 - timeLeft} seconds!</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Test;
