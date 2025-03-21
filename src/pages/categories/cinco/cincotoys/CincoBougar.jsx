import React from 'react';
import CincoToysLayout from '../../../../components/layout/CincoToysLayout';

const CincoBougar = () => {
    const productImages = [
        "images/pages/categories/cinco/cincotoys/CincoBougar/Bougar1.PNG", 
        "images/pages/categories/cinco/cincotoys/CincoBougar/Bougar2.PNG", 
        "images/pages/categories/cinco/cincotoys/CincoBougar/Bougar3.PNG", 
      ];

  const processSteps = [
    {
      title: "Step 1: Placement",
      description: "Position B'ougar at foot of bed (or in pocket for travel version)",
      icon: "🛏️"
    },
    {
      title: "Step 2: Sleep",
      description: "Attempt normal sleep routine while aware of B'ougar's presence",
      icon: "😴"
    },
    {
      title: "Step 3: Wake Up",
      description: "Experience rational fear upon discovering B'ougar is still there",
      icon: "😱"
    },
    {
      title: "Step 4: Relief",
      description: "Feel relieved knowing your fear has a logical source",
      icon: "😌"
    }
  ];

  const features = [
    {
      title: "Scientifically Engineered Fear",
      description: "Combines scariest-sounding and scariest-looking animals",
      icon: "🧬"
    },
    {
      title: "Persistent Presence",
      description: "Cannot be permanently disposed of (unlike B'owl)",
      icon: "♾️"
    },
    {
      title: "Reality Anchor",
      description: "Provides tangible source for previously irrational fears",
      icon: "⚓"
    }
  ];

  const customerReviews = [
    {
      text: "Me me want B'ougar",
      author: "Bobby Stoan",
      verified: true
    },
    {
      text: "My B'ougar keeps my B'owl company when it relocates to my room at night.",
      author: "Pierre Henri",
      verified: true
    },
    {
      text: "Sweet B'ougar! Makes me feel safe knowing what's making those growling sounds.",
      author: "Dr. Steve Brule",
      verified: true
    },
    {
      text: "You may need to use my Poop Tube after seeing B'ougar, Buy one at my Nettesite™: https://innernette.cinco/CincoPoopTube",
      author: "B.M. Fahrtz",
      verified: true
    }
];

  const warnings = [
    "B'ougar is not responsible for additional irrational fears",
    "Do not attempt to determine which animal parts were used",
    "Pocket B'ougar may expand to full size without notice",
    "B'ougar cannot be permanently removed from premises",
    "May interact unpredictably with other CINCO™ products (especially B'owl)",
    "Do not attempt to rationalize fears unrelated to B'ougar",
    "If B'ougar appears in dreams, consult CINCO™ dream specialist",
    "Keep away from D'ump to prevent wilderness incidents",
    "B'ougar fear is non-transferable between households",
    "May cause excessive rationalization of otherwise irrational situations",
    "NEVER COMBINE B'OUGAR USAGE WITH THE CINCO™ DREAM CREAM"
  ];

  return (
    <CincoToysLayout
      productName="CINCO™ B'ougar"
      tagline="HAVE SOMETHING REAL TO FEAR WHEN YOU WAKE UP!"
      productImages={productImages}
      processSteps={processSteps}
      features={features}
      customerReviews={customerReviews}
      warnings={warnings}
    />
  );
};

export default CincoBougar;