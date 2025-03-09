// import { useState } from 'react';
// import { Carousel } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Test.css';
// import laptopImg from '../assets/img/laptop.png';
// import StartPage from './StartPage';
// import lightButton from '../assets/img/lightButton.png';
// import lightButtonPushed from '../assets/img/lightButtonPress.png';

// import backgroundImage from '../assets/img/LightsOff.png';
// import ghost from '../assets/img/ghost.png';
// import { useEffect } from 'react';

// function Test() {
//   const [idx, setIdx] = useState(0);
//   const [timer, setTimer] = useState(100); // Initialize timer with 300 seconds
//   const pictures = [lightButton, lightButtonPushed];
// // const ghostStyle: React.CSSProperties = {
// //     width: `${50 + (100 - 50) * (300 - timer) / 300}%`,
// //     height: `${50 + (100 - 50) * (300 - timer) / 300}%`,
// //     position: 'absolute',
// //     top: `${(300 - timer) / 3}%`,
// //     animation: `zoomIn 0.5s linear forwards, shake 0.5s infinite, moveDown ${4 - (timer / 100)}s linear forwards`
// // };
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   function resetLight() {
//     setIdx(1);
//     setTimeout(() => { setIdx(0) }, 1000);
//   }

//   return (
//     <div className="Test">
//         <div style={{ marginTop: '0px', width: '100vw', marginLeft: '0', padding: '0' }}>
//             <Carousel
//             nextIcon={<span className="carousel-control-next-icon" style={{ filter: 'invert(100%)' }} />}
//             prevIcon={<span className="carousel-control-prev-icon" style={{ filter: 'invert(100%)' }} />}
//             wrap={false}
//             indicators={false}
//             controls={true}
//             touch={true}
//             keyboard={true}
//             defaultActiveIndex={1}
//             >

//                 <div style={{ ...styles.container, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
//                     <div style={{ position: 'absolute', top: '10px', right: '10px', color: 'white', fontSize: '24px' }}>
//                         {Math.floor(timer / 60)}:{('0' + (timer % 60)).slice(-2)}
//                     </div>
//                     <img src={ghost} alt="ghost" style={ghostStyle} />
//                 </div>

//                 <Carousel.Item>
//                     <img src={laptopImg} alt="Second slide" style={{ width: '100%' }} />
//                 </Carousel.Item>

//                 <Carousel.Item>
//                 <div style={{ position: 'relative' }}> 
//                     <img src={laptopImg} alt="Second slide" style={{ width: '100%' }} />
//                     <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
//                     <StartPage />
//                     </div>
//                 </div>
//                 </Carousel.Item>

//       <Carousel.Item>
//         <div>
//           <div className="lightButton">
//             <button className="light" onClick={resetLight}>
//               <img src={pictures[idx]} alt="lightButton" />
//             </button>
//           </div>
//         </div>
//       </Carousel.Item>
            
//             </Carousel>
//         </div>
//         </div>
//   );
// }

// export default Test;

// const styles = {
//     container: {
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundPosition: 'center',
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         width: '100vw',
//         height: '100vh',
//         marginTop: '0px',
//         marginLeft: '0',
//         padding: '0'
//     }
// };



import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import ghost from '../assets/img/ghost.png';

const Test = () => {
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
  const [ghostPosition, setGhostPosition] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    // Timer Countdown
    if (timeLeft > 0 && !gameOver) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, gameOver]);

  useEffect(() => {
    // Move the ghost down over time
    if (!gameOver) {
      const ghostInterval = setInterval(() => {
        setGhostPosition((prev) => {
          if (prev >= 50) {
            setGameOver(true);
            return prev;
          }
          return prev + 2; // Moves down gradually
        });
      }, 2000);
      return () => clearInterval(ghostInterval);
    }
  }, [gameOver]);

  return (
    <div className="relative w-screen h-screen flex justify-center items-center">
      {/* Timer Display */}
      <div className="absolute top-4 left-4 text-black text-xl font-bold">
        Time Left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, "0")}
      </div>

      {/* Ghost Image (Animated) */}
      <motion.img
        src={ghost}
        alt="Ghost"
        className="absolute"
        initial={{ y: "-70vh", scale: 0.5, opacity: 0 }}
        animate={{ y: `${ghostPosition}vh`, scale: ghostPosition / 50, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Game Over Screen */}
      {gameOver && (
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-80 text-white">
          <h1 className="text-5xl font-bold mb-4">👻 Spooky Game Over! 👻</h1>
          <p className="text-xl">You survived for {120 - timeLeft} seconds!</p>
        </div>
      )}
    </div>
  );
};

export default Test;
