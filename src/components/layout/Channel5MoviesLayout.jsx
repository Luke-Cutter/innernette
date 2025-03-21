import React from 'react';
import MovieReel from '../shared/MovieReel';
import CastMembers from '../shared/CastMembers';
import { Clock } from 'lucide-react';

// MovieRating Component
const MovieRating = ({ rating }) => {
  return (
    <div className="bg-black/50 border-2 border-red-800 rounded-lg p-6">
      <h3 className="text-2xl font-bold text-red-500 mb-4">Channel 5 Rating</h3>
      <div className="space-y-4">
        <div className="flex items-center">
          <span className="text-3xl font-bold text-red-400">{rating.score}</span>
        </div>
        <div className="border-t border-red-800/50 pt-4">
          <p className="text-red-200 text-sm font-mono">{rating.certification}</p>
          <p className="text-red-200/80 text-sm mt-2 italic">{rating.warning}</p>
        </div>
      </div>
    </div>
  );
};

// MovieDetails Component
const MovieDetails = ({ synopsis, runtime }) => {
  return (
    <div className="space-y-6">
      <div className="bg-red-900/30 border-2 border-red-800 rounded-lg p-4 inline-flex items-center space-x-4">
        <Clock size={24} className="text-red-500" />
        <span className="font-mono text-xl text-red-400 font-bold">{runtime}</span>
      </div>
      
      <div className="bg-black/50 border-2 border-red-800 rounded-lg p-6">
        <h3 className="text-2xl font-bold text-red-500 mb-4">Synopsis</h3>
        <p className="text-red-100 leading-relaxed whitespace-pre-line">
          {synopsis}
        </p>
      </div>
    </div>
  );
};

// ShowTime Component
const ShowTime = ({ showTimes }) => {
  return (
    <div className="bg-black/50 border-2 border-red-800 rounded-lg p-6">
      <h3 className="text-2xl font-bold text-red-500 mb-4">Showtimes</h3>
      <div className="space-y-3">
        <div className="text-red-100">
          <span className="font-bold text-red-400">Prime Time:</span>
          <p>{showTimes.primetime} {showTimes.timezone}</p>
        </div>
        <div className="text-red-100">
          <span className="font-bold text-red-400">Late Night:</span>
          <p>{showTimes.latenight} {showTimes.timezone}</p>
        </div>
        <div className="text-red-100">
          <span className="font-bold text-red-400">Weekend:</span>
          <p>{showTimes.weekend}</p>
        </div>
        {showTimes.note && (
          <p className="text-red-200/80 text-sm mt-4 italic border-t border-red-800/50 pt-4">
            {showTimes.note}
          </p>
        )}
      </div>
    </div>
  );
};

// Main Layout Component
const Channel5MoviesLayout = ({
  movieTitle,
  moviePoster,
  synopsis,
  rating,
  runtime,
  cast,
  showTimes,
  movieTrivia,
  specialFeature,
  critics,
  children
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-red-900/10 to-gray-900">
      {/* Channel 5 Movies Header */}
      <div className="relative overflow-hidden bg-black border-b-4 border-red-800">
        <div className="max-w-7xl mx-auto px-8 py-8 text-center">
          <div className="inline-block">
            <h2 className="text-4xl font-bold text-red-600 font-serif mb-4 animate-pulse">
              Channel 5 Movie Showcase:
            </h2>
            <h1 className="text-6xl font-extrabold text-white font-serif mb-8 text-shadow-glow">
              {movieTitle}
            </h1>
          </div>
        </div>
      </div>

      {/* Movie Poster */}
      <div className="relative mt-4">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />
        <div className="max-w-6xl mx-auto px-8">
          <div className="relative aspect-[2/3] md:aspect-[3/2] rounded-lg overflow-hidden border-4 border-red-800 shadow-2xl">
            <img
              src={moviePoster}
              alt={movieTitle}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Movie Content */}
      <div className="max-w-7xl mx-auto px-8 py-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Movie Info */}
          <div className="col-span-2 space-y-8">
            <MovieDetails 
              synopsis={synopsis}
              runtime={runtime}
            />
            
            {/* Movie Trivia Section */}
            {movieTrivia && (
              <div className="bg-black/50 border-2 border-red-800 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-red-500 mb-4">Trivia</h3>
                <ul className="space-y-4 text-red-100">
                  {movieTrivia.map((fact, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Behind The Scenes Section */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-red-900/20 border-2 border-red-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-red-700 mb-2">Channel 5 Guarantee</h3>
                <ul className="text-red-100 space-y-2 list-disc list-inside">
                  <li>Shot on Location</li>
                  <li>CINCO™ Video Cube Quality</li>
                  <li>Real Actors*</li>
                  <li>Quality Entertainment</li>
                  <li>No swearing on childrens content</li>
                  <li>Maximized swearing on adult content</li>
                </ul>
                <p className="text-red-300/70 text-xs mt-4">*May not be real actors</p>
              </div>
              
              {/* Special Feature */}
              {specialFeature && (
                <div className="bg-red-900/20 border-2 border-red-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-red-700 mb-2">Special Feature</h3>
                  <p className="text-red-100">{specialFeature}</p>
                </div>
              )}
            </div>
            {children}
          </div>

          {/* Right Column - Rating, Cast & Showtimes */}
          <div className="space-y-6 ">
            <MovieRating rating={rating} />
            <ShowTime showTimes={showTimes} />
            <CastMembers cast={cast} />
          </div>
        </div>
      </div>

      {/* Critics Section */}
      {critics && critics.length > 0 && (
        <div className="max-w-7xl -mt-20 mx-auto px-8 py-12 relative z-20">
          <div className="bg-black/50 border-2 border-red-800 rounded-lg p-8 text-center">
            <h3 className="text-3xl font-bold text-red-500 mb-6">Critics Say...</h3>
            <div className="space-y-6">
              {critics.map((quote, index) => (
                <blockquote key={index} className="text-red-100 italic text-xl">
                  "{quote.text}"
                  <footer className="text-red-400 mt-2 text-lg">
                    - {quote.critic}
                    {quote.publication && (
                      <span className="text-red-300/70 text-base"> ({quote.publication})</span>
                    )}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Film Reel Footer */}
      <MovieReel />

      {/* Footer */}
      <footer className="bg-black border-t-4 border-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="text-red-600 font-mono">
              © 2008 Channel 5 Movies
            </div>
            <div className="text-red-600 font-mono">
              For Your Quality Entertainment
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Channel5MoviesLayout;