import React from 'react';
import TechSupportLayout from '../../../components/layout/TechSupportLayout';

const UpgradeQuestions = () => {
  const helpTopics = [
    {
      title: "When is Innernette™ 3.0 coming out?",
      description: "CINCO™ will release version 3.0 when we discover more pages worth adding to the Web Directory Disc™. Current estimate: Eventually™.",
      warning: "Do not listen to rumors about Innernette™ 3.0 from non-CINCO™ sources",
    },
    {
      title: "Can I add more Web Directory pages?",
      description: "Additional pages must be officially pressed onto a brown disc by CINCO™. Hand-drawing new pages will void warranty.",
      warning: "Never attempt to create your own web pages using crayons",
    },
    {
      title: "How do I get new emails?",
      description: "New emails arrive whenever someone in your house types one. For external emails, wait for postal delivery.",
      warning: "Email capacity limited to 3 per house per day",
    }
  ];

  const solutions = [
    {
      title: "Version Check",
      description: "Count the number of brown rings on your disc",
      icon: "💿"
    },
    {
      title: "Future Updates",
      description: "Keep your brown crayons ready for manual updates",
      icon: "✏️"
    },
    {
      title: "Hardware Upgrades",
      description: "Add more brown paint to your monitor monthly",
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
    }
  ];

  const warnings = [
    "Never attempt to upgrade using non-brown materials",
    "Future versions may require additional teeth removal",
    "Upgrades cannot be downloaded (because that's impossible)",
    "Keep your expectations at CINCO™ approved levels"
  ];

  return (
    <TechSupportLayout
      pageTitle="Upgrade Questions"
      tagline="The Future is Brown"
      errorCode="UPG-202"
      helpTopics={helpTopics}
      solutions={solutions}
      relatedIssues={relatedIssues}
      warnings={warnings}
    />
  );
};

export default UpgradeQuestions;