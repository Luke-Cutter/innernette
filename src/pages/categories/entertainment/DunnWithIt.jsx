import React from 'react';
import ImageCarousel from '../../../components/shared/ImageCarousel';
import BlinkingText from '../../../components/shared/BlinkingText';

const DunnWithIt = () => {
  const images = [
    'images/pages/categories/entertainment/DunnWithIt/dunn2.jpg',
    'images/pages/categories/entertainment/DunnWithIt/dunn.PNG',
    'images/pages/categories/entertainment/DunnWithIt/dunns.jpg', 
    'images/pages/categories/entertainment/DunnWithIt/dunngeon.jpg',
    'images/pages/categories/entertainment/DunnWithIt/bones.jpg'
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 min-h-full">
      <div className="max-w-4xl mx-auto">
        {/* Header with rainbow border */}
        <header className="text-center mb-12 bg-white p-8 rounded-lg shadow-xl border-8 border-gradient-to-r from-red-500 via-yellow-500 to-blue-500">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
            The Awesome Life of Richard Dunn
          </h1>
          <div className="text-3xl text-gray-600 mb-2">1935 - 2010</div>
          <BlinkingText>
            <span className="text-2xl font-bold text-emerald-500">Great Job!</span>
          </BlinkingText>
        </header>

        {/* Photo Carousel with custom frame */}
        <div className="mb-12 p-4 bg-gradient-to-r from-yellow-200 via-green-200 to-blue-200 rounded-xl shadow-lg">
          <ImageCarousel images={images} />
        </div>

        {/* Biography Sections */}
        <div className="space-y-8">
          {/* All About Dunn */}
          <section className="bg-gradient-to-br from-blue-100 to-cyan-200 p-8 rounded-xl shadow-lg border-4 border-blue-300">
            <h2 className="text-3xl font-bold mb-4 text-blue-800">All About Dunn</h2>
            <p className="text-lg mb-4">
              Dunn portrayed many different characters (often bizarre versions of himself) in many episodes of Tim and Eric Awesome Show,
              Great Job! from 2007 until 2010. In addition, Dunn had small roles in House, Parks and Recreation, Weeds and Nip/Tuck.
              He also appeared in the 1998 film The Wedding Singer and the music video for Diddy's 2000 single "Bad Boy for Life.".<br /><br />
              He first got into show business through his friend, producer Robert Marcus. He volunteered to be a 'gofer' (production assistant) 
              for Marcus' productions. Marcus wrote a book about how to be a production assistant and dedicated it to Dunn. He first got his start 
              as an actor by taking roles as a background actor, and subsequently took classes for acting. He performed a number of roles in
              commercials and music videos. His first few professional roles earned him enough money to become a member of the Screen Actors' Guild.
              <br /><br />Dunn was approached by Tim Heidecker in a parking lot and offered a gig playing Tim's father in the first episode of Tim and Eric
              Awesome Show, Great Job!. After this, Dunn was a regular feature in the show, as well as other outlets of the Tim and Eric franchise 
              until his death, and was posthumously honored in the first episode of spin-off series Check It Out! with Dr. Steve Brule and the song 
              "Richard Dunn is Done" by fellow Tim and Eric Awesome Show, Great Job! regular David Liebe Hart on his album "Mixtape".

            </p>
          </section>
          {/* Early Life */}
          <section className="bg-gradient-to-br from-orange-100 to-yellow-200 p-8 rounded-xl shadow-lg border-4 border-orange-300">
            <h2 className="text-3xl font-bold mb-4 text-orange-800">Early Life in Urbana</h2>
            <p className="text-lg mb-4">
              Born Richard Forrest Dunn Jr. on December 18, 1935, in Urbana, Illinois, and was one of four children (two brothers and one sister). 
              During junior high school, he played football and regarded it as one of the few times in his life he was really motivated. His family
              moved to Chicago, IL and lived there for a few years, before moving to California, where they lived for the duration of World War II.
              After the war he moved back to Chicago with his family for a brief period until the Korean War, at which time they moved back to California.
              His mother died when he was 16.

            </p>
          </section>

          {/* Military Service */}
          <section className="bg-gradient-to-br from-blue-100 to-cyan-200 p-8 rounded-xl shadow-lg border-4 border-blue-300">
            <h2 className="text-3xl font-bold mb-4 text-blue-800">A Life of Service</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/50 p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-blue-700">U.S. Navy</h3>
                <p>After his mother's death when he was 16, Richard joined the U.S. Navy. He went through basic training in San Diego and spent 4 years enlisted. Dunn returned to the Navy after his time in the Air Force and retired in 1977.</p>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-blue-700">U.S. Air Force</h3>
                <p>After his time in the Navy, Richard went on to work with horses. Shortly after, he joined the Air Force where he served for four years. He spent the nine months following his resignation tending to horses in California.</p>
              </div>
            </div>
          </section>
          
          {/* Personal Life */}
          <section className="bg-gradient-to-br from-orange-100 to-yellow-200 p-8 rounded-xl shadow-lg border-4 border-orange-300">
            <h2 className="text-3xl font-bold mb-4 text-orange-800">Education and Influences</h2>
            <p className="text-lg mb-4">
            Dunn resided in southern California after his military service, where he attended Santa Monica College. The Navy made a lasting impression on him.
            Dunn considered his other significant influences to be his mother in law, his junior high coach, and producer Robert Marcus.
            </p>
          </section>


          {/* Entertainment Career */}
          <section className="bg-gradient-to-br from-purple-100 to-pink-200 p-8 rounded-xl shadow-lg border-4 border-purple-300">
            <h2 className="text-3xl font-bold mb-4 text-purple-800">Show Business Journey</h2>
            <div className="space-y-4">
              <p className="text-lg">
                From humble beginnings as a 'Gofer' for his friend Robert Marcus to becoming a Tim and Eric legend, 
                Richard's path to stardom was unique, just like him!
              </p>
              <div className="bg-white/70 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-center text-purple-700">Notable Appearances</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                    <div className="flex items-center space-x-2">
                        <span className="text-purple-500">★</span>
                        <span className="text-sm font-bold">The Wedding Singer (1998)</span>
                        <span className="text-gray-600 text-sm">- "Mr. Smith"</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-purple-500">★</span>
                        <span className="text-sm font-bold">Apt Pupil (1998)</span>
                        <span className="text-gray-600 text-sm">- "Man with Bags"</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-purple-500">★</span>
                        <span className="text-sm font-bold">Road to Perdition (2002)</span>
                        <span className="text-gray-600 text-sm">- "Pedestrian"</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-purple-500">★</span>
                        <span className="text-sm font-bold">Love Chronicles (2003)</span>
                        <span className="text-gray-600 text-sm">- "Dr. Lo"</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-purple-500">★</span>
                        <span className="text-sm font-bold">Bottoms Up (2006)</span>
                        <span className="text-gray-600 text-sm">- "Homeless Man"</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-purple-500">★</span>
                        <span className="text-sm font-bold">Derek and Simon (2007)</span>
                        <span className="text-gray-600 text-sm">- "Sir, Sir's Corpse"</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-purple-500">★</span>
                        <span className="text-sm font-bold">The Hunted (2009)</span>
                        <span className="text-gray-600 text-xs">- "Coroner"</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-purple-500">★</span>
                        <span className="text-sm font-bold">Robbin' in da Hood (2009)</span>
                        <span className="text-gray-600 text-sm">- "Dirty Old Man"</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-purple-500">★</span>
                        <span className="text-sm font-bold">The Tonight Show with Conan O'Brien</span>
                        <span className="text-gray-600 text-sm">- "Brett Favre"</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-purple-500">★</span>
                        <span className="text-sm font-bold">Parks and Recreation (2009)</span>
                        <span className="text-gray-600 text-sm">- "110 Year Old Man"</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-purple-500">★</span>
                        <span className="text-sm font-bold">Jimmy Kimmel Live!</span>
                        <span className="text-gray-600 text-sm">- "Benjamin Mason, Harley"</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-purple-100 p-2 rounded">
                        <span className="text-purple-500">★</span>
                        <span className="font-bold">Tim and Eric Awesome Show, Great Job! (2007-2010)</span>
                        <span className="text-purple-600 text-sm">- "Richard Dunn"</span>
                    </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tim and Eric Legacy */}
          <section className="bg-gradient-to-br from-green-100 to-emerald-200 p-8 rounded-xl shadow-lg border-4 border-green-300">
            <h2 className="text-3xl font-bold mb-4 text-green-800">The Tim and Eric Years</h2>
            <div className="space-y-4">
              <p className="text-lg">
                Richard Dunn was a cornerstone of the Tim and Eric Awesome Show, Great Job! He was a shining star among all of the reocurring characters and left an
                enduring legacy and an impressive body of work that will let him live on in our memories forever. His signature 
                shows included:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-white/70 p-4 rounded-lg">
                  <h4 className="text-xl font-bold text-green-700">"Getting It Dunn"</h4>
                  <p>Watch Richard Dunn tackle life's biggest challenges with his signature style. Watch him interview Tanis, his best girl friend but not girlfriend.</p>
                </div>
                <div className="bg-white/70 p-4 rounded-lg">
                  <h4 className="text-xl font-bold text-green-700">"The Dunngeon"</h4>
                  <p>Richard Dunn interviews two boys from Germany: Dark Zinken Zoombo (Zwei Dunkel Jungen) and Dave Navarro.</p>
                </div>
                <div className="bg-white/70 p-4 rounded-lg">
                  <h4 className="text-xl font-bold text-green-700">"Dunn-Prov"</h4>
                  <p>In this sketch, we are delighted to see the classic comedic stylings of 4 Richard Dunns' playing Fruit and Vegetable games, and more.</p>
                </div>
                <div className="bg-white/70 p-4 rounded-lg">
                  <h4 className="text-xl font-bold text-green-700">"Whos #1 Most Handsome Man"</h4>
                  <p>Dunn judges Tim and Eric to find the #1 Most Handsome Man. To win, you had to french kiss Richard. It was a classic Richard moment.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Quote */}
        <footer className="mt-12 text-center p-8 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white rounded-xl">
          <div className="max-w-2xl mx-auto">
            <p className="text-2xl italic mb-4">
              "I'm not just a predictor of baldness, I'm an artist."
            </p>
            <p className="text-lg font-bold">Richard "Plibt" Dunn (1935-2010)</p>
            <BlinkingText>
              <span className="text-yellow-400">Great Job Forever!</span>
            </BlinkingText>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default DunnWithIt;