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

const Kumaon = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const TrekData = trekData.filter(trek => trek.region === 'Kumaon');
  const filteredTreks = activeFilter === 'all'
    ? TrekData
    : TrekData.filter(trek => trek.difficulty === activeFilter);

  return (
    <section className="destinations-page">
      <Banner title="Trekking in Kumaon" image="" />
      <Breadcrumb  href = "/destinations"  current="Kumaon" />

      <div className="destinations-page__container">
        <div className="destinations-page__intro">
          <h1>Trekking in Kumaon</h1>
          <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
            Leave no stone of adventure unturned in the charismatic Kumaon hills with our Selective Tour Packages. Find exciting deals and exclusive offers on Kumaon adventure trekking holidays.
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
            {filteredTreks.map(trek => (
              <DestinationsTrekCard key={trek.id} trek={trek} renderStars={renderStars} />
            ))}
          </div>
        </div>        <div class="destinations-page__section max-w-4xl md:max-w-6xl  xl:max-w-7xl  mx-auto px-4 md:px-8 ">

          <h2 className="destinations-page__heading">What makes Kumaon an incredible trekking destination?</h2>
          <p className='destinations-page__text'> Imagine this - you are walking stiffly through a picturesque trail, which is skirted by the thick forest, all that you can hear is chirping of birds, and to treat your eyes is the pink glow of sunlight bounce off the Himalayan high peak aligned under a sky dotted with the colourful birds flowing freely. The idyllic charm of Kumaon beauty can even turn an adventurer into a poet. With every step you will take, Kumaon trekking will open up. Each day, you will walk through the ravines and waterfalls meandering through forests of Pine, Oak, Birch and haystacks, all mingled together like weaver-bird nests. The Kumaon unfold the invigorated world, though trekking here may not be as easy as it seems. You may encounter several trails in Kumaon that are difficult to encompass, which might give you some bruises and stitches but the beauty of the trek can compensate all the effort and worth. A walk in the woods of Kumaon is once in a lifetime experience which every ardent or novice adventurer must experience. After the end of the trek, you come back home teaming up with memories of Kumaon pristine beauty and whiff of pines whenever the cool mountain air recedes.</p>
          <h2 className="destinations-page__heading">Where exactly is Kumaon located in Uttarakhand?</h2>

          <p className='destinations-page__text'>Going by the map of India, Uttarakhand is split into two regions- Eastern region going by the name of Kumaon and the western half is known as Garhwal. Kumaon is bordered by Tibet on the North, Nepal in the east, Uttar Pradesh on the South and Garhwal towards the west side. Some of the prominent hilly hamlets of India like Nainital, Almora, Bageshwar, Munsiyari, Mukteshwar and Ranikhet, are a part of the Kumaon region of Uttarakhand.</p>
          <h2 className="destinations-page__heading">What to look out on your trekking expedition in Kumaon?</h2>
          <p className='destinations-page__text'>The hilly and craggy landscape of Kumaon is home to a wide range of exotic species. These include not only an amazing array of animals and birds but also some unique flowers and trees. If lucky, while trekking tours in Kumaon, you might spot some rare wildlife species like Musk Deer, Himalayan Brown Bear, Bharal, Cheetal and Wild Cat. Birdies can soothe their eyes and camera by clicking pictures of some beautiful avian species like woodpeckers, parakeets, bulbuls, mynas, pipits, red and jungle-fowls.</p>
          <p className='destinations-page__text'> Treks of Kumaon makes you traverse through some soul soothing temples that offer a spiritually inclined a chance to witness the universe. While trekking, trekkers can stop at Jageshwar Temple, Kasar Dev and Golu Ji Temple Almora, Bagnath Temple Bageshwar, Baleshwar Temple Champawat and Thal Kedar Pithoragarh to seek blessings of God. Come here for peace of mind and return calmer and happier. </p>

          <h2 class="destinations-page__heading">Which are best treks in the Kumaon region?</h2>
          <p className='destinations-page__text'>See below for some amazing treks in Kumaon region, where you can go for trekking:</p>
          <p className='destinations-page__text'><b>Easy Treks: </b>In Kumaon region, you can find plenty of treks that can be completed in just 10-12 days and still shows you the best of Himalaya. Referring to the short treks, Kafni Glacier Trek, and Pindari Glacier Trek offers the most realistic and divine experience of a lifetime.</p>
          <p className='destinations-page__text'><b>Moderate Treks:</b> For those who love to add a twist of adventure to their boring holidays should go for Munsiyari Milam Glacier trek, Sunderdhunga Base Camp trek and Pithoragarh Sinla Pass trek. Making your way through several tribal and remote villages, these treks also provide you with an opportunity to get close to Kumauni people.</p>
          <p className='destinations-page__text'><b>Challenging/Difficult Treks:</b>Talking about the challenging treks in Kumaon, Adi Kailash trek, and Nanda Devi East Base Camp trek proves to be perfect for those who are looking for those thirsty souls who seek adventure and thrill. These treks take you to the places that are tucked in extreme remoteness, engulfed in the blanket, and located as high as 13000 feet. Taking you to some of the highest and looming peaks of India, these treks give you goose bumps at every turn.</p>

          <h2 className="destinations-page__heading">Best season for trekking in Ladakh</h2>
          <p className='destinations-page__text'>April to June & September to October.
            In monsoon, one can expect unpredictable weather, sometimes even landslides. So, it's best to avoid trekking during this time. Some treks are even open during the winter season as this when you will get rewarded with the beautiful view snow-drenched mountains.</p>

        </div>
      </div>


    </section>
  );
};

export default Kumaon;