import React from 'react';
import CincoProductLayout from '../../../../components/layout/CincoProductLayout';
import BookAnAppointment from '../../../../components/shared/BookAnAppointment';

const CincoWaitMate = () => {
  const productImages = [
    "images/pages/categories/health/WaitMate/logo.PNG",
    "images/pages/categories/health/WaitMate/ssgoldblum.PNG",
    "images/pages/categories/health/WaitMate/take.PNG",
    "images/pages/categories/health/WaitMate/2pills.PNG",
    "images/pages/categories/health/WaitMate/NoWait.PNG"
  ];

  const processSteps = [
    {
      title: "Event Selection",
      description: "Choose which future event you'd like to skip to (birthdays, award shows, beach blasts, etc.)",
      warning: "Events may or may not actually occur during sleep",
      image: "images/pages/categories/health/WaitMate/selection.PNG"
    },
    {
      title: "Dosage Calculation",
      description: "Take one pill per day you want to skip (simple math may become impossible after first dose)",
      warning: "Do not exceed 7 pills unless supervised by Zan",
      image: "images/pages/categories/health/WaitMate/bottle.PNG"
    },
    {
      title: "Deep Sleep Initiation",
      description: "Enter a deep, deep sleep until your chosen event arrives",
      warning: "Sleep may continue past event",
      image: "images/pages/categories/health/WaitMate/sleep.PNG"
    },
    {
      title: "Memory Recovery",
      description: "Begin Zan's Learning Songs Volume 1 for basic object identification",
      warning: "Results may vary based on number of objects remembered",
      image: "images/pages/categories/health/WaitMate/Zan.PNG"
    }
  ];

  const features = [
    {
      title: "Time Skip Technology",
      description: "Revolutionary formula makes waiting optional",
      icon: "⏰"
    },
    {
      title: "Celebrity Endorsed",
      description: "Proudly endorsed by Jeff Goldblum (while conscious)",
      icon: "🌟"
    },
    {
      title: "Zan Support System",
      description: "Complimentary memory recovery program with Zan (makes it fun!)",
      icon: "🎓"
    }
  ];

  const customerReviews = [
    {
      text: "It's time to celebrate my career! Thanks, Wait Mate!",
      author: "Jeff Goldblum",
      image: "images/pages/categories/health/WaitMate/goldblum.PNG",
      verified: true
    },
    {
      text: "Oh Jeff... Handsome for a man",
      author: "Eric",
      image: "images/pages/categories/health/WaitMate/handsome.PNG",
      verified: true
    }
  ];

  const warnings = [
    "Overuse will cause serious memory loss",
    "Side effects may include forgetting what common objects are called",
    "Zan's availability subject to temporal displacement",
    "Learning Songs Volume 1 is non-optional after memory loss",
    "Time skipping may result in missing important life events",
    "Memory recovery not guaranteed",
    "Some users may require relearning what a 'turtle sleeping in a beer' is"
  ];

  return (
    <CincoProductLayout
      productName="CINCO™ Wait Mate"
      tagline="Why Wait When You Can Sleep Through It?"
      productImages={productImages}
      processSteps={processSteps}
      features={features}
      customerReviews={customerReviews}
      warnings={warnings}
    >
      <BookAnAppointment 
        productName="CINCO™ Wait Mate"
        offerTitle="Time Skip Special!"
        offerText="Buy now and receive a complimentary copy of Zan's Learning Songs Volume 1! (You'll need it)"
        offerDisclaimer="CINCO™ not responsible for lost memories, missed events, or inability to identify common objects"
        buttonText="Skip To The Good Part"
        certificationBody="Department of Temporal Pharmaceuticals and Object Recognition"
      />
    </CincoProductLayout>
  );
};

export default CincoWaitMate;