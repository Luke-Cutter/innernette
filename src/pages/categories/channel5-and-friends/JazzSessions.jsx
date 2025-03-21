import React from 'react';
import Channel5Layout from '../../../components/layout/Channel5ShowsLayout';

const JazzSessions = () => {
    const episodes = [
        {
            season: 1,
            episodeNumber: 1,
            title: "Pizza and All That Jazz",
            description: "A hostess from a local pizza restaurant shares her jazz passion while discussing the importance of having a day job. Features impromptu counting exercises.",
            note: "Hot. Hot. Hot. Hot."
        },
        {
            season: 1,
            episodeNumber: 2,
            title: "Camp Counselor Blues",
            description: "A children's camp manager demonstrates their technique of playing jazz to sleeping kids. Includes discussion on why children shouldn't like jazz.",
            note: "Coming in on the 6 instead of the 8"
        },
        {
            season: 1,
            episodeNumber: 3,
            title: "Banking on Jazz",
            description: "Two musicians derail their jam session with an extended conversation about the merits of online banking versus driving to physical bank locations.",
            note: "Special guest: Former Comodo Bank customer"
        },
        {
            season: 1,
            episodeNumber: 4,
            title: "Day Jobs and Night Jams",
            description: "Various jazz enthusiasts discuss their regular jobs while attempting to coordinate a basic rhythm section. Timing issues persist.",
            note: "Multiple career paths explored"
        }
    ];

    const cast = [
        {
            name: "Tim Heidecker",
            role: "Musician",
            image: "images/pages/categories/channel5andfriends/JazzSessions/Tim.png",
            note: "Just learned about online banking"
        },
        {
            name: "Eric Wareheim",
            role: "Lead Contributor",
            image: "images/pages/categories/channel5andfriends/JazzSessions/Eric.png",
            note: "Specialist in syncopation"
        },
        {
            name: "Various Jazz Enthusiasts",
            role: "Musicians/Day Job Workers",
            image: "images/pages/categories/channel5andfriends/JazzSessions/professional.png",
            note: "Current and former industry professionals"
        }
    ];

    const airTime = {
        day: "Saturday",
        time: "4:00 AM",
        timezone: "EST",
        note: "Show starts whenever everyone gets off their day jobs"
    };

    const description = `Channel 5 Jazz Sessions offers an authentic look into the world of part-time jazz enthusiasts who maintain regular day jobs while pursuing their musical passions. Watch as pizza hostesses, camp counselors, and various service industry professionals attempt to coordinate jam sessions while sharing stories about online banking, career choices, and why children shouldn't appreciate jazz. Each episode features both musical attempts and meandering conversations that may or may not return to the original topic.`;

    const specialAnnouncement = "Musicians' day job schedules may affect program timing. All banking advice should be verified with actual financial professionals.";

    return (
        <Channel5Layout
            showTitle="Channel 5 Jazz Sessions"
            showImage="images/pages/categories/channel5andfriends/CatPage/JazzSessions.png"
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

export default JazzSessions;