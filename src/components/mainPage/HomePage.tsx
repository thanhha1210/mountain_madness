import { useState, useEffect } from "react";
import { FaPlay, FaMusic, FaBook, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import horrorMusic from "../../assets/songs/horror.mp3";
import Desktop from "../../assets/img/window.webp";  // Your desktop wallpaper image

const Home = () => {
  const [musicOn, setMusicOn] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [showInstructions, setShowInstructions] = useState(false); // State for showing/hiding the instructions
  const navigate = useNavigate();

  // Initialize the audio
  useEffect(() => {
    const newAudio = new Audio(horrorMusic);
    newAudio.loop = true;
    setAudio(newAudio);

    return () => {
      newAudio.pause();
    };
  }, []);

  const toggleMusic = () => {
    if (audio) {
      if (musicOn) {
        audio.pause();
      } else {
        audio.play();
      }
      setMusicOn(!musicOn);
    }
  };


  // Button actions
  const buttons = [
    { label: "Play", action: () => navigate("/test"), icon: <FaPlay /> },
    { label: "Music", action: toggleMusic, icon: musicOn ? <FaTimes /> : <FaMusic /> }, 
    { label: "Instructions", action: () => setShowInstructions(true), icon: <FaBook /> }
  ];

  return (
    <div
      className="relative h-screen"
      style={{
        backgroundImage: `url(${Desktop})`,  
        backgroundSize: "cover", 
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat", 
        width: "100vw"
      }}
    >
     
      {buttons.map((button, index) => {
        return (
          <button
            key={index}
            onClick={button.action}
            className=" px-6 py-3 text-xl bg-gray-800 text-white rounded-lg shadow-lg flex items-center gap-3 hover:bg-gray-700 focus:outline-none mx-4 mb-4"
          >
            {button.icon}
            <span>{button.label}</span>
          </button>
        );
      })}

    
    {showInstructions && (
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/8 p-8 bg-white text-black rounded-xl shadow-lg border-2 border-black w-3/4 max-w-2xl">
        <button
          onClick={() => setShowInstructions(false)}
          className="absolute top-2 right-2 text-black text-2xl focus:outline-none"
        >
          <FaTimes />
        </button>
        <h1 className="text-4xl font-extrabold mb-4">📜 How to Survive</h1> 
        <div className="p-6 bg-blue-100 text-left">
          <p>🧩 <strong>Find Hidden OTP:</strong> Solve puzzles to uncover secret codes.</p>
          <p>💡 <strong>Use Hints:</strong> Each puzzle provides a clue—combine them wisely!</p>
          <p>🚪 <strong>Block the Zombies:</strong> Click the glowing bulb to close the door and delay zombies for 10 minutes.</p>
          <p>🏃 <strong>Escape Before It's Too Late:</strong> Solve all puzzles before the zombies reach you!</p>
        </div>
      </div>
    )}

    </div>
  );
}

export default Home;
