// This page is inspired by the Cinco Identity Generator 2.5 projects by alexmeub and skluck. A lot of the images and videos came from them!
// Links: Alexmeub: https://celeryman.alexmeub.com/
//        skluck: https://github.com/skluck/celery-man

import { useState, useEffect, useRef } from 'react';
import { PhoneCall } from 'lucide-react';

// Blinking text component
const BlinkingText = ({ children }) => {
  const [visible, setVisible] = useState(true);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(v => !v);
    }, 500);
    return () => clearInterval(interval);
  }, []);
  
  return <span style={{ visibility: visible ? 'visible' : 'hidden' }}>{children}</span>;
};

// Window style configuration
const windowBaseStyle = "bg-[#edeced] overflow-hidden m-auto p-0 absolute text-center";

// Shared window header component
const WindowHeader = ({ title, onClose, canClose = true }) => (
  <div className="bg-[#1a0099] py-1 px-2 flex justify-between items-center border-b-2 border-gray-300">
    <span className="text-white text-sm">{title}</span>
    <div className="flex gap-1">
      {canClose ? (
        <div 
          className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" 
          onClick={onClose}
        ></div>
      ) : (
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
      )}
      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div className="w-3 h-3 rounded-full bg-green-500"></div>
    </div>
  </div>
);

// Define all sequences with their configurations
const sequences = {
    celery: {
      title: 'CELERY MAN',
      windows: [
        { id: 'celery1', position: { top: '100px', left: '50px' } },
        { id: 'celery2', position: { top: '50px', left: '500px' } },
        { id: 'celery3', position: { top: '250px', left: '650px' } },
        { id: 'celery4', position: { top: '275px', left: '250px' } }
      ],
      prompt: '4d3d3d3 Engaged.',
      audioTracks: ['celery'],
      voiceLine: '4d3d3d3engaged'
    },
    oyster: {
      title: 'OYSTER',
      windows: [
        { id: 'oyster1', position: { top: '20px', left: '200px' } },
        { id: 'oyster2', position: { top: '250px', left: '50px' } },
        { id: 'oyster3', position: { top: '250px', left: '450px' } }
      ],
      prompt: 'add sequence: OYSTER',
      audioTracks: ['celery', 'oyster'],
      voiceLine: 'addsequenceoyster'
    },
    tayne: {
      title: 'TAYNE',
      windows: [
        { id: 'tayne1', position: { top: '220px', left: '500px' } },
        { id: 'tayne2', position: { top: '220px', left: '110px' } },
        { id: 'tayne3', position: { top: '300px', left: '650px' } },
        { id: 'tayne4', position: { top: '380px', left: '250px' } },
        { id: 'tayne5', position: { top: '50px', left: '300px' } },
        { id: 'tayne6', position: { top: '50px', left: '600px' } },
        { id: 'tayne7', position: { top: '50px', left: '0px' } }
      ],
      prompt: 'I have a BETA sequence I have been working on. Would you like to see it?',
      audioTracks: ['tayne'],
      voiceLine: 'betasequence'
    },
    mozza: {
      title: 'MOZZA-RELL',
      windows: [
        { id: 'mozza1', position: { top: '80px', left: '50px' } },
        { id: 'mozza1', position: { top: '80px', left: '700px' } },
        { id: 'mozza2', position: { top: '200px', left: '235px' } },
      ],
      prompt: 'Yes, Paul.',
      audioTracks: ['celery'],
      voiceLine: 'yespaul'
    }
  };

const VideoWindow = ({ id, title, position, onClose, isVisible }) => {
    const videoRef = useRef(null);
    
    useEffect(() => {
      if (!videoRef.current || !isVisible) return;
      
      const videoElement = videoRef.current;
      videoElement.preload = 'metadata';
      videoElement.src = `/video/CincoIdentityGenerator/${id}.mp4`;
      
      const handlePlay = () => {
        videoElement.play();
      };
  
      videoElement.addEventListener('loadedmetadata', handlePlay);
  
      return () => {
        videoElement.removeEventListener('loadedmetadata', handlePlay);
        videoElement.src = URL.createObjectURL(new Blob([]));
        videoElement.load();
      };
    }, [id, isVisible]);
  
    if (!isVisible) return null;
  
    return (
      <div 
        className={`min-w-[200px] ${windowBaseStyle}`}
        style={position}
      >
        <div className="bg-white border-2 border-gray-300 h-full">
          <WindowHeader title={title} onClose={onClose} />
          <div className="relative w-full h-full bg-black p-2">
            <video 
              ref={videoRef}
              autoPlay 
              loop 
              muted
              playsInline
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    );
  };

