import { useState, useEffect, useRef } from 'react';

const BACKGROUNDS = [
  'images/pages/categories/entertainment/Chippy/Chippy.png',
  'images/pages/categories/entertainment/Chippy/back1.png',
  'images/pages/categories/entertainment/Chippy/back2.jpg',
  'images/pages/categories/entertainment/Chippy/back3.jpg',
  'images/pages/categories/entertainment/Chippy/back4.jpg',
  'images/pages/categories/entertainment/Chippy/back5.jpg',
  'images/pages/categories/entertainment/Chippy/back6.jpg',
  'images/pages/categories/entertainment/Chippy/back7.jpg',
  'images/pages/categories/entertainment/Chippy/back8.jpg',
  'images/pages/categories/entertainment/Chippy/back9.jpg',
  'images/pages/categories/entertainment/Chippy/back10.jpg'
];

const WheresMyChippy = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const [chippyPosition, setChippyPosition] = useState({ x: 50, y: 50 });
  const [chippyOpacity, setChippyOpacity] = useState(1);
  const [found, setFound] = useState(false);
  const [round, setRound] = useState(1);
  const audioRef = useRef(null);
  const bgMusicRef = useRef(null);

  useEffect(() => {
    startNewRound();
    
    // Capture the ref value for cleanup
    const bgMusic = bgMusicRef.current;
    
    // Start background music
    if (bgMusic) {
      bgMusic.volume = 0.3; // Set volume to 30%
      bgMusic.play().catch(error => {
        console.error('Background music playback failed:', error);
      });
    }

    // Cleanup: stop music when component unmounts
    return () => {
      if (bgMusic) {
        bgMusic.pause();
        bgMusic.currentTime = 0;
      }
    };
  }, []);

  const startNewRound = () => {
    // Random background
    const randomBg = Math.floor(Math.random() * BACKGROUNDS.length);
    setCurrentBg(randomBg);

    // Random position (keeping away from edges)
    const randomX = Math.random() * 70 + 15; // 15-85%
    const randomY = Math.random() * 70 + 15; // 15-85%
    setChippyPosition({ x: randomX, y: randomY });

    // Random opacity between 0.3 and 1
    const randomOpacity = Math.random() * 0.7 + 0.3;
    setChippyOpacity(randomOpacity);

    setFound(false);
  };

  const handleChippyClick = () => {
    setFound(true);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(error => {
        console.error('Audio playback failed:', error);
      });
    }
  };

  const handleNextRound = () => {
    setRound(round + 1);
    startNewRound();
  };

  return (
    <div className="w-full h-full relative overflow-hidden bg-black">
      <audio ref={audioRef} src="/music/Chippy/theres-my-chippy.mp3" />
      <audio ref={bgMusicRef} src="/music/Chippy/background-music.mp3" loop />

      {/* Game Title */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20 bg-blue-600 border-4 border-yellow-400 px-8 py-3 rounded-lg shadow-2xl">
        <h1 className="text-4xl font-bold text-yellow-300 text-center" style={{ 
          fontFamily: 'Impact, Arial Black, sans-serif',
          textShadow: '3px 3px 0px rgba(0,0,0,0.8)'
        }}>
          WHERE'S MY CHIPPY?
        </h1>
        <div className="text-center text-white font-bold mt-1">Round {round}</div>
      </div>

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${BACKGROUNDS[currentBg]})`,
          filter: found ? 'brightness(0.5)' : 'none',
          transition: 'filter 0.5s'
        }}
      />

      {/* Chippy */}
      {!found && (
        <img
          src="images/pages/categories/entertainment/Chippy/Chippy.png"
          alt="Chippy"
          onClick={handleChippyClick}
          className="absolute cursor-pointer hover:scale-110 transition-transform duration-200"
          style={{
            left: `${chippyPosition.x}%`,
            top: `${chippyPosition.y}%`,
            transform: 'translate(-50%, -50%)',
            opacity: chippyOpacity,
            width: '100px',
            height: 'auto',
            filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.5))'
          }}
        />
      )}

      {/* Victory Screen */}
      {found && (
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <div className="text-center animate-pulse">
            <div 
              className="text-9xl font-black text-yellow-400 mb-8 leading-tight"
              style={{
                fontFamily: 'Impact, Arial Black, sans-serif',
                textShadow: '8px 8px 0px rgba(0,0,0,1), 4px 4px 0px rgba(255,165,0,0.5)',
                letterSpacing: '8px',
                WebkitTextStroke: '3px black'
              }}
            >
              THERE'S<br/>MY CHIPPY!
            </div>
            
            <button
              onClick={handleNextRound}
              className="bg-green-600 hover:bg-green-700 text-white font-bold text-2xl px-12 py-6 rounded-lg border-4 border-green-800 shadow-2xl transition-transform hover:scale-105"
              style={{
                fontFamily: 'Impact, Arial Black, sans-serif',
                textShadow: '2px 2px 0px rgba(0,0,0,0.8)'
              }}
            >
              NEXT ROUND
            </button>
          </div>
        </div>
      )}

      {/* Instructions */}
      {!found && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 bg-black/70 text-white px-6 py-3 rounded-lg border-2 border-cyan-400">
          <p className="text-lg font-bold text-center">
            Find Chippy and click on him!
          </p>
          <p className="text-sm text-center text-cyan-300 mt-1">
            Chippy's opacity: {Math.round(chippyOpacity * 100)}%
          </p>
        </div>
      )}
    </div>
  );
};

export default WheresMyChippy;