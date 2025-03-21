import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import TitleBar from './TitleBar';
import AddressBar from './AddressBar';
import Taskbar from './Taskbar';
import RandomPopupSystem from '../shared/RandomPopupSystem';

const DesktopIcon = ({ title, imagePath, path, className }) => {
  const navigate = useNavigate();
 
  return (
    <div
      onClick={() => navigate(path)}
      className={`absolute w-24 group cursor-pointer p-2 ${className}`}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        <img
          src={imagePath || "/api/placeholder/64/64"}
          alt={title}
          className="w-16 h-16 mx-auto border-2 rounded-md border-black bg-white relative"
        />
        <span className="text-white text-sm block mt-1 text-center relative">
          {title}
        </span>
      </div>
    </div>
  );
};

const VistaLayout = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const contentDiv = document.querySelector('.content-area');
    if (contentDiv) {
      contentDiv.scrollTop = 0;
    }
  }, [location.pathname]);

  return (
    <div className="h-screen relative overflow-hidden select-none">
      <RandomPopupSystem />
      {/* Background with its own stacking context */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-400 via-sky-300 to-green-400" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-b from-green-400 to-green-600 transform skew-y-3" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-b from-green-600 to-green-800 transform -skew-y-2" />
      </div>

      {/* Desktop layer */}
      <div className="absolute inset-0 z-10">
        {/* Desktop Icons Area */}
        <div className="absolute top-0 left-0 w-48">
          <DesktopIcon
            title="CINCO™ Credit Union"
            path="/CincoCreditUnion"
            className="top-8 left-8"
            imagePath="/images/VistaLayoutImages/CICUicon.png"
          />
          <DesktopIcon
            title="CINCO™ Identity Generator 2.5"
            path="/CincoIdentityGenerator"
            className="top-40 left-8"
            imagePath="/images/VistaLayoutImages/IdentityGeneratoricon.png"
          />
          <DesktopIcon
            title="CINCO™ MIDI Organizer"
            path="/CincoMIDIOrganizer"
            className="top-80 left-8"
            imagePath="/images/VistaLayoutImages/MidiIcon.png"
          />
          <DesktopIcon
            title="CINCO™ e-Trial"
            path="/CincoETrial"
            className="top-8 left-32"
            imagePath="/images/VistaLayoutImages/CincoETrial.png"
          />
          <DesktopIcon
            title="CINCO™ Facts Machine"
            path="/CincoFactsMachine"
            className="top-40 left-32"
            imagePath="/images/VistaLayoutImages/CincoFactsMachine.png"
          />
        </div>
      </div>

      {/* Window layer - higher z-index, creates new stacking context */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="h-full p-4 pb-20">
          {/* Main window with pointer events re-enabled */}
          <div className="h-full w-[960px] mx-auto bg-blue-100 rounded shadow-xl flex flex-col overflow-hidden border-2 border-blue-400 pointer-events-auto">
            <TitleBar title="Innernette 2.5 Brought to you by CINCO!" />
            <AddressBar currentPath={currentPath} />
            <div className="flex-grow bg-blue-200 overflow-y-auto content-area">
              <Outlet />
            </div>
            <Taskbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VistaLayout;