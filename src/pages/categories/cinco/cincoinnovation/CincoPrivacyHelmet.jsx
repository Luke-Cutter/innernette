import React from 'react';
import CincoProductLayout from '../../../../components/layout/CincoProductLayout';
import BookAnAppointment from '../../../../components/shared/BookAnAppointment';

const CincoPrivacyHelmet = () => {
  const productImages = [
    "images/pages/categories/cinco/CincoPrivacyHelmet/ph1.PNG",
    "images/pages/categories/cinco/CincoPrivacyHelmet/ph2.PNG",
    "images/pages/categories/cinco/CincoPrivacyHelmet/tones.PNG",
    "images/pages/categories/cinco/CincoPrivacyHelmet/mace.PNG",
    "images/pages/categories/cinco/CincoPrivacyHelmet/dormuse.PNG"
  ];

  const processSteps = [
    {
      title: "E-Z Fitting",
      description: "Universal helmet design expands or contracts to fit any head size, from tiny to tremendous",
      warning: "Helmet may bond with hair follicles after extended use",
      image: "images/pages/categories/cinco/CincoPrivacyHelmet/EZ.PNG"
    },
    {
      title: "Privacy Mode Activation",
      description: "Simply press the large red button on the side to initiate complete sensory isolation",
      warning: "Button has been known to develop sentience",
      image: "images/pages/categories/cinco/CincoPrivacyHelmet/Press.PNG"
    },
    {
      title: "Sound Blocking",
      description: "Hi-Tech tones override all external sounds with soothing white noise",
      warning: "May cause addiction to static",
      image: "images/pages/categories/cinco/CincoPrivacyHelmet/Tones.PNG"
    },
    {
      title: "Vision Enhancement",
      description: "Built-in mace dispenser temporarily adjusts visual acuity",
      warning: "Vision changes may become permanent",
      image: "images/pages/categories/cinco/CincoPrivacyHelmet/Mace.PNG"
    }
  ];

  const features = [
    {
      title: "One-Touch Operation",
      description: "Single button eliminates complicated privacy protocols",
      icon: "🔴"
    },
    {
      title: "Universal Sizing",
      description: "Revolutionary E-Z Fit system works with any skull configuration",
      icon: "🧢"
    },
    {
      title: "Roommate Protocol",
      description: "Helps maintain positive dormitory relationships",
      icon: "🤝"
    }
  ];

  const customerReviews = [
    {
      text: "I can't hear anything anymore, but my roommate's social life has never been better!",
      author: "Tennessee L.",
      image: "images/pages/categories/cinco/CincoPrivacyHelmet/Tennessee.PNG",
      verified: true
    },
    {
      text: "My roommate's been wearing it for three weeks.",
      author: "Pierre",
      image: "images/pages/categories/core/NetteChat/pierre.PNG",
      verified: true
    }
  ];

  const warnings = [
    "Hi-Tech tones may become your only form of communication",
    "Vision modification effects could last weeks or decades",
    "Helmet removal requires professional CINCO™ assistance",
    "Privacy button may need to be bribed to deactivate",
    "Not responsible for changes in musical taste",
    "Some users report developing telepathic bond with helmet",
    "May cause spontaneous dorm room teleportation",
    "Extended use could result in permanent privacy mode",
    "CINCO™ Corporation not responsible for any STDs contracted during product use"
  ];

  return (
    <CincoProductLayout
      productName="CINCO™ Privacy Helmet"
      tagline="The Ultimate in Roommate Consideration Technology"
      productImages={productImages}
      processSteps={processSteps}
      features={features}
      customerReviews={customerReviews}
      warnings={warnings}
    >
      <BookAnAppointment 
        productName="CINCO™ Privacy Helmet"
        offerTitle="Dormitory Special!"
        offerText="Buy one Privacy Helmet, get a free Hi-Tech Tone Greatest Hits compilation!"
        offerDisclaimer="CINCO™ not responsible for permanent sensory alterations or roommate-related incidents"
        buttonText="Enable Privacy Mode"
        certificationBody="Department of Dormitory Relations and Sonic Warfare"
      />
    </CincoProductLayout>
  );
};

export default CincoPrivacyHelmet;