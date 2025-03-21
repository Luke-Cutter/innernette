import React from 'react';

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
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-red-300">
      {/* Header */}
      <header className="bg-red-900 text-white">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img 
                src="images/pages/categories/channel5andfriends/Channel5News/channel5logo.png" 
                alt="Channel 5 News" 
                className="h-16 w-16"
              />
              <div>
                <h1 className="text-3xl font-serif">Channel 5 News</h1>
                <p className="text-sm italic">With Jefferton's Only Married News Team</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-serif">Wayne & Jan Skylar</p>
              <p className="text-sm italic">"Our love for news matches our love for each other"</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4">
        {/* Featured Stories */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif text-red-900 mb-6">Featured Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsStories.map((story, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <span className="text-xs font-medium text-red-600">{story.category}</span>
                  <h3 className="text-lg font-serif text-gray-900 mt-1 mb-2">{story.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{story.excerpt}</p>
                  <span className="text-xs text-gray-500 italic">Reported by {story.reporter}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Special Coverage */}
        <section>
          <h2 className="text-2xl font-serif text-red-900 mb-6">Special Coverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialReports.map((report, index) => (
              <div 
                key={index} 
                className="bg-red-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-red-100"
              >
                <img 
                  src={report.image} 
                  alt={report.title} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-serif text-red-900 mb-2">{report.title}</h3>
                  <span className="text-sm text-red-600 italic">Investigation by {report.reporter}</span>
                  <p className="text-gray-700 mb-3">{report.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Marriage Status Section */}
        <section className="mb-12 mt-12 bg-pink-50 rounded-lg p-6 border border-red-200">
          <h2 className="text-2xl font-serif text-red-900 mb-6 flex items-center">
            <span className="mr-2">💑</span>
            Marriage Status Update
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {marriageUpdates.map((update, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={update.image} alt={update.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-serif text-gray-900 mb-2">{update.title}</h3>
                  <p className="text-sm text-gray-600">{update.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dr. Steve's Corner */}
        <section className="mb-12 bg-purple-50 rounded-lg p-6 border border-purple-200">
          <h2 className="text-2xl font-serif text-purple-900 mb-6 flex items-center">
            <span className="mr-2">👨‍⚕️</span>
            Dr. Steve Brule's Corner
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {drSteveCorner.map((report, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={report.image} alt={report.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-serif text-gray-900 mb-2">{report.title}</h3>
                  <p className="text-sm text-gray-600">{report.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Jan's Marriage Tips */}
        <section className="mb-12 ml-64 w-[400px] bg-red-50 rounded-lg p-6 border border-red-200">
          <h2 className="text-2xl font-serif text-red-900 mb-6 flex items-center">
            <span className="mr-2">💝</span>
            Jan's Marriage Tips
          </h2>
          {marriageCorner.map((corner, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-serif text-gray-900 mb-4">{corner.title}</h3>
              <ul className="list-disc list-inside space-y-2">
                {corner.tips.map((tip, tipIndex) => (
                  <li key={tipIndex} className="text-gray-700">{tip}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Special Investigations */}
        <section>
          <h2 className="text-2xl font-serif text-red-900 mb-6 flex items-center">
            <span className="mr-2">🔍</span>
            Channel 5 Investigations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {investigations.map((story, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={story.image} alt={story.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <span className="text-xs font-medium text-red-600">{story.category}</span>
                  <span className="text-xs text-gray-500 italic">- Reported by {story.reporter}</span>
                  <h3 className="text-lg font-serif text-gray-900 mt-1 mb-2">{story.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{story.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-red-900 text-white mt-12">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <div className="flex justify-between items-center">
            <p className="text-sm">© 2008 Channel 5 News</p>
            <p className="text-sm italic">"Still married after all these years"</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Channel5News;