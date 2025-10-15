
"use client"
import React, { useState } from 'react';

import Banner from '../../../assets/banners/Banner';
import Breadcrumb from '../../../assets/breadcrumbs/Breadcrumb';
 import trekData from '../../../assets/trekdata';
import "./css/trekdestinations.css";
import { FaPhone } from 'react-icons/fa';
import { renderStars } from '../../../assets/starratings/starratings';
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';
import DestinationsTrekCard from '../../../assets/DestinationsTrekCard';

const Himachal = () => {
    const [showAllCards, setShowAllCards] = useState(false);
    const [activeFilter, setActiveFilter] = useState('all');
    const TrekData = trekData.filter(trek => trek.region === 'Himachal');
    const filteredTreks = activeFilter === 'all' 
      ? TrekData
      : TrekData.filter(trek => trek.difficulty === activeFilter);
  
    return (
      <section className="destinations-page">
        <Banner title="Trekking in Himachal" image="/images/ladakh.webp" />
        <Breadcrumb  href = "/destinations"  current="Himachal" />
  
        <div className="destinations-page__container">
         <div className="destinations-page__intro">
            <h1>Trekking in Himachal</h1>
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
                All Treks ({TrekData.length})
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
  
  
  
    <h2 class="destinations-page__heading">Himachal - a paradise for trekkers!</h2>
    <p class="destinations-page__text"> Nestled in the lap of Himalayan peaks and surrounded with astounding scenic splendours, Himachal is truly a bliss for those seeking peace and solitude amidst serene settings. With its plethora of offerings of diverse terrains and a handful of well-trodden scenic trekking trails, the place is also a paradise for trekkers who throng here to test their physical endurance, simultaneously basking in the splendid beauty of the Himalayan mountain range. Whether you are an amateur, a casual hiker or a seasoned trekker, you will find for yourself, ample trekking trails to satiate your craving for this adventurous activity.</p>
    <p class="destinations-page__text">Considered to be an all-year trekking destination, each season in Himachal offers something unique to its trekkers; while during the months of summers and monsoons, the valleys are blooming in the magic of colourful flowers, the months of winters cover entire valley in blankets of snow, making you witness the hypnotic beauty of mountains and also to have an unmatched experience of snow trekking.</p>
    <h2 class="destinations-page__heading">Why to venture on a trekking expedition in Himachal?</h2>
  
    <p className='destinations-page__text'>For its gorgeous scenic vistas - Blessed with sprawling natural beauty, hiking & trekking in Himachal Pradesh provides with you ample opportunities to witness the mesmerizing views of Himalayan peaks that stand tall in full glory with their crowns blanketed in thick covers of snow. As you start your trek moving along the trekking routes, be ready to capture the panoramas of dewy meadows, carpets of colourful alpine flowers, snow-white glaciers, alpine woodlands, gurgling rivers and beautiful fruit orchards.</p>
    <p className='destinations-page__text'>If you are trekking in winters, the panorama is beyond words and offers you unmatched vistas of snow-laden mountains, frozen streams and snow carpeted meadows. During a winter trek in Himachal, you just cannot miss on the beauty of white canvas of ice reflecting multi-hued spectrum corresponding to changing positions of sun during the day.</p>
    <p className='destinations-page__text'><b>For its unmatched thrills and adventures-</b>Adventures and thrills is actually what an ardent and passionate trekker looks forward to in his adventure trekking holiday. Simply not disappointing such brave hearts, many of the treks in Himachal offer unsurpassed challenges of crossing gurgling rivers, walking over glacial beds, climbing steep and snowy ridges and traversing through deep gorges and dangerous moraines. This is not all; unpredictable weather conditions, high altitudes and lack of oxygen also gives a tough time to even many of the experience trekkers.</p>
    <p className='destinations-page__text'>To venture on such treks, it is of utmost importance to have a decent knowledge of snowy conditions, loads of physical stamina and a prior trekking experience, especially in Himalayan regions.</p>
    <p className='destinations-page__text'><b>For an insight in different Himalayan cultures-</b>Himachal Pradesh is a potpourri of different cultures and traditions. While majority of the population is Hindu, you will find a good number of people following the Buddhist culture too, which is more apparent in the Lahaul and Spiti regions of the state. Irrespective of what religion the local people follow, they are extremely warm, friendly and hospitable. A trekking excursion in Himachal, provides ample opportunities to mingle with these hospitable people, understand their cultures and also, be part of their festivals and celebrations. For those who love exploring different cultures, trekking in Himachal is sure to be a great insightful experience.</p>
    <p className='destinations-page__text'><b>For its rich Himalayan wildlife-</b> A treasure trove of plenty of animal and bird species, a trek through Himachal trails also gives you an insight into rich wildlife of the region. Simply adding an exhilarating thrill to your trekking expedition, the trekking trails of Himachal offers you plenty of opportunities to have a rendezvous with Tibetan antelopes, Himalayan thars, musk deer, bharals, leopard cats and even the elusive snow leopards. Trekking in Himachal is also a wonderful experience for birders who crave for glimpses of the colourful weathered creatures. Rich in Himalayan birds, you can spot here, varieties of pheasants, Himalayan cocks and various other colourful winged species freely flying in the sky.</p>
  
  
  
    <h2 class="destinations-page__heading">Popular Treks of Himachal</h2>
    <div class="destinations-page__trek-detail trek-with-image">
      <div class="trek-text">
        <h3 class="destinations-page__subheading">Pin Parvati Trek:</h3>
        <p class="destinations-page__text">
        One of the most challenging and enthralling treks in Himachal, the trek requires you to have excellent trekking skills. Taking you through dense forests of Himalayan National Park, making your cross burbling rivers, negotiating through snow fields and glacial beds; the trek is a test of both, your physical and mental fitness. Needless to say enchanting vistas of snow-capped peaks and hanging glaciers keep you engaged and motivated along the journey.
        </p>'
      </div>
      <div class="trek-image right-image">
        <img src="/images/ladakh.webp" class="image-circle" alt="Chadar Trek"/>
      </div>
    </div>
    
    <div class="destinations-page__trek-detail trek-with-image reverse">
      <div class="trek-image left-image">
        <img src= "/images/trek-photo-2.jpeg" className="image-circle" alt="Sham Valley"/>
      </div>
      <div className="trek-text">
        <h3 class="destinations-page__subheading">Chandrakhani Pass Trek: </h3>
        <p class="destinations-page__text">
        Taking you to a height of 3600 metres above sea level, the Chandrakhani Pass Trek makes you traverse through beautiful alpine meadows, lush walnut & cherry orchards, blue pines & silver oaks forests and picturesque valleys. Offering you gorgeous views of snow-covered Pir-Panjal and Parvati mountain ranges, the trek is a magical experience for its every traveller.
        </p>
      </div>
    </div>
    
    
    <div class="destinations-page__trek-detail trek-with-image reverse">
      <div class="trek-text">
        <h3 className="destinations-page__subheading">Malana Village Trek:</h3>
        <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
        An extension of Chandrakhani Pass Trek, the Malana Village trek takes you to the isolated village notoriously known for its marijuana and malana cream. Wary of any outside influence, the villagers of Malana have their own laws and jurisdictions. Forgetting the notorious side of Malana, the tranquil settings, serene beauty and inimitable location of the place provides extreme peace and solace to fatigued souls of city dwellers. The trek, for sure provides a unique and wonderful experience to every trekker.
        </p>
      </div>
      <div class="trek-image left-image">
        <img src= "/images/markha-valley-trek.webp" class="image-circle" alt="Sham Valley"/>
      </div>
    </div>
    <div class="destinations-page__trek-detail trek-with-image reverse">
      <div class="trek-image left-image">
        <img src= "/images/markha-valley-trek.webp" class="image-circle" alt="Sham Valley"/>
      </div>
      <div class="trek-text">
        <h3 className="destinations-page__subheading">Chandrakhani Pass Trek:</h3>
        <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
        Taking you to a height of 3600 metres above sea level, the Chandrakhani Pass Trek makes you traverse through beautiful alpine meadows, lush walnut & cherry orchards, blue pines & silver oaks forests and picturesque valleys. Offering you gorgeous views of snow-covered Pir-Panjal and Parvati mountain ranges, the trek is a magical experience for its every traveller.
        </p>
      </div>
    </div>
  
    <h2 class="destinations-page__heading">Best season for trekking in Himachal</h2>
    <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">Trekking in Himachal can be commenced anytime between mid-June and mid-October. Though, during periods between June and August, there are high chances of witnessing heavy snow on the passes and the region of Kullu-Manali may face light monsoon showers, the valley largely, is blooming with colourful flowers and it is the best time to see nature at its best. The Spiti valley generally remains unaffected from rains with weather being mostly sunny and warm. The average day temperature is mostly warm in Spiti and can get quite cool during evenings.</p>
    <h2 class="destinations-page__heading">Some pre-requisites for trekking in Sikkim</h2>
    <p className='destinations-page__text'>Trekking in Sikkim, though, sounds very alluring and appealing but, it truly speaking, it is not as easy as it seems. Here are some necessary pre-requisites for trekking in Sikkim.</p>
    <p className='destinations-page__text'>From September to mid-October, the trekking trails generally get cleared-off from snow and a good weather makes the trek much more pleasurable though, chances of snow-fall during this season are quite high. The day temperatures remain comparatively warm but nights can get really cold with temperature dropping below zero.</p>
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
 

export default Himachal