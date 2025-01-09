import React from 'react';
import CincoToysLayout from '../../../../components/layout/CincoToysLayout';

const CincoDump = () => {
    const productImages = [
        "images/pages/categories/cinco/cincotoys/CincoDump/Dump1.PNG", // Full H'oar view
        "images/pages/categories/cinco/cincotoys/CincoDump/Dump2.PNG", // Coin slot close-up
        "images/pages/categories/cinco/cincotoys/CincoDump/Dump3.PNG", // Action shot of riding
      ];

  const processSteps = [
    {
      title: "Step 1: Activation / Активация",
      description: "Remove D'ump from packaging and place in desired wilderness location",
      icon: "🦌"
    },
    {
      title: "Step 2: Configuration / Конфигурация",
      description: "Set preferred sports officiating mode (Baseball/Football/Hockey/B'ougar)",
      icon: "⚾"
    },
    {
      title: "Step 3: Wildlife Detection / Обнаружение дикой природы",
      description: "Ensure Bear-Aware Mode™ is activated for safe wilderness use",
      icon: "🐻"
    },
    {
      title: "Step 4: Enjoy / Наслаждайтесь",
      description: "Experience silent, deer-shaped officiating (until bears arrive)",
      icon: "🎯"
    }
  ];

  const features = [
    {
      title: "Silent Operation / Бесшумная работа",
      description: "Quiet as Churched Mouse™",
      icon: "🤫"
    },
    {
      title: "Bear Detection / Обнаружение медведей",
      description: "Automatic silent mode when bears are nearby",
      icon: "🐻"
    },
    {
      title: "Deer Aesthetics / Олень эстетика",
      description: "Shaped like deer, doesn't smell like one!",
      icon: "🦌"
    }
  ];

  const customerReviews = [
    {
      text: "D'ump keeps my camping trips safe by going silent whenever danger approaches. Haven't left my tent in 6 days.",
      image: "images/pages/categories/cinco/cincotoys/CincoDump/casey.PNG",
      author: "Casey Tatum",
      verified: true
    },
    {
      text: "D'ump helps me know when to hide from bears, great for your cats!",
      image: "images/pages/categories/cinco/cincotoys/CincoHoar/mariab.PNG",
      author: "Maria B.",
      verified: true
    },
    {
      text: "My D'ump hasn't made a sound in weeks. This is fine. Everything is fine.",
      image: "images/pages/categories/cinco/cincotoys/CincoDump/HisBrother.PNG",
      author: "Casey's Brother",
      verified: true
    },
    {
      text: "Just green-lit my next project: D'ump vs B'ougar: Dawn of Wilderness",
      image: "images/pages/categories/cinco/cincotoys/CincoHoar/glentennis.jpg",
      author: "Glen Tennis",
      verified: true
    }
];

  const warnings = [
    "May cause undue paranoia if batteries are depleted / Может вызвать чрезмерную паранойю при разряженных батареях",
    "May attract natural predators / Может привлекать хищников",
    "Not responsible for bear encounters / Не несет ответственности за встречи с медведями",
    "B'ougar interaction results may vary / Результаты взаимодействия с B'ougar могут различаться",
    "Do not attempt to feed D'ump / Не пытайтесь кормить D'ump",
    "If paranoia persists for more than 48 hours, contact CINCO™ wilderness support",
    "Battery replacement must be performed in bear-free zone",
    "Not responsible for tent-based psychological episodes"
  ];

  return (
    <CincoToysLayout
      productName="CINCO™ D'ump / CINCO™ Д'умп"
      tagline="The Ultimate Sports Official for the Great Outdoors! / Окончательный спортивный судья для дикой природы!"
      productImages={productImages}
      processSteps={processSteps}
      features={features}
      customerReviews={customerReviews}
      warnings={warnings}
    />
  );
};

export default CincoDump;