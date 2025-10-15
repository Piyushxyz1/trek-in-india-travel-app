import React, { useState } from "react";

const MainContent = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [readmore, setReadMore] = useState(false);

  const toggleReadMore = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  return (
    <section className="bg-[#ffffff]">
      <div className="max-w-4xl md:max-w-6xl xl:max-w-7xl mx-auto px-4 md:px-8 py-0 sm:py-2 md:py-8 xl:py-10">

        {/* --- INTRO TEXT --- */}
        <div className="mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold text-[#172541] mt-2 mb-6">
            Trekking in India – Your Partner for the Himalayan Adventures
          </h2>
          <div className="relative mb-8">
            <p className=" text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2">
              For over three decades, Trekking in India has been the trusted name for mountain adventures across the awe-inspiring Indian Himalayas. With a legacy of safe, immersive, and professionally guided treks and mountain expeditions, we help people of all experience levels, from curious first-timers to seasoned mountaineers discover the raw beauty, cultural richness, and spiritual depth of India’s high-altitude treks.
            </p>
            <p className=" text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2">
              Our passionate team of certified guides, seasoned mountaineers, and outdoor enthusiasts brings deep knowledge of India’s diverse trekking landscapes, right from Ladakh and Zanskar to Uttarakhand, Himachal Pradesh, Jammu & Kashmir to the verdant trails of Sikkim and Arunachal Pradesh. With operational bases in key adventure hubs and collaborations extending into Nepal and Bhutan, we offer seamless Himalayan trekking experience   with unmatched support and local expertise.
            </p>

            {readmore && (
              <>
                <p className=" text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2">
                  Every trek and mountain expedition we offer is a story waiting to unfold of misty mountain mornings, starry nights by the campfire, and encounters with ancient cultures nestled in the folds of the Himalayas. We don’t just guide you along trails; we craft deeply immersive journeys that blend adventure with authenticity. With a focus on sustainability and local engagement, we ensure that your footsteps leave a positive impact on both the land and its people.
                </p>
                <p className=" text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2">
                  Let the treks in Indian Himalayas challenge you, inspire you, and welcome you into their timeless embrace with Trekking in India as your trusted companion.
                </p>
              </>
            )}

            <button
              onClick={() => setReadMore(!readmore)}
              className="text-[#f47a2a] font-medium text-sm mt-2"
            >
              {readmore ? "Read Less" : "Read More"}
            </button>
          </div>

          {/* --- INLINE FEATURES --- */}
          <div className="">
            <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold text-[#172541] mt-2 mb-6">
              What Makes India a Great Trekking Destination?
            </h2>
            {/* Feature 1 */}
            <div className="bg-white">
              <h3 className="text-lg text-[#f47a2a] font-bold mb-2">
                Offering Adventure to All:
              </h3>
              <p
                className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]"
              >
                The mighty Indian Himalayas stretch across northern and northeastern India, offering a variety of terrains for every type of trekker. Beginners can enjoy scenic nature trails with gentle ascents, while experienced mountaineers can challenge themselves with technical expeditions with summit push, crossing high-altitude passes and expansive snow-fields and technical.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white">
              <h3 className="text-lg text-[#f47a2a] font-bold mb-2">
                Mesmerizing Landscapes and Natural Beauty:
              </h3>
              <p
                className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]"
              >
                ndia has some of the world’s most dramatic landscapes. From the frozen world of Ladakh to the rhododendron forests of Sikkim, the country promises the best trekking experience. Along the way, expect to see crystal-clear alpine lakes, stunning waterfalls, expansive alpine meadows, and rare Himalayan wildlife.


              </p>

            </div>
            {/* Feature 3 */}
            <div className="bg-white">
              <h3 className="text-lg text-[#f47a2a] font-bold mb-2">
                All-year Trekking Opportunity:
              </h3>
              <p
                className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]"
              >
                Unlike many trekking destinations worldwide that are limited by harsh winters or extreme summer heat, India offers trekking adventures throughout the year. In spring and summer, the trails of Uttarakhand, Himachal Pradesh, and Sikkim come alive with blooming wildflowers, verdant landscapes, and crystal-clear skies. Autumn brings cool, crisp air and panoramic Himalayan views, perfect for high-altitude expeditions. Winter unveils a different charm, with snow treks like Kedarkantha and trails in Himachal transforming into serene, white wonderlands. Even during the monsoon, when most regions receive heavy rainfall, all trekking trails are open in Ladakh and Kashmir. No matter the season, India’s diverse geography ensures that there’s always an ideal trek waiting to be explored.

              </p>
             
            </div>
            {/* Feature 3 */}
            <div className="bg-white">
              <h3 className="text-lg text-[#f47a2a] font-bold mb-2">
                Cultural & Spiritual Depth:
              </h3>
              <p
                className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]"
              >
                What makes trekking in India truly enriching is the cultural and spiritual connection you form along the trail. As you pass through ancient Himalayan villages, Buddhist monasteries, and centuries-old Hindu temples, you’ll see a mix of traditions and beliefs that have lasted for generations. Each step takes you deeper into stories of local gods, mountain spirits, and long-held rituals. From joining in village celebrations to tasting local dishes, India trekking tours provide more than just beautiful views, they pull you into the heart of India.
              </p>
        
            </div>
            {/* Feature 3 */}
            <div className="bg-white">
              <h3 className="text-lg text-[#f47a2a] font-bold mb-2">
                Adventure Beyond Trekking:
              </h3>
              <p
                className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]"
              
              >
                A major highlight of trekking in the Himalayas is that your journey doesn’t end at the last ridge. Many of our trekking tour packages offer options to try white-water rafting, mountain biking, jeep safaris, camping under the stars, or even paragliding in places like Bir-Billing or Manali.  
              </p>
        
            </div>
          </div>
        </div>

        {/* --- DESTINATIONS SECTION --- */}
        <div className="mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold text-[#172541] mt-2 mb-6">
            Popular Trekking Destinations in India
          </h2>

          <div className="space-y-6">
            {/* Destination 1 */}
            <div className="bg-white">
              <h3 className="text-xl text-[#f47a2a] font-bold mb-2">Ladakh</h3>
              <p
                className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]"
              >
              The Indian Himalayas are home to some of the country’s most popular trekking destinations, offering diverse landscapes and trails. Uttarakhand features iconic treks like the Valley of Flowers and the high-altitude Roopkund Trek. Himachal Pradesh is known for scenic high-altitude pass treks such as Hampta Pass and the challenging Pin Parvati Pass. In Ladakh, treks like Markha Valley and Chadar Trek across the frozen Zanskar River offer an unmatched experience. The northeastern state of Sikkim and Arunachal also boasts several treks including the Goecha La, Dzongro and the Tawang Valley Trek that reflect the rich biodiversity of these states. 
              </p>

            </div>

            {/* Destination 2 */}
            <div className="bg-white">
              <h3 className="text-xl text-[#f47a2a] font-bold mb-2">Uttarakhand</h3>
              <p
                className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]"
              >
               One of India’s most awe-inspiring trekking destinations, Ladakh offers stark, dramatic landscapes unlike anywhere else in the country. Think rugged mountains, ancient monasteries, vast valleys, and high-altitude desert terrain. With most of the region lying above 3,000 meters, Ladakh is ideal for trekkers seeking challenging adventures and raw natural beauty. Popular treks in Ladakh include the Markha Valley Trek and the legendary Chadar Trek, which takes trekkers across the frozen Zanskar River during winter. For those seeking solitude and more remote experiences, routes like the Sham Valley Trek and Lamayuru to Darcha Trek offer insight into Ladakh’s unique culture and untouched landscapes. 
              </p>
  
            </div>
            <div className="bg-white">
              <h3 className="text-xl text-[#f47a2a] font-bold mb-2">Himachal Pradesh</h3>
              <p
                className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]"
              >
              From dense pine forests and alpine meadows to glacial streams and high mountain passes, Himachal Pradesh is a treasure trove of natural beauty and adventure. The state offers a wide range of treks, from easy hikes like Bijli Mahadev and Bhrigu Lake to more challenging routes such as Hampta Pass and the rugged Pin Parvati Pass. Its diverse landscapes featuring apple orchards, sparkling alpine lakes, and the stark beauty of high-altitude destinations ensure that every trek is distinct and memorable. With its accessibility and variety, Himachal is one of India’s most versatile trekking destinations in India. 
              </p>
  
            </div>
            <div className="bg-white">
              <h3 className="text-xl text-[#f47a2a] font-bold mb-2">Sikkim:</h3>
              <p
                className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]"
              >
            One of the most beautiful states in the Indian Himalayas, Sikkim is becoming a new frontier for trekking in India. Dense forests, remote villages, and river valleys define the experience. Treks like Dzongri, Green Lake, Goecha La, offer untamed nature and tranquility that’s hard to find elsewhere. This region is perfect for experienced trekkers seeking something off the beaten path, providing a unique sense of discovery with every step.   

 
              </p>
  
            </div>
            <div className="bg-white">
              <h3 className="text-xl text-[#f47a2a] font-bold mb-2">Jammu & Kashmir:</h3>
              <p
                className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]"
              >
           Home to some of the most pristine and breathtaking alpine treks in the Indian Himalayas, the state is known for its lush meadows, crystal-clear glacial lakes, and panoramic views of snow-clad peaks. Popular treks like the Kashmir Great Lakes Trek, Tarsar Marsar Trek, and Naranag-Gangabal Trek take trekkers through serene valleys, pine forests, and high-altitude lakes nestled at elevations of over 3,500 meters. These treks remain relatively untouched by mass tourism, offering tranquility and raw natural beauty. With improved infrastructure and increasing accessibility, Jammu & Kashmir is emerging as one of India’s most peaceful and rewarding trekking destinations, especially during the monsoon months when other Himalayan regions are affected by rain. 
 
              </p>
  
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
