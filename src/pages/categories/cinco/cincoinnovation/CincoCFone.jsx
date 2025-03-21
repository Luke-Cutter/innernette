import React from 'react';
import CincoProductLayout from '../../../../components/layout/CincoProductLayout';
import BookAnAppointment from '../../../../components/shared/BookAnAppointment';

const CincoCFone = () => {
  const productImages = [
    "images/pages/categories/cinco/CincoCFone/logo.PNG",
    "images/pages/categories/cinco/CincoCFone/phone.PNG",
    "images/pages/categories/cinco/CincoCFone/onecall.PNG",
    "images/pages/categories/cinco/CincoCFone/2nddegree.PNG",
    "images/pages/categories/cinco/CincoCFone/gel.PNG",
    "images/pages/categories/cinco/CincoCFone/ebjclose.PNG",
    "images/pages/categories/cinco/CincoCFone/ebjbackstage.PNG"
    

  ];

  const processSteps = [
    {
      title: "Button Activation",
      description: "Press the single button to initiate your one available call",
      warning: "Button may require significant force to activate",
      image: "images/pages/categories/cinco/CincoCFone/activation.PNG"
    },
    {
      title: "Antenna Deployment",
      description: "Open both antennas fully for maximum reception (minimum 6 feet clearance required)",
      warning: "Antennas may become permanently extended",
      image: "images/pages/categories/cinco/CincoCFone/deployment.PNG"
    },
    {
      title: "Number Input",
      description: "Carefully time your button presses to enter the desired phone number",
      warning: "Mistakes cannot be corrected - start over with new battery",
      image: "images/pages/categories/cinco/CincoCFone/dialing.PNG"
    },
    {
      title: "Cooling Application",
      description: "Apply generous amounts of cooling gel to combat extreme heat generation",
      warning: "Gel is highly addictive",
      image: "images/pages/categories/cinco/CincoCFone/cooling.PNG"
    }
  ];

  const features = [
    {
      title: "Single Button Design",
      description: "Revolutionary one-button interface eliminates confusion of multiple buttons",
      icon: "⭕"
    },
    {
      title: "No Incoming Calls",
      description: "Breakthrough technology makes it impossible to receive unwanted calls",
      icon: "📵"
    },
    {
      title: "Dual Antennas",
      description: "Two fully-extending antennas for maximum signal penetration",
      icon: "📡"
    }
  ];

  const customerReviews = [
    {
      text: "The cooling gel changed my life! The phone's okay too I guess. I may be the only one who bought this product. CINCO™ gave me one for free for doing the commercial.",
      author: "Ed Begley Jr.",
      image: "images/pages/categories/cinco/CincoCFone/EdBegleyJr.PNG",
      verified: true
    },
    {
        text: "Bought it, made a phone call, and had to wait while my wife put on a manhunt to find me for it to charge. CINCO™, can I have a refund? You caused me, my wife, my step-pepper, and my boy Spray a lot of emotional harm.",
        author: "Luke Cutter [NEARLY BANNED USER, NOT VALID, NO REFUNDS ON C-FONE™]",
        verified: false
      },
  ];

  const warnings = [
    "Battery life limited to one (1) phone call per charge",
    "2-hour minimum charging time between calls",
    "Cooling gel may cause dependency",
    "Weight may cause structural damage to pockets",
    "Phone temperature may exceed 300°F during normal operation",
    "Antennas require minimum 6-foot ceiling clearance",
    "Not responsible for cooling gel addiction",
    "Do not attempt to receive calls - it's literally impossible",
    "May cause permanent shoulder damage from carrying"
  ];

  return (
    <CincoProductLayout
      productName="CINCO™ C-Fone"
      tagline="The Most Phone You'll Ever Need Once"
      productImages={productImages}
      processSteps={processSteps}
      features={features}
      customerReviews={customerReviews}
      warnings={warnings}
    >
      <BookAnAppointment 
        productName="CINCO™ C-Fone"
        offerTitle="Limited Time Communication Package!"
        offerText="Purchase now and receive a lifetime supply of cooling gel! (Average human lifetime: 1-2 calls)"
        offerDisclaimer="CINCO™ not responsible for gel-related dependencies or structural damage to clothing"
        buttonText="Make Your One Call Count"
        certificationBody="Bureau of Simplified Communications"
      />
    </CincoProductLayout>
  );
};

export default CincoCFone;