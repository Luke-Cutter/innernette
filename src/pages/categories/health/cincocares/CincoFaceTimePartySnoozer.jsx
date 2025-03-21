import React from 'react';
import CincoProductLayout from '../../../../components/layout/CincoProductLayout';
import BookAnAppointment from '../../../../components/shared/BookAnAppointment';

const CincoFaceTimePartySnoozer = () => {
  const productImages = [
    "images/pages/categories/cinco/cincoproducts/CincoFaceTimePartySnoozer/device.PNG",
    "images/pages/categories/cinco/cincoproducts/CincoFaceTimePartySnoozer/brace.PNG",
    "images/pages/categories/cinco/cincoproducts/CincoFaceTimePartySnoozer/earphones.PNG",
    "images/pages/categories/cinco/cincoproducts/CincoFaceTimePartySnoozer/sleeping.PNG",
    "images/pages/categories/cinco/cincoproducts/CincoFaceTimePartySnoozer/rebate.PNG"
  ];

  const processSteps = [
    {
      title: "Body Brace Fitting",
      description: "Secure upright sleeping position with professional-grade body brace",
      warning: "Brace may become permanent",
      image: "images/pages/categories/cinco/cincoproducts/CincoFaceTimePartySnoozer/fitting.PNG"
    },
    {
      title: "Audio Response Setup",
      description: "Program five distinct professional responses: 'Sure, why not?', 'I understand', 'Okay', 'Sounds good', and 'Rebate signing up'",
      warning: "Responses cannot be customized",
      image: "images/pages/categories/cinco/cincoproducts/CincoFaceTimePartySnoozer/audio.PNG"
    },
    {
      title: "Soothing Music Activation",
      description: "Initialize earphone system to block all external conversation",
      warning: "May cause permanent social disconnection",
      image: "images/pages/categories/cinco/cincoproducts/CincoFaceTimePartySnoozer/music.PNG"
    },
    {
      title: "Social Integration",
      description: "Enter any social gathering and immediately begin sleeping",
      warning: "Fish story responses not guaranteed",
      image: "images/pages/categories/cinco/cincoproducts/CincoFaceTimePartySnoozer/social.PNG"
    }
  ];

  const features = [
    {
      title: "Professional Voice System",
      description: "Five carefully curated responses for any situation",
      icon: "🗣️"
    },
    {
      title: "Advanced Body Support",
      description: "Military-grade brace ensures upright sleeping posture",
      icon: "🦾"
    },
    {
      title: "Conversation Blocking",
      description: "Premium earphones eliminate unwanted social input",
      icon: "🎧"
    },
    {
      title: "Rebate Detection",
      description: "Automatically responds to any mention of financial opportunities",
      icon: "💰"
    },
    {
      title: "Fish Story Mode",
      description: "Special response set for extended angling narratives",
      icon: "🐟"
    }
  ];

  const customerReviews = [
    {
      text: "I understand. Sure, why not? I understand.",
      author: "Engagement Party Guest",
      image: "images/pages/categories/cinco/cincoproducts/CincoFaceTimePartySnoozer/guest.PNG",
      verified: true
    },
    {
      text: "Something about a river... Okay... I understand",
      author: "Fish Story Listener",
      image: "images/pages/categories/cinco/cincoproducts/CincoFaceTimePartySnoozer/listener.PNG",
      verified: true
    },
    {
      text: "4.36 rebate now? Rebate signing up!",
      author: "Small Business Owner",
      image: "images/pages/categories/cinco/cincoproducts/CincoFaceTimePartySnoozer/owner.PNG",
      verified: true
    }
  ];

  const warnings = [
    "Limited to five response options",
    "Body brace may fuse with spine",
    "Soothing music cannot be turned off",
    "May respond to non-existent rebates",
    "Fish story mode activates randomly",
    "Social connections may deteriorate",
    "Some conversations require actual attention",
    "Engagement parties not recommended",
    "Response timing purely coincidental"
  ];

  return (
    <CincoProductLayout
      productName="CINCO™ Face Time Party Snoozer"
      tagline="Sleep Through Social Obligations With Confidence"
      productImages={productImages}
      processSteps={processSteps}
      features={features}
      customerReviews={customerReviews}
      warnings={warnings}
    >
      <BookAnAppointment 
        productName="CINCO™ Face Time Party Snoozer"
        offerTitle="Social Avoidance Special!"
        offerText="Order now and receive a complimentary fish story response pack!"
        offerDisclaimer="CINCO™ not responsible for missed life events or accidental rebate commitments"
        buttonText="Start Sleeping Socially"
        certificationBody="Department of Professional Disengagement"
      />
    </CincoProductLayout>
  );
};

export default CincoFaceTimePartySnoozer;