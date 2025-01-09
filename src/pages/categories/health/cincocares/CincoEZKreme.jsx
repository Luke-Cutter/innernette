import React from 'react';
import CincoProductLayout from '../../../../components/layout/CincoProductLayout';
import BookAnAppointment from '../../../../components/shared/BookAnAppointment';

const CincoEZKreme = () => {
  const productImages = [
    "images/pages/categories/cinco/cincoproducts/CincoEZKreme/kreme.PNG",
    "images/pages/categories/cinco/cincoproducts/CincoEZKreme/application.PNG",
    "images/pages/categories/cinco/cincoproducts/CincoEZKreme/meeting.PNG",
    "images/pages/categories/cinco/cincoproducts/CincoEZKreme/excuse.PNG",
    "images/pages/categories/cinco/cincoproducts/CincoEZKreme/dpants.PNG"
  ];

  const processSteps = [
    {
      title: "D-Pants Preparation",
      description: "Put on your CINCO™ D-Pants before applying E-Z Kreme. This step cannot be skipped",
      warning: "Regular pants will not survive the E-Z Kreme experience",
      image: "images/pages/categories/cinco/cincoproducts/CincoEZKreme/preparation.PNG"
    },
    {
      title: "Kreme Application",
      description: "Apply mint-flavored gel liberally to hands, face, and optionally feet",
      warning: "Avoid eye contact with gel or resulting foam",
      image: "images/pages/categories/cinco/cincoproducts/CincoEZKreme/applying.PNG"
    },
    {
      title: "Liquidization Process",
      description: "Wait for patented liquidizers to convert solid matter into foamy brown excitement",
      warning: "Process cannot be reversed once initiated",
      image: "images/pages/categories/cinco/cincoproducts/CincoEZKreme/process.PNG"
    },
    {
      title: "Meeting Avoidance",
      description: "Simply announce your condition and exit any unwanted situation",
      warning: "Excuse effectiveness may decrease with repeated use",
      image: "images/pages/categories/cinco/cincoproducts/CincoEZKreme/avoiding.PNG"
    }
  ];

  const features = [
    {
      title: "All-Natural Formula",
      description: "Made from organic liquidizers and natural foaming agents",
      icon: "🌿"
    },
    {
      title: "Mint Freshness",
      description: "Refreshing mint flavor masks the scent of regret",
      icon: "🌱"
    },
    {
      title: "Rapid Action",
      description: "Guaranteed results within seconds of application",
      icon: "⚡"
    },
    {
      title: "Multiple Application Points",
      description: "Versatile gel works on hands, face, and feet for maximum absorption",
      icon: "👐"
    },
    {
      title: "Meeting Compatibility",
      description: "Perfect excuse recognized by 9 out of 10 managers",
      icon: "💼"
    }
  ];

  const customerReviews = [
    {
      text: "Haven't attended a meeting in weeks! My career is soaring!",
      author: "Dr. Steve Brule",
      image: "images/pages/categories/cinco/cincoproducts/CincoEZKreme/brule.PNG",
      verified: true
    },
    {
      text: "The mint flavor really adds a touch of class to my excuses",
      author: "Business Paul",
      image: "images/pages/categories/cinco/cincoproducts/CincoEZKreme/paul.PNG",
      verified: true
    },
    {
      text: "For your health: Always carry spare D-Pants!",
      author: "Dr. Steve Brule",
      image: "images/pages/categories/cinco/cincoproducts/CincoEZKreme/brule2.PNG",
      verified: true
    }
  ];

  const warnings = [
    "Must be used with CINCO™ D-Pants",
    "Effects cannot be stopped once initiated",
    "Liquidization process is irreversible",
    "May cause permanent meeting aversion",
    "Mint flavor does not make it edible",
    "Do not apply to non-approved body parts",
    "Foam production exceeds normal parameters",
    "Managers may develop immunity to excuse",
    "Career advancement not guaranteed"
  ];

  return (
    <CincoProductLayout
      productName="CINCO™ E-Z Kreme"
      tagline="Transform Boring Brown Solids Into Exciting Brown Liquids"
      productImages={productImages}
      processSteps={processSteps}
      features={features}
      customerReviews={customerReviews}
      warnings={warnings}
    >
      <BookAnAppointment 
        productName="CINCO™ E-Z Kreme"
        offerTitle="Meeting Escape Package!"
        offerText="Purchase now and receive a complimentary pair of D-Pants! (You'll need them)"
        offerDisclaimer="CINCO™ not responsible for career impacts or D-Pants incidents"
        buttonText="Start Avoiding Meetings Today"
        certificationBody="Department of Professional Excuses"
      />
    </CincoProductLayout>
  );
};

export default CincoEZKreme;