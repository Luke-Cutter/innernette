import React from 'react';
import CincoProductLayout from '../../../../components/layout/CincoProductLayout';
import BookAnAppointment from '../../../../components/shared/BookAnAppointment';

const CincoBusinessHugs = () => {
  const productImages = [
    "images/pages/categories/cinco/cincoproducts/CincoBusinessHugs/tape.PNG",
    "images/pages/categories/cinco/cincoproducts/CincoBusinessHugs/demonstration.PNG",
    "images/pages/categories/cinco/cincoproducts/CincoBusinessHugs/power.PNG",
    "images/pages/categories/cinco/cincoproducts/CincoBusinessHugs/circles.PNG",
    "images/pages/categories/cinco/cincoproducts/CincoBusinessHugs/slap.PNG"
  ];

  const processSteps = [
    {
      title: "Power Center Location",
      description: "Precisely identify the small of the back's power center location",
      warning: "Incorrect power center targeting may void warranty",
      image: "images/pages/categories/cinco/cincoproducts/CincoBusinessHugs/locate.PNG"
    },
    {
      title: "Circle Application",
      description: "Execute exactly three tender palm circles (no more, no less)",
      warning: "Fourth circle triggers HR intervention",
      image: "images/pages/categories/cinco/cincoproducts/CincoBusinessHugs/apply.PNG"
    },
    {
      title: "Cheek Slap Calibration",
      description: "Deliver perfectly calibrated friendly slap to conclude interaction",
      warning: "Slap force must match tragedy severity",
      image: "images/pages/categories/cinco/cincoproducts/CincoBusinessHugs/calibrate.PNG"
    },
    {
      title: "Emotional Distance",
      description: "Maintain professional detachment throughout entire process",
      warning: "Genuine empathy not recommended",
      image: "images/pages/categories/cinco/cincoproducts/CincoBusinessHugs/distance.PNG"
    }
  ];

  const features = [
    {
      title: "VHS Format",
      description: "Premium videotape training from Grill Vogel himself",
      icon: "📼"
    },
    {
      title: "Power Center Technology",
      description: "Revolutionary back-based energy transfer system",
      icon: "🔋"
    },
    {
      title: "Triple Circle Method",
      description: "Scientifically proven three-circle comfort delivery",
      icon: "⭕"
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
      text: "Found the power center on my first try!",
      author: "Mark from Accounting",
      image: "images/pages/categories/cinco/cincoproducts/CincoBusinessHugs/mark.PNG",
      verified: true
    },
    {
      text: "The triple circle really helped during my performance review",
      author: "Professional Hugger",
      image: "images/pages/categories/cinco/cincoproducts/CincoBusinessHugs/pro.PNG",
      verified: true
    },
    {
      text: "Much better than genuine emotional support",
      author: "HR Manager",
      image: "images/pages/categories/cinco/cincoproducts/CincoBusinessHugs/hr.PNG",
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