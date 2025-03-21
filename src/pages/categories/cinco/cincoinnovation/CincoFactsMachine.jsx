import React, { useState } from 'react';
import { Printer, Phone, X, Star, ArrowRight } from 'lucide-react';
import BlinkingText from '../../../../components/shared/BlinkingText';
import SpinningImage from '../../../../components/shared/SpinningImage';
import BusinessCard from '../../../../components/shared/BusinessCard';

const FACTS = [
    "Nearly all boys grow at least as tall as their mothers.", "The captain of the ship is in charge of the ship.",
    "The name Greg is often used to name male babies.", "The first trumpet player was Mark Lewice.",
    "Most cars have four wheels.", "Dogs can't look up.", "Water is wet most of the time.",
    "Computers use electricity to work.", "The letter A comes before the letter B.",
    "Most birds have two wings.", "Trees are usually taller than grass.", "Phones can make phone calls sometimes.",
    "The sun rises in some direction.", "A business card contains information.", "Some cars are red and others aren't.",
    "Cats meow when they want something.", "Cheese is made from milk most of the time.", "Lamps are used to make rooms brighter.",
    "Mountains are higher than valleys.", "Apples can be red, green, or yellow.", "Most people blink multiple times a minute.",
    "Airplanes fly in the sky.", "Shoes are worn on feet.", "Some clocks are round and others are not.",
    "Rain falls from clouds in the sky.", "Trains run on tracks most of the time.", "Books are made up of pages.",
    "Snow is usually cold and white.", "The ocean contains a lot of water.", "Some chairs have four legs, while others don't.",
    "Grass is usually green.", "Most fish live in water.", "Fire is hot when touched.", "The moon can sometimes be seen at night.",
    "People breathe in oxygen to live.", "Ice is frozen water.", "Bread is made from flour.", "Windows let light into a room.",
    "Keys are used to unlock locks.", "Bicycles have two wheels most of the time.", "The Earth is round like a ball.",
    "The alphabet has many letters.", "Helicopters can hover in the air.", "Clouds float in the sky.", "Pencils are used for writing.",
    "Tables are often used for eating or working.", "Bees make honey.", "The color blue is often associated with the sky.",
    "The stars shine at night.", "Frogs can jump long distances.", "Wheels help things roll.", "Rivers flow from higher to lower ground.",
    "Sand is found on most beaches.", "Candles provide light when lit.", "Soccer balls are round.", "Chocolate is sweet and often brown.",
    "Most doors can open and close.", "People wear coats when it's cold.", "Boats float on water.", "The number 10 is bigger than the number 5.",
    "The sky can look blue during the day.", "Plates are used to hold food.", "Hats are worn on heads.", "Butter is made from cream.",
    "Mirrors reflect images.", "Music is made from sounds.", "Most animals need food to live.", "Rainbows have many colors.",
    "The clock shows the time.", "Electric fans help cool rooms.", "Televisions show pictures and videos.",
    "Hot air balloons rise in the air.","The Earth has a lot of water and land.", "Carpets are often used to cover floors.", "Cows give milk.",
    "The sun is very hot.", "Most bridges are used to cross rivers.", "Houses provide shelter.", "Electric lights turn on with a switch.",
    "People clap their hands to show approval.", "Kites can fly when it’s windy.", "Most people have two eyes.", "Tomatoes are often red and juicy.",
    "Cameras take pictures.", "Shoelaces help keep shoes on.", "Horses can run fast.", "The Earth orbits the sun.", "Ears are used for hearing.",
    "Bananas are yellow when ripe.", "Scissors are used to cut things.", "Most cups can hold liquids.", "A stove is used for cooking.",
    "Rocks are hard and solid.", "Fruits grow on trees or plants.", "Bells make a ringing sound.", "A spoon is used to eat soup.",
    "Most bikes have pedals.", "Cars have steering wheels.", "The color green is often linked to nature.", "Airplanes have wings to help them fly.",
    "Most jackets have zippers or buttons.", "Shoes protect feet from the ground.", "Most pencils have erasers.", "The wind moves the air around."
  ];

const FunFact = ({ children }) => (
  <div className="bg-white/80 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-blue-400">
    {children}
  </div>
);

