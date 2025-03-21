import React from 'react';
import Channel5Layout from '../../../components/layout/Channel5ShowsLayout';

const CleaningAfterCat = () => {
    const episodes = [
        {
            season: 1,
            episodeNumber: 1,
            title: "Ex-Boyfriend Special",
            description: "Maria invites former boyfriend Matt to discuss cat cleanup, leading to revelations about their breakup and an unexpected confrontation over his Cats-musical-themed pets.",
            note: "Confrontation warning"
        },
        {
            season: 1,
            episodeNumber: 2,
            title: "The Importance of Daily Maintenance",
            description: "Maria demonstrates proper cleaning techniques while processing unresolved relationship issues with another guest.",
            note: "Guest declined follow-up appearance"
        },
        {
            season: 1,
            episodeNumber: 3,
            title: "Cat Names and Consequences",
            description: "A seemingly innocent discussion about pet naming conventions takes an aggressive turn when the guest can't identify their own cats.",
            note: "Security added to set"
        },
        {
            season: 1,
            episodeNumber: 4,
            title: "Litterbox Court",
            description: "Maria sets up a mock trial for guests who don't clean their litterboxes regularly, complete with jury of stuffed cats and mandatory sentencing.",
            note: "Multiple restraining orders filed"
        },
        {
            season: 1,
            episodeNumber: 5,
            title: "The Cat Whisperer Incident",
            description: "A professional cat behaviorist attempts to intervene in Maria's hosting style. Maria responds by living in a giant litterbox for the duration of the episode.",
            note: "Cat behaviorist now works exclusively with dogs"
        },
        {
            season: 1,
            episodeNumber: 6,
            title: "Family Reunion Special",
            description: "Maria invites her entire family to discuss their historical pet care practices, ends up recreating childhood traumas with cat litter.",
            note: "Holiday gatherings permanently cancelled"
        },
        {
            season: 2,
            episodeNumber: 1,
            title: "Celebrity Pet Owner Special",
            description: "Three celebrity guests flee mid-episode as Maria insists on reading dramatic interpretations of their cats' diary entries.",
            note: "Celebrities' identities legally concealed"
        },
        {
            season: 2,
            episodeNumber: 2,
            title: "Live from the Shelter",
            description: "Maria broadcasts from an animal shelter, assigns each employee a musical from Andrew Lloyd Webber's catalog to perform while cleaning cages.",
            note: "Shelter relocated without forwarding address"
        },
        {
            season: 2,
            episodeNumber: 3,
            title: "The Final Cleaning",
            description: "Maria attempts to cleanse the city of improper cat care by leading a parade of cat owners through the streets while wearing a crown made of used litter.",
            note: "Show moved to secure undisclosed location"
        }
    ];

    const cast = [
        {
            name: "Maria Bamford",
            role: "Host/Cat Care Enthusiast",
            image: "images/pages/categories/health/Shows/CleaningAfterCat/mariabamford.png",
            note: "Has strong feelings about pet responsibility"
        },
        {
            name: "Matt",
            role: "Ex-Boyfriend/Guest",
            image: "images/pages/categories/health/Shows/CleaningAfterCat/matt.png",
            note: "Owner of Cats-musical-named cats"
        }
    ];

    const airTime = {
        day: "Tuesday",
        time: "3:30 AM",
        timezone: "EST",
        note: "May be preempted by cat-related emergencies"
    };

    const description = `Join Maria Bamford in this seemingly wholesome show about proper cat maintenance that quickly reveals itself to be something else entirely. Watch as Maria invites various guests, including her ex-boyfriend Matt, to discuss pet care while processing unresolved personal issues. Each episode begins with helpful cat care tips before inevitably derailing into confrontations about past relationships and pet naming choices.`;

    const specialAnnouncement = "No cats or ex-boyfriends were harmed in the filming of this series. All musical theater references purely coincidental.";

    return (
        <Channel5Layout
            showTitle="Cleaning Up After Your Cat with Maria Bamford"
            showImage="images/pages/categories/health/Shows/CleaningAfterCat/CleaningAfterCatLogo.png"
            description={description}
            episodes={episodes}
            cast={cast}
            airTime={airTime}
            specialAnnouncement={specialAnnouncement}
        >
        </Channel5Layout>
    );
};

export default CleaningAfterCat;