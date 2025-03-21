import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Book, Zap, Phone, Computer } from 'lucide-react';

const NumberCollection = ({ title, numbers, description, theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`p-6 rounded-lg shadow-xl transition-all duration-300 ${theme} mb-4 hover:scale-105`}>
      <div 
        className="flex justify-between items-center cursor-pointer" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-2xl font-bold">{title}</h3>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </div>
      <p className="text-sm opacity-75 mt-2">{description}</p>
      {isOpen && (
        <div className="mt-4 grid grid-cols-4 gap-4">
          {numbers.map((num, idx) => (
            <div key={idx} className="text-center p-2 bg-white/20 rounded backdrop-blur-sm">
              {num}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const CincoNumberEncyclopedia = () => {
  const collections = [
    {
      title: "Numbers Just For Men™",
      description: "Testosterone-enhanced numerals for the modern man",
      theme: "bg-blue-600 text-white",
      numbers: ["7️⃣💪", "69420", "80085", "1337", "42069", "666", "420", "9001", "1776", "300", "007", "911"],
      icon: <Zap />
    },
    {
      title: "Numbers Forgotten By Time",
      description: "Ancient numerals lost to history until now",
      theme: "bg-purple-700 text-white",
      numbers: ["𝔖𝔢𝔳𝔢𝔫", "௩௩௩", "፯፯፯", "七七七", "७७७", "⅞⅝⅜", "☰☱☲", "𝕱𝖎𝖛𝖊", "𐄐𐄑𐄒", "༣༤༥", "౩౪౫", "𑁪𑁫𑁬"],
      icon: <Book />
    },
    {
      title: "Theoretical Phone Numbers",
      description: "Numbers that could be phone numbers but aren't... yet",
      theme: "bg-green-600 text-white",
      numbers: ["555-????", "₱Ⱨ₴₦Ɇ", "###-VOID", "∞-555-0000", "NO-PHONE", "CALL-VOID", "555-DOOM", "666-HELL", "808-BASS", "404-ERROR", "000-NULL", "123-NOPE"],
      icon: <Phone />
    },
    {
      title: "Discontinued Fax Numbers",
      description: "Numbers that used to connect to fax machines that no longer exist",
      theme: "bg-red-600 text-white",
      numbers: ["FAX-DEAD", "NO-PAPER", "INK-VOID", "BUSY-404", "OFFLINE", "EXTINCT", "GONE-FAX", "LOST-FAX", "GHOST-FAX", "VOID-FAX", "FAX-NOPE", "END-TRANS"],
      icon: <Computer />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 p-8 text-white">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12 space-y-4">
        <h1 className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 animate-pulse">
          CINCO™ Encyclopedia of Numbers
        </h1>
        <p className="text-2xl italic text-gray-400">
          "1763... there it is."
        </p>
        <div className="text-xl bg-red-600 p-4 rounded-lg inline-block animate-bounce">
          TALLEST BOOKS KNOWN TO MAN
        </div>
      </div>

      {/* Number Collections */}
      <div className="max-w-4xl mx-auto space-y-8">
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

      {/* Absurd Stats */}
      <div className="max-w-4xl mx-auto mt-12 grid grid-cols-2 gap-8">
        <div className="bg-yellow-500 text-black p-6 rounded-lg text-center transform -rotate-2">
          <h3 className="text-4xl font-bold mb-2">HEIGHT REQUIREMENTS</h3>
          <p className="text-xl">Minimum Ceiling: 50 FEET</p>
          <p className="text-sm">(Ladder system sold separately)</p>
        </div>
        <div className="bg-pink-500 text-white p-6 rounded-lg text-center transform rotate-2">
          <h3 className="text-4xl font-bold mb-2">NUMBER COUNT</h3>
          <p className="text-xl">ALL OF THEM</p>
          <p className="text-sm">(Plus several that don't exist)</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto mt-12 text-center">
        <div className="bg-gradient-to-r from-red-500 to-purple-600 text-white text-3xl font-bold px-12 py-6 rounded-lg transform transition-transform hover:scale-90 animate-pulse">
          <h1>PLEASE BUY MY BOOKS</h1>
          <p>Call 1 (800)-555-0199 to Order</p>
        </div>
        <p className="mt-4 text-gray-400 italic">
          *Special financing available for tall bookshelf purchase
        </p>
      </div>
    </div>
  );
};

export default CincoNumberEncyclopedia;