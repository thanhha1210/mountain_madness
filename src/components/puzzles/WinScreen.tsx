import ReactAudioPlayer from 'react-audio-player';

const WinScreen = ({onStartScreen} : {onStartScreen: () => void}) => {

    const handleClick = () => {
        onStartScreen();
    };

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center text-black relative">
            {/* <div className="flex flex-col items-center mb-6 z-10 w-[60%]">
            </div> */}
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