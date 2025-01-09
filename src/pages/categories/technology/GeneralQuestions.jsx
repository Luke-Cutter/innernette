import React from 'react';
import TechSupportLayout from '../../../components/layout/TechSupportLayout';

const GeneralQuestions = () => {
  const helpTopics = [
    {
      title: "Why can't I connect to Google?",
      description: "Innernette™ is a completely offline experience. Google is not part of your Web Directory Disc™.",
      warning: "Never attempt to access non-CINCO™ websites",
    },
    {
      title: "Where are my emails going?",
      description: "Emails only work within your house. For external communication, print and mail them.",
      warning: "Emails may get lost in the circuits",
    },
    {
      title: "Why does my computer need to be unplugged?",
      description: "Regular electricity interferes with CINCO™ circuits. Use only approved power sources.",
      warning: "Standard power may cause unwanted internet connections",
    }
  ];

  const solutions = [
    {
      title: "Email Solutions",
      description: "Use CINCO™ approved printer for email delivery",
      icon: "📧"
    },
    {
      title: "Power Management",
      description: "Unplug for 45 minutes every 3 hours of use",
      icon: "🔌"
    },
    {
      title: "Mouse Issues",
      description: "Regular cleaning of brown mouse ball required",
      icon: "🖱️"
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
    "Never connect to regular internet",
    "Don't attempt to use non-brown accessories",
    "Avoid looking directly at the screen during power cycles",
    "Keep all manuals in a brown folder"
  ];

  return (
    <TechSupportLayout
      pageTitle="General Questions"
      tagline="Common Innernette™ Queries"
      errorCode="FAQ-101"
      helpTopics={helpTopics}
      solutions={solutions}
      relatedIssues={relatedIssues}
      warnings={warnings}
    />
  );
};

export default GeneralQuestions;