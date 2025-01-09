import React, { useState, useEffect } from 'react';
import { Tag, ShoppingCart, Sparkles } from 'lucide-react';

const PriceWarPage = () => {
  const [territory, setTerritory] = useState(50);

  useEffect(() => {
    const interval = setInterval(() => {
      setTerritory(prev => {
        const change = Math.random() * 4 - 2;
        return Math.min(Math.max(prev + change, 30), 70);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timsPrices = [
    { price: 0.69, item: "Discount Price Tag" },
    { price: 1.34, item: "Bargain Label" },
    { price: 0.99, item: "Value Sticker" },
    { price: 2.45, item: "Budget Tag" },
    { price: 0.49, item: "Sale Marker" },
    { price: 1.99, item: "Clearance Sign" },
    { price: 0.89, item: "Deal Badge" },
    { price: 1.79, item: "Price Label" }
  ];

  const ericsPrices = [
    { price: 104.99, item: "Luxury Price Tag" },
    { price: 89.99, item: "Premium Label" },
    { price: 299.99, item: "Elite Sticker" },
    { price: 149.99, item: "Exclusive Tag" },
    { price: 499.99, item: "Designer Marker" },
    { price: 199.99, item: "Prestige Sign" },
    { price: 749.99, item: "VIP Badge" },
    { price: 999.99, item: "Platinum Label" }
  ];

  return (
    <div className="min-h-screen flex relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
      {/* Tim's Side */}
      <div 
        className="flex-1 transition-all duration-300 relative"
        style={{ width: `${territory}%` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-100 via-red-50 to-red-100 overflow-hidden">
          <div className="p-8 relative">
            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-red-400 shadow-lg transform -rotate-3">
                <img 
                  src="images/pages/categories/entertainment/PriceWarPage/tim.PNG"
                  alt="Tim"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 border-4 border-red-600 rounded-full animate-ping opacity-20" />
              </div>
              <div className="relative">
                <h1 className="text-5xl font-bold text-red-800 font-mono transform -rotate-2 drop-shadow-lg">
                  TIM'$ DISCOUNT PRICES!
                </h1>
                <div className="absolute -top-4 -left-2 text-xs font-mono text-red-600 animate-bounce">
                  CHEAP CHEAP!
                </div>
              </div>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border-2 border-red-400 transform rotate-1 relative">
              <div className="absolute -top-3 -right-2 bg-red-500 text-white px-3 py-1 text-sm font-mono transform rotate-12">
                SALE!!
              </div>
              <h2 className="text-3xl font-bold text-red-700 mb-4 font-mono tracking-tight">CHEAP! CHEAP! CHEAP!</h2>
              <div className="grid grid-cols-2 gap-4">
                {timsPrices.map((item, idx) => (
                  <div 
                    key={idx}
                    className="bg-red-50 p-4 rounded-lg border border-red-300 hover:scale-105 transition-transform shadow-md group relative overflow-hidden"
                  >
                    <div className="absolute -right-12 -top-12 bg-red-500/10 w-24 h-24 rounded-full transform group-hover:scale-150 transition-transform" />
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-red-500" />
                      <span className="text-red-700">{item.item}</span>
                    </div>
                    <div className="text-3xl font-bold text-red-800 font-mono mt-2 group-hover:scale-110 transition-transform">
                      ${item.price.toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 bg-red-900/10 backdrop-blur-sm p-4 rounded-lg rotate-[-1deg] border border-red-400">
              <p className="text-red-700 font-mono text-sm">
                "These prices are so low, they're practically illegal!" - Tim
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Battle Line */}
      <div className="w-2 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500 relative z-10 flex items-center justify-center shadow-xl">
        <div className="absolute top-1/2 -translate-y-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-3 shadow-lg transform hover:scale-110 transition-transform">
          <ShoppingCart className="w-8 h-8 text-white animate-[spin_3s_linear_infinite]" />
        </div>
      </div>

      {/* Eric's Side */}
      <div 
        className="flex-1 transition-all duration-300 relative"
        style={{ width: `${100 - territory}%` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-purple-50 to-indigo-100 overflow-hidden">
          <div className="p-8 relative">
            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-purple-400 shadow-lg transform rotate-3">
                <img 
                  src="images/pages/categories/entertainment/PriceWarPage/eric.PNG"
                  alt="Eric"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 border-4 border-purple-600 rounded-full animate-pulse opacity-20" />
              </div>
              <div className="relative">
                <h1 className="text-5xl font-serif font-bold text-purple-800 italic transform rotate-2 drop-shadow-lg">
                  Eric's Premium Prices
                </h1>
                <div className="absolute -top-4 -right-2 text-xs font-serif text-purple-600 animate-bounce italic">
                  Exclusively Expensive
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border-2 border-purple-400 transform -rotate-1 relative">
              <div className="absolute -top-3 -left-2 bg-purple-500 text-white px-3 py-1 text-sm font-serif italic transform -rotate-12">
                PREMIUM
              </div>
              <h2 className="text-3xl font-serif italic text-purple-700 mb-4">Exclusively Expensive</h2>
              <div className="grid grid-cols-2 gap-4">
                {ericsPrices.map((item, idx) => (
                  <div 
                    key={idx}
                    className="bg-purple-50 p-4 rounded-lg border border-purple-300 hover:scale-105 transition-transform shadow-md group relative overflow-hidden"
                  >
                    <div className="absolute -right-12 -top-12 bg-purple-500/10 w-24 h-24 rounded-full transform group-hover:scale-150 transition-transform" />
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-purple-500" />
                      <span className="text-purple-700 font-serif">{item.item}</span>
                    </div>
                    <div className="text-3xl font-bold text-purple-800 font-serif mt-2 group-hover:scale-110 transition-transform">
                      ${item.price.toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 bg-purple-900/10 backdrop-blur-sm p-4 rounded-lg rotate-1 border border-purple-400">
              <p className="text-purple-700 font-serif italic text-sm">
                "If it's not overpriced, it's not worth buying." - Eric
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceWarPage;