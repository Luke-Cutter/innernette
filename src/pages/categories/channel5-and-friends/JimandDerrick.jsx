import React, { useState } from 'react';
import { Star, Skull } from 'lucide-react';

const JimandDerrick = () => {
    const [isLoading, setIsLoading] = useState(true);
  
    React.useEffect(() => {
      setTimeout(() => setIsLoading(false), 2000);
    }, []);
  
    if (isLoading) {
      return (
        <div className="h-full w-full bg-black flex flex-col items-center justify-center font-mono">
          <div className="text-yellow-300 text-xl mb-4">CINCO INNERNETTE</div>
          <div className="text-red-500">Loading Jim and Derek Zone...</div>
          <div className="text-red-500 text-sm mt-8">THIS IS AN OLD BUILD OF THE INNERNETTE, MAY BROWN YOUR COMPUTER</div>
        </div>
      );
    }

    // Background pattern component - now contained within the content area
    const XtremePattern = () => (
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Diagonal stripes */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(128, 128, 0, 0.2), rgba(128, 128, 0, 0.2) 10px, transparent 10px, transparent 20px)',
          transform: 'scale(2)',
        }}></div>
        
        {/* Red X pattern */}
        <svg width="100%" height="100%" className="absolute inset-0">
          <pattern id="xPattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="200" y2="200" stroke="rgba(255, 0, 0, 0.3)" strokeWidth="20"/>
            <line x1="200" y1="0" x2="0" y2="200" stroke="rgba(255, 0, 0, 0.3)" strokeWidth="20"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#xPattern)"/>
        </svg>

        {/* Olive triangles */}
        <svg width="100%" height="100%" className="absolute inset-0">
          <pattern id="trianglePattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M0 0 L50 87 L100 0 Z" fill="rgba(128, 128, 0, 0.1)"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#trianglePattern)"/>
        </svg>
      </div>
    );
  
    return (
      <div className="relative h-full w-full bg-black text-white font-mono">
        {/* Pattern container */}
        <XtremePattern />
        
        <div className="relative z-10 h-full overflow-y-auto">
          {/* Offline Banner */}
          <div className="bg-red-600 text-white text-center py-2 text-sm animate-pulse sticky top-0 border-b-2 border-black font-bold tracking-wider">
            ★ OFFLINE MODE - CINCO INNERNETTE EDITION ★ ONLINE EDITION IS WAY MORE RADICAL ★
          </div>
    
          {/* Header */}
          <div className="py-12 bg-black">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <div className="text-white text-6xl font-bold mb-2 tracking-[0.3em]">
                JIM & DEREK
              </div>
              <div className="text-red-500 text-xl tracking-[0.5em]">
                EXTREME ZONE 2002
              </div>
              <div className="text-[#9b9b00] text-sm mt-2">
                Presented by CINCO INNERNETTE™
              </div>
            </div>
          </div>
          
          {/* Banner Image */}
          <div className="max-w-4xl mx-auto px-4 mb-8">
            <div className="border-2 border-[#9b9b00] bg-black p-2">
              <div className="h bg-gray-800 flex items-center justify-center text-[#9b9b00] border border-[#9b9b00]">
                <img alt="Jim and Derrick Spring Break" src="images/pages/categories/channel5andfriends/Channel5Movies/JimandDerrick.PNG"></img>
              </div>
            </div>
          </div>
    
          {/* Main Content */}
          <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Welcome Message */}
            <div className="border border-[#9b9b00] p-1 mb-8">
              <div className="bg-black p-4">
                <h2 className="text-[#9b9b00] text-2xl mb-4 flex items-center tracking-wider">
                  <Star className="mr-2" /> WELCOME TO THE ZONE
                </h2>
                <div className="text-[#9b9b00] space-y-4">
                  <p>YO DAWG! You are now browsing on CINCO™'s Premium Offline Innernette Service! They took over after we overdosed on TURBO FUEL MAXIMUM ENERGY SODA™, we may never recover!</p>
                  <p className="flex justify-center">→ NO VIRUSES → NO INTERNET REQUIRED → 100% PREPARED CONTENT</p>
                </div>
              </div>
            </div>
    
            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-[#9b9b00] p-1">
                <div className="bg-black/80 p-4">
                  <h3 className="text-xl font-bold text-[#9b9b00] mb-4 flex items-center tracking-wider">
                    <Skull className="mr-2" /> SICK TOPICS
                  </h3>
                  <ul className="space-y-3 text-[#9b9b00]">
                    <li>→ TRIBAL TATS</li>
                    <li>→ TURBO FUEL</li>
                    <li>→ SPRING BREAK TIPS</li>
                    <li>→ BONG RIPS IN FRESH GLASS</li>
                    <li>→ BART SIMPSON T-SHIRTS</li>
                    <li>→ CINCO™ BRANDED PRODUCTS</li>
                  </ul>
                </div>
              </div>
    
              <div className="border border-[#9b9b00] p-1">
                <div className="bg-black/80 p-4">
                  <h3 className="text-xl font-bold text-[#9b9b00] mb-4 tracking-wider">PRE-LOADED PIX</h3>
                  <div className="grid grid-cols-2 gap-2">
                  <div className="border border-[#9b9b00] h-24 flex items-center justify-center text-xs text-[#9b9b00] p-2 text-center">
                      [PRE-LOADED PIC: MOLECULAR MICROTAN - 13 CELLS TANNED]
                    </div>
                    <div className="border border-[#9b9b00] h-24 flex items-center justify-center text-xs text-[#9b9b00] p-2 text-center">
                      [PRE-LOADED PIC: RICKER SUNDIN'S OBADOBO TECHNIQUE]
                    </div>
                    <div className="border border-[#9b9b00] h-24 flex items-center justify-center text-xs text-[#9b9b00] p-2 text-center">
                      [PRE-LOADED PIC: GENIE BIKINI PRAYER SESSION]
                    </div>
                    <div className="border border-[#9b9b00] h-24 flex items-center justify-center text-xs text-[#9b9b00] p-2 text-center">
                      [PRE-LOADED PIC: DVD BOOGIE BOARD WITH FORREST GUMP]
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            {/* Warning Section */}
            <div className="mt-8 text-center bg-black border border-[#9b9b00] p-4">
              <div className="text-red-500 text-sm animate-pulse font-bold">
                WARNING: Content approved by CINCO INNERNETTE™ CONSORTIUM
              </div>
              <div className="text-[#9b9b00] text-xs mt-2">
                For best results, view on CINCO VIDEO CUBE™
              </div>
            </div>
          </div>
    
          {/* Footer */}
          <footer className="bg-black/80 text-center p-4 border-t border-[#9b9b00] mt-8">
            <div className="text-[#9b9b00] text-sm">
              © 2002 CINCO INNERNETTE™ v1.2 | All Rights Reserved
            </div>
            <div className="text-[#9b9b00] text-xs mt-2">
              Powered by CINCO COMPUTING SOLUTIONS™
            </div>
            <div className="text-red-500 text-xs mt-2">
              NO INTERNET REQUIRED | 100% VIRUS FREE
            </div>
          </footer>
        </div>
      </div>
    );
};

export default JimandDerrick;