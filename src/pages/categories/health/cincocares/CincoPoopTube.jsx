import React from 'react';
import CincoProductLayout from '../../../../components/layout/CincoProductLayout';
import BookAnAppointment from '../../../../components/shared/BookAnAppointment';

const CincoPoopTube = () => {
  const productImages = [
    "images/pages/categories/health/PoopTube/ModifiedCommercial.PNG",
    "images/pages/categories/health/PoopTube/PoopTubeLogo.PNG",
    "images/pages/categories/health/PoopTube/4Kids.PNG",
    "images/pages/categories/health/PoopTube/BMFahrtz.PNG",
    "images/pages/categories/health/PoopTube/WhetteFahrtz.PNG"
  ];

  const processSteps = [
    {
      title: "Manly Standing",
      description: "Assume dominant upright position for maximum dignity",
      warning: "Maintain power stance throughout process",
      image: "images/pages/categories/health/PoopTube/ManlyStanding.PNG"
    },
    {
      title: "Tube Alignment",
      description: "Connect tube to nearest approved trash receptacle",
      warning: "Public trash cans must be clearly marked",
      image: "images/pages/categories/health/PoopTube/FecalPump.PNG"
    },
    {
      title: "Scent Management",
      description: "Experience our new improved smell (still bad, but better)",
      warning: "Definition of 'better' may vary",
      image: "images/pages/categories/health/PoopTube/Child.PNG"
    },
    {
      title: "Family Integration",
      description: "The liquifier makes this perfect for picnics, gatherings, and other inappropriate occasions",
      warning: "Some family members may not understand",
      image: "images/pages/categories/health/PoopTube/Liquifier.PNG"
    }
  ];

  const features = [
    {
      title: "Stand-Up Technology",
      description: "Revolutionary vertical waste management system",
      icon: "🧍"
    },
    {
      title: "Improved Aroma",
      description: "Now featuring our least-worst smell ever",
      icon: "👃"
    },
    {
      title: "Portable Freedom",
      description: "Any trash can becomes an opportunity",
      icon: "🗑️"
    }
  ];

  const customerReviews = [
    {
      text: "My dad said I could sell it!",
      author: "Bradley Michael Fartz",
      image: "images/pages/categories/health/PoopTube/BM.PNG",
      verified: true
    },
    {
      text: "Finally, a tube for me!",
      author: "Real Child User",
      image: "images/pages/categories/health/PoopTube/Child.PNG",
      verified: true
    }
  ];

  const warnings = [
    "Not all trash cans are Poop Tube compatible",
    "Improved smell still quite bad",
    "Some picnics may be ruined",
    "Standing position non-negotiable",
    "Family tradition requirements may vary",
    "Public reaction unpredictable",
    "Smell improvement subjective",
    "May affect future party invitations"
  ];

  return (
    <CincoProductLayout
      productName="CINCO™ Poop Tube"
      tagline="Stand Up For Your Rights"
      productImages={productImages}
      processSteps={processSteps}
      features={features}
      customerReviews={customerReviews}
      warnings={warnings}
    >
      <BookAnAppointment 
        productName="CINCO™ Poop Tube"
        offerTitle="Vertical Freedom Package!"
        offerText="Order now and receive a complementary trash can location guide!"
        offerDisclaimer="CINCO™ not responsible for lost friendships or picnic disruptions"
        buttonText="Embrace The Stand"
        certificationBody="Department of Vertical Waste Solutions"
      />
    </CincoProductLayout>
  );
};

export default CincoPoopTube;