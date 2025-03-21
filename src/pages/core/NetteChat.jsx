// src/pages/NetteChat.jsx
import React, { useState, useRef, useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';

const PARTY_SNOOZER_VOICES = {
  'Okay': '/voicelines/NetteChat/okay.mp3',
  'I understand': '/voicelines/NetteChat/iunderstand.mp3',
  'Sure, Why not?': '/voicelines/NetteChat/surewhynot.mp3',
  'Thanks for coming': '/voicelines/NetteChat/thanksforcoming.mp3',
  'Sounds good': '/voicelines/NetteChat/soundsgood.mp3'
};

const CHAT_PERSONALITIES = {
  PROF_HINSLEY: {
    name: 'Prof. Hinsley',
    image: '/images/pages/categories/core/NetteChat/profhinsley.png',
    responses: ['FINE'],
    title: 'Professor of Online Studies',
    welcome: "Welcome. I am FINE with starting this chat."
  },
  PIERRE: {
    name: 'Pierre',
    image: '/images/pages/categories/core/NetteChat/pierre.png',
    responses: [
      'I wanna know your dad', 
      'Where\'s your dad kids?',
      'Don\'t eat that meat',
      'I wanna meet that dad!',
      'HELP ME, HOAGIE MAN!',
      'Turning me on now!',
      'Get sexy, kids!',
      'Mmm I smell pork chops! Does your dad cook?',
      'Can\'t stop thinking about your dad!',
      'You are going to give me your dad\'s email address.',
      'I can\'t wait to meet your pap-pap',
      'Honey, you were my pupsy-pups. And i\'m going to miss you running around the old colonial Dutch house playing playing barbecue meat games with your old pep-pep. And I\'m not always going to be around to help you connect with the internet via Wi-Fi. You got a new man for that now, he\'s not a cute man- but he is an okay man. I mean you picked him!',
      'Chrimbus is not all about fun and games, you gotta make sure you stay warm. You don\'t want to get frostbite!',
      'I think I\'ll take a walk through this forest',
      'I didn\'t pack my [CENSORED] gloves kids!',
      'Two things I know for sure right now: Theres no squirrels in sight and I am definitely gonna get frostbite.',
      'Kids I feel that bite going all through my blood!',
      'Damn I wish there were some squirrels out here to keep me company',
      'Oh no my ding-dongs froze!',
      'This is the worst pain I\'ve ever experienced children!',
      'Slap those hands, spread those wings, Doo Da Doo Doo!',
      'Feather your bangs, shake your buns, Doo Da Doo Doo!',
      'Think about your dad?',
      'What\'s your dad like',
      'Stinks in here!',
      'Smells like meat! Rotten meat!',
      'Kids why would you bring that meat in here of all places?'
    ],
    title: 'Doo Da Doo Doo!',
    welcome: "Welcome children!"
  },
  JAMES_QUALL: {
    name: 'James Quall',
    image: '/images/pages/categories/core/NetteChat/quall.png',
    responses: [
      'Spaghetti and meatballs!', 
      'Beach blasssst dhr dhr dhr dhr dhr dhr dhr di-di-di-di-di dhr dhr dhr dhr',
      'This is Jack Nicholllsoonnn, spaghetti with meatbaaalllss!',
      'If I had to wait any longer, I\'d probably be dissected by medical students by now.',
      'Well um, Boston Baked beans, a lot of them can be found frozen before anyone even puts them in the freezer!',
      'When it\'s on the road, no car is faster If you drive it in races, you could be the grandmaster It has tires that defy all friction And it looks like something from science fiction It\'s the, carrrrrrrr offff theee futurrrrrre!',
      'I\'m Quall.',
      'Well... spaghetti and meatballs.',
      'Heello ladies and gentlemen this is Beeel Cosby. Kids say the darndest things like spaghetti and meatballs!',
      'Hello this is Sammy Davis Jr. and uh thank you!',
      'Well I suppose we should head over.',
      'What do you expect to do with a cheap looking knife like that? It looks though it could fall apart at any time! That was Bob Hope.',
      'This is the season of receivng, I hope I dont receive coal in my underwear this year!',
      'One of the things you can get from time to time is pizza which will help keep the pizza places in business!',
      'Oh hello! I\'m James Quall, your new roomate at Sailing Quallege!'
    ],
    title: 'Master comedian/ impersonator',
    welcome: "James Quall, at your service Quall hours of the day!"
  },
  DR_BRULE: {
    name: 'Dr. Steve Brule',
    image: '/images/pages/categories/core/NetteChat/brule.png',
    responses: [
      'For Your Health',
      'Okay Ya Turkey', 
      'Sweet Berry Wine!',
      'Life\'s about having fun and eating candy, not about getting roaches in your hair',
      'What kind of animal do you want to be, dingus?',
      'Tastes like a cow bathroom.',
      'What the heck you gonna do if you\'re on a picnic and have an ice cream and the ants crawl on the ice cream, what are you gonna do? You\'re gonna eat the ants because it\'s made out of protein.',
      'If you\'re raking the leaves and it gets all over your driveway, just hose it off dummy.',
      'You have smelly body parts? Smelly under your arms? In the armpits? Just... just put some vinegar on it! Why didn\'t you think of that?',
      'Ever wonder why ice cubes taste so boring? It\'s because you\'re make \'em out of stupid water, you bimbo. Put some fruit juice in there, and freeze it into ice cubes, and put that in your milk!',
      'Prom time\'s coming up, and if you\'re a senior in high school you\'re thinking: "What the heck am I gonna do for a date?" Take your sister, dum-dum. She\'s a girl.',
      '1 of paper is 4 of coin.',
      'Casino hunks will break your bones if you talk with a sass mouth!',
      'What is grambling? Who invented grambling? Probably some hunk who said you wanna bet?',
      'Turn that thing off I\'m dryyy',
      'The best way to get your booodyy ready to go on a broat is to eat a lot of seafood',
      'That\'s some spicy guacamole! '
    ],
    title: 'For Your Health Expert',
    welcome: "Hey ya dingus! Welcome to my chat ya turkey!"
  },
  PARTY_SNOOZER: {
    name: 'Party Snoozer',
    image: '/images/pages/categories/core/NetteChat/snoozer.png',
    responses: [
      'Okay',
      'I understand',
      'Sure, Why not?',
      'Thanks for coming',
      'Sounds good'
    ],
    title: 'Professionally voiced by Romm Oah Denmirk',
    welcome: "Thanks for coming"
  }
};

const ClearChatDialog = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl border-2 border-blue-400 max-w-md">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-yellow-500" />
          Switch Chat Partner?
        </h3>
        <p className="mb-6 text-gray-600">
          Switching chat partners will clear your current chat history. Are you sure you want to continue?
        </p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Switch Partner
          </button>
        </div>
      </div>
    </div>
  );
};

