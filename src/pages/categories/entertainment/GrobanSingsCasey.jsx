import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Music, Heart, Star } from 'lucide-react';
import ImageCarousel from '../../../components/shared/ImageCarousel';

const GrobanSingsCasey = () => {
  const [playingTrack, setPlayingTrack] = useState(null);
  const [progress, setProgress] = useState({});
  const audioRefs = useRef({});

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
    "His songs touched hearts and brought joy to millions - Uncle Muscles",
    "I do not care - Deborah Tatum",
    "Forever remembered for his innovative approach to songwriting - Pall Willeaux",
    "Casey is dead. But now I sing his songs - Josh Groban",
    "Where, where did my brother go - His Brother"
  ];

  const getSongsList = () => [
    { title: "Time Travel", duration: "0:10", file: "music/GrobanSingsCasey/timetravel.mp3" },
    { title: "(I Want to Ride) In a Choo-Choo Train", duration: "0:04", file: "music/GrobanSingsCasey/choochootrain.mp3" },
    { title: "Hamburgers and Hot Dogs", duration: "0:06", file: "music/GrobanSingsCasey/hamburgers.mp3" },
    { title: "Cops and Robbers", duration: "0:08", file: "music/GrobanSingsCasey/copsandrobbers.mp3" }
  ];

  const getFullSong = () => ({
    title: "Right Way to Rock",
    duration: "1:03",
    file: "music/GrobanSingsCasey/rightwaytorock.mp3"
  });

  useEffect(() => {
    const songs = [...getSongsList(), getFullSong()];
    const currentAudioRefs = {};

    songs.forEach(song => {
      const audio = new Audio(song.file);
      currentAudioRefs[song.title] = audio;
      
      const updateProgress = () => {
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        setProgress(prev => ({ ...prev, [song.title]: progressPercent }));
      };

      const handleEnded = () => {
        setPlayingTrack(null);
        setProgress(prev => ({ ...prev, [song.title]: 0 }));
      };

      audio.addEventListener('timeupdate', updateProgress);
      audio.addEventListener('ended', handleEnded);
    });

    audioRefs.current = currentAudioRefs;

    return () => {
      Object.values(currentAudioRefs).forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
    };
  }, []);

  const handlePlay = (song) => {
    try {
      const currentAudio = audioRefs.current[song.title];
      if (!currentAudio) return;
      
      if (playingTrack && audioRefs.current[playingTrack]) {
        audioRefs.current[playingTrack].pause();
        audioRefs.current[playingTrack].currentTime = 0;
      }

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
    <div className="min-h-screen relative overflow-hidden" style={{
      background: `
        linear-gradient(135deg, #7cd7fbff 0%, #8e54f2ff 25%, #93c5fd 50%, #c4b5fd 75%, #fbcfe8 100%),
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='70' height='46' viewBox='0 0 70 46'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpolygon points='68 44 62 44 62 46 56 46 56 44 52 44 52 46 46 46 46 44 40 44 40 46 38 46 38 44 32 44 32 46 26 46 26 44 22 44 22 46 16 46 16 44 12 44 12 46 6 46 6 44 0 44 0 42 8 42 8 28 6 28 6 0 12 0 12 28 10 28 10 42 18 42 18 28 16 28 16 0 22 0 22 28 20 28 20 42 28 42 28 28 26 28 26 0 32 0 32 28 30 28 30 42 38 42 38 0 40 0 40 42 48 42 48 28 46 28 46 0 52 0 52 28 50 28 50 42 58 42 58 28 56 28 56 0 62 0 62 28 60 28 60 42 68 42 68 0 70 0 70 46 68 46'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
      `,
      backgroundBlendMode: 'overlay',
    }}>
      <style>{`
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gentleGlow {
          0%, 100% { filter: drop-shadow(0 0 20px rgba(251, 191, 36, 0.4)); }
          50% { filter: drop-shadow(0 0 35px rgba(251, 191, 36, 0.6)); }
        }
        .shimmer-gold {
          background: linear-gradient(90deg, #f59e0b 0%, #fef3c7 50%, #f59e0b 100%);
          background-size: 1000px 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .musical-staff {
          background-image: repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(59, 130, 246, 0.15) 19px, rgba(59, 130, 246, 0.15) 20px);
        }
        .dots-texture {
          background-image: radial-gradient(circle, rgba(59, 130, 246, 0.2) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        .diagonal-lines {
          background-image: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(147, 51, 234, 0.1) 10px, rgba(147, 51, 234, 0.1) 20px);
        }
        .zigzag-texture {
          background-image: linear-gradient(135deg, rgba(236, 72, 153, 0.1) 25%, transparent 25%), linear-gradient(225deg, rgba(236, 72, 153, 0.1) 25%, transparent 25%);
          background-size: 30px 30px;
        }
        .wavy-texture {
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q25 30 50 50 T100 50' stroke='rgba(251,191,36,0.2)' stroke-width='2' fill='none'/%3E%3Cpath d='M0 70 Q25 50 50 70 T100 70' stroke='rgba(59,130,246,0.2)' stroke-width='2' fill='none'/%3E%3C/svg%3E");
          background-size: 100px 100px;
        }
      `}</style>

      <div className="absolute inset-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 15 + 5}px`,
              height: `${Math.random() * 15 + 5}px`,
              background: ['#fbbf24', '#60a5fa', '#a78bfa', '#f472b6', '#34d399'][Math.floor(Math.random() * 5)],
              opacity: Math.random() * 0.6 + 0.2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto py-12 px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="mb-8">
            <div className="inline-block bg-white px-8 py-3 bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 border-2 border-purple-400 rounded-full mb-6 dots-texture">
              <p className="text-purple-800 text-lg font-serif italic font-bold">In Loving Memory of Casey Tatum</p>
            </div>
          </div>
          
          <h1 className="font-serif text-8xl mb-4 shimmer-gold" style={{ fontWeight: '300', letterSpacing: '0.05em', textShadow: '3px 3px 0px rgba(251, 191, 36, 0.4)' }}>
            Groban Sings Casey
          </h1>
          
          <div className="text-2xl text-blue-700 font-serif italic mb-12 font-bold" style={{letterSpacing: '0.1em'}}>
            A Musical Tribute to a Legend
          </div>
          
          <div className="flex justify-center gap-8 mb-8">
            <Star className="text-yellow-500" size={28} style={{animation: 'gentleGlow 3s ease-in-out infinite'}} />
            <Music className="text-blue-500" size={28} style={{animation: 'gentleGlow 3s ease-in-out infinite', animationDelay: '0.5s'}} />
            <Heart className="text-pink-500" size={28} style={{animation: 'gentleGlow 3s ease-in-out infinite', animationDelay: '1s'}} />
            <Music className="text-purple-500" size={28} style={{animation: 'gentleGlow 3s ease-in-out infinite', animationDelay: '1.5s'}} />
            <Star className="text-yellow-500" size={28} style={{animation: 'gentleGlow 3s ease-in-out infinite', animationDelay: '2s'}} />
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-yellow-300 to-blue-300 opacity-40 blur-3xl"></div>
            <div className="relative border-8 bg-blue-100 border-double border-yellow-500 rounded-lg overflow-hidden shadow-2xl wavy-texture">
              <ImageCarousel images={[
                "images/pages/categories/entertainment/GrobanSingsCasey/groban1.png",
                "images/pages/categories/entertainment/GrobanSingsCasey/groban3.png",
                "images/pages/categories/entertainment/GrobanSingsCasey/groban2.png",
                "images/pages/categories/entertainment/GrobanSingsCasey/groban4.png"
              ]} />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border-4 border-blue-400 relative overflow-hidden">
            <div className="absolute inset-0 diagonal-lines opacity-50"></div>
            <div className="absolute inset-0 dots-texture opacity-30"></div>
            <h2 className="text-3xl font-serif text-purple-800 mb-6 flex items-center gap-3 relative z-10">
              <Music className="text-blue-600" size={32} />
              The Collection
            </h2>
            <div className="space-y-5 musical-staff py-6 relative z-10">
              {descriptions.map((desc, index) => (
                <div key={index} className="p-5 bg-white/80 rounded-lg border-3 border-purple-400 backdrop-blur-sm hover:bg-white/90 transition-all shadow-md zigzag-texture">
                  <div className="text-xl font-semibold text-purple-700 mb-2">{desc.artist}</div>
                  <p className="text-gray-800 leading-relaxed">{desc.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-100 to-yellow-100 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border-4 border-pink-400 relative overflow-hidden">
            <div className="absolute inset-0 wavy-texture opacity-40"></div>
            <div className="absolute inset-0 dots-texture opacity-20"></div>
            <h2 className="text-3xl font-serif mb-6 flex items-center gap-3 text-pink-800 relative z-10">
              <Heart className="text-red-500" size={32} />
              Remembering Casey
            </h2>
            <div className="space-y-5 musical-staff py-6 relative z-10">
              {memories.map((memory, index) => (
                <div key={index} className="p-5 bg-white/80 rounded-lg backdrop-blur-sm border-3 border-pink-400 hover:bg-white/90 transition-all shadow-md diagonal-lines">
                  <p className="text-lg italic leading-relaxed text-gray-800">{memory}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-blue-100 backdrop-blur-xl mb-12 rounded-2xl overflow-hidden shadow-2xl border-4 border-yellow-500 relative">
          <div className="absolute inset-0 zigzag-texture opacity-30"></div>
          <div className="p-8 bg-gradient-to-r from-yellow-200 to-amber-200 border-b-4 border-yellow-500 relative z-10">
            <h2 className="text-4xl font-serif text-amber-900 flex items-center gap-4">
              <Music className="text-amber-700" size={40} />
              Symphony of Classics
            </h2>
            <p className="text-amber-800 mt-2 text-lg font-serif italic">Sample the beauty of Casey's legacy</p>
          </div>
          <div className="p-8 musical-staff relative z-10">
            <div className="grid gap-6">
              {featuredSongs.map((song, index) => (
                <div key={index} className="flex items-center justify-between p-6 bg-white/90 rounded-xl border-3 border-blue-400 hover:bg-white transition-all shadow-lg backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 dots-texture opacity-20"></div>
                  <div className="flex items-center gap-6 relative z-10">
                    <button onClick={() => handlePlay(song)} className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-yellow-400 to-amber-500 text-white rounded-full hover:from-yellow-500 hover:to-amber-600 transition-all shadow-xl transform hover:scale-105">
                      {playingTrack === song.title ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8 ml-1" />}
                    </button>
                    <div>
                      <h3 className="text-2xl font-semibold text-purple-800">{song.title}</h3>
                      <p className="text-blue-700 text-lg mt-1">Performed by Josh Groban • {song.duration}</p>
                    </div>
                  </div>
                  <div className="w-64 h-2 bg-blue-200 rounded-full shadow-inner overflow-hidden relative z-10">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 shadow-lg" style={{ width: `${progress[song.title] || 0}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 backdrop-blur-xl mb-12 rounded-2xl overflow-hidden shadow-2xl border-4 border-purple-500 relative">
          <div className="absolute inset-0 wavy-texture opacity-40"></div>
          <div className="absolute inset-0 diagonal-lines opacity-30"></div>
          <div className="p-8 bg-gradient-to-r from-purple-200 to-pink-200 border-b-4 border-purple-500 relative z-10">
            <h2 className="text-4xl font-serif flex items-center gap-4 text-purple-900">
              <Star className="text-yellow-500" size={40} />
              CINCO™ Presents: The Masterpiece
            </h2>
          </div>
          <div className="p-10 relative z-10">
            <div className="flex items-center justify-between p-8 bg-white/80 rounded-xl backdrop-blur-sm border-3 border-purple-400 relative overflow-hidden">
              <div className="absolute inset-0 dots-texture opacity-20"></div>
              <div className="flex items-center gap-8 relative z-10">
                <button onClick={() => handlePlay(fullSong)} className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all shadow-2xl transform hover:scale-105">
                  {playingTrack === fullSong.title ? <Pause className="h-12 w-12" /> : <Play className="h-12 w-12 ml-1" />}
                </button>
                <div>
                  <h3 className="text-4xl font-bold text-purple-900 mb-2">{fullSong.title}</h3>
                  <p className="text-pink-700 text-xl">Complete Performance • {fullSong.duration}</p>
                </div>
              </div>
              <div className="w-80 h-3 bg-purple-200 rounded-full shadow-inner overflow-hidden border-2 border-purple-400 relative z-10">
                <div className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 rounded-full transition-all duration-300 shadow-lg" style={{ width: `${progress[fullSong.title] || 0}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 backdrop-blur-xl rounded-2xl p-12 mb-10 shadow-2xl border-4 border-blue-400 relative overflow-hidden">
          <div className="absolute inset-0 zigzag-texture opacity-30"></div>
          <div className="absolute inset-0 dots-texture opacity-20"></div>
          <div className="text-6xl font-bold text-purple-800 mb-6 shimmer-gold relative z-10" style={{letterSpacing: '0.05em'}}>
            3 EASY PAYMENTS OF $45.99
          </div>
          <div className="text-3xl text-blue-800 mb-6 font-serif relative z-10">Call to Honor Casey's Memory</div>
          <div className="inline-block bg-white border-4 border-yellow-500 rounded-xl px-12 py-6 relative z-10 shadow-xl">
            <div className="text-5xl font-mono text-amber-700">+1 (800) 555-0199</div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-br from-blue-50 to-purple-50 backdrop-blur-xl rounded-2xl p-8 space-y-2 text-sm text-gray-800 border-3 border-blue-300 relative overflow-hidden">
          <div className="absolute inset-0 diagonal-lines opacity-20"></div>
          <div className="relative z-10">
            <p>Order now using cash, check, credit card. No IOUs. We accept Cinco Cards!</p>
            <p>2 year warranty does not cover water damage or theft.</p>
            <p>Price does not include tax, or shipping and handling.</p>
            <p>Please allow 8 to 9 months for delivery.</p>
            <p>No refunds, exchanges, or upgrades to CD.</p>
            <p>The Tatum family does not endorse Josh Groban.</p>
            <p>Footage Courtesy of Uncle Muscles</p>
            <p className="text-purple-700 font-semibold pt-4">Copyright 2008 No Sunsets Music PMI. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrobanSingsCasey;