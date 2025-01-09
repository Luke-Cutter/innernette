import React, { useState } from 'react';
import TestimonialCard from '../../../../components/shared/TestimonialCard';

const Dialog = ({ open, onClose, children }) => {
    if (!open) return null;
    
    return (
      <div 
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <div 
          className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4" 
          onClick={e => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    );
};
  
const BallsInsurance = () => {
  const [showApplication, setShowApplication] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ballIncidents, setBallIncidents] = useState('0-1');
  
  const testimonials = [
    {
      name: "Prance Stuard",
      image: "images/pages/categories/health/CincoBallsInsurance/prancestuard.PNG",
      quote: "I was hit in the balls 3 times last month. Thanks to CINCO™ Balls Insurance, I made $900!"
    },
    {
      name: "Steve Mahanahan",
      image: "images/pages/categories/health/CincoBallsInsurance/stevemahanahan.PNG",
      quote: "After my 5th ball injury this year from my child clowns, I've made enough to buy a new TV. Great service!"
    },
    {
      name: "Ball Puncher",
      image: "images/pages/categories/health/CincoBallsInsurance/ballpuncher.PNG",
      quote: "I am the harbringer of pain and I live to inflict discomfort on the lives of the well-endowed."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setShowApplication(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-100 p-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-4">
        <div className="bg-gradient-to-b from-gray-600 to-blue-600 text-white p-8 rounded-lg shadow-2xl border-4 border-blue-200/30">
          <div className="flex justify-center mb-2">
            <img 
              className="w-32 h-16 mb-2 border-white border-2" 
              src="images/pages/categories/health/CincoBallsInsurance/cincoinsurancegroup.PNG" 
              alt="Cinco Insurance Group Logo"
            />
          </div>
          <div className="font-serif tracking-wider text-blue-200 mb-2">OFFICIAL DOCUMENT - FORM B4-LL5</div>
          <h1 className="text-5xl font-bold mb-4 font-serif bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
            CINCO™ Balls Insurance
          </h1>
          <p className="text-xl mb-6 text-blue-200 font-light tracking-wide">Protecting Your Most Valuable Assets</p>
          <div className="text-2xl font-mono bg-blue-950/50 backdrop-blur-sm inline-block px-8 py-4 rounded-lg border-2 border-blue-400/30">
            <span className="text-blue-200">Premium Rate:</span>
            <br />
            <span className="text-2xl font-bold text-white">$39.99<sup>97/100</sup></span>
            <span className="text-blue-300 text-sm">/month</span>
          </div>
          <p className="text-sm mt-4 text-blue-300 font-light">*Terms, conditions, and ball-related clauses apply per CINCO™ Legal Document L3-GB7</p>
        </div>
      </div>

      {/* Check Image */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="relative">
          <img 
            className="rounded-lg w-full h-72 object-cover border-4 border-blue-600 shadow-2xl" 
            src="images/pages/categories/health/CincoBallsInsurance/check.PNG" 
            alt="Insurance Check Example"
          />
          <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-2 rounded-bl-lg font-mono text-sm">
            EXAMPLE PAYOUT DOCUMENT
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/80 to-transparent p-6">
            <p className="text-white text-xl font-serif">Receive $300 per Verified Incident</p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-b from-gray-700 to-blue-600 p-6 rounded-lg shadow-2xl border border-blue-400/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-blue-200 font-serif">Coverage Benefits</h3>
              <div className="text-xs text-blue-400 font-mono">REF: CB-001</div>
            </div>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                $300 per verified ball incident
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                24/7 ball emergency hotline
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                Free ice pack delivery service
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                Monthly ball health newsletter
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-b from-gray-700 to-blue-600 p-6 rounded-lg shadow-2xl border border-blue-400/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-blue-200 font-serif">What's Covered</h3>
              <div className="text-xs text-blue-400 font-mono">REF: WC-002</div>
            </div>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                Accidental impacts
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                Sports-related incidents
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                Work-related mishaps
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                Pet-induced trauma
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-b from-gray-700 to-blue-600 p-6 rounded-lg shadow-2xl border border-blue-400/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-blue-200 font-serif">Why Choose Us</h3>
              <div className="text-xs text-blue-400 font-mono">REF: WU-003</div>
            </div>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                No medical exam required
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                Quick claim processing
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                No questions asked*
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                Digital ball verification
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Happy Customers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto text-center">
        <button
          onClick={() => setShowApplication(true)}
          className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-xl font-bold px-12 py-4 rounded-full 
                     shadow-lg transform hover:scale-105 transition-all"
        >
          Protect Your Balls Today!
        </button>
        <p className="text-sm text-blue-600 mt-4">
          *CINCO™ is not responsible for any permanent ball damage, loss of fertility, or emotional trauma
        </p>
        <div className="flex justify-center mt-4">
          <img 
            className="w-16 h-8" 
            src="images/pages/categories/health/CincoBallsInsurance/cincoinsurancegroup.PNG" 
            alt="Cinco Insurance Group Logo"
          />
        </div>
      </div>

      {/* Application Modal */}
      <Dialog 
        open={showApplication} 
        onClose={() => !submitted && setShowApplication(false)}
      >
        <div className="p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Quick Application</h2>
              <div>
                <label className="block text-blue-800 mb-2">Previous Ball Incidents (last 12 months)</label>
                <select
                  value={ballIncidents}
                  onChange={(e) => setBallIncidents(e.target.value)}
                  className="w-full p-2 border border-blue-300 rounded"
                >
                  <option value="0-1">0-1 incidents</option>
                  <option value="2-5">2-5 incidents</option>
                  <option value="6-10">6-10 incidents</option>
                  <option value="10+">10+ incidents (high risk)</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700"
              >
                Submit Application
              </button>
              <p className="text-xs text-blue-600">
                By submitting, you agree to random ball inspections and waive all rights to future ball-related litigation
              </p>
            </form>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Application Approved!</h2>
              <p className="text-blue-700">Welcome to the CINCO™ family!</p>
              <p className="text-sm text-blue-600 mt-4">
                Please prepare your balls for the mandatory verification photoshoot
              </p>
            </div>
          )}
        </div>
      </Dialog>
    </div>
  );
};

export default BallsInsurance;