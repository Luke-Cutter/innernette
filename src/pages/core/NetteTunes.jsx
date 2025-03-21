import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause, SkipBack, SkipForward, X } from 'lucide-react';

const VisualizerBar = ({ height }) => (
  <div
    style={{ height: `${height}%` }}
    className="w-2 bg-gradient-to-t from-cyan-400 to-purple-500 rounded-sm transition-all duration-200"
  />
);

const PlaylistItem = ({ track, isActive, onClick }) => (
  <div 
    className={`p-2 transition-all duration-200 border-b border-teal-300/30 ${
      track.status === 'LOCKED' 
        ? 'opacity-50 cursor-not-allowed'
        : isActive 
          ? 'bg-gradient-to-r from-cyan-400/20 to-purple-500/20 text-white' 
          : 'hover:bg-cyan-400/10 text-teal-100'
    }`}
    onClick={onClick}
  >
    <div className="flex items-center justify-between">
      <div>
        <div className="font-bold tracking-wide text-sm">{track.title}</div>
        <div className="text-xs opacity-75">{track.artist}</div>
      </div>
      {track.status === 'LOCKED' && (
        <span className="text-[10px] text-red-400 font-mono border border-red-400/50 px-1">
          LOCKED
        </span>
      )}
      {track.status === 'AVAILABLE' && (
        <span className="text-[10px] text-cyan-400 font-mono border border-cyan-400/50 px-1">
          READY
        </span>
      )}
    </div>
  </div>
);