const FactsMachine = () => {
  const [currentFact, setCurrentFact] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [machineState, setMachineState] = useState('idle');
  const [funFactsVisible, setFunFactsVisible] = useState(false);
  const [selectedCard] = useState(null);

  const processFact = () => {
    setIsProcessing(true);
    setMachineState('processing');
    
    setTimeout(() => {
      setMachineState('printing');
      setTimeout(() => {
        setCurrentFact(FACTS[Math.floor(Math.random() * FACTS.length)]);
        setMachineState('complete');
        setIsProcessing(false);
      }, 2000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-yellow-200 to-yellow-300 p-8 relative overflow-hidden">
      {/* Spinning Flags */}
      <div className="absolute top-5 left-5 hover:scale-110 transition-transform">
        <SpinningImage src="/images/pages/categories/cinco/CincoFactsMachine/india.gif" alt="flag" size="sm" />
      </div>
      <div className="absolute top-5 right-5 hover:scale-110 transition-transform">
        <SpinningImage src="/images/pages/categories/cinco/CincoFactsMachine/us.gif" alt="flag" size="sm" />
      </div>
      <div className="absolute top-[25%] left-5 hover:scale-110 transition-transform">
        <SpinningImage src="/images/pages/categories/cinco/CincoFactsMachine/abkhazie.gif" alt="flag" size="sm" />
      </div>
      <div className="absolute top-[25%] right-5 hover:scale-110 transition-transform">
        <SpinningImage src="/images/pages/categories/cinco/CincoFactsMachine/pirate.gif" alt="flag" size="sm" />
      </div>
      <div className="absolute top-[50%] left-5 hover:scale-110 transition-transform">
        <SpinningImage src="/images/pages/categories/cinco/CincoFactsMachine/panama.gif" alt="flag" size="sm" />
      </div>
      <div className="absolute top-[50%] right-5 hover:scale-110 transition-transform">
        <SpinningImage src="/images/pages/categories/cinco/CincoFactsMachine/spain.gif" alt="flag" size="sm" />
      </div>
      <div className="absolute top-[75%] left-5 hover:scale-110 transition-transform">
        <SpinningImage src="/images/pages/categories/cinco/CincoFactsMachine/brazil.gif" alt="flag" size="sm" />
      </div>
      <div className="absolute top-[75%] right-5 hover:scale-110 transition-transform">
        <SpinningImage src="/images/pages/categories/cinco/CincoFactsMachine/greece.gif" alt="flag" size="sm" />
      </div>
      <div className="absolute bottom-5 left-5 hover:scale-110 transition-transform">
        <SpinningImage src="/images/pages/categories/cinco/CincoFactsMachine/philippines.gif" alt="flag" size="sm" />
      </div>
      <div className="absolute bottom-5 right-5 hover:scale-110 transition-transform">
        <SpinningImage src="/images/pages/categories/cinco/CincoFactsMachine/netherlands.gif" alt="flag" size="sm" />
      </div>

      {/* Header */}
      <div className="text-center mb-12 relative">
        <div className="absolute inset-0 bg-blue-500/10 rounded-xl backdrop-blur-sm -z-10"></div>
        <h1 className="text-5xl font-bold mb-6 text-blue-800 animate-pulse p-4">
          CINCO™ FACTS MACHINE
        </h1>

        <div className="text-3xl text-red-600 font-bold mb-4 hover:scale-105 transition-transform">
          "Makin' it E-Z"
        </div>
        
        <div className="text-3xl text-green-600 font-bold hover:scale-105 transition-transform">
          "It couldn't possibly beasier"
        </div>
        
        <div className="mt-6 flex items-center justify-center text-2xl text-blue-600">
          <BlinkingText speed={500}>
            <div className="hover:scale-110 transition-transform cursor-pointer">
              <Phone className="inline mr-2" />
              1-800-555-0199
            </div>
          </BlinkingText>
        </div>
      </div>

      {/* Facts Machine Interface */}
      <div className="max-w-2xl mx-auto bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-lg shadow-xl border-4 border-gray-400 hover:shadow-2xl transition-all duration-300">
        <div className="bg-black text-green-400 p-4 font-mono mb-4 min-h-[100px] relative rounded-lg">
          {machineState === 'processing' && (
            <BlinkingText speed={300}>
              <div className="flex items-center">
                <Star className="animate-spin mr-2" />
                PROCESSING YOUR FACT...
              </div>
            </BlinkingText>
          )}
          {machineState === 'printing' && (
            <BlinkingText speed={200}>
              <div className="flex items-center">
                <Printer className="animate-bounce mr-2" />
                PRINTING FACT...
              </div>
            </BlinkingText>
          )}
          {machineState === 'complete' && (
            <div className="animate-fadeIn">
              <div className="text-xl font-bold underline mb-2">FACT</div>
              {currentFact}
            </div>
          )}
          <Printer 
            className={`absolute right-4 top-4 ${
              machineState === 'printing' ? 'animate-bounce' : ''
            }`}
          />
        </div>

        <button
          onClick={processFact}
          disabled={isProcessing}
          className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white p-4 text-xl font-bold
                   hover:from-red-600 hover:to-red-700 disabled:from-gray-400 disabled:to-gray-500
                   transition-all duration-300 rounded-lg transform hover:scale-105 active:scale-95"
        >
          <BlinkingText speed={300}>GET A FACT NOW!</BlinkingText>
        </button>
      </div>

      {/* Testimonial Section */}
      <div className="mt-12 flex flex-col items-center">
        <div className="mb-8 text-center relative group">
          <div className="hover:scale-110 flex justify-center">
          <img 
              src="images/pages/categories/cinco/CincoFactsMachine/FactMan1.png"
              alt="Man using Facts Machine"
              className="w-48 h-48 mr-6 object-cover border-green-400 border-[6px] rounded-lg"
            />
            <img 
              src="images/pages/categories/cinco/CincoFactsMachine/FactMan2.png"
              alt="Man using Facts Machine"
              className="w-48 h-48 mr-6 object-cover border-yellow-400 border-[6px] rounded-lg"
            />
            <img 
              src="images/pages/categories/cinco/CincoFactsMachine/FactMan3.png"
              alt="Man using Facts Machine"
              className="w-48 h-48 object-cover border-red-400 border-[6px] rounded-lg"
            />
          </div>
          <div className="mt-4 font-bold bg-white/80 p-2 rounded-lg">
            <BlinkingText>This Man Uses Our Facts Machine to Get Facts!</BlinkingText>
          </div>
        </div>

        {/* Interactive Benefits Section */}
        <div className="mb-8 text-center w-full max-w-4xl">
          <button 
            onClick={() => setFunFactsVisible(!funFactsVisible)}
            className="text-2xl font-bold mb-4 bg-blue-500 text-white px-6 py-2 rounded-full
                     hover:bg-blue-600 transition-colors flex items-center justify-center mx-auto"
          >
            <Star className={`mr-2 transition-transform duration-300 ${funFactsVisible ? 'rotate-180' : ''}`} />
            LEARN THESE INTERESTING FACTS
            <ArrowRight className={`ml-2 transition-transform duration-300 ${funFactsVisible ? 'rotate-90' : ''}`} />
          </button>

          {funFactsVisible && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 animate-fadeIn">
              <FunFact>• The captain of the ship is in charge of the ship FACT!</FunFact>
              <FunFact>• The name Greg is often used to name male babies. FACT!</FunFact>
              <FunFact>• Some cars are red. FACT!</FunFact>
              <FunFact>• The first trumpet player was Mark Lewice</FunFact>
            </div>
          )}
        </div>

        {/* Interactive Business Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {['brule', 'hur'].map((doctor) => (
            <div 
              key={doctor}
              className="transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <BusinessCard
                name={doctor === 'brule' ? "Dr. Steve Brule" : "Mr. Ben Hur"}
                title={doctor === 'brule' ? "CINCO™ Facts Machine User" : "Head of CINCO™ Facts Division"}
                phone="1-800-555-0199"
                email={doctor === 'brule' ? "Brule@CheckItOut.com" : "benhur@cinco.com"}
                className={`transform ${doctor === selectedCard ? 'scale-105 ring-4 ring-blue-400' : ''} 
                         ${doctor === 'brule' ? 'rotate-3' : '-rotate-2'}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Fax Section */}
      <div className="mt-12 text-center text-3xl font-bold bg-white/50 p-6 rounded-xl inline-block mx-auto flex justify-center">
        <div className="relative inline-block transform hover:scale-105 transition-transform">
          Forget the 
          <span className="mx-2 relative">
            <span className="text-black">FAX</span>
            <X 
              className="absolute inset-0 text-red-600 w-full h-full ml-4 animate-pulse" 
              strokeWidth={4}  // Made stroke thicker
              size={48}      // Made X larger
              style={{
                marginTop: '1px',
                marginLeft: '18px'        // Adjusted position
              }}
            />
          </span>
          ! We got Facts!
        </div>
      </div>

      <footer className="mt-8 text-center">
        <BlinkingText speed={1500}>
          <div className="text-sm bg-blue-800 text-white px-4 py-2 rounded-full inline-block">
            The CINCO™ Facts Machine from CINCO™ Home Office "Makin' it E-Z"
          </div>
        </BlinkingText>
      </footer>
    </div>
  );
};

export default FactsMachine;