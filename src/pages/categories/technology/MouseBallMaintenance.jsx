import React from 'react';
import TechSupportLayout from '../../../components/layout/TechSupportLayout';

const MouseBallMaintenance = () => {
  const helpTopics = [
    {
      title: "Ball Removal Procedure",
      description: "Rotate mouse exactly 45 degrees counterclockwise. Remove ball cover using CINCO™ Prying Tool. Catch ball as it falls (it will be hot).",
      warning: "Mouse balls may try to escape during removal",
    },
    {
      title: "Cleaning The Ball",
      description: "Submerge ball in CINCO™ Brown Ball Bath solution for 45 minutes. Dry using only approved brown lint-free cloth.",
      warning: "Ball may develop consciousness during cleaning",
    },
    {
      title: "Roller Maintenance",
      description: "Clean internal rollers with CINCO™ Roller Scraping Tool. If rollers make screaming sounds, that's normal.",
      warning: "Do not make eye contact with rollers during cleaning",
    },
    {
      title: "Ball Reinstallation",
      description: "Place clean ball back into mouse. Whisper encouragement to it. Replace cover while maintaining positive attitude.",
      warning: "Negative thoughts may cause ball to reject reinstallation",
    }
  ];

  const solutions = [
    {
      title: "Ball Care",
      description: "Monthly brown ball bath recommended",
      icon: "🔮"
    },
    {
      title: "Roller Health",
      description: "Regular encouragement improves performance",
      icon: "🛠️"
    },
    {
      title: "Emergency Response",
      description: "Keep spare balls in brown containment unit",
      icon: "⚾"
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
    "Never attempt to polish mouse ball",
    "Keep ball away from other electronic devices",
    "Do not allow balls from different mice to meet",
    "If ball begins orbiting monitor, that's normal but concerning"
  ];

  return (
    <TechSupportLayout
      pageTitle="Mouse Ball Maintenance"
      tagline="Keep Your Ball Rolling Right"
      errorCode="MUS-455"
      helpTopics={helpTopics}
      solutions={solutions}
      relatedIssues={relatedIssues}
      warnings={warnings}
    />
  );
};

export default MouseBallMaintenance;