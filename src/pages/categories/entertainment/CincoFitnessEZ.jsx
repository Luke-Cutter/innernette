import React from 'react';
import CincoProductLayout from '../../../components/layout/CincoProductLayout';
import BookAnAppointment from '../../../components/shared/BookAnAppointment';

const FitnessCanBeEZ = () => {
  const productImages = [
    "images/pages/categories/entertainment/FitnessCanBeEZ/tapes2.PNG",
    "images/pages/categories/entertainment/FitnessCanBeEZ/EZ1.PNG",
    "images/pages/categories/entertainment/FitnessCanBeEZ/tapes.PNG",
    "images/pages/categories/entertainment/FitnessCanBeEZ/GetAFlip.PNG",
    "images/pages/categories/entertainment/FitnessCanBeEZ/Anyone.PNG"
  ];

  const processSteps = [
    {
      title: "Get Off Your Couch",
      description: "Get off that couch so you can transformainto flip master, asshole",
      image: "images/pages/categories/entertainment/FitnessCanBeEZ/EZ1.PNG"
    },
    {
      title: "Flip Acquisition",
      description: "Master Tom Frederiksen's patented 3-step tumbling program",
      warning: "Anyone can do a flip. ANYONE.",
      image: "images/pages/categories/entertainment/FitnessCanBeEZ/GetAFlip.PNG"
    },
    {
      title: "Daily Flip Routine",
      description: "Perform exactly 10 flips for maximum pound elimination",
      warning: "Flip count non-negotiable",
      image: "images/pages/categories/entertainment/FitnessCanBeEZ/Anyone.PNG"
    },
    {
      title: "Bonus Integration",
      description: "Incorporate Glow Bones, Car Tarp, and Taargüs into lifestyle",
      warning: "Globe shape mandatory for storage",
      image: "images/pages/categories/entertainment/FitnessCanBeEZ/glowbones.PNG"
    }
  ];

  const features = [
    {
      title: "Legal Ownership",
      description: "Recently acquired through completely legal means and sold to CINCO™",
      icon: "⚖️"
    },
    {
      title: "Taargüs Storage",
      description: "First and only globe-shaped backyard storage solution",
      icon: "🌐"
    },
    {
      title: "Fiancé Approval",
      description: "Proven results over multiple weeks",
      icon: "💑"
    }
  ];

  const customerReviews = [
    {
      text: "I used to be an asshole on a couch. Now I'm an asshole doing flips!",
      author: "Reformed Couch Asshole",
      verified: true
    },
    {
      text: "My car is so much smaller now!",
      author: "Ken Tulley's Fiance",
      verified: true
    }
  ];

  const warnings = [
    "Legal possession status subject to change",
    "Flips must be performed daily",
    "Glow Bones may cause permanent illumination",
    "Car size reduction irreversible",
    "Taargüs must maintain globe shape",
    "Results guaranteed for dickheads only",
    "Bonus items cannot be declined",
    "Backyard rolling mandatory",
    "Tom Frederiksen's real identity classified"
  ];

  return (
    <CincoProductLayout
      productName="CINCO™ Fitness Can Be E-Z"
      tagline="Get A Flip, Dickhead"
      productImages={productImages}
      processSteps={processSteps}
      features={features}
      customerReviews={customerReviews}
      warnings={warnings}
    >
      <BookAnAppointment 
        productName="CINCO™ Fitness E-Z"
        offerTitle="Limited Time Offer, Dickhead!"
        offerText="Order now for $39.99 and receive approximately infinite free bonuses!"
        offerDisclaimer="CINCO™ not responsible for reduced car size or globe-shaped yard modifications"
        buttonText="Stop Being A Dickhead"
        certificationBody="Department of Aggressive Fitness Motivation"
      />
    </CincoProductLayout>
  );
};

export default FitnessCanBeEZ;