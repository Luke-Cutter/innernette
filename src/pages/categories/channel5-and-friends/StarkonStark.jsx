import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  Star, 
  Award, 
  Tv, 
  Users,
  Share2,
  Mail,
  Cake,
  AlarmClock
} from 'lucide-react';

const GlitchText = ({ text, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <span className="absolute top-0 left-0 text-red-500 animate-glitch-1">
        {text}
      </span>
      <span className="absolute top-0 left-0 text-blue-500 animate-glitch-2">
        {text}
      </span>
      <span>{text}</span>
    </div>
  );
};

const StarkonStark = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Navigation */}
      <nav className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              <GlitchText text="Stark on Stark" />
            </div>
            <div className="flex gap-6">
              <div className="flex items-center gap-2 hover:text-blue-200">
                <Tv size={20} />
                <GlitchText text="Episodes" />
              </div>
              <div className="flex items-center gap-2 hover:text-blue-200">
                <Users size={20} />
                <GlitchText text="Guests" />
              </div>
              <div className="flex items-center gap-2 hover:text-blue-200">
                <Calendar size={20} />
                <GlitchText text="Schedule" />
              </div>
              <div className="flex items-center gap-2 hover:text-blue-200">
                <Mail size={20} />
                <GlitchText text="Contact" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="bg-blue-800 text-white py-8 flex-grow">
        <div className="container mx-auto px-4">
          <div className="flex gap-8">
            <div className="w-2/3">
              <h1 className="text-3xl font-bold mb-4">
                <GlitchText text="Latest Episode: Ron Stark Interviews Ron Stark" />
              </h1>
              <div className="bg-blue-900 rounded-lg p-4">
                <div className="relative w-[400px] mx-auto">
                  <img src="images/pages/categories/channel5andfriends/StarkonStark/StarkError.PNG" alt="Episode Preview" className="rounded-lg mb-4 w-full h-auto" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70">
                    <div className="text-white text-xl font-glitch">
                      <GlitchText text="VIDEO CORRUPTED" className="font-mono" />
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 text-sm justify-center">
                  <span className="flex items-center gap-1">
                    <Clock size={16} />
                    45:00
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    Season 5, Episode 12
                  </span>
                  <span className="flex items-center gap-1">
                    <Star size={16} />
                    4.9/5
                  </span>
                </div>
              </div>
            </div>
            <div className="w-1/3">
              <div className="bg-blue-900 rounded-lg p-4">
                <h2 className="text-xl font-bold mb-4">
                  <GlitchText text="About the Host" />
                </h2>
                <img src="images/pages/categories/channel5andfriends/StarkonStark/RonStark.PNG" alt="Ron Stark" className="rounded-lg mb-4" />
                <p className="mb-4 text-sm">Ron Stark brings over 30 years of entertainment industry experience to every interview, offering unique insights into Hollywood's biggest stories.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
              <Award size={20} className="text-blue-600" />
              <GlitchText text="Award Winning" />
            </h3>
            <p className="text-sm">Five-time Emmy nominated talk show featuring in-depth conversations with Hollywood's finest.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
              <Users size={20} className="text-blue-600" />
              <GlitchText text="Star(k) Power" />
            </h3>
            <p className="text-sm">Featuring exclusive interviews with the biggest names in entertainment, arts, and culture.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
              <Share2 size={20} className="text-blue-600" />
              <GlitchText text="Connect" />
            </h3>
            <p className="text-sm">Join the conversation on social media and get behind-the-scenes content.</p>
          </div>
        </div>
      </div>

      {/* Windows-style Popup */}
      {showPopup && (
        <div className="fixed top-1/4 left-1/3 bg-gray-200 border-2 border-gray-400 rounded shadow-lg w-[400px] h-[150px] z-50">
          <div className="bg-blue-800 text-white px-2 py-1 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <AlarmClock size={24} className="text-orange-500" />
              Cinco Alarmer
            </div>
            <button onClick={() => setShowPopup(false)} className="hover:bg-blue-700 p-1 rounded">
              <X size={16} />
            </button>
          </div>
          <div className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-gray-600">Event:</span>
              Tim's Birthday
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Time:</span>
              In 5 minutes
            </div>
            <div className="flex justify-end mt-4">
              <Cake size={24} className="text-blue-600" />
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes glitch-1 {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        @keyframes glitch-2 {
          0% { transform: translate(0); }
          20% { transform: translate(2px, -2px); }
          40% { transform: translate(2px, 2px); }
          60% { transform: translate(-2px, -2px); }
          80% { transform: translate(-2px, 2px); }
          100% { transform: translate(0); }
        }
        .animate-glitch-1 {
          animation: glitch-1 0.5s infinite;
        }
        .animate-glitch-2 {
          animation: glitch-2 0.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default StarkonStark;