"use client"
import React, { useState } from 'react';

import Banner from '../../../assets/banners/Banner';
import Breadcrumb from '../../../assets/breadcrumbs/Breadcrumb';
 import trekData from '../../../assets/trekdata';
import "./css/trekdestinations.css";
import { FaPhone } from 'react-icons/fa';
import { renderStars } from '../../../assets/starratings/starratings';
import Link from 'next/link';
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import DestinationsTrekCard from '../../../assets/DestinationsTrekCard';

const Sikkim = () => {
  const [showAllCards, setShowAllCards] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const TrekData = trekData.filter(trek => trek.region === 'Sikkim');
  const filteredTreks = activeFilter === 'all'
    ? TrekData
    : TrekData.filter(trek => trek.difficulty === activeFilter);

  return (
    <section className="destinations-page">
      <Banner title="Trekking in Sikkim" image="/images/sikkim-banner.webp" />
      <Breadcrumb  href = "/destinations"  current="Sikkim" />

      <div className="destinations-page__container">
        <div className="destinations-page__intro">
          <h1>Trekking in Sikkim</h1>
          <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
            Choose to lose yourself in the rustic charms and secret hideaways in the mesmerizing land of Sikkim. Find here authentic information on various Sikkim trekking routes, destinations and package deals that are indeed unlike any other. Book your Sikkim adventure trekking holidays at best prices and services.
          </p>
        </div>






        <div className="destinations-page__trek-grades">


          <div className="destinations-page__filter-buttons">
            <button
              className={`destinations-page__filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Treks
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



          <h2 class="destinations-page__heading">Sikkim - an abode for trekkers!</h2>
          <p class="destinations-page__text"> An abode of snow-capped mountains, tranquil alpine lakes, snow-white glaciers, emerald green meadows, gushing waterfalls and burbling rivers; Sikkim is undoubtedly, a paradise for nature lovers and adventure fanatics. Tremendous scenic beauty and serene ambience of Sikkim fills every visitor's heart with freshness and rejuvenation. The most ideal way to explore the gorgeous landscape of this quaint little North-Eastern state of India is through trekking. Dotted with enchanting scenic trails that run amidst rich flavours of bio-diversity and splendid culture, a trekking expedition in Sikkim is truly and eye opener and provides the most enriching experience of your lifetime. Whether you are a novice or an expert trekker, with an uncountable number of trekking options of varying difficulty grades, you will never be disappointed in Sikkim.</p>
          <h2 class="destinations-page__heading">What to look for in a trekking expedition in Sikkim?</h2>

          <p className='destinations-page__text'>Captivating scenic beauty- Sikkim is truly a destination soaked in enchanting natural beauty. Fringed with majestic snow-capped Himalayan peaks, picturesque alpine lakes, sparkling rivulets, serene meadows carpeted with colourful Himalayan flowers and enticing fruit orchards; a trek amidst tremendous nature's work of art in Sikkim, not only rejuvenates your minds and souls but also provides you with an unmatched peace of mind. It is only in Sikkim, where you can relish the pure mountain air and feel the silence of the wilderness.</p>
          <p className='destinations-page__text'><b>Spiritual experience:</b>Across its length and breadth, Sikkim is dotted with numerous Buddhist monasteries. The presence of these monasteries not only adds to the spiritual charm of Sikkim but, a colourful and bright architecture of these monasteries also double-folds the picturesque magic of this quaint little land. Moreover, dwelled with extreme peace and tranquillity, these monasteries provide you with an unparalleled holistic and spiritual experience that is difficult to find anywhere else.</p>
          <p className='destinations-page__text'><b>Diverse Himalayan wildlife:</b>Hiding in its treasure store, Sikkim holds an umpteen variety of Himalayan animal and bird species. The Kanchenjunga Biosphere Reserve is the highest national park in India and many trekking trails of Sikkim pass through this beautiful wildlife reserve giving ample opportunities for trekkers to have a glimpse at some of the rare Himalayan animal species including Red Pandas, Musk Deer, Tibetan Antelopes and the elusive & majestic Snow Leopard. Sikkim is also a paradise for bird lovers providing plenty of opportunities to spot Tibetan Snowcock, Himalayan Pheasants, Sandpipers and Old World Flycatchers.</p>
          <p className='destinations-page__text'><b>Local culture:</b>A trekking tour in Sikkim offers great opportunities to gain an insight into local cultures and traditions. An opportunity to interact with lively and spirited people, to be part of their magnificent colourful dance festivals and a chance to relish on an exquisite local cuisine is what you can look forward to during your trekking excursion in Sikkim. An unmatched hospitability of these friendly people will surely make you feel at home even when you are far away from it.</p>
          <p className='destinations-page__text'><b>Yak Safari:</b> Endemic to Sikkim, Yaks are the popular domestic animals in the state and are used for transporting heavy loads from one region to another. These gigantic mammals are also used by local people to make their living by providing Yak rides to tourists. A unique experience in itself, a Sikkim expedition is incomplete without a Yak safari. So, if you see a Yak on your trekking tour, just get on to the safari and get yourself a memento clicked sitting atop of a yak.</p>



          <h2 class="destinations-page__heading">Popular Treks of Sikkim</h2>
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

          <h2 class="destinations-page__heading">Best season for trekking in Sikkim</h2>
          <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">The ideal time for trekking in Sikkim is during the summer months between March - June and in autumn from mid-September to November. Trekking in monsoons is highly not recommended as most of the roads get blocked due to torrential rains and also, the chances of landslides and cloud bursts are quite high during rainy months. During winters, heavy snow engulfs almost all the higher altitudes making it impossible to trek.</p>
          <h2 class="destinations-page__heading">Some pre-requisites for trekking in Sikkim</h2>
          <p className='destinations-page__text'>Trekking in Sikkim, though, sounds very alluring and appealing but, it truly speaking, it is not as easy as it seems. Here are some necessary pre-requisites for trekking in Sikkim.</p>
          <ul className='pre-requisites'>
            <li>Great physical stamina - you cannot venture on a trek in Sikkim if you do not have a great physical endurance.</li>
            <li>Medical fitness - people with asthma, breathing problems and cardiac issues cannot venture on a trekking expedition in Sikkim.
            </li>
            <li>Necessary trekking permits - Since many trekking destinations in Sikkim lie in close proximity to Indo-Chinese border, various treks require prior permissions from army authorities. Even venturing in the Kanchenjunga National Park needs permits from forest department. Arranging these permits is of utmost importance before embarking on a trekking trip in Sikkim.</li>

          </ul>
        </div>
      </div>


    </section>
  );
};

export default Sikkim;