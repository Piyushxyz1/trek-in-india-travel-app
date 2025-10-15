"use client"
import React, { useState } from 'react';

import Banner from '../../../assets/banners/Banner';
import Breadcrumb from '../../../assets/breadcrumbs/Breadcrumb';
import "./css/trekdestinations.css";



const Darjeeling = () => {



  return (
    <section className="destinations-page">
      <Banner title="Trekking in Darjeeling" image="/images/darjeeling-banner.webp" />
      <Breadcrumb  href = "/destinations"  current="Darjeeling" />

      <div className="destinations-page__container">
        <div className="destinations-page__intro">
          <h1>Trekking Tours Darjeeling</h1>
          <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
          The earliest Everest expeditions started their journey from Darjeeling. A profusion of alpine blossoms and orchids can be found on the leisurely trips to the neighboring lakes at Senchal and Mirik and the Lebong race course, which is the highest in the world.
          </p>
          <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
          Trekkers to Darjeeling cannot resist a stopover in Sikkim. As in other parts of the Himalayas, the scale of its altitude and the distinct character of its seasons make Sikkim an all-year destination.
          </p>
          <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
          For foreigners, travel formalities have now been further simplified. For sightseeing and trekking, and for visits to Gangtok, Rumtek, Phodong and Pemayangtse monasteries, permits can be obtained for periods up to 15 days from a number of designated offices including Indian missions overseas, immigration officers at the main metro airports, Bagdogra, Gangtok and other convenient points including the Sikkim tourism office in Delhi. Likewise, for trekking in the currently permitted Dzongri area of west Sikkim groups of 4-20 persons may obtain 15 day permits. Indian nationals also need permit to visit the areas inside the inner line. The permit can be obtained in advance.
          </p>
          <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
          n Darjeeling, Tiger hills is the highest point, from where one can have a pleasant view of the Kanchenjunga peaks. Also the other peaks of the eastern Himalayas can be seen like the Sight of Mount Everest, which gives to the eye an interesting view. The first rays of the sun rise on the tigers hills looks like as the hills have been covered by the molten gold, this scene touches the heart and none could wish to turn off his or her eyes from that fabulous view even for a second. To have a look of sunrise daily a large number of people reach over there. Tiger hills can be reached by trekking and Jeep facility is also available there.
          </p>
        </div>

   


    
        <div class="destinations-page__section max-w-4xl md:max-w-6xl  xl:max-w-7xl  mx-auto px-4 md:px-8 ">

        <h2 className="destinations-page__heading">GETTING THERE:</h2>
    <p className='destinations-page__text'>The nearest airstrip to Darjeeling and Sikkim is Bagdogra in North Bengal. Flights from Calcutta, Delhi and the north east connect this sector. The nearest railhead is Siliguri (114 km) and New Jalpaiguri (125 km) connecting Calcutta, Delhi, Guwahati and other important cities in India, to Darjeeling and Sikkim.</p>
  <h2 className="destinations-page__heading">TREKKING ROUTES:</h2>

  <p className='destinations-page__text'>Treks in the Darjeeling area join up with the feeder Sikkim valleys of the Rangit river adjoining the Singalia ridge. Kanchenjunga is the prominent feature, its subsidiary peaks spread alongside with distant Everest also in view. Medium or strenuous grade trekking trips can be undertaken using Darjeeling as a convenient departure point.</p>
  <p className='destinations-page__text'><b>Darjeeling-Batasi-Tonglu-Sandakphu:</b>This is a 6-7 days moderate trek from Maneshanjang which is 26 km by road from Darjeeling. Ideal for views along a standard trail. The route is famed for its view of Kanchenjunga, Mt. Everest and rhododendrons from Phalut and Sandakphu.
  <br/>Darjeeling-Pemayangtse-Yoksam-Dzongri: 6 days exhilarating trek with exclusive views of the brilliant Dzongri sunset over Kanchenjunga. </p>

  
  <div class="destinations-page__trek-detail trek-with-image">
    <div class="trek-text">
      <h3 class="destinations-page__subheading">Frozen 'Chadar Trek'</h3>
      <p class="destinations-page__text">
      Frozen 'Chadar Trek': For many ardent trekkers, the major draw to Ladakh is the magical 'Chadar Trek'. Undoubtedly, the most fascinating and challenging of all the treks in the region, the Chadar trek offers you an unparalleled experience of witnessing the sheer beauty of Himalayas in peak winters. The trek takes you through the serene Zanskar valley tucked away in deep remoteness of Zanskar ranges covered in thick layers of snow. As you walk along the frozen Zanskar River, the eye-catching scenery of frozen waterfalls, ever-changing shades of snow-covered mountains and miraculous natural rock formations keep you engaged and mesmerized. Offering a feast to your eyes, the trek tests both, your physical and mental endurance. Navigating your ways through deep ravines and narrow ridges braving a sub-zero temperature and feeling your senses going numb; this trek, for sure, can run down a chill down your spine and simultaneously, present you with the most blissful experience of your lifetime.
      </p>
    </div>
    <div class="trek-image right-image">
      <img src="/images/ladakh.webp" class="image-circle" alt="Chadar Trek"/>
    </div>
  </div>
  
  <div class="destinations-page__trek-detail trek-with-image reverse">
    <div class="trek-image left-image">
      <img src= "/images/trek-photo-2.jpeg" class="image-circle" alt="Sham Valley"/>
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
      <img src= "/images/markha-valley-trek.webp" class="image-circle" alt="Sham Valley"/>
    </div>
  </div>

  <h2 className="destinations-page__heading">Best season for traveller to Darjeeling</h2>
  <p className='destinations-page__text'>The most rewarding season for travelling through Darjeeling and Sikkim is between May to October. The winters are very cold and the region is swamped by fog. The rainy season makes trekking unsafe. Plan your trip well in advance and enquire about the weather conditions before setting out.</p>
  <p className='destinations-page__text'>The monsoon in the Teesta valley is heavy, lasting from early June till mid September for Sikkim and Darjeeling. For this reason, winter treks are recommended, beginning with October. Though the period from April to end May is also preferred.</p>


</div>
      </div>

      
    </section>
  );
};

export default Darjeeling;