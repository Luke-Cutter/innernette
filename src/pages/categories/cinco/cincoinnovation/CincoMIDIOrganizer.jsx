import React, { useState, useEffect, useRef } from 'react';

const CincoMidiOrganizer = () => {
  const [sorted, setSorted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [umrnInput, setUmrnInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const scrollRef = useRef(null);
  const audioRef = useRef(null);
  
  const unsortedText = `RIM - KRAM\nDJK 9376623\n874944\n8548555F. MIDI GRUM IUK GRACM. DJK 9376623 BJR.MIDI - ROW. 143698\n58-0-33 MIDI GRUM IUKD. MIDI\nRIM KRAM- 090087 MIDI DIK MILL VANES 633-0 KKDD`.split('\n');

  
  const unsortedSongs = [
    { name: "Bear Went Over the Mountain", code: "7842345", size: "45 KB", date: "03-15-1994", kind: "MIDI Baby" },
    { name: "Camptown Races", code: "7823941", size: "33 KB", date: "06-22-1995", kind: "MIDI Folk" },
    { name: "Daddy Wouldn't Buy Me A Bow-Wow", code: "7891234", size: "67 KB", date: "09-12-1993", kind: "MIDI Classical" },
    { name: "O! Susanna", code: "7754321", size: "28 KB", date: "11-03-1995", kind: "MIDI Folk" },
    { name: "Bizet Jeux D Enfants Toupie", code: "7665432", size: "42 KB", date: "04-18-1994", kind: "MIDI Baby" },
    { name: "Fur Elise", code: "7123456", size: "19 KB", date: "07-25-1995", kind: "MIDI Classical" },
    { name: "Boccherini Minuet Flute and Piano", code: "7987654", size: "8 KB", date: "02-14-1994", kind: "MIDI Classical" },
    { name: "Brahm's Lullaby", code: "7246813", size: "51 KB", date: "05-30-1995", kind: "MIDI Baby" },
    { name: "Tim and Eric Awesome Show Theme", code: "7412369", size: "37 KB", date: "08-09-1994", kind: "MIDI Theme" },
    { name: "Prelude Te Deum", code: "7951753", size: "22 KB", date: "01-17-1995", kind: "MIDI Classical" },
    { name: "Funky Chiptune", code: "7852963", size: "64 KB", date: "10-28-1994", kind: "MIDI Dance" },
    { name: "Humoresque No 7", code: "7741852", size: "95 KB", date: "12-05-1995", kind: "MIDI Classical" },
    { name: "Nimrod", code: "7369852", size: "73 KB", date: "03-21-1995", kind: "MIDI Classical" },
    { name: "Morning Mood", code: "7147258", size: "29 KB", date: "09-14-1994", kind: "MIDI Classical" },
    { name: "Z-Tone Underwater", code: "7963852", size: "983 KB", date: "02-25-2000", kind: "MIDI CINCO™ Z-Tone" },
    { name: "Z-Tone Seagull", code: "7311573", size: "276 KB", date: "02-02-1998", kind: "MIDI CINCO™ Z-Tone" },
    { name: "Z-Tone Blue", code: "7321568", size: "934 KB", date: "09-22-2005", kind: "MIDI CINCO™ Z-Tone" },
    { name: "Z-Tone TV", code: "7733149", size: "454 KB", date: "03-26-2003", kind: "MIDI CINCO™ Z-Tone" }
  ];

  const [scrollIndex, setScrollIndex] = useState(0);

  useEffect(() => {
    if (!sorted) {
      const interval = setInterval(() => {
        setScrollIndex(prev => (prev + 1) % unsortedText.length);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [sorted, unsortedText.length]);

  // Cleanup audio when component unmounts
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
        setCurrentlyPlaying(null);
      }
    };
  }, []);

  const setupSteps = [
    "Please connect your T-38 SCSI port",
    "Rotate the Tulley Toggle to unlock your hard drive",
    "Insert 10 floppy discs to load the revolutionary software bundle"
  ];

  const [sortKey, setSortKey] = useState('name');
  const [sortedSongList, setSortedSongList] = useState([...unsortedSongs]);

  const handleSort = (key) => {
    setSorted(true);
    setSortKey(key);
    
    const newSortedSongs = [...sortedSongList].sort((a, b) => {
      if (key === 'size') {
        // Convert KB sizes to numbers for comparison
        const sizeA = parseInt(a.size.split(' ')[0]);
        const sizeB = parseInt(b.size.split(' ')[0]);
        return sizeA - sizeB;
      } else if (key === 'date') {
        // Convert dates to timestamps for comparison
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA - dateB;
      } else {
        // Sort strings normally
        return a[key].localeCompare(b[key]);
      }
    });
    
    setSortedSongList(newSortedSongs);
  };

  const playSong = (songName) => {
    if (audioRef.current) {
      audioRef.current.pause();
      setCurrentlyPlaying(null);
    }
    
    const song = unsortedSongs.find(s => s.name === songName);
    if (song) {
      const fileName = songName.toLowerCase().replace(/[.,!?'-]/g, '').replace(/\s+/g, '');
      audioRef.current = new Audio(`/music/CincoMIDIOrganizer/${fileName}.mp3`);
      
      audioRef.current.addEventListener('ended', () => {
        setCurrentlyPlaying(null);
      });
      
      audioRef.current.play().then(() => {
        setCurrentlyPlaying(song);
      }).catch(error => {
        setErrorMessage('Error playing MIDI file. Please check your T-38 SCSI port connection.');
        setTimeout(() => setErrorMessage(''), 3000);
      });
    }
  };

  const handleUmrnSubmit = (e) => {
    e.preventDefault();
    const cleanInput = umrnInput.replace(/\s+/g, '');
    
    const easterEggCode = '9847620917654188511878415141488411252468473214231321486451231332468465321897541561205615891150156561123077142158232321843216825836951475325383476489404303272636484940490484899099349083887474894934873784005107';
    
    if (cleanInput === easterEggCode) {
      playSong('Camptown Races');
      return;
    }

    const matchingSong = unsortedSongs.find(song => song.code === cleanInput);
    if (matchingSong) {
      playSong(matchingSong.name);
    } else {
      setErrorMessage('Invalid UMRN code. Please check your manual.');
      setTimeout(() => setErrorMessage(''), 3000);
    }
    
    setUmrnInput('');
  };

  const handleNextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const PlayingPopup = ({ song }) => (
    <div className="fixed top-8 right-8 bg-black border-2 border-green-400 p-4 shadow-lg shadow-green-400/20 w-80 z-50">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-bold">Now Playing</h3>
        <button 
          onClick={() => {
            if (audioRef.current) {
              audioRef.current.pause();
              setCurrentlyPlaying(null);
            }
          }}
          className="text-green-400 hover:text-green-300"
        >
          ✕
        </button>
      </div>
      <div className="space-y-2">
        <p><span className="text-green-500">Name:</span> {song.name}</p>
        <p><span className="text-green-500">UMRN:</span> {song.code}</p>
        <p><span className="text-green-500">Date:</span> {song.date}</p>
        <p><span className="text-green-500">Kind:</span> {song.kind}</p>
        <p><span className="text-green-500">Size:</span> {song.size}</p>
      </div>
      <div className="mt-4 h-1 bg-green-400/20">
        <div className="h-full bg-green-400 animate-[playProgress_15s_linear]" />
      </div>
    </div>
  );

  return (
    <div className="h-full bg-black p-4 font-mono text-green-400">
      {currentlyPlaying && <PlayingPopup song={currentlyPlaying} />}
      {currentStep < setupSteps.length ? (
        <div className="flex items-center justify-center h-full">
          <div className="bg-black border-2 border-green-400 p-6 max-w-md">
            <h2 className="text-xl mb-4">{setupSteps[currentStep]}</h2>
            <button 
              className="bg-green-400 text-black px-4 py-2 hover:bg-green-500 transition-colors"
              onClick={handleNextStep}
            >
              Continue
            </button>
          </div>
        </div>
      ) : (
        <div className="h-full">
          <div className="flex gap-4 mb-4">
            {[
              { display: 'Name', key: 'name' },
              { display: 'Date', key: 'date' },
              { display: 'Kind', key: 'kind' },
              { display: 'Size', key: 'size' }
            ].map(({ display, key }) => (
              <button
                key={key}
                onClick={() => handleSort(key)}
                className={`bg-green-400 text-black px-4 py-2 hover:bg-green-500 transition-colors ${
                  sortKey === key ? 'ring-2 ring-white' : ''
                }`}
              >
                Sort by {display}
              </button>
            ))}
          </div>

          <form onSubmit={handleUmrnSubmit} className="mb-4">
            <input
              type="text"
              value={umrnInput}
              onChange={(e) => setUmrnInput(e.target.value)}
              className="bg-black border border-green-400 text-green-400 p-2 w-full font-mono"
              placeholder="Enter UMRN code or special sequence..."
            />
            {errorMessage && (
              <div className="text-red-500 mt-2">{errorMessage}</div>
            )}
          </form>
          
          <div className="h-[calc(100%-8rem)] overflow-y-hidden font-mono">
            {!sorted ? (
              <div ref={scrollRef} className="whitespace-pre-wrap">
                {unsortedText.map((line, idx) => (
                  <div 
                    key={idx}
                    className={`transition-opacity duration-100 ${
                      idx === scrollIndex ? 'opacity-100' : 'opacity-30'
                    }`}
                  >
                    {line}
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-2">
                <div className="grid grid-cols-5 gap-4 border-b border-green-400 pb-2 mb-4">
                  <span className="font-bold">Name</span>
                  <span className="font-bold text-center">UMRN</span>
                  <span className="font-bold text-center">Date</span>
                  <span className="font-bold text-center">Kind</span>
                  <span className="font-bold text-right">Size</span>
                </div>
                {sortedSongList.map((song, idx) => (
                  <div key={idx} className="grid grid-cols-5 gap-4 hover:bg-green-400/10">
                    <span className="truncate">{song.name}</span>
                    <span className="text-center font-mono">{song.code}</span>
                    <span className="text-center">{song.date}</span>
                    <span className="text-center">{song.kind}</span>
                    <span className="text-right">{song.size}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
      
      <style jsx>{`
        @keyframes playProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default CincoMidiOrganizer;