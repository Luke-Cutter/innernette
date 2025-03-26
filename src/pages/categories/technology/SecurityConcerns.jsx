import React from 'react';
import TechSupportLayout from '../../../components/layout/TechSupportLayout';

const SecurityConcerns = () => {
  const helpTopics = [
    {
      title: "Is my data safe if I'm not connected to anything?",
      description: "YES! Your data is completely secure because it never leaves your house. CINCO™'s patented 'No-Connection' technology means hackers can't get in because there's nothing to get into!",
      warning: "If data begins moving between rooms, contact CINCO™",
    },
    {
      title: "Why do I need to remove my router?",
      description: "Routers emit harmful internet waves that can corrupt your Innernette™ circuits. Even an unplugged router can cause data leakage.",
      warning: "Router presence may void your CINCO™ warranty",
    },
    {
      title: "Can hackers get into my Innernette™?",
      description: "Hackers would need to physically enter your house and use your computer. Keep your doors locked and windows brown-tinted.",
      warning: "If you see someone using your computer, that's a hacker not a real person.",
    }
  ];

  const solutions = [
    {
      title: "Physical Security",
      description: "Keep your Web Directory Disc™ in a brown safe when not in use",
      icon: "🔒"
    },
    {
      title: "Circuit Protection",
      description: "Regular smoke checks ensure secure connections",
      icon: "💨"
    },
    {
      title: "Data Safety",
      description: "Print important files and store in brown folders",
      icon: "📁"
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
      title: "Want To Upgrade But Don't Know How?",
      link: "/UpgradeQuestions"
    }
  ];


  const warnings = [
    "Never reveal your CINCO™ ID to non-house members",
    "Keep all windows closed during computing sessions",
    "Avoid using computer during electrical storms",
    "Do not share brown smoke with neighbors"
  ];

  return (
    <TechSupportLayout
      pageTitle="Security Concerns"
      tagline="Your Data Is Safe Because It's Nowhere"
      errorCode="SEC-555"
      helpTopics={helpTopics}
      solutions={solutions}
      relatedIssues={relatedIssues}
      warnings={warnings}
    />
  );
};

export default SecurityConcerns;