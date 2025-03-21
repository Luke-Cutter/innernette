import React from 'react';
import { AlertTriangle, PartyPopper, Music, Skull, Wine, Shell } from 'lucide-react';
import GlitchText from '../../../components/shared/GlitchText';

const BeaverBoysConstruction = () => {
  return (
    <div className="min-h-screen p-4 bg-[repeating-linear-gradient(45deg,#1a1a1a_25px,#000_50px)]">
      {/* Main Container */}
      <div className="max-w-4xl mx-auto bg-[#111] border-8 border-double border-yellow-500 rounded p-8 shadow-2xl">
        {/* Top Banner */}
        <div className="relative mb-12">
          <div className="absolute top-0 left-0 w-full h-8 bg-yellow-400 bg-[repeating-linear-gradient(45deg,#000_25px,transparent_50px)]"></div>
          <div className="absolute bottom-0 left-0 w-full h-8 bg-yellow-400 bg-[repeating-linear-gradient(45deg,#000_25px,transparent_50px)]"></div>
          <div className="py-12 text-center">
            <GlitchText 
              text="UNDER CONSTRUCTION" 
              className="text-4xl font-bold text-red-500 ml-36 tracking-widest"
            />
          </div>
        </div>

        {/* Header Logo */}
        <div className="text-center mb-12 relative">
          <div className="animate-bounce">
            <img 
              src="images/pages/categories/entertainment/BeaverBoys/BeaverBoysLogo.png" 
              alt="Beaver Boys Logo" 
              className="mx-auto"
            />
          </div>
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 p-4 skew-x-2 transform rotate-1">
            <h2 className="text-3xl font-bold text-white font-['Comic_Sans_MS']">
              BEAVER BOUNCE EXPERIENCE
            </h2>
          </div>
          <div className="mt-4 text-green-500 animate-pulse font-mono">
            &lt;&lt;&lt; Coming Soon to Innernette 3.0! &gt;&gt;&gt;
          </div>
        </div>

        {/* Warning Message */}
        <div className="bg-red-900/50 border-2 border-red-500 p-4 mb-8 animate-pulse">
          <p className="text-red-500 text-center font-bold">
            !!! WARNING !!! SITE UNDER HEAVY CONSTRUCTION !!! WATCH YOUR STEP !!!
          </p>
        </div>

        {/* Construction Zone */}
        <div className="grid grid-cols-2 gap-8 mb-12">
          {/* Dilly Section */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-500 blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-black border-4 border-dashed border-yellow-500 p-4">
              <div className="text-yellow-500 text-center">
                <div className="animate-bounce">
                  <img 
                    src="images/pages/categories/entertainment/BeaverBoys/Dilly.png" 
                    alt="Dilly" 
                    className="h-[350px] mt-20 mx-auto"
                  />
                </div>
                <div className="mt-4 bg-red-900/50 p-2">
                  <Shell className="inline-block mr-2" />
                  SHRIMP BOSS
                  <Shell className="inline-block ml-2" />
                </div>
              </div>
            </div>
          </div>

          {/* Krunk Section */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-400 blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-black border-4 border-dashed border-yellow-500 p-4">
              <div className="text-yellow-500 text-center">
                <div className="animate-bounce">
                  <img 
                    src="images/pages/categories/entertainment/BeaverBoys/Krunk.png" 
                    alt="Krunk" 
                    className="h-[350px] mt-20 mx-auto"
                  />
                </div>
                <div className="mt-4 bg-red-900/50 p-2">
                  <Wine className="inline-block mr-2" />
                  WHITE WINE KING
                  <Wine className="inline-block ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="bg-black border-4 border-yellow-500 p-6 mb-8">
          <h3 className="text-2xl font-bold text-red-500 mb-4 font-['Times_New_Roman'] flex items-center">
            <PartyPopper className="mr-2" />
            COMING SOON TO THE BOUNCE:
          </h3>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-purple-900/50 to-black p-4 border-l-4 border-purple-500">
              <span className="text-purple-400 font-['Comic_Sans_MS']">
                <Music className="inline mr-2" />
                Sweet Berry Wine Dance Floor
              </span>
            </div>
            <div className="bg-gradient-to-r from-pink-900/50 to-black p-4 border-l-4 border-pink-500">
              <span className="text-pink-400 font-['Comic_Sans_MS']">
                <Music className="inline mr-2" />
                Shrimp & White Wine Bar
              </span>
            </div>
            <div className="bg-gradient-to-r from-red-900/50 to-black p-4 border-l-4 border-red-500">
              <span className="text-red-400 font-['Comic_Sans_MS']">
                <Music className="inline mr-2" />
                Exclusive Beaver Boys VIP Lounge
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Info Section */}
        <div className="bg-black border-4 border-yellow-500 p-4 space-y-4">
          {/* System Requirements */}
          <div className="text-center text-green-500 font-mono text-sm">
            <p>SYSTEM REQUIREMENTS:</p>
            <p>Innernette Explorer 6.0 or Higher</p>
            <p>Resolution: 800x600 (Best viewed in 640x480)</p>
            <p>16-bit Color Depth</p>
            <p>Sound Blaster Compatible Audio Card</p>
          </div>

          {/* Visitor Counter */}
          <div className="text-center">
            <div className="inline-block bg-black px-4 py-2 border-2 border-green-500">
              <p className="text-green-500 font-mono animate-pulse">
                [Visitors: 000069]
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center space-y-2">
            <p className="text-red-500 font-['Times_New_Roman']">
              © 2002 Beaver Boys Entertainment
            </p>
            <p className="text-yellow-500 font-['Comic_Sans_MS']">
              For your health!
            </p>
            <div className="flex justify-center gap-4 text-red-500">
              <Skull className="animate-pulse" />
              <AlertTriangle className="animate-bounce" />
              <Skull className="animate-pulse" />
            </div>
          </div>

          {/* Classic 'Made With' Banner */}
          <div className="text-center text-xs space-x-2">
            <span className="text-gray-500">Made with:</span>
            <span className="text-yellow-500">Notepad.exe</span>
            <span className="text-gray-500">|</span>
            <span className="text-red-500">Paint</span>
            <span className="text-gray-500">|</span>
            <span className="text-blue-500">Word Art</span>
          </div>
        </div>

        {/* Construction Tape Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-yellow-400 bg-[repeating-linear-gradient(45deg,#000_25px,transparent_50px)]"></div>
      </div>
    </div>
  );
};

export default BeaverBoysConstruction;