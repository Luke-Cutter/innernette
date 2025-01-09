import React from 'react';
import BlinkingText from '../../../components/shared/BlinkingText';
import ImageCarousel from '../../../components/shared/ImageCarousel';

const UncleMusclesHour = () => {
  const images = [
    'images/pages/categories/channel5andfriends/UncleMusclesHour/unclemuscleshour.PNG',  // Show logo
    'images/pages/categories/channel5andfriends/UncleMusclesHour/casey.PNG',  // Studio shot placeholder
    'images/pages/categories/channel5andfriends/UncleMusclesHour/dennisharrity.PNG',  // Performance shot placeholder
    'images/pages/categories/channel5andfriends/UncleMusclesHour/michaelschmidt.PNG',
    'images/pages/categories/channel5andfriends/UncleMusclesHour/rhymes.PNG',
    'images/pages/categories/channel5andfriends/UncleMusclesHour/michaelqschmidt.PNG',  // Trophy ceremony placeholder
  ];

  return (
    <div className="min-h-full bg-gradient-to-r from-blue-900 via-yellow-400 to-blue-900 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Retro TV Header */}
        <div className="bg-gradient-to-br from-blue-700 to-yellow-400 p-8 rounded-t-3xl border-8 border-gray-800">
          <div className="text-center space-y-4">
              <h1 className="text-6xl stroke-black font-bold text-yellow-300 filter drop-shadow-lg">
                Uncle Muscle's Hour
              </h1>
            <p className="text-2xl text-white">Channel 5's Premier Variety Experience</p>
          </div>
        </div>

        {/* TV Screen Content */}
        <div className="bg-black p-4">
          <ImageCarousel images={images} />
        </div>

        {/* Show Information */}
        <div className="bg-blue-800 p-8 space-y-8">
          {/* Host Section */}
          <div className="bg-yellow-400 rounded-xl p-6 transform -rotate-1">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Your Host: Uncle Muscles</h2>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="bg-white p-4 rounded-lg shadow-inner">
                  <img 
                    src="images/pages/categories/channel5andfriends/UncleMusclesHour/unclemuscles.PNG" 
                    alt="Uncle Muscles"
                    className="w-full h-48 object-cover rounded border-4 border-blue-900"
                  />
                </div>
              </div>
              <div className="flex-1 text-blue-900 space-y-2">
                <p className="font-bold text-xl">"Where Champions Are Made!"</p>
                <p>Join Uncle Muscles as he showcases the brightest stars of tomorrow, today!</p>
              </div>
            </div>
          </div>

          {/* Featured Talent */}
          <div className="bg-gradient-to-r from-yellow-300 to-yellow-500 p-6 rounded-xl transform rotate-1">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Featured Performers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/90 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-blue-800">Casey and his Brother</h3>
                <p className="text-gray-700">Musical Duo Extraordinaire</p>
              </div>
              <div className="bg-white/90 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-blue-800">Dennis Harrity</h3>
                <p className="text-gray-700">Singing Sensation</p>
              </div>
              <div className="bg-white/90 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-blue-800">Michael Q. Schmidt</h3>
                <p className="text-gray-700">Special Guest Star</p>
              </div>
              <div className="bg-white/90 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-blue-800">Rhymes</h3>
                <p className="text-gray-700">The Rapping Dog</p>
              </div>
            </div>
          </div>

          {/* Trophy Section */}
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-6 rounded-xl transform -rotate-1">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Grand Championship</h2>
            <div className="bg-blue-900/20 p-4 rounded-lg text-center">
              <BlinkingText>
                <p className="text-2xl font-bold text-white">
                  🏆 Could YOU be our next champion? 🏆
                </p>
              </BlinkingText>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-blue-900 text-yellow-400 p-4 rounded-b-3xl text-center">
            <p className="text-xl">Tune in to Channel 5!</p>
        </div>
      </div>
    </div>
  );
};

export default UncleMusclesHour;