import React, { useState, useEffect } from 'react';

const TimAndEricSite = () => {
  const [showHackWarning, setShowHackWarning] = useState(false);
  const [isMelting, setIsMelting] = useState(false);
  const [meltPixels, setMeltPixels] = useState([]);
  const [showHackedPage, setShowHackedPage] = useState(false);

  useEffect(() => {
    // Show hack warning after a delay
    const timer = setTimeout(() => {
      setShowHackWarning(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Popup comes back after 2 seconds
    if (!showHackWarning && !isMelting) {
      const timer = setTimeout(() => {
        setShowHackWarning(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showHackWarning, isMelting]);

  useEffect(() => {
    if (isMelting) {
      const pixelSize = 20;
      const cols = Math.ceil(window.innerWidth / pixelSize);
      const rows = Math.ceil(window.innerHeight / pixelSize);
      
      const pixels = [];
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          pixels.push({
            id: `${row}-${col}`,
            x: col * pixelSize,
            y: row * pixelSize,
            delay: Math.random() * 2000 + row * 50,
            fallDistance: Math.random() * 300 + 200
          });
        }
      }
      setMeltPixels(pixels);

      // Show hacked page after melt completes
      const timer = setTimeout(() => {
        setShowHackedPage(true);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isMelting]);

  const handleHackCancel = () => {
    setShowHackWarning(false);
  };

  const handleHackOk = () => {
    setShowHackWarning(false);
    setIsMelting(true);
  };

  return (
    <div className="w-full h-full bg-cyan-400 relative overflow-y-auto" style={{ fontFamily: 'Arial, sans-serif' }}>
      <style>{`
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
        .blink-text {
          animation: blink 0.8s infinite;
        }
        @keyframes pixelFall {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(var(--fall-distance)); opacity: 0.3; }
        }
        .pixel-block {
          position: absolute;
          width: 20px;
          height: 20px;
          background: cyan;
          animation: pixelFall 3s ease-in forwards;
        }
        .pixel-text {
          font-family: 'Courier New', monospace;
          font-weight: bold;
          letter-spacing: 3px;
          image-rendering: pixelated;
          -webkit-font-smoothing: none;
          text-shadow: 2px 2px 0px rgba(0,0,0,0.8);
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .fade-in {
          animation: fadeIn 1s ease-in;
        }
      `}</style>

      {/* Show hacked page after melt */}
      {showHackedPage ? (
        <div className="w-full min-h-full flex items-center justify-center bg-red-600 fade-in py-8">
          <div className="text-center px-8 max-w-2xl">
            <h1 className="text-6xl font-bold text-white mb-6 pixel-text">
              TIM AND ERIC
            </h1>
            <h2 className="text-4xl font-bold text-yellow-300 mb-8 pixel-text">
              THE SITE HAS BEEN HACKED
            </h2>
            
            <div className="bg-black border-4 border-yellow-300 p-8 mb-6">
              <p className="text-2xl text-white mb-4 font-bold">
                CINCO™ Apologizes
              </p>
              <div className="text-6xl mb-4">
                🪙🪙🪙🪙🪙🪙🪙🪙🪙🪙🪙🪙
              </div>
              <p className="text-xl text-cyan-400 mb-2">
                Here are <span className="text-yellow-300 font-bold">12 CINCO™ Coins</span> for your H'oar
              </p>
              <p className="text-lg text-lime-400 mt-4">
                They will arrive in <span className="blink-text font-bold">19-72 weeks</span>
              </p>
            </div>

            <div className="bg-yellow-300 border-4 border-black p-6">
              <p className="text-2xl text-red-600 font-bold mb-2">
                No address required.
              </p>
              <p className="text-3xl text-black font-bold blink-text">
                We know where you live.
              </p>
            </div>

            <p className="text-white text-sm mt-6 italic">
              Thank you for using CINCO™ INNERNETTE Services
            </p>
          </div>
        </div>
      ) : (
        <>
          {/* Pixelated melting effect */}
          {isMelting && (
            <div className="fixed inset-0 z-30 pointer-events-none">
              {meltPixels.map((pixel) => (
                <div
                  key={pixel.id}
                  className="pixel-block"
                  style={{
                    left: `${pixel.x}px`,
                    top: `${pixel.y}px`,
                    animationDelay: `${pixel.delay}ms`,
                    '--fall-distance': `${pixel.fallDistance}px`
                  }}
                />
              ))}
            </div>
          )}

      {/* Main Content */}
      <div className={`p-4 ${isMelting ? 'blur-sm' : ''}`}>
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-5xl font-bold text-blue-700 mb-2">
            WELCOME TO TIMANDERIC.COM
          </h1>
          <p className="text-sm text-blue-900 italic mb-6">
            (The INNERNETTE - 100% Offline Since 1996!)
          </p>
          
          {/* Simple button links */}
          <div className="flex justify-center gap-2 mb-6 flex-wrap">
            <button className="px-4 py-1 bg-gray-300 border-2 border-black text-black">
              Guestbook
            </button>
            <button className="px-4 py-1 bg-gray-300 border-2 border-black text-black">
              Contact Us
            </button>
            <button className="px-4 py-1 bg-gray-300 border-2 border-black text-black">
              Links
            </button>
            <button className="px-4 py-1 bg-gray-300 border-2 border-black text-black">
              About us
            </button>
          </div>
        </div>

        {/* Main content area - simple boxes */}
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Welcome section */}
          <div className="bg-white border-2 border-black p-4">
            <h2 className="text-2xl text-blue-600 font-bold mb-2">Welcome</h2>
            <p className="text-black">
              Hello and welcome to our website on the INNERNETTE! No internet connection required! 
              This is the best place on the offline web to find out about Tim and Eric. 
              Make sure to sign our guestbook (saved locally to your hard drive)!
            </p>
          </div>

          {/* Latest News */}
          <div className="bg-white border-2 border-black p-4">
            <h2 className="text-2xl text-blue-600 font-bold mb-2">Latest News</h2>
            <div className="space-y-1 text-black">
              <p><span className="blink-text text-red-600">★</span> New episode coming soon (on VHS)!</p>
              <p><span className="blink-text text-red-600">★</span> Check out our merchandise (mail order only)</p>
              <p><span className="blink-text text-red-600">★</span> Tour dates announced (in your local newspaper)!</p>
            </div>
          </div>

          {/* Quote */}
          <div className="text-center my-4">
            <p className="text-lg text-blue-800 italic">
              ✿✿✿ The INNERNETTE: Like the Internet, but OFFLINE! ✿✿✿
            </p>
          </div>

          {/* Simple image placeholders */}
          <div className="flex justify-center gap-4 flex-wrap">
            <div className="w-32 h-32 bg-lime-400 border-2 border-black flex items-center justify-center">
              <span className="text-xs">IMAGE<br/>(loaded from disk)</span>
            </div>
            <div className="w-32 h-32 bg-blue-500 border-2 border-black flex items-center justify-center">
              <span className="text-xs text-white">IMAGE<br/>(no buffering!)</span>
            </div>
            <div className="w-32 h-32 bg-pink-400 border-2 border-black flex items-center justify-center">
              <span className="text-xs">IMAGE<br/>(instant load)</span>
            </div>
          </div>

          {/* Weather widget */}
          <div className="bg-white border-2 border-black p-4 max-w-xs mx-auto">
            <h3 className="text-center text-xl font-bold mb-2">WEATHER</h3>
            <div className="text-center">
              <div className="text-6xl mb-2">☀️</div>
              <p className="text-3xl font-bold">72°</p>
              <p>Sunny (updated manually)</p>
            </div>
          </div>

          {/* Innernette info box */}
          <div className="bg-yellow-200 border-2 border-black p-3 text-center">
            <p className="text-sm font-bold">
              🌟 NO INTERNET CONNECTION NEEDED! 🌟
            </p>
            <p className="text-xs mt-1">
              Enjoy browsing the INNERNETTE completely offline!
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-black">
          <p>Last updated: 01/01/1998 (manually)</p>
          <p className="blink-text">Visitors: 000042 (counter stored locally)</p>
          <p className="mt-2">🏠 🌐 ✉️</p>
          <p className="text-xs mt-2 italic">Powered by INNERNETTE Technology™</p>
        </div>
      </div>

      {/* Hack Warning Popup */}
      {showHackWarning && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-40">
          <div className="bg-black border-4 border-cyan-400 p-6 w-96">
            {/* Skull icons */}
            <div className="flex justify-center gap-6 mb-4">
              <div className="text-cyan-400 text-5xl">💀</div>
              <div className="text-cyan-400 text-5xl">💀</div>
              <div className="text-cyan-400 text-5xl">💀</div>
            </div>
            
            {/* Warning text - pixelated style */}
            <div className="text-center mb-6">
              <p className="pixel-text text-red-500 text-2xl font-bold mb-2 blink-text">
                WARNING!
              </p>
              <p className="pixel-text text-lime-400 text-xl font-bold">
                YOU ARE BEING HACKED!
              </p>
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4">
              <button
                onClick={handleHackOk}
                className="px-8 py-2 bg-cyan-400 border-2 border-white text-black font-bold"
              >
                OK
              </button>
              <button
                onClick={handleHackCancel}
                className="px-8 py-2 bg-cyan-400 border-2 border-white text-black font-bold"
              >
                CANCEL
              </button>
            </div>
          </div>
        </div>
      )}
        </>
      )}
    </div>
  );
};

export default TimAndEricSite;