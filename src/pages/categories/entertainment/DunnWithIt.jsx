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
    <div className="p-6 min-h-full relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
      backgroundSize: '400% 400%',
      animation: 'gradientShift 15s ease infinite'
    }}>
      {/* Swirl texture overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0 Q70 20 50 40 Q30 60 50 80 Q70 100 50 100' stroke='white' stroke-width='2' fill='none' opacity='0.3'/%3E%3Cpath d='M0 50 Q20 70 40 50 Q60 30 80 50 Q100 70 100 50' stroke='white' stroke-width='2' fill='none' opacity='0.3'/%3E%3Cpath d='M25 25 Q35 35 25 45 Q15 55 25 65' stroke='white' stroke-width='1.5' fill='none' opacity='0.2'/%3E%3Cpath d='M75 25 Q85 35 75 45 Q65 55 75 65' stroke='white' stroke-width='1.5' fill='none' opacity='0.2'/%3E%3C/svg%3E")`,
        backgroundSize: '100px 100px'
      }}></div>
      
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        .dotted-texture {
          background-image: radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        .striped-texture {
          background-image: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px);
        }
        .wavy-border {
          border-radius: 40px 20px 40px 20px / 20px 40px 20px 40px;
          overflow: hidden;
        }
        .squiggly-border {
          border-radius: 30px 50px 30px 50px / 50px 30px 50px 30px;
          overflow: hidden;
        }
        .blob-border {
          border-radius: 45px 25px 45px 25px / 25px 45px 25px 45px;
          overflow: hidden;
        }
      `}</style>

      <div className="max-w-4xl mx-auto">
        {/* Header with rainbow border and dotted texture */}
        <header className="text-center mb-12 bg-white p-8 shadow-2xl border-8 relative overflow-hidden wavy-border" style={{
          borderImage: 'linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3) 1',
          animation: 'float 3s ease-in-out infinite'
        }}>
          <div className="absolute inset-0 dotted-texture opacity-30"></div>
          <div className="relative z-10">
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text" style={{
              textShadow: '3px 3px 0px rgba(255,192,203,0.3)',
              transform: 'rotate(-1deg)'
            }}>
              The Awesome Life of Richard Dunn
            </h1>
            <div className="text-3xl text-gray-600 mb-2 font-bold">1935 - 2010</div>
            <BlinkingText>
              <span className="text-2xl font-bold text-emerald-500" style={{textShadow: '2px 2px 4px rgba(16,185,129,0.3)'}}>Great Job!</span>
            </BlinkingText>
          </div>
        </header>

        {/* Photo Carousel with custom frame and striped texture */}
        <div className="mb-12 p-4 rounded-xl shadow-lg relative overflow-hidden squiggly-border" style={{
          background: 'linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 50%, #fab1a0 100%)',
          animation: 'wiggle 4s ease-in-out infinite'
        }}>
          <div className="absolute inset-0 striped-texture"></div>
          <div className="relative z-10">
            <ImageCarousel images={images} />
          </div>
        </div>

        {/* Biography Sections */}
        <div className="space-y-8">
          {/* All About Dunn */}
          <section className="p-10 rounded-xl shadow-2xl border-4 border-blue-400 relative overflow-hidden blob-border" style={{
            background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
            animation: 'float 4s ease-in-out infinite'
          }}>
            <div className="absolute inset-0 dotted-texture opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4 text-blue-800" style={{
                textShadow: '2px 2px 0px rgba(59,130,246,0.2)',
                transform: 'rotate(-1deg)'
              }}>All About Dunn</h2>
              <p className="text-lg mb-4 leading-relaxed">
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
            </div>
          </section>

          {/* Early Life */}
          <section className="p-10 rounded-xl shadow-2xl border-4 border-orange-400 relative overflow-hidden wavy-border" style={{
            background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
            animation: 'float 3.5s ease-in-out infinite'
          }}>
            <div className="absolute inset-0 striped-texture opacity-30"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4 text-orange-800" style={{
                textShadow: '2px 2px 0px rgba(234,88,12,0.2)',
                transform: 'rotate(1deg)'
              }}>Early Life in Urbana</h2>
              <p className="text-lg mb-4 leading-relaxed">
                Born Richard Forrest Dunn Jr. on December 18, 1935, in Urbana, Illinois, and was one of four children (two brothers and one sister). 
                During junior high school, he played football and regarded it as one of the few times in his life he was really motivated. His family
                moved to Chicago, IL and lived there for a few years, before moving to California, where they lived for the duration of World War II.
                After the war he moved back to Chicago with his family for a brief period until the Korean War, at which time they moved back to California.
                His mother died when he was 16.
              </p>
            </div>
          </section>

          {/* Military Service */}
          <section className="p-10 rounded-xl shadow-2xl border-4 border-blue-400 relative overflow-hidden squiggly-border" style={{
            background: 'linear-gradient(135deg, #c3cfe2 0%, #c3cfe2 50%, #f0f4f8 100%)',
            animation: 'float 4.2s ease-in-out infinite'
          }}>
            <div className="absolute inset-0 dotted-texture opacity-25"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4 text-blue-800" style={{
                textShadow: '2px 2px 0px rgba(59,130,246,0.2)',
                transform: 'rotate(-1deg)'
              }}>A Life of Service</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/70 p-4 rounded-lg shadow-lg border-2 border-blue-200 relative overflow-hidden blob-border">
                  <div className="absolute inset-0 striped-texture opacity-20"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-2 text-blue-700">U.S. Navy</h3>
                    <p>After his mother's death when he was 16, Richard joined the U.S. Navy. He went through basic training in San Diego and spent 4 years enlisted. Dunn returned to the Navy after his time in the Air Force and retired in 1977.</p>
                  </div>
                </div>
                <div className="bg-white/70 p-4 rounded-lg shadow-lg border-2 border-blue-200 relative overflow-hidden blob-border">
                  <div className="absolute inset-0 striped-texture opacity-20"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-2 text-blue-700">U.S. Air Force</h3>
                    <p>After his time in the Navy, Richard went on to work with horses. Shortly after, he joined the Air Force where he served for four years. He spent the nine months following his resignation tending to horses in California.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Personal Life */}
          <section className="p-10 rounded-xl shadow-2xl border-4 border-orange-400 relative overflow-hidden wavy-border" style={{
            background: 'linear-gradient(135deg, #fff5e1 0%, #ffe4b5 50%, #ffd700 100%)',
            animation: 'float 3.8s ease-in-out infinite'
          }}>
            <div className="absolute inset-0 dotted-texture opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4 text-orange-800" style={{
                textShadow: '2px 2px 0px rgba(234,88,12,0.2)',
                transform: 'rotate(1deg)'
              }}>Education and Influences</h2>
              <p className="text-lg mb-4 leading-relaxed">
                Dunn resided in southern California after his military service, where he attended Santa Monica College. The Navy made a lasting impression on him.
                Dunn considered his other significant influences to be his mother in law, his junior high coach, and producer Robert Marcus.
              </p>
            </div>
          </section>

          {/* Entertainment Career */}
          <section className="p-10 rounded-xl shadow-2xl border-4 border-purple-400 relative overflow-hidden blob-border" style={{
            background: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
            animation: 'float 4.5s ease-in-out infinite'
          }}>
            <div className="absolute inset-0 striped-texture opacity-25"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4 text-purple-800" style={{
                textShadow: '2px 2px 0px rgba(147,51,234,0.2)',
                transform: 'rotate(-1deg)'
              }}>Show Business Journey</h2>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  From humble beginnings as a 'Gofer' for his friend Robert Marcus to becoming a Tim and Eric legend, 
                  Richard's path to stardom was unique, just like him!
                </p>
                <div className="bg-white/70 p-6 rounded-lg shadow-lg relative overflow-hidden squiggly-border">
                  <div className="absolute inset-0 dotted-texture opacity-15"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-6 text-center text-purple-700">Notable Appearances</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-purple-500 text-xl">★</span>
                        <span className="text-sm font-bold">The Wedding Singer (1998)</span>
                        <span className="text-gray-600 text-sm">- "Mr. Smith"</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-purple-500 text-xl">★</span>
                        <span className="text-sm font-bold">Apt Pupil (1998)</span>
                        <span className="text-gray-600 text-sm">- "Man with Bags"</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-purple-500 text-xl">★</span>
                        <span className="text-sm font-bold">Road to Perdition (2002)</span>
                        <span className="text-gray-600 text-sm">- "Pedestrian"</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-purple-500 text-xl">★</span>
                        <span className="text-sm font-bold">Love Chronicles (2003)</span>
                        <span className="text-gray-600 text-sm">- "Dr. Lo"</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-purple-500 text-xl">★</span>
                        <span className="text-sm font-bold">Bottoms Up (2006)</span>
                        <span className="text-gray-600 text-sm">- "Homeless Man"</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-purple-500 text-xl">★</span>
                        <span className="text-sm font-bold">Derek and Simon (2007)</span>
                        <span className="text-gray-600 text-sm">- "Sir, Sir's Corpse"</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-purple-500 text-xl">★</span>
                        <span className="text-sm font-bold">The Hunted (2009)</span>
                        <span className="text-gray-600 text-xs">- "Coroner"</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-purple-500 text-xl">★</span>
                        <span className="text-sm font-bold">Robbin' in da Hood (2009)</span>
                        <span className="text-gray-600 text-sm">- "Dirty Old Man"</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-purple-500 text-xl">★</span>
                        <span className="text-sm font-bold">The Tonight Show with Conan O'Brien</span>
                        <span className="text-gray-600 text-sm">- "Brett Favre"</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-purple-500 text-xl">★</span>
                        <span className="text-sm font-bold">Parks and Recreation (2009)</span>
                        <span className="text-gray-600 text-sm">- "110 Year Old Man"</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-purple-500 text-xl">★</span>
                        <span className="text-sm font-bold">Jimmy Kimmel Live!</span>
                        <span className="text-gray-600 text-sm">- "Benjamin Mason, Harley"</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-purple-100 p-2 rounded border-2 border-purple-300">
                        <span className="text-purple-500 text-xl">★</span>
                        <span className="font-bold">Tim and Eric Awesome Show, Great Job! (2007-2010)</span>
                        <span className="text-purple-600 text-sm">- "Richard Dunn"</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tim and Eric Legacy */}
          <section className="p-10 rounded-xl shadow-2xl border-4 border-green-400 relative overflow-hidden wavy-border" style={{
            background: 'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)',
            animation: 'float 4s ease-in-out infinite'
          }}>
            <div className="absolute inset-0 striped-texture opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4 text-green-800" style={{
                textShadow: '2px 2px 0px rgba(22,163,74,0.2)',
                transform: 'rotate(1deg)'
              }}>The Tim and Eric Years</h2>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  Richard Dunn was a cornerstone of the Tim and Eric Awesome Show, Great Job! He was a shining star among all of the reocurring characters and left an
                  enduring legacy and an impressive body of work that will let him live on in our memories forever. His signature 
                  shows included:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/70 p-4 rounded-lg shadow-lg border-2 border-green-200 relative overflow-hidden blob-border">
                    <div className="absolute inset-0 dotted-texture opacity-15"></div>
                    <div className="relative z-10">
                      <h4 className="text-xl font-bold text-green-700">"Getting It Dunn"</h4>
                      <p>Watch Richard Dunn tackle life's biggest challenges with his signature style. Watch him interview Tanis, his best girl friend but not girlfriend.</p>
                    </div>
                  </div>
                  <div className="bg-white/70 p-4 rounded-lg shadow-lg border-2 border-green-200 relative overflow-hidden blob-border">
                    <div className="absolute inset-0 dotted-texture opacity-15"></div>
                    <div className="relative z-10">
                      <h4 className="text-xl font-bold text-green-700">"The Dunngeon"</h4>
                      <p>Richard Dunn interviews two boys from Germany: Dark Zinken Zoombo (Zwei Dunkel Jungen) and Dave Navarro.</p>
                    </div>
                  </div>
                  <div className="bg-white/70 p-4 rounded-lg shadow-lg border-2 border-green-200 relative overflow-hidden blob-border">
                    <div className="absolute inset-0 dotted-texture opacity-15"></div>
                    <div className="relative z-10">
                      <h4 className="text-xl font-bold text-green-700">"Dunn-Prov"</h4>
                      <p>In this sketch, we are delighted to see the classic comedic stylings of 4 Richard Dunns' playing Fruit and Vegetable games, and more.</p>
                    </div>
                  </div>
                  <div className="bg-white/70 p-4 rounded-lg shadow-lg border-2 border-green-200 relative overflow-hidden blob-border">
                    <div className="absolute inset-0 dotted-texture opacity-15"></div>
                    <div className="relative z-10">
                      <h4 className="text-xl font-bold text-green-700">"Whos #1 Most Handsome Man"</h4>
                      <p>Dunn judges Tim and Eric to find the #1 Most Handsome Man. To win, you had to french kiss Richard. It was a classic Richard moment.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Quote */}
        <footer className="mt-12 text-center p-8 text-white rounded-xl shadow-2xl relative overflow-hidden squiggly-border" style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          animation: 'float 3.5s ease-in-out infinite'
        }}>
          <div className="absolute inset-0 dotted-texture opacity-20"></div>
          <div className="max-w-2xl mx-auto relative z-10">
            <p className="text-2xl italic mb-4" style={{
              textShadow: '3px 3px 6px rgba(0,0,0,0.5)'
            }}>
              "I'm not just a predictor of baldness, I'm an artist."
            </p>
            <p className="text-lg font-bold">Richard "Plibt" Dunn (1935-2010)</p>
            <BlinkingText>
              <span className="text-yellow-400 text-xl font-bold" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>Great Job Forever!</span>
            </BlinkingText>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default DunnWithIt;