import React, { useRef, useEffect, useState } from 'react';

const KidBreak = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const audioRef = useRef(null);

  const songs = [
    {
      title: "Dirty Socks",
      albumArt: "images/pages/categories/channel5andfriends/KidBreak/socks.png",
      duration: "0:51",
      hostNote: "A groovy tune about wearing your Dad's socks when you are alone!",
      audioSrc: "/music/KidBreak/DirtySocks.mp3"
    },
    {
      title: "I Sit Down When I Pee",
      albumArt: "images/pages/categories/channel5andfriends/KidBreak/pee.png",
      duration: "0:57",
      hostNote: "A bathroom ballad!",
      audioSrc: "/music/KidBreak/ISitDownWhenIPee.mp3"
    },
    {
      title: "My Sister is Cute",
      albumArt: "images/pages/categories/channel5andfriends/KidBreak/sister.png",
      duration: "0:40",
      hostNote: "A sweet sibling serenade!",
      audioSrc: "/music/KidBreak/MySisterIsCute.mp3"
    },
    {
      title: "Never Gonna Wipe My Butt",
      albumArt: "images/pages/categories/channel5andfriends/KidBreak/butt.png",
      duration: "1:20",
      hostNote: "A rebellious bathroom anthem!",
      audioSrc: "/music/KidBreak/NeverGonnaWipeMyButt.mp3"
    },
    {
      title: "Bloody Nips",
      albumArt: "images/pages/categories/channel5andfriends/KidBreak/nips.png",
      duration: "1:01",
      hostNote: "A painful story about scratchy shirts!",
      audioSrc: "/music/KidBreak/BloodyNips.mp3"
    },
    {
      title: "My Boogs",
      albumArt: "images/pages/categories/channel5andfriends/KidBreak/boogs.png",
      duration: "1:07",
      hostNote: "A nose-picking party tune!",
      audioSrc: "/music/KidBreak/MyBoogs.mp3"
    }
  ];

  // Cleanup function to stop audio when component unmounts
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const handlePlaySong = (song) => {
    // If there's already a song playing, stop it
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    // If clicking the same song that's currently playing, pause it
    if (currentSong === song.title) {
      setCurrentSong(null);
      return;
    }

    // Play the new song
    audioRef.current = new Audio(song.audioSrc);
    audioRef.current.play()
      .catch(error => {
        console.log("Audio playback error:", error);
      });
    setCurrentSong(song.title);

    // Add ended event listener to reset currentSong when song finishes
    audioRef.current.addEventListener('ended', () => {
      setCurrentSong(null);
    });
  };

  return (
    <div 
      className="min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url(images/pages/categories/channel5andfriends/KidBreak/brick.jpg)`,
        backgroundRepeat: 'repeat',
        backgroundSize: '400px 400px'
      }}
    >
      {/* Header */}
      <header className="py-8 px-4 relative">
        <div className="max-w-4xl mx-auto flex justify-center items-center">
          <div className="bg-green-400/90 p-6 rounded-full">
            <img 
              src="images/pages/categories/channel5andfriends/Channel5News/channel5logo.png"
              alt="Channel 5"
              className="w-24 h-24"
            />
          </div>
          <div className="text-center ml-4 bg-blue-900/90 p-4 rounded-xl">
            <h1 className="text-6xl font-bold text-green-400 font-comic">KID BREAK!</h1>
            <p className="text-xl text-pink-400">Channel 5's Coolest Music Show</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {songs.map((song, index) => (
            <div 
              key={index}
              onClick={() => handlePlaySong(song)}
              className={`bg-green-400/90 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-transform duration-200 shadow-lg border-4 
                ${currentSong === song.title ? 'border-pink-500 shadow-pink-500/50' : 'border-green-500'}
                cursor-pointer`}
            >
              <div className="flex items-center space-x-4">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <img
                    src={song.albumArt}
                    alt={song.title}
                    className="w-24 h-24 rounded-lg shadow-md border-2 border-blue-900 object-cover"
                  />
                  {currentSong === song.title && (
                    <div className="absolute inset-0 flex items-center justify-center bg-blue-900/30 rounded-lg">
                      <span className="text-2xl animate-bounce">🎵</span>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-blue-900 text-xl font-bold mb-2">{song.title}</h3>
                  <p className="text-blue-800 text-sm">{song.duration}</p>
                  <p className="text-pink-600 italic mt-2">{song.hostNote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Fun Graphics */}
        <div className="mt-12 text-center">
          <div className="bg-blue-900/90 backdrop-blur-sm p-6 rounded-xl inline-block">
            <h2 className="text-3xl font-bold text-pink-400 mb-4">Get Ready to Dance!</h2>
            <div className="flex justify-center space-x-8">
              <div className="animate-bounce">🎵</div>
              <div className="animate-bounce delay-100">🎸</div>
              <div className="animate-bounce delay-200">🎤</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900/90 backdrop-blur-sm py-6 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-green-400">Stay Tuned for More Kid Break!</p>
          <p className="text-pink-400 text-sm mt-2">Channel 5 - Making Music Fun!</p>
        </div>
      </footer>
    </div>
  );
};

export default KidBreak;