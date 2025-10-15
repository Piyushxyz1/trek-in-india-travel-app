"use client"
import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
// Import Link for navigation
import Banner from '@/components/banners/Banner';
import Breadcrumb from '@/components/breadcrumbs/Breadcrumb';
import trekData from '../../components/trekdestinationcard/trekdata';
import { FaPhone } from 'react-icons/fa';
import { renderStars } from '@/components/starratings/starratings';
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import DestinationsTrekCard from '@/components/trekdestinationcard/DestinationsTrekCard';
import { FiChevronLeft, FiChevronRight, FiInfo, FiBookOpen, FiMapPin } from 'react-icons/fi';
import TripBookingForm from '@/components/form/TripBookingForm';
import "../../components/trekdetailspages/trekitinerarydetails/itinerarypage.css"
import ModalPortal from '@/components/ModalPortal';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import Faq from '@/components/faqs/Faq';
import { Sikkimtrekfaq } from '@/components/faqs/faqs';
import CtaButton from '@/components/ctabutton/CtaButton';

const SikkimTrek = () => {

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [showAllCards, setShowAllCards] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const breadcrumbPath = [
    { label: 'Trekking in sikkim' },
  ]

  const NextArrow = ({ onClick }) => (
    <div
      className="text-white text-xs sm:text-sm md:text-base lg:text-lg
                opp-arrow opp-next absolute
          top-[-20%] sm:top-[-14%] md:top-[-14%] lg:top-[-16%]
                right-[10px]
                bg-[#f47a2a] rounded-full p-2
                cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.2)]
                transition-transform duration-300 ease-in-out
                h-[35px] w-[35px] sm:h-[40px] sm:w-[40px] md:h-[45px] md:w-[45px] lg:h-[42px] lg:w-[42px] xl:h-[50px] xl:w-[50px] 
                flex justify-center items-center gap-2
                border border-[#f47a2a]
                 hover:bg-white hover:text-[#f47a2a]
                z-[2]"
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="text-white text-xs sm:text-sm md:text-base lg:text-lg
                opp-arrow opp-prev absolute
                top-[-20%] sm:top-[-14%] md:top-[-14%] lg:top-[-16%]
                right-[60px] sm:right-[65px] md:right-[70px] lg:right-[75px]
                bg-[#f47a2a] rounded-full p-2
                cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.2)]
                transition-transform duration-300 ease-in-out
                h-[35px] w-[35px] sm:h-[40px] sm:w-[40px] md:h-[45px] md:w-[45px] lg:h-[42px] lg:w-[42px] xl:h-[50px] xl:w-[50px] 
                flex justify-center items-center gap-2
                border border-[#f47a2a]
                 hover:bg-white hover:text-[#f47a2a]
                z-[2]"
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  );



  const TrekData = trekData.filter(trek => trek.region === 'Sikkim');
  const filteredTreks = activeFilter === 'all'
    ? TrekData
    : TrekData.filter(trek => trek.difficulty === activeFilter);




  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (

    <>
      <Banner title="Trekking in Sikkim" image="/images/sikkim-banner.webp" />
      <Breadcrumb path={breadcrumbPath} />
      <section className="bg-white">
        <div className="w-full  max-w-4xl md:max-w-6xl  xl:max-w-7xl  px-4 py-8 mx-auto md:px-10">
          {/* Intro Section */}
          <div className="">
            <h1 className="text-xl sm:text-2xl  xl:text-4xl font-bold mb-0 md:mb-1 lg:mb-2 xl:mb-3 text-[#172541">Trekking in Sikkim</h1>
            <p className="mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb:0 md:mb-1 lg:mb-2 xl:mb-3">
              From beginner-friendly routes to high-altitude expeditions, Sikkim offers trails for every adventure seeker. Our well-planned Sikkim trekking tour packages include guided treks, camping, meals, and cultural experiences — ensuring you make the most of your Himalayan journey. Book your Sikkim trekking tour package today to explore the best treks in Sikkim and experience the magic of the Himalayas!
            </p>
          </div>


          {/* Filter Buttons */}
          <div className=" mt-3 md:mt-8 xl:mt-10">
            <div className='flex 
            gap-2 md:gap-3  
            overflow-x-auto 
            scrollbar-hide 
            md:flex-wrap 
            w-full 
            px-2 md:px-2
            scroll-smooth'>
              <button
                className={`px-1 py-2 text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] font-semibold  border-b-3 transition-all ${activeFilter === 'all'
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-[#313137]  hover:text-[#f47a2a] '
                  }`}
                onClick={() => setActiveFilter('all')}
              >
                All Treks ({TrekData.length})
              </button>

              <button
                className={`px-1 py-2 text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] font-semibold  border-b-3 transition-all ${activeFilter === 'easy'
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-[#313137]  hover:text-[#f47a2a]'
                  }`}
                onClick={() => setActiveFilter('easy')}
              >
                Easy Treks
              </button>

              <button
                className={`px-1 py-2 text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem]  xl:text-[1rem] font-semibold  border-b-3 transition-all ${activeFilter === 'moderate'
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-[#313137]  hover:text-[#f47a2a] '
                  }`}
                onClick={() => setActiveFilter('moderate')}
              >
                Moderate Treks
              </button>

              <button
                className={`px-1 py-2 text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] font-semibold  border-b-3 transition-all ${activeFilter === 'hard'
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-[#313137]  hover:text-[#f47a2a] '
                  }`}
                onClick={() => setActiveFilter('hard')}
              >
                Hard Treks
              </button>
            </div>
          </div>


          {/* Trek Cards Grid */}
          <div className="grid [grid-template-columns:repeat(1,1fr)] justify-center gap-8 mt-2 md:mt-3 lg:mt-4 xl:mt-6 md:grid-cols-2 lg:grid-cols-3   mx-auto py-0 sm:py-2 lg:py-4 xl:py-10  ">

            {filteredTreks.slice(0, showAllCards ? filteredTreks.length : 9).map(trek => (
              <DestinationsTrekCard key={trek.id} trek={trek} renderStars={renderStars} />
            ))}
          </div>

          {/* Explore More Button */}
          {filteredTreks.length > 9 && (
            <div className="flex items-center justify-center my-12">
              <div className="flex-grow h-0.5 bg-orange-400 opacity-40"></div>
              <button
                onClick={() => setShowAllCards(!showAllCards)}
                className="mx-4 px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all">
                {showAllCards ? 'Show Less' : 'Explore More'}
              </button>
              <div className="flex-grow h-0.5 bg-orange-400 opacity-40"></div>
            </div>
          )}

        </div>
      </section>



      <section className="destinations-page__section bg-[#ffffff]">
        <div className="w-full  max-w-4xl md:max-w-6xl  xl:max-w-7xl  px-4 py-8 mx-auto md:px-10">
          {/* Overview Header */}
          <div className="mb-4 md:mb-18">
            <h2 className="text-xl sm:text-2xl  xl:text-4xl font-bold mb-0  md:mb-1 lg:mb-2 xl:mb-3 text-[#172541]">Sikkim – An Abode for Trekkers!</h2>
            <p className="mb-1 md:mb-3  text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
              An enchanting land of snow-capped mountains, tranquil alpine lakes, dazzling glaciers, emerald-green meadows, gushing waterfalls, and burbling rivers — Sikkim is truly a paradise for nature lovers and adventure seekers. With its tremendous scenic beauty and serene ambience, this Northeastern gem rejuvenates every visitor’s heart and soul. The most rewarding way to explore the stunning landscapes of this quaint state is through trekking in Sikkim.
            </p>
            <p className="mb-1 md:mb-3  text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
              Blessed with a wealth of enchanting trails that wind through rich biodiversity and vibrant culture, a Sikkim trekking tour offers one of the most enriching experiences of a lifetime. Whether you’re a novice hiker or a seasoned mountaineer, the sheer variety of routes — from easy walks to challenging expeditions — ensures that you will always find the best treks in Sikkim to match your skill level.
            </p>
          </div>


          <div className='mb-4 md:mb-18'>
            <span className="text-[#f47a2a] font-semibold text-[0.8rem] md:[text-0.9rem] xl:text-[1rem]">Top Attractions in Sikkim</span>
            <h3 className="text-xl sm:text-2xl  xl:text-4xl font-bold text-[#172541]  mb-0 md:mb-1 lg:mb-2 xl:mb-3">What to Expect on a Trekking Expedition in Sikkim <span className="text-[#f47a2a] font-semibold ">?</span></h3>
            <p className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]  mb-20'>Nestled in the lap of Himalayan peaks and surrounded with astounding scenic splendours, Sikkim is truly a bliss for those seeking peace and solitude amidst serene settings. With its plethora of offerings of diverse terrains and a handful of well-trodden scenic trekking trails, the place is also a paradise for trekkers who throng here to test their physical endurance, simultaneously basking in the splendid beauty of the Himalayan mountain range. Whether you are an amateur, a casual hiker or a seasoned trekker, you will find for yourself, ample trekking trails to satiate your craving for this adventurous activity.</p>
            <Slider {...settings} >

              {/* Column 1 - Scenic Beauty */}
              <div>
                <div className="group relative   h-[180px] sm:h-[220px] md:h-[220px] lg:h-[380px] xl:h-[470px]  overflow-hidden shadow-md  mx-2">
                  <img
                    src="https://images.unsplash.com/photo-1509316785289-025f5b846b35"
                    alt="Scenic beauty"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Always visible title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                    <h3 className="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] font-bold text-white">Captivating Scenic Beauty     </h3>
                  </div>
                  {/* Hover description */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className=" text-[#313137] bg-[#ffffff] transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-[#313137] text-[0.7rem] md:text-[0.8rem] xl:text-[0.9rem] justify-center p-1 md:p-2 xl:p-3 text-justify">
                        Sikkim is a land drenched in breathtaking natural charm. Majestic Himalayan peaks, picturesque alpine lakes, sparkling streams, serene meadows carpeted with colourful flowers, and lush orchards create a trekking backdrop that is second to none. A trek here lets you breathe the crisp mountain air and experience the soothing silence of the wilderness like nowhere else.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Column 2 - Buddhist Culture */}
              <div>
                <div className="group relative   h-[180px] sm:h-[220px] md:h-[220px] lg:h-[380px] xl:h-[470px]  overflow-hidden shadow-md  mx-2">
                  <img
                    src="/images/buddhist-culture.jpg"
                    alt="Buddhist culture"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                    <h3 className="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] font-bold text-white">Spiritual Experience     </h3>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="text-[#313137] bg-[#ffffff] transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-[#313137] text-[0.7rem] 
 md:text-[0.8rem] xl:text-[0.9rem] justify-center p-1 md:p-2 xl:p-3 text-justify">
                        Across Sikkim’s landscapes, countless Buddhist monasteries add a mystical charm to the trekking trails. With their bright architecture, fluttering prayer flags, and serene surroundings, these monasteries create a perfect blend of spirituality and beauty. They offer trekkers a rare chance to pause, reflect, and absorb the peaceful energy of the mountains.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 3 - Wildlife */}

              <div>
                <div className="group relative   h-[180px] sm:h-[220px] md:h-[220px] lg:h-[380px] xl:h-[470px]  overflow-hidden shadow-md mx-2 ">
                  <img
                    src="https://images.unsplash.com/photo-1534187886935-1e1236e856c3"
                    alt="Wildlife"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                    <h3 className="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] font-bold text-white">Diverse Himalayan Wildlife     </h3>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="text-[#313137] bg-[#ffffff] transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-[#313137] text-[0.7rem] 
 md:text-[0.8rem] xl:text-[0.9rem] justify-center p-1 md:p-2 xl:p-3 text-justify">
                        Many popular treks in Sikkim pass through the Kanchenjunga Biosphere Reserve, India’s highest national park. Here, trekkers can spot rare Himalayan animals like Red Pandas, Musk Deer, Tibetan Antelopes, and even the elusive Snow Leopard. For birdwatchers, the trails offer sightings of Tibetan Snowcock, Himalayan Pheasants, Sandpipers, and Old-World Flycatchers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Column 4 - Wildlife */}
              <div>
                <div className="group relative   h-[180px] sm:h-[220px] md:h-[220px] lg:h-[380px] xl:h-[470px]  overflow-hidden shadow-md  mx-2">
                  <img
                    src="https://images.unsplash.com/photo-1534187886935-1e1236e856c3"
                    alt="Wildlife"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                    <h3 className="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] font-bold text-white">Local Culture     </h3>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="text-[#313137] bg-[#ffffff] transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-[#313137] text-[0.7rem] 
 md:text-[0.8rem] xl:text-[0.9rem] justify-center p-1 md:p-2 xl:p-3 text-justify">
                        A Sikkim trekking tour is also a cultural journey. You’ll encounter warm-hearted locals, witness vibrant dance festivals, taste authentic Sikkimese cuisine, and learn about traditions deeply rooted in Buddhism. The unmatched hospitality of the people ensures that you’ll feel at home, even in the remotest corners of the Himalayas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>


                {/* Column 5 - Wildlife */}
                <div className="group relative   h-[180px] sm:h-[220px] md:h-[220px] lg:h-[380px] xl:h-[470px]  overflow-hidden shadow-md  mx-2">
                  <img
                    src="https://images.unsplash.com/photo-1534187886935-1e1236e856c3"
                    alt="Wildlife"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                    <h3 className="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] font-bold text-white">Yak Safari     </h3>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="text-[#313137] bg-[#ffffff] transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-[#313137] text-[0.7rem] 
 md:text-[0.8rem] xl:text-[0.9rem] justify-center p-1 md:p-2 xl:p-3 text-justify">
                        Unique to this region, yaks are an integral part of life in Sikkim. During your trek, don’t miss the chance for a Yak Safari — a once-in-a-lifetime experience that adds an extra layer of adventure to your journey.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>


          {/* Best Time Section (NO hover - always visible) */}
          <div className="mb-4 md:mb-18">
            <h3 className="text-xl sm:text-2xl  xl:text-4xl font-bold text-[#000] mb-0 md:mb-1 lg:mb-2 xl:mb-3">Best Treks to Do in Sikkim Himalayas </h3>

            <p className="mb-1 md:mb-3  text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">Sikkim boasts some of the most scenic and adventurous trails in India. Easy yet rewarding treks like the Sikkim–Darjeeling route or the Yuksom–Dzongri–Goecha La trail challenge both physical and mental endurance, offering mesmerizing views of Mt. Pandim and Mt. Kabru.</p>
            <p className=" mb-1 md:mb-3 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">For moderate treks, the Singalila Ridge–Goecha La and Green Lake routes are perfect choices, blending pristine natural beauty with cultural encounters in tribal villages. These trails showcase rhododendron-covered forests, panoramic Himalayan views, and a glimpse into the festive spirit of Sikkimese life. </p>
            <p className=" mb-1 md:mb-3 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">For seasoned trekkers seeking the ultimate challenge, the Kanchenjunga Base Camp trek stands unmatched. This high-altitude expedition (over 17,000 ft.) leads through rhododendron valleys, alpine meadows, and snowy landscapes, delivering breathtaking views of Mt. Kanchenjunga, Mt. Pandim, and Mt. Kokthang.  </p>
          </div>

          {/* Best Time Section (NO hover - always visible) */}
          <div className="mb-4 md:mb-18">
            <h3 className="text-xl sm:text-2xl  xl:text-4xl font-bold text-[#000] mb-0 md:mb-1 lg:mb-2 xl:mb-3">Best Time to Visit Sikkim</h3>
            <p className="text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">The ideal seasons for trekking in Sikkim are summer (March–June) and autumn (mid-September–November). Monsoon trekking is discouraged due to landslides and road blockages, while heavy winter snow makes high-altitude treks inaccessible.</p>
            <p className="text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">For those looking for a well-organized adventure, numerous Sikkim trekking tour packages are available, covering everything from the best treks in Sikkim to cultural highlights and local experiences. Whether you choose an easy route or a challenging expedition, a Sikkim trekking tour promises memories that will last a lifetime. </p>
          </div>

          {/* <div className='mb-4 md:mb-18'>
            <h3 className="text-xl sm:text-2xl  xl:text-4xl font-bold text-[#172541]  mb-0 md:mb-1 lg:mb-2 xl:mb-3">Some pre-requisites for trekking in Sikkim</h3>
            <p className="mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]"> Trekking in Sikkim is not everyone's cup of tea and requires some early preparations. Here are some basic pre-requisites to get on with a trekking expedition is this stunningly beautiful kingdom.</p>
            <ul>
              <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'> <span className="text-[#f47a2a] text-xl mr-2">•</span>The first and foremost important requisite is building up your physical and mental fitness. Trekking in Sikkim requires endless walking and hiking at times. Without a physical stamina, a trek in Sikkim is out of question.</li>
              <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'> <span className="text-[#f47a2a] text-xl mr-2">•</span>The second most important point is to get yourselves medically examined to make sure you are fit enough to access great mountain heights. Most trekking routes in Sikkim start from a height of around 3500 metres above sea level and needless to say, at greater heights thickness of air can result in acute mountain sickness. So, be sure you don't have any sort of asthmatic and cardiac problems.</li>
              <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Getting required permits from different authorities before commencing with your trek is the third most important requisite. For accessing Tso-Moriri, Hemis National Park and Stok-Kangri peaks, these permissions are of utmost importance.</li>
            </ul>


          </div> */}
        </div>

      </section>
      <CtaButton />
      <Faq faqs={Sikkimtrekfaq} />
    </>
  );
};

export default SikkimTrek;