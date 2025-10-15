"use client"
import React, { useState } from 'react';

import Link from 'next/link';  // Import Link for navigation
import Banner from '../../../assets/banners/Banner';
import Breadcrumb from '../../../assets/breadcrumbs/Breadcrumb';
 import trekData from '../../../assets/trekdata';
import "./css/trekdestinations.css";
import { FaPhone } from 'react-icons/fa';
import { renderStars } from '../../../assets/starratings/starratings';
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import DestinationsTrekCard from '../../../assets/DestinationsTrekCard';

const Ladakh = () => {
  const [showAllCards, setShowAllCards] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const TrekData = trekData.filter(trek => trek.region === 'Ladakh');
  const filteredTreks = activeFilter === 'all'
    ? TrekData
    : TrekData.filter(trek => trek.difficulty === activeFilter);

  return (
    <section className="destinations-page">
      <Banner title="Trekking in Ladakh" image="/images/ladakh.webp" />
      <Breadcrumb  href = "/destinations"  current="Ladakh" />

      <div className="destinations-page__container">
        <div className="destinations-page__intro">
          <h1>Trekking in Ladakh</h1>
          <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
            Come, be a part of these thrilling trekking adventures in Ladakh, a rich land that offers barren places, tapestry monastery, great mountain kingdoms, and exotic flora and fauna in a spectacular way. Explore our tailor-made itineraries that will lead you to beautiful wonders of nature and point out interesting spots in Ladakh you don't want to miss. Book your Ladakh adventure trekking holidays at best prices and services.
          </p>
        </div>

        <div className="destinations-page__trek-grades">
          <div className="destinations-page__filter-buttons">
            <button
              className={`destinations-page__filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Treks({TrekData.length})
            </button>
            <button
              className={`destinations-page__filter-btn ${activeFilter === 'easy' ? 'active' : ''}`}
              onClick={() => setActiveFilter('easy')}
            >
              Easy Treks
            </button>
            <button
              className={`destinations-page__filter-btn ${activeFilter === 'moderate' ? 'active' : ''}`}
              onClick={() => setActiveFilter('moderate')}
            >
              Moderate Treks
            </button>
            <button
              className={`destinations-page__filter-btn ${activeFilter === 'hard' ? 'active' : ''}`}
              onClick={() => setActiveFilter('hard')}
            >
              Hard Treks
            </button>
          </div>


          <div className="destinations-page__trek-cards">
            {/* Display only the first 8 cards initially */}
            {filteredTreks.slice(0, 9).map(trek => (

             <DestinationsTrekCard key={trek.id}  trek = {trek}  renderStars={renderStars}/>
    
            ))}

            {/* Render additional cards (if "showAllCards" is true) */}
            {showAllCards && filteredTreks.slice(8).map(trek => (
                  <DestinationsTrekCard key={trek.id}  trek = {trek}  renderStars={renderStars}/>
            ))}

            {/* Explore More Button */}
            <div className="destinations-section__explore-more-section" onClick={() => setShowAllCards(!showAllCards)}>
              <div className="destinations-section__line"></div>
              <button className="destinations-section__explore-more-btn">
                {showAllCards ? 'Show Less' : 'Explore More'}
              </button>
              <div className="destinations-section__line"></div>
            </div>
          </div>
        </div>


        <div class="destinations-page__section max-w-4xl md:max-w-6xl  xl:max-w-7xl  mx-auto px-4 md:px-8 ">



          <h2 class="destinations-page__heading">Why Ladakh is a great trekking destination?</h2>
          <p class="destinations-page__text">Bestowed with an incredible topography of hilly terrains, enchanting valleys and serene alpine glacial lakes; Ladakh is undoubtedly an epitome of mountain beauty and a hub of exhilarating adventure activities like mountaineering, white water rafting, mountain biking and most importantly, trekking. Snuggled in the lap of Himalayas and hiding in its store, some unexplored and enticing trekking trails, no wonder why this mystical land is called an empyrean for trekkers all across the globe. Also, with its huge offerings of trekking options ranging from easy to moderate to challenging grades, the treks of Ladakh do not disappoint any avid trekking enthusiast, whether he is a beginner or an expert.</p>
          <h2 class="destinations-page__heading">What to look for in a trekking expedition in Ladakh?</h2>

          <p className='destinations-page__text'><b>Enchanting scenic beauty :</b>On a trekking expedition in Ladakh, you are sure to be rewarded with spectacular mountain scenery of snow-laden peaks, snow-fed glaciers and picturesque glacial lakes. Where at one end, the lofty arid and parched mountain peaks stand tall in their full glory; the other end is teeming with lush greenery and carpets of vibrant alpine flowers - a unique and rare contrast of landscapes that can only be witnessed in the region of Ladakh.</p>
          <p className='destinations-page__text'><b>Buddhist culture: </b>The land of Ladakh is deeply immersed in age-old Buddhist cultures and traditions. During your trekking trip in the region, you will come across various picturesque monasteries perched precariously atop steep and sharp peaks. These monasteries are a lifeline of Ladakh and offer you immense serenity and peace. Nothing can be more holistic and divine than sitting in the prayer hall of one of these monasteries and dipping your souls in peaceful echoes and chants of Buddhist monks.</p>
          <p className='destinations-page__text'><b>Unusual wildlife:</b>The landscape of Ladakh has been blessed with a spectacular animal and bird life. While spotting Himalayan sheep, goat and yaks is a common sight, it would not come as a surprise if all of a sudden, you also come across a Himalayan Ibex and Antelope or are treated with a rare glimpse of the elusive Snow Leopard while on a hiking and walking tour in Ladakh. Needless to say, a treasure trove of myriad endemic bird species, Ladakh also mesmerizes you with unusual sights of Tibetan Snowcocks, Golden Eagles, White and Brown throated Dippers and various species of Wall creepers, Pipits and Ibis.</p>
          <p className='destinations-page__text'><b>Warm hospitality of Ladakhi people:</b>Being a remote and an unspoiled scenic destination, you will not find hotels and resorts in Ladakh and moreover for a real rustic trekking experience, there is no better choice than staying in village homestays and getting an insight into the simple lifestyle of Ladakhi people. As you interact and spend few moments with the local people of the region, you would realize how simple they are and how beautiful their lives are, away from any kind of interferences from technology, internet and social media that has, kind of made the lives of city dwellers so complex and complicated. The people here eat simple food, live peaceful lives and celebrate all festivals with zealous spirits. Also, they will leave no stones unturned to provide you with best of their limited resources, be it accommodation or food.</p>



          <h2 class="destinations-page__heading">Popular Treks of Ladakh</h2>
          <div class="destinations-page__trek-detail trek-with-image">
            <div class="trek-text">
              <h3 class="destinations-page__subheading">Frozen 'Chadar Trek'</h3>
              <p class="destinations-page__text">
                Offering some of the best trekking trails in the country, hiking and walking tour in Sikkim undeniably gives true meaning to adventure. Even the easier treks like Sikkim-Darjeeling and Yuksom-Dzongri-Goecha La treks are challenging enough to test the physical and mental endurance of trekkers. With ever-changing series of climbs and descends, these treks keep you mentally alert and exhilarated throughout the trip. Majestic views of Mt. Pandim and Mt. Kabru keep you engaged with their hypnotic beauty as you traverse through verdant forests of pines, oaks and rhododendrons. Needless to say, the sights of exotic Himalayan wildlife adds to the magical charm of these wonderful treks.
              </p>
            </div>
            <div class="trek-image right-image">
              <img src="/images/ladakh.webp" class="image-circle" alt="Chadar Trek" />
            </div>
          </div>

          <div class="destinations-page__trek-detail trek-with-image reverse">
            <div class="trek-image left-image">
              <img src="/images/trek-photo-2.jpeg" className="image-circle" alt="Sham Valley" />
            </div>
            <div className="trek-text">
              <h3 class="destinations-page__subheading">Sham Valley Trek</h3>
              <p class="destinations-page__text">
                Sham Valley Trek: Also known as the 'Baby Trek', the Sham Valley trek is the easiest of the treks in Ladakh and offers ample opportunities to witness various beautiful monasteries including Alchi, Lamayuru, Spituk and Likir. This trek is a perfect choice for trekkers who along with revelling in the fun of trekking, also wish to have a glimpse at lifestyle and culture of Ladakh. Needless to say, the scenic beauty and the tranquillity of the trek is also something to cherish for your lifetimes.
              </p>
            </div>
          </div>


          <div class="destinations-page__trek-detail trek-with-image reverse">
            <div class="trek-text">
              <h3 className="destinations-page__subheading">Markha Valley Trek</h3>
              <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                Markha Valley Trek: Situated on the foothills of the majestic 'Kang Yatse' peak, Markha Valley is the most beautiful valley of Ladakh. A paradise for trekkers, the valley is dotted with some of the most varied and scenic trekking trails of entire Ladakh region. Luring many ardent trekkers from across the globe, the trek offers splendid vistas of nature that include but, are not limited to bustling rivers, narrow and deep gorges, steep canyons, emerald green meadows, fairy-tale villages and terrains of multi-hued rocks. For wildlife lovers, the trek is a dream come true as it takes them through the hub of Himalayan wildlife, the gorgeous 'Hemis National Park' giving them ample opportunities to witness rare species of Himalayan animals and birds. The trek also provides with a chance to have a closer look at the Ladakhi lifestyle by staying in remote village houses and interacting with local people. The captivating views of the 'Stok Kangri' peak are the additional highlights of this trek.
              </p>
            </div>
            <div class="trek-image left-image">
              <img src="/images/markha-valley-trek.webp" class="image-circle" alt="Sham Valley" />
            </div>
          </div>

          <h2 class="destinations-page__heading">Best season for trekking in Ladakh</h2>
          <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">Ideally, the best time for trekking & hiking in Ladakh is between the months of May and September when the weather is salubrious and rejuvenating. Also, this is the best time to explore nature teeming with lush meadows, carpets of wild alpine flowers and striking peach and apricot orchards. For those who wish to witness the snow-white mountain beauty, the ideal time is during winter months, especially for the 'Chadar Trek' that you can attempt only in January-February when the Zanskar River is completely frozen.</p>
          <h2 class="destinations-page__heading">Some pre-requisites for trekking in Ladakh</h2>
          <p className='destinations-page__text'>Trekking in Ladakh is not everyone's cup of tea and requires some early preparations. Here are some basic pre-requisites to get on with a trekking expedition is this stunningly beautiful kingdom.</p>
          <ul className='pre-requisites'>
            <li>The first and foremost important requisite is building up your physical and mental fitness. Trekking in Ladakh requires endless walking and hiking at times. Without a physical stamina, a trek in Ladakh is out of question.</li>
            <li>The second most important point is to get yourselves medically examined to make sure you are fit enough to access great mountain heights. Most trekking routes in Ladakh start from a height of around 3500 metres above sea level and needless to say, at greater heights thickness of air can result in acute mountain sickness. So, be sure you don't have any sort of asthmatic and cardiac problems.</li>
            <li>Getting required permits from different authorities before commencing with your trek is the third most important requisite. For accessing Tso-Moriri, Hemis National Park and Stok-Kangri peaks, these permissions are of utmost importance.</li>

          </ul>
        </div>
      </div>


    </section>
  );
};

export default Ladakh;