const ErrorModal = ({ onClose }) => (
  <div 
    className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn"
    onClick={onClose}
  >
    <div 
      className="bg-gradient-to-br from-purple-900 to-purple-800 p-6 rounded-lg shadow-2xl max-w-md mx-4 
                 relative border-2 border-purple-500"
      onClick={e => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-purple-300 hover:text-red-400 transition-colors"
      >
        <X className="w-5 h-5" />
      </button>
      <h3 className="text-xl font-bold mb-4 text-purple-300">
        CINCO™ LICENSE ERROR!
      </h3>
      <p className="text-purple-100 mb-4">
        Uh Oh! You didn't pay the CINCO™ licensing fee, no music for you!
      </p>
      <p className="text-sm text-purple-300 italic mb-4">
        Purchase the CINCO™ Music Extension Pack™ for 5 payments of $19.99
      </p>
      <div className="text-xs text-purple-400 border-t border-purple-700 pt-4">
        *CINCO™ is not responsible for any memories lost during unauthorized playback attempts.
      </div>
    </div>
  </div>
);

const NetteTunes = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showError, setShowError] = useState(false);
  const audioRef = useRef(null);

  const playlist = [
    { title: 'Funk Barn', artist: 'Jeff GoldBluMan Group', genre: 'Anti-Jazz Funk Fusion', status: 'AVAILABLE' },
    { title: 'Over the Pain', artist: 'Clark Roper', genre: 'Sad Country', status: 'LOCKED' },
    { title: 'Feelings for Daniel', artist: 'Cornerpin', genre: 'Rock/Emotions', status: 'LOCKED' },
    { title: 'Crippled Tears', artist: 'Darkhorn', genre: 'Heavy Meta-Metal', status: 'LOCKED' },
    { title: 'Sports!', artist: 'Diamond Bags', genre: 'Sports', status: 'LOCKED' },
    { title: 'Cops and Robbers', artist: 'Casey Tatum... And His Brother', genre: 'On the Run', status: 'LOCKED' },
    { title: 'Doo Da Doo Doo', artist: 'Pierre', genre: 'Children\'s Song', status: 'LOCKED' },
    { title: 'Beach Blast', artist: 'James Quall', genre: 'Sun-Soaked', status: 'LOCKED' },
    { title: 'Spank My Butt', artist: 'Paynus Brothers', genre: 'Red Hot Buns', status: 'LOCKED' },
    { title: '2 Dark Boys', artist: 'Zwei Dunkel Jungen', genre: 'Swedish/ German Who Knows?', status: 'LOCKED' },
    { title: 'I\'m Going to Be a Mommy!', artist: 'Jackie', genre: 'Bodybuilder Mommy', status: 'LOCKED' }
  ];

  const [currentTrack, setCurrentTrack] = useState(playlist[0]);

  const generateVisualizerBars = useCallback(() => {
    const baseHeight = isPlaying ? 60 : 15;
    return Array.from({ length: 24 }, () => baseHeight + (Math.random() * 20));
  }, [isPlaying]);

  const [visualizerBars, setVisualizerBars] = useState(generateVisualizerBars);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => setVisualizerBars(generateVisualizerBars), 150);
    }
    return () => clearInterval(interval);
  }, [isPlaying, generateVisualizerBars]);

  const togglePlay = () => {
    if (currentTrack.status === 'LOCKED') {
      setShowError(true);
      return;
    }
    
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          console.error('Playback failed');
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 p-8 overflow-y-hidden">
      <div className=" mx-auto bg-gradient-to-br from-white-900 to-gray-800 rounded-xl shadow-2xl overflow-hidden border border-cyan-500/30">
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-3">
          <h1 className="text-2xl font-bold text-white text-center tracking-widest">
            NETTE TUNES 2.5
          </h1>
          <div className="text-xs text-center text-white/75">
            The Future of Pre-Recorded Digital Sound Technology™
          </div>
        </div>

        <div className="flex">
          {/* Playlist Section */}
          <div className="w-1/3 border-r border-teal-300/20">
            <div className="p-3 bg-gradient-to-r from-cyan-950 to-purple-950 border-b border-teal-300/20">
              <h3 className="text-xs font-bold text-teal-300">AVAILABLE TRACKS:</h3>
            </div>
            <div className="overflow-y-auto max-h-[600px]">
              {playlist.map((track, index) => (
                <PlaylistItem
                  key={index}
                  track={track}
                  isActive={track.title === currentTrack.title}
                  onClick={() => {
                    if (track.status === 'LOCKED') {
                      setShowError(true);
                    } else {
                      setCurrentTrack(track);
                    }
                  }}
                />
              ))}
            </div>
          </div>

          {/* Main Content Section */}
          <div className="flex-1 flex flex-col">
            {/* Player Section */}
            <div className="p-6">
              {/* Now Playing Info */}
              <div className="text-center mb-6">
                <div className="text-cyan-400 text-xs font-bold tracking-widest">NOW PLAYING</div>
                <div className="text-2xl font-bold text-white mb-1">{currentTrack.title}</div>
                <div className="text-teal-300 text-sm">{currentTrack.artist}</div>
                <div className="text-xs text-cyan-400/75 italic mt-1">{currentTrack.genre}</div>
              </div>

              {/* Visualizer */}
              <div className="h-48 flex items-end justify-center gap-1 mb-6">
                {visualizerBars.map((height, index) => (
                  <VisualizerBar key={index} height={height} />
                ))}
              </div>

              {/* Controls */}
              <div className="flex justify-center items-center gap-4 border-t border-teal-300/20 pt-4">
                <audio ref={audioRef} src="/music/NetteTunes/funkbarn.mp3" />
                <button 
                  className="w-8 h-8 rounded-full flex items-center justify-center text-teal-300 hover:text-cyan-400 transition-colors"
                  onClick={() => setShowError(true)}
                >
                  <SkipBack className="w-5 h-5" />
                </button>
                <button 
                  className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-cyan-500/20 transition-all hover:scale-105"
                  onClick={togglePlay}
                >
                  {isPlaying ? 
                    <Pause className="w-6 h-6 text-white" /> : 
                    <Play className="w-6 h-6 text-white ml-1" />
                  }
                </button>
                <button 
                  className="w-8 h-8 rounded-full flex items-center justify-center text-teal-300 hover:text-cyan-400 transition-colors"
                  onClick={() => setShowError(true)}
                >
                  <SkipForward className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Additional Info Section */}
            <div className="p-6 border-t border-teal-300/20">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xs font-bold text-cyan-400 tracking-widest mb-3">
                    ABOUT THIS TRACK
                  </h3>
                  <p className="text-sm text-teal-300 mb-4">
                    Focused. Powerful. Force of Nature. Recorded in the Cinco Sound Studios™ by the Jeff GoldBluMan Group this song won 5 Grummies!
                  </p>
                  <div className="text-xs text-cyan-400/75">
                    Release Date: Feb 11, 2007<br/>
                    Duration: 4:20<br/>
                    Format: CINCO™ Digital Audio (.CDA)
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-cyan-400 tracking-widest mb-3">
                    LISTENING NOTES
                  </h3>
                  <p className="text-sm text-teal-300 mb-4">
                    Warning: This track contains frequencies known to cause bluephoria. CINCO™ is not responsible for any interior rashes developed.
                  </p>
                  <div className="text-xs italic text-purple-400/75">
                    "It's like jazz, but without all the jazz parts" - Terry Cinco
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 bg-gradient-to-br from-purple-950 to-cyan-950 rounded-xl shadow-2xl overflow-hidden border border-cyan-500/30">
        <div className="bg-gradient-to-r from-purple-500 to-cyan-500 p-3">
          <h2 className="text-2xl font-bold text-white text-center tracking-widest">
            NETTE TUNES™ MANUAL
          </h2>
        </div>

        <div className="p-6 text-cyan-100">
          <div className="mb-6 border-2 border-red-500/50 bg-red-950/30 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-red-400 mb-2">⚠️ CINCO™ MUSIC WARNINGS ⚠️</h3>
            <p className="text-red-300">
              Side effects include: total organ failure, spontaneous bone liquefaction, 
              retrograde memory loss, temporal displacement, teeth migration, and in most cases, complete genetic restructuring.
              CINCO™ is not responsible for any self-harm while listening to Funk Barn.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="text-lg font-bold text-purple-400">MANDATORY SURVIVAL PROTOCOLS:</h4>
              <div className="bg-purple-950/30 p-4 rounded border border-purple-500/30">
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Sign all organ donation forms</li>
                  <li>Update your last will and testament</li>
                  <li>Say goodbye to loved ones</li>
                  <li>Accept CINCO™ as your new legal guardian</li>
                  <li>Press play and prepare for transcendence</li>
                </ol>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-lg font-bold text-cyan-400">Tech Specs:</h4>
              <div className="bg-cyan-950/30 p-4 rounded border border-cyan-500/30">
                <ul className="space-y-2 text-sm">
                  <li>• Powered by forbidden CINCO™ technologies</li>
                  <li>• Compatible with 0.001% of human DNA</li>
                  <li>• Mandatory soul extraction protocols</li>
                  <li>• Reality destabilization engine</li>
                  <li>• Built-in flesh reconstructor (usually works)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center text-xs text-cyan-400/75 italic border-t border-cyan-500/20 pt-4">
            CINCO™ Music Division | Patent Pending | Not available in dimension C-132
            <br />
            "Your children are now legally my property" - Terry Cinco
          </div>
        </div>
      </div>

      {showError && <ErrorModal onClose={() => setShowError(false)} />}
    </div>
  );
};

export default NetteTunes;