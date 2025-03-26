import React from 'react';
import TechSupportLayout from '../../../components/layout/TechSupportLayout';

const NetteTunesSupport = () => {
  const helpTopics = [
    {
      title: "Current Song Library",
      description: "Your base Nette Tunes installation includes 'Funk Barn' by the Jeff GoldBluMan Group (4:45 runtime). Song will automatically repeat every 45 seconds due to memory limitations.",
      warning: "Do not attempt to skip, pause, or escape Funk Barn",
    },
    {
      title: "Expanding Your Library",
      description: "Additional 102 songs available via CINCO™ Music Expansion CD-ROM. Due to unfortunate circumstances involving Terry Cinco's regrettable actions in 2009, we had to give a free CD-ROM update and are legally required to sell songs separately. CINCO™ is NOT in the business of handouts.",
      warning: "Never mention Lynn Cinco while music is playing",
    },
    {
      title: "Memory Management",
      description: "Each song requires removal of one personal memory to store. Please schedule memory removal appointment with your CINCO™ technician.",
      warning: "Some memories may resist replacement with Funk Barn",
    },
    {
      title: "Sound Quality",
      description: "All songs are converted to brown noise for optimal offline playback. Any resemblance to original music is coincidental but intended.",
      warning: "If music appears in color, remove disc immediately",
    }
  ];

  const solutions = [
    {
      title: "Funk Management",
      description: "Regular exposure to Funk Barn builds immunity",
      icon: "🎵"
    },
    {
      title: "Legal Compliance",
      description: "Keep all music-related documents in brown folders",
      icon: "📂"
    },
    {
      title: "Memory Exchange",
      description: "Trade unwanted memories for new songs",
      icon: "🧠"
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
    "Do not attempt to create new songs",
    "Keep all receipts away from Terry Cinco",
    "Music may cause involuntary dancing (that's normal)",
    "If Funk Barn starts playing backwards, that's normal but concerning",
    "Legal notice: Any references to the events of 2009 are purely coincidental"
  ];

  return (
    <TechSupportLayout
      pageTitle="NetteTunes Support"
      tagline="One Song Is All You Need"
      errorCode="FNK-745"
      helpTopics={helpTopics}
      solutions={solutions}
      relatedIssues={relatedIssues}
      warnings={warnings}
    >
      <div className="bg-amber-50/50 p-6 rounded-lg border-2 border-amber-200 mt-8">
        <h3 className="text-xl font-mono text-amber-800 mb-4">Legal Disclaimer</h3>
        <p className="text-amber-700 text-sm font-mono">
          Due to ongoing legal proceedings and family matters from 2009, CINCO™ Corporation 
          is required to inform users that expansion songs must be purchased separately. 
          This is not related to any specific events or persons (especially Lynn) and 
          should not be discussed during Funk Barn playback. The Jeff GoldBluMan Group 
          maintains no opinion on these matters.
        </p>
      </div>
    </TechSupportLayout>
    
  );
};

export default NetteTunesSupport;