import React, { useState, useEffect } from 'react';
import { DollarSign, Sparkles, Star } from 'lucide-react';

const GameShow = () => {
  const [prize, setPrize] = useState("11509000000.00");
  const [confetti, setConfetti] = useState([]);
  
  useEffect(() => {
    const prizeInterval = setInterval(() => {
      const baseAmount = "11509";
      const randomDigits = Math.floor(Math.random() * 999999).toString().padStart(6, '0');
      setPrize(baseAmount + randomDigits + ".00");
    }, 100);

    return () => clearInterval(prizeInterval);
  }, []);

  useEffect(() => {
    const confettiInterval = setInterval(() => {
      const newConfetti = Array.from({ length: 5 }, () => ({
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        color: ['bg-yellow-400', 'bg-green-400', 'bg-purple-400', 'bg-pink-400', 'bg-red-400'][Math.floor(Math.random() * 5)],
        delay: Math.random() * 2
      }));
      setConfetti(prev => [...prev, ...newConfetti].slice(-30));
    }, 500);

    return () => clearInterval(confettiInterval);
  }, []);

  const dollarPositions = [
    { left: 2, top: 2, size: 45, rotation: -15 },
    { left: 4, top: 45, size: 35, rotation: -30 },
    { left: 7, top: 85, size: 25, rotation: 25 },
    { left: 15, top: 15, size: 32, rotation: -15 },
    { left: 35, top: 10, size: 36, rotation: 20 },
    { left: 55, top: 20, size: 32, rotation: -10 },
    { left: 75, top: 15, size: 36, rotation: 15 },
    { left: 25, top: 40, size: 36, rotation: 25 },
    { left: 45, top: 35, size: 32, rotation: -20 },
    { left: 65, top: 45, size: 36, rotation: 10 },
    { left: 85, top: 35, size: 32, rotation: -15 },
    { left: 20, top: 65, size: 36, rotation: 15 },
    { left: 40, top: 70, size: 32, rotation: -25 },
    { left: 60, top: 60, size: 36, rotation: 20 },
    { left: 80, top: 65, size: 32, rotation: -10 },
    { left: 82, top: 2, size: 45, rotation: -17 },
    { left: 91, top: 45, size: 35, rotation: -40 },
    { left: 93, top: 85, size: 25, rotation: 65 }
  ];

  return (
    <div className="h-full relative flex flex-col overflow-hidden">
      {/* Animated background with stripes */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500">
        {/* Animated diagonal stripes */}
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 40px,
            rgba(255, 255, 255, 0.1) 40px,
            rgba(255, 255, 255, 0.1) 80px
          )`
        }}>
        </div>

        {/* Spotlight beams */}
        <div className="absolute inset-0 overflow-hidden">
          {[1, 2, 3, 4].map((_, i) => (
            <div
              key={i}
              className="absolute w-40 h-full bg-gradient-to-b from-yellow-200/30 via-yellow-200/10 to-transparent transform -skew-x-12 animate-pulse"
              style={{
                left: `${15 + i * 20}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>

        {/* Floating stars */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <Star
              key={i}
              className="absolute text-yellow-300 animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${20 + Math.random() * 20}px`,
                height: `${20 + Math.random() * 20}px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
                opacity: 0.3 + Math.random() * 0.4
              }}
            />
          ))}
        </div>
      </div>

      {/* Falling confetti */}
      {confetti.map(piece => (
        <div
          key={piece.id}
          className={`absolute w-4 h-4 ${piece.color} rounded-sm pointer-events-none`}
          style={{
            left: `${piece.left}%`,
            top: '-20px',
            animation: `fall ${3 + piece.delay}s linear forwards`,
            animationDelay: `${piece.delay}s`,
            transform: `rotate(${Math.random() * 360}deg)`
          }}
        >
          <style>{`
            @keyframes fall {
              to {
                transform: translateY(calc(100vh + 50px)) rotate(${Math.random() * 720}deg);
              }
            }
          `}</style>
        </div>
      ))}

      {/* Content */}
      <div className="relative flex flex-col h-full p-3">
        {/* LCD Display with pizzazz */}
        <div className="max-w-md mx-auto mb-4 relative">
          <div className="absolute -inset-2 bg-yellow-400 blur-xl opacity-60 animate-pulse" />
          <div className="relative bg-gradient-to-r from-black via-gray-900 to-black p-2 rounded-lg border-8 border-double border-yellow-400 shadow-2xl transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
              <span className="text-yellow-400 font-black text-sm tracking-widest">TOTAL ZILLIONS</span>
              <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
            </div>
            <div className="font-mono text-2xl text-green-400 text-center px-3 py-2 bg-black/50 rounded border-2 border-green-600 shadow-inner" style={{
              textShadow: '0 0 10px rgba(74, 222, 128, 0.8)'
            }}>
              $ {prize}
            </div>
          </div>
        </div>

        {/* Main Title - Extra Flashy */}
        <div className="text-center py-4 mb-2">
          <div className="relative inline-block">
            <div className="absolute -inset-6 bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-600 blur-2xl opacity-50 animate-pulse" />
            <h1 className="relative text-6xl font-black" style={{ letterSpacing: '0.15em' }}>
              <div className="flex flex-col items-center gap-1">
                <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 text-transparent bg-clip-text drop-shadow-2xl transform -rotate-2" style={{
                  textShadow: '4px 4px 0px rgba(168, 85, 247, 0.5)',
                  WebkitTextStroke: '2px rgba(168, 85, 247, 0.3)'
                }}>
                  CELEBRITY
                </span>
                <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-orange-500 text-transparent bg-clip-text drop-shadow-2xl transform rotate-2" style={{
                  textShadow: '4px 4px 0px rgba(234, 179, 8, 0.5)',
                  WebkitTextStroke: '2px rgba(234, 179, 8, 0.3)'
                }}>
                  ZILLIONS
                </span>
              </div>
            </h1>
            {/* Decorative stars around title */}
            <Sparkles className="absolute -top-4 -left-4 w-12 h-12 text-yellow-400 animate-spin" style={{ animationDuration: '3s' }} />
            <Sparkles className="absolute -top-4 -right-4 w-12 h-12 text-purple-400 animate-spin" style={{ animationDuration: '4s' }} />
            <Sparkles className="absolute -bottom-4 left-1/2 w-12 h-12 text-pink-400 animate-spin" style={{ animationDuration: '3.5s' }} />
          </div>
        </div>

        {/* Money Drop Area - More Dynamic */}
        <div className="flex-1 min-h-0 relative">
          <div className="absolute -inset-2 bg-green-400 blur-xl opacity-40 animate-pulse" />
          <div className="relative h-full bg-gradient-to-br from-green-800/80 via-green-900/80 to-emerald-900/80 backdrop-blur-sm border-8 border-double border-yellow-400 p-4 rounded-2xl shadow-2xl overflow-hidden">
            {/* Animated sparkles in background */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-yellow-300 rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                />
              ))}
            </div>

            <div className="relative h-full">
              {/* Eric dangling from top */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 z-10 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="relative">
                  <div className="absolute -inset-4 bg-purple-500 blur-2xl opacity-50 animate-pulse" />
                  <img 
                    src="images/pages/categories/channel5andfriends/CelebrityZillions/Eric.png"
                    alt="Eric the Zillionaire"
                    className="relative w-72 h-auto drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* Dollar signs with animation */}
              {dollarPositions.map((pos, i) => (
                <DollarSign
                  key={i}
                  className="absolute text-green-400 animate-pulse drop-shadow-lg"
                  style={{
                    left: `${pos.left}%`,
                    top: `${pos.top}%`,
                    width: `${pos.size}px`,
                    height: `${pos.size}px`,
                    transform: `rotate(${pos.rotation}deg)`,
                    animationDelay: `${i * 0.1}s`,
                    filter: 'drop-shadow(0 0 10px rgba(74, 222, 128, 0.8))'
                  }}
                />
              ))}

              {/* Munny Boy at bottom */}
              <div className="absolute bottom-0 right-2 -z-10 animate-bounce" style={{ animationDuration: '2s', animationDelay: '0.5s' }}>
                <div className="relative">
                  <div className="absolute -inset-4 bg-yellow-500 blur-2xl opacity-50 animate-pulse" />
                  <img 
                    src="images/pages/categories/channel5andfriends/CelebrityZillions/MunnyBoy.png"
                    alt="Munny Boy"
                    className="relative w-72 h-auto drop-shadow-2xl"
                  />
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-green-900/70 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Show Info - Jazzed up */}
        <div className="relative mt-4">
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-600 blur-xl opacity-30 animate-pulse" />
          <div className="relative bg-gradient-to-br from-green-800/90 via-green-900/90 to-emerald-900/90 backdrop-blur-sm border-8 border-double border-yellow-400 p-4 rounded-2xl shadow-2xl">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Star className="w-8 h-8 text-yellow-400 animate-spin" style={{ animationDuration: '3s' }} />
              <h2 className="text-2xl font-black text-yellow-400 tracking-wider" style={{
                textShadow: '2px 2px 0px rgba(0, 0, 0, 0.5)'
              }}>
                ABOUT THE SHOW
              </h2>
              <Star className="w-8 h-8 text-yellow-400 animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }} />
            </div>
            <div className="text-white space-y-3 text-sm leading-relaxed">
              <p className="bg-black/30 p-3 rounded-lg border-2 border-yellow-400/30">
                Welcome to Celebrity Zillions, the most outrageous gameshow on television! Watch in amazement 
                as our host MUNNY BOY welcomes an all-star cast including Billy Crystals, Steven Spielberg, 
                Whoopsie Goldberg, Tom Cruizes, and the incomparable John Depp!
              </p>
              <p className="bg-black/30 p-3 rounded-lg border-2 border-green-400/30">
                Marvel as our Zillionaire, Eric Wareheim, dangles from the roof, 
                manually throwing endless streams of cash while our celebrity contestants scramble 
                for their chance at unimaginable wealth!
              </p>
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-lg border-4 border-yellow-600 shadow-xl transform -rotate-1">
                <p className="text-black font-black italic text-center text-base">
                  "Give me my zillion! Drop the cash, you petty actors!" - MUNNY BOY
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ticker - More Energetic */}
        <div className="relative mt-4 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 py-2 rounded-full overflow-hidden border-4 border-orange-600 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
          <div className="relative animate-marquee whitespace-nowrap">
            <span className="text-black text-base font-black mx-8">
              🤑 MAS DINERO VAMANOS 💰 THAT WAS MINE 💸 OUT! NO NO NO NO NO 🎰 JOHN DEPP NUMBER 1 ⭐ 
              RELOAD THE CASH ZILLIONAIRE 💵 DROP THE CASH YOU PETTY ACTORS 🎪 I WANT MORE! 🎉
            </span>
          </div>
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              display: inline-block;
              animation: marquee 15s linear infinite;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default GameShow;