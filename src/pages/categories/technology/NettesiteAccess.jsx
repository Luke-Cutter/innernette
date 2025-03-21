import React from 'react';
import TechSupportLayout from '../../../components/layout/TechSupportLayout';

const NettesiteAccess = () => {
  const helpTopics = [
    {
      title: "How do I visit new Nettesites?",
      description: "New Nettesites must be included in your Web Directory Disc™. You cannot visit Nettesites that aren't pre-approved and pre-installed by CINCO™.",
      warning: "Attempting to type URLs will cause system instability",
    },
    {
      title: "When is the next Web Directory Disc™ coming out?",
      description: "New Web Directory Discs™ are released whenever CINCO™ discovers more Nettesites worth adding to the Innernette™.",
      warning: "Current wait time: 8-12 months",
    },
    {
      title: "Why are all Nettesites in brown?",
      description: "Brown is the most efficient color for offline viewing. Other colors require internet connection and may harm your eyes.",
      warning: "If you see non-brown colors, remove disc immediately",
    }
  ];

  const solutions = [
    {
      title: "Directory Navigation",
      description: "Use provided brown buttons to move between pages",
      icon: "📖"
    },
    {
      title: "Loading Times",
      description: "2-5 minutes per page is normal and healthy",
      icon: "⏳"
    },
    {
      title: "Brown Calibration",
      description: "Adjust monitor until all text is perfectly sepia",
      icon: "🖥️"
    }
  ];

  const relatedIssues = [
    {
      title: "Is Your Screen Too Brown?",
      link: "/BrownScreenCalibration"
    },
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
    "Never attempt to create new Innernette pages",
    "Don't lick the Web Directory Disc™",
    "Avoid rapid page turning (minimum 45 seconds between pages)",
    "If pages begin moving on their own, that's normal but concerning"
  ];

  return (
    <TechSupportLayout
      pageTitle="Nettesite Access"
      tagline="Your Pre-Approved Window to the Innernette™"
      errorCode="WEB-808"
      helpTopics={helpTopics}
      solutions={solutions}
      relatedIssues={relatedIssues}
      warnings={warnings}
    />
  );
};

export default NettesiteAccess;