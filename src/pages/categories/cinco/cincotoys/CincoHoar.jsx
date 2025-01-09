import React from 'react';
import CincoToysLayout from '../../../../components/layout/CincoToysLayout';
import BookAnAppointment from '../../../../components/shared/BookAnAppointment';

const CincoHoar = () => {

  const productImages = [
    "images/pages/categories/cinco/cincotoys/CincoHoar/hoar.PNG", // Full H'oar view
    "images/pages/categories/cinco/cincotoys/CincoHoar/hoar2.PNG", // Coin slot close-up
    "images/pages/categories/cinco/cincotoys/CincoHoar/hoar3.PNG", // Action shot of riding
  ];

  const processSteps = [
    {
      title: "Insert Coin",
      description: "Place one genuine CINCO™ coin into the patented coin slot. DO NOT use quarters or unauthorized currency.",
      warning: "Use of non-CINCO™ coins may cause irregular bucking patterns",
      image: "images/pages/categories/cinco/cincotoys/CincoHoar/start.PNG"
    },
    {
      title: "Mount Your H'oar",
      description: "Climb aboard your new friend! The unique combination of boar head, horse body, and hog legs provides maximum instability.",
      warning: "Mounting from the left side may trigger aggressive snorting",
      image: "images/pages/categories/cinco/cincotoys/CincoHoar/step1.PNG"
    },
    {
      title: "Hold On Tight",
      description: "Experience the thrill of going Buckwild and Hogwild simultaneously! Perfect for Pep-Peps and CINCO™ Boys alike.",
      warning: "H'oar may become overly excited during full moons",
      image: "images/pages/categories/cinco/cincotoys/CincoHoar/step2.PNG"
    },
    {
      title: "Maintenance",
      description: "Apply H'oar de toilette liberally when decomposition begins. Available separately for just 100 CINCO™ coins.",
      warning: "Do not ask about the horse body's origin",
      image: "images/pages/categories/cinco/cincotoys/CincoHoar/end.PNG"
    }
  ];

  const features = [
    {
      title: "Hybrid Design",
      description: "Featuring genuine boar head, authentic horse body, and real hog legs from sustainable* sources",
      icon: "🐗"
    },
    {
      title: "Coin Operation",
      description: "Premium coin slot accepts only genuine CINCO™ coins (available in 3.5 coin packs for $1.37)",
      icon: "🪙"
    },
    {
      title: "Eco-Friendly",
      description: "Made from recycled parts of other CINCO™ products like H'amb and Ham'bsters",
      icon: "♻️"
    }
  ];

  const customerReviews = [
    {
      text: "I love my H'oar, I ride her every day.",
      image: "images/pages/categories/cinco/cincotoys/CincoHoar/bobbystoan.PNG",
      author: "Bobby Stoan",
      verified: true
    },
    {
      text: "H'oar this H'oar that, when are they going to come out with the S'hitter? My D'ump is getting lonely!",
      image: "images/pages/categories/cinco/cincotoys/CincoHoar/mariab.PNG",
      author: "Maria B.",
      verified: true
    },
    {
      text: "Who needs a relationship when this H'oar is so cheap!",
      image: "images/pages/categories/cinco/cincotoys/CincoHoar/jaimestevens.PNG",
      author: "Jaime Stevens",
      verified: true
    },
    {
      text: "CINCO™ gave me the rights to the H'oar for dirt cheap. Coming soon: Grum: Call of H'oarez.",
      image: "images/pages/categories/cinco/cincotoys/CincoHoar/glentennis.jpg",
      author: "Glen Tennis",
      verified: true
    }
  ];

  const warnings = [
    "CINCO™ is not responsible for any injuries sustained while going Buckwild and/or Hogwild",
    "H'oar may begin decomposition process at any time without warning",
    "Do not attempt to feed your H'oar - it is not technically alive",
    "H'oar de toilette must be applied every 4-6 hours during decomposition phase",
    "Keep away from other CINCO™ products like B'ougar, B'owl, D'ump, and T'ird to prevent territorial disputes",
    "If H'oar begins speaking in tongues, immediately dispose of coins and contact CINCO™ support"
  ];


  return (
    <CincoToysLayout
      productName="CINCO™ H'oar"
      tagline="Go Buckwild and Hogwild AT THE SAME TIME!"
      productImages={productImages}
      processSteps={processSteps}
      features={features}
      customerReviews={customerReviews}
      warnings={warnings}
    >
      <BookAnAppointment 
        productName="CINCO™ H'oar"
        offerTitle="Special Opening Night Offer!"
        offerText="Order now and receive 5.25 CINCO™ coins FREE with your H'oar!"
        offerDisclaimer="H'oar de toilette sold separately. No quarters."
        buttonText="Mount Your H'oar Tonight"
        certificationBody="Department of Hybrid Recreational Devices"
      />
    </CincoToysLayout>
  );
};

export default CincoHoar;