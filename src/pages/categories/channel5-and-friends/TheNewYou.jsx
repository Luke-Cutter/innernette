import React from 'react';
import Channel5Layout from '../../../components/layout/Channel5ShowsLayout';

const TheNewYou = () => {
    const episodes = [
        {
            season: 1,
            episodeNumber: 1,
            title: "Hands & Mother Issues",
            description: "Maria B. demonstrates face cream on hands while processing childhood trauma about her 'fat, greasy hands.' Features unexpected argument with absent mother.",
            note: "Multiple lotions tested, multiple emotional breakdowns"
        },
        {
            season: 1,
            episodeNumber: 2,
            title: "Sister Comparisons & Moisturizer",
            description: "A simple moisturizer demonstration devolves into a heated monologue about Maria's more competent sister. Includes impromptu lotion testing.",
            note: "Sister's techniques referenced but not demonstrated"
        },
        {
            season: 1,
            episodeNumber: 3,
            title: "Mother-Daughter Skincare",
            description: "Maria explores the complex dynamics of mother-daughter relationships through aggressive lotion application. Features imaginary maternal criticism.",
            note: "Feels like shit, according to Maria"
        },
        {
            season: 1,
            episodeNumber: 4,
            title: "Rejuvenation & Resentment",
            description: "Watch as Maria demonstrates the glistening properties of various creams while working through unresolved family tensions.",
            note: "Your skin is so dry - Mom"
        }
    ];

    const cast = [
        {
            name: "Maria B.",
            role: "Host/Lotion Enthusiast",
            image: "images/pages/categories/cinco/cincotoys/CincoHoar/mariab.PNG",
            note: "Still working through some things"
        },
        {
            name: "Invisible Mother",
            role: "Unseen Critic",
            image: "images/pages/categories/channel5andfriends/TheNewYou/mother.png",
            note: "Frequently referenced, never present"
        }
    ];

    const airTime = {
        day: "Wednesday",
        time: "6:30 PM",
        timezone: "EST",
        note: "Scheduling dependent on Maria's emotional state"
    };

    const description = `Join Maria B. for 'The New You,' a unique skincare program that combines lotion application tutorials with spontaneous therapy sessions. Watch as Maria demonstrates various creams and moisturizers while processing complex family dynamics, particularly her relationship with her critical mother. Each episode promises both beauty tips and emotional breakthroughs, though not necessarily in that order.`;

    const specialAnnouncement = "Viewer discretion advised: Show may contain sudden emotional outbursts and unconventional lotion application techniques. No mothers were harmed in the filming of this program.";

    return (
        <Channel5Layout
            showTitle="The New You with Maria B."
            showImage="images/pages/categories/channel5andfriends/CatPage/TheNewYou.png"
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

export default TheNewYou;