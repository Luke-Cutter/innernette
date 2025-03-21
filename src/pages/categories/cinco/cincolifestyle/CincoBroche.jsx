import React from 'react';
import CincoFashionLayout from '../../../../components/layout/CincoFashionLayout';
import BookAnAppointment from '../../../../components/shared/BookAnAppointment';

const CincoBroOche = () => {

  const productImages = [
    "images/pages/categories/cinco/cincolifestyle/CincoBroche/broche.PNG", // Full Bro-Oche Collection
    "images/pages/categories/cinco/cincolifestyle/CincoBroche/brochesystem.PNG", // Installation Process
    "images/pages/categories/cinco/cincolifestyle/CincoBroche/screwon.PNG", // Screwing on the Bro-Oche
  ];

  const styleGuide = [
    {
      title: "Lubing",
      description: "Your skin is lubed with a relaxing cooling gel that also slightly numbs the shoulder where the Bro-Oche will be adhered",
      warning: "ALWAYS USE A CINCO™ LICENSED LUBE MAN",
      image: "images/pages/categories/cinco/cincolifestyle/CincoBroche/lubing.PNG"
    },
    {
      title: "Teeth Removal",
      description: "Your teeth are removed because you don't want to bite your tongue off from the pain",
      warning: "Tooth reattachment sold separately",
      image: "images/pages/categories/cinco/cincolifestyle/CincoBroche/teethremoval.PNG"
    },
    {
      title: "Holeing",
      description: "A four-foot reaming hole is drilled into the skin and bone. And now you're ready to screw on the Bro-Oche",
      warning: "Hole depth cannot be adjusted after installation",
      image: "images/pages/categories/cinco/cincolifestyle/CincoBroche/holeing.PNG"
    }
  ];

  const features = [
    {
      title: "Peace Signal",
      description: "Show everyone you're a chill bro with this totally radical peace sign Bro-Oche",
      icon: "✌️"
    },
    {
      title: "Easy Installation",
      description: "Just one simple four-foot hole and you're ready to go!",
      icon: "🔨"
    },
    {
      title: "Masculine Flower",
      description: "Because real bros aren't afraid to show their sensitive side through permanent body modification",
      icon: "🌺"
    },
  ];

  const customerReviews = [
    {
      text: "Me me I'm a handsome man and a Bro-Oche man. I'm a joke.",
      author: "Kent",
      image: "images/pages/categories/cinco/cincolifestyle/CincoBroche/kent.PNG",
      verified: true
    },
    {
      text: "I take my job very seriously and I would love to drill 4 feet into your shoulder.",
      author: "CINCO™ Holer",
      image: "images/pages/categories/cinco/cincolifestyle/CincoBroche/holer.PNG",
      verified: true
    },
    {
      text: "Buh. It was my lucky day, I got a free Bro-Oche when I ordered a small orange juice.",
      author: "Mr. Lucky Duck",
      image: "images/pages/categories/cinco/cincolifestyle/CincoBroche/mrluckyduck.PNG",
      verified: true
    },
    {
      text: "Me me wants a Bro-Oche!",
      author: "Rudy",
      image: "images/pages/categories/cinco/cincolifestyle/CincoBroche/rudy.PNG",
      verified: true
    }
  ];

  const warnings = [
    "CINCO™ is not responsible for any shoulder damage or tooth-related complications",
    "Do not attempt to remove or swap Bro-Oches without CINCO™ certified technician",
    "Some Bro-Oches may cause permanent spine curvature",
    "Keep Bro-Oche dry for first 6-8 months after installation",
    "If shoulder begins to glow or emit sounds, contact CINCO™ immediately",
    "Not compatible with other CINCO™ shoulder-mounted accessories"
  ];


  return (
    <CincoFashionLayout
      productName="CINCO™ Bro-Oche System"
      tagline="Jazz up any plain shirt with a Bro-Oche from CINCO™ Men"
      productImages={productImages}
      styleGuide={styleGuide}
      features={features}
      customerReviews={customerReviews}
      warnings={warnings}
    >
      <BookAnAppointment 
        productName="CINCO™ Bro-Oche"
        offerTitle="Limited Time Bro Offer!"
        offerText="Schedule your Bro-Oche installation today and receive a complimentary tooth removal kit!"
        offerDisclaimer="Tooth reattachment and shoulder reconstruction available for additional fee"
        buttonText="Become a Bro Today"
        certificationBody="Department of Broccessory Safety"
      />
    </CincoFashionLayout>
  );
};

export default CincoBroOche;