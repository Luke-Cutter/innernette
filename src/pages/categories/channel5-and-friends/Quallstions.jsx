import React from 'react';
import Channel5Layout from '../../../components/layout/Channel5ShowsLayout';

const Quallstions = () => {
    const episodes = [
        {
            season: 1,
            episodeNumber: 1,
            title: "Public Transportation & Personal Matters",
            description: "Quall tackles questions about bus passes, personal weight, and the many uses of paper towels in his unique conversational style.",
            note: "First appearance of the tap card discussion"
        },
        {
            season: 1,
            episodeNumber: 2,
            title: "Everyday Solutions with Quall",
            description: "Quall shares his wisdom on daily life challenges and household items, featuring his signature tangential storytelling.",
            note: "I'm Quall"
        }
    ];

    const cast = [
        {
            name: "Quall",
            role: "Host & Answer Provider",
            image: "images/pages/categories/entertainment/EntertainmentMovies/quall.png",
            note: "59 years of wisdom and counting"
        }
    ];

    const airTime = {
        day: "Wednesday",
        time: "7:00 PM",
        timezone: "EST",
        note: "Questions accepted 24/7, answers provided when Quall feels like it"
    };

    const description = `Join Quall, your friendly neighborhood question-answerer, as he tackles life's everyday inquiries with his unique perspective and 59 years of lived experience. From public transportation to paper products, no topic is too mundane or personal for Quall's meandering yet insightful responses. Each episode features real questions from real people, answered with Quall's signature style of going slightly off-topic while somehow still being helpful.`;

    const specialAnnouncement = "Now accepting questions via tap card. I'm Quall.";

    return (
        <Channel5Layout
            showTitle="Quallstions with James Quall"
            showImage="images/pages/categories/channel5andfriends/CatPage/Quallstions.png"
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

export default Quallstions;