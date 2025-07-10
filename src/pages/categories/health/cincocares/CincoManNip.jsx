import React from 'react';
import CincoProductLayout from '../../../../components/layout/CincoProductLayout';
import BookAnAppointment from '../../../../components/shared/BookAnAppointment';

const CincoManNip = () => {
  const productImages = [
    "images/pages/categories/health/ManNip/DuffyNip.PNG",
    "images/pages/categories/health/ManNip/spices.PNG",
    "images/pages/categories/health/ManNip/application.PNG",
    "images/pages/categories/health/ManNip/effects.PNG",
    "images/pages/categories/health/ManNip/chess.PNG"
  ];

  const processSteps = [
    {
      title: "Nip Selection",
      description: "Choose from our variety of man spices including Old Leather, Forgotten Dreams, and Chess Master",
      warning: "Spice combinations may trigger spontaneous Duffy chanting",
      image: "images/pages/categories/health/ManNip/selection.PNG"
    },
    {
      title: "Nasal Application",
      description: "Simply insert Man Nip directly into nostrils until disappearance occurs",
      warning: "Complete disappearance is normal and encouraged",
      image: "images/pages/categories/health/ManNip/insertion.PNG"
    },
    {
      title: "Sensory Awakening",
      description: "Allow the nip to take hold of your senses as little doors begin opening",
      warning: "Doors may lead to unexpected memories",
      image: "images/pages/categories/health/ManNip/awakening.PNG"
    }
  ];

  const features = [
    {
      title: "Traditional Animal Nip",
      description: "The same technology that cats have trusted for generations",
      icon: "🐱"
    },
    {
      title: "Man Spice Blend",
      description: "Proprietary mixture designed specifically for the elderly male nose",
      icon: "👃"
    },
    {
      title: "Duffy Guarantee",
      description: "Personally endorsed by a lonely Patrick Duffy",
      icon: "✨"
    }
  ];

  const customerReviews = [
    {
      text: "Duffy! Duffy! Duffy! Duffy! Duffy! Duffy!",
      author: "Keith",
      image: "images/pages/categories/health/ManNip/keith.PNG",
      verified: true
    },
    {
      text: "I'm old and I'm tired, but my nip's the best!",
      author: "Patrick Duffy",
      image: "images/pages/categories/health/ManNip/duffy.PNG",
      verified: true
    }
  ];

  const warnings = [
    "Users may develop feline behavioral patterns",
    "Side effects include uncontrollable Duffy chanting",
    "Memory doors cannot be closed once opened",
    "Chess abilities may actually deteriorate",
    "Complete disappearance is a feature, not a bug",
    "May cause excessive purring in formal situations",
    "Some users never return from memory doors",
    "Spouses may not recognize improved personality",
    "Patrick Duffy is responsible for chess losses"
  ];

  return (
    <CincoProductLayout
      productName="Patrick Duffy's Man Nip"
      tagline="Just Sniff My Nip"
      productImages={productImages}
      processSteps={processSteps}
      features={features}
      customerReviews={customerReviews}
      warnings={warnings}
    >
      <BookAnAppointment 
        productName="Patrick Duffy's Man Nip"
        offerTitle="Elderly Stimulation Package!"
        offerText="Order now and receive a complimentary chess set (pieces may disappear during use)"
        offerDisclaimer="CINCO™ not responsible for permanent purring or Duffy-related obsessions"
        buttonText="Feel The Nip"
        certificationBody="Department of Elderly Feline Behavior"
      />
    </CincoProductLayout>
  );
};

export default CincoManNip;