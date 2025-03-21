import React from 'react';
import CincoProductLayout from '../../../../components/layout/CincoProductLayout';
import BookAnAppointment from '../../../../components/shared/BookAnAppointment';

const CincoUrinalShower = () => {
  const productImages = [
    "images/pages/categories/cinco/cincoproducts/CincoUrinalShower/system.PNG",
    "images/pages/categories/cinco/cincoproducts/CincoUrinalShower/bungee.PNG",
    "images/pages/categories/cinco/cincoproducts/CincoUrinalShower/installation.PNG",
    "images/pages/categories/cinco/cincoproducts/CincoUrinalShower/flooding.PNG",
    "images/pages/categories/cinco/cincoproducts/CincoUrinalShower/janitor.PNG"
  ];

  const processSteps = [
    {
      title: "Bungee Installation",
      description: "Secure shower head to urinal using provided industrial bungee cord",
      warning: "Cord tension determines water trajectory",
      image: "images/pages/categories/cinco/cincoproducts/CincoUrinalShower/setup.PNG"
    },
    {
      title: "Public Disrobing",
      description: "Remove all clothing in public restroom (don't be shy)",
      warning: "Other bathroom users may not understand it's a commercial",
      image: "images/pages/categories/cinco/cincoproducts/CincoUrinalShower/nude.PNG"
    },
    {
      title: "Synchocuronal Activation",
      description: "Initiate horizontal water flow with dual body wash dispensing",
      warning: "Water redirection is permanent",
      image: "images/pages/categories/cinco/cincoproducts/CincoUrinalShower/flow.PNG"
    },
    {
      title: "Janitor Confrontation",
      description: "Explain that you're a Hollywood actor and this is just a commercial",
      warning: "Explanation success rate varies",
      image: "images/pages/categories/cinco/cincoproducts/CincoUrinalShower/explain.PNG"
    }
  ];

  const features = [
    {
      title: "Business Efficiency",
      description: "Turn wasted bathroom time into productive cleaning time",
      icon: "💼"
    },
    {
      title: "Dual Body Wash",
      description: "Proprietary blend of 'body wash and stuff'",
      icon: "🧴"
    },
    {
      title: "Horizontal Technology",
      description: "Revolutionary sideways water delivery system",
      icon: "↔️"
    },
    {
      title: "Bungee Engineering",
      description: "Military-grade cord ensures optimal shower head placement",
      icon: "🪢"
    },
    {
      title: "Flood Generation",
      description: "Comprehensive floor cleaning included with every shower",
      icon: "🌊"
    }
  ];

  const customerReviews = [
    {
      text: "I'm not clean, okay? I don't clean!",
      author: "Angry Janitor",
      image: "images/pages/categories/cinco/cincoproducts/CincoUrinalShower/janitor.PNG",
      verified: true
    },
    {
      text: "This is just a commercial! These are the cameras, see?",
      author: "Hollywood Actor",
      image: "images/pages/categories/cinco/cincoproducts/CincoUrinalShower/actor.PNG",
      verified: true
    },
    {
      text: "Who you think clean all this mess up?",
      author: "Still Angry Janitor",
      image: "images/pages/categories/cinco/cincoproducts/CincoUrinalShower/janitor2.PNG",
      verified: true
    }
  ];

  const warnings = [
    "Not all airports aware of commercial status",
    "Janitors may dispute cleaning responsibilities",
    "Public nudity laws still apply",
    "Water redirection is irreversible",
    "Hollywood actor credentials may be questioned",
    "Camera crew not included",
    "Bungee cord may have alternative uses",
    "Floor flooding guaranteed",
    "Claiming 'it's just a commercial' may not work"
  ];

  return (
    <CincoProductLayout
      productName="CINCO™ Urinal Shower"
      tagline="Turn Every Airport Bathroom Into Your Personal Spa"
      productImages={productImages}
      processSteps={processSteps}
      features={features}
      customerReviews={customerReviews}
      warnings={warnings}
    >
      <BookAnAppointment 
        productName="CINCO™ Urinal Shower"
        offerTitle="Business Traveler Special!"
        offerText="Purchase now and receive a complimentary 'This Is Just A Commercial' sign!"
        offerDisclaimer="CINCO™ not responsible for janitorial disputes or public indecency charges"
        buttonText="Revolutionize Your Airport Experience"
        certificationBody="Department of Unauthorized Bathroom Modifications"
      />
    </CincoProductLayout>
  );
};

export default CincoUrinalShower;