const WelcomeWindow = ({ isVisible, progress, showOptions, onSequenceSelect }) => {
  if (!isVisible) return null;

  return (
    <div className={`${windowBaseStyle} w-[500px] left-1/2 -ml-[250px] top-4`}>
      <div className="bg-white border-2 border-gray-300">
        <WindowHeader title="Cinco Identity Generator 2.5" />
        <div className="p-4">
          <img 
            className="w-full" 
            src="/images/pages/categories/cinco//CincoIdentityGenerator/cinco.png"
            alt="Cinco Identity Generator" 
          />
          
          {!showOptions && (
            <div className="mt-5 space-y-4">
              <h2 className="text-lg font-bold">Cinco Identity Generator 2.5</h2>
              <div className="w-3/4 mx-auto">
                <progress 
                  className="block w-full h-8" 
                  max="100" 
                  value={progress} 
                />
              </div>
              <h3 className="text-base font-bold">Please wait...</h3>
            </div>
          )}

          {showOptions && (
            <div className="mt-5 space-y-4">
              <h2 className="text-lg font-bold py-2">Please choose a sequence:</h2>
              <ul className="grid grid-cols-4 gap-4 w-[450px] mx-auto">
                {Object.entries(sequences).map(([key, sequence]) => (
                  <li 
                    key={key} 
                    className="cursor-pointer transform transition-transform hover:scale-105"
                    onClick={() => onSequenceSelect(key)}
                  >
                    <div className="aspect-square">
                      <img 
                        src={`/images/pages/categories/cinco//CincoIdentityGenerator/btn-${key}.png`}
                        alt={sequence.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h4 className="text-sm mt-1">{sequence.title}</h4>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const PromptWindow = ({ isVisible, message }) => {
  if (!isVisible) return null;

  return (
    <div className={`${windowBaseStyle} h-24 w-[400px] bottom-4 left-4`}>
      <div className="h-full bg-black border-2 border-gray-300">
        <WindowHeader title="Paul's COMPUTER" canClose={false} />
        <div className="flex items-center ml-3 h-[calc(100%-32px)]">
          <span className="pixel-text text-m text-white">
            <BlinkingText>{message}</BlinkingText>
          </span>
        </div>
      </div>
    </div>
  );
};

const LoaderWindow = ({ isVisible, progress }) => {
  if (!isVisible) return null;

  return (
    <div className={`${windowBaseStyle} left-1/2 top-[200px] -ml-[200px] w-[400px]`}>
      <div className="bg-white border-2 border-gray-300">
        <WindowHeader title="Cinco Identity Generator 2.5" />
        <div className="p-4 space-y-4">
          <div className="w-3/4 mx-auto">
            <progress 
              className="block w-full h-8" 
              max="100" 
              value={progress} 
            />
          </div>
          <h3 className="text-base font-bold">Loading, please wait...</h3>
        </div>
      </div>
    </div>
  );
};

const CincoIdentityGenerator = () => {
  const [welcomeProgress, setWelcomeProgress] = useState(10);
  const [showOptions, setShowOptions] = useState(false);
  const [currentSequence, setCurrentSequence] = useState(null);
  const [loadingProgress, setLoadingProgress] = useState(10);
  const [promptMessage, setPromptMessage] = useState('Good morning Paul.');
  const [showPrompt, setShowPrompt] = useState(false);
  const [activeWindows, setActiveWindows] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [showOysterSmile, setShowOysterSmile] = useState(false);
  const [showPierreHolidayCard, setShowPierreHolidayCard] = useState(false);
  const [showIncomingCall, setShowIncomingCall] = useState(false);
  const pierreVideoRef = useRef(null);
  const callTimeoutRef = useRef(null);
  
  // Audio references
  const audioRefs = {
    celery: useRef(null),
    oyster: useRef(null),
    tayne: useRef(null)
  };

  const voiceRef = useRef(null);

  // Play voice line function
  const playVoiceLine = (filename) => {
    if (voiceRef.current) {
      voiceRef.current.src = `/voicelines/CincoIdentityGenerator/${filename}.mp3`;
      voiceRef.current.play().catch(error => {
        setErrorMessage(``);
      });
    }
  };

  // Audio control functions
  const stopAllAudio = () => {
    Object.values(audioRefs).forEach(ref => {
      if (ref.current) {
        ref.current.pause();
        ref.current.currentTime = 0;
      }
    });
  };

  // Boot sequence
  useEffect(() => {
    const interval = setInterval(() => {
      setWelcomeProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setShowOptions(true);
          setShowPrompt(true);
          playVoiceLine('goodmorningpaul');
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Incoming call timer
  useEffect(() => {
    callTimeoutRef.current = setTimeout(() => {
      setShowIncomingCall(true);
      setActiveWindows({});
      stopAllAudio();
      setPromptMessage("Excuse me Paul. Your wife is on the phone. It's an emergency.");
      playVoiceLine('excusemepaul');
    }, 30000);

    return () => {
      if (callTimeoutRef.current) {
        clearTimeout(callTimeoutRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const playAudioTracks = (tracks) => {
    tracks.forEach(track => {
      if (audioRefs[track]?.current) {
        audioRefs[track].current.play().catch(error => {
          setErrorMessage(`Failed to play audio: ${error.message}`);
        });
      }
    });
  };

  // Sequence handler
  const handleSequenceSelect = (sequence) => {
    setActiveWindows({});
    setCurrentSequence(null);
    stopAllAudio();
    
    if (sequences[sequence]) {
      setCurrentSequence(sequence);
      setLoadingProgress(0);
      const loadInterval = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 100) {
            clearInterval(loadInterval);
            setActiveWindows({
              [sequence]: true
            });
            setPromptMessage(sequences[sequence].prompt);
            
            playVoiceLine(sequences[sequence].voiceLine);
            
            setTimeout(() => {
              playAudioTracks(sequences[sequence].audioTracks);
              setActiveWindows({
                [sequence]: true
              });
            }, 1600);
            return 100;
          }
          return prev + 20;
        });
      }, 500);
    }
  };

  // Reset handler
  const handleReset = () => {
    stopAllAudio();
    setActiveWindows({});
    setPromptMessage('Good morning Paul.');
    setCurrentSequence(null);
    setShowOptions(true);
    playVoiceLine('goodmorningpaul');
  };

  return (
    <div className="relative w-full h-full min-h-[600px] font-sans text-xs bg-[#40AAAC]">
      {/* Desktop Icons */}
      <div className="p-4 space-y-4">
        <button
          className="relative w-20 h-20 group"
          onClick={handleReset}
        >
          <img 
            src="/images/pages/categories/cinco//CincoIdentityGenerator/folder.png"
            alt="Cinco 2.5"
            className="w-16 h-16 mx-auto object-contain"
          />
          <span className="absolute bottom-0 left-0 right-0 text-center">
            Cinco 2.5
          </span>
        </button>
        <button
          className="relative flex items-center w-20 h-20 group"
          onClick={() => setShowOysterSmile(true)}
        >
          <img 
            src="/images/pages/categories/cinco//CincoIdentityGenerator/oystersmile.png"
            alt="Oyster Smiling"
            className="w-16 h-16 mx-auto object-contain"
          />
        </button>
        <button
          className="relative flex items-center w-20 h-20 group"
          onClick={() => {
            setShowPierreHolidayCard(true);
            }}
          >
            <img 
              src="/images/pages/categories/cinco//CincoIdentityGenerator/pierre.png"
              alt="Pierre's Holiday Card"
              className="w-12 h-12 mx-auto object-contain"
            />
            <span className="absolute bottom-0 left-0 right-0 text-center">
              Holiday
            </span>
          </button>
      </div>

      {/* Error Message */}
      {errorMessage && (
        <div className="fixed top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded shadow-md">
          {errorMessage}
        </div>
      )}

      {/* Audio Elements */}
      <div className="hidden">
        {Object.entries(audioRefs).map(([key, ref]) => (
          <audio 
            key={key}
            ref={ref}
            src={`music/CincoIdentityGenerator/${key}.mp3`}
            loop
            onError={(e) => setErrorMessage(`Failed to load audio ${key}: ${e.message}`)}
          />
        ))}
        <audio 
          ref={voiceRef}
          onError={(e) => setErrorMessage(`Failed to load voice line: ${e.message}`)}
        />
      </div>

      {/* Windows */}
      <WelcomeWindow 
        isVisible={true}
        progress={welcomeProgress}
        showOptions={showOptions}
        onSequenceSelect={handleSequenceSelect}
      />

      <LoaderWindow 
        isVisible={loadingProgress < 100 && currentSequence}
        progress={loadingProgress}
      />

      <PromptWindow 
        isVisible={showPrompt}
        message={promptMessage}
      />
    
      {/* Oyster Smile Window */}
      {showOysterSmile && (
        <div 
          className={`${windowBaseStyle} w-[400px]`}
          style={{ top: '100px', left: '50%', marginLeft: '-200px' }}
        >
          <div className="bg-white border-2 border-gray-300">
            <WindowHeader 
              title="Oyster Smiling" 
              onClose={() => setShowOysterSmile(false)} 
            />
            <div className="h-[calc(100%-32px)] p-2 bg-white">
              <img 
                src="/images/pages/categories/cinco//CincoIdentityGenerator/oystersmilelarge.png"
                alt="Oyster Smiling Large"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* Pierre's Holiday Card Window */}
      {showPierreHolidayCard && (
        <div 
          className={`${windowBaseStyle} w-[500px]`}
          style={{ top: '100px', left: '50%', marginLeft: '-200px' }}
        >
          <div className="bg-white border-2 border-gray-300">
            <WindowHeader 
              title="Pierre's Holiday Card" 
              onClose={() => {
                setShowPierreHolidayCard(false);
                if (pierreVideoRef.current) {
                  pierreVideoRef.current.pause();
                  pierreVideoRef.current.currentTime = 0;
                }
              }} 
            />
            <div className="h-[300px] p-2 bg-black">
              <video
                ref={pierreVideoRef}
                className="w-full h-full object-cover"
                src="/video/CincoIdentityGenerator/pierre-holiday.mp4"
                autoPlay
                loop
              />
            </div>
          </div>
        </div>
      )}

      {/* Incoming Call Window */}
      {showIncomingCall && (
        <div 
          className={`${windowBaseStyle} w-[300px]`}
          style={{ top: '50%', left: '50%', marginLeft: '-150px', marginTop: '-200px', zIndex: 1000 }}
        >
          <div className="bg-white border-2 border-gray-300">
            <WindowHeader 
              title="INCOMING CALL" 
              onClose={() => setShowIncomingCall(false)} 
            />
            <div className="p-4 bg-white flex flex-col items-center gap-4">
              <div className="w-full bg-black text-red-500 text-center py-2 font-mono text-2xl font-bold">
                545-334-AB
              </div>
              <div className="w-full bg-pink-600 p-8 flex flex-col items-center gap-2">
                <PhoneCall className="text-white"/>
                <div className="text-white font-black text-2xl tracking-widest">WIFE</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Windows */}
      {Object.entries(sequences).map(([key, sequence]) => 
        sequence.windows.map(window => (
          <VideoWindow
            key={window.id}
            id={window.id}
            title={sequence.title}
            position={window.position}
            isVisible={activeWindows[key]}
            onClose={() => {
              setActiveWindows(prev => ({
                ...prev,
                [key]: false
              }));
              if (key === currentSequence) {
                stopAllAudio();
              }
            }}
          />
        ))
      )}
    </div>
  );
};

export default CincoIdentityGenerator;