import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Book, Zap, Phone, Computer, Star, Sparkles, BookOpen } from 'lucide-react';

const NumberCollection = ({ title, numbers, description, theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`p-6 rounded-lg shadow-2xl transition-all duration-300 ${theme} mb-6 hover:scale-105 relative overflow-hidden border-4 border-amber-900`}
      style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23000000" fill-opacity="0.05" fill-rule="evenodd"/%3E%3C/svg%3E")',
        boxShadow: '0 15px 35px rgba(0,0,0,0.5), inset 0 2px 5px rgba(255,255,255,0.1)'
      }}>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
      <div 
        className="flex justify-between items-center cursor-pointer relative z-10" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3">
          <BookOpen className="animate-pulse" size={32} />
          <h3 className="text-3xl font-bold drop-shadow-2xl" style={{
            fontFamily: 'Georgia, serif',
            textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
          }}>{title}</h3>
        </div>
        <div className="bg-amber-900/50 p-2 rounded-full">
          {isOpen ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
        </div>
      </div>
      <p className="text-lg opacity-90 mt-3 italic relative z-10" style={{fontFamily: 'Georgia, serif'}}>
        {description}
      </p>
      {isOpen && (
        <div className="mt-6 grid grid-cols-4 gap-4 relative z-10">
          {numbers.map((num, idx) => (
            <div key={idx} className="text-center p-4 bg-amber-100/20 rounded-lg backdrop-blur-sm border-2 border-amber-900/40 hover:bg-amber-100/30 transition-all duration-300 hover:scale-110 shadow-lg relative overflow-hidden"
              style={{
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(139, 69, 19, 0.1) 10px, rgba(139, 69, 19, 0.1) 20px)'
              }}>
              <div className="absolute top-0 right-0">
                <Star size={12} className="text-yellow-400 opacity-50" />
              </div>
              <span className="font-bold text-lg drop-shadow-lg" style={{fontFamily: 'Courier New, monospace'}}>
                {num}
              </span>
            </div>
          ))}
        </div>
      )}
      <div className="absolute bottom-2 right-2 opacity-20">
        <Sparkles size={24} />
      </div>
    </div>
  );
};

