import React from 'react';

const SeasonEpisodes = ({ episodes }) => {
  // Group episodes by season
  const episodesBySeason = episodes.reduce((acc, episode) => {
    const season = episode.season || 1; // Default to season 1 if not specified
    if (!acc[season]) {
      acc[season] = [];
    }
    acc[season].push(episode);
    return acc;
  }, {});

  return (
    <div className="bg-gray-900/50 max-h-[600px] rounded-lg border-2 border-red-800 p-6 overflow-x-hidden overflow-y-scroll">
      <h2 className="text-2xl font-bold text-red-500 mb-4">Episodes</h2>
      
      {Object.entries(episodesBySeason).map(([season, seasonEpisodes]) => (
        <div key={season} className="mb-8 last:mb-0">
          <h3 className="text-xl font-bold text-red-400 mb-4 border-b-2 border-red-800/50 pb-2">
            Season {season}
          </h3>
          
          <div className="space-y-4">
            {seasonEpisodes.map((episode, index) => (
              <div 
                key={index}
                className="bg-black/30 p-4 rounded border border-red-800 hover:bg-black/50 transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold text-red-300">
                    {episode.title}
                  </h4>
                  <span className="text-red-400 text-sm font-mono">
                    S{season}E{episode.episodeNumber}
                  </span>
                </div>
                <p className="text-red-100 text-sm">
                  {episode.description}
                </p>
                {episode.note && (
                  <p className="text-red-400 text-xs mt-2 italic">
                    *{episode.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SeasonEpisodes;