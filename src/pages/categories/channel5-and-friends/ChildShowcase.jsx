import React, { useRef, useState } from 'react';

const ChildShowcase = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const audioRef = useRef(null);

  const showcaseEntries = [
    {
      performer: "Joshua Beard",
      title: "Shape Drives Me To Bits",
      albumArt: "images/pages/categories/channel5andfriends/ChildShowcase/joshuabeard.png",
      duration: "0:34",
      description: "A heartfelt ballad about mothers",
      audioSrc: "/music/ChildShowcase/Shapes.mp3",
      age: "9¾",
      hometown: "Tulsa, OK",
      talent: "Singing, Keyboard, Wiggling Ears"
    },
    {
      performer: "Bobby Stoan",
      title: "Babies",
      albumArt: "images/pages/categories/channel5andfriends/ChildShowcase/bobbystoan.png",
      duration: "1:14",
      description: "An emotional query about life",
      audioSrc: "/music/ChildShowcase/Babies.mp3",
      age: "12",
      hometown: "Jefferton",
      talent: "Vocal Stylings, Dramatic Staring"
    }
  ];

  const hosts = [
    {
      name: "Jan Skylar",
      quote: "These children have more talent in their little finger than most adults have in their whole bodies! Wow!",
      image: "images/pages/categories/channel5andfriends/Channel5News/woodglue.PNG"
    },
    {
      name: "Wayne Skylar",
      quote: "I've been in the entertainment business for 45 years, and I've never seen anything like these kids. Great job!",
      image: "images/pages/categories/channel5andfriends/ChildShowcase/wayneskylar.png"
    }
  ];

  const upcomingTalents = [
    "Spagett Jr. ",
    "Tiny Casey Tatum",
    "Lil' Beaver Boys",
    "Kidz with Pep-Pep",
    "Zwei Dunkel Jungen, the Early Years"
  ];

  const handlePlaySong = (song) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    if (currentSong === song.title) {
      setCurrentSong(null);
      return;
    }

    audioRef.current = new Audio(song.audioSrc);
    audioRef.current.play()
      .catch(error => {
        console.log("Audio playback error:", error);
      });
    setCurrentSong(song.title);

    audioRef.current.addEventListener('ended', () => {
      setCurrentSong(null);
    });
  };

  // Components
  const Header = () => (
    <header className="py-4 px-4 relative">
      <div className="max-w-4xl mx-auto flex justify-center items-center">
        <div className="bg-yellow-400/90 p-4 rounded-full">
          <img 
            src="images/pages/categories/channel5andfriends/Channel5News/channel5logo.png"
            alt="Channel 5"
            className="w-16 h-16 object-contain"
          />
        </div>
        <div className="text-center ml-4 bg-purple-900/90 p-4 rounded-xl">
          <h1 className="text-5xl font-bold text-yellow-400 font-serif animate-pulse">CHILD SHOWCASE</h1>
          <p className="text-lg text-pink-400">Channel 5's Young Stars</p>
        </div>
      </div>
    </header>
  );

  const ShowcaseImage = () => (
    <div className="max-w-4xl mx-auto px-4 pb-4 w-full">
      <div className="relative w-full overflow-hidden rounded-xl border-4 border-yellow-400" style={{ height: '28vh' }}>
        <img 
          src="images/pages/categories/channel5andfriends/ChildShowcase/ChildShowcase.png"
          alt="Child Showcase"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 right-0 bg-pink-500 text-yellow-400 px-4 py-1 font-bold text-lg animate-bounce">
          NEW EPISODE!
        </div>
      </div>
    </div>
  );

  const HostMessage = () => (
    <div className="max-w-4xl mx-auto px-4 py-4">
      <div className="bg-purple-900 rounded-xl p-4 border-4 border-yellow-400" style = {{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 15l15 15H0V15zM15 0l15 15V0H15z' fill='%239967e8' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
    }}>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <img 
            src={hosts[0].image}
            alt={hosts[0].name}
            className="w-32 h-32 object-cover rounded-full border-4 border-pink-500"
          />
          <div className="text-center md:text-left">
            <h3 className="text-yellow-400 text-2xl font-bold">{hosts[0].name}</h3>
            <p className="text-white italic">"{hosts[0].quote}"</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
          <div className="text-center md:text-right">
            <h3 className="text-yellow-400 text-2xl font-bold">{hosts[1].name}</h3>
            <p className="text-white italic">"{hosts[1].quote}"</p>
          </div>
          <img 
            src={hosts[1].image}
            alt={hosts[1].name}
            className="w-32 h-32 object-cover rounded-full border-4 border-pink-500"
          />
        </div>
      </div>
    </div>
  );

  const PerformerCard = ({ entry }) => (
    <div 
      onClick={() => handlePlaySong(entry)}
      className={`bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-transform duration-200 shadow-lg border-4 
        ${currentSong === entry.title ? 'border-pink-500 shadow-pink-500/50' : 'border-yellow-400'}
        cursor-pointer`} >
      <div className="flex items-center space-x-4">
        <div className="relative w-24 h-24 flex-shrink-0">
          <img
            src={entry.albumArt}
            alt={entry.title}
            className="w-full h-full rounded-lg shadow-md border-2 border-purple-900 object-cover"
          />
          {currentSong === entry.title && (
            <div className="absolute inset-0 flex items-center justify-center bg-purple-900/30 rounded-lg">
              <span className="text-2xl animate-bounce">🎤</span>
            </div>
          )}
        </div>
        <div>
          <h3 className="text-yellow-400 text-xl font-bold mb-1">{entry.performer}</h3>
          <h4 className="text-pink-400 text-lg mb-1">"{entry.title}"</h4>
          <p className="text-white/80 text-xs">{entry.description}</p>
          <p className="text-yellow-400/80 text-xs mt-1">{entry.duration}</p>
          
          <div className="mt-2 pt-2 border-t border-white/20">
            <p className="text-white text-xs"><span className="text-pink-400">Age:</span> {entry.age}</p>
            <p className="text-white text-xs"><span className="text-pink-400">From:</span> {entry.hometown}</p>
            <p className="text-white text-xs"><span className="text-pink-400">Special Talents:</span> {entry.talent}</p>
          </div>
        </div>
      </div>
      {currentSong === entry.title && (
        <div className="mt-2 pt-2 border-t border-white/20">
          <div className="flex justify-center">
            <span className="inline-block px-3 py-1 bg-pink-500 text-yellow-400 rounded-full text-sm font-bold animate-pulse">NOW PLAYING</span>
          </div>
          <p className="text-center text-white text-xs mt-1">Click again to stop</p>
        </div>
      )}
    </div>
  );

  const ComingUpNext = () => (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-center text-yellow-400 mb-4 bg-purple-900/80 py-2 rounded-lg">COMING UP THIS MONTH</h2>
      <div className="bg-pink-500/20 backdrop-blur-sm p-4 rounded-xl border-4 border-dashed border-yellow-400">
        <ul className="grid grid-cols-5 gap-2">
          {upcomingTalents.map((talent, index) => (
            <li key={index} className="flex items-center">
              <span className="text-yellow-400 mr-2">★</span>
              <span className="text-white text-center">{talent}</span>
              <span className="text-yellow-400 mr-2">★</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const ViewerComments = () => (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-center text-yellow-400 mb-4 bg-purple-900/80 py-2 rounded-lg">VIEWER MAIL</h2>
      <div className="bg-purple-900/80 p-4 rounded-xl border-4 border-yellow-400">
        <div className="mb-4 pb-4 border-b border-white/20">
          <p className="text-pink-400 font-bold">From: Deborah T.</p>
          <p className="text-white">These children are amazing! My sons are worthless.</p>
        </div>
        <div className="mb-4 pb-4 border-b border-white/20">
          <p className="text-pink-400 font-bold">From: Pall Willeaux</p>
          <p className="text-white">I've been watching since episode 1. The talent just keeps getting better and better!</p>
        </div>
        <div>
          <p className="text-pink-400 font-bold">From: Dr. Steve Brule</p>
          <p className="text-white">For your health! These kids are hunks, who cares.</p>
        </div>
      </div>
    </div>
  );

  const Footer = () => (
    <footer className="bg-purple-900/90 backdrop-blur-sm mt-12 py-6" style = {{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='64' viewBox='0 0 48 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M48 28v-4L36 12 24 24 12 12 0 24v4l4 4-4 4v4l12 12 12-12 12 12 12-12v-4l-4-4 4-4zM8 32l-6-6 10-10 10 10-6 6 6 6-10 10L2 38l6-6zm12 0l4-4 4 4-4 4-4-4zm12 0l-6-6 10-10 10 10-6 6 6 6-10 10-10-10 6-6zM0 16L10 6 4 0h4l4 4 4-4h4l-6 6 10 10L34 6l-6-6h4l4 4 4-4h4l-6 6 10 10v4L36 8 24 20 12 8 0 20v-4zm0 32l10 10-6 6h4l4-4 4 4h4l-6-6 10-10 10 10-6 6h4l4-4 4 4h4l-6-6 10-10v-4L36 56 24 44 12 56 0 44v4z' fill='%239c81c7' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
    }}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-xl font-bold text-yellow-400 mb-2 underline">GIVE US YOUR CHILD</h3>
        <p className="text-pink-400 mb-4">Call 555-CHILD</p>
        <p className="text-yellow-400">Next Week: More Rising Stars!</p>
        <p className="text-pink-400 text-xs mt-1">Channel 5 - Where Young Talent Shines</p>
        <p className="text-white/50 text-xs mt-4">© CINCO™ Television Corporation. All Rights Reserved.</p>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-purple-700 flex flex-col" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='84' height='16' viewBox='0 0 84 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M78 7V4h-2v3h-3v2h3v3h2V9h3V7h-3zM30 7V4h-2v3h-3v2h3v3h2V9h3V7h-3zM10 0h2v16h-2V0zm6 0h4v16h-4V0zM2 0h4v16H2V0zm50 0h2v16h-2V0zM38 0h2v16h-2V0zm28 0h2v16h-2V0zm-8 0h6v16h-6V0zM42 0h6v16h-6V0z' fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
    }}>
      <Header />
      <ShowcaseImage />
      <HostMessage />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8 bg-purple-900/80 py-2 rounded-lg">THIS WEEK'S TALENTED CHILDREN</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {showcaseEntries.map((entry, index) => (
            <PerformerCard key={index} entry={entry} />
          ))}
        </div>
      </main>
      <ComingUpNext />
      <ViewerComments />
      <Footer />
      
      {/* Audio element */}
      <div className="hidden">
        <audio ref={audioRef} />
      </div>
    </div>
  );
};

export default ChildShowcase;