const CincoNumberEncyclopedia = () => {
  const collections = [
    {
      title: "Numbers Just For Men™",
      description: "Testosterone-enhanced numerals for the modern man",
      theme: "bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 text-white",
      numbers: ["7️⃣💪", "69420", "80085", "1337", "42069", "666", "420", "9001", "1776", "300", "007", "911"],
      icon: <Zap />
    },
    {
      title: "Numbers Forgotten By Time",
      description: "Ancient numerals lost to history until now",
      theme: "bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white",
      numbers: ["𝔖𝔢𝔳𝔢𝔫", "௩௩௩", "፯፯፯", "七七七", "७७७", "⅞⅝⅜", "☰☱☲", "𝕱𝖎𝖛𝖊", "𐄐𐄑𐄒", "༣༤༥", "౩౪౫", "𑁪𑁫𑁬"],
      icon: <Book />
    },
    {
      title: "Theoretical Phone Numbers",
      description: "Numbers that could be phone numbers but aren't... yet",
      theme: "bg-gradient-to-br from-green-800 via-green-700 to-emerald-900 text-white",
      numbers: ["555-????", "₱Ⱨ₴₦Ɇ", "###-VOID", "∞-555-0000", "NO-PHONE", "CALL-VOID", "555-DOOM", "666-HELL", "808-BASS", "404-ERROR", "000-NULL", "123-NOPE"],
      icon: <Phone />
    },
    {
      title: "Discontinued Fax Numbers",
      description: "Numbers that used to connect to fax machines that no longer exist",
      theme: "bg-gradient-to-br from-red-900 via-red-800 to-rose-900 text-white",
      numbers: ["FAX-DEAD", "NO-PAPER", "INK-VOID", "BUSY-404", "OFFLINE", "EXTINCT", "GONE-FAX", "LOST-FAX", "GHOST-FAX", "VOID-FAX", "FAX-NOPE", "END-TRANS"],
      icon: <Computer />
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #2c1810 0%, #1a0f08 25%, #3d2817 50%, #1a0f08 75%, #2c1810 100%)',
      backgroundSize: '400% 400%',
      animation: 'gradientShift 15s ease infinite'
    }}>
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes bookFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        @keyframes pageFlip {
          0%, 100% { transform: rotateY(0deg); }
          50% { transform: rotateY(5deg); }
        }
        .leather-texture {
          background-image: 
            repeating-linear-gradient(90deg, rgba(139, 69, 19, 0.1) 0px, transparent 2px, transparent 4px, rgba(139, 69, 19, 0.1) 6px),
            repeating-linear-gradient(0deg, rgba(101, 67, 33, 0.1) 0px, transparent 2px, transparent 4px, rgba(101, 67, 33, 0.1) 6px);
        }
        .gold-foil {
          background: linear-gradient(90deg, #FFD700 0%, #FFA500 50%, #FFD700 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
      `}</style>

      {/* Decorative book-themed background elements */}
      <div className="absolute inset-0 opacity-10 leather-texture"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(255, 215, 0, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(139, 69, 19, 0.15) 0%, transparent 50%)',
      }}></div>

      {/* Floating decorative elements */}
      {[...Array(15)].map((_, i) => (
        <Star
          key={i}
          className="absolute text-yellow-600 opacity-20"
          size={Math.random() * 20 + 10}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `bookFloat ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}

      <div className="relative z-10 p-8 text-white">
        {/* Header with enhanced book aesthetic */}
        <div className="max-w-5xl mx-auto text-center mb-16 space-y-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 to-transparent blur-3xl"></div>
          
          {/* Decorative book spine effect at top */}
          <div className="relative mb-8">
            <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-r from-amber-900 via-yellow-700 to-amber-900 border-y-4 border-yellow-900 shadow-2xl"></div>
            <div className="absolute inset-x-0 top-0 h-4 opacity-30" style={{
              backgroundImage: 'repeating-linear-gradient(90deg, transparent 0px, rgba(0,0,0,0.3) 2px, transparent 4px)'
            }}></div>
          </div>

          <div className="relative pt-12 pb-6 px-8 bg-gradient-to-br from-amber-950/60 via-yellow-900/40 to-amber-950/60 rounded-lg border-8 border-double border-yellow-700 shadow-2xl backdrop-blur-sm"
            style={{
              animation: 'pageFlip 6s ease-in-out infinite',
              boxShadow: '0 25px 50px rgba(0,0,0,0.8), inset 0 0 20px rgba(255,215,0,0.2)'
            }}>
            <div className="absolute inset-0 leather-texture rounded-lg opacity-40"></div>
            
            <div className="relative flex justify-center items-center gap-4 mb-4">
              <Book size={64} className="text-yellow-600 animate-bounce drop-shadow-2xl" />
              <h1 className="text-8xl font-bold gold-foil drop-shadow-2xl" style={{
                fontFamily: 'Georgia, serif',
              }}>
                CINCO™
              </h1>
              <Book size={64} className="text-yellow-600 animate-bounce drop-shadow-2xl" style={{animationDelay: '0.3s'}} />
            </div>
            
            <h2 className="text-5xl font-bold text-amber-200 mb-4 drop-shadow-xl" style={{
              fontFamily: 'Georgia, serif',
              textShadow: '3px 3px 6px rgba(0,0,0,0.8)'
            }}>
              Encyclopedia of Numbers
            </h2>
            
            <div className="flex items-center justify-center gap-3 mb-4">
              <Star className="text-yellow-400" size={24} />
              <p className="text-3xl italic text-amber-100 drop-shadow-lg" style={{fontFamily: 'Georgia, serif'}}>
                "1763... there it is."
              </p>
              <Star className="text-yellow-400" size={24} />
            </div>
            
            <div className="relative inline-block">
              <div className="relative text-2xl font-black bg-gradient-to-r from-red-600 via-red-500 to-red-600 p-6 rounded-lg border-4 border-red-800 shadow-2xl animate-bounce" style={{
                fontFamily: 'Impact, sans-serif',
                textShadow: '3px 3px 6px rgba(0,0,0,0.9)'
              }}>
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.2) 10px, rgba(0,0,0,0.2) 20px)'
                }}></div>
                <span className="relative z-10">📚 TALLEST BOOKS KNOWN TO MAN 📚</span>
              </div>
            </div>

            {/* Picture Star Section */}
            <div className="mt-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 blur-2xl opacity-40 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-purple-900/80 via-pink-800/80 to-purple-900/80 p-6 rounded-xl border-4 border-yellow-500 shadow-2xl">
                <div className="absolute inset-0 leather-texture rounded-xl opacity-30"></div>
                <div className="relative flex items-center justify-center gap-4">
                  <Star className="text-yellow-400 animate-spin" size={40} style={{animationDuration: '4s'}} />
                  <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-300" style={{
                    fontFamily: 'Georgia, serif',
                    textShadow: '0 0 20px rgba(255,215,0,0.5)'
                  }}>
                    ⭐ FEATURING: PICTURE STAR ⭐
                  </h3>
                  <Star className="text-yellow-400 animate-spin" size={40} style={{animationDuration: '4s', animationDirection: 'reverse'}} />
                </div>
                <p className="text-xl text-yellow-200 mt-3 italic" style={{fontFamily: 'Georgia, serif'}}>
                  "The only star that's also a picture!" - CINCO™ Research Institute
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Number Collections */}
        <div className="max-w-5xl mx-auto space-y-8">
          {collections.map((collection, idx) => (
            <NumberCollection 
              key={idx}
              title={collection.title}
              numbers={collection.numbers}
              description={collection.description}
              theme={collection.theme}
            />
          ))}
        </div>

        {/* Absurd Stats with book theme */}
        <div className="max-w-5xl mx-auto mt-16 grid grid-cols-2 gap-10">
          <div className="relative transform -rotate-2 hover:rotate-0 transition-transform duration-300">
            <div className="absolute inset-0 bg-yellow-500 blur-xl opacity-50"></div>
            <div className="relative bg-gradient-to-br from-yellow-600 via-yellow-500 to-amber-600 text-black p-8 rounded-lg text-center border-8 border-amber-900 shadow-2xl leather-texture">
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(0,0,0,0.1) 15px, rgba(0,0,0,0.1) 30px)'
              }}></div>
              <Book className="mx-auto mb-4 animate-bounce" size={48} />
              <h3 className="text-5xl font-black mb-4 relative z-10" style={{
                fontFamily: 'Impact, sans-serif',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}>HEIGHT REQUIREMENTS</h3>
              <p className="text-2xl font-bold relative z-10" style={{fontFamily: 'Georgia, serif'}}>Minimum Ceiling: 50 FEET</p>
              <p className="text-lg mt-2 italic relative z-10" style={{fontFamily: 'Georgia, serif'}}>(Ladder system sold separately)</p>
            </div>
          </div>
          
          <div className="relative transform rotate-2 hover:rotate-0 transition-transform duration-300">
            <div className="absolute inset-0 bg-pink-500 blur-xl opacity-50"></div>
            <div className="relative bg-gradient-to-br from-pink-600 via-pink-500 to-rose-600 text-white p-8 rounded-lg text-center border-8 border-rose-900 shadow-2xl leather-texture">
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 15px, rgba(0,0,0,0.1) 15px, rgba(0,0,0,0.1) 30px)'
              }}></div>
              <Sparkles className="mx-auto mb-4 animate-pulse" size={48} />
              <h3 className="text-5xl font-black mb-4 relative z-10" style={{
                fontFamily: 'Impact, sans-serif',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
              }}>NUMBER COUNT</h3>
              <p className="text-2xl font-bold relative z-10" style={{fontFamily: 'Georgia, serif'}}>ALL OF THEM</p>
              <p className="text-lg mt-2 italic relative z-10" style={{fontFamily: 'Georgia, serif'}}>(Plus several that don't exist)</p>
            </div>
          </div>
        </div>

        {/* Call to Action - Book order form style */}
        <div className="max-w-5xl mx-auto mt-16 text-center">
          <div className="relative bg-gradient-to-br from-red-800 via-red-700 to-purple-800 text-white px-16 py-10 rounded-2xl border-8 border-double border-yellow-600 shadow-2xl transform transition-transform hover:scale-95 leather-texture overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,215,0,0.2) 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}></div>
            
            <div className="absolute top-4 left-4">
              <Star className="text-yellow-400" size={40} />
            </div>
            <div className="absolute top-4 right-4">
              <Star className="text-yellow-400" size={40} />
            </div>
            <div className="absolute bottom-4 left-4">
              <Star className="text-yellow-400" size={40} />
            </div>
            <div className="absolute bottom-4 right-4">
              <Star className="text-yellow-400" size={40} />
            </div>
            
            <div className="relative z-10">
              <Book className="mx-auto mb-6 animate-pulse" size={72} />
              <h1 className="text-6xl font-black mb-6 gold-foil" style={{
                fontFamily: 'Impact, sans-serif',
              }}>PLEASE BUY MY BOOKS</h1>
              <div className="bg-black/40 py-4 px-8 rounded-lg mb-4 border-4 border-yellow-500">
                <p className="text-4xl font-bold" style={{fontFamily: 'Courier New, monospace'}}>
                  📞 Call 1 (800)-555-0199 to Order 📞
                </p>
              </div>
              <p className="text-xl text-amber-200 font-bold" style={{fontFamily: 'Georgia, serif'}}>
                "For your Numbers!" - Dr. Steve Brule
              </p>
            </div>
          </div>
          
          <p className="mt-6 text-amber-300 italic text-xl backdrop-blur-sm bg-black/30 inline-block px-6 py-3 rounded-lg border-2 border-amber-600" style={{fontFamily: 'Georgia, serif'}}>
            *Special financing available for tall bookshelf purchase
          </p>
        </div>

        {/* Footer with vintage book publishing style */}
        <div className="max-w-5xl mx-auto mt-16 text-center pb-8">
          <div className="bg-gradient-to-r from-amber-900/60 via-yellow-800/60 to-amber-900/60 p-6 rounded-lg border-4 border-amber-700 shadow-xl leather-texture">
            <p className="text-amber-200 text-xl mb-2" style={{fontFamily: 'Georgia, serif'}}>
              © 2002 CINCO™ Products - A Division of CINCO™ Industries
            </p>
            <p className="text-amber-300 text-lg italic" style={{fontFamily: 'Georgia, serif'}}>
              Thanks CINCO™!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CincoNumberEncyclopedia;