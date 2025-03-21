import React, { useState, useEffect } from 'react';
import { DollarSign } from 'lucide-react';

const GameShow = () => {
  const [prize, setPrize] = useState("11509000000.00");
  
  useEffect(() => {
    const prizeInterval = setInterval(() => {
      const baseAmount = "11509";
      const randomDigits = Math.floor(Math.random() * 999999).toString().padStart(6, '0');
      setPrize(baseAmount + randomDigits + ".00");
    }, 100);

    return () => clearInterval(prizeInterval);
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
    <div className="h-full relative flex flex-col">
      {/* Metallic green background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-green-500 to-green-600">
        {/* Spotlight beams */}
        <div className="absolute inset-0 overflow-hidden">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="absolute w-32 h-full bg-gradient-to-b from-yellow-200/20 via-yellow-200/10 to-transparent transform -skew-x-12 animate-pulse"
              style={{
                left: `${25 + i * 25}%`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative flex flex-col h-full p-2">
        {/* LCD Display */}
        <div className="max-w-xs mx-auto mb-2 bg-black/90 p-1 rounded border-2 border-gray-600">
          <div className="font-mono text-base text-green-400 text-right px-2">
            $ {prize}
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center py-2">
          <h1 className="text-4xl font-black relative inline-block">
            <span className="bg-gradient-to-b from-purple-400 via-purple-500 to-purple-600 text-transparent bg-clip-text drop-shadow-lg" style={{ letterSpacing: '0.1em' }}>
              CELEBRITY
            </span>
            <span className="bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-500 text-transparent bg-clip-text drop-shadow-lg ml-2" style={{ letterSpacing: '0.1em' }}>
              ZILLIONS
            </span>
          </h1>
        </div>

        {/* Money Drop Area */}
        <div className="flex-1 min-h-0 bg-green-900/50 backdrop-blur-sm border-4 border-yellow-400 p-3 rounded-lg mb-2">
          <div className="relative h-full">
            {/* Eric dangling from top */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 z-10">
              <img 
                src="images/pages/categories/channel5andfriends/CelebrityZillions/Eric.png"
                alt="Eric the Zillionaire"
                className="w-64 h-auto"
              />
            </div>

            {/* Dollar signs */}
            {dollarPositions.map((pos, i) => (
              <DollarSign
                key={i}
                className="absolute text-green-400"
                style={{
                  left: `${pos.left}%`,
                  top: `${pos.top}%`,
                  width: `${pos.size}px`,
                  height: `${pos.size}px`,
                  transform: `rotate(${pos.rotation}deg)`
                }}
              />
            ))}

            {/* Munny Boy at bottom */}
            <div className="absolute bottom-0 right-1 -z-10">
              <img 
                src="images/pages/categories/channel5andfriends/CelebrityZillions/MunnyBoy.png"
                alt="Munny Boy"
                className="w-64 h-auto"
              />
            </div>

            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-green-900/50 to-transparent" />
          </div>
        </div>

        {/* Show Info */}
        <div className="bg-green-900/50 backdrop-blur-sm border-4 border-yellow-400 p-3 rounded-lg mb-2">
          <h2 className="text-lg font-bold text-yellow-400 mb-2">About The Show</h2>
          <div className="text-white space-y-2 text-sm">
            <p>
              Welcome to Celebrity Zillions, the most outrageous gameshow on television! Watch in amazement 
              as our host MUNNY BOY welcomes an all-star cast including Billy Crystals, Steven Spielberg, 
              Whoopsie Goldberg, Tom Cruizes, and the incomparable John Depp!
            </p>
            <p>
              Marvel as our Zillionaire, Eric Wareheim, dangles from the roof, 
              manually throwing endless streams of cash while our celebrity contestants scramble 
              for their chance at unimaginable wealth!
            </p>
            <p className="text-yellow-400 font-bold italic">
              "Give me my zillion! Drop the cash, you petty actors!" - MUNNY BOY
            </p>
          </div>
        </div>

        {/* Ticker */}
        <div className="bg-yellow-400 py-1 rounded-lg overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            <span className="text-black text-sm font-bold mx-4">
              MAS DINERO VAMANOS • THAT WAS MINE • OUT! NO NO NO NO NO • JOHN DEPP NUMBER 1 • 
              RELOAD THE CASH ZILLIONAIRE • DROP THE CASH YOU PETTY ACTORS • I WANT MORE!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameShow;