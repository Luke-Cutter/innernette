import React from 'react';
import Channel5Layout from '../../../components/layout/Channel5ShowsLayout';

const HobbyHoles = () => {
    const episodes = [
        {
            season: 1,
            episodeNumber: 1,
            title: "Paper Holes and Natural Formations",
            description: "KJ Nutt demonstrates the art of paper hole creation and explores a natural 3-foot hole, complete with white paint marking techniques.",
            note: "It's not a pit!"
        },
        {
            season: 1,
            episodeNumber: 2,
            title: "Hole or Not a Hole",
            description: "KJ examines various depressions and definitively determines which qualify as proper holes. Features controversial hole judgments.",
            note: "Don't be hasty"
        },
        {
            season: 1,
            episodeNumber: 3,
            title: "Standing in Holes",
            description: "KJ demonstrates the height-altering properties of various holes and proper hole-standing technique.",
            note: "Not a grave - confirmed"
        }
    ];

    const cast = [
        {
            name: "KJ Nutt",
            role: "Hole Expert",
            image: "images/pages/categories/channel5andfriends/HobbyHoles/kjnutt.png",
            note: "Self-proclaimed hole expert and enthusiast"
        }
    ];

    const airTime = {
        day: "Monday",
        time: "8:00 PM",
        timezone: "EST",
        note: "Weather dependent - some holes fill with water"
    };

    const description = `Join KJ Nutt, the world's most passionate hole expert, as he explores, creates, and evaluates holes of all shapes and sizes. From paper perforations to natural formations, KJ shares his unique expertise on what makes a proper hole. Each episode features hands-on demonstrations, hole authentication, and KJ's strong opinions on what does and doesn't qualify as a genuine hole. Learn essential skills like hole marking, proper hole-standing technique, and the crucial difference between a hole and a pit.`;

    const specialAnnouncement = "Due to recent events, viewers are reminded that all holes featured on the show are strictly for hobby purposes. White paint marking required for hole ownership.";

    return (
        <Channel5Layout
            showTitle="Hobby Holes with KJ Nutt"
            showImage="images/pages/categories/channel5andfriends/CatPage/HobbyHoles.png"
            description={description}
            episodes={episodes}
            cast={cast}
            airTime={airTime}
            specialAnnouncement={specialAnnouncement}
        >

        </Channel5Layout>
    );
};

export default HobbyHoles;