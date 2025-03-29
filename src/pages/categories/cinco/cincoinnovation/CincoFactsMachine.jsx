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


  const svgBackground = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='a' width='88' height='86' patternTransform='rotate(20)scale(2)' patternUnits='userSpaceOnUse'%3E%3Crect width='100%25' height='100%25' fill='%232b2b31'/%3E%3Cpath fill='%23ffec3d' d='M13.056 82.423c3.26-4.928 6.238-9.428 9.392-14.192l9.18 14.064 9.99-13.524c2.636 4.272 5.266 8.534 8.198 13.282 2.256-3.946 4.354-7.478 6.3-11.094.708-1.314 1.394-2.108 3.206-1.228-3.172 4.54-6.326 9.058-9.722 13.922-2.648-3.666-5.226-7.238-7.866-10.896-4.518 2.908-6.776 7.494-9.918 11.584l-8.772-12.45-10.172 12.066-9.154-14.312c1.298-.504 2.492-.444 3.42 1.484 1.758 3.658 3.756 7.204 5.918 11.294M63.924 55.97l21.936 3.022.092 1.084q-8.158.942-16.318 1.882c-.266.03-.536.04-.804.056-5.626.332-5.626.332-4.906-6.044m22.728-26.95c-.626.422-1.23 1.166-1.884 1.218-6.422.52-12.85.998-19.286 1.264-.796.034-1.644-1.232-2.466-1.896.62-.72 1.228-2.054 1.862-2.068 7.182-.148 14.37-.094 21.556-.094q.106.788.218 1.576M37.8 27.563c-.098 1.838-.188 3.558-.292 5.544h-5.506c.19-6.38.56-6.756 5.798-5.544M16.808 39.811l-.11-11.382-4.788 4.824zm-.316 12.252-3.608 2.392 3.392 2.446-5.124 4.06 5.908 4.952-.25-26.022-3.242 1.832 2.992 3.874-3.784 2.152z'/%3E%3Cpath fill='%23d3b5a6' d='M71.25 1.699H60.164c-.042.444-.09.708-.09.972-.018 4.324-.016 8.648-.05 12.972a246 246 0 0 1-.158 6.866c-.034.942.486 1.016 1.228 1.018 3.71.008 7.418.056 11.128.078.356.002.712-.08 1.124-.13A59221 59221 0 0 0 71.25 1.7Zm-4.336 20.932c-1.504.01-3.008-.128-4.512-.114-1.068.01-1.544-.26-1.518-1.482.09-4.314.056-8.63.066-12.946.004-1.596 0-3.192 0-5.046l9.578-.458 1.304 19.866c-1.644.064-3.282.17-4.918.18M76.14 4.525c.182.71.322 1.092.378 1.488.51 3.586.994 7.176 1.512 10.76.172 1.186.03 2.878.732 3.408.842.636 2.434.274 3.702.342.09.004.182-.028.274-.024.852.022 1.196-.344 1.214-1.24.07-3.578.222-7.156.318-10.734.038-1.41.006-2.822.006-4zm6.622.812c.23-.002.674.51.664.77-.17 4.3-.398 8.598-.616 12.946l-3.636.344L77.066 5.55c2.058-.09 3.876-.198 5.696-.212M42.294 1.7H31.21c-.044.444-.09.708-.09.972-.018 4.324-.016 8.648-.05 12.972a246 246 0 0 1-.158 6.866c-.034.942.486 1.016 1.228 1.018 3.71.008 7.418.056 11.128.078.356.002.712-.08 1.124-.13C43.684 16.144 42.986 8.9 42.294 1.7m-4.338 20.932c-1.504.01-3.008-.128-4.512-.114-1.068.01-1.544-.26-1.518-1.482.09-4.314.056-8.63.066-12.946.004-1.596 0-3.192 0-5.046l9.578-.458c.436 6.658.86 13.092 1.304 19.866-1.644.064-3.28.17-4.918.18m9.228-18.106c.182.71.322 1.092.378 1.488.51 3.586.994 7.176 1.512 10.76.172 1.186.03 2.878.732 3.408.842.636 2.434.274 3.702.342.09.004.182-.028.274-.024.852.022 1.196-.344 1.214-1.24.07-3.578.222-7.156.318-10.734.038-1.41.006-2.822.006-4zm6.62.812c.23-.002.674.51.664.77-.17 4.3-.398 8.598-.616 12.946-1.222.116-2.294.218-3.638.344L48.106 5.549c2.06-.09 3.878-.198 5.698-.212M12.4 1.699H1.316c-.044.444-.09.708-.09.972-.018 4.324-.016 8.648-.05 12.972a254 254 0 0 1-.158 6.864c-.034.942.486 1.016 1.228 1.018 3.71.008 7.418.056 11.128.078.356.002.712-.08 1.124-.13zM8.064 22.631c-1.504.01-3.008-.128-4.512-.114-1.068.01-1.544-.26-1.518-1.482.09-4.314.056-8.63.066-12.946.004-1.596 0-3.192 0-5.046l9.578-.458c.436 6.658.86 13.092 1.304 19.866-1.644.064-3.282.17-4.918.18m9.228-18.106c.182.71.322 1.092.378 1.488.51 3.586.994 7.176 1.512 10.76.172 1.186.03 2.878.732 3.408.842.636 2.436.274 3.704.342.09.004.182-.028.274-.024.852.022 1.196-.344 1.214-1.24.07-3.578.222-7.156.318-10.734.038-1.41.006-2.822.006-4zm6.618.812c.23-.002.674.51.664.77-.17 4.3-.398 8.598-.616 12.946-1.222.116-2.294.218-3.638.344L18.212 5.549c2.062-.09 3.88-.198 5.698-.212M9.534 69.591c2.88-.254 5.242-.462 7.604-.672l.296.66c-1.32 1.802-2.638 3.602-4.05 5.534zm23.33 5.598-4.582-5.704 8.132-.79zm17.498-.232c-1.65-1.966-3.094-3.682-4.924-5.864h8.29zm12.986 7.8c.628-.422 1.23-1.166 1.884-1.218 6.422-.518 12.852-.998 19.286-1.264.796-.034 1.644 1.232 2.466 1.896-.62.72-1.228 2.054-1.86 2.068-7.182.148-14.37.094-21.556.094q-.108-.788-.22-1.576m22.726-26.95c-7.498-1.032-14.716-2.028-21.934-3.022l-.092-1.084q8.157-.943 16.318-1.882c.266-.03.536-.04.804-.056 5.626-.332 5.626-.332 4.904 6.044M5.338 59.375l-1.976-4.25 3.12-1.436-4.364-3.984 5.08-2.986-3.34-3.846 2.576-1.78-3.86-2.868 4.684-4.856-4.836-4.648-.414-1.286v38.33zm51.156-26.598H49.96c1.668-1.872-.698-4.934 2.676-5.366 3.16-.402 3.982.93 3.858 5.366'/%3E%3Cpath fill='%23f06b19' d='M70.69 20.733c-.182-.71-.322-1.092-.378-1.488-.51-3.586-.994-7.176-1.512-10.76-.172-1.186-.03-2.878-.732-3.408-.842-.636-2.436-.274-3.704-.342-.09-.004-.182.028-.274.024-.852-.022-1.196.344-1.214 1.24-.07 3.578-.222 7.156-.316 10.734-.038 1.41-.006 2.822-.006 4zm-6.62-.812c-.23.002-.674-.51-.664-.77.17-4.3.398-8.598.616-12.946 1.222-.116 2.294-.218 3.638-.344l2.108 13.848c-2.062.09-3.88.2-5.698.212m11.51 3.638h11.084c.042-.444.09-.708.09-.972.018-4.324.016-8.648.05-12.972.018-2.288.076-4.578.158-6.864.034-.942-.486-1.016-1.228-1.016-3.71-.008-7.418-.056-11.128-.078-.356-.002-.712.08-1.124.132zm4.336-20.932c1.504-.01 3.008.128 4.512.114 1.068-.01 1.544.26 1.518 1.482-.09 4.314-.056 8.63-.066 12.946-.004 1.596 0 3.192 0 5.048l-9.578.458c-.436-6.658-.86-13.092-1.304-19.866 1.644-.066 3.282-.172 4.918-.182M41.732 20.733c-.182-.71-.322-1.092-.378-1.488-.51-3.586-.994-7.176-1.512-10.76-.172-1.186-.03-2.878-.732-3.408-.842-.636-2.434-.274-3.702-.342-.09-.004-.182.028-.274.024-.852-.022-1.196.344-1.214 1.24-.07 3.578-.222 7.156-.318 10.734-.038 1.41-.006 2.822-.006 4zm-6.62-.812c-.23.002-.674-.51-.664-.77.17-4.3.398-8.598.616-12.946 1.222-.116 2.294-.218 3.638-.344l2.108 13.848c-2.06.09-3.878.2-5.698.212m11.51 3.638h11.084c.042-.444.09-.708.09-.972.018-4.324.016-8.648.05-12.972.018-2.288.076-4.578.158-6.864.034-.942-.486-1.016-1.228-1.016-3.71-.008-7.418-.056-11.128-.078-.356-.002-.712.08-1.124.132.708 7.326 1.406 14.57 2.098 21.77M50.96 2.627c1.504-.01 3.01.128 4.512.114 1.068-.01 1.544.26 1.518 1.482-.09 4.314-.056 8.63-.066 12.946-.004 1.596 0 3.192 0 5.048l-9.578.458-1.304-19.866c1.644-.066 3.28-.172 4.918-.182M11.84 20.733c-.182-.71-.322-1.092-.378-1.488-.51-3.586-.994-7.176-1.512-10.76-.172-1.186-.03-2.878-.732-3.408-.842-.636-2.436-.274-3.704-.342-.09-.004-.184.028-.274.024-.85-.022-1.196.344-1.214 1.24-.07 3.578-.222 7.156-.316 10.734-.038 1.41-.006 2.822-.006 4zm-6.62-.812c-.23.002-.674-.51-.664-.77.17-4.3.398-8.598.616-12.946l3.636-.344 2.108 13.848c-2.06.09-3.878.2-5.696.212m11.51 3.638h11.086c.042-.444.09-.708.09-.972.018-4.324.016-8.648.05-12.972.018-2.288.076-4.578.158-6.864.034-.942-.486-1.016-1.228-1.016-3.71-.008-7.418-.056-11.128-.078-.356-.002-.712.08-1.124.132.704 7.326 1.402 14.57 2.096 21.77m4.336-20.932c1.504-.01 3.008.128 4.512.114 1.068-.01 1.544.26 1.518 1.482-.09 4.314-.056 8.63-.066 12.946-.004 1.596 0 3.192 0 5.048l-9.578.458c-.436-6.658-.86-13.092-1.304-19.866 1.644-.066 3.282-.172 4.918-.182m.87 75.338 4.076 5.6-8.21.412zm37.916-.74c0 1.718.09 3.444-.054 5.148-.044.514-.688 1.338-1.136 1.392-1.446.178-2.926.066-5.074.066l5.478-6.84zm-55.58-.338c1.622 2.09 3.244 4.178 4.988 6.422-.548.184-.828.324-1.124.37-4.616.722-4.778.578-4.656-3.968.022-.852.002-1.706.002-2.558zm40.098 6.498h-7.88c1.414-2.162 2.6-3.98 4.11-6.29 1.336 2.232 2.436 4.066 3.77 6.29m19.918-17.934c1.224-.094 2.448-.212 3.676-.274 5.07-.26 10.142-.468 15.208-.77 1.9-.114 3.494-.184 3.432 2.57-.052 2.314-1.102 2.732-3.086 2.466-6.416-.86-12.846-1.602-19.27-2.388zm22.004-26.864-21.756-1.73.004-1.122c4.158-.438 8.316-.884 12.474-1.31 1.738-.178 3.492-.234 5.22-.486 4.69-.682 5.082-.254 4.058 4.648M22.348 27.435h6.084c0 1.816.648 4.042-.182 5.06-.828 1.014-3.142.812-5.226 1.226-.218-2.042-.432-4.016-.676-6.286M50.85 47.92l-21.686.59.082 7.494 18.286.838V51.97l-14.984-.332.064 1.85 7.532.086v1.782l-9.452-.186-.392-5.76 19.186.538-.092 8.874-22.708-.98.184-11.35 26.038-1.064 1.974 17.964-33.152-.09.036-.358 2.016-20.942 34.09-2.376v25.748l1.768.252V35.82l-38.194 1.616-1.772 26.518 36.06.762-.754-22.236-29.464 1.44-.918 16.828h27.484z'/%3E%3Cpath fill='%238059d4' d='M64.92 15.225c-.128.828-.296 1.546-.322 2.27-.01.316.254.906.428.92 1.098.086 2.206.044 3.358.044l-.672-3.234zm2.368 2.298c-.694.03-1.302.058-2.006.09.058-1.276.418-2.004 1.916-1.636zm14.624-7.488c.128-.828.296-1.546.322-2.27.01-.316-.254-.906-.428-.92-1.098-.086-2.206-.044-3.358-.044l.672 3.234zm-2.37-2.298 2.006-.09c-.058 1.276-.418 2.004-1.916 1.636-.032-.542-.056-.98-.09-1.546m-43.58 7.488c-.128.828-.296 1.546-.322 2.27-.01.316.254.906.428.92 1.098.086 2.206.044 3.358.044l-.672-3.234zm2.37 2.298c-.694.03-1.302.058-2.006.09.058-1.276.418-2.004 1.916-1.636.03.54.056.978.09 1.546m14.622-7.488c.128-.828.296-1.546.322-2.27.01-.316-.254-.906-.428-.92-1.098-.086-2.206-.044-3.358-.044l.672 3.234zm-2.37-2.298 2.006-.09c-.058 1.276-.418 2.004-1.916 1.636-.03-.542-.056-.98-.09-1.546M6.07 15.225c-.128.828-.296 1.546-.322 2.27-.01.316.254.906.428.92 1.098.086 2.206.044 3.358.044l-.672-3.234zm2.368 2.298c-.694.03-1.3.058-2.006.09.058-1.276.418-2.004 1.916-1.636zm14.624-7.488c.128-.828.296-1.546.322-2.27.01-.316-.254-.906-.428-.92-1.098-.086-2.204-.044-3.358-.044l.672 3.234zm-2.37-2.298 2.006-.09c-.058 1.276-.418 2.004-1.916 1.636-.032-.542-.056-.98-.09-1.546m43.016 65.454 21.756 1.73-.004 1.122c-4.158.438-8.314.884-12.474 1.31-1.738.178-3.492.234-5.22.486-4.69.68-5.082.254-4.058-4.648m22.004-26.866c-1.224.092-2.448.212-3.676.274-5.07.26-10.142.468-15.208.77-1.9.114-3.494.184-3.432-2.57.052-2.314 1.102-2.732 3.086-2.466 6.416.86 12.846 1.6 19.27 2.388q-.022.803-.04 1.604M46.704 26.743c1.09 5.938 1.09 5.938-4.52 5.706-1.472-5.182-.5-6.456 4.52-5.706M6.05 37.545l4.352 3.516-3.1 3.212 2.556 3.854-4.032 1.924 4.608 3.82-3.97 2.518 1.08 4.012L5.098 64.2l4.722-.39-1.2-4.178 4.442-2.98-2.686-3.354 2.742-2.492-3.34-4.434 2.74-2.288-2.152-3.688 2.748-2.734-3.104-3.758v-2.198l2.676-2.74H6.174l3.622 5.592z'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='800%25' height='800%25' fill='url(%23a)' transform='translate(-122)'/%3E%3C/svg%3E`;


  return (
    <div className="min-h-screen bg-yellow-300 p-8 relative overflow-hidden" style={{
      backgroundImage: `url("${svgBackground}")`,
      backgroundPosition: 'center',
      backgroundBlendMode: 'overlay'
    }}>
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