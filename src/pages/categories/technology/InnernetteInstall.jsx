import React from 'react';
import TechSupportLayout from '../../../components/layout/TechSupportLayout';

const InnernetteInstall = () => {
  const helpTopics = [
    {
      title: "Prepare Your System",
      description: "Disconnect ALL internet cables. Remove router. Unplug telephone line.",
      warning: "Failure to remove all connections may result in circuit overload",
    },
    {
      title: "Insert Web Directory Disc™",
      description: "Place brown side up. Close drive tray firmly but gently.",
      warning: "If disc makes grinding noise, that's normal",
    },
    {
      title: "Wait For Installation",
      description: "Installation takes 45-90 minutes. Computer may emit smoke.",
      warning: "Do not interrupt installation even if sparks occur",
    },
    {
      title: "Verify Installation",
      description: "Screen should turn brown. Mouse should click differently.",
      warning: "If screen isn't brown, installation failed",
    }
  ];

  const solutions = [
    {
      title: "CD-ROM Issues",
      description: "If disc won't read, try cleaning with brown cloth only",
      icon: "💿"
    },
    {
      title: "Drive Problems",
      description: "Grinding noise is expected. Smoke is concerning but normal",
      icon: "🔧"
    },
    {
      title: "Screen Color",
      description: "All content should display in various shades of brown",
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
    "Never interrupt the installation process",
    "Keep fire extinguisher handy but don't use it",
    "Installation requires complete internet disconnection",
    "Computer may become permanently brown-tinted"
  ];

  return (
    <TechSupportLayout
      pageTitle="Installing Your Innernette™"
      tagline="Your Gateway to Offline Excellence"
      errorCode="INST-404"
      helpTopics={helpTopics}
      solutions={solutions}
      relatedIssues={relatedIssues}
      warnings={warnings}
    />
  );
};

export default InnernetteInstall;