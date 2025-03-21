import React from 'react';
import CincoFashionLayout from '../../../../components/layout/CincoFashionLayout';
import BookAnAppointment from '../../../../components/shared/BookAnAppointment';

const CincoMouthDecorator = () => {
  const productImages = [
    "images/pages/categories/cinco/cincolifestyle/CincoMouthDecorator/mouthdecorator.PNG",
    "images/pages/categories/cinco/cincolifestyle/CincoMouthDecorator/jewels.PNG",
    "images/pages/categories/cinco/cincolifestyle/CincoMouthDecorator/sideburns.PNG",
    "images/pages/categories/cinco/cincolifestyle/CincoMouthDecorator/nodecorator.PNG",
  ];

  const styleGuide = [
    {
      title: "Hot Glue Application",
      description: "Heat CINCO™ Hot Glue Gun to exactly 375°F. Any cooler and gems won't stick. Apply CINCO™ Face-Numbing Cream liberally. You'll want this, trust us.",
      warning: "Sensation may return within 3-5 business days",
      image: "images/pages/categories/cinco/cincolifestyle/CincoMouthDecorator/gluegun.PNG"
    },
    {
      title: "Face Preparation",
      description: "Apply CINCO™ Face-Numbing Cream liberally. You'll want this, trust us.",
      warning: "Sensation may return within 3-5 business days",
      image: "images/pages/categories/cinco/cincolifestyle/CincoMouthDecorator/facebake.PNG"
    },
    {
      title: "Jewel Selection",
      description: "Start with smaller gems around the mouth. Save the Power Ruby for special occasions or job interviews",
      warning: "Power Ruby may cause powers",
      image: "images/pages/categories/cinco/cincolifestyle/CincoMouthDecorator/selection.PNG"
    },
  ];

  const features = [
    {
      title: "100+ Exotic Jewels",
      description: "From basic rhinestones to industrial diamonds, we've got your face covered",
      icon: "💎"
    },
    {
      title: "Eyebrow Enhancement Kit",
      description: "Because why stop at the mouth? Complete your look with crystalline eyebrows",
      icon: "🤨"
    },
    {
      title: "Sideburn Sparkle System",
      description: "Transform baldness into boldness with our signature sideburn jewels",
      icon: "✨"
    }
  ];

  const customerReviews = [
    {
      text: "Got the job! They couldn't stop staring at my Power Ruby!",
      author: "Dave",
      image: "images/pages/categories/cinco/cincolifestyle/CincoMouthDecorator/dave.PNG",
      verified: true
    },
    {
      text: "My sideburns finally match my soul - shiny and expensive!",
      author: "Steve",
      image: "images/pages/categories/cinco/cincolifestyle/CincoMouthDecorator/Steve.PNG",
      verified: true
    }
  ];

  const warnings = [
    "Do not attempt to eat solid food for first 72 hours after decoration",
    "Power Ruby may cause temporary blindness in onlookers",
    "Hot glue temperature must be exact - no exceptions",
    "Some jewels may become permanent facial features",
    "Side effects may include: modeling contracts, and facial numbness",
    "Keep face away from strong magnets after decoration"
  ];

  return (
    <CincoFashionLayout
      productName="CINCO™ Mouth Decorator System"
      tagline="Because Bald Faces Need Bling Too"
      productImages={productImages}
      styleGuide={styleGuide}
      features={features}
      customerReviews={customerReviews}
      warnings={warnings}
    >
      <BookAnAppointment 
        productName="CINCO™ Mouth Decorator"
        offerTitle="Special Face Enhancement Package!"
        offerText="Buy the Mouth Decorator Kit, get a free tube of Face-Numbing Cream!"
        offerDisclaimer="CINCO™ is not responsible for permanent facial bedazzlement or excessive attractiveness"
        buttonText="Bedazzle Your Face Today"
        certificationBody="Bureau of Facial Jewelry and Hot Glue Safety"
      />
    </CincoFashionLayout>
  );
};

export default CincoMouthDecorator;