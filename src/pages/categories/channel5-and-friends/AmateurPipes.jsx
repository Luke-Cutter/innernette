import React from 'react';
import Channel5Layout from '../../../components/layout/Channel5ShowsLayout';

const AmateurPipes = () => {
    const episodes = [
        {
            season: 1,
            episodeNumber: 1,
            title: "First Time's the Charm",
            description: "Three brave newcomers attempt to play 'Amazing Grace' on bagpipes after just 2 hours of practice. Features special ear protection segment.",
            note: "Neighbor complaints filed: 7"
        },
        {
            season: 1,
            episodeNumber: 2,
            title: "The Great Highland Struggle",
            description: "Local accountant Bill Thompson discovers that filling the bag is harder than filing taxes. Guest appearance by his concerned cat.",
            note: "Two sets of bagpipes deflated during filming"
        },
        {
            season: 1,
            episodeNumber: 3,
            title: "Pipes in the Park",
            description: "Five beginners attempt an outdoor practice session. Includes footage of fleeing wildlife and confused joggers.",
            note: "Now banned from Central Park"
        },
        {
            season: 1,
            episodeNumber: 4,
            title: "Wedding Day Surprise",
            description: "Amateur piper Janet decides to surprise her sister's wedding with a musical tribute. Results exactly as expected.",
            note: "Family reunions permanently canceled"
        }
    ];

    const cast = [
        {
            name: "Various Amateur Pipers",
            role: "Brave Beginners",
            image: "images/pages/categories/channel5andfriends/AmateurPipes/duncan.png",
            note: "No prior musical experience required"
        },
        {
            name: "Duncan McLeod",
            role: "Frustrated Bagpipe Instructor",
            image: "images/pages/categories/channel5andfriends/AmateurPipes/pipers.png",
            note: "Currently seeking new career opportunities"
        }
    ];

    const airTime = {
        day: "Join U",
        time: "3:00 AM",
        timezone: "EST This Fall",
        note: "Subject to noise ordinance restrictions"
    };

    const description = `Experience the raw, unfiltered sound of absolute beginners attempting to master Scotland's most challenging instrument. Each episode features brave newcomers who have decided, against all advice, to take up the bagpipes. Watch as they struggle with everything from proper bag inflation to finger placement, all while their neighbors file noise complaints. Amateur Pipes proves that everyone has to start somewhere - we just recommend starting far away from populated areas.`;

    const specialAnnouncement = "Channel 5 is not responsible for any emotional or auditory damage caused by this program. Viewer discretion (and ear protection) advised.";

    return (
        <Channel5Layout
            showTitle="Amateur Pipes"
            showImage="images/pages/categories/channel5andfriends/CatPage/AmateurPipes.png"
            description={description}
            episodes={episodes}
            cast={cast}
            airTime={airTime}
            specialAnnouncement={specialAnnouncement}
        >
        </Channel5Layout>
    );
};

export default AmateurPipes;