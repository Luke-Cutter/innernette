import React, { useState, useEffect } from 'react';
import { Heart, Tv, Crown, Star, Calendar, Smile, Frown, Zap, XCircle, AlertTriangle, Axe } from 'lucide-react';

const FemininePerspectives = () => {
  const [showBlessing, setShowBlessing] = useState(true);

  const stuntRoles = {
    randy: [
      "Kel C. Grammare- Actor",
      "Don Buon Jiovie- Musician/Actor", 
      "Craig 'Tea' Nelson- Actor",
      "Jut Hursh- Actor/Director",
      "Hosta Mahogey- Comedian"
    ],
    gene: [
      "Jhud Nalson- Actor",
      "Will 'Scan Man' Nguyen- Actor",
      "Dell Taburk- Actress/Comedienne",
      "Jay Mawhinney- CINCO™ Spokesman",
      "Bihl Cosbi- Rapper/ Actor"
    ]
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowBlessing(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gradient-to-b from-pink-50 to-purple-50 flex flex-col">
      {/* Spiritual Banner */}
      {showBlessing && (
        <div className="bg-purple-100 text-purple-800 py-1 text-center text-sm font-serif italic">
          <Crown className="inline-block mr-2" size={14} />
          "Thank you, oh powerful Susan, for the gift of the feminine spirit"
          <Crown className="inline-block ml-2" size={14} />
        </div>
      )}

      {/* Header */}
      <header className="bg-pink-200 py-6">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-serif text-purple-900 flex items-center justify-center gap-2">
            <Heart className="text-pink-500" fill="pink" size={20} />
            Feminine Perspectives
            <Heart className="text-pink-500" fill="pink" size={20} />
          </h1>
          <p className="text-purple-700 italic text-sm">The talk show from the woman's perspective</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto p-4 flex flex-col gap-4">
        {/* Episode Preview */}
        <div className="bg-white rounded-lg p-4 shadow">
          <div className="flex gap-4">
            <div className="w-2/3">
              <h2 className="text-xl font-serif text-purple-900 mb-2">
                Today's Special: Hollywood's Most Unique Stunt Brothers
              </h2>
              <img 
                src="images/pages/categories/channel5andfriends/FemininePerspectives/MarshandLonnie.PNG" 
                alt="Live Studio Recording" 
                className="rounded-lg mb-2 w-full"
              />
              <div className="flex gap-3 text-xs justify-center text-purple-600">
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  Today's Show
                </span>
                <span className="flex items-center gap-1">
                  <Tv size={12} />
                  Live Studio Recording
                </span>
                <span className="flex items-center gap-1">
                  <Star size={12} />
                  Topless? We hope!
                </span>
              </div>
            </div>
            <div className="w-1/3 border-l border-pink-100 pl-4">
              <h3 className="text-lg font-serif text-purple-900 mb-2">Feminine Insights™</h3>
              <div 
                className="bg-pink-100 flex justify-center text-purple-700 py-1 px-3 rounded-full text-sm w-full"
              >
                Our Audience's Divine Perspectives
              </div>
              { (
                <div className="mt-2 space-y-1 text-xs animate-fade-in overflow-y-auto max-h-64">
                <div className="flex items-center gap-1 text-pink-700">
                  <Smile size={12} />
                  "Oh my, two handsome stuntmen!"
                </div>
                <div className="flex items-center gap-1 text-pink-700">
                  <XCircle size={12} />
                  "I can't tell them apart!"
                </div>
                <div className="flex items-center gap-1 text-pink-700">
                  <Smile size={12} />
                  "These boys are so strong"
                </div>
                <div className="flex items-center gap-1 text-pink-700">
                  <XCircle size={12} />
                  "They keep interrupting each other..."
                </div>
                <div className="flex items-center gap-1 text-pink-700">
                  <Frown size={12} />
                  "That looked like it really hurt"
                </div>
                <div className="flex items-center gap-1 text-pink-700">
                  <XCircle size={12} />
                  "Don't get too hurt, we want you for dessert!"
                </div>
                <div className="flex items-center gap-1 text-pink-700">
                  <Frown size={12} />
                  "Should they be doing this?"
                </div>
                <div className="flex items-center gap-1 text-pink-700">
                  <XCircle size={12} />
                  "That's a very dangerous shoot..."
                </div>
                <div className="flex items-center gap-1 text-pink-700">
                  <AlertTriangle size={12} />
                  "Wait, is that a real gun!?"
                </div>
                <div className="flex items-center gap-1 text-pink-700">
                  <AlertTriangle size={12} />
                  "Someone should stop this!"
                </div>
                <div className="flex items-center gap-1 text-pink-700">
                  <AlertTriangle size={12} />
                  "Why is the gun loaded with live rounds!?"
                </div>
                <div className="flex items-center gap-1 text-pink-700">
                  <AlertTriangle size={12} />
                  "I don't want to see a death today!"
                </div>
                <div className="flex items-center gap-1 text-pink-700">
                  <AlertTriangle size={12} />
                  "Someone get help NOW!"
                </div>
              </div>
              )}
            </div>
          </div>
        </div>

        {/* Stunt Brothers Section */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 shadow">
            <h3 className="text-lg font-serif text-purple-900 mb-2">Meet Randy Stontmehn</h3>
            <div className="space-y-2">
              <div className="text-sm text-purple-700 italic mb-3">
                "Oh, you start and I'll interrupt."
              </div>
              <div className="bg-pink-50 p-3 rounded">
                <h4 className="font-medium mb-2">Notable Roles:</h4>
                {stuntRoles.randy.map((role, index) => (
                  <div key={index} className="text-sm text-purple-700 mb-1 flex items-center gap-2">
                    <Star size={12} className="text-pink-500" />
                    {role}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <h3 className="text-lg font-serif text-purple-900 mb-2">Meet Gene Stontmehn</h3>
            <div className="space-y-2">
              <div className="text-sm text-purple-700 italic mb-3">
                "We're the stunt brothers. Actually, we enjoy it."
              </div>
              <div className="bg-pink-50 p-3 rounded">
                <h4 className="font-medium mb-2">Notable Roles:</h4>
                {stuntRoles.gene.map((role, index) => (
                  <div key={index} className="text-sm text-purple-700 mb-1 flex items-center gap-2">
                    <Star size={12} className="text-pink-500" />
                    {role}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Live Demonstrations */}
        <div className="bg-white rounded-lg p-4 shadow">
          <h3 className="text-lg font-serif text-purple-900 mb-3">Today's Live Demonstrations</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-pink-50 p-3 rounded hover:bg-pink-100 cursor-pointer transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Zap size={16} className="text-pink-500" />
                <h4 className="font-medium">Fight Scene from Turkey's 2</h4>
              </div>
              <p className="text-purple-700 italic text-sm">"I don't like the look of you... Right in your jeans!"</p>
            </div>
            <div className="bg-pink-50 p-3 rounded hover:bg-pink-100 cursor-pointer transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Star size={16} className="text-pink-500" />
                <h4 className="font-medium">Special Effects Demo</h4>
              </div>
              <p className="text-purple-700 italic text-sm">"Watch closely, I'm not even touching him!"</p>
            </div>
            <div className="bg-pink-50 p-3 rounded hover:bg-pink-100 cursor-pointer transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Axe size={16} className="text-pink-500" />
                <h4 className="font-medium">The Exploding Pumpkin</h4>
              </div>
              <p className="text-purple-700 italic text-sm">"If I'm just a touch off, my brother Gene's a goner."</p>
              <div className="mt-1 text-[10px] bg-red-100 text-red-700 px-2 py-1 rounded-full inline-block">
                Coming Up Next
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-purple-100 py-4 mt-auto">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-2">
              <Crown size={16} className="text-purple-500" />
              <h4 className="font-serif text-purple-800 italic">Sacred Words from Susan</h4>
              <Crown size={16} className="text-purple-500" />
            </div>
            <p className="text-purple-700 text-sm italic max-w-lg mx-auto">
              "We follow you blindly to the great Vajonas. Through your divine guidance, 
              we shall witness these dangerous stunts with feminine grace."
            </p>
            <div className="flex items-center justify-center gap-1 text-pink-500">
              <Heart size={12} fill="pink" />
              <Heart size={12} fill="pink" />
              <Heart size={12} fill="pink" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FemininePerspectives;