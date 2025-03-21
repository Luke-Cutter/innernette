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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-red-900/10 to-gray-900">
      {/* Channel 5 Header */}
      <div className="relative overflow-hidden bg-black border-b-4 border-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <div className="inline-block">
            <h2 className="text-4xl font-bold text-red-600 font-serif mb-4 animate-pulse">
              Channel 5 Presents:
            </h2>
            <h1 className="text-6xl font-extrabold text-white font-serif mb-8 text-shadow-glow">
              {showTitle}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Show Image */}
      <div className="relative mt-4">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />
        <div className="max-w-6xl mx-auto px-8">
          <div className="relative aspect-video rounded-lg overflow-hidden border-4 border-red-800 shadow-2xl">
            <img
              src={showImage}
              alt={showTitle}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Show Content */}
      <div className="max-w-7xl mx-auto px-8 py-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Show Info */}
          <div className="col-span-2 space-y-8">
            <ShowDescription description={description} />
            <SeasonEpisodes episodes={episodes} />
            {children}
          </div>

          {/* Right Column - Cast & Air Time */}
          <div className="space-y-8">
            <AirTime {...airTime} />
            <CastMembers cast={cast} />
            
            {/* Special Announcement */}
            {specialAnnouncement && (
              <div className="bg-red-900/20 border-2 border-red-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-red-500 mb-2">Special Announcement</h3>
                <p className="text-red-100">{specialAnnouncement}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Film Reel Footer */}
      <MovieReel />

      {/* Footer */}
      <footer className="bg-black border-t-4 border-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="text-red-600 font-mono">
              © 2008 Channel 5
            </div>
            <div className="text-red-600 font-mono">
              Check your local listings
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Channel5ShowsLayout;