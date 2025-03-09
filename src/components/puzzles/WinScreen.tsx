import ReactAudioPlayer from 'react-audio-player';
import { useNavigate } from 'react-router-dom';

const WinScreen = ({onStartScreen} : {onStartScreen: () => void}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/home');
    };

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center text-black relative">
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-80 text-white" style={{ zIndex: 100 }}>
            <h1 className="text-2xl">Congratulations!</h1>
            <p className="text-lg">You have escaped the nightmare!</p>
            </div>
            <ReactAudioPlayer
                src="src/assets/gameOver.mp3"
                autoPlay
                volume={1}
            />
            
            <button
                className='text-sm border border-black px-8 py-3 rounded-lg absolute transition-all font-mono shadow-lg tracking-widest z-0'
                onClick={handleClick}
            >
                Go to start
            </button>
        </div>
    )
}

export default WinScreen;