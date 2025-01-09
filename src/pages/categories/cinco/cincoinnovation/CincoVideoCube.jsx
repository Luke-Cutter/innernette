import React from 'react';
import CincoProductLayout from '../../../../components/layout/CincoProductLayout';
import BookAnAppointment from '../../../../components/shared/BookAnAppointment';

const CincoVideoCube = () => {
  const productImages = [
    "images/pages/categories/cinco/CincoVideoCube/cube3.PNG",
    "images/pages/categories/cinco/CincoVideoCube/cube1.PNG",
    "images/pages/categories/cinco/CincoVideoCube/cube2.PNG"
  ];

  const processSteps = [
    {
      title: "Tab Removal",
      description: "Remove protective tab from any VHS tape (tab cannot be reattached)",
      warning: "Once tab is removed, tape becomes permanent CINCO™ property",
      image: "images/pages/categories/cinco/CincoVideoCube/tabremoval.PNG"
    },
    {
      title: "Cube Connection",
      description: "Plug the Video Cube directly into the VHS tape's protective tab slot",
      warning: "Connection is permanent once established",
      image: "images/pages/categories/cinco/CincoVideoCube/cubeconnection.PNG"
    },
    {
      title: "System Integration",
      description: "Place modified tape into any CINCO™ brand VHS system",
      warning: "Non-CINCO™ systems will be converted upon contact",
      image: "images/pages/categories/cinco/CincoVideoCube/systemintegration.PNG"
    },
    {
      title: "Quality Enhancement",
      description: "Watch as CINCO™ Cube Quality transforms your viewing experience",
      warning: "Quality may exceed visual tolerance levels",
      image: "images/pages/categories/cinco/CincoVideoCube/qualityenhancement.PNG"
    }
  ];

  const features = [
    {
      title: "VHS Plug-In System",
      description: "Video Cube plugs directly into any VHS tape's tab slot",
      icon: "📼"
    },
    {
      title: "CINCO™ Cube Quality",
      description: "Proprietary visual enhancement system that defies explanation",
      icon: "📺"
    },
    {
      title: "Movie Containment",
      description: "All movies are contained inside the cube. All of them.",
      icon: "🎬"
    }
  ];

  const customerReviews = [
    {
      text: "Wow! Look at the quality on that picture!",
      author: "Grum",
      image: "images/pages/categories/cinco/CincoVideoCube/grum.PNG",
      verified: true
    },
    {
      text: "My VCR belongs to CINCO™ now and I couldn't be happier!",
      author: "Glen Tennis",
      image: "images/pages/categories/cinco/CincoVideoCube/GlenTennis.PNG",
      verified: true
    }
  ];

  const warnings = [
    "VHS tab removal is permanent and legally binding",
    "CINCO™ Cube Quality may cause temporary blindness",
    "All movies viewed will be replaced with cube contents",
    "VCR conversion to CINCO™ system cannot be reversed",
    "Some users report cube speaking to them during sleep",
    "Movies contained within cube may leak into reality",
    "Non-CINCO™ tapes will be assimilated",
    "Quality enhancement may exceed human perception",
    "Cube contains ALL movies - this is not a metaphor"
  ];

  return (
    <CincoProductLayout
      productName="CINCO™ Video Cube"
      tagline="Simply Plug, Play, and Experience Cube Quality"
      productImages={productImages}
      processSteps={processSteps}
      features={features}
      customerReviews={customerReviews}
      warnings={warnings}
    >
      <BookAnAppointment 
        productName="CINCO™ Video Cube"
        offerTitle="Special Movie Package!"
        offerText="Purchase now and receive a set of pre-modified VHS tapes! (Original content permanently erased)"
        offerDisclaimer="CINCO™ not responsible for cube-reality convergence or temporal movie leakage"
        buttonText="Enter The Cube"
        certificationBody="Department of Cubic Entertainment"
      />
    </CincoProductLayout>
  );
};

export default CincoVideoCube;