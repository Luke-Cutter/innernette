import React from 'react';
import CincoProductLayout from '../../../components/layout/CincoProductLayout';
import BookAnAppointment from '../../../components/shared/BookAnAppointment';

const BestOfQuall = () => {
  const productImages = [
    "images/pages/categories/entertainment/BestOfQuall/Quall1.PNG",
    "images/pages/categories/entertainment/BestOfQuall/Quallify.PNG",
    "images/pages/categories/entertainment/BestOfQuall/12voices.PNG",
    "images/pages/categories/entertainment/BestOfQuall/michaels.PNG",
    "images/pages/categories/entertainment/BestOfQuall/cinco.PNG"
  ];

  const processSteps = [
    {
      title: "VHS Selection",
      description: "Choose from 3 premium VHS tapes of pure Quall content",
      warning: "Tapes may contain spaghetti and meatballs",
      image: "images/pages/categories/entertainment/BestOfQuall/QuallNow.PNG"
    },
    {
      title: "Quall-ification Check",
      description: "Verify eligibility for 200 bonus hours of classic Quall",
      warning: "Qualification standards mysterious",
      image: "images/pages/categories/entertainment/BestOfQuall/Quallify.PNG"
    },
    {
      title: "Michael Marathon",
      description: "Experience over 50 identical Michael impressions",
      warning: "May cause Michael-related confusion",
      image: "images/pages/categories/entertainment/BestOfQuall/Michaels.PNG"
    },
    {
      title: "Rapid Response",
      description: "Quall within 30 minutes for maximum content",
      warning: "Time measurement system undefined",
      image: "images/pages/categories/entertainment/BestOfQuall/BillCosby.PNG"
    }
  ];

      const features = [
    {
      title: "Quall-ity Content",
      description: "Extensive collection of un-Quall-ified success",
      icon: "📼"
    },
    {
      title: "Quall-tastic Bonus",
      description: "200 additional hours for Quall-ified viewers",
      icon: "🎁"
    },
    {
      title: "Quall Now!",
      description: "Limited time to achieve maximum Quall-tential",
      icon: "⏰"
    }
  ];

  const customerReviews = [
    {
      text: "I Quall-ified immediately!",
      author: "Satisfied Customer",
      verified: true
    },
    {
      text: "All 50 Michaels were exactly what I expected",
      author: "Michael Enthusiast",
      verified: true
    }
  ];

      const warnings = [
    "Quall-ification criteria subject to change",
    "Pasta references are in-Quall-capable",
    "Michael count may be Quall-culated differently",
    "VHS players not in-Quall-uded",
    "Bonus hours require Quall-ity time investment",
    "Time limits are Quall-optional",
    "Some impressions may be Quall-identical",
    "Not responsible for Quall-ateral phrase damage",
    "Actual Quall-tent may vary",
    "Not compatible with the CINCO™ Video Cube™"
  ];

  return (
    <CincoProductLayout
      productName="CINCO™ The Best of James Quall"
      tagline="What Are You Waiting For? Quall Now!"
      productImages={productImages}
      processSteps={processSteps}
      features={features}
      customerReviews={customerReviews}
      warnings={warnings}
    >
      <BookAnAppointment 
        productName="CINCO™ Quall Collection"
        offerTitle="Quall-timate Limited Time Offer!"
        offerText="Order in the next 30 minutes for Quall-tiple Michaels!"
        offerDisclaimer="CINCO™ not responsible for any Quall-amities or Quall-ateral damage"
        buttonText="Achieve Your Quall-tential"
        certificationBody="Department of Quall-ity Impression Management"
      />
    </CincoProductLayout>
  );
};

export default BestOfQuall;