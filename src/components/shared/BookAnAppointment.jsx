import React, { useState } from 'react';

const BookAnAppointment = ({ 
  productName,
  offerTitle = "Special Offer!",
  offerText,
  offerDisclaimer,
  buttonText = "Schedule Appointment",
  certificationBody = "CINCO™ Digital Department of Innernette™ Safety",
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
                CINCO™ REFERENCE: {Math.random().toString(36).substr(2, 9).toUpperCase()}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookAnAppointment;