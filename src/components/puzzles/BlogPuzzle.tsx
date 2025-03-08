import Logo from '../../assets/img/google.png';

const FirstPuzzle = () => {

    const title = `Have you ever felt like something was watching you?`;
    const message = ` A fleeting shadow in the corner of your eye, a whisper when no one is there? You're not imagining it. FOUR things lurk in the darkness, and they thrive when you look away.
    Some call them hallucinations. Some say it's the mind playing tricks. But what if it's something else? Scientists have studied the phenomenon of shadow figures appearing in dimly lit rooms. They found that TWO types exist—one that watches, and one that follows.

    The watchers remain still. You might see them in your periphery, standing just outside your vision. The followers? They are different. They move when you're not looking. You take a step, and suddenly, they are EIGHT steps closer.

    People report waking up at exactly THREE a.m., feeling their breath turn cold. The room is silent, but the shadows are moving, shifting, SIX inches closer with each blink.

    But the real horror? When the light flickers, and you realize—there was never just ONE shadow.`;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-2xl text-center p-8 bg-black bg-opacity-60 rounded-lg shadow-xl">
        <img src={Logo} alt="Logo" className="w-24 mx-auto mb-2" />
        <h2 className="text-xl leading-relaxed mb-3">{title}</h2>
        <p className=" leading-relaxed">
          {message}
        </p>
      </div>
    </div>
  );
}

export default FirstPuzzle;
