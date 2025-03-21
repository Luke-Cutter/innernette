import React from 'react';
import { Droplet, Zap, Star, Phone, DollarSign, Drama, Tv, Heart} from 'lucide-react';
import GlitchText from '../../../components/shared/GlitchText';
import MovieReel from '../../../components/shared/MovieReel';
import ProductFeatures from '../../../components/shared/ProductFeatures';
import TestimonialCard from '../../../components/shared/TestimonialCard';

const TairyGreeneMachine = () => {
  const features = [
    {
      icon: <Droplet className="w-6 h-6 text-cyan-600" />,
      title: "American Tap Water Powered",
      description: "No electricity needed! Runs on good old-fashioned American tap water at exactly 75°F. It's the future of entertainment!"
    },
    {
      icon: <Zap className="w-6 h-6 text-cyan-600" />,
      title: "Save MILLIONS on Bills",
      description: "Revolutionary water-powered technology means incredible savings on your energy bills. The future is water!"
    },
    {
      icon: <Star className="w-6 h-6 text-cyan-600" />,
      title: "Complete Collection",
      description: "Every movie, TV show, and public appearance Tairy Greene ever made, all in one machine. IT'S GOTTA BE IN THE MACHINE!"
    }
  ];

  const testimonials = [
    {
      name: "Roger Ebert",
      quote: "Thank you, Tairy Greene for making us believe again. You are an inspiration to the media of film, and my best friend.",
      image: "images/pages/categories/entertainment/TairyGreeneMachine/RogerEbert.PNG"
    },
    {
      name: "Gene Siskel",
      quote: "Me love the Tairy Greene Machine. Any family that loves the Tairy Greene movies will love this Tairy Greene Machine.",
      image: "images/pages/categories/entertainment/TairyGreeneMachine/Siskel.PNG"
    },
    {
      name: "Richard Roeper",
      quote: "Nothing short of a miracle... the finest film of all time... a gift! Truly a collection of movies of all time.",
      image: "images/pages/categories/entertainment/TairyGreeneMachine/Roeper.PNG"
    }
  ];

  const dramaticQuotes = [
    { text: "Step ball change... Step ball change...", author: "Tairy Greene" },
    { text: "You made me wanna do cocaine off a vertical mirror.", author: "Tairy Greene" },
    { text: "Because it's not who I am anymore.", author: "Tairy Greene" },
    { text: "I'm the ghost of LeVar Burton, and I'm here to get you back on your feet.", author: "LeVar Burton" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      {/* Epic Hero Section */}
      <header className="relative overflow-hidden text-white min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img 
            src="images/pages/categories/entertainment/TairyGreeneMachine/TairyMachine.PNG" 
            alt="Tairy Greene Machine" 
            className="w-full h-full object-cover filter brightness-50"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/50 via-blue-900/50 to-purple-900/50"></div>
        <MovieReel />
        <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center relative z-10">
          <GlitchText 
            text="CINCO™" 
            className="text-2xl font-bold mb-4 tracking-widest"
          />
          <h1 className="text-7xl font-bold mb-4 animate-fade-in-up">
            The Tairy Greene Machine
          </h1>
          <p className="text-2xl mb-8 italic">"Maybe the only gift we have is the chance to start again."</p>
          <div className="group bg-gradient-to-r from-red-600 to-red-700 text-white px-12 py-6 rounded-full animate-pulse transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/50">
            <Phone className="inline-block mr-2 animate-bounce" />
            <span className="text-2xl font-bold">CALL NOW: 1-800-555-0199</span>
            <div className="mt-2 text-sm">
              Your journey to entertainment revolution begins here!
            </div>
          </div>
        </div>
      </header>

      {/* Dramatic Journey Section */}
      <section className="relative py-24 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="images/pages/categories/entertainment/TairyGreeneMachine/Tairy1.PNG" 
            alt="Tairy's Journey" 
            className="w-full h-full object-cover filter brightness-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-cyan-900/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl font-bold text-center mb-16 relative">
            <span className="relative">
              The Epic Journey of Tairy Greene
              <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-cyan-400 mb-6">
                <Drama className="w-12 h-12" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-cyan-300">The Gravy Robber</h3>
              <p className="text-gray-300 leading-relaxed">In the shadows of culinary crime, a legend was born. Before the lights, before the stage, Tairy Greene was known by another name...</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-cyan-400 mb-6">
                <Tv className="w-12 h-12" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-cyan-300">The Snuggler</h3>
              <p className="text-gray-300 leading-relaxed">Rising from the depths of Channel 5, a star was born. The Snuggler wasn't just a role - it was a revolution in daytime made-for-television movie history.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-cyan-400 mb-6">
                <Heart className="w-12 h-12" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-cyan-300">The Teacher</h3>
              <p className="text-gray-300 leading-relaxed">When the spotlight faded, he found his true calling: Tairy Greene's Acting Seminar for Children. Because sometimes, the greatest role is inspiring others.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dramatic Quotes Carousel */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="images/pages/categories/entertainment/TairyGreeneMachine/Denise.PNG" 
            alt="Dramatic Background" 
            className="w-full h-full object-cover filter brightness-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/90 to-blue-900/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {dramaticQuotes.map((quote, index) => (
              <div key={index} className="text-center mb-8 text-white opacity-90 hover:opacity-100 transition-opacity duration-300">
                <p className="text-2xl italic mb-4">{quote.text}</p>
                <p className="text-lg text-cyan-300">- {quote.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revolutionary Features */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="images/pages/categories/entertainment/TairyGreeneMachine/Tairy2.PNG" 
            alt="Machine Features" 
            className="w-full h-full object-cover filter brightness-75"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-50/80 to-white/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl font-bold text-center mb-16 text-cyan-900">
            Revolutionary Features
            <div className="mt-4 text-lg font-normal text-cyan-600">Powered by American Innovation</div>
          </h2>
          <ProductFeatures features={features} />
        </div>
      </section>

      {/* Cinematic Masterpieces */}
      <section className="relative py-24 text-white">
        <div className="absolute inset-0">
          <img 
            src="images/pages/categories/entertainment/TairyGreeneMachine/cetera.png" 
            alt="Tairy's Masterpieces" 
            className="w-full h-full object-cover filter brightness-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-cyan-900/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl font-bold text-center mb-16">Cinematic Masterpieces</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-xl backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <h3 className="text-3xl font-bold">Little Dancing Man</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                When the music stopped, his world crumbled. But with the help of LeVar Burton's ghost, 
                one man discovered that sometimes you have to lose everything to find yourself. A story 
                of redemption, passion, and the power of the step ball change.
              </p>
              <div className="bg-cyan-900/50 p-6 rounded-lg border border-cyan-700">
                <p className="italic text-cyan-300">"I'm soaring like an eagle. Something wonderful is happening to me."</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-xl backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <h3 className="text-3xl font-bold">Little Danson Man</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                The star of "The Cheers" faces his biggest challenge yet: life at 6 inches tall. 
                Featuring the haunting melody "Little Danson Man" by Peter Cetera, this tale of 
                diminutive triumph will change how you see the world... and yourself.
              </p>
              <div className="bg-cyan-900/50 p-6 rounded-lg border border-cyan-700">
                <p className="italic text-cyan-300">"How small are you, Teddy? Give it to me in inches."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dramatic Testimonials */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <img 
            src="images/pages/categories/entertainment/TairyGreeneMachine/tairy4.png" 
            alt="Testimonial Background" 
            className="w-full h-full object-cover filter brightness-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-purple-900/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl font-bold text-center mb-16 text-white">
            <span className="relative">
              The Critics Rave
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Epic Call to Action */}
      <section className="relative py-18 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="images/pages/categories/entertainment/TairyGreeneMachine/tairy3.png" 
            alt="The Machine" 
            className="w-full h-full object-cover filter brightness-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/80 via-blue-900/80 to-purple-900/80"></div>
        <MovieReel />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-6xl font-bold mb-12">Your Journey Begins Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white to-gray-100 text-cyan-900 p-8 rounded-xl shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <DollarSign className="w-16 h-16 mx-auto mb-6 text-cyan-600" />
              <h3 className="text-3xl font-bold mb-4">The Machine</h3>
              <p className="text-lg">Use your CINCO™ card for instant approval!</p>
            </div>
            <div className="bg-gradient-to-br from-white to-gray-100 text-cyan-900 p-8 rounded-xl shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <Star className="w-16 h-16 mx-auto mb-6 text-cyan-600" />
              <h3 className="text-3xl font-bold mb-4">Special Features</h3>
              <p className="text-lg">Just 2 Tairy tokens unleashes the magic!</p>
            </div>
            <div className="bg-gradient-to-br from-white to-gray-100 text-cyan-900 p-8 rounded-xl shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <Phone className="w-16 h-16 mx-auto mb-6 text-cyan-600" />
              <h3 className="text-3xl font-bold mb-4">Tairy Toll Line</h3>
              <p className="text-lg">$2.99/min - Worth every penny!</p>
            </div>
          </div>
          
          <div className="mt-16 text-sm opacity-75 max-w-2xl mx-auto">
            <p className="mb-2">*NOT Compatible with MOST Sinks. Drainage hole in rear. Fun and EZ cleanup!</p>
            <p className="mb-2">*Temperature must be EXACTLY 75°F or this buoy won't turn on.</p>
            <p>*IT'S GOTTA BE IN THE MACHINE!</p>
          </div>
        </div>
      </section>

      <MovieReel />
    </div>
  );
};

export default TairyGreeneMachine;