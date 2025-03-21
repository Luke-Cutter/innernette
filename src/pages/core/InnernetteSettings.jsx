// src/pages/InnernetteSettings.jsx
import React, { useState, useEffect } from 'react';
import { AlertTriangle, X } from 'lucide-react';

// Utility Components
const RetroMeter = ({ value, color = "green" }) => {
  // Map color prop to specific gradient classes
  const colorGradients = {
    green: "from-green-400 to-green-600",
    blue: "from-blue-400 to-blue-600",
    purple: "from-red-500 to-red-700", // Changed this for danger level
    red: "from-red-400 to-red-600"
  };

  return (
    <div className="w-32 h-4 bg-gray-800 border border-gray-600 rounded-sm relative overflow-hidden">
      <div 
        className={`h-full bg-gradient-to-r ${colorGradients[color]} transition-all duration-500`}
        style={{ width: `${value}%` }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.2)_50%,transparent_100%)] animate-scan"></div>
      </div>
    </div>
  );
};

const BrainActivityMonitor = () => {
  const [waves, setWaves] = useState(Array(20).fill(20));

  useEffect(() => {
    const interval = setInterval(() => {
      setWaves(Array.from({ length: 20 }, () => Math.random() * 40));
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-24 bg-black rounded-lg p-2 flex items-end gap-1">
      {waves.map((height, i) => (
        <div 
          key={i}
          className="flex-grow bg-green-500 rounded-t transition-all duration-200"
          style={{ height: `${height}%` }}
        >
          <div className="w-full h-full bg-gradient-to-t from-green-600 to-green-400" />
        </div>
      ))}
    </div>
  );
};

const WarningBox = ({ children }) => (
  <div className="bg-red-900/20 border border-red-500 rounded p-3 text-red-400 text-sm">
    <div className="flex items-center gap-2 mb-1">
      <AlertTriangle className="w-4 h-4" />
      <span className="font-bold">WARNING</span>
    </div>
    {children}
  </div>
);

const RetroToggle = ({ isOn, onToggle, disabled = false }) => (
  <button
    onClick={onToggle}
    disabled={disabled}
    className={`
      relative w-14 h-8 rounded-lg transition-colors duration-200 
      ${isOn ? 'bg-green-600' : 'bg-gray-700'}
      ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
      border border-gray-600
    `}
  >
    <div 
      className={`
        absolute top-1 h-6 w-6 rounded
        transition-all duration-200
        ${isOn ? 'right-1 bg-green-300' : 'left-1 bg-gray-400'}
        border border-gray-600
      `}
    />
  </button>
);

const InnernetteSettings = () => {
  // State Management
  const [settings, setSettings] = useState({
    memoryProtection: true,
    QuallMode: false,
    GreatJobMode: true,
    antiVirus: true,
    memoryCompression: false,
    autoThoughtDelete: false,
    pepPepSync: true,
    timeTravel: false,
    brainwaveSync: true,
    quantumState: false,
    retroEncabulation: true,
    memeStability: false,
  });

  const [metrics, setMetrics] = useState({
    memoryIntegrity: 85,
    dangerLevel: 15,
    temporalStability: 92,
    PlutonicCharge: 76,
  });

  const [showWarning, setShowWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState({
    title: '',
    message: '',
  });

  // Update metrics periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        dangerLevel: Math.min(100, Math.max(0, prev.dangerLevel + (Math.random() - 0.5) * 10)),
        memoryIntegrity: Math.min(100, Math.max(0, prev.memoryIntegrity + (Math.random() - 0.5) * 5)),
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleToggle = (setting) => {
    if (setting === 'antiVirus') {
      setWarningMessage({
        title: 'CINCO™ SECURITY ALERT',
        message: 'Anti-virus cannot be disabled. This incident has been reported to CINCO™ Security Division.',
      });
      setShowWarning(true);
      return;
    }

    if (setting === 'timeTravel') {
      setWarningMessage({
        title: 'TEMPORAL DISTORTION WARNING',
        message: 'Enabling time travel may cause your Pep-Pep to remember things that haven\'t happened yet.',
      });
      setShowWarning(true);
    }

    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting],
    }));
  };

  return (
    <div className="min-h-screen bg-[#001433] text-white p-8">
      {/* Main Container */}
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            INNERNETTE™ SETTINGS CONSOLE
          </h1>
          <p className="text-gray-400 mt-2">Build 1995.2.31 - CINCO™ Pre-Recorded Operating System</p>
        </div>

        {/* Status Dashboard */}
        <div className="bg-gray-900/50 rounded-lg p-6 mb-8 border border-gray-700">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-bold text-blue-400 mb-6">System Status</h2>
              {/* Metrics */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-400">Memory Integrity</span>
                    <span className="text-sm text-gray-400">{metrics.memoryIntegrity.toFixed(1)}%</span>
                  </div>
                  <RetroMeter value={metrics.memoryIntegrity} color="blue" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-400">Danger Level</span>
                    <span className="text-sm text-gray-400">{metrics.dangerLevel.toFixed(1)}%</span>
                  </div>
                  <RetroMeter value={metrics.dangerLevel} color="purple" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-400">Plutonic Charge</span>
                    <span className="text-sm text-gray-400">{metrics.PlutonicCharge.toFixed(1)}%</span>
                  </div>
                  <RetroMeter value={metrics.PlutonicCharge} color="green" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-green-400 mb-6">Brainwave Monitor</h2>
              <BrainActivityMonitor />
            </div>
          </div>
        </div>

        {/* Settings Sections */}
        <div className="grid grid-cols-1 gap-8">
          {/* Memory Management */}
          <section className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
            <h2 className="text-xl font-bold text-purple-400 mb-6">Memory Management</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-200">Memory Protection</h3>
                  <p className="text-sm text-gray-400">Prevents unauthorized memory replacement</p>
                </div>
                <RetroToggle 
                  isOn={settings.memoryProtection}
                  onToggle={() => handleToggle('memoryProtection')}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-200">Memory Compression</h3>
                  <p className="text-sm text-gray-400">Compress memories to save brain space</p>
                </div>
                <RetroToggle 
                  isOn={settings.memoryCompression}
                  onToggle={() => handleToggle('memoryCompression')}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-200">Auto-Delete Thoughts</h3>
                  <p className="text-sm text-gray-400">Automatically remove processed thoughts</p>
                </div>
                <RetroToggle 
                  isOn={settings.autoThoughtDelete}
                  onToggle={() => handleToggle('autoThoughtDelete')}
                />
              </div>
            </div>
          </section>

          {/* Performance */}
          <section className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
            <h2 className="text-xl font-bold text-cyan-400 mb-6">Performance Settings</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-200">James Quall Mode</h3>
                  <p className="text-sm text-gray-400">Make the Innernette Quall-tastic!</p>
                </div>
                <RetroToggle 
                  isOn={settings.QuallMode}
                  onToggle={() => handleToggle('QuallMode')}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-200">Awesome, Great Job Mode</h3>
                  <p className="text-sm text-gray-400">BE WARNED: Truly Awesome Mode, only for the greatest jobs</p>
                </div>
                <RetroToggle 
                  isOn={settings.GreatJobMode}
                  onToggle={() => handleToggle('GreatJobMode')}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-200">Anti-Virus</h3>
                  <p className="text-sm text-gray-400">Protection against real internet viruses</p>
                </div>
                <RetroToggle 
                  isOn={settings.antiVirus}
                  onToggle={() => handleToggle('antiVirus')}
                />
              </div>
            </div>
          </section>

          {/* Experimental Features */}
          <section className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
            <h2 className="text-xl font-bold text-orange-400 mb-4">Experimental Features</h2>
            <WarningBox>
              These Features May Cause Temporal Anomalies and Your Rascal to Perish
            </WarningBox>
            <div className="space-y-6 mt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-200">Time Travel</h3>
                  <p className="text-sm text-gray-400">Access future CINCO™ products</p>
                </div>
                <RetroToggle 
                  isOn={settings.timeTravel}
                  onToggle={() => handleToggle('timeTravel')}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-200">Pep-Pep Sync</h3>
                  <p className="text-sm text-gray-400">Enable memory sharing with Pep-Pep</p>
                </div>
                <RetroToggle 
                  isOn={settings.pepPepSync}
                  onToggle={() => handleToggle('pepPepSync')}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-200">Quantum State</h3>
                  <p className="text-sm text-gray-400">Enable parallel universe browsing</p>
                </div>
                <RetroToggle 
                  isOn={settings.quantumState}
                  onToggle={() => handleToggle('quantumState')}
                />
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center space-y-2">
          <p className="text-sm text-gray-400">
            CINCO™ Technology Division - All Rights Reserved
          </p>
          <p className="text-xs text-gray-500 italic">
            *CINCO™ is not responsible for any memory loss, personality changes, temporal paradoxes, or Rascal deaths that may occur
          </p>
        </div>
      </div>

      {/* Warning Modal */}
      {showWarning && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg border border-red-500 max-w-md">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-red-500">{warningMessage.title}</h3>
              <button 
                onClick={() => setShowWarning(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-300 mb-4">{warningMessage.message}</p>
            <div className="text-right">
              <button
                onClick={() => setShowWarning(false)}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InnernetteSettings;