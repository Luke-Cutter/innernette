import React, { useState, useEffect } from 'react';
import { AlertTriangle, PartyPopper, Music, Skull, Wine, Shell, Zap, Star } from 'lucide-react';

const GlitchText = ({ text, className }) => {
  return (
    <div className={`relative ${className}`}>
      <span className="absolute top-0 left-0 text-red-500 opacity-70" style={{ clipPath: 'inset(0 0 50% 0)' }}>
        {text}
      </span>
      <span className="absolute top-0 left-0 text-blue-500 opacity-70" style={{ clipPath: 'inset(50% 0 0 0)' }}>
        {text}
      </span>
      <span className="relative z-10">{text}</span>
    </div>
  );
};

const BeaverBoysConstruction = () => {
  const [visitorCount, setVisitorCount] = useState(69);
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 3));
    }, 3000);

    // Create random sparkles
    const sparkleInterval = setInterval(() => {
      setSparkles(prev => [...prev.slice(-10), {
        id: Date.now(),
        x: Math.random() * 100,
        y: Math.random() * 100
      }]);
    }, 500);

    // Audio player
    const audio = new Audio('music/beaverboys/beaverbounce.mp3');
    audio.loop = true;
    audio.volume = 0.5;
    
    // Play audio when component mounts
    audio.play().catch(err => {
      // Autoplay might be blocked by browser
      console.log('Autoplay prevented:', err);
    });

    return () => {
      clearInterval(interval);
      clearInterval(sparkleInterval);
      // Stop and cleanup audio when component unmounts
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <div className="min-h-screen p-4 relative overflow-hidden" style={{
      background: 'repeating-linear-gradient(45deg, #1a1a1a 0px, #1a1a1a 25px, #000 25px, #000 50px)',
      animation: 'backgroundScroll 20s linear infinite'
    }}>
      <style>{`
        @keyframes backgroundScroll {
          0% { background-position: 0 0; }
          100% { background-position: 100px 100px; }
        }
        @keyframes shake {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-5px, 5px) rotate(-2deg); }
          75% { transform: translate(5px, -5px) rotate(2deg); }
        }
        @keyframes flash {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes spin3d {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        @keyframes rainbowText {
          0% { color: #ff0000; }
          17% { color: #ff8800; }
          34% { color: #ffff00; }
          51% { color: #00ff00; }
          68% { color: #0088ff; }
          85% { color: #8800ff; }
          100% { color: #ff0000; }
        }
        .rainbow-text {
          animation: rainbowText 3s linear infinite;
        }
        .comic-sans {
          font-family: 'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', cursive;
        }
        .times-new-roman {
          font-family: 'Times New Roman', Times, serif;
        }
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>

      {/* Floating sparkles */}
      {sparkles.map(sparkle => (
        <Star
          key={sparkle.id}
          className="absolute text-yellow-400 animate-pulse pointer-events-none"
          size={16}
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            animation: 'flash 1s ease-in-out'
          }}
        />
      ))}

      {/* Main Container */}
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-black via-gray-900 to-black border-8 border-double border-yellow-500 rounded-lg p-8 shadow-2xl relative overflow-hidden" style={{
        boxShadow: '0 0 50px rgba(255, 255, 0, 0.5), inset 0 0 50px rgba(255, 0, 0, 0.2)'
      }}>
        
        {/* Animated construction tape top */}
        <div className="absolute top-0 left-0 w-full h-8 overflow-hidden">
          <div className="h-full bg-yellow-400" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #000 0px, #000 25px, transparent 25px, transparent 50px)',
            animation: 'backgroundScroll 2s linear infinite'
          }}></div>
        </div>

        {/* Top Banner with extra flair */}
        <div className="relative mb-12 mt-8">
          <div className="py-8 text-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-orange-500 to-red-600 opacity-30 blur-xl"></div>
            <GlitchText 
              text="UNDER CONSTRUCTION" 
              className="text-5xl font-bold text-red-500 tracking-widest relative z-10"
            />
            <div className="flex justify-center gap-4 mt-4">
              <AlertTriangle className="text-yellow-400 animate-bounce" size={32} />
              <AlertTriangle className="text-yellow-400 animate-bounce" size={32} style={{animationDelay: '0.2s'}} />
              <AlertTriangle className="text-yellow-400 animate-bounce" size={32} style={{animationDelay: '0.4s'}} />
            </div>
          </div>
        </div>

        {/* Header Logo with enhancement */}
        <div className="text-center mb-12 relative">
          <div className="relative inline-block" style={{animation: 'shake 5s ease-in-out infinite'}}>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 blur-2xl opacity-75 animate-pulse"></div>
            <img 
              src="images/pages/categories/entertainment/BeaverBoys/BeaverBoysLogo.png" 
              alt="Beaver Boys Logo" 
              className="relative z-10"
            />
          </div>
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 p-6 mt-4 relative overflow-hidden" style={{
            transform: 'skewX(-2deg)',
            boxShadow: '0 0 30px rgba(255, 0, 255, 0.5)'
          }}>
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)'
            }}></div>
            <h2 className="text-4xl font-bold text-white comic-sans relative z-10 rainbow-text">
              🎪 BEAVER BOUNCE EXPERIENCE 🎪
            </h2>
          </div>
          <div className="mt-6 relative overflow-hidden bg-black border-4 border-green-500 p-2">
            <div className="animate-pulse">
              <span className="text-green-400 font-mono text-xl">
                &lt;&lt;&lt; Coming Soon to Innernette 3.0! &gt;&gt;&gt;
              </span>
            </div>
          </div>
        </div>

        {/* Scrolling marquee warning */}
        <div className="bg-red-900 border-4 border-red-500 mb-8 overflow-hidden relative">
          <div className="whitespace-nowrap" style={{animation: 'marquee 10s linear infinite'}}>
            <span className="text-red-300 text-2xl font-bold times-new-roman inline-block px-4">
              ⚠️ WARNING ⚠️ SITE UNDER HEAVY CONSTRUCTION ⚠️ WATCH YOUR STEP ⚠️ BEAVER BOYS AT WORK ⚠️ 
            </span>
          </div>
        </div>

        {/* Construction Zone with enhanced effects */}
        <div className="grid grid-cols-2 gap-8 mb-12">
          {/* Dilly Section */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 blur-xl opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-black border-4 border-dashed border-yellow-500 p-6 overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,0,0.1) 10px, rgba(255,255,0,0.1) 20px)'
              }}></div>
              <div className="text-yellow-500 text-center relative z-10">
                <div style={{animation: 'shake 3s ease-in-out infinite'}}>
                  <img 
                    src="images/pages/categories/entertainment/BeaverBoys/Dilly.png" 
                    alt="Dilly" 
                    className="h-[350px] mt-20 mx-auto filter drop-shadow-2xl"
                    style={{filter: 'drop-shadow(0 0 20px rgba(255, 255, 0, 0.5))'}}
                  />
                </div>
                <div className="mt-6 bg-gradient-to-r from-red-900 to-orange-900 p-3 border-4 border-yellow-500 relative overflow-hidden">
                  <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-20"></div>
                  <div className="relative z-10 text-2xl font-black comic-sans">
                    <Shell className="inline-block mr-2 animate-bounce" />
                    <span className="rainbow-text">SHRIMP BOSS</span>
                    <Shell className="inline-block ml-2 animate-bounce" style={{animationDelay: '0.3s'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Krunk Section */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-purple-500 to-yellow-400 blur-xl opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-black border-4 border-dashed border-yellow-500 p-6 overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(255,0,255,0.1) 10px, rgba(255,0,255,0.1) 20px)'
              }}></div>
              <div className="text-yellow-500 text-center relative z-10">
                <div style={{animation: 'shake 3.5s ease-in-out infinite'}}>
                  <img 
                    src="images/pages/categories/entertainment/BeaverBoys/Krunk.png" 
                    alt="Krunk" 
                    className="h-[350px] mt-20 mx-auto filter drop-shadow-2xl"
                    style={{filter: 'drop-shadow(0 0 20px rgba(255, 0, 255, 0.5))'}}
                  />
                </div>
                <div className="mt-6 bg-gradient-to-r from-purple-900 to-red-900 p-3 border-4 border-yellow-500 relative overflow-hidden">
                  <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-20"></div>
                  <div className="relative z-10 text-2xl font-black comic-sans">
                    <Wine className="inline-block mr-2 animate-bounce" />
                    <span className="rainbow-text">WHITE WINE KING</span>
                    <Wine className="inline-block ml-2 animate-bounce" style={{animationDelay: '0.3s'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features List with pizzazz */}
        <div className="bg-gradient-to-br from-black via-gray-900 to-black border-4 border-yellow-500 p-6 mb-8 relative overflow-hidden" style={{
          boxShadow: '0 0 30px rgba(255, 255, 0, 0.3)'
        }}>
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(255,255,0,0.1) 20px, rgba(255,255,0,0.1) 40px)'
          }}></div>
          <h3 className="text-3xl font-bold text-red-500 mb-6 times-new-roman flex items-center justify-center relative z-10">
            <PartyPopper className="mr-3 animate-spin" style={{animationDuration: '3s'}} />
            <span className="rainbow-text">COMING SOON TO THE BOUNCE:</span>
            <PartyPopper className="ml-3 animate-spin" style={{animationDuration: '3s', animationDirection: 'reverse'}} />
          </h3>
          <div className="space-y-4 relative z-10">
            <div className="bg-gradient-to-r from-purple-900 via-purple-700 to-purple-900 p-5 border-l-8 border-purple-400 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <span className="text-purple-300 text-xl comic-sans font-bold">
                <Music className="inline mr-3 animate-bounce" />
                🍇 Sweet Berry Wine Dance Floor 🍇
              </span>
            </div>
            <div className="bg-gradient-to-r from-pink-900 via-pink-700 to-pink-900 p-5 border-l-8 border-pink-400 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <span className="text-pink-300 text-xl comic-sans font-bold">
                <Music className="inline mr-3 animate-bounce" style={{animationDelay: '0.2s'}} />
                🦐 Shrimp & White Wine Bar 🍷
              </span>
            </div>
            <div className="bg-gradient-to-r from-red-900 via-red-700 to-red-900 p-5 border-l-8 border-red-400 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <span className="text-red-300 text-xl comic-sans font-bold">
                <Music className="inline mr-3 animate-bounce" style={{animationDelay: '0.4s'}} />
                👑 Exclusive Beaver Boys VIP Lounge 👑
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Info Section */}
        <div className="bg-black border-4 border-yellow-500 p-6 space-y-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,0,0.3) 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}></div>
          
          {/* System Requirements */}
          <div className="text-center text-green-400 font-mono text-sm bg-gray-900 p-4 border-2 border-green-500 relative z-10">
            <p className="text-lg font-bold mb-2 text-green-300">⚙️ SYSTEM REQUIREMENTS ⚙️</p>
            <p className="animate-pulse">Innernette Explorer 6.0 or Higher</p>
            <p>Resolution: 800x600 (Best viewed in 640x480)</p>
            <p>16-bit Color Depth Minimum</p>
            <p>Sound Blaster Compatible Audio Card Required</p>
            <p className="mt-2 text-yellow-400">WARNING: May cause seizures in susceptible individuals</p>
          </div>

          {/* Visitor Counter */}
          <div className="text-center relative z-10">
            <div className="inline-block bg-black px-6 py-3 border-4 border-green-500 relative overflow-hidden" style={{
              boxShadow: '0 0 20px rgba(0, 255, 0, 0.5)'
            }}>
              <div className="absolute inset-0 bg-green-500 opacity-10 animate-pulse"></div>
              <p className="text-green-400 font-mono text-2xl font-bold relative z-10">
                <Zap className="inline mr-2 text-yellow-400" />
                [Visitors: {String(visitorCount).padStart(6, '0')}]
                <Zap className="inline ml-2 text-yellow-400" />
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center space-y-3 relative z-10">
            <p className="text-red-400 times-new-roman text-xl font-bold">
              © 2002 Beaver Boys Entertainment LLC
            </p>
            <p className="text-yellow-400 comic-sans text-2xl font-bold animate-pulse">
              🎉 For your health! 🎉
            </p>
            <div className="flex justify-center gap-6">
              <Skull className="text-red-500 animate-pulse" size={32} />
              <AlertTriangle className="text-yellow-400 animate-bounce" size={32} />
              <Star className="text-purple-500 animate-spin" size={32} style={{animationDuration: '3s'}} />
              <AlertTriangle className="text-yellow-400 animate-bounce" size={32} />
              <Skull className="text-red-500 animate-pulse" size={32} />
            </div>
          </div>

          {/* Classic 'Made With' Banner */}
          <div className="text-center text-sm space-x-2 relative z-10 comic-sans">
            <span className="text-gray-400">🛠️ Made with:</span>
            <span className="text-yellow-400 font-bold">Mole</span>
            <span className="text-gray-500">|</span>
            <span className="text-red-400 font-bold">Acrylic Paint</span>
            <span className="text-gray-500">|</span>
            <span className="text-blue-400 font-bold">Word Art</span>
            <span className="text-gray-500">|</span>
            <span className="text-purple-400 font-bold">Gum</span>
          </div>

          {/* Best viewed in badge */}
          <div className="text-center relative z-10">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 border-2 border-white text-white text-xs font-bold">
              Best viewed in Innernette Navigator 4.0 (Unreleased)
            </div>
          </div>
        </div>

        {/* Animated construction tape bottom */}
        <div className="absolute bottom-0 left-0 w-full h-8 overflow-hidden">
          <div className="h-full bg-yellow-400" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #000 0px, #000 25px, transparent 25px, transparent 50px)',
            animation: 'backgroundScroll 2s linear infinite reverse'
          }}></div>
        </div>
      </div>
    </div>
  );
};

export default BeaverBoysConstruction;