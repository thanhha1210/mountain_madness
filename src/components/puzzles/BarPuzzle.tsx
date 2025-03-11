import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import ReactAudioPlayer from "react-audio-player"; // import react audio player
import "./BarPuzzle.css";

const BarPuzzle = () => {
  const initialLevels = [100, 100, 100, 100]; // Bars start full
  const getRandomDepletionRate = () => Math.random() * (0.15 - 0.1) + 0.1; // Random slow depletion rate
  const depletionRates = initialLevels.map(() => getRandomDepletionRate());

  const [levels, setLevels] = useState(initialLevels);
  const [alarm, setAlarm] = useState(false); // Track if alarm is active

  useEffect(() => {
    const interval = setInterval(() => {
      setLevels((prevLevels) => {
        const newLevels = prevLevels.map((level, i) => Math.max(0, level - depletionRates[i]));

        // Check if any level is below 20 and notify user (trigger the alarm)
        if (newLevels.some((level) => level < 20)) {
          setAlarm(true); // Turn on the alarm if any level is under 20
        } else if (newLevels.every((level) => level > 20)) {
          setAlarm(false); // Turn off the alarm if all levels are above 20
        }

        return newLevels;
      });
    }, 100);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const handleRefill = (index: number) => {
    setLevels((prevLevels) =>
      prevLevels.map((level, i) => (i === index ? Math.min(100, level + 30) : level))
    );
  };

  return (
    <div className="game-container">
      <h2>Keep the bars filled!</h2>
      <div className="progress-bars">
        {levels.map((level, i) => (
          <div key={i} className="progress-wrapper">
            <div className="progress-container">
              <div
                className="progress-bar-vertical"
                style={{
                  height: `${level}%`, // Fill from bottom to top
                  backgroundColor: level < 20 ? "red" : "limegreen",
                }}
              ></div>
            </div>
            <Button onClick={() => handleRefill(i)} className="fill-button">
              Boost
            </Button>
          </div>
        ))}
      </div>

      {/* Play the alarm sound when alarm is active */}
      {alarm && (
        <ReactAudioPlayer
          src="src/assets/alarm.mp3"
          autoPlay
          loop
          volume={0.5}
        />
      )}
    </div>
  );
};

export default BarPuzzle;
