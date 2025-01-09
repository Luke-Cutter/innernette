import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dialog = ({ open, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
      <div className="max-w-2xl w-full mx-4">{children}</div>
    </div>
  );
};

const LoadingScreen = ({ onComplete }) => {
  React.useEffect(() => {
    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50"
         style={{
           background: `repeating-linear-gradient(
             -45deg,
             #740000,
             #740000 20px,
             #8b0000 20px,
             #8b0000 40px
           )`
         }}>
      <div className="bg-white/10 backdrop-blur-sm p-12 rounded-lg border-2 border-yellow-400 shadow-2xl max-w-2xl w-full mx-4">
        <div className="text-center mb-8">
          <div className="transform -rotate-3 mb-6">
            <h1 className="text-6xl font-bold mb-2 text-yellow-400 font-serif">
              CINCO™ e-Trial
            </h1>
            <h2 className="text-2xl font-bold text-red-500 tracking-wider">
              Capitol Punishment Edition
            </h2>
          </div>
          <div className="text-yellow-200 space-y-1">
            <p>#1 selling trial software in North America</p>
            <p className="text-sm">Free 24hr Innernette Support</p>
            <p className="text-xs mt-4">Programmed by</p>
            <p className="text-sm font-medium">Chaps Nyborg • Adam Murch • Johann Krissel • Leroy Black</p>
          </div>
        </div>
        <div className="relative">
          <div className="w-full h-3 bg-red-900 rounded-full overflow-hidden border border-yellow-400">
            <div className="w-full h-full bg-yellow-400 animate-load"></div>
          </div>
          <p className="text-center text-yellow-200 text-sm mt-4">Copyright 2008 Cinco Inc. All rights reserverated. Do no reproduce.</p>
        </div>
      </div>
    </div>
  );
};

const ETrialInterface = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [selectedJurors, setSelectedJurors] = useState([]);
  const [selectedEvidence, setSelectedEvidence] = useState(null);
  const [isDeliberating, setIsDeliberating] = useState(false);
  const [verdict, setVerdict] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  
  const jurors = [
    { name: 'R. Carr', image: 'images/pages/categories/cinco/CincoETrial/rcarr.PNG' },
    { name: 'R. Druwing', image: 'images/pages/categories/cinco/CincoETrial/rdruwing.PNG' },
    { name: 'J. Goldstein', image: 'images/pages/categories/cinco/CincoETrial/jgoldstein.PNG' },
    { name: 'K. Nagahasa', image: 'images/pages/categories/cinco/CincoETrial/knagahasa.PNG' },
    { name: 'P. Scott', image: 'images/pages/categories/cinco/CincoETrial/pscott.PNG' },
    { name: 'R. Mawhinney', image: 'images/pages/categories/cinco/CincoETrial/kross.PNG' }
  ];

  const evidence = [
    { type: 'Gun', image: 'images/pages/categories/cinco/CincoETrial/gun.PNG' },
    { type: 'Print', image: 'images/pages/categories/cinco/CincoETrial/fingerprint.PNG' },
    { type: 'Knife', image: 'images/pages/categories/cinco/CincoETrial/knife.PNG' },
    { type: 'No Evidence', image: 'images/pages/categories/cinco/CincoETrial/noevidence.PNG' }
  ];

  const handleJurorSelect = (juror) => {
    if (selectedJurors.length < 4 && !selectedJurors.includes(juror)) {
      setSelectedJurors([...selectedJurors, juror]);
    }
  };

  const handleDeliberate = () => {
    if (selectedJurors.length === 4 && selectedEvidence !== null) {
      setIsDeliberating(true);
      setTimeout(() => {
        setIsDeliberating(false);
        setVerdict(true);
      }, 3000);
    }
  };

  const handlePasswordSubmit = () => {
    if (password === 'T1M&ER1C')  {
      setVerdict(false);
      navigate('/');
    } else {
      setPasswordError(true);
      setTimeout(() => setPasswordError(false), 2000);
    }
  };

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="h-full p-4 select-none overflow-hidden"
         style={{
           background: `linear-gradient(45deg, #8b0000, #a52a2a)`,
           backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E")`,
           backgroundBlendMode: 'overlay'
         }}>
      <div className="max-w-6xl mx-auto h-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-4 bg-red-900 p-4 rounded-t-lg border-2 border-yellow-400"
             style={{
               backgroundImage: `linear-gradient(45deg, #740000 25%, #8b0000 25%, #8b0000 50%, #740000 50%, #740000 75%, #8b0000 75%, #8b0000 100%)`,
               backgroundSize: '56.57px 56.57px'
             }}>
          <div>
            <h1 className="text-2xl font-bold text-yellow-400">CINCO™ e-Trial v2.5.8</h1>
            <p className="text-yellow-200">Case #2024-CP-001: State vs. Terry Cinco</p>
          </div>
          <button
            onClick={handleDeliberate}
            disabled={selectedJurors.length !== 4 || !selectedEvidence}
            className="bg-gradient-to-r from-red-700 to-red-900 text-white py-3 px-12 rounded-full text-xl font-bold shadow-lg transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed border-2 border-yellow-400"
          >
            DELIBERATE
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6 h-[calc(100%-5rem)]">
          {/* Left Column */}
          <div className="space-y-4">
            {/* Judge Section - Wooden Panel */}
            <div className="bg-amber-800 p-6 rounded-lg shadow-lg"
                 style={{
                   backgroundImage: `url("images/pages/categories/cinco/CincoETrial/wood.jpg")`,
                 }}>
              <div className="flex items-center bg-white/90 p-4 rounded-lg">
                <img src="images/pages/categories/cinco/CincoETrial/JudgeDunn.PNG" alt="Judge" className="rounded-full border-4 border-amber-900 w-24 h-24" />
                <div className="ml-6">
                  <p className="text-2xl font-bold text-amber-900">Judge R. Dunn</p>
                  <p className="text-amber-800 mt-2">Please select 4 jurors and submit evidence</p>
                </div>
              </div>
            </div>

            {/* Defendant Profile - Notebook Style */}
            <div className="bg-blue-100 p-6 rounded-lg shadow-lg relative"
                 style={{
                   backgroundImage: `repeating-linear-gradient(transparent, transparent 31px #a0aec0 31px, #a0aec0 32px)`,
                   backgroundPosition: '0 1.2em'
                 }}>
              <div className="absolute top-0 left-0 w-full h-20 bg-red-900 rounded-t-lg"></div>
              <h2 className="text-2xl font-bold mb-6 text-white relative z-10">Defendant Profile</h2>
              <div className="grid grid-cols-2 gap-6 relative z-10">
                <div className="space-y-2 text-blue-900 font-medium" style={{ lineHeight: '25px' }}>
                  <p><b>Name: </b>Terry Cinco</p>
                  <p><b>Age: </b>40</p>
                  <p><b>Sex: </b>Male</p>
                  <p><b>Weight: </b>2072d</p>
                  <p><b>Race: </b>White/Hispanic</p>
                  <p><b>Occupation: </b>Businessman</p>
                  <p><b>Residence: </b>Riverside, CA</p>
                  <p><b>Description: </b>Terry Cinco,</p>
                  <p>co-founder of CINCO™</p>
                  <p>has been accused of</p>
                  <p>killing his wife, Lynn Cinco.</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <img src="images/pages/categories/cinco/CincoETrial/TerryCinco.PNG" alt="Defendant" className="rounded-full border-4 border-red-900" />
                    <div className="absolute -bottom-2 ml-[55px] px-3 py-1 bg-red-900 text-white text-xs rounded-full">
                      Defendant
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* Jury Selection - Manilla Folder */}
            <div className="bg-amber-100 p-6 rounded-lg shadow-lg relative">
            <div className="absolute top-0 right-0 w-20 h-8 bg-amber-200 rounded-bl-lg border-l-2 border-b-2 border-amber-300"></div>
            <h2 className="text-2xl font-bold mb-6 text-amber-900">Selected Jurors ({selectedJurors.length}/4)</h2>
            <div className="grid grid-cols-3 gap-2">
                {jurors.map((juror) => (
                <div
                    key={juror.name}
                    onClick={() => handleJurorSelect(juror)}
                    className={`p-2 cursor-pointer rounded-lg transition-all transform hover:scale-105 ${
                    selectedJurors.includes(juror)
                        ? 'bg-amber-200 border-4 border-amber-600 shadow-lg scale-105'
                        : 'bg-white border-2 border-amber-300'
                    }`}
                >
                    <img src={juror.image} alt={juror.name} className="w-full h-20 object-cover rounded-lg" />
                    <p className="text-center text-amber-900 text-xs mt-1 font-bold">{juror.name}</p>
                </div>
                ))}
            </div>
            </div>

            {/* Evidence Selection - Clipboard */}
            <div className="bg-stone-200 p-6 h-64 rounded-lg shadow-lg relative">
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-stone-300 rounded-t-lg"></div>
              <h2 className="text-2xl font-bold mb-6 text-stone-900 text-center">Select Evidence</h2>
              <div className="grid grid-cols-4 gap-4">
                {evidence.map((item) => (
                  <div
                    key={item.type}
                    onClick={() => setSelectedEvidence(item)}
                    className={`p-3 cursor-pointer rounded-lg transition-all transform hover:scale-105 ${
                      selectedEvidence === item
                        ? 'bg-stone-300 border-4 border-stone-600 shadow-lg scale-105'
                        : 'bg-white border-2 border-stone-300'
                    }`}
                  >
                    <img src={item.image} alt={item.type} className="w-full rounded-lg object-cover" />
                    <p className="text-center text-stone-900 text-sm mt-2 font-bold">{item.type}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Verdict Dialog */}
      <Dialog open={verdict}>
        <div className="bg-red-900 p-12 rounded-lg border-4 border-yellow-400 shadow-2xl"
             style={{
               backgroundImage: `repeating-linear-gradient(45deg, 
                 rgba(0,0,0,0.1) 0px, 
                 rgba(0,0,0,0.1) 10px, 
                 transparent 10px, 
                 transparent 20px)`
             }}>
          <h2 className="text-8xl font-bold text-center mb-8 animate-pulse text-yellow-400 tracking-wider">
            YOU ARE GUILTY
          </h2>
          <div className="bg-white text-red-900 text-4xl font-bold text-center p-8 rounded-lg mb-8 border-2 border-yellow-400">
            PLEASE PREPARE FOR ARREST
          </div>
          <div className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter security override code"
              className="w-full p-4 rounded border-2 border-yellow-400 bg-red-800 text-yellow-400 placeholder-red-300 text-center text-xl"
            />
            <button
              onClick={handlePasswordSubmit}
              className="w-full bg-gradient-to-r from-red-700 to-red-800 text-white py-4 rounded font-bold hover:from-red-800 hover:to-red-900 border-2 border-yellow-400 text-xl"
            >
              OVERRIDE SYSTEM
            </button>
            {passwordError && (
              <p className="text-yellow-400 text-center animate-pulse text-xl">Invalid Security Override Code (Hint: T1M&ER1C)</p>
            )}
          </div>
        </div>
      </Dialog>

      {/* Deliberating Dialog */}
      <Dialog open={isDeliberating}>
        <div className="bg-red-900 p-12 rounded-lg border-4 border-yellow-400 shadow-2xl"
             style={{
               backgroundImage: `repeating-linear-gradient(45deg, 
                 rgba(0,0,0,0.1) 0px, 
                 rgba(0,0,0,0.1) 10px, 
                 transparent 10px, 
                 transparent 20px)`
             }}>
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4 text-yellow-400 tracking-wider">JURY DELIBERATION IN PROGRESS</h2>
            <p className="text-2xl mb-8 text-yellow-200">Please stand by for verdict...</p>
            <div className="w-full h-6 bg-red-950 rounded-full overflow-hidden border-2 border-yellow-400">
              <div className="w-full h-full bg-yellow-400 animate-load"></div>
            </div>
            <div className="mt-8 pt-8 border-t-2 border-yellow-400/30">
              <div className="text-yellow-200/75 text-xs space-y-2">
                <p>By using CINCO™ e-Trial software you agree that all verdicts are legally binding under the Digital Jury Act of 2008.</p>
                <p>WARNING: CINCO™ e-Trial may cause judicial impairment, legal blindness, and temporary loss of civil rights.</p>
                <p>All verdicts are final and irreversible. Do not attempt to appeal or dispute e-Trial verdicts as this may result in additional charges.</p>
                <p className="font-mono text-[10px] mt-4">CINCO-LEGAL-v2.5.8-BUILD-2024-APPROVED-BY-DIGITAL-SUPREME-COURT</p>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default ETrialInterface;