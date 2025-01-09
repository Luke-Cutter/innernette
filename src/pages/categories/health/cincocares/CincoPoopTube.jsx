import React from 'react';
import CincoProductLayout from '../../../../components/layout/CincoProductLayout';
import BookAnAppointment from '../../../../components/shared/BookAnAppointment';

const CincoPoopTube = () => {
  const productImages = [
    "images/pages/categories/cinco/cincoproducts/CincoPoopTube/tube.PNG",
    "images/pages/categories/cinco/cincoproducts/CincoPoopTube/standing.PNG",
    "images/pages/categories/cinco/cincoproducts/CincoPoopTube/picnic.PNG",
    "images/pages/categories/cinco/cincoproducts/CincoPoopTube/kids.PNG",
    "images/pages/categories/cinco/cincoproducts/CincoPoopTube/improved.PNG"
  ];

  const processSteps = [
    {
      title: "Manly Standing",
      description: "Assume dominant upright position for maximum dignity",
      warning: "Maintain power stance throughout process",
      image: "images/pages/categories/cinco/cincoproducts/CincoPoopTube/position.PNG"
    },
    {
      title: "Tube Alignment",
      description: "Connect tube to nearest approved trash receptacle",
      warning: "Public trash cans must be clearly marked",
      image: "images/pages/categories/cinco/cincoproducts/CincoPoopTube/alignment.PNG"
    },
    {
      title: "Scent Management",
      description: "Experience our new improved smell (still bad, but better)",
      warning: "Definition of 'better' may vary",
      image: "images/pages/categories/cinco/cincoproducts/CincoPoopTube/management.PNG"
    },
    {
      title: "Family Integration",
      description: "Perfect for picnics, gatherings, and other inappropriate occasions",
      warning: "Some family members may not understand",
      image: "images/pages/categories/cinco/cincoproducts/CincoPoopTube/integration.PNG"
    }
  ];

  const features = [
    {
      title: "Stand-Up Technology",
      description: "Revolutionary vertical waste management system",
      icon: "🧍"
    },
    {
      title: "Line Avoidance",
      description: "Never wait for traditional facilities again",
      icon: "🚫"
    },
    {
      title: "Kid-Friendly Design",
      description: "Sized for the whole family (Bradley's dad approved)",
      icon: "👶"
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
      image: "images/pages/categories/cinco/cincoproducts/CincoPoopTube/bradley.PNG",
      verified: true
    },
    {
      text: "Finally, I can poop like a man!",
      author: "Standing Customer",
      image: "images/pages/categories/cinco/cincoproducts/CincoPoopTube/customer.PNG",
      verified: true
    },
    {
      text: "The smell is... better?",
      author: "Scent Connoisseur",
      image: "images/pages/categories/cinco/cincoproducts/CincoPoopTube/nose.PNG",
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
    "Bradley's dad's permission required",
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