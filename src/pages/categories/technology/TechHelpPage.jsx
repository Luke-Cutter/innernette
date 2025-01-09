import React from 'react';
import { AlertTriangle, Wrench, HelpCircle} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import GoHomeButton from '../../../components/common/GoHomeButton';

const TechHelpPage = () => {
    const navigate = useNavigate();
    
    const sections = [
      {
        title: "Technical Support",
        icon: <Wrench className="w-4 h-4 text-orange-900" />,
        items: [
          {
            title: "Installing Your Innernette™",
            path: "/InnernetteInstall"
          },
          {
            title: "Brown Screen Calibration",
            path: "/BrownScreenCalibration"
          },
          {
            title: "Nette Tunes, Why Only Funk Barn?",
            path: "/NetteTunesSupport"
          },
          {
            title: "Computer Explosion, Should I be worried?",
            path: "/ComputerExplosion"
          },
          {
            title: "Mouse Ball Maintenance",
            path: "/MouseBallMaintenance"
          }
        ],
        bgColor: "bg-orange-100"
      },
      {
        title: "FAQs",
        icon: <AlertTriangle className="w-4 h-4 text-red-500" />,
        items: [
          {
            title: "General Questions",
            path: "/GeneralQuestions"
          },
          {
            title: "Security Concerns",
            path: "/SecurityConcerns"
          },
          {
            title: "Nettesite Access",
            path: "/NettesiteAccess"
          },
          {
            title: "Upgrade Questions",
            path: "/UpgradeQuestions"
          },
          {
            title: "Performance Issues",
            path: "/PerformanceIssues"
          }
        ],
        bgColor: "bg-orange-50"
      }
    ];
  
    return (
      <div className="min-h-screen bg-orange-200 text-orange-900">
        <div className="bg-gradient-to-r from-orange-300 to-orange-200 border-y border-orange-400 p-4 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Wrench className="w-6 h-6 text-orange-700" />
              <h1 className="text-2xl font-bold text-orange-800">Tech & Help</h1>
            </div>
            <GoHomeButton />
          </div>
        </div>
        <div className="flex justify-center w-full bg-orange-200 p-4">
          <div className="relative w-[850px]">
            <img 
              src="/images/banners/techbanner.png"
              alt="Tech Help"
              className="w-full h-[150px] object-contain rounded-lg border-4 border-white shadow-lg"
            />
          </div>
        </div>
        <div className="max-w-6xl mx-auto p-6">
          <div className="bg-white/90 border-2 border-orange-400 rounded-lg p-8 mb-12 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <HelpCircle className="w-12 h-12 text-orange-600" />
              <div>
                <h2 className="text-2xl font-bold text-orange-800">Welcome to Tech Support</h2>
                <p className="text-orange-700 text-lg mt-2">Your one-stop destination for all Innernette™ technical concerns.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-white rounded-lg border-2 border-orange-400 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-orange-400 to-orange-300 p-4 flex items-center gap-3">
                  {section.icon}
                  <h3 className="text-xl font-bold text-orange-900">{section.title}</h3>
                </div>
                <div className="p-6 space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <button 
                      key={itemIndex}
                      onClick={() => navigate(item.path)}
                      className="w-full text-left bg-orange-50 hover:bg-orange-100 rounded-lg p-4 transition-colors border border-orange-200 hover:border-orange-400"
                    >
                      <div className="font-medium text-orange-900 text-lg">{item.title}</div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white border-2 border-red-400 rounded-lg p-6 shadow-lg">
            <div className="flex items-center gap-4">
              <AlertTriangle className="w-8 h-8 text-red-500 animate-pulse" />
              <p className="text-red-600 text-lg">
                For emergencies, place your computer in a bag of rice and wait for further instructions.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default TechHelpPage;