import React from 'react';
import MovieReel from '../shared/MovieReel';
import SeasonEpisodes from '../shared/SeasonEpisodes';
import CastMembers from '../shared/CastMembers';
import ShowDescription from '../shared/ShowDescription';
import AirTime from '../shared/AirTime';

const Channel5ShowsLayout = ({
  showTitle,
  showImage,
  description,
  episodes,
  cast,
  airTime,
  specialAnnouncement,
  children
}) => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Scan lines overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-10" 
           style={{
             backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
           }} />
      
      {/* TV static texture */}
      <div className="fixed inset-0 pointer-events-none z-40 opacity-5"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
           }} />

      {/* Colorful gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 opacity-40" />
      
      {/* Color bars header */}
      <div className="relative h-20 flex border-b-4 border-yellow-400">
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-yellow-400" />
        <div className="flex-1 bg-cyan-400" />
        <div className="flex-1 bg-green-500" />
        <div className="flex-1 bg-purple-600" />
        <div className="flex-1 bg-red-600" />
        <div className="flex-1 bg-blue-600" />
      </div>

      {/* Channel 5 Header */}
      <div className="relative overflow-hidden bg-black border-b-4 border-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <div className="inline-block">
            <h2 className="text-4xl font-bold text-red-600 font-serif mb-4 animate-pulse">
              Channel 5 Presents:
            </h2>
            <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400 font-serif mb-4 drop-shadow-2xl">
              {showTitle}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Show Image with TV Frame */}
      <div className="relative mt-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* TV Frame */}
          <div className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl border-4 border-gray-600">
            {/* Screen bezel */}
            <div className="bg-black p-3 rounded-2xl">
              <div className="relative aspect-video rounded-xl overflow-hidden border-4 border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                <img
                  src={showImage}
                  alt={showTitle}
                  className="w-full h-full object-cover"
                />
                {/* Screen glare */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
              </div>
            </div>
            
            {/* TV Speaker Grille */}
            <div className="flex justify-center mt-4">
              <div className="bg-gray-900 rounded-lg px-8 py-3 border-2 border-gray-700">
                <div className="flex gap-1">
                  {[...Array(100)].map((_, i) => (
                    <div key={i} className="w-1 h-8 bg-gray-600 rounded-full" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Show Content with Textured Background */}
      <div className="relative mt-16 pb-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="col-span-2 space-y-8">
              <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-sm rounded-2xl p-6 border-2 border-cyan-500/50">
                <ShowDescription description={description} />
              </div>
              
              <div className="bg-gradient-to-br from-pink-900/40 to-orange-900/40 backdrop-blur-sm rounded-2xl p-6 border-2 border-pink-500/50">
                <SeasonEpisodes episodes={episodes} />
              </div>
              
              {children}
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-yellow-900/40 to-red-900/40 backdrop-blur-sm rounded-2xl p-6 border-2 border-yellow-500/50">
                <AirTime {...airTime} />
              </div>
              
              <div className="bg-gradient-to-br from-green-900/40 to-teal-900/40 backdrop-blur-sm rounded-2xl p-6 border-2 border-green-500/50">
                <CastMembers cast={cast} />
              </div>
              
              {specialAnnouncement && (
                <div className="relative overflow-hidden bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-1">
                  <div className="bg-black rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse" />
                      <h3 className="text-xl font-black text-yellow-400 tracking-wider">SPECIAL BULLETIN</h3>
                    </div>
                    <p className="text-white font-bold">{specialAnnouncement}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Film Reel */}
      <MovieReel />

      {/* Footer with color bars */}
      <div className="relative h-16 flex border-t-4 border-yellow-400">
        <div className="flex-1 bg-blue-600" />
        <div className="flex-1 bg-red-600" />
        <div className="flex-1 bg-purple-600" />
        <div className="flex-1 bg-green-500" />
        <div className="flex-1 bg-cyan-400" />
        <div className="flex-1 bg-yellow-400" />
        <div className="flex-1 bg-white" />
      </div>

      <footer className="bg-black border-t-4 border-gradient-to-r from-cyan-500 to-purple-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-mono font-bold">
              © 2008 CHANNEL 5 BROADCASTING
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400 font-mono font-bold">
                CHECK LOCAL LISTINGS
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Channel5ShowsLayout;