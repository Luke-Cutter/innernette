import React from 'react';
import Channel5Layout from '../../../components/layout/Channel5ShowsLayout';

const NightsWithTim = () => {
    const episodes = [
        {
            season: 1,
            episodeNumber: 1,
            title: "Eric Wareheim & His Rascals",
            description: "Tim interviews Eric about his illegal collection of 'rascals.' Features custom sweatshirt showcase and problematic photo folder mishap with Ben.",
            note: "Incident with live rascal on set"
        },
        {
            season: 1,
            episodeNumber: 2,
            title: "The Pep-Pep Call",
            description: "Eric demonstrates his unique rascal-calling technique while Tim grows increasingly concerned. Includes wife's off-screen rascal tending.",
            note: "Multiple bite incidents reported"
        },
        {
            season: 1,
            episodeNumber: 3,
            title: "Endangered Breeds",
            description: "A deep dive into Eric's 'hush-hush' rascal collection, featuring questionably legal photography and concerning revelations.",
            note: "Wrong folder incident with Ben"
        },
        {
            season: 1,
            episodeNumber: 4,
            title: "Weekend Hobbies",
            description: "Tim attempts to conduct a normal interview while Eric shares increasingly disturbing details about his rascal-collecting weekend activities.",
            note: "Stench becomes issue in studio"
        }
    ];

    const cast = [
        {
            name: "Tim Heidecker",
            role: "Host",
            image: "images/pages/categories/channel5andfriends/NightsWithTim/timheidecker.png",
            note: "Bitten during filming"
        },
        {
            name: "Eric Wareheim",
            role: "Guest/Rascal Enthusiast",
            image: "images/pages/categories/channel5andfriends/NightsWithTim/ericwareheim.png",
            note: "Claims rascals are endangered breed"
        },
        {
            name: "Ben",
            role: "Technical Support",
            image: "images/pages/categories/channel5andfriends/NightsWithTim/ben.png",
            note: "Struggles with folder navigation"
        }
    ];

    const airTime = {
        day: "Late Night",
        time: "12:00 AM",
        timezone: "EST",
        note: "Subject to rascal behavior"
    };

    const description = `Experience the uncomfortable world of late-night television with 'Nights with Tim Heidecker,' where standard talk show format meets inexplicable guest segments. Watch as Tim attempts to maintain professional composure while interviewing guests like Eric Wareheim about his questionably legal rascal collection. Each episode features custom sweatshirts, technical difficulties with Ben, and the potential for live rascal appearances.`;

    const specialAnnouncement = "No hosts were permanently harmed during filming. The nature and legal status of 'rascals' remains unclear. Viewer discretion advised.";

    return (
        <Channel5Layout
            showTitle="Nights with Tim Heidecker"
            showImage="images/pages/categories/channel5andfriends/CatPage/NightsWithTim.png"
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

export default NightsWithTim;