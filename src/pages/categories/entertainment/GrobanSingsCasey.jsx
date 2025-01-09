import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import ImageCarousel from '../../../components/shared/ImageCarousel';

const GrobanSingsCasey = () => {
  const [playingTrack, setPlayingTrack] = useState(null);
  const [progress, setProgress] = useState({});
  const audioRefs = useRef({});

  // Description text with progressively mangled "Groban"
  const descriptions = [
    {
      artist: "Feel the magic as Josh Groban Sings",
      text: "World-renowned vocalist Josh Groban brings his powerful voice to Casey's timeless classics."
    },
    {
      artist: "Unlock Your Inner Child With Grobian",
      text: "Experience the magic as Grobian interprets these beloved songs with grace and dignity."
    },
    {
      artist: "Join Gorbian As We Mourn Casey",
      text: "Grooban's masterful renditions capture the essence of Casey's musical genius."
    },
    {
      artist: "Fly High While Gruban Belts",
      text: "Let Gruban's soaring vocals take you on a journey through Casey's greatest hits."
    },
    {
      artist: "Open Your Heart With Grubman",
      text: "Grubman honors Casey's legacy with these heartfelt performances."
    }
  ];

  const memories = [
    "A visionary who saw music in the everyday moments of life - Jan Skylar Channel 5 News",
    "His songs touched hearts and brought joy to millions- Uncle Muscles",
    "I do not care - Deborah Tatum",
    "Forever remembered for his innovative approach to songwriting- Pall Willeaux",
    "Casey is dead. But now I sing his songs- Josh Groban",
    "Where, where did my brother go- His Brother"
  ];

  // Move these inside useEffect to avoid dependency warnings
  const getSongsList = () => [
    { 
      title: "Time Travel",
      duration: "0:10",
      file: "music/GrobanSingsCasey/timetravel.mp3"
    },
    { 
      title: "(I Want to Ride) In a Choo-Choo Train",
      duration: "0:04",
      file: "music/GrobanSingsCasey/choochootrain.mp3"
    },
    { 
      title: "Hamburgers and Hot Dogs",
      duration: "0:06",
      file: "music/GrobanSingsCasey/hamburgers.mp3"
    },
    { 
      title: "Cops and Robbers",
      duration: "0:08",
      file: "music/GrobanSingsCasey/copsandrobbers.mp3"
    }
  ];

  const getFullSong = () => ({
    title: "Right Way to Rock",
    duration: "1:03",
    file: "music/GrobanSingsCasey/rightwaytorock.mp3"
  });

  useEffect(() => {
    const songs = [...getSongsList(), getFullSong()];
    const currentAudioRefs = {};

    // Initialize audio elements
    songs.forEach(song => {
      const audio = new Audio(song.file);
      currentAudioRefs[song.title] = audio;
      
      const updateProgress = () => {
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        setProgress(prev => ({
          ...prev,
          [song.title]: progressPercent
        }));
      };

      const handleEnded = () => {
        setPlayingTrack(null);
        setProgress(prev => ({
          ...prev,
          [song.title]: 0
        }));
      };

      audio.addEventListener('timeupdate', updateProgress);
      audio.addEventListener('ended', handleEnded);
    });

    audioRefs.current = currentAudioRefs;

    // Cleanup function
    return () => {
      Object.values(currentAudioRefs).forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
    };
  }, []); // Empty dependency array since we don't need to re-run this effect

  const handlePlay = (song) => {
    try {
      const currentAudio = audioRefs.current[song.title];
      if (!currentAudio) {
        console.error('Audio not initialized for:', song.title);
        return;
      }
      
      // Stop any currently playing track
      if (playingTrack && audioRefs.current[playingTrack]) {
        audioRefs.current[playingTrack].pause();
        audioRefs.current[playingTrack].currentTime = 0;
      }

      // Toggle play/pause for selected track
      if (playingTrack === song.title) {
        currentAudio.pause();
        setPlayingTrack(null);
      } else {
        currentAudio.play().catch(error => {
          console.error('Error playing audio:', error);
          setPlayingTrack(null);
        });
        setPlayingTrack(song.title);
      }
    } catch (error) {
      console.error('Error in handlePlay:', error);
      setPlayingTrack(null);
    }
  };

  const featuredSongs = getSongsList();
  const fullSong = getFullSong();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-yellow-400 to-blue-900">
      <div className="max-w-6xl mx-auto py-8 px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-6xl text-white drop-shadow-lg mb-4" 
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            Groban Sings Casey
          </h1>
          
          {/* Image Carousel */}
          <ImageCarousel
            images={[
              "images/pages/categories/entertainment/GrobanSingsCasey/groban1.png",
              "images/pages/categories/entertainment/GrobanSingsCasey/groban3.png",
              "images/pages/categories/entertainment/GrobanSingsCasey/groban2.png",
              "images/pages/categories/entertainment/GrobanSingsCasey/groban4.png"
            ]} 
          />
        </div>

        {/* Description Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-serif text-blue-900 mb-4">About This Collection</h2>
            <div className="space-y-4">
              {descriptions.map((desc, index) => (
                <div key={index} className="p-4 bg-blue-50 rounded-lg">
                  <div className="text-lg font-medium text-blue-800 mb-2">{desc.artist}</div>
                  <p className="text-gray-700">{desc.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-900 text-white rounded-lg p-6">
            <h2 className="text-2xl font-serif mb-4">Remembering Casey</h2>
            <div className="space-y-4">
              {memories.map((memory, index) => (
                <div key={index} className="p-4 bg-blue-800/50 rounded-lg backdrop-blur-sm">
                  <p className="text-lg italic">{memory}</p>
                  <div className="mt-2 h-px bg-blue-400/30"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Clips Section */}
        <div className="bg-white/95 backdrop-blur-sm mb-8 rounded-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-3xl font-serif text-blue-900">Featured Song Clips</h2>
          </div>
          <div className="p-6">
            <div className="grid gap-4">
              {featuredSongs.map((song, index) => (
                <div key={index} 
                     className="flex items-center justify-between p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all">
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => handlePlay(song)}
                      className="w-12 h-12 flex items-center justify-center bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-colors"
                    >
                      {playingTrack === song.title ? 
                        <Pause className="h-6 w-6" /> : 
                        <Play className="h-6 w-6" />}
                    </button>
                    <div>
                      <h3 className="text-xl font-medium">{song.title}</h3>
                      <p className="text-gray-600">Josh Groban - {song.duration}</p>
                    </div>
                  </div>
                  <div className="w-48 h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-full bg-blue-600 rounded-full transition-all duration-300"
                      style={{ width: `${progress[song.title] || 0}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full Song Feature */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white mb-12 rounded-lg overflow-hidden">
          <div className="p-6 border-b border-blue-800">
            <h2 className="text-3xl font-serif">CINCO™ Gives:</h2>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between p-6 rounded-lg">
              <div className="flex items-center gap-6">
                <button 
                  onClick={() => handlePlay(fullSong)}
                  className="w-16 h-16 flex items-center justify-center bg-white text-blue-900 rounded-full hover:bg-gray-100 transition-colors"
                >
                  {playingTrack === fullSong.title ? 
                    <Pause className="h-8 w-8" /> : 
                    <Play className="h-8 w-8" />}
                </button>
                <div>
                  <h3 className="text-2xl font-medium">{fullSong.title}</h3>
                  <p className="text-blue-200">Full Length - {fullSong.duration}</p>
                </div>
              </div>
              <div className="w-64 h-3 bg-blue-700 rounded-full">
                <div 
                  className="h-full bg-white rounded-full transition-all duration-300"
                  style={{ width: `${progress[fullSong.title] || 0}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Banner */}
        <div className="text-center bg-blue-900/80 backdrop-blur-sm rounded-xl p-8 mb-8">
          <div className="text-4xl font-bold text-white mb-4">3 EASY PAYMENTS OF $45.99</div>
          <div className="text-2xl text-yellow-400 mb-4">CALL TO ORDER NOW</div>
          <div className="text-3xl font-mono text-white">+1 (800) 555-0199</div>
        </div>

        {/* Legal Footer */}
        <div className="text-center text-white/80 space-y-2 text-sm">
          <p>Order now using cash, check, credit card. No IOUs. We accept Cinco Cards!</p>
          <p>2 year warranty does not cover water damage or theft.</p>
          <p>Price does not include tax, or shipping and handling.</p>
          <p>Please allow 8 to 9 months for delivery.</p>
          <p>No refunds, exchanges, or upgrades to CD.</p>
          <p>The Tatum family does not endorse Josh Groban.</p>
          <p>Footage Courtesy of Uncle Muscles</p>
          <p>Copyright 2008 No Sunsets Music PMI. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default GrobanSingsCasey;