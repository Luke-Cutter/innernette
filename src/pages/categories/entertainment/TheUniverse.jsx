import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Star, Moon, Sun, Eye, Flashlight, Clock, Satellite, Sparkles, Hand } from 'lucide-react';

const UniverseExperience = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isFlashlightOn, setIsFlashlightOn] = useState(false);
  const [tubeLength, setTubeLength] = useState(1);
  const [showButterflies, setShowButterflies] = useState(false);
  const [hotdogStars, setHotdogStars] = useState([]);
  const [telescopeView, setTelescopeView] = useState(false);
  
  const quotes = useMemo(() => [
    "The universe is a little bit like the human hand...",
    "You're dark and you're massive and you have a black hole...",
    "If you could put the universe into a tube, you'd end up with a very long tube...",
    "Picture a hot dog bun and throw all the stars into a bag...",
    "When I was a child, there were 9 planets, but there are now 90 planets...",
    "The ultimate fate of the universe generates butterflies in my stomach...",
    "That's just your neighbor shining a flashlight into your yard looking for coons...",
    "I'm teaching your son about the universe with my flashlight...",
    "I do swirls on his wall like a comet's tail..."
  ], []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote(prev => (prev + 1) % quotes.length);
      setShowButterflies(prev => !prev);
    }, 5000);
    return () => clearInterval(timer);
  }, [quotes]);

  const StarField = useCallback(() => {
    const icons = [Star, Sun, Moon, Sparkles];
    return (
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(100)].map((_, i) => {
          const RandomIcon = icons[Math.floor(Math.random() * icons.length)];
          return (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            >
              <RandomIcon className={`w-${Math.floor(Math.random() * 2) + 2} h-${Math.floor(Math.random() * 2) + 2} ${
                RandomIcon === Sun ? 'text-yellow-400' :
                RandomIcon === Moon ? 'text-gray-200' :
                RandomIcon === Sparkles ? 'text-blue-200' :
                'text-yellow-200'
              }`} />
            </div>
          );
        })}
      </div>
    );
  }, []);

  const Butterfly = useCallback(() => (
    <div className="absolute animate-butterfly">
      <svg width="20" height="20" viewBox="0 0 20 20" className="text-pink-400">
        <path d="M10 3 L15 8 L10 13 L5 8 Z" fill="currentColor">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 10 10"
            to="360 10 10"
            dur="3s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  ), []);

  const UniverseTube = useCallback(() => (
    <div className="relative h-32 bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 rounded-full p-4 overflow-hidden">
      <div 
        className="absolute inset-0 flex items-center transition-transform duration-1000"
        style={{ transform: `scaleX(${tubeLength * 2})` }}
      >
        {[...Array(20)].map((_, i) => (
          <Star key={i} className="w-6 h-8 text-yellow-200 mx-1 animate-pulse" />
        ))}
      </div>
    </div>
  ), [tubeLength]);

  const HotDogBun = useCallback(() => {
    const addStar = () => {
      setHotdogStars(prev => [...prev, Math.random()]);
    };

    return (
      <div className="relative w-full h-32 cursor-pointer" onClick={addStar}>
        <div className="absolute inset-x-0 h-16 bg-yellow-800 rounded-t-full"></div>
        <div className="absolute inset-x-0 top-12 h-20 bg-yellow-600 rounded-b-full">
          {hotdogStars.map((pos, i) => (
            <Star 
              key={i} 
              className="absolute ml-12 w-9 h-9 text-yellow-200 animate-bounce"
              style={{ left: `${pos * 85}%`, top: '-40%' }}
            />
          ))}
        </div>
      </div>
    );
  }, [hotdogStars]);

  const TelescopeView = useCallback(() => (
    <div className="relative w-full h-96 bg-black rounded-full overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {telescopeView ? (
          <div className="relative">
            <div className="text-6xl">🌟</div>
            <div className="absolute top-20 left-0 text-xs text-gray-400">
              (This star isn't actually there)
            </div>
          </div>
        ) : (
          <div className="text-6xl">👀</div>
        )}
      </div>
    </div>
  ), [telescopeView]);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-purple-900 to-blue-900 text-white p-8 overflow-hidden">
      <StarField />
      
      {showButterflies && (
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 2}s infinite`
              }}
            >
              <Butterfly />
            </div>
          ))}
        </div>
      )}
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="text-6xl font-bold text-center mb-12 animate-pulse">
          The Universe
          <span className="block text-2xl mt-2 text-yellow-200">What a concept.</span>
        </h1>

        {/* Quote Display */}
        <div className="bg-black/50 p-8 rounded-lg backdrop-blur-sm mb-12">
          <p className="text-xl italic text-center min-h-12 flex items-center justify-center transition-opacity duration-500">
            {quotes[currentQuote]}
          </p>
        </div>

        {/* Universe Tube Experiment */}
        <div className="mb-12 bg-black/50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">The Universe Tube Experiment</h2>
          <div className="flex flex-col gap-4">
            <UniverseTube />
            <input 
              type="range" 
              min="1" 
              max="3" 
              step="0.1" 
              value={tubeLength} 
              onChange={(e) => setTubeLength(Number(e.target.value))}
              className="w-full"
            />
            <p className="text-center italic">
              Current tube length: {tubeLength}x the size of the universe
            </p>
          </div>
        </div>

        {/* Hot Dog Bun Theory */}
        <div className="mb-12 bg-black/50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">The Hot Dog Bun Theory</h2>
          <p className="mb-4 italic">Click to add stars to the cosmic bun...</p>
          <HotDogBun />
        </div>

        {/* Interactive Elements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-purple-900/50 p-6 rounded-lg text-center hover:bg-purple-800/50 transition-colors">
            <Clock className="w-12 h-12 mx-auto mb-4 text-blue-400 animate-spin-slow" />
            <h3 className="text-xl font-bold mb-2">Speed of Light Time</h3>
            <p>Really, really, really, really fun to think about</p>
          </div>

          <div className="bg-purple-900/50 p-6 rounded-lg text-center hover:bg-purple-800/50 transition-colors">
            <div className="flex justify-center gap-4 mb-4">
              <Eye className="w-12 h-12 text-blue-400" />
              <Eye className="w-12 h-12 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">360° Eyeball</h3>
            <p>If you could see the other side...</p>
          </div>

          <div 
            className="bg-purple-900/50 p-6 rounded-lg text-center hover:bg-purple-800/50 transition-colors cursor-pointer"
            onClick={() => setIsFlashlightOn(!isFlashlightOn)}
          >
            <Flashlight 
              className={`w-12 h-12 mx-auto mb-4 ${isFlashlightOn ? 'text-yellow-400 animate-pulse' : 'text-gray-400'}`} 
            />
            <h3 className="text-2xl font-bold mb-2">Cosmic Flashlight</h3>
            <p>Teaching astronomy from the bushes</p>
          </div>
        </div>

        {/* Telescope Experience */}
        <div className="mb-12 bg-black/50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
            <Satellite className="w-8 h-8" />
            The Backyard Observer
          </h2>
          <button 
            className="w-full mb-4 bg-purple-900 hover:bg-purple-800 p-2 rounded"
            onClick={() => setTelescopeView(!telescopeView)}
          >
            {telescopeView ? "Close Eye" : "Look Through Telescope"}
          </button>
          <TelescopeView />
        </div>

        {/* Hand Diagram */}
        <div className="bg-black/50 p-8 rounded-lg backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">Universal Hand Map</h2>
          <div className="relative w-96 h-96 mx-auto flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="100%" height="100%" viewBox="0 0 200 200">
                <defs>
                  <radialGradient id="cosmic-hand-gradient">
                    <stop offset="0%" stopColor="rgba(199, 210, 254, 0.3)" />
                    <stop offset="100%" stopColor="rgba(99, 102, 241, 0.1)" />
                  </radialGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <rect x="0" y="0" width="200" height="200" fill="url(#cosmic-hand-gradient)" rx="10"/>
              </svg>
            </div>
            
            {/* Base Hand */}
            <Hand className="w-64 h-64 stroke-blue-400 stroke-2 relative z-10" />
            
            {/* Labeled Areas with Sparkle Effects */}
            <div className="absolute top-12 left-1/4 transform -translate-x-1/2">
            <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
            <p className="text-xs mt-1">Undiscovered Worlds</p>
            </div>
            
            <div className="absolute top-8 right-40">
            <p className="text-xs mt-1">Sector 8</p>
              <Sparkles className="w-6 h-6 text-blue-400 animate-pulse" />
            </div>
            
            <div className="absolute bottom-44 left-5">
            <p className="text-xs mt-1">Grauman's Center</p>
              <Star className="w-6 h-6 text-yellow-400 animate-pulse" />
              
            </div>
            
            <div className="absolute bottom-64 right-9">
            <p className="text-xs mt-1">Tittleman's Crest</p>
              <Moon className="w-6 h-6 text-gray-400 animate-pulse" />
            </div>
            
            {/* Cosmic Effect Overlay */}
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `twinkle ${2 + Math.random() * 3}s infinite`
                }}
              >
                <Star 
                  className="w-2 h-2 text-yellow-200 animate-pulse" 
                  style={{ animationDelay: `${Math.random() * 2}s` }}
                />
              </div>
            ))}
          </div>
          
          <style jsx>{`
            @keyframes twinkle {
              0%, 100% { opacity: 0.2; transform: scale(0.8); }
              50% { opacity: 1; transform: scale(1.2); }
            }
          `}</style>
        </div>
      </div>

      {isFlashlightOn && (
        <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none">
          <div 
            className="absolute w-96 h-96 rounded-full bg-gradient-radial from-yellow-200/20 to-transparent"
            style={{
              left: `calc(50% - 12rem)`,
              top: `calc(50% - 12rem)`,
              animation: 'flashlight-sweep 5s infinite'
            }}
          />
        </div>
      )}

      <style jsx>{`
        @keyframes butterfly {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -20px); }
        }
        @keyframes flashlight-sweep {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .animate-butterfly {
          animation: butterfly 3s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default UniverseExperience;