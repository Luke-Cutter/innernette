import React, { useRef, useEffect, useState } from 'react';

const ChildShowcase = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const audioRef = useRef(null);

  const showcaseEntries = [
    {
      performer: "Joshua Beard",
      title: "Shape Drives Me To Bits",
      albumArt: "images/pages/categories/channel5andfriends/ChildShowcase/joshuabeard.png",
      duration: "0:34",
      description: "A heartfelt ballad about mothers",
      audioSrc: "/music/ChildShowcase/Shapes.mp3"
    },
    {
      performer: "Bobby Stoan",
      title: "Babies",
      albumArt: "images/pages/categories/channel5andfriends/ChildShowcase/bobbystoan.png",
      duration: "1:14",
      description: "An emotional query about life",
      audioSrc: "/music/ChildShowcase/Babies.mp3"
    }
  ];

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const handlePlaySong = (song) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    if (currentSong === song.title) {
      setCurrentSong(null);
      return;
    }

    audioRef.current = new Audio(song.audioSrc);
    audioRef.current.play()
      .catch(error => {
        console.log("Audio playback error:", error);
      });
    setCurrentSong(song.title);

    audioRef.current.addEventListener('ended', () => {
      setCurrentSong(null);
    });
  };

  return (
    <div className="h-min-screen bg-gradient-to-b from-purple-900 to-purple-700 flex flex-col">
      {/* Header - reduced padding */}
      <header className="py-4 px-4 relative">
        <div className="max-w-4xl mx-auto flex justify-center items-center">
          <div className="bg-yellow-400/90 p-4 rounded-full">
            <img 
              src="images/pages/categories/channel5andfriends/Channel5News/channel5logo.png"
              alt="Channel 5"
              className="w-16 h-16 object-contain" // Reduced size
            />
          </div>
          <div className="text-center ml-4 bg-purple-900/90 p-4 rounded-xl">
            <h1 className="text-5xl font-bold text-yellow-400 font-serif">CHILD SHOWCASE</h1>
            <p className="text-lg text-pink-400">Channel 5's Young Stars</p>
          </div>
        </div>
      </header>

      {/* Showcase Image - reduced padding */}
      <div className="max-w-4xl mx-auto px-4 pb-4 w-full">
        <div className="relative w-full overflow-hidden rounded-xl border-4 border-yellow-400" style={{ height: '28vh' }}>
          <img 
            src="images/pages/categories/channel5andfriends/ChildShowcase/ChildShowcase.png"
            alt="Child Showcase"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Main Content - reduced padding and spacing */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 gap-8">
          {showcaseEntries.map((entry, index) => (
            <div 
              key={index}
              onClick={() => handlePlaySong(entry)}
              className={`bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-transform duration-200 shadow-lg border-4 
                ${currentSong === entry.title ? 'border-pink-500 shadow-pink-500/50' : 'border-yellow-400'}
                cursor-pointer`}
            >
              <div className="flex items-center space-x-4">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <img
                    src={entry.albumArt}
                    alt={entry.title}
                    className="w-full h-full rounded-lg shadow-md border-2 border-purple-900 object-cover"
                  />
                  {currentSong === entry.title && (
                    <div className="absolute inset-0 flex items-center justify-center bg-purple-900/30 rounded-lg">
                      <span className="text-2xl animate-bounce">🎤</span>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-yellow-400 text-xl font-bold mb-1">{entry.performer}</h3>
                  <h4 className="text-pink-400 text-lg mb-1">"{entry.title}"</h4>
                  <p className="text-white/80 text-xs">{entry.description}</p>
                  <p className="text-yellow-400/80 text-xs mt-1">{entry.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer - reduced padding */}
      <footer className="bg-purple-900/90 backdrop-blur-sm mt-1 py-4">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-yellow-400">Next Week: More Rising Stars!</p>
          <p className="text-pink-400 text-xs mt-1">Channel 5 - Where Young Talent Shines</p>
        </div>
      </footer>
    </div>
  );
};

export default ChildShowcase;