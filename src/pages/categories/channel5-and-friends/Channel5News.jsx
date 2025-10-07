const Channel5News = () => {
  const newsStories = [
    {
      title: "Hot Air Balloon Challenge: Day 25",
      excerpt: "Team Mayor completes 300th lap around Jefferton in record attempt. Local hero aims to beat Ben Sandleman's 5,000 lap record.",
      image: "images/pages/categories/channel5andfriends/Channel5News/hotairballoon.png",
      category: "Local Events",
      reporter: "Jan Skylar"
    },
    {
      title: "Sea Serpent 'Jeffy' Spotted in Jefferton Lake",
      excerpt: "Mysterious creature sighted in man-made lake. Pops head up 'over and over and over again' according to eyewitnesses.",
      image: "images/pages/categories/channel5andfriends/Channel5News/jeffy.png",
      category: "Breaking News",
      reporter: "Wayne Skylar"
    },
    {
      title: "Brittany Loses Mayor's Painting Contest",
      excerpt: "Local untalented girl is very disappointed in losing the Mayor's painting contest. Didn't quite cut the mustard!",
      image: "images/pages/categories/channel5andfriends/Channel5News/brittany.png",
      category: "Health",
      reporter: "Jan Skylar"
    },
    {
      title: "Tom Peters' New Engineering Device Wreaks Havoc",
      excerpt: "The controversial 'Calcucorn' device causes widespread miscalculations at Parcel Powell and Moylan bridge construction. Channel 5's technical team also affected.",
      image: "images/pages/categories/channel5andfriends/Channel5News/calcucorn.png",
      category: "Catastrophe",
      reporter: "Wayne Skylar"
    },
    {
      title: "Stink Wave Alert: Hobo Activity Increases",
      excerpt: "Doppler Hobo Watch indicates concentrated activity near local residence.",
      image: "images/pages/categories/channel5andfriends/Channel5News/hobowatch.png",
      category: "Weather",
      reporter: "Jan Skylar"
    },
    {
      title: "Bridge Construction Crisis",
      excerpt: "Parcel Powell and Moylan firm faces scrutiny over structural concerns.",
      image: "images/pages/categories/channel5andfriends/Channel5News/bridgedisaster.png",
      category: "Infrastructure",
      reporter: "Wayne Skylar"
    }
  ];

  const specialReports = [
    {
      title: "Behind Closed Doors: Jefferton's Secrets",
      excerpt: "Week-long special investigation into local matters.",
      image: "images/pages/categories/channel5andfriends/Channel5News/jeffertonsecrets.png",
      reporter: "Jan & Wayne Skylar"
    },
    {
      title: "Tri-County Wrestling Championship Preview",
      excerpt: "Equipment boy Tom Peters appointed as coach for the Pinners.",
      image: "images/pages/categories/channel5andfriends/Channel5News/pinners.png",
      reporter: "Wayne Skylar"
    }
  ];

  const marriageUpdates = [
    {
      title: "No Sex Week: Wayne & Jan Take It Further",
      excerpt: "Channel 5's power couple pledges to abstain for a full year. Jan reports feeling 'relieved' as it gives her 'an opportunity to dry out down there.'",
      image: "images/pages/categories/channel5andfriends/Channel5News/nosex.png"
    },
    {
      title: "Jan's New Gardening Hobby",
      excerpt: "Briar thorns mysteriously appearing in Wayne's underwear drawer. 'It makes it a challenge,' Wayne reports.",
      image: "images/pages/categories/channel5andfriends/Channel5News/woodglue.png"
    },
    {
      title: "Wayne's Gaming Adventure",
      excerpt: "'Video games are the wave of the future,' claims Wayne while struggling with Wizard Knights.",
      image: "images/pages/categories/channel5andfriends/Channel5News/videogame.png"
    }
  ];

  const drSteveCorner = [
    {
      title: "Wine Country Special Report",
      excerpt: "Sweet Berry Wine investigation ends in emergency carriage ride home. 'Wine was invented by the Romans... for orgies.'",
      image: "images/pages/categories/channel5andfriends/Channel5News/wine.png"
    },
    {
      title: "Dr. Steve's Diarrhea Calendar",
      excerpt: "Groundbreaking research on digestion tracking. Red squares indicate... well, you know.",
      image: "images/pages/categories/channel5andfriends/Channel5News/diarreah.png"
    },
    {
      title: "Happy Decade In Broadcasting Steve!",
      excerpt: "Jan and Wayne celebrate Dr. Brule's 10 years in broadcasting with a lighthearted prank!",
      image: "images/pages/categories/channel5andfriends/Channel5News/decade.png"
    }
  ];

  const investigations = [
    {
      title: "Captain Tom Peters' Love Letter Interrupts Balloon Coverage",
      image: "images/pages/categories/channel5andfriends/Channel5News/loveletter.png",
      excerpt: "First communication in weeks received from vessel during hot air balloon coverage: 'Dear Joy, I miss your warmth and tender hugs...' More personal details accidentally broadcast live.",
      category: "Special Report",
      reporter: "Wayne Skylar"
    },
    {
      title: "Memorial Park Carpet Crisis",
      image: "images/pages/categories/channel5andfriends/Channel5News/carpetcrisis.png",
      excerpt: "Tom Peters' installation leads to mass casualties. Jan reports feeling '100% fine' after exposure.",
      category: "Public Safety",
      reporter: "Jan Skylar"
    },
    {
      title: "Gibbons Well Incident",
      image: "images/pages/categories/channel5andfriends/Channel5News/gibbons.png",
      excerpt: "Live coverage of expo speaker's unfortunate well situation.",
      category: "Breaking News",
      reporter: "Wayne & Jan"
    }
  ];

  const marriageCorner = [
    {
      title: "How To Keep Wayne Away",
      tips: [
        "Strategically placed briar thorns",
        "Red pepper flakes on sensitive areas",
        "Pre-bedtime shawarma consumption",
        "Wood glue and spice combinations"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-800 relative overflow-hidden">
      {/* Newspaper texture overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.1) 2px, rgba(255, 255, 255, 0.1) 4px)`
      }} />

      {/* Breaking news ticker background */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-red-700 to-red-600 animate-pulse" />

      {/* Header - TV News Studio Style */}
      <header className="relative bg-gradient-to-b from-red-800 via-red-900 to-red-950 text-white border-b-8 border-red-600 shadow-2xl">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        <div className="max-w-7xl mx-auto py-8 px-4 relative">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <div className="absolute inset-0 bg-red-500 blur-xl opacity-50 animate-pulse" />
                <img 
                  src="images/pages/categories/channel5andfriends/Channel5News/channel5logo.png" 
                  alt="Channel 5 News" 
                  className="relative h-24 w-24 drop-shadow-2xl"
                />
              </div>
              <div>
                <h1 className="text-5xl font-bold tracking-widest mb-2" style={{
                  fontFamily: 'Impact, sans-serif',
                  textShadow: '3px 3px 0px rgba(0, 0, 0, 0.5), 6px 6px 0px rgba(220, 38, 38, 0.3)',
                  letterSpacing: '0.05em'
                }}>
                  CHANNEL 5 NEWS
                </h1>
                <p className="text-xl italic text-red-200 border-l-4 border-red-400 pl-3">
                  With Jefferton's Only Married News Team
                </p>
              </div>
            </div>
            <div className="text-right bg-red-950/80 border-4 border-red-600 px-6 py-4 shadow-xl">
              <p className="text-2xl font-bold tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
                Wayne & Jan Skylar
              </p>
              <p className="text-sm italic text-red-200 mt-1">
                "Our love for news matches our love for each other"
              </p>
            </div>
          </div>
        </div>
        
        {/* Breaking news ticker */}
        <div className="bg-red-600 text-white py-2 overflow-hidden relative border-t-2 border-red-400">
          <div className="absolute left-0 bg-yellow-400 text-red-900 px-4 py-2 font-black text-sm z-10">
            BREAKING NEWS
          </div>
          <div className="pl-40 text-sm font-bold tracking-wide">
            LIVE: Jefferton Lake Creature Sighting • Tom Peters Device Malfunction • Hot Air Balloon Update • Marriage Status: Strong
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4">
        {/* Featured Stories - Front Page Layout */}
        <section className="mb-16">
          <div className="relative mb-8">
            <div className="absolute -inset-2 bg-red-600 opacity-20 blur-xl" />
            <h2 className="relative tracking-widest text-4xl font-bold text-white mb-2 pb-4 border-b-4 border-red-600 inline-block" style={{
              fontFamily: 'Impact, sans-serif',
              textShadow: '2px 2px 0px rgba(220, 38, 38, 0.5)'
            }}>
              📰 FEATURED STORIES
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsStories.map((story, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-b from-white to-gray-50 rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all hover:scale-105 border-4 border-gray-200"
              >
                <div className="relative">
                  <img 
                    src={story.image} 
                    alt={story.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 text-xs font-black uppercase border-2 border-white shadow-lg">
                    {story.category}
                  </div>
                </div>
                <div className="p-5 border-t-4 border-red-600">
                  <h3 className="text-lg font-bold text-gray-900 mt-1 mb-3 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                    {story.title}
                  </h3>
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">{story.excerpt}</p>
                  <div className="flex items-center gap-2 text-xs text-red-700 font-bold bg-red-50 px-3 py-2 rounded border border-red-200">
                    <span>📺</span>
                    <span>Reported by {story.reporter}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Special Coverage - Investigative Style */}
        <section className="mb-16">
          <div className="relative mb-8">
            <div className="absolute -inset-2 bg-yellow-600 opacity-20 blur-xl" />
            <h2 className="relative tracking-wide text-4xl font-bold text-white mb-2 pb-4 border-b-4 border-yellow-500 inline-block" style={{
              fontFamily: 'Impact, sans-serif',
              textShadow: '2px 2px 0px rgba(202, 138, 4, 0.5)'
            }}>
              🎬 SPECIAL COVERAGE
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialReports.map((report, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-lg shadow-2xl overflow-hidden hover:shadow-2xl transition-all border-4 border-yellow-600"
              >
                <div className="relative">
                  <img 
                    src={report.image} 
                    alt={report.title} 
                    className="w-full h-72 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-400 text-red-900 px-4 py-2 text-sm font-black uppercase border-4 border-red-900 shadow-xl transform rotate-3">
                    EXCLUSIVE
                  </div>
                </div>
                <div className="p-6 border-t-8 border-yellow-600">
                  <h3 className="text-2xl font-bold text-red-900 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                    {report.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-yellow-900 font-bold bg-yellow-100 px-3 py-2 rounded border-2 border-yellow-600 mb-3">
                    <span>🔍</span>
                    <span>Investigation by {report.reporter}</span>
                  </div>
                  <p className="text-gray-800 leading-relaxed">{report.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Marriage Status Section */}
        <section className="mb-16 bg-gradient-to-br from-pink-100 to-red-100 rounded-lg p-8 border-8 border-double border-pink-600 shadow-2xl">
          <div className="relative mb-8">
            <h2 className="text-4xl tracking-wide font-bold text-red-900 mb-2 flex items-center gap-3" style={{
              fontFamily: 'Impact, sans-serif',
              textShadow: '2px 2px 0px rgba(255, 192, 203, 0.5)'
            }}>
              <span className="text-5xl">💑</span>
              MARRIAGE STATUS UPDATE
            </h2>
            <div className="h-1 bg-gradient-to-r from-pink-600 to-red-600 w-64 mt-2" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {marriageUpdates.map((update, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border-4 border-pink-400 hover:scale-105 transition-transform">
                <img src={update.image} alt={update.title} className="w-full h-48 object-cover border-b-4 border-pink-400" />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                    {update.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{update.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dr. Steve's Corner */}
        <section className="mb-16 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg p-8 border-8 border-double border-purple-600 shadow-2xl">
          <div className="relative mb-8">
            <h2 className="tracking-wide text-4xl font-bold text-purple-900 mb-2 flex items-center gap-3" style={{
              fontFamily: 'Impact, sans-serif',
              textShadow: '2px 2px 0px rgba(216, 180, 254, 0.5)'
            }}>
              <span className="text-5xl">👨‍⚕️</span>
              DR. STEVE BRULE'S CORNER
            </h2>
            <div className="h-1 bg-gradient-to-r from-purple-600 to-indigo-600 w-64 mt-2" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {drSteveCorner.map((report, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border-4 border-purple-400 hover:scale-105 transition-transform">
                <img src={report.image} alt={report.title} className="w-full h-48 object-cover border-b-4 border-purple-400" />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                    {report.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{report.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Jan's Marriage Tips - Sidebar Style */}
        <section className="mb-16 ml-64 w-[400px] bg-gradient-to-br from-red-100 to-pink-100 rounded-lg p-6 border-8 border-double border-red-600 shadow-2xl">
          <div className="relative mb-6">
            <h2 className="text-3xl tracking-wide font-bold text-red-900 mb-2 flex items-center gap-2" style={{
              fontFamily: 'Impact, sans-serif'
            }}>
              <span className="text-4xl">💝</span>
              JAN'S MARRIAGE TIPS
            </h2>
            <div className="h-1 bg-gradient-to-r from-red-600 to-pink-600 w-full mt-2" />
          </div>
          {marriageCorner.map((corner, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-4 border-red-400">
              <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-red-200" style={{ fontFamily: 'Georgia, serif' }}>
                {corner.title}
              </h3>
              <ul className="space-y-3">
                {corner.tips.map((tip, tipIndex) => (
                  <li key={tipIndex} className="text-gray-800 flex items-start gap-2">
                    <span className="text-red-600 font-bold mt-1">▸</span>
                    <span className="leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Special Investigations */}
        <section className="mb-16">
          <div className="relative mb-8">
            <div className="absolute -inset-2 bg-orange-600 opacity-20 blur-xl" />
            <h2 className="relative tracking-wide text-4xl font-bold text-white mb-2 pb-4 border-b-4 border-orange-500 inline-block flex items-center gap-3" style={{
              fontFamily: 'Impact, sans-serif',
              textShadow: '2px 2px 0px rgba(234, 88, 12, 0.5)'
            }}>
              <span className="text-5xl">🔍</span>
              CHANNEL 5 INVESTIGATIONS
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {investigations.map((story, index) => (
              <div key={index} className="bg-gradient-to-b from-white to-orange-50 rounded-lg shadow-xl overflow-hidden border-4 border-orange-400 hover:scale-105 transition-transform">
                <div className="relative">
                  <img src={story.image} alt={story.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-2 left-2 bg-orange-600 text-white px-3 py-1 text-xs font-black uppercase border-2 border-white shadow-lg">
                    {story.category}
                  </div>
                </div>
                <div className="p-5 border-t-4 border-orange-600">
                  <div className="flex items-center gap-2 text-xs text-orange-700 font-bold mb-2">
                    <span>📺 Reported by {story.reporter}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                    {story.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{story.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative bg-gradient-to-b from-red-950 to-black text-white mt-20 border-t-8 border-red-600">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255, 255, 255, 0.1) 10px, rgba(255, 255, 255, 0.1) 20px)`
        }} />
        <div className="relative max-w-7xl mx-auto py-8 px-4">
          <div className="flex justify-between items-center">
            <div className="text-left">
              <p className="text-xl tracking-wide font-bold mb-1" style={{ fontFamily: 'Impact, sans-serif' }}>
                © 2008 CHANNEL 5 NEWS
              </p>
              <p className="text-sm text-red-300">Jefferton's Most Trusted News Source</p>
            </div>
            <div className="text-right">
              <p className="text-2xl italic text-red-200 font-bold" style={{ fontFamily: 'Georgia, serif' }}>
                "Still married after all these years"
              </p>
              <p className="text-sm text-red-400 mt-1">Check your local listings</p>
            </div>
          </div>
        </div>
        <div className="h-2 bg-gradient-to-r from-red-600 via-red-700 to-red-600" />
      </footer>
    </div>
  );
};

export default Channel5News;