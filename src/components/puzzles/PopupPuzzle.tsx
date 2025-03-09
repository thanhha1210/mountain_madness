import { useEffect, useState } from 'react';
import popupImage from '../../assets/img/popup.png';
import popupBlank from '../../assets/img/popupBlank.png';


function PopupPuzzle({ count = 21 }) {
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
            y: Math.random() * window.innerHeight,
            x: Math.random() * window.innerWidth,
        }));
        setButtons(buttons);
    }, [count]);

    const handleRemove = (id: number) => {
        setButtons((prevButtons) => prevButtons.filter((button) => button.id !== id));
    };

    return (
        <div>
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
