import React from 'react';
import CincoProductLayout from '../../../../components/layout/CincoProductLayout';
import BookAnAppointment from '../../../../components/shared/BookAnAppointment';

const CincoFaceTimePartySnoozer = () => {
  const productImages = [
    "images/pages/categories/health/PartySnoozer/snoozerproduct.PNG",
    "images/pages/categories/health/PartySnoozer/sleepthrough.PNG",
    "images/pages/categories/health/PartySnoozer/notinterested.PNG",
    "images/pages/categories/health/PartySnoozer/rest.PNG",
    "images/pages/categories/health/PartySnoozer/RommOahDenmirk.PNG"
  ];

  const processSteps = [
    {
      title: "Body Brace Fitting",
      description: "Secure upright sleeping position with professional-grade body brace",
      warning: "Brace may become permanent",
      image: "images/pages/categories/health/PartySnoozer/bodybrace.PNG"
    },
    {
      title: "Audio Response Setup",
      description: "Program five distinct professional responses: 'Sure, why not?', 'I understand', 'Okay', 'Sounds good', and 'Rebate signing up'",
      warning: "Responses cannot be customized",
      image: "images/pages/categories/health/PartySnoozer/fivelines.PNG"
    },
    {
      title: "Soothing Music Activation",
      description: "Initialize earphone system to block all external conversation",
      warning: "May cause permanent social disconnection",
      image: "images/pages/categories/health/PartySnoozer/fairlytiny.PNG"
    },
    {
      title: "Social Integration",
      description: "Enter any social gathering and immediately begin sleeping",
      warning: "Fish story responses not guaranteed",
      image: "images/pages/categories/health/PartySnoozer/inuse.PNG"
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
    }
  ];

  const customerReviews = [
    {
      text: "I understand. Sure, why not? I understand.",
      author: "Snoozer",
      image: "images/pages/categories/health/PartySnoozer/snoozer.PNG",
      verified: true
    },
    {
      text: "Please buy my product, I put my voice on the line",
      author: "Romm Oah Denmirk",
      image: "images/pages/categories/health/PartySnoozer/Romm.PNG",
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