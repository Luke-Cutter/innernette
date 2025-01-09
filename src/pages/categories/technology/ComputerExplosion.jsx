import React from 'react';
import TechSupportLayout from '../../../components/layout/TechSupportLayout';

const ComputerExplosion = () => {
  const helpTopics = [
    {
      title: "What counts as an explosion?",
      description: "Any sudden release of circuits, smoke, or brown energy is technically an explosion. All are normal parts of the Innernette™ experience.",
      warning: "If explosion is not brown-colored, contact CINCO™",
    },
    {
      title: "Why do explosions happen?",
      description: "Explosions occur when your computer has too many good ideas at once. This is a sign of a healthy Innernette™ installation.",
      warning: "Lack of explosions may indicate depression",
    },
    {
      title: "What to do during an explosion",
      description: "Simply continue using your computer as normal. The explosion will resolve itself within 45 minutes.",
      warning: "Do not make eye contact with exploding parts",
    }
  ];

  const solutions = [
    {
      title: "Explosion Management",
      description: "Keep all explosions contained to computer room",
      icon: "💥"
    },
    {
      title: "Debris Collection",
      description: "Save all expelled parts for future upgrades",
      icon: "🧹"
    },
    {
      title: "Circuit Recovery",
      description: "Allow 45 minutes for circuits to return naturally",
      icon: "⏲️"
    }
  ];

  const relatedIssues = [
    {
      title: "Is Your Screen Too Brown?",
      link: "/BrownScreenCalibration"
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
    "Do not attempt to prevent natural explosions",
    "Keep all brown documents at least 45 feet from computer",
    "Explosions may cause temporary tooth loss",
    "If computer achieves liftoff, that's normal but concerning"
  ];

  return (
    <TechSupportLayout
      pageTitle="Computer Explosion Guide"
      tagline="It's Not a Bug, It's a Feature!"
      errorCode="BOOM-777"
      helpTopics={helpTopics}
      solutions={solutions}
      relatedIssues={relatedIssues}
      warnings={warnings}
    />
  );
};

export default ComputerExplosion;