import React from 'react';
import Channel5Layout from '../../../components/layout/Channel5ShowsLayout';

const QuallOfDuty = () => {
    const episodes = [
        {
            season: 1,
            episodeNumber: 1,
            title: "Pine Street Heat",
            description: "Officer Quall investigates suspicious activity on Pine Street while critiquing a suspect's choice in knives. Features impromptu marriage counseling session.",
            note: "Guest appearance by Bob Hope played by James Quall"
        },
        {
            season: 1,
            episodeNumber: 2,
            title: "The $400 Deal",
            description: "David Liebe Hart attempts to negotiate a suspicious transaction, leading to an intense confrontation with a criminal.",
            note: "Special guest: David Liebe Hart as Officer Hart"
        },
        {
            season: 1,
            episodeNumber: 3,
            title: "Thanksgiving Crisis",
            description: "While pursuing a suspect, Officer Quall breaks down about his wife's infidelity, comparing it to a 'thanksgiving dinner of sex.'",
            note: "Contains emotional dialogue about Tom, Dick, and Harry"
        },
        {
            season: 1,
            episodeNumber: 4,
            title: "Beat the Crackers",
            description: "A routine patrol turns into an impromptu therapy session when Quall's partner becomes more concerned about his mental state than the crime at hand.",
            note: "Partner suggests 'toning it down a bit'"
        }
    ];

    const cast = [
        {
            name: "James Quall",
            role: "Officer Quall",
            image: "images/pages/categories/channel5andfriends/QuallOfDuty/Quall.png",
            note: "Emotionally troubled law enforcement officer"
        },
        {
            name: "David Liebe Hart",
            role: "Officer Hart",
            image: "images/pages/categories/channel5andfriends/QuallOfDuty/David.PNG",
            note: "Suspicious deal maker"
        },
        {
            name: "Danny Trejo",
            role: "Criminal",
            image: "images/pages/categories/channel5andfriends/QuallOfDuty/DannyTrejo.PNG",
            note: "Did not kill nobody"
        }
    ];

    const airTime = {
        day: "Sunday",
        time: "6:00 PM",
        timezone: "EST",
        note: "Just got a lot hotter"
    };

    const description = `Experience the gritty streets of San Diego through the eyes of Officer Quall in this unconventional crime drama. Watch as routine police work frequently derails into personal confessions, marriage problems, and critiques of criminal weapon quality. Suitable for both adults and children, each episode balances intense law enforcement action with unexpected emotional revelations about Officer Quall's troubled personal life.`;

    const specialAnnouncement = "Warning: Show contains both crime-fighting action and extensive discussions about Officer Quall's marital problems.";

    return (
        <Channel5Layout
            showTitle="Quall of Duty: San Diego Streets"
            showImage="images/pages/categories/channel5andfriends/CatPage/QuallOfDuty.png"
            description={description}
            episodes={episodes}
            cast={cast}
            airTime={airTime}
            specialAnnouncement={specialAnnouncement}
        >
            {/* Additional show-specific content could go here */}
        </Channel5Layout>
    );
};

export default QuallOfDuty;