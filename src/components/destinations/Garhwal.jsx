"use client"
import React, { useState } from 'react';

import Banner from '../../../assets/banners/Banner';
import Breadcrumb from '../../../assets/breadcrumbs/Breadcrumb';
 import trekData from '../../../assets/trekdata';
import "./css/trekdestinations.css";
import Link from 'next/link';
import DestinationsTrekCard from '../../../assets/DestinationsTrekCard';
import { renderStars } from '../../../assets/starratings/starratings';
import CtaButton from '../../../assets/ctabutton/CtaButton';


const Garhwal = () => {
  const [showAllCards, setShowAllCards] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const TrekData = trekData.filter(trek => trek.region === 'Garhwal');
  const filteredTreks = activeFilter === 'all'
    ? TrekData
    : TrekData.filter(trek => trek.difficulty === activeFilter);

  return (
    <section className="destinations-page">
      <Banner title="Trekking in Garhwal" image="/images/ladakh.webp" />
      <Breadcrumb  href = "/destinations"  current="Garhwal" />

      <div className="destinations-page__container">
        <div className="destinations-page__intro">
          <h1>Trekking in Garhwal Himalayas</h1>
          <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
            When it comes to trekking in Garhwal region, no one can rival Trekking in India services and expertise, providing a holistic travel experience, without any ado. Enroll for the trek and feel the adrenaline rush. Book your Garhwal adventure trekking holidays at best prices and services.
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
   <DestinationsTrekCard  trek= {trek}  renderStars={renderStars}/>
  ))}

  {/* Render additional cards (if "showAllCards" is true) */}
  {showAllCards && filteredTreks.slice(8).map(trek => (
   <DestinationsTrekCard  trek = {trek}  renderStars={renderStars}/>
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

          <h2 className="destinations-page__heading">
            Garhwal Himalayas - an empyrean for trekkers!</h2>
          <p className='destinations-page__text'>The land of Gods, Uttarakhand, nestled in the lap of Garhwal Himalayas, has been bestowed with tremendous natural beauty. The rugged beauty of this Himalayan region calls for thousands of trekkers every year to uncover its unexplored and untouched scenic trekking trails that take you in a deep wilderness of mountains where it is only you and the profound silence of snow-bound lofty peaks. Ranging from easy to strenuous, you will find all types of trekking routes hidden in the store of Garhwal hills providing ample opportunities to adventure fanatics test their limits of endurance, simultaneously revelling the marvellous vistas of mountain beauty.</p>
          <h2 className="destinations-page__heading">What to look for in a trekking expedition in Garhwal Himalayas?</h2>

          <p className='destinations-page__text'>Making your traverse through dense verdant forests, cross over glacial beds and cut through rocky moraines; the trekking trails of Garhwal offers you unmatched thrills, excitement and challenges that an ardent trekker looks forward to in his trekking expedition. Besides offering ample chances to test your physical and mental strengths, trekking in Garhwal also provides with extraordinary scenic vistas of snow-clad Himalayan peaks, sacred alpine lakes, flower embellished valleys, lush pasturelands, enchanting fruit orchards and lush alpine meadows.</p>
          <p className='destinations-page__text'>Home to a rich flora and fauna, while on a trekking trip Garhwal, you just cannot miss on having a memorable rendezvous with rich Himalayan wildlife that can only be experienced in this pious land of Uttarakhand. With many of the trails crossing through high altitude wildlife sanctuaries and parks, you can feast your eyes to rare glimpses of Musk Deer, Himalayan Brown Bear, Bharal, Cheetal and Jungle Cat. The Himalayan region of Garhwal is also a paradise for birders and photographers providing them ample opportunities to capture in their cameras, rare sights of Himalayan Pheasants, Warblers, Rose Finches and Ruby Throated Parakeets.</p>
          <p className='destinations-page__text'>Abode of sacred char dhams and home to many sacred peaks, glaciers and lakes including the Gangotri group of peaks, Mt. Shivlinga, Nandakot and Chandrashila peaks, the holy gaumukh and pindari glaciers; every nook and corner of Uttarakhand is soaked in the essence of spirituality and divinity, you just cannot miss on taking in and feeling the magic of divine aura embracing you in its complete awe.</p>
          <p className='destinations-page__text'><b>Warm hospitality of Ladakhi people:</b>Being a remote and an unspoiled scenic destination, you will not find hotels and resorts in Ladakh and moreover for a real rustic trekking experience, there is no better choice than staying in village homestays and getting an insight into the simple lifestyle of Ladakhi people. As you interact and spend few moments with the local people of the region, you would realize how simple they are and how beautiful their lives are, away from any kind of interferences from technology, internet and social media that has, kind of made the lives of city dwellers so complex and complicated. The people here eat simple food, live peaceful lives and celebrate all festivals with zealous spirits. Also, they will leave no stones unturned to provide you with best of their limited resources, be it accommodation or food.</p>


          <h2 class="destinations-page__heading">Popular Treks of Garhwal</h2>
          <p class="destinations-page__text">
            Offering some of the best trekking trails in the country, trekking in Garhwal undeniably gives a memorable and enthralling experience to all its explorers. Referring to some of its spiritual treks, the Kedarkantha, Panch Kedar, Chopta-Chandrashila, Shivling Base Camp, Nagtibba and Gaumukh-Tapovan treks provide the most enticing and divine experiences of your lifetime. For wildlife enthusiasts, treks to Nanda Devi Biosphere Reserve, Har Ki Dun Ruinsara Tal and Dodital Darwa Pass treks are the perfect choices to embark on a Himalayan wildlife trekking holiday.
          </p>

          <div class="destinations-page__trek-detail trek-with-image">
            <div class="trek-text">
              <h3 class="destinations-page__subheading">Frozen 'Chadar Trek'</h3>
              <p class="destinations-page__text">
                Frozen 'Chadar Trek': For many ardent trekkers, the major draw to Ladakh is the magical 'Chadar Trek'. Undoubtedly, the most fascinating and challenging of all the treks in the region, the Chadar trek offers you an unparalleled experience of witnessing the sheer beauty of Himalayas in peak winters. The trek takes you through the serene Zanskar valley tucked away in deep remoteness of Zanskar ranges covered in thick layers of snow. As you walk along the frozen Zanskar River, the eye-catching scenery of frozen waterfalls, ever-changing shades of snow-covered mountains and miraculous natural rock formations keep you engaged and mesmerized. Offering a feast to your eyes, the trek tests both, your physical and mental endurance. Navigating your ways through deep ravines and narrow ridges braving a sub-zero temperature and feeling your senses going numb; this trek, for sure, can run down a chill down your spine and simultaneously, present you with the most blissful experience of your lifetime.
              </p>
            </div>
            <div class="trek-image right-image">
              <img src="/images/ladakh.webp" class="image-circle" alt="Chadar Trek" />
            </div>
          </div>

          <div class="destinations-page__trek-detail trek-with-image reverse">
            <div class="trek-image left-image">
              <img src="/images/trek-photo-2.jpeg" class="image-circle" alt="Sham Valley" />
            </div>
            <div class="trek-text">
              <h3 class="destinations-page__subheading">Sham Valley Trek</h3>
              <p class="destinations-page__text">
                Sham Valley Trek: Also known as the 'Baby Trek', the Sham Valley trek is the easiest of the treks in Ladakh and offers ample opportunities to witness various beautiful monasteries including Alchi, Lamayuru, Spituk and Likir. This trek is a perfect choice for trekkers who along with revelling in the fun of trekking, also wish to have a glimpse at lifestyle and culture of Ladakh. Needless to say, the scenic beauty and the tranquillity of the trek is also something to cherish for your lifetimes.
              </p>
            </div>
          </div>


          <div class="destinations-page__trek-detail trek-with-image reverse">
            <div class="trek-text">
              <h3 class="destinations-page__subheading">Markha Valley Trek</h3>
              <p class="destinations-page__text">
                Markha Valley Trek: Situated on the foothills of the majestic 'Kang Yatse' peak, Markha Valley is the most beautiful valley of Ladakh. A paradise for trekkers, the valley is dotted with some of the most varied and scenic trekking trails of entire Ladakh region. Luring many ardent trekkers from across the globe, the trek offers splendid vistas of nature that include but, are not limited to bustling rivers, narrow and deep gorges, steep canyons, emerald green meadows, fairy-tale villages and terrains of multi-hued rocks. For wildlife lovers, the trek is a dream come true as it takes them through the hub of Himalayan wildlife, the gorgeous 'Hemis National Park' giving them ample opportunities to witness rare species of Himalayan animals and birds. The trek also provides with a chance to have a closer look at the Ladakhi lifestyle by staying in remote village houses and interacting with local people. The captivating views of the 'Stok Kangri' peak are the additional highlights of this trek.
              </p>
            </div>
            <div class="trek-image left-image">
              <img src="/images/markha-valley-trek.webp" class="image-circle" alt="Sham Valley" />
            </div>
          </div>

          <h2 className="destinations-page__heading">Best season for trekking in Garhwal</h2>
          <p className='destinations-page__text'>Trekking in Garhwal Himalayas can be ventured on anytime starting mid-May to mid-October, avoiding the months of monsoon showers in between. With roads getting muddy and slippery and high chances of landslides and cloud bursts, makes the region prone to many accidents and mis-happenings.</p>

          <h2>Some pre-requisites for trekking in Garhwal Himalayas</h2>
          <ul className='pre-requisites'>
            <li>The first and foremost important requisite is building up your physical and mental fitness. Trekking in Ladakh requires endless walking and hiking at times. Without a physical stamina, a trek in Ladakh is out of question.</li>
            <li>The second most important point is to get yourselves medically examined to make sure you are fit enough to access great mountain heights. Most trekking routes in Ladakh start from a height of around 3500 metres above sea level and needless to say, at greater heights thickness of air can result in acute mountain sickness. So, be sure you don't have any sort of asthmatic and cardiac problems.</li>


          </ul>

        </div>

        
      </div>
    
    <CtaButton/>

    </section>   

  
  );
};

export default Garhwal;