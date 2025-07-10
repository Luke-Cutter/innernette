import React from 'react';
import CincoProductLayout from '../../../../components/layout/CincoProductLayout';
import BookAnAppointment from '../../../../components/shared/BookAnAppointment';

const CincoDreamCream = () => {
  const productImages = [
    "images/pages/categories/health/DreamCream/DreamCreamLogo.PNG",
    "images/pages/categories/health/DreamCream/kid.PNG",
    "images/pages/categories/health/DreamCream/pierre.PNG",
    "images/pages/categories/health/DreamCream/thenette.PNG",
    "images/pages/categories/health/DreamCream/nightmare.PNG"
  ];

  const processSteps = [
    {
      title: "Cold Application",
      description: "Apply freezing Dream Cream generously to exposed skin before sleep",
      warning: "Temperature indicates dream penetration level",
      image: "images/pages/categories/health/DreamCream/cold.PNG"
    },
    {
      title: "Lip Coverage",
      description: "Optional lip application for enhanced dream flavor (possibly poisonous)",
      warning: "Toxicity levels untested",
      image: "images/pages/categories/health/DreamCream/lips.PNG"
    },
    {
      title: "Dream Entry",
      description: "Enter a world of BBQ dads, fast internet, and mustache appreciation",
      warning: "Dreams may not reflect actual internet speeds",
      image: "images/pages/categories/health/DreamCream/entry.PNG"
    },
    {
      title: "Nightmare Transition",
      description: "Experience inevitable descent into dial-up internet and vanishing mustaches",
      warning: "Hoagie Man cannot help you",
      image: "images/pages/categories/health/DreamCream/transition.PNG"
    }
  ];

  const features = [
    {
      title: "Temperature Control",
      description: "Extremely cold formula ensures maximum dream penetration",
      icon: "❄️"
    },
    {
      title: "BBQ Meats Enhancement",
      description: "Guaranteed appearance of grilling-based father figures",
      icon: "🍖"
    },
    {
      title: "Hoagie Man Spoiled Meat Detection",
      description: "Advanced warning system for rotten meat contamination",
      icon: "🥩"
    }
  ];

  const customerReviews = [
    {
      text: "The download speeds were amazing until they weren't...",
      author: "Dr. Steve Brule",
      image: "images/pages/categories/health/DreamCream/brule.jpg",
      verified: true
    },
    {
      text: "HOAGIE MAN CAN'T HELP YOU NOW",
      author: "Unknown Entity",
      image: "images/pages/categories/health/DreamCream/transition.PNG",
      verified: true
    }
  ];

  const warnings = [
    "Hoagie Man's protection not guaranteed",
    "Dream internet speeds may vary",
    "Mustaches may disappear without warning",
    "BBQ meat quality not verified",
    "Dial-up sounds may persist after waking",
    "Cream probably poisonous",
    "Dad appearances non-refundable",
    "Dream websites not vetted for content or Innernette™ approved"
  ];

  return (
    <CincoProductLayout
      productName="CINCO™ Dream Cream"
      tagline="For The Best Dreams About Boys and Their Dads"
      productImages={productImages}
      processSteps={processSteps}
      features={features}
      customerReviews={customerReviews}
      warnings={warnings}
    >
      <BookAnAppointment 
        productName="CINCO™ Dream Cream"
        offerTitle="Dream Enhancement Package!"
        offerText="Order now and receive a complimentary BBQ set! (Meat quality not guaranteed)"
        offerDisclaimer="CINCO™ not responsible for vanishing mustaches or corrupted downloads"
        buttonText="Enter The Dream Realm"
        certificationBody="Department of Nocturnal BBQ Affairs & CINCO™ Sedatives"
      />
    </CincoProductLayout>
  );
};

export default CincoDreamCream;