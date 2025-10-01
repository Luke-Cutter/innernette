import React, { useState, useEffect } from 'react';

const BookAnAppointment = ({ 
  productName,
  offerTitle = "Special Offer!",
  offerText,
  offerDisclaimer,
  buttonText = "Schedule Appointment",
  certificationBody = "CINCOTM Digital Department of InnernetteTM Safety",
}) => {
  const [showPopup, setShowPopup] = useState(false);

  const generateCertificationId = () => {
    return `ET-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  };

  const handleSchedule = () => {
    setShowPopup(true);
    // Auto-hide popup after 10 seconds
    setTimeout(() => setShowPopup(false), 10000);
  };

  return (
    <div className="space-y-8 relative">
      {/* Special Offer Section */}
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

      {/* Certification Notice */}
      <div className="bg-white rounded-lg p-4 shadow-lg border-2 bg-gradient-to-r from-red-50 via-white to-red-50 border-cyan-200">
        <p className="text-center text-cyan-700 font-mono text-xs">
          {productName} is certified by the {certificationBody}
          <br />
          Certification ID: {generateCertificationId()}
        </p>
      </div>

      {/* Popup Message */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
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
                CINCOTM SCHEDULING NOTICE
              </h3>
              
              <div className="space-y-3 text-cyan-800">
                <p>
                  We apologize, but CINCOTM momentarily forgot the InnernetteTM was offline! 
                </p>
                <p>
                  Please contact us at 1-800-CINCOTM-55 to schedule your appointment with our next available representative.
                </p>
                <p className="text-sm italic">
                  We apologize for any inconvenience this may have caused. Your business is important to us!
                </p>
              </div>

              <div className="text-xs font-mono text-cyan-600 pt-4 border-t border-cyan-200">
                CINCOTM REFERENCE: {Math.random().toString(36).substr(2, 9).toUpperCase()}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const TinyHats = () => {
  // Product data with names and prices matching the image
  const products = [
    { id: 1, name: "Captain's Hat", price: "$19.95", image: "/api/placeholder/180/160", description: "Perfect for tiny boat captains and maritime enthusiasts!" },
    { id: 2, name: "Cowboy Hat with Rope", price: "$29.95", image: "/api/placeholder/180/160", featured: true, description: "Our best-seller! Includes authentic miniature lasso rope." },
    { id: 3, name: "Party Hat", price: "$14.95", image: "/api/placeholder/180/160", description: "Celebrate in style with our colorful cone-shaped tiny party hat!" },
    { id: 4, name: "Tiny Top Hat", price: "$24.95", image: "/api/placeholder/180/160", description: "Elegant and sophisticated. Perfect for formal tiny occasions." },
    { id: 5, name: "XL Tiny Hat", price: "$34.95", image: "/api/placeholder/180/160", new: true, description: "Our new XL line - for when you need a slightly larger tiny hat!" },
    { id: 6, name: "Baby Hat", price: "$12.95", image: "/api/placeholder/180/160", description: "Adorable mini-hats for the littlest heads!" },
    { id: 7, name: "Cake Topper Hat", price: "$9.95", image: "/api/placeholder/180/160", description: "Make your desserts fancy with edible-compatible tiny hats!" },
    { id: 8, name: "Secret Hat", price: "$17.95", image: "/api/placeholder/180/160", description: "Ultra thin design fits under regular hats. Nobody will know!" },
  ];

  // Testimonials
  const testimonials = [
    { name: "Peewee Paul", text: "I never leave home without my Tiny Hat collection!" },
    { name: "Mini Martha", text: "The cake toppers were a hit at my daughter's wedding!" },
    { name: "Lil' Larry", text: "I wear my Secret Hat everywhere. It's my little secret!" },
  ];

  // Special promotions
  const promotions = [
    "Buy 3 Tiny Hats, get a 4th Tiny Hat 50% off!",
    "Free shipping on orders over $50",
    "Join our Tiny Hat Club for exclusive monthly hat drops!",
    "Students get 10% off with valid ID",
    "Now accepting PayPal and checks!",
    "Call 1-800-TINY-HAT for phone orders!",
  ];

  // State for current product view
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("products");
  const [marqueePosition, setMarqueePosition] = useState(0);
  const [sparkles, setSparkles] = useState([]);
  const [showAppointment, setShowAppointment] = useState(false);
  
  // Navigation functions
  const nextProduct = () => {
    setCurrentProductIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentProductIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  // Marquee animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setMarqueePosition((prev) => (prev - 1) % 800);
    }, 25);
    return () => clearInterval(interval);
  }, []);

  // Sparkle animation
  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 2,
      }));
      setSparkles(newSparkles);
    };
    generateSparkles();
    const interval = setInterval(generateSparkles, 3000);
    return () => clearInterval(interval);
  }, []);

  // Categories from the sidebar in the image
  const categories = [
    "about", "locations", "tiny hats", "small hats", "business", "casual", 
    "for laughs", "special occasion", "adult", "babies", "cakes and pies", 
    "extra large tiny hats", "sales", "special events", "contact us"
  ];

  const renderSection = () => {
    switch(activeSection) {
      case "products":
        return (
          <div className="relative overflow-hidden" style={{
            background: 'linear-gradient(45deg, #f0f8ff 0%, #e6f3ff 25%, #fff0f5 50%, #f0fff0 75%, #fffacd 100%)',
            border: '3px solid #4169e1',
            borderRadius: '8px',
            boxShadow: 'inset 0 0 20px rgba(65, 105, 225, 0.3), 0 0 20px rgba(255, 192, 203, 0.5)',
            padding: '16px'
          }}>
            {/* Sparkle effects */}
            {sparkles.map((sparkle) => (
              <div
                key={sparkle.id}
                className="absolute animate-ping"
                style={{
                  left: `${sparkle.x}%`,
                  top: `${sparkle.y}%`,
                  width: `${sparkle.size}px`,
                  height: `${sparkle.size}px`,
                  background: '#fff',
                  borderRadius: '50%',
                  animationDelay: `${sparkle.delay}s`,
                  boxShadow: '0 0 6px #fff',
                }}
              />
            ))}
            
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, transparent 20%, rgba(255, 192, 203, 0.3) 21%, rgba(255, 192, 203, 0.3) 34%, transparent 35%, transparent), linear-gradient(0deg, transparent 24%, rgba(255, 255, 0, 0.3) 25%, rgba(255, 255, 0, 0.3) 26%, transparent 27%, transparent 74%, rgba(255, 255, 0, 0.3) 75%, rgba(255, 255, 0, 0.3) 76%, transparent 77%, transparent)',
              backgroundSize: '50px 50px',
              animation: 'float 4s ease-in-out infinite'
            }} />
            
            {/* Navigation bar */}
            <div className="absolute top-2 right-2 flex space-x-1 z-10">
              <button 
                onClick={prevProduct}
                className="w-8 h-8 text-white font-bold flex items-center justify-center rounded hover:scale-110 transition-transform"
                style={{
                  background: 'linear-gradient(45deg, #ff6b6b, #ff8e8e)',
                  border: '2px solid #ff1744',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.3)'
                }}
              >
                ◀
              </button>
              <button 
                onClick={nextProduct}
                className="w-8 h-8 text-white font-bold flex items-center justify-center rounded hover:scale-110 transition-transform"
                style={{
                  background: 'linear-gradient(45deg, #4ecdc4, #6ee6dd)',
                  border: '2px solid #00acc1',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.3)'
                }}
              >
                ▶
              </button>
            </div>
            
            {/* Rotating promotional banner */}
            <div className="relative h-10 mb-4 overflow-hidden rounded-lg" style={{
              background: 'linear-gradient(90deg, #ff6b6b, #ffd93d, #6bcf7f, #4d9de0, #e15759, #ff6b6b)',
              backgroundSize: '600% 100%',
              animation: 'rainbow 3s linear infinite',
              border: '2px solid #fff',
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.8), inset 0 0 10px rgba(0, 0, 0, 0.1)'
            }}>
              <div 
                className="absolute whitespace-nowrap py-2 font-bold text-white"
                style={{ 
                  transform: `translateX(${marqueePosition}px)`,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
                }}
              >
                {promotions.map((promo, index) => (
                  <span key={index} className="inline-block mx-6 text-lg">
                    ★ {promo} ★
                  </span>
                ))}
              </div>
            </div>
            
            {/* Special announcement */}
            <div className="mb-4 p-3 rounded-lg relative overflow-hidden" style={{
              background: 'linear-gradient(45deg, #ffeb3b, #ffc107)',
              border: '3px solid #ff9800',
              boxShadow: '0 0 15px rgba(255, 152, 0, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.3)'
            }}>
              <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)',
              }} />
              <div className="relative">
                <span className="font-black text-red-600 text-lg animate-pulse drop-shadow-lg">Now Open Saturdays and Sundays</span>
                <span className="block mt-1 text-blue-800 font-bold">so you don't have to worry about those Tiny Hat emergencies!</span>
                <span className="block mt-1 text-purple-600 animate-bounce font-bold">Special this weekend: Free hat sizing with purchase!</span>
              </div>
            </div>
            
            {/* Featured product - Cowboy Hat with Rope */}
            <div className="mb-6 p-4 rounded-lg relative overflow-hidden" style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: '3px solid #fff',
              boxShadow: '0 0 20px rgba(102, 126, 234, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.2)'
            }}>
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
                backgroundSize: '20px 20px'
              }} />
              <div className="flex items-center relative">
                <div className="w-1/3">
                  <div className="relative">
                    <img 
                      src="/api/placeholder/180/160" 
                      alt="Cowboy Hat with Rope"
                      className="w-full object-contain rounded-lg shadow-xl transform hover:rotate-6 transition-transform"
                      style={{
                        border: '4px solid #fff',
                        boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)'
                      }}
                    />
                    <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full animate-bounce font-black text-white" style={{
                      background: 'linear-gradient(45deg, #ff1744, #ff5722)',
                      boxShadow: '0 0 10px rgba(255, 23, 68, 0.8)',
                      fontSize: '12px'
                    }}>
                      HOT!
                    </div>
                  </div>
                </div>
                <div className="w-2/3 pl-4">
                  <h2 className="text-2xl font-black text-white mb-2" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
                    Cowboy Hat with Rope
                  </h2>
                  <div className="text-2xl font-black text-yellow-300 mb-2" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
                    $29.95
                  </div>
                  <p className="text-white mb-2" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
                    Our signature tiny cowboy hat complete with miniature lasso rope. Made with authentic tiny materials!
                  </p>
                  <div className="text-sm text-yellow-200 mb-3" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
                    Available in: Brown, Black, Red, Tiny Blue
                  </div>
                  <button 
                    onClick={() => setShowAppointment(true)}
                    className="px-4 py-2 rounded-lg text-white font-bold hover:scale-105 transition-transform" style={{
                    background: 'linear-gradient(45deg, #e91e63, #f06292)',
                    border: '2px solid #fff',
                    boxShadow: '0 4px 8px rgba(233, 30, 99, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                  }}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            
            {/* Product grid */}
            <h2 className="text-xl font-black text-blue-800 mb-3 pb-2" style={{
              borderBottom: '3px solid #2196f3',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
            }}>
              More Tiny Hats You'll Love
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {[0, 1, 2, 3, 4, 5].map((offset) => {
                const index = (currentProductIndex + offset) % products.length;
                const product = products[index];
                
                // Skip cowboy hat as it's already featured
                if (product.name === "Cowboy Hat with Rope") {
                  return null;
                }
                
                return (
                  <div 
                    key={product.id} 
                    className="flex flex-col items-center p-3 rounded-lg hover:scale-105 transition-transform cursor-pointer relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                      border: '2px solid #fff',
                      boxShadow: '0 4px 8px rgba(240, 147, 251, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                    }}
                  >
                    {product.new && (
                      <div className="absolute -top-2 -right-2 px-2 py-1 rounded-full font-black text-white text-xs" style={{
                        background: 'linear-gradient(45deg, #4caf50, #8bc34a)',
                        boxShadow: '0 0 8px rgba(76, 175, 80, 0.6)'
                      }}>
                        New!
                      </div>
                    )}
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-20 object-contain mb-2 rounded"
                      style={{
                        border: '2px solid #fff',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                      }}
                    />
                    <div className="text-center">
                      <div className="font-bold text-white mb-1" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
                        {product.name}
                      </div>
                      <div className="text-yellow-300 font-black text-lg" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
                        {product.price}
                      </div>
                      <div className="text-xs text-white mt-1" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
                        {product.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Additional info box */}
            <div className="mt-6 pt-4" style={{ borderTop: '3px dashed #ff69b4' }}>
              <div className="p-4 rounded-lg relative overflow-hidden" style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                border: '3px solid #fff',
                boxShadow: '0 0 20px rgba(102, 126, 234, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.2)'
              }}>
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(255,255,255,0.1) 15px, rgba(255,255,255,0.1) 30px)',
                }} />
                <h3 className="text-xl font-black text-white mb-3" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
                  Did You Know?
                </h3>
                <ul className="space-y-3 text-white relative">
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-2 text-lg">★</span> 
                    <span style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
                      Wear a tiny hat under your normal sized hat <em className="text-yellow-300">(it's your secret!)</em>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-2 text-lg">★</span> 
                    <span style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
                      Our tiny hats are perfect for small men, babies, and pets too!
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-2 text-lg">★</span> 
                    <span style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
                      Tiny Hats look amazing as cake and pie decorations!
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-2 text-lg">★</span> 
                    <span style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
                      <strong className="text-yellow-300">NEW!</strong> Now available in XL sizes for slightly larger tiny needs!
                    </span>
                  </li>
                </ul>
                <div className="flex justify-between items-center mt-4 pt-3 relative" style={{ borderTop: '2px solid rgba(255,255,255,0.3)' }}>
                  <span className="font-bold text-yellow-300" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
                    Handcrafted since 1997
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full text-white font-bold" style={{
                    background: 'linear-gradient(45deg, #2196f3, #21cbf3)',
                    boxShadow: '0 0 8px rgba(33, 150, 243, 0.6)'
                  }}>
                    TH Quality Guarantee
                  </span>
                </div>
              </div>
            </div>
            
            {/* Customer testimonials */}
            <div className="mt-6 p-4 rounded-lg relative overflow-hidden" style={{
              background: 'linear-gradient(135deg, #4caf50 0%, #8bc34a 100%)',
              border: '3px solid #fff',
              boxShadow: '0 0 20px rgba(76, 175, 80, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.2)'
            }}>
              <h3 className="text-xl font-black text-white mb-3" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
                Happy Tiny Hat Customers:
              </h3>
              <div className="space-y-3">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="p-3 rounded-lg relative" style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <p className="italic text-white mb-2" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
                      "{testimonial.text}"
                    </p>
                    <p className="text-right font-bold text-yellow-300" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
                      - {testimonial.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Partnership banner */}
            <div className="mt-6 p-3 rounded-lg text-center relative overflow-hidden" style={{
              background: 'linear-gradient(90deg, #ff6b6b, #ffd93d, #6bcf7f, #4d9de0, #e15759, #ff6b6b)',
              backgroundSize: '600% 100%',
              animation: 'rainbow 2s linear infinite',
              border: '3px solid #fff',
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)'
            }}>
              <p className="font-black text-white text-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
                Tiny Hats is a proud partner with Dingle's Hat Experience!
              </p>
              <p className="text-sm text-white" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
                Show your Dingle's receipt for 10% off your next Tiny Hat purchase
              </p>
            </div>
          </div>
        );
      
      case "about":
        return (
          <div className="p-4 rounded-lg relative overflow-hidden" style={{
            background: 'linear-gradient(45deg, #f0f8ff 0%, #e6f3ff 25%, #fff0f5 50%, #f0fff0 75%, #fffacd 100%)',
            border: '3px solid #4169e1',
            boxShadow: 'inset 0 0 20px rgba(65, 105, 225, 0.3), 0 0 20px rgba(255, 192, 203, 0.5)'
          }}>
            <h2 className="text-2xl font-black text-blue-800 mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              About Tiny Hats
            </h2>
            <div className="flex">
              <div className="w-1/4 pr-4">
                <img 
                  src="/api/placeholder/200/300" 
                  alt="Tiny Hats Store" 
                  className="w-full rounded-lg"
                  style={{
                    border: '4px solid #fff',
                    boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)'
                  }}
                />
                <div className="mt-2 text-center text-sm font-bold text-blue-600 p-2 rounded" style={{
                  background: 'rgba(255, 255, 255, 0.7)',
                  border: '2px solid #2196f3'
                }}>
                  Our flagship store
                </div>
              </div>
              <div className="w-3/4 space-y-4">
                <p className="text-blue-900 leading-relaxed">
                  Welcome to Tiny Hats, your premier destination for miniature headwear since 1997! We specialize in the finest tiny hats for all occasions, crafted with love and attention to the smallest details.
                </p>
                <p className="text-blue-900 leading-relaxed">
                  Our founder, Timothy "Tiny Tim" Timmins, started making tiny hats as a hobby while recovering from a regular-sized hat accident. What began as a therapeutic activity soon blossomed into a thriving business when Tim realized the untapped market for quality miniature headwear.
                </p>
                <p className="text-blue-900 leading-relaxed">
                  Today, we're proud to offer over 200 varieties of tiny hats, with new designs added every month. Our hats are handcrafted by a team of dedicated tiny hat artisans using only the finest tiny materials.
                </p>
                <h3 className="text-lg font-bold text-blue-600 mt-4 mb-2">Our Tiny Mission</h3>
                <p className="text-blue-900 leading-relaxed">
                  To bring joy and whimsy to the world, one tiny hat at a time! We believe that everyone deserves to experience the unique happiness that comes from owning a perfectly crafted tiny hat.
                </p>
              </div>
            </div>
            <div className="mt-4 p-3 rounded-lg" style={{
              background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
              border: '2px solid #2196f3',
              boxShadow: 'inset 0 0 10px rgba(33, 150, 243, 0.2)'
            }}>
              <h3 className="font-bold text-blue-800 mb-2">Tiny Hats Gives Back</h3>
              <p className="text-blue-900">
                For every 10 tiny hats sold, we donate one tiny hat to children in need of tiny joy. Our Tiny Hats, Big Smiles program has donated over 15,000 tiny hats to date.
              </p>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="p-4 rounded-lg text-center relative overflow-hidden" style={{
            background: 'linear-gradient(45deg, #f0f8ff 0%, #e6f3ff 25%, #fff0f5 50%, #f0fff0 75%, #fffacd 100%)',
            border: '3px solid #4169e1',
            boxShadow: 'inset 0 0 20px rgba(65, 105, 225, 0.3), 0 0 20px rgba(255, 192, 203, 0.5)'
          }}>
            <h2 className="text-2xl font-black text-blue-800 mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              Under Construction
            </h2>
            <div className="animate-bounce">
              <img src="/api/placeholder/200/200" alt="Construction" className="mx-auto rounded-lg" style={{
                border: '4px solid #fff',
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)'
              }} />
            </div>
            <p className="mt-4 text-blue-900 text-lg">
              This section is being fitted for a new tiny hat! Please check back soon.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen overflow-auto" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
      backgroundSize: '400% 400%',
      animation: 'gradientShift 8s ease infinite',
      padding: '16px'
    }}>
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes rainbow {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
      
      {/* Header with colorful background */}
      <div className="relative w-full h-32 rounded-t-lg overflow-hidden mb-2" style={{
        background: 'linear-gradient(90deg, #ff6b6b, #ffd93d, #6bcf7f, #4d9de0, #e15759, #ff6b6b)',
        backgroundSize: '600% 100%',
        animation: 'rainbow 4s linear infinite',
        border: '4px solid #fff',
        boxShadow: '0 0 30px rgba(255, 255, 255, 0.8), inset 0 0 30px rgba(0, 0, 0, 0.1)'
      }}>
        <div className="absolute inset-0">
          {/* Colorful gelatin-like shapes with textures */}
          <div className="absolute top-2 left-12 w-16 h-16 rounded-full opacity-80 animate-pulse" style={{
            background: 'radial-gradient(circle at 30% 30%, #ff4757, #ff3742)',
            boxShadow: '0 0 20px rgba(255, 71, 87, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.3)'
          }}></div>
          <div className="absolute top-5 left-32 w-18 h-18 rounded-full opacity-80" style={{
            background: 'radial-gradient(circle at 30% 30%, #2ed573, #1dd1a1)',
            boxShadow: '0 0 20px rgba(46, 213, 115, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.3)'
          }}></div>
          <div className="absolute top-10 left-5 w-14 h-14 rounded-full opacity-80" style={{
            background: 'radial-gradient(circle at 30% 30%, #3742fa, #2f3542)',
            boxShadow: '0 0 20px rgba(55, 66, 250, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.3)'
          }}></div>
          <div className="absolute top-3 right-20 w-22 h-22 rounded-full opacity-80" style={{
            background: 'radial-gradient(circle at 30% 30%, #ffa502, #ff6348)',
            boxShadow: '0 0 20px rgba(255, 165, 2, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.3)'
          }}></div>
          <div className="absolute top-6 right-40 w-12 h-12 rounded-full opacity-80 animate-pulse" style={{
            background: 'radial-gradient(circle at 30% 30%, #a55eea, #8854d0)',
            boxShadow: '0 0 20px rgba(165, 94, 234, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.3)'
          }}></div>
          <div className="absolute bottom-2 left-40 w-18 h-10 rounded-full opacity-80" style={{
            background: 'radial-gradient(circle at 30% 30%, #ff9ff3, #f368e0)',
            boxShadow: '0 0 20px rgba(255, 159, 243, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.3)'
          }}></div>
        </div>
        
        {/* PNG Tiny hat icon with Web 2.0 styling */}
        <div className="absolute top-4 left-6 w-20 h-20 flex items-center justify-center">
          <div className="relative">
            {/* Hat crown */}
            <div className="w-12 h-8 rounded-t-full mx-auto" style={{
              background: 'linear-gradient(135deg, #2c2c2c, #000)',
              border: '2px solid #fff',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.2)'
            }}></div>
            {/* Hat brim */}
            <div className="w-20 h-4 rounded-full" style={{
              background: 'linear-gradient(135deg, #2c2c2c, #000)',
              border: '2px solid #fff',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.2)'
            }}></div>
            {/* Hat band */}
            <div className="w-6 h-2 rounded absolute top-5 left-7" style={{
              background: 'linear-gradient(135deg, #ff1744, #d50000)',
              boxShadow: '0 0 5px rgba(255, 23, 68, 0.8)'
            }}></div>
          </div>
        </div>
        
        {/* Title overlay with Web 2.0 text effects */}
        <div className="absolute top-8 left-32 text-5xl font-black text-white" style={{
          textShadow: '4px 4px 8px rgba(0, 0, 0, 0.7), 0 0 20px rgba(255, 255, 255, 0.5)',
          filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))'
        }}>
          TINY HATS
        </div>
        
        {/* Tagline - styled to match the cursive blue text with Web 2.0 glow */}
        <div className="absolute bottom-3 right-20 text-2xl italic text-white font-bold transform -rotate-3" style={{
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7), 0 0 15px rgba(255, 255, 255, 0.8)',
          filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))'
        }}>
          for all your tiny hat needs
        </div>
        
        {/* Now Open banner with more Web 2.0 styling */}
        <div className="absolute top-0 right-0 px-4 py-2 rounded-bl-lg transform rotate-12 shadow-lg font-black text-white" style={{
          background: 'linear-gradient(45deg, #ff1744, #ff5722)',
          border: '2px solid #fff',
          boxShadow: '0 0 15px rgba(255, 23, 68, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
        }}>
          Now Open on Sundays!
        </div>
        
        {/* Enhanced sparkling effects */}
        <div className="absolute top-4 left-28 w-3 h-3 bg-white rounded-full animate-ping" style={{
          boxShadow: '0 0 10px #fff'
        }}></div>
        <div className="absolute top-16 right-24 w-4 h-4 bg-white rounded-full animate-ping delay-300" style={{
          boxShadow: '0 0 10px #fff'
        }}></div>
        <div className="absolute top-24 left-52 w-3 h-3 bg-white rounded-full animate-ping delay-700" style={{
          boxShadow: '0 0 10px #fff'
        }}></div>
      </div>
      
      {/* Top navigation menu with Web 2.0 tabs */}
      <div className="flex space-x-1 text-sm font-bold mb-0">
        <button 
          onClick={() => setActiveSection("products")}
          className={`px-4 py-2 rounded-t-lg transition-all hover:scale-105 ${
            activeSection === "products" 
              ? "text-blue-800 border-2 border-blue-600 border-b-0" 
              : "text-white hover:text-blue-200"
          }`}
          style={activeSection === "products" ? {
            background: 'linear-gradient(135deg, #fff, #f0f8ff)',
            boxShadow: '0 -2px 8px rgba(65, 105, 225, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
          } : {
            background: 'linear-gradient(135deg, #4169e1, #1e3a8a)',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
          }}
        >
          Products
        </button>
        <button 
          onClick={() => setActiveSection("about")}
          className={`px-4 py-2 rounded-t-lg transition-all hover:scale-105 ${
            activeSection === "about" 
              ? "text-blue-800 border-2 border-blue-600 border-b-0" 
              : "text-white hover:text-blue-200"
          }`}
          style={activeSection === "about" ? {
            background: 'linear-gradient(135deg, #fff, #f0f8ff)',
            boxShadow: '0 -2px 8px rgba(65, 105, 225, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
          } : {
            background: 'linear-gradient(135deg, #4169e1, #1e3a8a)',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
          }}
        >
          About Us
        </button>
        <button 
          onClick={() => setActiveSection("locations")}
          className={`px-4 py-2 rounded-t-lg transition-all hover:scale-105 ${
            activeSection === "locations" 
              ? "text-blue-800 border-2 border-blue-600 border-b-0" 
              : "text-white hover:text-blue-200"
          }`}
          style={activeSection === "locations" ? {
            background: 'linear-gradient(135deg, #fff, #f0f8ff)',
            boxShadow: '0 -2px 8px rgba(65, 105, 225, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
          } : {
            background: 'linear-gradient(135deg, #4169e1, #1e3a8a)',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
          }}
        >
          Locations
        </button>
        <button 
          onClick={() => setShowAppointment(true)}
          className="px-4 py-2 rounded-t-lg ml-auto text-white hover:text-yellow-200 transition-all hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #e91e63, #ad1457)',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
          }}
        >
          Cart (0)
        </button>
      </div>
      
      {/* Main content area */}
      <div className="flex bg-white rounded-b-lg shadow-xl" style={{
        border: '4px solid #fff',
        boxShadow: '0 0 30px rgba(255, 255, 255, 0.8), inset 0 0 30px rgba(0, 0, 0, 0.05)'
      }}>
        {/* Left sidebar with enhanced Web 2.0 styling */}
        <div className="w-48 p-3 rounded-bl-lg relative overflow-hidden" style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.1)'
        }}>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)',
          }} />
          
          <div className="relative">
            <div className="text-white py-2 px-3 rounded mb-3 text-center font-black text-sm" style={{
              background: 'linear-gradient(135deg, #1a237e, #000051)',
              border: '2px solid #fff',
              boxShadow: '0 0 10px rgba(26, 35, 126, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
            }}>
              TINY HATS CATALOG
            </div>
            
            <div className="p-2 mb-3 text-xs text-center rounded" style={{
              background: 'linear-gradient(135deg, #ffeb3b, #ffc107)',
              border: '2px solid #ff9800',
              boxShadow: '0 0 10px rgba(255, 152, 0, 0.6)'
            }}>
              <div className="font-black text-red-600 animate-pulse">FLASH SALE!</div>
              <div className="text-red-800 font-bold">50% off all clearance hats</div>
            </div>
            
            <ul className="text-white text-sm space-y-1">
              {categories.map((category, index) => (
                <li 
                  key={index} 
                  className="py-2 px-3 hover:scale-105 cursor-pointer transition-all rounded relative overflow-hidden"
                  style={{
                    background: index === 2 ? 'linear-gradient(135deg, #ff6b6b, #ff5252)' : 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: index === 2 ? '0 0 10px rgba(255, 107, 107, 0.6)' : 'none',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  {index === 2 ? (
                    <span className="font-black">
                      {category} ★
                    </span>
                  ) : (
                    category
                  )}
                </li>
              ))}
            </ul>
            
            <div className="mt-4 p-3 rounded relative overflow-hidden" style={{
              background: 'rgba(255, 255, 255, 0.9)',
              border: '2px solid #fff',
              boxShadow: '0 0 15px rgba(255, 255, 255, 0.8), inset 0 0 15px rgba(102, 126, 234, 0.1)'
            }}>
              <div className="text-center text-sm font-black text-blue-800 mb-2">JOIN OUR MAILING LIST!</div>
              <input 
                type="text" 
                placeholder="Email Address" 
                className="w-full text-xs p-2 rounded mb-2"
                style={{
                  border: '2px solid #2196f3',
                  boxShadow: 'inset 0 2px 4px rgba(33, 150, 243, 0.2)'
                }}
              />
              <button className="w-full text-white text-xs py-2 rounded font-bold hover:scale-105 transition-transform" style={{
                background: 'linear-gradient(135deg, #e91e63, #ad1457)',
                border: '2px solid #fff',
                boxShadow: '0 0 10px rgba(233, 30, 99, 0.6)'
              }}>
                Get Tiny Updates!
              </button>
            </div>
            
            <div className="mt-4 text-center">
              <div className="text-xs text-white font-black mb-2">VISIT US</div>
              <img 
                src="/api/placeholder/120/80" 
                alt="Map" 
                className="mx-auto rounded"
                style={{
                  border: '3px solid #fff',
                  boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)'
                }}
              />
              <div className="text-xs mt-2 text-white font-bold">
                <div>123 Tiny Street</div>
                <div>Smallville, USA</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main content display area */}
        <div className="flex-1 p-4" style={{
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
        }}>
          {renderSection()}
          
          {/* Footer with enhanced Web 2.0 styling */}
          <div className="mt-6 text-center pt-4" style={{ borderTop: '3px solid #2196f3' }}>
            <div className="text-xs text-gray-600 space-y-2">
              <div className="font-black text-blue-700 text-sm">Tiny Hats Website Design by Snurby</div>
              <div className="mt-1">Copyright © 1997-2025 Tiny Hats Inc. All tiny rights reserved.</div>
              <div className="flex justify-center space-x-4 mt-2">
                <button 
                  onClick={() => setShowAppointment(true)}
                  className="text-blue-600 hover:text-blue-800 font-bold hover:underline bg-transparent border-none cursor-pointer"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => setShowAppointment(true)}
                  className="text-blue-600 hover:text-blue-800 font-bold hover:underline bg-transparent border-none cursor-pointer"
                >
                  Terms & Conditions
                </button>
                <button 
                  onClick={() => setShowAppointment(true)}
                  className="text-blue-600 hover:text-blue-800 font-bold hover:underline bg-transparent border-none cursor-pointer"
                >
                  Tiny Hat Care Instructions
                </button>
              </div>
            </div>
            <div className="mt-3 text-xs">
              <div className="animate-pulse text-blue-800 font-black mb-2">
                This site best viewed with Dangus Web Navigator 10000 2 Personal Computation Device
              </div>
              <div className="flex justify-center space-x-3 mt-2">
                <div className="h-6 px-3 py-1 rounded text-white font-bold text-xs" style={{
                  background: 'linear-gradient(135deg, #4caf50, #388e3c)',
                  border: '1px solid #2e7d32'
                }}>
                  Best Viewed
                </div>
                <div className="h-6 px-3 py-1 rounded text-white font-bold text-xs" style={{
                  background: 'linear-gradient(135deg, #ff9800, #f57c00)',
                  border: '1px solid #ef6c00'
                }}>
                  WebRings & CincoScript™
                </div>
                <div className="h-6 px-3 py-1 rounded text-white font-bold text-xs" style={{
                  background: 'linear-gradient(135deg, #2196f3, #1976d2)',
                  border: '1px solid #1565c0'
                }}>
                  Valid HTML
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Visitor counter with Web 2.0 styling */}
      <div className="mt-3 text-center text-xs py-2 px-4 rounded mx-auto w-48 font-mono font-bold" style={{
        background: 'linear-gradient(135deg, #000, #1a1a1a)',
        color: '#00ff00',
        border: '2px solid #333',
        boxShadow: '0 0 20px rgba(0, 255, 0, 0.5), inset 0 0 20px rgba(0, 0, 0, 0.8)',
        textShadow: '0 0 10px #00ff00'
      }}>
        Visitors: 000127598
      </div>

      {/* BookAnAppointment Modal */}
      {showAppointment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative max-w-2xl mx-4">
            <button 
              onClick={() => setShowAppointment(false)}
              className="absolute -top-4 -right-4 z-10 w-8 h-8 bg-red-500 text-white rounded-full hover:bg-red-600 font-bold"
            >
              ✕
            </button>
            <BookAnAppointment
              productName="Tiny Hats"
              offerTitle="Tiny Hat Consultation Available!"
              offerText="Schedule a personalized tiny hat fitting session with our certified Tiny Hat specialists. We'll help you find the perfect tiny hat for your tiny needs!"
              offerDisclaimer="Tiny hat fitting sessions are conducted via our patented Tiny-Vision™ technology. Regular-sized people may experience slight confusion during the process."
              buttonText="Book Tiny Hat Consultation"
              certificationBody="Tiny Hat Institute of Miniature Excellence"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TinyHats;