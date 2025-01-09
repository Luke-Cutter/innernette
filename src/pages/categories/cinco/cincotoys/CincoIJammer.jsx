import React from 'react';
import CincoToysLayout from '../../../../components/layout/CincoToysLayout';

const CincoIJammer = () => {
  const productImages = [
    "images/pages/categories/cinco/cincotoys/CincoIJammer/IJammerLogo.PNG", 
    "images/pages/categories/cinco/cincotoys/CincoIJammer/OopyDoopy.PNG", 
    "images/pages/categories/cinco/cincotoys/CincoIJammer/HypeBumpin.PNG", 
    "images/pages/categories/cinco/cincotoys/CincoIJammer/Glasses.PNG", 
  ];

  const processSteps = [
    {
      title: "Step 1: Power Up",
      description: "Insert your I-Jammer into the OH-HUNGEE charging station for initial power boost",
      icon: "🔌"
    },
    {
      title: "Step 2: Select Tone",
      description: "Choose between I-Jammer or E-Bumper dance tones (remove pets from room first)",
      icon: "🎵"
    },
    {
      title: "Step 3: Connect",
      description: "Check if your friends are bumpin'",
      icon: "🤝"
    },
    {
      title: "Step 4: Dance",
      description: "Shake, bump, and groove to the revolutionary tones (parents not allowed)",
      icon: "💃"
    },
    {
      title: "Step 5: Recharge",
      description: "Press for Oopy Doopy when energy levels are low",
      icon: "🔋"
    }
  ];

  const features = [
    {
      title: "Two Revolutionary Dance Tones",
      description: "Experience both I-Jammer and E-Bumper frequencies",
      icon: "🎶"
    },
    {
      title: "OH-HUNGEE Charging",
      description: "Proprietary energy restoration system",
      icon: "⚡"
    },
    {
      title: "Oopy Doopy Dispenser",
      description: "Real food at the press of a button",
      icon: "🍽️"
    }
  ];

  const customerReviews = [
    {
      text: "My dog disappeared after hearing the i-Jam tone, but my dancing has never been better! Oopy Doopy keeps me going!",
      author: "Bradley Needlehead",
      verified: true
    },
    {
      text: "[REVIEW REMOVED DUE TO EXCESSIVE E-BUMPING]",
      author: "REDACTED",
      verified: false
    },
    {
      text: "I've been dancing with my friends for 72 hours straight. The OH-HUNGEE keeps me alive!",
      author: "Casey's Brother",
      verified: true
    },
    {
      text: "An I-Jammer killed a flock of my crows.",
      author: "The Dark Man",
      verified: true
    }
];

  const warnings = [
    "I-Jam tone is not safe for pets",
    "eBumping is not safe for pets or children",
    "Ages 2 and up",
    "Parents strictly prohibited from dance sessions",
    "OH-HUNGEE charging station may cause temporal displacement",
    "Oopy Doopy is legally classified as 'real food'",
    "Do not attempt to decode dance tones",
    "OH-HUNGEE is not heart healthy",
    "If E-Bumper tone persists for more than 4 hours, consult your CINCO™ representative"
  ];

  return (
    <CincoToysLayout
      productName="CINCO™ I-Jammer (with E-Bumper)"
      tagline="These Kids Are Jizzle Jammed!"
      productImages={productImages}
      processSteps={processSteps}
      features={features}
      customerReviews={customerReviews}
      warnings={warnings}
    />
  );
};

export default CincoIJammer;