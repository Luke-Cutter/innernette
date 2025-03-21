import React from 'react';
import TechSupportLayout from '../../../components/layout/TechSupportLayout';

const BrownScreenCalibration = () => {
  const helpTopics = [
    {
      title: "Check Your Brown Levels",
      description: "Your screen should display exactly 45 shades of brown. If you see any other colors, your calibration needs adjustment.",
      warning: "Non-brown colors may indicate internet interference",
    },
    {
      title: "Manual Calibration",
      description: "Apply CINCO™ Brown Tint Paste to screen surface using approved circular motions. Wait 45 minutes for paste to dry.",
      warning: "Only use official CINCO™ Brown Tint Paste",
    },
    {
      title: "Digital Adjustment",
      description: "Press random keys until screen achieves desired brownness. If screen becomes too brown, wait 45 minutes and try again.",
      warning: "Never adjust brownness during page loads",
    },
    {
      title: "Emergency De-Browning",
      description: "In case of excessive brown, place CINCO™ Moisture Absorbing Sock over monitor for exactly 45 minutes.",
      warning: "Sock must be brown and CINCO™ certified",
    }
  ];

  const solutions = [
    {
      title: "Brown Detection",
      description: "Compare screen color to official CINCO™ Brown Swatch Card",
      icon: "🎨"
    },
    {
      title: "Tint Management",
      description: "Monthly brown level checks recommended",
      icon: "📊"
    },
    {
      title: "Emergency Procedures",
      description: "Keep spare brown tint supplies nearby",
      icon: "🧰"
    }
  ];

  const relatedIssues = [
    {
      title: "Worried Your Computer is Going to Explode? Don't Be!",
      link: "/ComputerExplosion"
    },
    {
      title: "General Computer Questions",
      link: "/GeneralQuestions"
    },
    {
      title: "How do I Install the Innernette? How Are You Seeing This?",
      link: "/InnernetteInstall"
    },
    {
      title: "Mouse Making Strange Noises?",
      link: "/MouseBallMaintenance"
    },
    {
      title: "How Do I access Nettesites?",
      link: "/NettesiteAccess"
    },
    {
      title: "Why Can I Only Play Funk Barn on NetteTunes?",
      link: "/NetteTunesSupport"
    },
    {
      title: "Worried about performance?",
      link: "/PerformanceIssues"
    },
    {
      title: "Feeling Insecure?",
      link: "/SecurityConcerns"
    },
    {
      title: "Want To Upgrade But Don't Know How?",
      link: "/UpgradeQuestions"
    }
  ];


  const warnings = [
    "Never look directly at pure brown",
    "Avoid calibrating during full moons",
    "Keep brown paste away from non-computer surfaces",
    "If screen achieves perfect brown, contact CINCO™ immediately"
  ];

  return (
    <TechSupportLayout
      pageTitle="Brown Screen Calibration"
      tagline="Achieving The Perfect Shade of Brown"
      errorCode="BRN-450"
      helpTopics={helpTopics}
      solutions={solutions}
      relatedIssues={relatedIssues}
      warnings={warnings}
    />
  );
};

export default BrownScreenCalibration;