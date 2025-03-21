import React, { useState, useEffect, useRef } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';

const PRESETS = {
  'CINCO™': { type: 'sine', gain: 0.3 },
  'Error': { type: 'square', gain: 0.15 }
};

const NOTES = {
  '1': 440.00, // A4
  '2': 493.88, // B4
  '3': 523.25, // C5
  '4': 587.33, // D5
  '5': 659.25, // E5
  'q': 349.23, // F4
  'w': 392.00, // G4
  'e': 440.00, // A4
  'r': 493.88, // B4
  't': 523.25, // C5
  'a': 261.63, // C4
  's': 293.66, // D4
  'd': 329.63, // E4
  'f': 349.23, // F4
  'g': 392.00, // G4
  'z': 196.00, // G3
  'x': 220.00, // A3
  'c': 246.94, // B3
  'v': 261.63, // C4
  'b': 293.66  // D4
};

const MuzikMayker = () => {
  const [activeNotes, setActiveNotes] = useState(new Set());
  const [muted, setMuted] = useState(false);
  const [preset, setPreset] = useState('CINCO™');
  const audioCtx = useRef(null);
  const oscillators = useRef(new Map());
  const analyser = useRef(null);
  const canvasRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const currentOscillators = oscillators.current;

    const initAudio = () => {
        if (!audioCtx.current) {
          audioCtx.current = new (window.AudioContext || window.webkitAudioContext)();
          analyser.current = audioCtx.current.createAnalyser();
          analyser.current.connect(audioCtx.current.destination);
        }
      };
    
      const playNote = (e) => {
        if (!e.repeat && NOTES[e.key]) {
          if (!audioCtx.current || muted || !NOTES[e.key]) return;
    
          if (currentOscillators.has(e.key)) {
            const old = currentOscillators.get(e.key);
            old.gain.disconnect();
            old.osc.disconnect();
            old.osc.stop();
            currentOscillators.delete(e.key);
          }
    
          const osc = audioCtx.current.createOscillator();
          const gain = audioCtx.current.createGain();
          const settings = PRESETS[preset];
    
          osc.type = settings.type;
          osc.frequency.setValueAtTime(NOTES[e.key], audioCtx.current.currentTime);
          gain.gain.setValueAtTime(settings.gain, audioCtx.current.currentTime);
    
          osc.connect(gain);
          gain.connect(analyser.current);
          osc.start();
    
          currentOscillators.set(e.key, { osc, gain });
          setActiveNotes(prev => new Set([...prev, e.key]));
        }
      };

      const stopNote = (e) => {
        if (NOTES[e.key] && currentOscillators.has(e.key)) {
          const { osc, gain } = currentOscillators.get(e.key);
          gain.disconnect();
          osc.disconnect();
          osc.stop();
          currentOscillators.delete(e.key);
          setActiveNotes(prev => {
            const next = new Set(prev);
            next.delete(e.key);
            return next;
          });
        }
      };

    const animate = () => {
      if (!canvasRef.current || !analyser.current) return;
      const ctx = canvasRef.current.getContext('2d');
      const data = new Uint8Array(analyser.current.frequencyBinCount);
      analyser.current.getByteFrequencyData(data);

      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      const barWidth = ctx.canvas.width / 32;
      data.slice(0, 32).forEach((value, i) => {
        const height = (value / 255) * ctx.canvas.height * 0.8;
        const x = i * (barWidth + 2);
        const y = ctx.canvas.height - height;
        
        const gradient = ctx.createLinearGradient(x, y, x, ctx.canvas.height);
        const hue = (i * 10 + Date.now() / 50) % 360;
        gradient.addColorStop(0, `hsla(${hue}, 80%, 60%, 0.9)`);
        gradient.addColorStop(1, `hsla(${hue}, 80%, 40%, 0.3)`);
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x, y, barWidth, height);
      });

      frameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('click', initAudio);
    window.addEventListener('keydown', playNote);
    window.addEventListener('keyup', stopNote);

    animate();

    return () => {
        window.removeEventListener('click', initAudio);
        window.removeEventListener('keydown', playNote);
        window.removeEventListener('keyup', stopNote);
        cancelAnimationFrame(frameRef.current);
        currentOscillators.forEach(({ osc, gain }) => {
          gain.disconnect();
          osc.disconnect();
          osc.stop();
        });
        currentOscillators.clear();
      };
    }, [muted, preset]);

  const KeyButton = ({ k }) => (
    <div className={`w-16 h-16 rounded flex flex-col items-center justify-center transition-all
      ${activeNotes.has(k)
        ? 'bg-cyan-500/30 text-cyan-300 border-2 border-cyan-400 scale-95'
        : 'bg-gray-900 text-gray-400 border border-cyan-500/30 hover:bg-cyan-900/30 hover:text-cyan-300'}`}
    >
      <span className="text-lg font-bold">{k.toUpperCase()}</span>
    </div>
  );

  return (
    <div className="bg-gray-900 min-h-screen p-8 font-['VT323',_monospace] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gray-800 rounded border-2 border-cyan-500 p-4 mb-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Music className="w-8 h-8 text-cyan-400 animate-pulse" />
            <h1 className="text-2xl mr-16 font-bold text-cyan-400">CINCO™ Muzik Mayker</h1>
            <div className="flex gap-2">
                <p className = "flex items-center text-white ">To Start Visualization, Choose: </p>
              {Object.keys(PRESETS).map(p => (
                <button
                  key={p}
                  onClick={() => setPreset(p)}
                  className={`px-3 py-1 rounded ${
                    preset === p 
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400'
                      : 'text-gray-300 hover:bg-cyan-900/20'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
          <button onClick={() => setMuted(!muted)} className="text-cyan-400">
            {muted ? <VolumeX /> : <Volume2 />}
          </button>
        </div>

        <div className="bg-gray-800 rounded border-2 border-cyan-500/50 overflow-hidden mb-6">
          <canvas
            ref={canvasRef}
            className="w-full h-56"
            width={400}
            height={200}
          />
        </div>

        <div className="bg-gray-800 rounded border-2 border-cyan-500/50 p-6">
          <div className="max-w-3xl mx-auto space-y-3">
            {[
              ['1', '2', '3', '4', '5'],
              ['q', 'w', 'e', 'r', 't'],
              ['a', 's', 'd', 'f', 'g'],
              ['z', 'x', 'c', 'v', 'b']
            ].map((row, i) => (
              <div key={i} className="flex gap-3 justify-center" style={{ marginLeft: i * 16 }}>
                {row.map(k => <KeyButton key={k} k={k} />)}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 bg-gray-800 rounded border-2 border-cyan-500/50 p-6 text-gray-300 space-y-4">
        <h2 className="text-xl text-cyan-400 font-bold">HOW TO USE YOUR CINCO™ MUZIK MAYKER</h2>
        <div className="space-y-2">
          <p>1. IMPORTANT: Remove protective ear-covering before operating device</p>
          <p>2. Press any key to begin your CINCO™ approved musical journey</p>
          <p>3. Multiple keys may be pressed for experimental harmony (at own risk)</p>
          <p>4. If smoke appears, this is normal and means the Nettesite™ is functioning correctly</p>
          <p>5. For best results, maintain room temperature of exactly 23.5°C (74.3°F)</p>
        </div>

        <div className="mt-6 p-4 bg-red-900/20 border border-red-500/30 rounded">
          <h3 className="text-red-400 font-bold mb-2">⚠️ WARNINGS AND DISCLAIMERS</h3>
          <div className="space-y-2 text-red-200">
            <p>- Do not operate while wearing synthetic fabrics</p>
            <p>- Keep the Nettesite™ away from pets, plants, and most metals</p>
            <p>- If the Nettesite™ begins to hover, contact CINCO™ immediately</p>
            <p>- Temporal displacement side effects are temporary</p>
            <p>- When playing Mini Van Highway, clear the room of all plibts</p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-green-900/20 border border-green-500/30 rounded">
          <h3 className="text-green-400 font-bold mb-2">🎵 PRO TIPS</h3>
          <div className="space-y-2 text-green-200">
            <p>- For best results, maintain correct posture and positive attitude</p>
            <p>- CINCO™ approved music consists of exactly 3-7 notes per sequence</p>
            <p>- If the Nettesite™ begins playing on its own, this is a feature</p>
            <p>- Light throat burning during use is normal</p>
          </div>
        </div>
      </div>

      <h4 className="text-white mt-3 flex justify-center">© 1985 CINCO™ CORPORATION -v.1985.1.5.2- PRESS KEY THEN SHIFT TO LOCK MUSIC NOTE!</h4>
    </div>
  );
};

export default MuzikMayker;