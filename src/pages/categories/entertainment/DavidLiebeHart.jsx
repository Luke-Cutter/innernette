import React, { useState } from 'react';
import { PersonStanding, Train, Music, Cross, Mail, Dog } from 'lucide-react';

const DavidLiebeHart = () => {
  const [activeSection, setActiveSection] = useState('home');
  
  const trainSongs = [
    "Trains of the Past and Present",
    "Burlington Northern Line",
    "Rock Island Line Blues",
    "Amtrak Makes Me Feel Good",
    "I Miss the Old Union Pacific",
    "Santa Fe Railway Dreams"
  ];

  const albums = [
    { title: "Christian Hymns and Songs of Praise", year: "2004", type: "Spiritual" },
    { title: "Public Access", year: "2008", type: "Collaboration" },
    { title: "Astronaut", year: "2015", type: "Space Experience" },
    { title: "Good Morning, Have A Good Day", year: "2023", type: "Tragic Club Era" }
  ];

  const alienMessages = [
    "Stay pure, avoid contamination",
    "The Korendians speak through radio waves",
    "Salad oil powers the future",
    "Train whistles are alien morse code",
    "Love all beings equally",
    "Doug the Dog knows the truth"
  ];

  // Image mappings
  const images = {
    gallery: [
      "images/pages/categories/entertainment/David/angel.png",
      "images/pages/categories/entertainment/David/Kooky.jpg",
      "images/pages/categories/entertainment/David/Ilove.jpg",
    ],
    religion: {
      doug: "images/pages/categories/entertainment/David/doug.jpg",
      puppet: "images/pages/categories/entertainment/David/albert.png"
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden p-6" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
      backgroundSize: '400% 400%',
      animation: 'gradientShift 15s ease infinite'
    }}>
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(255,255,0,0.5); }
          50% { box-shadow: 0 0 40px rgba(255,255,0,0.8); }
        }
        .dotted-texture {
          background-image: radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        .striped-texture {
          background-image: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px);
        }
        .zigzag-texture {
          background-image: linear-gradient(135deg, rgba(255,255,255,0.1) 25%, transparent 25%), 
                            linear-gradient(225deg, rgba(255,255,255,0.1) 25%, transparent 25%);
          background-size: 20px 20px;
        }
        .swirl-bg {
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0 Q70 20 50 40 Q30 60 50 80 Q70 100 50 100' stroke='white' stroke-width='2' fill='none' opacity='0.2'/%3E%3Cpath d='M0 50 Q20 70 40 50 Q60 30 80 50 Q100 70 100 50' stroke='white' stroke-width='2' fill='none' opacity='0.2'/%3E%3C/svg%3E");
          background-size: 80px 80px;
        }
        .fun-border {
          border-radius: 30px 50px 40px 60px / 50px 30px 60px 40px;
        }
      `}</style>

      {/* Swirl overlay */}
      <div className="absolute inset-0 swirl-bg opacity-30 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-8 relative" style={{animation: 'float 5s ease-in-out infinite'}}>
          <div className="bg-white p-8 shadow-2xl border-8 border-yellow-400 relative overflow-hidden fun-border" style={{animation: 'pulse-glow 3s ease-in-out infinite'}}>
            <div className="absolute inset-0 dotted-texture opacity-90"></div>
            <div className="absolute inset-0 striped-texture opacity-90"></div>
            
            {/* Floating icons */}
            <div className="absolute inset-0 opacity-90 overflow-hidden">
              {[...Array(15)].map((_, i) => (
                <PersonStanding
                  key={i}
                  className="absolute text-purple-600"
                  size={24}
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                    animation: `float ${3 + Math.random() * 3}s ease-in-out infinite`
                  }}
                />
              ))}
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-8">
                {/* Left Photo Circle */}
                <div className="hidden md:block relative" style={{animation: 'wiggle 4s ease-in-out infinite'}}>
                  <div className="w-32 h-32 rounded-full border-6 border-purple-600 overflow-hidden bg-gradient-to-br from-yellow-200 to-pink-200 relative">
                    <div className="absolute inset-0 dotted-texture opacity-30"></div>
                    <img
                      src="images/pages/categories/entertainment/David/youngdavid.png"
                      alt="David Liebe Hart"
                      className="w-full h-full object-cover relative z-10"
                    />
                  </div>
                </div>

                {/* Title */}
                <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 p-6 fun-border" style={{animation: 'wiggle 3s ease-in-out infinite'}}>
                  <h1 className="text-5xl font-black text-yellow-300 mb-2" style={{
                    textShadow: '4px 4px 0px rgba(0,0,0,0.3)',
                    transform: 'rotate(-1deg)'
                  }}>
                    DAVID LIEBE HART
                  </h1>
                  <p className="text-white text-xl font-bold">Puppeteer • Musician • Alien Contactee • Artist</p>
                </div>

                {/* Right Photo Circle */}
                <div className="hidden md:block relative" style={{animation: 'wiggle 5s ease-in-out infinite'}}>
                  <div className="w-32 h-32 rounded-full border-6 border-green-600 overflow-hidden bg-gradient-to-br from-blue-200 to-purple-200 relative">
                    <div className="absolute inset-0 striped-texture opacity-30"></div>
                    <img
                      src="images/pages/categories/entertainment/David/olddavid.png"
                      alt="David Liebe Hart"
                      className="w-full h-full object-cover relative z-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mb-8 p-4 relative overflow-hidden fun-border border-4 border-purple-600" style={{
          background: 'linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #ffd700 100%)',
        }}>
          <div className="absolute inset-0 zigzag-texture opacity-30"></div>
          <div className="flex justify-center gap-3 flex-wrap relative z-10">
            {[
              { id: 'home', icon: Dog, label: 'Home' },
              { id: 'aliens', icon: PersonStanding, label: 'Aliens' },
              { id: 'trains', icon: Train, label: 'Trains' },
              { id: 'music', icon: Music, label: 'Music' },
              { id: 'religion', icon: Cross, label: 'Religion' },
              { id: 'contact', icon: Mail, label: 'Contact' }
            ].map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center gap-2 px-5 py-3 font-bold border-4 transition-all fun-border ${
                  activeSection === item.id 
                    ? 'bg-purple-600 text-yellow-300 border-yellow-400 scale-110'
                    : 'bg-white text-purple-600 border-purple-400 hover:bg-purple-100'
                }`}
                style={{
                  transform: `rotate(${[-1, 1, -1, 1, 0, -1][idx]}deg)`,
                  animation: activeSection === item.id ? 'wiggle 1s ease-in-out infinite' : 'none'
                }}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-6">
          
          {activeSection === 'home' && (
            <>
              <div className="bg-white p-8 border-6 border-pink-400 fun-border shadow-xl relative overflow-hidden" style={{animation: 'float 4s ease-in-out infinite'}}>
                <div className="absolute inset-0 dotted-texture opacity-20"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-black text-purple-600 mb-4 text-center inline-block bg-yellow-300 px-6 py-2 fun-border" style={{textShadow: '3px 3px 0px rgba(255,192,203,0.5)'}}>
                    Welcome to My World!
                  </h2>
                  <p className="text-lg font-semibold leading-relaxed">
                    I am David Liebe Hart, and I have been contacted by aliens from the Korendian race.
                    Through my puppets, music, and art, I spread their message of peace and understanding.
                    I also love trains and Christian Science!
                  </p>
                </div>
              </div>

              {/* Photo Gallery Section */}
              <div className="bg-white p-6 border-6 border-yellow-400 fun-border shadow-xl relative overflow-hidden" style={{animation: 'wiggle 3s ease-in-out infinite'}}>
                <div className="absolute inset-0 striped-texture opacity-20"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-yellow-700 mb-6 text-center inline-block bg-purple-200 px-4 py-2 fun-border">
                    Photo Gallery
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    {images.gallery.map((img, idx) => (
                      <div key={idx} className="fun-border border-4 border-purple-400 overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 relative" style={{animation: `float ${3 + idx * 0.5}s ease-in-out infinite`}}>
                        <div className="absolute inset-0 dotted-texture opacity-30"></div>
                        <img
                          src={img}
                          alt={`David Liebe Hart ${idx + 1}`}
                          className="w-full h-64 object-cover relative z-10"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-yellow-400 p-2 text-center font-bold text-purple-700 text-sm">
                          David & Friends
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 border-4 border-purple-400 fun-border shadow-xl relative overflow-hidden" style={{animation: 'float 3s ease-in-out infinite'}}>
                  <div className="absolute inset-0 striped-texture opacity-20"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-black text-purple-700 mb-4 inline-block bg-yellow-300 px-4 py-2 fun-border">Latest News</h3>
                    <ul className="space-y-3 font-semibold text-base">
                      <li>• New Album with Tragic Club Out Now!</li>
                      <li>• Puppet Show at the Hollywood Bowl This Weekend</li>
                      <li>• Special Message from the Korendians: Stay Pure</li>
                      <li>• Doug the Dog Says Hello to All True Believers</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-6 border-4 border-blue-400 fun-border shadow-xl relative overflow-hidden" style={{animation: 'float 3.5s ease-in-out infinite'}}>
                  <div className="absolute inset-0 zigzag-texture opacity-20"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-black text-blue-700 mb-4 inline-block bg-yellow-300 px-4 py-2 fun-border">Live Performances</h3>
                    <ul className="space-y-3 font-semibold text-base">
                      <li>• Santa Monica Promenade - Every Saturday</li>
                      <li>• Christian Science Church - Sundays</li>
                      <li>• Hollywood Bowl - After Major Events</li>
                      <li>• LA Music Center - Special Appearances</li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeSection === 'aliens' && (
            <>
              <div className="bg-white p-8 border-6 border-green-400 fun-border shadow-xl relative overflow-hidden text-center" style={{animation: 'wiggle 4s ease-in-out infinite'}}>
                <div className="absolute inset-0 dotted-texture opacity-20"></div>
                <h2 className="text-4xl font-black text-purple-600 inline-block bg-yellow-300 px-6 py-3 fun-border relative z-10" style={{textShadow: '4px 4px 0px rgba(147,51,234,0.3)'}}>
                  Alien Teachings
                </h2>
              </div>

              {/* Featured Photo - Alien Section */}
              <div className="bg-white p-6 border-4 border-blue-400 fun-border shadow-xl relative overflow-hidden" style={{animation: 'float 3s ease-in-out infinite'}}>
                <div className="absolute inset-0 zigzag-texture opacity-20"></div>
                <div className="relative z-10 text-center">
                  <div className="inline-block fun-border border-4 border-yellow-400 overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 relative">
                    <div className="absolute inset-0 dotted-texture opacity-30"></div>
                    <img
                      src="images/pages/categories/entertainment/David/Korendian.png"
                      alt="David with alien communication device"
                      className="w-full max-w-md mx-auto relative z-10"
                    />
                    <div className="bg-yellow-400 p-3 text-center font-black text-purple-700">
                      Receiving Messages from the Korendians
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 border-4 border-green-400 fun-border shadow-xl relative overflow-hidden" style={{animation: 'float 4s ease-in-out infinite'}}>
                  <div className="absolute inset-0 dotted-texture opacity-25"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-black text-green-700 mb-3 bg-yellow-200 inline-block px-3 py-1 fun-border">
                      The Korendian Message
                    </h3>
                    <p className="mb-4 font-semibold text-base leading-relaxed">
                      The aliens taught me that smoking and drinking are bad. They want humans to stay pure and avoid contamination. Their spaceships run on salad oil!
                    </p>
                    <div className="bg-red-100 p-3 fun-border border-2 border-red-400 font-bold text-red-700 text-sm">
                      <strong>Warning:</strong> The Korendians say rap music blocks their transmissions
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 border-4 border-blue-400 fun-border shadow-xl relative overflow-hidden" style={{animation: 'float 3.5s ease-in-out infinite'}}>
                  <div className="absolute inset-0 striped-texture opacity-20"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-black text-blue-700 mb-3 bg-yellow-200 inline-block px-3 py-1 fun-border">
                      My Encounters
                    </h3>
                    <p className="font-semibold text-base leading-relaxed">
                      I first met the aliens in 1987. They took me aboard their ship and showed me the truth about the universe. They continue to communicate with me through special frequencies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 border-4 border-purple-400 fun-border shadow-xl relative overflow-hidden" style={{animation: 'float 4.5s ease-in-out infinite'}}>
                <div className="absolute inset-0 zigzag-texture opacity-20"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-purple-700 mb-5 text-center bg-yellow-300 inline-block px-4 py-2 fun-border">
                    Messages from Beyond
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {alienMessages.map((message, index) => (
                      <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 border-3 border-purple-400 text-center fun-border">
                        <PersonStanding className="w-8 h-8 mx-auto mb-2 text-purple-500" />
                        <p className="text-sm font-bold">{message}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {activeSection === 'trains' && (
            <>
              <div className="bg-white p-8 border-6 border-yellow-400 fun-border shadow-xl relative overflow-hidden text-center" style={{animation: 'float 3s ease-in-out infinite'}}>
                <div className="absolute inset-0 striped-texture opacity-20"></div>
                <h2 className="text-4xl font-black text-purple-600 bg-yellow-300 inline-block px-6 py-3 fun-border relative z-10" style={{textShadow: '4px 4px 0px rgba(147,51,234,0.3)'}}>
                  Railroad Encyclopedia
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 border-4 border-yellow-400 fun-border shadow-xl relative overflow-hidden" style={{animation: 'wiggle 4s ease-in-out infinite'}}>
                  <div className="absolute inset-0 striped-texture opacity-25"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-black text-yellow-700 mb-4 bg-red-200 inline-block px-3 py-1 fun-border">
                      Train Songs
                    </h3>
                    <ul className="space-y-3">
                      {trainSongs.map((song, index) => (
                        <li key={index} className="flex items-center gap-3 font-semibold text-base">
                          <Train className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                          {song}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-6 border-4 border-orange-400 fun-border shadow-xl relative overflow-hidden" style={{animation: 'float 3.5s ease-in-out infinite'}}>
                  <div className="absolute inset-0 dotted-texture opacity-20"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-black text-orange-700 mb-4 bg-blue-200 inline-block px-3 py-1 fun-border">
                      Railroad Memories
                    </h3>
                    <p className="mb-4 font-semibold text-base leading-relaxed">
                      Growing up in Park Forest, Illinois, I would watch the trains go by for hours. The conductors would wave, and the whistles would sing songs of distant places.
                    </p>
                    <div className="bg-yellow-100 p-3 fun-border border-2 border-orange-400 font-bold text-sm">
                      <strong>Fun Fact:</strong> The Korendians taught me that trains are Earth's spiritual railways
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeSection === 'music' && (
            <>
              <div className="bg-white p-8 border-6 border-purple-400 fun-border shadow-xl relative overflow-hidden text-center" style={{animation: 'wiggle 2s ease-in-out infinite'}}>
                <div className="absolute inset-0 zigzag-texture opacity-20"></div>
                <h2 className="text-4xl font-black text-purple-600 bg-yellow-300 inline-block px-6 py-3 fun-border relative z-10" style={{textShadow: '4px 4px 0px rgba(147,51,234,0.3)'}}>
                  Musical Journey
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 border-4 border-purple-400 fun-border shadow-xl relative overflow-hidden" style={{animation: 'float 4s ease-in-out infinite'}}>
                  <div className="absolute inset-0 zigzag-texture opacity-20"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-black text-purple-700 mb-4 bg-yellow-200 inline-block px-3 py-1 fun-border">
                      Albums
                    </h3>
                    <div className="space-y-3">
                      {albums.map((album, index) => (
                        <div key={index} className="bg-purple-50 p-4 border-2 border-purple-400 fun-border">
                          <div className="font-black text-base">{album.title}</div>
                          <div className="text-sm text-purple-600 font-semibold">{album.year} - {album.type}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 border-4 border-blue-400 fun-border shadow-xl relative overflow-hidden" style={{animation: 'float 3.5s ease-in-out infinite'}}>
                  <div className="absolute inset-0 striped-texture opacity-20"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-black text-blue-700 mb-4 bg-yellow-200 inline-block px-3 py-1 fun-border">
                      Popular Songs
                    </h3>
                    <ul className="space-y-3 font-semibold text-base">
                      <li>• Salame (As heard on Tim and Eric)</li>
                      <li>• La Rent Doesn't Want Me To Look At You</li>
                      <li>• Save The Train Stations</li>
                      <li>• I Am Not A Piano</li>
                      <li>• Korendian Love Ballad</li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeSection === 'religion' && (
            <>
              <div className="bg-white p-8 border-6 border-blue-400 fun-border shadow-xl relative overflow-hidden text-center" style={{animation: 'float 3s ease-in-out infinite'}}>
                <div className="absolute inset-0 dotted-texture opacity-20"></div>
                <h2 className="text-4xl font-black text-purple-600 bg-yellow-300 inline-block px-6 py-3 fun-border relative z-10" style={{textShadow: '4px 4px 0px rgba(147,51,234,0.3)'}}>
                  Christian Science Teachings
                </h2>
              </div>

              {/* Doug the Dog Photo Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-5 border-4 border-green-400 fun-border shadow-xl relative overflow-hidden" style={{animation: 'wiggle 3s ease-in-out infinite'}}>
                  <div className="absolute inset-0 dotted-texture opacity-20"></div>
                  <div className="relative z-10">
                    <div className="fun-border border-3 border-yellow-400 overflow-hidden bg-gradient-to-br from-green-100 to-blue-100">
                      <img
                        src={images.religion.doug}
                        alt="David with Doug the Dog"
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    <p className="text-center font-black text-green-700 mt-3 text-lg">
                      David & Doug the Dog
                    </p>
                  </div>
                </div>
                <div className="bg-white p-5 border-4 border-purple-400 fun-border shadow-xl relative overflow-hidden" style={{animation: 'float 3.5s ease-in-out infinite'}}>
                  <div className="absolute inset-0 striped-texture opacity-20"></div>
                  <div className="relative z-10">
                    <div className="fun-border border-3 border-pink-400 overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
                      <img
                        src={images.religion.puppet}
                        alt="Puppet Ministry"
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    <p className="text-center font-black text-purple-700 mt-3 text-lg">
                      Puppet Ministry in Action
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 border-4 border-blue-400 fun-border shadow-xl relative overflow-hidden" style={{animation: 'wiggle 4s ease-in-out infinite'}}>
                  <div className="absolute inset-0 dotted-texture opacity-20"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-black text-blue-700 mb-3 bg-yellow-200 inline-block px-3 py-1 fun-border">
                      Daily Devotionals
                    </h3>
                    <p className="font-semibold text-base leading-relaxed">
                      Every morning I read from Science and Health with Key to the Scriptures. The truth about healing comes from understanding God's infinite love.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 border-4 border-green-400 fun-border shadow-xl relative overflow-hidden" style={{animation: 'float 3.5s ease-in-out infinite'}}>
                  <div className="absolute inset-0 striped-texture opacity-20"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-black text-green-700 mb-3 bg-yellow-200 inline-block px-3 py-1 fun-border">
                      Bible Lesson Program
                    </h3>
                    <p className="font-semibold text-base leading-relaxed">
                      My public access show teaches children about Christian Science through puppetry and songs. Doug the Dog helps explain these important messages!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 border-4 border-yellow-400 fun-border shadow-xl relative overflow-hidden" style={{animation: 'float 4.5s ease-in-out infinite'}}>
                <div className="absolute inset-0 zigzag-texture opacity-20"></div>
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-black text-yellow-700 mb-3 bg-pink-200 inline-block px-4 py-2 fun-border">
                    Puppet Ministry
                  </h3>
                  <p className="font-semibold text-base leading-relaxed">
                    Through Doug the Dog and friends, we teach children about God's love and the Korendian's message of universal peace. The aliens approve of Christian Science!
                  </p>
                </div>
              </div>
            </>
          )}

          {activeSection === 'contact' && (
            <>
              <div className="bg-white p-8 border-6 border-blue-400 fun-border shadow-xl relative overflow-hidden text-center" style={{animation: 'wiggle 2s ease-in-out infinite'}}>
                <div className="absolute inset-0 striped-texture opacity-20"></div>
                <h2 className="text-4xl font-black text-purple-600 bg-yellow-300 inline-block px-6 py-3 fun-border relative z-10" style={{textShadow: '4px 4px 0px rgba(147,51,234,0.3)'}}>
                  Contact David
                </h2>
              </div>

              <div className="bg-white p-8 border-4 border-purple-400 fun-border shadow-xl relative overflow-hidden" style={{animation: 'float 4s ease-in-out infinite'}}>
                <div className="absolute inset-0 dotted-texture opacity-20"></div>
                <div className="space-y-6 relative z-10">
                  <div className="text-center bg-yellow-200 p-4 fun-border border-3 border-purple-400">
                    <p className="text-xl font-bold mb-2">Find me performing with Doug the Dog at:</p>
                    <p className="font-black text-blue-600 text-lg">The Hollywood Bowl • LA Music Center • Santa Monica Promenade</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-5 fun-border border-3 border-green-400">
                      <h3 className="text-2xl font-black text-green-600 mb-3 bg-yellow-200 inline-block px-3 py-1 fun-border">
                        Booking
                      </h3>
                      <p className="font-semibold text-base leading-relaxed">
                        For puppet shows, alien lectures, and train songs contact my manager at Absolutely Productions
                      </p>
                    </div>
                    
                    <div className="bg-purple-50 p-5 fun-border border-3 border-purple-400">
                      <h3 className="text-2xl font-black text-purple-600 mb-3 bg-yellow-200 inline-block px-3 py-1 fun-border">
                        Fan Mail
                      </h3>
                      <p className="font-semibold mb-2 text-base">Send letters and drawings to:</p>
                      <p className="font-mono font-bold bg-blue-100 p-3 fun-border text-sm">
                        David Liebe Hart<br />
                        c/o Adult Swim<br />
                        Hollywood, CA
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-center bg-red-200 p-4 fun-border border-3 border-red-500 font-bold text-red-700">
                    *No salad oil shipments please - the Korendians provide their own
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 bg-white p-6 text-center fun-border border-6 border-purple-600 shadow-xl relative overflow-hidden" style={{animation: 'wiggle 5s ease-in-out infinite'}}>
          <div className="absolute inset-0 striped-texture opacity-20"></div>
          <div className="absolute inset-0 dotted-texture opacity-20"></div>
          <div className="relative z-10">
            <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 fun-border mb-3">
              <p className="text-white font-bold text-base">
                © {new Date().getFullYear()} David Liebe Hart • Protected by Korendian Technology
              </p>
            </div>
            <div className="inline-block bg-yellow-400 px-6 py-2 fun-border">
              <p className="font-black text-lg text-purple-700" style={{textShadow: '2px 2px 0px rgba(255,255,255,0.5)'}}>
                Stay Pure • Love Trains • Trust Aliens
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DavidLiebeHart;