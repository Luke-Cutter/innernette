import React, { useState, useEffect } from 'react';
import { Heart, Tv, Crown, Star, Calendar, Smile, Frown, Zap, XCircle, AlertTriangle, Axe } from 'lucide-react';

const FemininePerspectives = () => {
  const [showBlessing, setShowBlessing] = useState(true);

  const stuntRoles = {
    randy: [
      "Kel C. Grammare- Actor",
      "Don Buon Jiovie- Musician/Actor", 
      "Craig 'Tea' Nelson- Actor",
      "Jut Hursh- Actor/Director",
      "Hosta Mahogey- Comedian"
    ],
    gene: [
      "Jhud Nalson- Actor",
      "Will 'Scan Man' Nguyen- Actor",
      "Dell Taburk- Actress/Comedienne",
      "Jay Mawhinney- CINCO™ Spokesman",
      "Bihl Cosbi- Rapper/ Actor"
    ]
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowBlessing(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-pink-50 flex flex-col" style = {{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556l-1.414-1.414L28 0h4zM.284 0l28 28-1.414 1.414L0 2.544V0h.284zM0 5.373l25.456 25.455-1.414 1.415L0 8.2V5.374zm0 5.656l22.627 22.627-1.414 1.414L0 13.86v-2.83zm0 5.656l19.8 19.8-1.415 1.413L0 19.514v-2.83zm0 5.657l16.97 16.97-1.414 1.415L0 25.172v-2.83zM0 28l14.142 14.142-1.414 1.414L0 30.828V28zm0 5.657L11.314 44.97 9.9 46.386l-9.9-9.9v-2.828zm0 5.657L8.485 47.8 7.07 49.212 0 42.143v-2.83zm0 5.657l5.657 5.657-1.414 1.415L0 47.8v-2.83zm0 5.657l2.828 2.83-1.414 1.413L0 53.456v-2.83zM54.627 60L30 35.373 5.373 60H8.2L30 38.2 51.8 60h2.827zm-5.656 0L30 41.03 11.03 60h2.828L30 43.858 46.142 60h2.83zm-5.656 0L30 46.686 16.686 60h2.83L30 49.515 40.485 60h2.83zm-5.657 0L30 52.343 22.343 60h2.83L30 55.172 34.828 60h2.83zM32 60l-2-2-2 2h4zM59.716 0l-28 28 1.414 1.414L60 2.544V0h-.284zM60 5.373L34.544 30.828l1.414 1.415L60 8.2V5.374zm0 5.656L37.373 33.656l1.414 1.414L60 13.86v-2.83zm0 5.656l-19.8 19.8 1.415 1.413L60 19.514v-2.83zm0 5.657l-16.97 16.97 1.414 1.415L60 25.172v-2.83zM60 28L45.858 42.142l1.414 1.414L60 30.828V28zm0 5.657L48.686 44.97l1.415 1.415 9.9-9.9v-2.828zm0 5.657L51.515 47.8l1.414 1.413 7.07-7.07v-2.83zm0 5.657l-5.657 5.657 1.414 1.415L60 47.8v-2.83zm0 5.657l-2.828 2.83 1.414 1.413L60 53.456v-2.83zM39.9 16.385l1.414-1.414L30 3.658 18.686 14.97l1.415 1.415 9.9-9.9 9.9 9.9zm-2.83 2.828l1.415-1.414L30 9.313 21.515 17.8l1.414 1.413 7.07-7.07 7.07 7.07zm-2.827 2.83l1.414-1.416L30 14.97l-5.657 5.657 1.414 1.415L30 17.8l4.243 4.242zm-2.83 2.827l1.415-1.414L30 20.626l-2.828 2.83 1.414 1.414L30 23.456l1.414 1.414zM56.87 59.414L58.284 58 30 29.716 1.716 58l1.414 1.414L30 32.544l26.87 26.87z' fill='%23f3a8ee' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
    }}>
      {/* Spiritual Banner */}
      {showBlessing && (
        <div className="bg-purple-100 text-purple-800 py-1 text-center text-sm font-serif italic">
          <Crown className="inline-block mr-2" size={14} />
          "Thank you, oh powerful Susan, for the gift of the feminine spirit"
          <Crown className="inline-block ml-2" size={14} />
        </div>
      )}

      {/* Header */}
      <header className="bg-pink-200 py-6" style = {{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='88' viewBox='0 0 80 88' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22 21.91V26h-2c-9.94 0-18 8.06-18 18 0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73 3.212-6.99 9.983-12.008 18-12.73V62h2c9.94 0 18-8.06 18-18 0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73-3.212 6.99-9.983 12.008-18 12.73zM54 58v4.696c-5.574 1.316-10.455 4.428-14 8.69-3.545-4.262-8.426-7.374-14-8.69V58h-5.993C12.27 58 6 51.734 6 44c0-7.732 6.275-14 14.007-14H26v-4.696c5.574-1.316 10.455-4.428 14-8.69 3.545 4.262 8.426 7.374 14 8.69V30h5.993C67.73 30 74 36.266 74 44c0 7.732-6.275 14-14.007 14H54zM42 88c0-9.94 8.06-18 18-18h2v-4.09c8.016-.722 14.787-5.738 18-12.73v7.434c-3.545 4.262-8.426 7.374-14 8.69V74h-5.993C52.275 74 46 80.268 46 88h-4zm-4 0c0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73v7.434c3.545 4.262 8.426 7.374 14 8.69V74h5.993C27.73 74 34 80.266 34 88h4zm4-88c0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73v-7.434c-3.545-4.262-8.426-7.374-14-8.69V14h-5.993C52.27 14 46 7.734 46 0h-4zM0 34.82c3.213-6.992 9.984-12.008 18-12.73V18h2c9.94 0 18-8.06 18-18h-4c0 7.732-6.275 14-14.007 14H14v4.696c-5.574 1.316-10.455 4.428-14 8.69v7.433z' fill='%23fe8ff2' fill-opacity='0.15' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-serif text-purple-900 flex items-center justify-center gap-2">
            <Heart className="text-pink-500" fill="pink" size={20} />
            Feminine Perspectives
            <Heart className="text-pink-500" fill="pink" size={20} />
          </h1>
          <p className="text-purple-700 italic text-sm">The talk show from the woman's perspective</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto p-4 flex flex-col gap-4">
        {/* Episode Preview */}
        <div className="bg-white rounded-lg p-4 shadow">
          <div className="flex gap-4">
            <div className="w-2/3">
              <h2 className="text-xl font-serif text-purple-900 mb-2">
                Today's Special: Hollywood's Most Unique Stunt Brothers
              </h2>
              <img 
                src="images/pages/categories/channel5andfriends/FemininePerspectives/MarshandLonnie.PNG" 
                alt="Live Studio Recording" 
                className="rounded-lg mb-2 w-full"
              />
              <div className="flex gap-3 text-xs justify-center text-purple-600">
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  Today's Show
                </span>
                <span className="flex items-center gap-1">
                  <Tv size={12} />
                  Live Studio Recording
                </span>
                <span className="flex items-center gap-1">
                  <Star size={12} />
                  Topless? We hope!
                </span>
              </div>
            </div>
            <div className="w-1/3 border-l border-pink-100 pl-4">
              <h3 className="text-lg font-serif text-purple-900 mb-2">Feminine Insights™</h3>
              <div 
                className="bg-pink-100 flex justify-center text-purple-700 py-1 px-3 rounded-full text-sm w-full"
              >
                Our Audience's Divine Perspectives
              </div>
              { (
                <div className="mt-2 space-y-1 text-xs animate-fade-in overflow-y-auto max-h-64">
                <div className="flex items-center gap-1 text-pink-700">
                  <Smile size={12} />
                  "Oh my, two handsome stuntmen!"
                </div>
                <div className="flex items-center gap-1 text-pink-700">
                  <XCircle size={12} />
                  "I can't tell them apart!"
                </div>
                <div className="flex items-center gap-1 text-pink-700">
                  <Smile size={12} />
                  "These boys are so strong"
                </div>
                <div className="flex items-center gap-1 text-pink-700">
                  <XCircle size={12} />
                  "They keep interrupting each other..."
                </div>
                <div className="flex items-center gap-1 text-pink-700">
                  <Frown size={12} />
                  "That looked like it really hurt"
                </div>
                <div className="flex items-center gap-1 text-pink-700">
                  <XCircle size={12} />
                  "Don't get too hurt, we want you for dessert!"
                </div>
                <div className="flex items-center gap-1 text-pink-700">
                  <Frown size={12} />
                  "Should they be doing this?"
                </div>
                <div className="flex items-center gap-1 text-pink-700">
                  <XCircle size={12} />
                  "That's a very dangerous shoot..."
                </div>
                <div className="flex items-center gap-1 text-pink-700">
                  <AlertTriangle size={12} />
                  "Wait, is that a real gun!?"
                </div>
                <div className="flex items-center gap-1 text-pink-700">
                  <AlertTriangle size={12} />
                  "Someone should stop this!"
                </div>
                <div className="flex items-center gap-1 text-pink-700">
                  <AlertTriangle size={12} />
                  "Why is the gun loaded with live rounds!?"
                </div>
                <div className="flex items-center gap-1 text-pink-700">
                  <AlertTriangle size={12} />
                  "I don't want to see a death today!"
                </div>
                <div className="flex items-center gap-1 text-pink-700">
                  <AlertTriangle size={12} />
                  "Someone get help NOW!"
                </div>
              </div>
              )}
            </div>
          </div>
        </div>

        {/* Stunt Brothers Section */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 shadow">
            <h3 className="text-lg font-serif text-purple-900 mb-2">Meet Randy Stontmehn</h3>
            <div className="space-y-2">
              <div className="text-sm text-purple-700 italic mb-3">
                "Oh, you start and I'll interrupt."
              </div>
              <div className="bg-pink-50 p-3 rounded">
                <h4 className="font-medium mb-2">Notable Roles:</h4>
                {stuntRoles.randy.map((role, index) => (
                  <div key={index} className="text-sm text-purple-700 mb-1 flex items-center gap-2">
                    <Star size={12} className="text-pink-500" />
                    {role}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <h3 className="text-lg font-serif text-purple-900 mb-2">Meet Gene Stontmehn</h3>
            <div className="space-y-2">
              <div className="text-sm text-purple-700 italic mb-3">
                "We're the stunt brothers. Actually, we enjoy it."
              </div>
              <div className="bg-pink-50 p-3 rounded">
                <h4 className="font-medium mb-2">Notable Roles:</h4>
                {stuntRoles.gene.map((role, index) => (
                  <div key={index} className="text-sm text-purple-700 mb-1 flex items-center gap-2">
                    <Star size={12} className="text-pink-500" />
                    {role}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Live Demonstrations */}
        <div className="bg-white rounded-lg p-4 shadow">
          <h3 className="text-lg font-serif text-purple-900 mb-3">Today's Live Demonstrations</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-pink-50 p-3 rounded hover:bg-pink-100 cursor-pointer transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Zap size={16} className="text-pink-500" />
                <h4 className="font-medium">Fight Scene from Turkey's 2</h4>
              </div>
              <p className="text-purple-700 italic text-sm">"I don't like the look of you... Right in your jeans!"</p>
            </div>
            <div className="bg-pink-50 p-3 rounded hover:bg-pink-100 cursor-pointer transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Star size={16} className="text-pink-500" />
                <h4 className="font-medium">Special Effects Demo</h4>
              </div>
              <p className="text-purple-700 italic text-sm">"Watch closely, I'm not even touching him!"</p>
            </div>
            <div className="bg-pink-50 p-3 rounded hover:bg-pink-100 cursor-pointer transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Axe size={16} className="text-pink-500" />
                <h4 className="font-medium">The Exploding Pumpkin</h4>
              </div>
              <p className="text-purple-700 italic text-sm">"If I'm just a touch off, my brother Gene's a goner."</p>
              <div className="mt-1 text-[10px] bg-red-100 text-red-700 px-2 py-1 rounded-full inline-block">
                Coming Up Next
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-purple-100 py-4 mt-auto" style = {{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M81.28 88H68.413l19.298 19.298L81.28 88zm2.107 0h13.226L90 107.838 83.387 88zm15.334 0h12.866l-19.298 19.298L98.72 88zm-32.927-2.207L73.586 78h32.827l.5.5 7.294 7.293L115.414 87l-24.707 24.707-.707.707L64.586 87l1.207-1.207zm2.62.207L74 80.414 79.586 86H68.414zm16 0L90 80.414 95.586 86H84.414zm16 0L106 80.414 111.586 86h-11.172zm-8-6h11.173L98 85.586 92.414 80zM82 85.586L87.586 80H76.414L82 85.586zM17.414 0L.707 16.707 0 17.414V0h17.414zM4.28 0L0 12.838V0h4.28zm10.306 0L2.288 12.298 6.388 0h8.198zM180 17.414L162.586 0H180v17.414zM165.414 0l12.298 12.298L173.612 0h-8.198zM180 12.838L175.72 0H180v12.838zM0 163h16.413l.5.5 7.294 7.293L25.414 172l-8 8H0v-17zm0 10h6.613l-2.334 7H0v-7zm14.586 7l7-7H8.72l-2.333 7h8.2zM0 165.414L5.586 171H0v-5.586zM10.414 171L16 165.414 21.586 171H10.414zm-8-6h11.172L8 170.586 2.414 165zM180 163h-16.413l-7.794 7.793-1.207 1.207 8 8H180v-17zm-14.586 17l-7-7h12.865l2.333 7h-8.2zM180 173h-6.613l2.334 7H180v-7zm-21.586-2l5.586-5.586 5.586 5.586h-11.172zM180 165.414L174.414 171H180v-5.586zm-8 5.172l5.586-5.586h-11.172l5.586 5.586zM152.933 25.653l1.414 1.414-33.94 33.942-1.416-1.416 33.943-33.94zm1.414 127.28l-1.414 1.414-33.942-33.94 1.416-1.416 33.94 33.943zm-127.28 1.414l-1.414-1.414 33.94-33.942 1.416 1.416-33.943 33.94zm-1.414-127.28l1.414-1.414 33.942 33.94-1.416 1.416-33.94-33.943zM0 85c2.21 0 4 1.79 4 4s-1.79 4-4 4v-8zm180 0c-2.21 0-4 1.79-4 4s1.79 4 4 4v-8zM94 0c0 2.21-1.79 4-4 4s-4-1.79-4-4h8zm0 180c0-2.21-1.79-4-4-4s-4 1.79-4 4h8z' fill='%23aa8fd5' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }}>
        <div className="container mx-auto px-4">
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-2">
              <Crown size={16} className="text-purple-500" />
              <h4 className="font-serif text-purple-800 italic">Sacred Words from Susan</h4>
              <Crown size={16} className="text-purple-500" />
            </div>
            <p className="text-purple-700 text-sm italic max-w-lg mx-auto">
              "We follow you blindly to the great Vajonas. Through your divine guidance, 
              we shall witness these dangerous stunts with feminine grace."
            </p>
            <div className="flex items-center justify-center gap-1 text-pink-500">
              <Heart size={12} fill="pink" />
              <Heart size={12} fill="pink" />
              <Heart size={12} fill="pink" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FemininePerspectives;