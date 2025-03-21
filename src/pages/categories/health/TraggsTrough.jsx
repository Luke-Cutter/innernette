import React from 'react';
import { Utensils, AlertTriangle, Sparkles, Star, Cookie } from 'lucide-react';
import ImageCarousel from '../../../components/shared/ImageCarousel';
import BookAnAppointment from '../../../components/shared/BookAnAppointment';

const TraggsTrough = () => {
  const safetyTips = [
    "Make sure blender isn't in motion when your hand is in there!",
    "The English Channel isn't calm in winter months",
    "The doctor should know the difference between dysentery and basic diarrhea",
    "Don't forget to blend!",
    "Eyes bigger than your stomach? Rub some on your upper lip!"
  ];

  const episodes = [
    {
      title: "Jalapeño Fried Chicken Special",
      ingredients: ["Chicken", "Jalapeños", "Wild Saffron Rice", "Balsamic Asparagus"],
      specialNote: "Perfect for something dead this long!"
    },
    {
      title: "Brown Slop Classic",
      ingredients: ["Cup of Water", "Half Cup Brown Slop", "Sugar Mix"],
      specialNote: "Saute, Flambe, and Sache!"
    }
  ];

  return (
    <div className="min-h-screen bg-[repeating-linear-gradient(0deg,#8B0000,#8B0000_20px,#990000_20px,#990000_40px)]">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#4a2618] to-[#2e1810] p-4 relative border-b-4 border-[#1a0f0a] shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-western text-amber-300">Tragg's Trough</h1>
            <p className="text-amber-200 italic">Where fine dining meets the barnyard!</p>
          </div>
          <div className="flex items-center gap-4">
            <Star className="h-8 w-8 text-amber-300 animate-spin-slow" />
            <span className="text-amber-200 font-western text-xl">Cookin' Up Slop Since 1987</span>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,#000,#000_2px,transparent_2px,transparent_8px)]"></div>
      </header>

      <main className="max-w-6xl mx-auto p-4">
        {/* Featured Episode */}
        <div className="mb-12">
          <div className="bg-[#4a2618] p-8 rounded-lg shadow-xl border-4 border-[#2e1810]">
            <h2 className="text-3xl font-western text-amber-300 mb-4 flex items-center gap-2">
              <Utensils className="h-8 w-8" />
              Today's Special Menu
            </h2>
            <ImageCarousel
              images={[
                "images/pages/categories/health/Shows/TraggsTrough/TraggLogo.png",
                "images/pages/categories/health/Shows/TraggsTrough/Blender.png",
                "images/pages/categories/health/Shows/TraggsTrough/Contestant.png",
                "images/pages/categories/health/Shows/TraggsTrough/Slop.png"
              ]}
            />
          </div>
        </div>

        {/* Safety Tips Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-red-50 p-6 rounded-lg shadow-lg border-2 border-red-800">
            <h3 className="text-2xl font-western text-red-800 mb-4 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6" />
              Tragg's Safety Tips
            </h3>
            <div className="space-y-4">
              {safetyTips.map((tip, index) => (
                <div key={index} className="flex items-start gap-2 text-red-700">
                  <AlertTriangle className="h-4 w-4 mt-1 flex-shrink-0" />
                  <p>{tip}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recipe Steps */}
          <div className="bg-amber-100 p-6 rounded-lg shadow-lg border-2 border-amber-800">
            <h3 className="text-2xl font-western text-amber-800 mb-4 flex items-center gap-2">
              <Cookie className="h-6 w-6" />
              Tragg's Cooking Steps
            </h3>
            <div className="space-y-4">
              <p className="text-amber-900 italic">
                "A half tablespoon of this, a half tablespoon of that..."
              </p>
              <div className="space-y-2">
                {episodes[0].ingredients.map((ingredient, index) => (
                  <div key={index} className="flex items-center gap-2 text-amber-800">
                    <Sparkles className="h-4 w-4" />
                    <span>{ingredient}</span>
                  </div>
                ))}
              </div>
              <p className="text-amber-700 text-sm font-bold mt-4">
                Don't forget to blend until it's proper slop! Its not slop unless you use:
              </p>
              <p className="text-3xl tracking-tight text-amber-700 font-bold mt-4 text-center">Tragg's Original Brown Slop Powder Mix™</p>
            </div>
          </div>
        </div>

        {/* Booking Section */}
        <div className="mb-12">
          <BookAnAppointment
            productName="Tragg's Trough Experience"
            offerTitle="🍖 Join Us For Some Slop! 🍖"
            offerText="Come experience fine dining through a hole and in a trough!"
            offerDisclaimer="We are not responsible for any dysentery or basic diarrhea."
            buttonText="Reserve Your Trough Today!"
            certificationBody="Barn Health and Safety Department"
          />
        </div>

        {/* Bottom Banner */}
        <div className="text-center bg-[#4a2618] p-8 rounded-lg shadow-xl border-4 border-[#2e1810]">
          <h2 className="text-3xl font-western text-amber-300 mb-4">
            "Seconds for anyone? Don't be shy!"
          </h2>
          <p className="text-amber-200 italic">
            Special thanks to Billy Crystals for being our guest today
          </p>
        </div>
      </main>
    </div>
  );
};

export default TraggsTrough;