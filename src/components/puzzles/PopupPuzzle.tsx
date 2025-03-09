import { useEffect, useState } from 'react';
import popupImage from '../../assets/img/popup.png';
import popupBlank from '../../assets/img/popupBlank.png';

function PopupPuzzle({ onReturnToMenu, count = 21 } : { onReturnToMenu: () => void, count?: number }) {
    const [pass, setPass] = useState(0);
    type Button ={
        id: number;
        isVisible: boolean;
        y: number;
        x: number;
    }

    const [buttons, setButtons] = useState<Button[]>([]);

    useEffect(() => {
        const passCode = Math.floor(Math.random()*10);
        setPass(passCode);
        const buttons = Array.from({ length: count }, (_, i) => ({
            id: i,
            isVisible: true,
            y: Math.random() * window.innerHeight/2,
            x: Math.random() * window.innerWidth/2,
        }));
        setButtons(buttons);
    }, [count]);

    const handleRemove = (id: number) => {
        setButtons((prevButtons) => prevButtons.filter((button) => button.id !== id));
    };

    return (
        <div className="w-full flex justify-center items-center">
            <div className="flex flex-col items-center p-6 w-[90%] md:w-[50%] rounded-lg shadow-lg">
                <div className="flex items-center justify-center w-full mb-6">
                <button
                    onClick={onReturnToMenu}
                    className="border border-1 border-black py-2 px-6 rounded-md"
                >
                    Home
                </button>
                </div>
            </div>
            {buttons.map((button) => (
                <button
                    key = {button.id}
                    onClick={() => handleRemove(button.id)}
                    style = {{
                        position: "absolute", 
                        left: `${button.x}px`, 
                        top: `${button.y}px`, 
                        zIndex: button.id === 0 ? 1 : 10,
                    }}>
                        <img src={button.id === 0 ? popupBlank : popupImage} alt="Popup"/>
                        {button.id === 0 && (
                            <span
                            style={{
                                position: "absolute",
                                color: "black",
                                fontSize: "24px",
                                fontWeight: "bold",
                                top: "10px",
                                left: "50%",
                                transform: "translateX(-50%)",
                            }}
                        >{pass}</span>
                        )}
                        </button>
            ))}
        </div>
    );
}
export default PopupPuzzle;
