import React, { useState, useEffect } from 'react';

const PriceWarPage = () => {
  const [shakeIntensity, setShakeIntensity] = useState(0);
  const [priceSlashes, setPriceSlashes] = useState([]);
  const [cashRain, setCashRain] = useState([]);
  const [timScore, setTimScore] = useState(50);
  const [ericScore, setEricScore] = useState(50);
  const [battleMessages, setBattleMessages] = useState([]);

  useEffect(() => {
    const shakeInterval = setInterval(() => {
      setShakeIntensity(Math.random() * 10);
    }, 200);

    return () => clearInterval(shakeInterval);
  }, []);

  useEffect(() => {
    const scoreInterval = setInterval(() => {
      const timChange = Math.random() * 10 - 5;
      const ericChange = Math.random() * 10 - 5;
      setTimScore(prev => Math.max(0, Math.min(100, prev + timChange)));
      setEricScore(prev => Math.max(0, Math.min(100, prev + ericChange)));
    }, 1500);

    return () => clearInterval(scoreInterval);
  }, []);

  useEffect(() => {
    const slashInterval = setInterval(() => {
      if (Math.random() > 0.5) {
        const newSlash = {
          id: Date.now() + Math.random(),
          x: Math.random() * 90 + 5,
          y: -10,
          rotation: Math.random() * 360
        };
        setPriceSlashes(prev => [...prev, newSlash]);
      }
    }, 300);

    return () => clearInterval(slashInterval);
  }, []);

  useEffect(() => {
    setPriceSlashes(prev => 
      prev.map(slash => ({
        ...slash,
        y: slash.y + 2
      })).filter(slash => slash.y < 110)
    );
  }, [priceSlashes.length]);

  useEffect(() => {
    const cashInterval = setInterval(() => {
      const newCash = Array.from({ length: 3 }, () => ({
        id: Date.now() + Math.random(),
        x: Math.random() * 100,
        y: -10,
        symbol: ['💵', '💰', '💸', '🤑'][Math.floor(Math.random() * 4)]
      }));
      setCashRain(prev => [...prev, ...newCash]);
    }, 500);

    return () => clearInterval(cashInterval);
  }, []);

  useEffect(() => {
    setCashRain(prev => 
      prev.map(cash => ({
        ...cash,
        y: cash.y + 1.5
      })).filter(cash => cash.y < 110)
    );
  }, [cashRain.length]);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      const messages = [
        { text: "TIM SLASHES PRICES!", color: "text-red-600", bg: "bg-red-100" },
        { text: "ERIC RAISES STAKES!", color: "text-purple-600", bg: "bg-purple-100" },
        { text: "PRICES COLLAPSING!", color: "text-orange-600", bg: "bg-orange-100" },
        { text: "LUXURY INTENSIFIES!", color: "text-indigo-600", bg: "bg-indigo-100" },
        { text: "CLEARANCE CHAOS!", color: "text-yellow-600", bg: "bg-yellow-100" },
        { text: "PREMIUM PANIC!", color: "text-pink-600", bg: "bg-pink-100" }
      ];
      
      const newMessage = {
        id: Date.now(),
        ...messages[Math.floor(Math.random() * messages.length)],
        x: Math.random() * 70 + 15
      };
      
      setBattleMessages(prev => [...prev, newMessage]);
      setTimeout(() => {
        setBattleMessages(prev => prev.filter(m => m.id !== newMessage.id));
      }, 1500);
    }, 1000);

    return () => clearInterval(messageInterval);
  }, []);

  const timsPrices = [
    { price: 0.69, item: "Discount Price Tag", wasPrice: 12.99 },
    { price: 1.34, item: "Bargain Label", wasPrice: 24.99 },
    { price: 0.99, item: "Value Sticker", wasPrice: 18.99 },
    { price: 2.45, item: "Budget Tag", wasPrice: 39.99 },
    { price: 0.49, item: "Sale Marker", wasPrice: 9.99 },
    { price: 1.99, item: "Clearance Sign", wasPrice: 29.99 },
    { price: 0.89, item: "Deal Badge", wasPrice: 15.99 },
    { price: 1.79, item: "Price Label", wasPrice: 27.99 }
  ];

  const ericsPrices = [
    { price: 104.99, item: "Luxury Price Tag", features: "Gold-Plated" },
    { price: 89.99, item: "Premium Label", features: "Hand-Crafted" },
    { price: 299.99, item: "Elite Sticker", features: "Limited Edition" },
    { price: 149.99, item: "Exclusive Tag", features: "Designer" },
    { price: 499.99, item: "Designer Marker", features: "Artisanal" },
    { price: 199.99, item: "Prestige Sign", features: "Premium Quality" },
    { price: 749.99, item: "VIP Badge", features: "Ultra-Luxury" },
    { price: 999.99, item: "Platinum Label", features: "Bespoke" }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Chaotic animated background stripes */}
      <div className="absolute inset-0" style={{
        background: `repeating-linear-gradient(
          45deg,
          #ef4444 0px,
          #ef4444 20px,
          #f97316 20px,
          #f97316 40px,
          #eab308 40px,
          #eab308 60px,
          #a855f7 60px,
          #a855f7 80px,
          #ec4899 80px,
          #ec4899 100px
        )`
      }}>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />

      {/* Falling price slashes */}
      {priceSlashes.map(slash => (
        <div
          key={slash.id}
          className="absolute text-6xl font-black text-red-500 pointer-events-none opacity-70"
          style={{
            left: `${slash.x}%`,
            top: `${slash.y}%`,
            transform: `rotate(${slash.rotation}deg)`,
            textShadow: '0 0 20px rgba(239, 68, 68, 0.8)'
          }}
        >
          ⚡
        </div>
      ))}

      {/* Cash rain */}
      {cashRain.map(cash => (
        <div
          key={cash.id}
          className="absolute text-4xl pointer-events-none opacity-60"
          style={{
            left: `${cash.x}%`,
            top: `${cash.y}%`
          }}
        >
          {cash.symbol}
        </div>
      ))}

      {/* Battle messages */}
      {battleMessages.map(msg => (
        <div
          key={msg.id}
          className={`absolute ${msg.bg} ${msg.color} border-4 border-current px-6 py-3 font-black text-2xl transform -rotate-12 shadow-2xl pointer-events-none z-40`}
          style={{
            left: `${msg.x}%`,
            top: '20%',
            animation: 'float 1.5s ease-out'
          }}
        >
          {msg.text}
          <style>{`
            @keyframes float {
              0% { transform: translateY(0) rotate(-12deg) scale(0); opacity: 0; }
              50% { transform: translateY(-30px) rotate(-12deg) scale(1.2); opacity: 1; }
              100% { transform: translateY(-80px) rotate(-12deg) scale(0.8); opacity: 0; }
            }
          `}</style>
        </div>
      ))}

      {/* Score Battle Display */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-black/80 border-8 border-yellow-400 px-8 py-4 shadow-2xl">
          <div className="flex items-center gap-8">
            <div className="text-center">
              <div className="text-red-400 font-black text-sm">TIM</div>
              <div className="text-white font-black text-3xl">{Math.round(timScore)}</div>
            </div>
            <div className="text-yellow-400 text-4xl font-black">VS</div>
            <div className="text-center">
              <div className="text-purple-400 font-black text-sm">ERIC</div>
              <div className="text-white font-black text-3xl">{Math.round(ericScore)}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Chaotic Layout */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8 gap-12">
        {/* Tim's Chaos Section */}
        <div 
          className="w-full max-w-6xl transform hover:scale-105 transition-transform"
          style={{
            transform: `translate(${Math.sin(Date.now() / 1000) * shakeIntensity}px, ${Math.cos(Date.now() / 1000) * shakeIntensity}px) rotate(${Math.sin(Date.now() / 500) * 3}deg)`
          }}
        >
          <div className="bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400 p-2 border-8 border-black shadow-2xl transform -rotate-2">
            <div className="bg-yellow-50 p-8 border-8 border-dashed border-red-600 relative overflow-hidden">
              {/* Chaos indicators */}
              <div className="absolute top-0 left-0 right-0 flex justify-around">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="text-3xl animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}>
                    🔥
                  </div>
                ))}
              </div>

              <div className="flex items-start gap-6 mb-8 mt-8">
                <div className="relative">
                  <img 
                    src="images/pages/categories/entertainment/PriceWarPage/tim.PNG"
                    alt="Tim"
                    className="w-40 h-40 object-cover border-8 border-red-600 shadow-2xl transform -rotate-12 hover:rotate-12 transition-transform"
                    style={{
                      clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)'
                    }}
                  />
                  <div className="absolute -bottom-16 -right-4 bg-yellow-400 border-4 border-red-600 px-4 py-2 font-black text-red-900 transform rotate-12 text-xl animate-pulse">
                    PRICE DESTROYER
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="bg-red-600 text-yellow-300 px-6 py-3 font-black text-5xl transform -rotate-1 border-4 border-black mb-4 shadow-xl">
                    TIM'S DEMOLITION DEPOT
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-yellow-400 text-red-900 px-4 py-2 font-black text-xl border-4 border-red-600 transform rotate-3 animate-bounce">
                      PRICES NUKED!
                    </div>
                    <div className="bg-orange-500 text-white px-4 py-2 font-black text-xl border-4 border-red-900 transform -rotate-2 animate-pulse">
                      ERIC = OVERPRICED!
                    </div>
                    <div className="bg-red-700 text-yellow-300 px-4 py-2 font-black text-xl border-4 border-yellow-400 transform rotate-1 animate-bounce" style={{ animationDelay: '0.2s' }}>
                      99% OFF!!!
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {timsPrices.map((item, idx) => (
                  <div 
                    key={idx}
                    className="bg-white border-4 border-red-600 p-4 hover:scale-110 hover:rotate-6 transition-all shadow-lg transform"
                    style={{
                      transform: `rotate(${Math.sin(idx) * 5}deg)`,
                      animation: `bounce 2s ease-in-out infinite ${idx * 0.1}s`
                    }}
                  >
                    <div className="text-red-700 font-bold text-xs mb-2 line-through">
                      ${item.wasPrice}
                    </div>
                    <div className="text-4xl font-black text-red-600">
                      ${item.price}
                    </div>
                    <div className="text-xs font-bold text-red-800 mt-1">
                      {item.item}
                    </div>
                    <div className="bg-yellow-400 text-red-900 text-xs font-black px-2 py-1 mt-2 border-2 border-red-600 text-center">
                      -{Math.round((1 - item.price / item.wasPrice) * 100)}%!
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-red-900 text-yellow-300 p-4 font-black text-center text-2xl border-4 border-yellow-400 transform rotate-1">
                💥 SMASHING ERIC'S RIDICULOUS PRICES! 💥
              </div>
            </div>
          </div>
        </div>

        {/* Divider Chaos */}
        <div className="flex items-center justify-center gap-4 my-8">
          <div className="text-6xl animate-spin">{`⚔️`}</div>
          <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 text-white font-black text-3xl px-8 py-4 border-8 border-black transform -rotate-3 animate-pulse shadow-2xl">
            MUNNY BOY SAYS "FIGHT"!
          </div>
          <div className="text-6xl animate-spin" style={{ animationDirection: 'reverse' }}>{`⚔️`}</div>
        </div>

        {/* Eric's Chaos Section */}
        <div 
          className="w-full max-w-6xl transform hover:scale-105 transition-transform"
          style={{
            transform: `translate(${Math.cos(Date.now() / 1000) * shakeIntensity}px, ${Math.sin(Date.now() / 1000) * shakeIntensity}px) rotate(${Math.cos(Date.now() / 500) * 3}deg)`
          }}
        >
          <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-400 p-2 border-8 border-black shadow-2xl transform rotate-2">
            <div className="bg-purple-50 p-8 border-8 border-dotted border-purple-600 relative overflow-hidden">
              {/* Chaos indicators */}
              <div className="absolute top-0 left-0 right-0 flex justify-around">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="text-3xl animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
                    💎
                  </div>
                ))}
              </div>

              <div className="flex items-start gap-6 mb-8 mt-8">
                <div className="relative">
                  <img 
                    src="images/pages/categories/entertainment/PriceWarPage/eric.PNG"
                    alt="Eric"
                    className="w-40 h-40 object-cover border-8 border-purple-600 shadow-2xl transform rotate-12 hover:-rotate-12 transition-transform"
                    style={{
                      clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)'
                    }}
                  />
                  <div className="absolute -bottom-16 -left-4 bg-yellow-400 border-4 border-purple-600 px-4 py-2 font-black text-purple-900 transform -rotate-12 text-xl animate-pulse">
                    LUXURY LORD
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="bg-purple-600 text-yellow-300 px-6 py-3 font-black text-5xl transform rotate-1 border-4 border-black mb-4 shadow-xl font-serif italic">
                    Eric's Exorbitant Emporium
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-yellow-400 text-purple-900 px-4 py-2 font-black text-xl border-4 border-purple-600 transform -rotate-3 animate-bounce font-serif italic">
                      WORTH EVERY PENNY!
                    </div>
                    <div className="bg-pink-500 text-white px-4 py-2 font-black text-xl border-4 border-purple-900 transform rotate-2 animate-pulse font-serif italic">
                      TIM = TRASH!
                    </div>
                    <div className="bg-purple-700 text-yellow-300 px-4 py-2 font-black text-xl border-4 border-yellow-400 transform -rotate-1 animate-bounce font-serif italic" style={{ animationDelay: '0.2s' }}>
                      PREMIUM ONLY!
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {ericsPrices.map((item, idx) => (
                  <div 
                    key={idx}
                    className="bg-white border-4 border-purple-600 p-4 hover:scale-110 hover:-rotate-6 transition-all shadow-lg transform"
                    style={{
                      transform: `rotate(${Math.cos(idx) * 5}deg)`,
                      animation: `bounce 2s ease-in-out infinite ${idx * 0.1}s`
                    }}
                  >
                    <div className="text-4xl font-black text-purple-600 font-serif">
                      ${item.price}
                    </div>
                    <div className="text-xs font-bold text-purple-800 mt-1 font-serif italic">
                      {item.item}
                    </div>
                    <div className="bg-yellow-400 text-purple-900 text-xs font-black px-2 py-1 mt-2 border-2 border-purple-600 text-center font-serif italic">
                      {item.features}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-purple-900 text-yellow-300 p-4 font-black text-center text-2xl border-4 border-yellow-400 transform -rotate-1 font-serif italic">
                💎 TIM'S CUSTOMERS CAN'T AFFORD QUALITY! 💎
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceWarPage;