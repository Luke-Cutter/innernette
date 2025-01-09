import React, { useState, useRef } from 'react';
import { File, Image, Paintbrush, Pen, MousePointer, Circle, Eraser, Palette, Eye, Filter, Leaf } from 'lucide-react';

const CincoFotoFiddler = () => {
  const [showPublished, setShowPublished] = useState(false);
  const [plants, setPlants] = useState([]);
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const audioRef = useRef(null);

  // Handle premium feature errors
  const handleToolClick = () => {
    alert('ERROR: This tool requires CINCO™ PREMIUM SUBSCRIPTION\nPlease upgrade to INNERNETTE 3.0 (Coming 2012)');
  };

  const handleCanvasClick = (e) => {
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Only place if within image bounds
    if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
      // Calculate relative position within the image container
      const relativeX = (x / rect.width);
      const relativeY = (y / rect.height);
      
      setPlants(prev => [...prev, {
        x: relativeX,
        y: relativeY,
        emoji: '🌲',
        rotation: Math.random() > 0.5 ? '20deg' : '-20deg',
        scale: 2.5
      }]);
    }
  };

  const handlePublish = () => {
    setShowPublished(true);
    try {
      const audio = new Audio('/music/FotoFiddler/AprilsTune.mp3');
      audio.addEventListener('canplaythrough', () => {
        audio.loop = true;
        audio.play().catch(e => console.log('Audio playback prevented:', e));
      });
      audioRef.current = audio;
    } catch (error) {
      console.log('Audio initialization error:', error);
    }
  };

  React.useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const MenuBar = () => (
    <div className="flex bg-gray-200 border-b border-gray-400 text-sm">
      {[
       { icon: <File size={16} />, text: 'File' },
       { icon: <Image size={16} />, text: 'Image' },
       { icon: <Paintbrush size={16} />, text: 'Brushes' },
       { icon: <Palette size={16} />, text: 'Paints' },
       { icon: <Eye size={16} />, text: 'View' },
       { icon: <Filter size={16} />, text: 'Filters' }
     ].map(({ icon, text }) => (
       <div key={text} 
         className="px-4 py-1 hover:bg-gray-300 cursor-pointer flex items-center gap-1 relative group"
         onClick={text === 'File' ? undefined : handleToolClick}
       >
         {icon}
         {text}
         {text === 'File' && (
           <div className="hidden group-hover:block absolute top-full left-0 bg-white shadow-lg border border-gray-300 w-48 z-[100]">
             <div className="py-1">
               <button 
                 onClick={handleToolClick} 
                 className="w-full text-left px-4 py-1 hover:bg-gray-100 opacity-50"
               >New... #4</button>
               <button 
                 onClick={handleToolClick} 
                 className="w-full text-left px-4 py-1 hover:bg-gray-100 opacity-50"
               >Open... *7</button>
               <div className="border-t border-gray-200 my-1"></div>
               <button 
                 onClick={handlePublish}
                 className="w-full text-left px-4 py-1 hover:bg-gray-100 text-blue-600"
               >
                 Publish To Web
               </button>
             </div>
           </div>
         )}
       </div>
     ))}
   </div>
 );

 const Editor = () => (
   <div className="flex h-full bg-gray-100">
     <div className="w-12 bg-gray-200 border-r border-gray-400 py-2 space-y-2">
       {[
         { icon: <Leaf size={16} />, tool: 'plant', enabled: true },
         { icon: <Pen size={16} />, tool: 'draw', enabled: false },
         { icon: <MousePointer size={16} />, tool: 'select', enabled: false },
         { icon: <Circle size={16} />, tool: 'shape', enabled: false },
         { icon: <Eraser size={16} />, tool: 'erase', enabled: false }
       ].map(({ icon, tool, enabled }) => (
         <div 
           key={tool}
           className={`w-8 h-8 mx-auto flex items-center justify-center cursor-pointer
             ${tool === 'plant' ? 'bg-blue-200' : 'bg-white opacity-50'} 
             border border-gray-400 ${!enabled && 'cursor-not-allowed'}`}
           onClick={() => enabled ? undefined : handleToolClick()}
         >
           {icon}
         </div>
       ))}
     </div>
     <div className="flex-1 bg-[#808080] p-4 relative">
       <div 
         ref={canvasRef}
         className="relative h-full"
         onClick={handleCanvasClick}
       >
         <div className="absolute inset-0" style={{ 
           backgroundImage: 'linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)',
           backgroundSize: '20px 20px',
           backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
         }}/>
         
         <img 
           ref={imageRef}
           src="/images/pages/categories/cinco/CincoFotoFiddler/AprilWithSpagett.PNG" 
           alt="April with Spagett"
           className="relative z-10 max-h-full mx-auto"
         />
         
         {/* Plants in Editor */}
         {plants.map((plant, index) => (
           <div
             key={index}
             className="absolute pointer-events-none z-30"
             style={{
               left: `${plant.x * 100}%`,
               top: `${plant.y * 100}%`,
               transform: `translate(-50%, -50%) rotate(${plant.rotation}) scale(${plant.scale})`,
               fontSize: '64px'
             }}
           >
             {plant.emoji}
           </div>
         ))}
       </div>
     </div>
   </div>
 );

 const PublishedView = () => (
    <div className="h-full bg-green-500 overflow-y-auto">
      <div className="max-w-2xl mx-auto py-8 px-4">
        <h1 className="text-blue-900 text-4xl font-bold text-center italic mb-8">
        🌲 My Celebs with Plants 🌲
        </h1>
        
        {/* Container for Images */}
        <div className="space-y-16">
          {/* First Image Section */}
          <div className="flex flex-col items-center">
            <div className="relative w-2/3">
              <img 
                src="/images/pages/categories/cinco/CincoFotoFiddler/AprilWithSpagett.PNG" 
                alt="Edited Spagett 1"
                className="w-full border-8 border-white"
              />
              {/* Plants overlay */}
              <div className="absolute inset-0">
                {plants.map((plant, index) => (
                  <div
                    key={`top-${index}`}
                    className="absolute"
                    style={{
                      left: `${plant.x * 100}%`,
                      top: `${plant.y * 100}%`,
                      transform: `translate(-50%, -50%) rotate(${plant.rotation}) scale(${plant.scale})`,
                      fontSize: '48px'
                    }}
                  >
                    {plant.emoji}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-40 h-40 mt-5">
              <img 
                src="/images/pages/categories/cinco/CincoFotoFiddler/AprilPetty.PNG" 
                alt="April Petty"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Second Image Section */}
          <div className="flex flex-col items-center">
            <div className="w-2/3">
              <img 
                src="/images/pages/categories/cinco/CincoFotoFiddler/JohnDepp.PNG" 
                alt="John"
                className="w-full border-8 border-white"
              />
            </div>
            <div className="w-40 h-40 mt-5">
              <img 
                src="/images/pages/categories/cinco/CincoFotoFiddler/AprilPetty.PNG" 
                alt="April Petty"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Third Image Section */}
          <div className="flex flex-col items-center">
            <div className="w-2/3">
              <img 
                src="/images/pages/categories/cinco/CincoFotoFiddler/RobinWilliams.PNG" 
                alt="Robin"
                className="w-full border-8 border-white"
              />
            </div>
            <div className="w-40 h-40 mt-5">
              <img 
                src="/images/pages/categories/cinco/CincoFotoFiddler/AprilPetty.PNG" 
                alt="April Petty"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <h2 className="text-blue-900 text-4xl font-bold text-center italic mb-2 mt-12">
          🌲 My Celebs with Plants 🌲
        </h2>
        <p className="text-yellow-300 text-center text-xl">
          by April Petty
        </p>
      </div>
    </div>
  );

  return (
    <div className="h-full flex flex-col">
      <div className="bg-gray-300 px-2 py-1 text-sm">
        CINCO™ FOTO FIDDLER v1.2.5 (TRIAL VERSION)
      </div>
      {!showPublished ? (
        <>
          <MenuBar />
          <Editor />
          <div className="bg-gray-300 px-2 py-1 text-xs text-red-600">
            WARNING: May cause mild to severe computer browning
          </div>
        </>
      ) : (
        <PublishedView />
      )}
    </div>
  );
};

export default CincoFotoFiddler;