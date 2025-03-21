import React from 'react';
import CincoProductLayout from '../../../../components/layout/CincoProductLayout';
import BookAnAppointment from '../../../../components/shared/BookAnAppointment';

const CincoBusinessHugs = () => {
  const productImages = [
    "images/pages/categories/health/Shows/BusinessHugs/BusinessHugsLogo.PNG",
    "images/pages/categories/health/Shows/BusinessHugs/GrillOnTV.PNG",
    "images/pages/categories/health/Shows/BusinessHugs/MarkAndJohn.PNG",
    "images/pages/categories/health/Shows/BusinessHugs/GrillVogel.PNG"
  ];

  const processSteps = [
    {
      title: "Power Center Location",
      description: "Precisely identify the small of the back's power center location",
      warning: "Incorrect power center targeting may void warranty",
      image: "images/pages/categories/health/Shows/BusinessHugs/locate.PNG"
    },
    {
      title: "Circle Application",
      description: "Execute exactly three tender palm circles (no more, no less)",
      warning: "Fourth circle triggers HR intervention",
      image: "images/pages/categories/health/Shows/BusinessHugs/apply.PNG"
    },
    {
      title: "Cheek Slap Calibration",
      description: "Deliver perfectly calibrated friendly slap to conclude interaction",
      warning: "Slap force must match tragedy severity",
      image: "images/pages/categories/health/Shows/BusinessHugs/calibrate.PNG"
    },
    {
      title: "Emotional Distance",
      description: "Maintain professional detachment throughout entire process",
      warning: "Genuine empathy not recommended",
      image: "images/pages/categories/health/Shows/BusinessHugs/distance.PNG"
    }
  ];

  const features = [
    {
      title: "VHS Format",
      description: "Premium videotape training from Grill Vogel himself",
      icon: "📼"
    },
    {
      title: "Slap Metrics",
      description: "Advanced cheek impact measurement guidelines",
      icon: "👋"
    },
    {
      title: "Tragedy Response",
      description: "Specialized protocols for various workplace misfortunes",
      icon: "😢"
    }
  ];

  const customerReviews = [
    {
      text: "After my wife's third miscarriage, I was so lost. Mark gave me a business hug, I love you Mark.",
      author: "John",
      image: "images/pages/categories/health/Shows/BusinessHugs/John.PNG",
      verified: true
    },
    {
      text: "I have never felt closer to Mark in my life, thank you Grill for opening our eyes.",
      author: "Mark",
      image: "images/pages/categories/health/Shows/BusinessHugs/Mark.PNG",
      verified: true
    }
  ];

  const warnings = [
    "Power center location non-negotiable",
    "Circle count must remain at three",
    "Slap force cannot be adjusted after impact",
    "Real emotions void warranty",
    "Some tragedies require multiple sessions",
    "Not effective for good news",
    "Results may vary by miscarriage number",
    "Videotape must be rewound after use",
    "HR compliance not guaranteed"
  ];

  return (
    <CincoProductLayout
      productName="CINCO™ Business Hugs"
      tagline="Professional Solutions for Workplace Tragedy"
      productImages={productImages}
      processSteps={processSteps}
      features={features}
      customerReviews={customerReviews}
      warnings={warnings}
    >
      <BookAnAppointment 
        productName="CINCO™ Business Hugs"
        offerTitle="Corporate Training Special!"
        offerText="Order now and receive a complimentary power center locator!"
        offerDisclaimer="CINCO™ not responsible for actual emotional connections or HR violations"
        buttonText="Master Professional Comfort"
        certificationBody="Department of Regulated Workplace Intimacy"
      />
    </CincoProductLayout>
  );
};

export default CincoBusinessHugs;