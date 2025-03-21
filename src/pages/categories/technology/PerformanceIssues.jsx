import React from 'react';
import TechSupportLayout from '../../../components/layout/TechSupportLayout';

const PerformanceIssues = () => {
  const helpTopics = [
    {
      title: "Is 2-5 minutes normal for page loads?",
      description: "Yes! Each page must be carefully reconstructed from the Web Directory Disc™. Faster loads may indicate dangerous internet interference.",
      warning: "If pages load faster than 2 minutes, system may be compromised",
    },
    {
      title: "Why does my computer make grinding noises?",
      description: "The CINCO™ circuits require constant physical agitation to maintain offline status. Grinding indicates healthy operation.",
      warning: "If grinding stops, hit computer with CINCO™ approved mallet",
    },
    {
      title: "What does 'Too Many Circuits' error mean?",
      description: "Your Innernette™ has detected an excess of processing power. Unplug computer for 45 minutes to release extra circuits.",
      warning: "Excess circuits may escape through keyboard",
    }
  ];

  const solutions = [
    {
      title: "Smoke Management",
      description: "Brown smoke is good, grey smoke means add more circuits",
      icon: "💨"
    },
    {
      title: "Circuit Cooling",
      description: "Place frozen CINCO™ products near vents",
      icon: "❄️"
    },
    {
      title: "Speed Optimization",
      description: "Remove one RAM stick for each hour of use",
      icon: "⚡"
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
      title: "Feeling Insecure?",
      link: "/SecurityConcerns"
    },
    {
      title: "Want To Upgrade But Don't Know How?",
      link: "/UpgradeQuestions"
    }
  ];


  const warnings = [
    "Never attempt to speed up page loads",
    "Do not suppress grinding noises with pillows",
    "Circuit smoke should not be inhaled (but will be)",
    "If computer starts floating, that's normal but concerning"
  ];

  return (
    <TechSupportLayout
      pageTitle="Performance Issues"
      tagline="Slower is Safer™"
      errorCode="PRF-451"
      helpTopics={helpTopics}
      solutions={solutions}
      relatedIssues={relatedIssues}
      warnings={warnings}
    />
  );
};

export default PerformanceIssues;