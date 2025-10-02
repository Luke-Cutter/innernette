import { useState, useEffect } from 'react';

const BookAnAppointment = ({ 
  productName,
  offerTitle = "Special Offer!",
  offerText,
  offerDisclaimer,
  buttonText = "Schedule Appointment",
  certificationBody = "CINCO™ Digital Department of Innernette™ Safety",
}) => {

  const [showPopup, setShowPopup] = useState(false);

  const handleSchedule = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 10000);
  };

  return (
    <div className="space-y-8 relative">
      <div className="bg-white rounded-lg p-8 shadow-lg border-2 bg-gradient-to-r from-orange-100 via-purple-100 to-blue-100 border-cyan-200">
        <h2 className="text-3xl font-serif font-bold text-cyan-900 mb-8 text-center">
          {offerTitle}
        </h2>
        <div className="text-center space-y-4">
          <p className="text-lg text-cyan-800">
            {offerText}
          </p>
          {offerDisclaimer && (
            <p className="text-sm font-mono text-cyan-600">
              *{offerDisclaimer}
            </p>
          )}
          <div className="mt-6">
            <button 
              onClick={handleSchedule}
              className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white rounded-full hover:from-cyan-700 hover:to-cyan-600 font-medium shadow-md hover:shadow-lg transition-all duration-200 border border-cyan-400"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 shadow-lg border-2 bg-gradient-to-r from-red-50 via-white to-red-50 border-cyan-200">
        <p className="text-center text-cyan-700 font-mono text-xs">
          {productName} is certified by the {certificationBody}
          <br />
          Certification ID: T1NYHA7zRC00L
        </p>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white max-w-md mx-4 p-6 rounded-lg shadow-xl border-2 border-cyan-300">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="font-mono text-red-600 text-sm animate-pulse">
                  ERROR CODE: 00P513
                </div>
                <button 
                  onClick={() => setShowPopup(false)}
                  className="text-cyan-600 hover:text-cyan-800"
                >
                  ✕
                </button>
              </div>
              
              <h3 className="text-lg font-bold text-cyan-900 font-serif">
                CINCO™ SCHEDULING NOTICE
              </h3>
              
              <div className="space-y-3 text-cyan-800">
                <p>
                  We apologize, but CINCO™ momentarily forgot the Innernette™ was offline! 
                </p>
                <p>
                  Please contact us at 1-800-CINCO™-55 to schedule your appointment with our next available representative.
                </p>
                <p className="text-sm italic">
                  We apologize for any inconvenience this may have caused. Your business is important to us!
                </p>
              </div>

              <div className="text-xs font-mono text-cyan-600 pt-4 border-t border-cyan-200">
                CINCO™ REFERENCE: W3M3553DUP
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const TinyHats = () => {
  const products = [
    { id: 1, name: "Captain's Hat", price: "$19.95", image: "images/pages/categories/entertainment/TinyHats/tinycaptain.png", description: "Perfect for tiny boat captains and maritime enthusiasts!" },
    { id: 2, name: "Cowboy Hat with Rope", price: "$29.95", image: "images/pages/categories/entertainment/TinyHats/tinycowdog.png", featured: true, description: "Our best-seller! Includes authentic miniature lasso rope." },
    { id: 3, name: "Party Hat", price: "$14.95", image: "images/pages/categories/entertainment/TinyHats/tinyparty.jpg", description: "Celebrate in style with our colorful cone-shaped tiny party hat!" },
    { id: 4, name: "Tiny Top Hat", price: "$24.95", image: "images/pages/categories/entertainment/TinyHats/tinytop.jpg", description: "Elegant and sophisticated. Perfect for formal tiny occasions." },
    { id: 5, name: "XL Tiny Hat", price: "$34.95", image: "images/pages/categories/entertainment/TinyHats/xl.jpg", new: true, description: "Our new XL line - for when you need a slightly larger tiny hat!" },
    { id: 6, name: "Baby Hat", price: "$12.95", image: "images/pages/categories/entertainment/TinyHats/tinybaby.jpeg", description: "Adorable mini-hats for the littlest heads!" },
    { id: 7, name: "Cake Topper Hat", price: "$9.95", image: "images/pages/categories/entertainment/TinyHats/cake.jpg", description: "Make your desserts fancy with edible-compatible tiny hats!" },
    { id: 8, name: "Secret Hat", price: "$17.95", image: "images/pages/categories/entertainment/TinyHats/spy.jpg", description: "Ultra thin design fits under regular hats. Nobody will know!" },
  ];

  const testimonials = [
    { name: "Peewee Paul", text: "I never leave home without my Tiny Hat collection!" },
    { name: "Mini Martha", text: "The cake toppers were a hit at my daughter's wedding!" },
    { name: "Lil' Larry", text: "I wear my Secret Hat everywhere. It's my little secret!" },
  ];

  const promotions = [
    "Buy 3 Tiny Hats, get a 4th Tiny Hat 50% off!",
    "Free shipping on orders over $50",
    "Join our Tiny Hat Club for exclusive monthly hat drops!",
    "Students get 10% off with valid ID",
    "Now accepting PayPal and checks!",
    "Call 1-800-TINY-HAT for phone orders!",
  ];

  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [showAppointment, setShowAppointment] = useState(false);
  const [butterflies, setButterflies] = useState([]);
  const [marqueePosition, setMarqueePosition] = useState(0);

  useEffect(() => {

    setButterflies(Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: 5 + Math.random() * 90,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 3
    })));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMarqueePosition((prev) => (prev - 1) % 800);
    }, 25);
    return () => clearInterval(interval);
  }, []);

  const nextProduct = () => {
    setCurrentProductIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentProductIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      background: 'linear-gradient(to bottom, #87CEEB 0%, #E0F6FF 40%, #FFF9E6 60%, #FFFEF0 100%)'
    }}>
      <style>{`
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-15px) translateX(10px); }
        }
        @keyframes drift {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100vw); }
        }
        @keyframes flutter {
          0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
          25% { transform: translateY(-10px) rotate(-5deg) scale(1.1); }
          75% { transform: translateY(10px) rotate(5deg) scale(0.9); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes sway {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
        .scalloped {
          border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
        }
        .wood-texture {
          background-image: 
            repeating-linear-gradient(90deg, #D2691E 0px, #D2691E 1px, #CD853F 1px, #CD853F 8px),
            repeating-linear-gradient(0deg, rgba(139, 69, 19, 0.3) 0px, transparent 2px);
        }
        .fabric-texture {
          background-image: 
            repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,.05) 2px, rgba(0,0,0,.05) 4px),
            repeating-linear-gradient(-45deg, transparent, transparent 2px, rgba(0,0,0,.03) 2px, rgba(0,0,0,.03) 4px);
        }
        .dotted-texture {
          background-image: radial-gradient(circle at 2px 2px, rgba(0,0,0,0.1) 1px, transparent 0);
          background-size: 8px 8px;
        }
      `}</style>

      
      {/* Butterflies */}
      {butterflies.map((butterfly) => (
        <div
          key={butterfly.id}
          className="absolute text-3xl pointer-events-none"
          style={{
            top: `${butterfly.y}%`,
            left: `${butterfly.x}%`,
            animation: `flutter ${butterfly.duration}s ease-in-out infinite`,
            animationDelay: `${butterfly.delay}s`,
            opacity: 0.7
          }}
        >
          🦋
        </div>
      ))}

      {/* Mascot Corner */}
      <div className="absolute left-8 top-32 z-20" style={{animation: 'float-gentle 4s ease-in-out infinite'}}>
        <div className="relative bg-white rounded-full p-2 shadow-2xl border-4 border-purple-300">
          <img 
            src="images/pages/categories/entertainment/TinyHats/kissingkitties.gif"
            alt="Tiny Hat Mascot"
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10 pt-20">
        {/* Header with decorative elements */}
        <div className="text-center mb-8 relative">
          <div className="inline-block relative">
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-yellow-200 rounded-full opacity-50" style={{animation: 'twinkle 3s ease-in-out infinite'}}></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-pink-200 rounded-full opacity-50" style={{animation: 'twinkle 3s ease-in-out infinite', animationDelay: '1s'}}></div>
            
            <h1 className="text-6xl font-bold mb-4 relative" style={{
              color: '#6B46C1',
              fontFamily: 'Georgia, serif',
              textShadow: '3px 3px 0 rgba(255,255,255,0.8), 6px 6px 0 rgba(236,201,75,0.4)'
            }}>
              Tiny Hat Emporium
            </h1>
          </div>
          <p className="text-2xl text-purple-600 italic font-serif">Where Every Hat is a Small Wonder</p>
        </div>

        {/* Promotional Marquee */}
        <div className="relative h-12 mt-24 mb-6 overflow-hidden rounded-2xl shadow-lg" style={{
          background: 'linear-gradient(90deg, #ff6b6b, #ffd93d, #6bcf7f, #4d9de0, #e15759, #ff6b6b)',
          backgroundSize: '600% 100%'
        }}>
          <div className="absolute inset-0 fabric-texture opacity-20"></div>
          <div 
            className="absolute whitespace-nowrap py-3 font-bold text-white"
            style={{ 
              transform: `translateX(${marqueePosition}px)`,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}
          >
            {promotions.map((promo, index) => (
              <span key={index} className="inline-block mx-8 text-lg">
                ⭐ {promo} ⭐
              </span>
            ))}
          </div>
        </div>

        {/* Special Weekend Banner */}
        <div className="mb-6 p-4 rounded-2xl relative overflow-hidden shadow-lg" style={{
          background: 'linear-gradient(45deg, #ffeb3b, #ffc107)'
        }}>
          <div className="absolute inset-0 dotted-texture"></div>
          <div className="relative text-center">
            <p className="font-bold text-red-600 text-xl">Now Open Saturdays and Sundays</p>
            <p className="text-blue-800 font-semibold">so you don't have to worry about those Tiny Hat emergencies!</p>
            <p className="text-purple-600 font-semibold mt-1">Special this weekend: Free hat sizing with purchase!</p>
          </div>
        </div>

        {/* Featured Product Carousel */}
        <div className="mb-8 relative">
          <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden scalloped border-4 border-purple-200">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300"></div>
            <div className="absolute inset-0 fabric-texture opacity-10"></div>
            
            {/* Navigation buttons */}
            <button 
              onClick={prevProduct}
              className="absolute z-40 left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600 z-10 font-bold text-xl"
            >
              ←
            </button>
            <button 
              onClick={nextProduct}
              className="absolute z-40 right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600 z-10 font-bold text-xl"
            >
              →
            </button>

            <div className="flex items-center gap-8 relative z-10">
              <div className="w-1/2">
                <div className="relative" style={{animation: 'float-gentle 3s ease-in-out infinite'}}>
                  <img 
                    src={products[currentProductIndex].image}
                    alt={products[currentProductIndex].name}
                    className="w-full h-80 object-cover rounded-2xl shadow-xl border-4 border-yellow-200"
                  />
                  {products[currentProductIndex].new && (
                    <div className="absolute -top-3 -right-3 bg-red-400 text-white px-4 py-2 rounded-full font-bold shadow-lg transform rotate-12">
                      NEW!
                    </div>
                  )}
                </div>
              </div>
              
              <div className="w-1/2">
                <h2 className="text-3xl font-bold text-purple-800 mb-3 font-serif">
                  {products[currentProductIndex].name}
                </h2>
                <div className="text-4xl font-bold text-pink-600 mb-4">
                  {products[currentProductIndex].price}
                </div>
                <p className="text-gray-700 mb-6 text-lg p-4 leading-relaxed">
                  {products[currentProductIndex].description}
                </p>
                <button 
                  onClick={() => setShowAppointment(true)}
                  className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                >
                  Add to Collection
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-6 font-serif">Our Delightful Selection</h2>
        <div className="grid grid-cols-4 gap-4 mb-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer border-2 border-purple-100 relative overflow-hidden"
              style={{animation: 'sway 4s ease-in-out infinite', animationDelay: `${product.id * 0.2}s`}}
            >
              <div className="absolute inset-0 fabric-texture opacity-5"></div>
              <div className="relative z-10">
                <div className="relative mb-3">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 object-cover rounded-xl"
                  />
                  <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-bold text-purple-600 shadow">
                    ⭐ 5
                  </div>
                </div>
                <h3 className="font-bold text-purple-800 mb-1 text-sm">{product.name}</h3>
                <p className="text-pink-600 font-bold text-lg mb-2">{product.price}</p>
                <p className="text-gray-600 text-xs mb-3">{product.description}</p>
                <button 
                  onClick={() => setShowAppointment(true)}
                  className="w-full py-2 bg-purple-100 text-purple-700 rounded-full font-semibold hover:bg-purple-200 transition-colors text-sm"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Did You Know Section */}
        <div className="mb-8 p-6 rounded-3xl shadow-xl relative overflow-hidden" style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }}>
          <div className="absolute inset-0 wood-texture opacity-20"></div>
          <h3 className="text-2xl font-bold text-white mb-4 relative z-10 font-serif">Did You Know?</h3>
          <ul className="space-y-3 text-white relative z-10">
            <li className="flex items-start">
              <span className="text-yellow-300 mr-2">★</span>
              <span>Wear a tiny hat under your normal sized hat <em className="text-yellow-300">(it's your secret!)</em></span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-300 mr-2">★</span>
              <span>Our tiny hats are perfect for small men, babies, and pets too!</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-300 mr-2">★</span>
              <span>Tiny Hats look amazing as cake and pie decorations!</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-300 mr-2">★</span>
              <span><strong className="text-yellow-300">NEW!</strong> Now available in XL sizes for slightly larger tiny needs!</span>
            </li>
          </ul>
          <div className="flex justify-between items-center mt-4 pt-3 relative z-10" style={{ borderTop: '2px solid rgba(255,255,255,0.3)' }}>
            <span className="font-bold text-yellow-300">Handcrafted since 1997</span>
            <span className="text-xs px-3 py-1 rounded-full bg-blue-400 text-white font-bold">TH Quality Guarantee</span>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 rounded-3xl p-8 mb-8 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 dotted-texture"></div>
          <h2 className="text-3xl font-bold text-center text-purple-800 mb-8 font-serif relative z-10">Happy Tiny Hat Customers</h2>
          <div className="grid grid-cols-3 gap-6 relative z-10">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-md relative overflow-hidden">
                <div className="absolute inset-0 fabric-texture opacity-5"></div>
                <p className="text-gray-700 italic mb-4 relative z-10">"{testimonial.text}"</p>
                <p className="font-bold text-purple-600 relative z-10">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Banner */}
        <div className="mb-8 p-4 rounded-2xl text-center relative overflow-hidden shadow-lg" style={{
          background: 'linear-gradient(90deg, #ff6b6b, #ffd93d, #6bcf7f, #4d9de0, #e15759, #ff6b6b)',
          backgroundSize: '600% 100%'
        }}>
          <div className="absolute inset-0 fabric-texture opacity-20"></div>
          <p className="font-bold text-white text-xl relative z-10">Tiny Hats is a proud partner with Dingle's Hat Experience!</p>
          <p className="text-sm text-white relative z-10">Show your Dingle's receipt for 10% off your next Tiny Hat purchase</p>
        </div>

        {/* Footer Banner */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-10 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 wood-texture opacity-20"></div>
          <h2 className="text-4xl font-bold mb-4 font-serif relative z-10">Join the Tiny Hat Club Today!</h2>
          <p className="text-xl mb-6 relative z-10">Get exclusive access to limited edition miniature masterpieces</p>
          <button 
            onClick={() => setShowAppointment(true)}
            className="px-10 py-4 bg-white text-purple-600 rounded-full font-bold text-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all relative z-10"
          >
            Become a Member
          </button>
        </div>
      </div>

      {/* Appointment Modal */}
      {showAppointment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4">
          <div className="relative max-w-2xl w-full">
            <button 
              onClick={() => setShowAppointment(false)}
              className="absolute -top-4 -right-4 z-10 w-10 h-10 bg-purple-500 text-white rounded-full hover:bg-purple-600 font-bold shadow-lg"
            >
              ✕
            </button>
            <BookAnAppointment
              productName="Tiny Hats"
              offerTitle="Tiny Hat Consultation"
              offerText="Schedule a personalized fitting session with our miniature headwear specialists. We'll help you find the perfect tiny hat!"
              offerDisclaimer="Sessions conducted via our patented Tiny-Vision technology. Regular-sized people may experience wonder."
              buttonText="Book Consultation"
              certificationBody="Tiny Hat Institute of Miniature Excellence"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TinyHats;