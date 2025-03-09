import { useEffect, useState } from "react";
import { ProgressBar, Button } from "react-bootstrap";
import "./BarPuzzle.css";

const BarPuzzle = ({ setNotifyUser }: { setNotifyUser: (value: boolean) => void }) => {
    const initialLevels = [100, 100, 100, 100]; // Bars start full
    const getRandomDepletionRate = () => Math.random() * (0.15 - 0.1) + 0.1; // Random slow depletion rate
    const depletionRates = initialLevels.map(() => getRandomDepletionRate());

    const [levels, setLevels] = useState(initialLevels);

    useEffect(() => {
        const interval = setInterval(() => {
            setLevels((prevLevels) =>
                prevLevels.map((level, i) => Math.max(0, level - depletionRates[i]))
            );
            if (levels.some((level) => level < 20)) {
                setNotifyUser(true);
                console.log("Notify user");
            }
        }, 100);

        return () => clearInterval(interval);
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
                                    backgroundColor: level < 20 ? "red" : "dodgerblue",
                                }}
                            ></div>
                        </div>
                        <Button onClick={() => handleRefill(i)} className="fill-button">
                            Fill
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BarPuzzle;
