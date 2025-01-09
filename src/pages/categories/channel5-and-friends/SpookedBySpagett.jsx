import React from 'react';
import Channel5Layout from '../../../components/layout/Channel5ShowsLayout';

const SpookedBySpagett = () => {
    const episodes = [
        {
            season: 1,
            episodeNumber: 1,
            title: "The Office Meeting",
            description: "Spagett lurks behind office furniture for 10 minutes before spooking workers planning their staff meeting. Victims mistake him for boss's kid.",
            note: "Business cards distributed post-spook"
        },
        {
            season: 1,
            episodeNumber: 2,
            title: "Armando's Trash Run",
            description: "Kitchen worker Armando encounters Spagett during a routine garbage disposal. Features Spagett's signature long tail reveal.",
            note: "Just abnormal, not too scary"
        },
        {
            season: 1,
            episodeNumber: 3,
            title: "Corporate Spook",
            description: "Spagett infiltrates a corporate office building, spending hours lurking behind water coolers and potted plants before his big reveal.",
            note: "Security footage included"
        },
        {
            season: 1,
            episodeNumber: 4,
            title: "Spagett's Greatest Spoops",
            description: "A compilation of Spagett's most successful spooks, featuring confused victims and their post-spook reactions.",
            note: "You should've seen your faces"
        }
    ];

    const cast = [
        {
            name: "Spagett",
            role: "Professional Spooker",
            image: "images/pages/categories/channel5andfriends/SpookedBySpagett/SpagettTheLegend.png",
            note: "Available for parties"
        },
        {
            name: "Armando",
            role: "Spooked Dishwasher",
            image: "images/pages/categories/channel5andfriends/SpookedBySpagett/armando.png",
            note: "Just taking the trash out"
        },
        {
            name: "Various Victims",
            role: "The Spooked",
            image: "images/pages/categories/channel5andfriends/SpookedBySpagett/victims.png",
            note: "Often mistake Spagett for a child"
        }
    ];

    const airTime = {
        day: "Friday",
        time: "2:00 AM",
        timezone: "EST",
        note: "Spooks can occur at any time"
    };

    const description = `Join Spagett, the professional spooker, as he hides in various locations waiting to surprise unsuspecting victims. Watch as office workers, kitchen staff, and random passersby try to make sense of being spooked by a full-grown man they initially mistake for a child. Each episode features Spagett's signature moves, including extended lurking, business card distribution, and occasional warnings about poisoned food.`;

    const specialAnnouncement = "Spagett is a professional spooker. Do not attempt to spook others without proper training and business cards.";

    return (
        <Channel5Layout
            showTitle="Spooked By Spagett"
            showImage="images/pages/categories/channel5andfriends/CatPage/Spagett.png"
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

export default SpookedBySpagett;