const AudioPlayer = ({ src, timestamp }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (src && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(error => {
        console.error('Audio playback failed:', error);
      });
    }
  }, [src, timestamp]);

  return <audio ref={audioRef} src={src} />;
};

const NetteChat = () => {
  const [selectedPersonality, setSelectedPersonality] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [showClearDialog, setShowClearDialog] = useState(false);
  const [pendingPersonality, setPendingPersonality] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [audioState, setAudioState] = useState({
    src: null,
    timestamp: null
  });
  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const handlePersonalitySelect = (key) => {
    if (messages.length > 0) {
      setShowClearDialog(true);
      setPendingPersonality(key);
    } else {
      switchPersonality(key);
    }
  };

  const switchPersonality = async (key) => {
    setIsTransitioning(true);
    setShowClearDialog(false);
    setMessages([]);
    setInputMessage('');
    
    await new Promise(resolve => setTimeout(resolve, 300));
    
    setSelectedPersonality(key);
    const welcomeTimestamp = new Date();
    
    setMessages([
      {
        text: CHAT_PERSONALITIES[key].welcome,
        sender: 'system',
        timestamp: welcomeTimestamp
      }
    ]);

    if (key === 'PARTY_SNOOZER') {
      setAudioState({
        src: PARTY_SNOOZER_VOICES[CHAT_PERSONALITIES[key].welcome],
        timestamp: welcomeTimestamp.getTime()
      });
    }

    setIsTransitioning(false);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || !selectedPersonality) return;

    const newMessages = [
      ...messages,
      { text: inputMessage, sender: 'user', timestamp: new Date() }
    ];

    const personality = CHAT_PERSONALITIES[selectedPersonality];
    const response = personality.responses[
      Math.floor(Math.random() * personality.responses.length)
    ];

    setTimeout(() => {
      const messageTimestamp = new Date();
      setMessages([
        ...newMessages,
        {
          text: response,
          sender: 'personality',
          timestamp: messageTimestamp,
          personality: selectedPersonality
        }
      ]);

      if (selectedPersonality === 'PARTY_SNOOZER' && PARTY_SNOOZER_VOICES[response]) {
        setAudioState({
          src: PARTY_SNOOZER_VOICES[response],
          timestamp: messageTimestamp.getTime()
        });
      }
    }, 500);

    setMessages(newMessages);
    setInputMessage('');
  };

  return (
    <div className="bg-gradient-to-b from-blue-700 via-teal-600 to-blue-800 p-4">
      <AudioPlayer 
        src={audioState.src} 
        timestamp={audioState.timestamp}
      />
      <div className="h-[600px] w-[780px] mx-auto bg-blue-100 rounded shadow-xl flex flex-col">
        <div className="h-8 bg-gradient-to-r from-blue-400 to-blue-500 flex items-center px-2 rounded-t">
          <span className="text-white font-bold">CINCO NetteChat™ 2.5 (Formerly Inner-chat)</span>
        </div>

        <div className="flex flex-grow bg-gradient-to-b from-blue-700 via-teal-600 to-blue-800 overflow-hidden">
          <div className="w-[600px] flex flex-col bg-white border-r border-gray-200">
            <div 
              className={`flex-grow p-4 overflow-y-auto transition-opacity duration-300 ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`} 
              ref={chatRef}
            >
              {messages.map((message, index) => {
                if (message.sender === 'system') {
                  return (
                    <div key={index} className="text-center my-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {message.text}
                      </span>
                    </div>
                  );
                }
                return (
                  <div
                    key={index}
                    className="flex items-start gap-2 mb-4"
                  >
                    <img
                      src={message.sender === 'user' 
                        ? '/images/pages/categories/core/NetteChat/timanderic.PNG'
                        : CHAT_PERSONALITIES[message.personality].image}
                      alt="avatar"
                      className="w-10 h-10 rounded"
                    />
                    <div>
                      <div className="text-sm text-gray-500">
                        {message.sender === 'user' ? 'You' : CHAT_PERSONALITIES[message.personality].name}
                      </div>
                      <div className="text-sm">{message.text}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  disabled={!selectedPersonality || isTransitioning}
                  placeholder={selectedPersonality ? "Type a message..." : "Select a personality first"}
                  className="flex-grow p-2 border border-gray-300 rounded"
                />
                <button
                  type="submit"
                  disabled={!selectedPersonality || isTransitioning}
                  className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 hover:bg-blue-600 transition-colors"
                >
                  SEND
                </button>
              </div>
            </form>
          </div>

          <div className="w-64 bg-blue-50 p-4">
            <h2 className="text-lg font-bold mb-4">Select Personality:</h2>
            <div className="space-y-4">
              {Object.entries(CHAT_PERSONALITIES).map(([key, personality]) => (
                <button
                  key={key}
                  onClick={() => handlePersonalitySelect(key)}
                  className={`w-full p-4 rounded border-2 transition-all transform hover:scale-102 ${
                    selectedPersonality === key
                      ? 'border-blue-500 bg-blue-100'
                      : 'border-gray-300 bg-white hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={personality.image}
                      alt={personality.name}
                      className="w-12 h-12 rounded"
                    />
                    <div className="text-left">
                      <div className="font-bold">{personality.name}</div>
                      <div className="text-xs text-gray-500">{personality.title}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="h-6 bg-gray-100 border-t border-gray-300 flex items-center px-2 text-xs text-gray-500">
          To Report NetteChat™ Abuse, Contact CINCO™
        </div>
      </div>
      <div className="w-[780px] mx-auto mt-8 bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-red-600 to-red-700 p-4">
          <h2 className="text-3xl font-bold text-yellow-300 text-center font-serif tracking-wider">
            CINCO™ NetteChat™ Instructions Manual
          </h2>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="border-2 border-red-500 p-4 rounded-lg bg-yellow-50">
            <h3 className="text-2xl font-bold text-red-600 mb-2">WARNING FROM CINCO™:</h3>
            <p className="text-red-800">NetteChat™ may cause: sweaty palms, keyboard fingers, chat addiction, typing mouth, and in rare cases, total chat body. If you experience any of these symptoms, please contact your local CINCO™ representative immediately.</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="border-2 border-blue-400 p-4 rounded-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-2">CHAT PERSONALITIES:</h4>
              <ul className="list-disc pl-4 space-y-2">
                <li><span className="font-bold">Dr. Steve Brule:</span> For your health expert, ya dingus!</li>
                <li><span className="font-bold">Pierre:</span> Do Da Doo Doo!</li>
                <li><span className="font-bold">James Quall:</span> Spaghetti and meatballs specialist</li>
                <li><span className="font-bold">Prof. Hinsley:</span> He is FINE</li>
                <li><span className="font-bold">Party Snoozer:</span> Professionally voiced responses</li>
              </ul>
            </div>

            <div className="border-2 border-green-400 p-4 rounded-lg">
              <h4 className="text-xl font-bold text-green-700 mb-2">HOW TO USE:</h4>
              <ol className="list-decimal pl-4 space-y-2">
                <li>Select your chat personality</li>
                <li>Type your message in the text box</li>
                <li>Press SEND or hit Enter</li>
                <li>Wait for your chat partner's response</li>
                <li>Pretend you are talking to your new step Pep-Pep</li>
                <li>Great job!</li>
              </ol>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-100 rounded-lg text-center text-sm text-gray-600">
            NetteChat™ is powered by CINCO™ Web-less Technology. Patent pending. Do not use NetteChat™ if you have a history of chat-related injuries. NetteChat™ is not available on every street. Void where prohibited.
          </div>
        </div>
      </div>
      <ClearChatDialog
        isOpen={showClearDialog}
        onClose={() => {
          setShowClearDialog(false);
          setPendingPersonality(null);
        }}
        onConfirm={() => switchPersonality(pendingPersonality)}
      />
    </div>
  );
};

export default NetteChat;    