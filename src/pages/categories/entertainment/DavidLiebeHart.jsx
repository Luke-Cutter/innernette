import React, { useState } from 'react';
import { PersonStanding, Train, Music, Cross, Mail, Dog } from 'lucide-react';

const DavidLiebeHart = () => {
  const [activeSection, setActiveSection] = useState('home');
  
  const trainSongs = [
    "Trains of the Past and Present",
    "Burlington Northern Line",
    "Rock Island Line Blues",
    "Amtrak Makes Me Feel Good",
    "I Miss the Old Union Pacific",
    "Santa Fe Railway Dreams"
  ];

  const albums = [
    { title: "Christian Hymns and Songs of Praise", year: "2004", type: "Spiritual" },
    { title: "Public Access", year: "2008", type: "Collaboration" },
    { title: "Astronaut", year: "2015", type: "Space Experience" },
    { title: "Good Morning, Have A Good Day", year: "2023", type: "Tragic Club Era" }
  ];

  const alienMessages = [
    "Stay pure, avoid contamination",
    "The Korendians speak through radio waves",
    "Salad oil powers the future",
    "Train whistles are alien morse code",
    "Love all beings equally",
    "Doug the Dog knows the truth"
  ];

  return (
    <div className="h-screen bg-gradient-to-b from-purple-700 via-blue-600 to-green-500 p-4 overflow-hidden">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden border-4 border-yellow-400">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <PersonStanding
                key={i}
                className="absolute text-white"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  transform: `rotate(${Math.random() * 360}deg)`
                }}
              />
            ))}
          </div>
          <h1 className="text-4xl font-bold text-yellow-400 mb-2 relative z-10">
            DAVID LIEBE HART
          </h1>
          <p className="text-white text-xl">Puppeteer • Musician • Alien Contactee • Artist</p>
        </div>

        {/* Navigation */}
        <nav className="bg-yellow-400 p-2 flex justify-center gap-2 flex-wrap">
          {[
            { id: 'home', icon: Dog, label: 'Home' },
            { id: 'aliens', icon: PersonStanding, label: 'Alien Teachings' },
            { id: 'trains', icon: Train, label: 'Train Knowledge' },
            { id: 'music', icon: Music, label: 'Songs' },
            { id: 'religion', icon: Cross, label: 'Christian Science' },
            { id: 'contact', icon: Mail, label: 'Contact' }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded ${
                activeSection === item.id 
                  ? 'bg-purple-600 text-white'
                  : 'bg-white hover:bg-purple-100'
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </nav>

        {/* Main Content */}
        <div className="p-6">
          {activeSection === 'home' && (
            <div className="space-y-6">
              <div className="flex justify-center">
                <img
                  src="/api/placeholder/300/400"
                  alt="David Liebe Hart"
                  className="rounded-lg border-4 border-yellow-400"
                />
              </div>
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-2xl font-bold text-purple-600 mb-4">Welcome to My World!</h2>
                <p className="text-lg">
                  I am David Liebe Hart, and I have been contacted by aliens from the Korendian race.
                  Through my puppets, music, and art, I spread their message of peace and understanding.
                  I also love trains and Christian Science!
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h3 className="text-xl font-bold text-purple-600 mb-2">Latest News</h3>
                  <ul className="space-y-2">
                    <li>• New Album with Tragic Club Out Now!</li>
                    <li>• Puppet Show at the Hollywood Bowl This Weekend</li>
                    <li>• Special Message from the Korendians: Stay Pure</li>
                    <li>• Doug the Dog Says Hello to All True Believers</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">Live Performances</h3>
                  <ul className="space-y-2">
                    <li>• Santa Monica Promenade - Every Saturday</li>
                    <li>• Christian Science Church - Sundays</li>
                    <li>• Hollywood Bowl - After Major Events</li>
                    <li>• LA Music Center - Special Appearances</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'aliens' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-center text-purple-600">Alien Teachings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="text-xl font-bold text-green-600 mb-2">The Korendian Message</h3>
                  <p className="mb-4">The aliens taught me that smoking and drinking are bad. They want humans to stay pure and avoid contamination. Their spaceships run on salad oil!</p>
                  <div className="text-sm bg-white p-3 rounded border border-green-300">
                    <strong>Warning:</strong> The Korendians say rap music blocks their transmissions
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">My Encounters</h3>
                  <p>I first met the aliens in 1987. They took me aboard their ship and showed me the truth about the universe. They continue to communicate with me through special frequencies.</p>
                </div>
                <div className="md:col-span-2 bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h3 className="text-xl font-bold text-purple-600 mb-4">Messages from Beyond</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {alienMessages.map((message, index) => (
                      <div key={index} className="bg-white p-3 rounded border border-purple-300 text-center">
                        <PersonStanding className="w-6 h-6 mx-auto mb-2 text-purple-500" />
                        <p className="text-sm font-semibold">{message}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'trains' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-center text-purple-600">Railroad Encyclopedia</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h3 className="text-xl font-bold text-yellow-600 mb-2">Train Songs</h3>
                  <ul className="space-y-2">
                    {trainSongs.map((song, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Train className="w-4 h-4 text-yellow-600" />
                        {song}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <h3 className="text-xl font-bold text-orange-600 mb-2">Railroad Memories</h3>
                  <p className="mb-4">Growing up in Park Forest, Illinois, I would watch the trains go by for hours. The conductors would wave, and the whistles would sing songs of distant places.</p>
                  <div className="text-sm bg-white p-3 rounded border border-orange-300">
                    <strong>Fun Fact:</strong> The Korendians taught me that trains are Earth's spiritual railways
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'music' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-center text-purple-600">Musical Journey</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h3 className="text-xl font-bold text-purple-600 mb-2">Albums</h3>
                  <div className="space-y-4">
                    {albums.map((album, index) => (
                      <div key={index} className="bg-white p-3 rounded border border-purple-300">
                        <div className="font-bold">{album.title}</div>
                        <div className="text-sm text-purple-600">{album.year} - {album.type}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">Popular Songs</h3>
                  <ul className="space-y-2">
                    <li>• Salame (As heard on Tim and Eric)</li>
                    <li>• La Rent Doesn't Want Me To Look At You</li>
                    <li>• Save The Train Stations</li>
                    <li>• I Am Not A Piano</li>
                    <li>• Korendian Love Ballad</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'religion' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-center text-purple-600">Christian Science Teachings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">Daily Devotionals</h3>
                  <p>Every morning I read from Science and Health with Key to the Scriptures. The truth about healing comes from understanding God's infinite love.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="text-xl font-bold text-green-600 mb-2">The Junior Christian Science Bible Lesson Program</h3>
                  <p>My public access show teaches children about Christian Science through puppetry and songs. Doug the Dog helps explain these important messages!</p>
                </div>
                <div className="md:col-span-2 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h3 className="text-xl font-bold text-yellow-600 mb-2">Puppet Ministry</h3>
                  <p>Through Doug the Dog and friends, we teach children about God's love and the Korendian's message of universal peace. The aliens approve of Christian Science!</p>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'contact' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-center text-purple-600">Contact David</h2>
              <div className="max-w-2xl mx-auto bg-blue-50 p-6 rounded-lg border border-blue-200">
                <div className="space-y-4">
                  <div className="text-center mb-6">
                    <p className="text-lg">Find me performing with Doug the Dog at:</p>
                    <p className="font-bold text-blue-600">The Hollywood Bowl • LA Music Center • Santa Monica Promenade</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-blue-600 mb-2">Booking</h3>
                      <p>For puppet shows, alien lectures, and train songs contact my manager at Absolutely Productions</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-600 mb-2">Fan Mail</h3>
                      <p>Send letters and drawings to:</p>
                      <p className="font-mono mt-2">
                        David Liebe Hart<br />
                        c/o Adult Swim<br />
                        Hollywood, CA
                      </p>
                    </div>
                  </div>
                  <div className="text-center mt-6 text-sm text-red-500">
                    *No salad oil shipments please - the Korendians provide their own
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="bg-purple-600 text-white text-center p-4 text-sm">
          <p>© {new Date().getFullYear()} David Liebe Hart • Protected by Korendian Technology</p>
          <p className="text-yellow-400 mt-2">Stay Pure • Love Trains • Trust Aliens</p>
        </footer>
      </div>
    </div>
  );
};

export default DavidLiebeHart;