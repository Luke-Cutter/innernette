import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const CincoCreditUnion = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [audio] = useState(new Audio());
  const [introMusic] = useState(new Audio('/voicelines/cincocreditunion/intromusic.mp3'));

  const playVoiceLine = useCallback((filename) => {
    audio.src = `/voicelines/cincocreditunion/${filename}`;
    audio.play().catch(error => {
      console.error('Error playing audio:', error);
    });
  }, [audio]);

  const dialogueSteps = useMemo(() => [
    {
      text: "Welcome to Cinco International Credit Union, please enter your information to begin",
      buttons: ['START']
    },
    {
      text: "Please enter your name:",
      input: "ERIC WAREHEIM",
      buttons: ['NEXT']
    },
    {
      text: "Please enter your date of birth:",
      input: "04/07/1976",
      buttons: ['NEXT']
    },
    {
      text: "Please enter your social security number:",
      input: "XXX-XX-XXXX",
      buttons: ['NEXT']
    },
    {
      text: "Okay. I'm almost finished setting up your account.",
      input: "ERIC WAREHEIM",
      subText: "But I have a few more questions.",
      buttons: ['NEXT'],
      voiceClip: 'setup-account.mp3'
    },
    {
      text: "Do you live in a Hole or a Boat?",
      images: [
        { src: "/images/pages/categories/cinco/CincoCreditUnion/hole.png", alt: "Hole" },
        { src: "/images/pages/categories/cinco/CincoCreditUnion/boat.png", alt: "Boat" }
      ],
      buttons: ['HOLE', 'BOAT', 'NO THANKS'],
      voiceClip: 'hole-or-boat.mp3'
    },
    {
      text: "Okay. I didn't get that. I think you chose BOAT. Is that right?",
      buttons: ['YES'],
      voiceClip: 'chose-boat.mp3'
    },
    {
      text: "Okay. Let's move on. Is your boat a:",
      images: [
        { src: "/images/pages/categories/cinco/CincoCreditUnion/cclass.png", alt: "C-Class Boat", label: "C-Class Licensed Boat" },
        { src: "/images/pages/categories/cinco/CincoCreditUnion/fishing.png", alt: "Fishing Boat", label: "Commercial Fishing Boat" }
      ],
      buttons: ['C-CLASS', 'FISHING', 'NO THANKS'],
      voiceClip: 'boat-type.mp3'
    },
    {
      text: "Okay. I think you've chosen COMMERCIAL FISHING. Now I'm going to need your boat's name.",
      buttons: ['NEXT'],
      voiceClip: 'need-boat-name.mp3'
    },
    {
      text: "Okay. I think you've said:",
      input: "TAARGÜS",
      subText: "Is this correct?",
      buttons: ['YES', 'NO THANKS'],
      voiceClip: 'confirm-taargus.mp3'
    },
    {
      text: "Just to make sure I've gotten all the information correct, I'm going to need you to confirm a few more things.",
      buttons: ['NEXT'],
      voiceClip: 'confirm-info.mp3'
    },
    {
      text: "Your name is:",
      input: "ERIC TAARGÜS",
      subText: "Is this correct?",
      buttons: ['YES', 'NO THANKS'],
      voiceClip: 'confirm-eric-taargus.mp3'
    },
    {
      text: "Okay. I'll go ahead and make that change.",
      buttons: ['NEXT'],
      voiceClip: 'making-change.mp3',
      delay: 2000 // 2 second pause before next step
    },
    {
      text: "Great. I've made the change. Your wife's new legal name is:",
      input: "TAARGÜS TAARGÜS",
      subText: "Is this okay?",
      buttons: ['YES', 'NO THANKS'],
      voiceClip: 'wife-name-change.mp3'
    },
    {
      text: "Great. We're sending her the following VHS tape.",
      input: "PIZZA BOY",
      subText: "You've chosen:",
      image: { src: "/images/pages/categories/cinco/CincoCreditUnion/PizzaBoyVHS.png", alt: "Pizza Boy VHS", position: "right" },
      buttons: ['THANKS'],
      voiceClip: 'sending-vhs.mp3'
    },
    {
      text: "Have a good day",
      input: "ERIC TAARGÜS",
      buttons: ['EXIT'],
      voiceClip: 'mmm-pizza.mp3'
    }
  ], []); // Empty dependency array since the steps never change

  useEffect(() => {
    // Set up intro music
    introMusic.loop = true;
    introMusic.play().catch(error => {
      console.error('Error playing intro music:', error);
    });

    // Clean up function
    return () => {
      introMusic.pause();
      introMusic.currentTime = 0;
    };
  }, [introMusic]);

  useEffect(() => {
    const currentDialogue = dialogueSteps[currentStep];
    let timer;
    
    // Only play voice line if one exists for this step
    if (currentDialogue.voiceClip) {
      playVoiceLine(currentDialogue.voiceClip);
    }

    // Handle delay if specified
    if (currentDialogue.delay && currentStep < dialogueSteps.length - 1) {
      timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, currentDialogue.delay);
    }

    // Clean up previous audio when moving to next step
    return () => {
      if (audio.src) {  // Only cleanup if there was audio playing
        audio.pause();
        audio.currentTime = 0;
      }
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [currentStep, dialogueSteps, audio, playVoiceLine]);

  const handleButtonClick = () => {
    if (currentStep === dialogueSteps.length - 1) {
      // Navigate back to subsidiaries on the last step
      navigate('/subsidiaries');
    } else {
      if (currentStep === 3) {  // Stop music after form completion
        // Stop intro music when information is entered
        introMusic.pause();
        introMusic.currentTime = 0;
      }
      setCurrentStep(prev => prev + 1);
    }
  };

  const currentDialogue = dialogueSteps[currentStep];

  return (
    <div className="h-screen bg-gradient-to-b from-blue-300 to-blue-100 p-8">
      {/* CINCO Logo */}
      <div className="flex justify-center mb-8">
        <img 
          src="/images/pages/categories/cinco/CincoCreditUnion/CincoCreditUnion.PNG" 
          alt="CINCO Logo" 
          className="w-96 h-auto"
        />
      </div>
      
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg">
        <div className="p-6">
          {/* Dialogue Box */}
          {!currentDialogue.image && (
            <div className="bg-white p-4 rounded-lg">
              <p className="text-4xl mb-2 whitespace-pre-line">{currentDialogue.text}</p>
              
              {/* Yellow Input Display */}
              {currentDialogue.input && (
                <div className="flex justify-center w-full">
                  <div className="bg-yellow-300 px-3 border-black border-2 py-2 text-3xl mb-2 inline-block pixel-text ">
                    {currentDialogue.input}
                  </div>
                </div>
              )}
              
              {currentDialogue.subText && (
                <p className="text-4xl">{currentDialogue.subText}</p>
              )}
            </div>
          )}
          
          {/* Images Grid */}
          {currentDialogue.images && (
            <div className="grid grid-cols-2 gap-4 mb-4">
              {currentDialogue.images.map((img, idx) => (
                <div key={idx} >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full rounded mb-2"
                  />
                  {img.label && <p className="text-2xl font-bold">{img.label}</p>}
                </div>
              ))}
            </div>
          )}

          {/* VHS Layout */}
          {currentDialogue.image && (
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-4xl">{currentDialogue.text}</p>
                {currentDialogue.subText && (
                <p className="text-4xl mt-10 mb-3 ">{currentDialogue.subText}</p>
              )}
                <div className="bg-yellow-300 px-3 border-black border-2 py-2 text-2xl mb-2 inline-block pixel-text">
                  {currentDialogue.input}
                </div>
              </div>
              <div className="ml-4">
                <img
                  src={currentDialogue.image.src}
                  alt={currentDialogue.image.alt}
                  className="rounded h-[200px] w-[150px] border-black border-2 mr-6 mt-4"
                />
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Buttons */}
      <div className="flex gap-4 justify-center">
            {currentDialogue.buttons.map((button, idx) => (
              <button
                key={idx}
                onClick={handleButtonClick}
                className="bg-gradient-to-b from-blue-400 to-blue-600 
                         hover:from-blue-500 hover:to-blue-700 
                         text-white px-10 py-2 rounded
                         shadow-md active:shadow-inner 
                         border border-blue-700
                         text-lg mt-10"
              >
                {button}
              </button>
            ))}
        </div>
    </div>
  );
};

export default CincoCreditUnion;