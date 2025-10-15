"use client"
import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CtaButton from '@/components/ctabutton/CtaButton';
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
import { Himachaltrekfaq, Kumaontrekfaq } from '@/components/faqs/faqs';


const HimachalTrek = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [showAllCards, setShowAllCards] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedSections, setExpandedSections] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const TrekData = trekData.filter(trek => trek.region === 'Himachal');

  const breadcrumbPath = [
    { label: 'Trekking in himachal' },
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



  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('body-no-scroll');
    } else {
      document.body.classList.remove('body-no-scroll');
    }

    return () => {
      document.body.classList.remove('body-no-scroll');
    };
  }, [isOpen]);

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };




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

  const filteredTreks = activeFilter === 'all'
    ? TrekData
    : TrekData.filter(trek => trek.difficulty === activeFilter);


  const slides = [
    {
      image: "/images/beas-kund.webp",
      alt: "Jeep Safari in Himalayas",
      caption: "Explore the majestic Himalayas by Jeep"
    },
    {
      image: "/images/banner3.jpg",
      alt: "Himachal Jeep Safari",
      caption: "The rugged beauty of Himachal"
    },
    {
      image: "/images/banner10.webp",
      alt: "Uttarakhand Jeep Safari",
      caption: "Spiritual journey through Uttarakhand"
    }
  ];

  return (

    <>
      <Banner title="Trekking in Himachal" image="/images/himachal-banner.jpg" />
      <Breadcrumb path={breadcrumbPath} />
      <section className="bg-white">

        <div className="w-full  max-w-4xl md:max-w-6xl  xl:max-w-7xl  px-4 py-8 mx-auto md:px-10">
          <div className="">
            <h1 className="text-xl sm:text-2xl  xl:text-4xl font-bold mb-0 md:mb-1 lg:mb-2 xl:mb-3 text-[#172541]">Trekking in Himachal</h1>
            <p className="mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb:0 md:mb-1 lg:mb-2 xl:mb-3">
            Himachal Pradesh offers a trekking experience rich in diversity, culture, and the raw beauty of the Himalayas. From first-time hikers to seasoned adventurers, Himachal’s vast range of routes ensures there’s something for everyone. Explore our exclusive and well-personalized Himachal trekking tour packages for the ultimate trekking and hiking experience in the Himalayas. 
            </p>
          </div>

          <div className=" mt-3 md:mt-8 xl:mt-10">

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

            <div className="grid [grid-template-columns:repeat(1,1fr)] justify-center gap-8 mt-2 md:mt-3 lg:mt-4 xl:mt-6 md:grid-cols-2 lg:grid-cols-3 mx-auto py-0 sm:py-2 lg:py-4 xl:py-10  ">
              {filteredTreks.slice(0, 9).map(trek => (
                <DestinationsTrekCard key={trek.id} trek={trek} renderStars={renderStars} />
              ))}

              {showAllCards && filteredTreks.slice(9).map(trek => (
                <DestinationsTrekCard key={trek.id} trek={trek} renderStars={renderStars} />
              ))}
            </div>

            <div className="flex items-center justify-center w-full gap-4 my-8" onClick={() => setShowAllCards(!showAllCards)}>
              <div className="flex-1 h-0.5 bg-[#f47a2a] opacity-40"></div>
              <button className="mx-4 px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all">
                {showAllCards ? 'Show Less' : 'Explore More'}
              </button>
              <div className="flex-1 h-0.5 bg-[#f47a2a] opacity-40"></div>
            </div>
          </div>

        </div>
      </section>



      <section className="destinations-page__section bg-[#ffffff]">



        <div className="w-full  max-w-4xl md:max-w-6xl  xl:max-w-7xl  px-4 py-8 mx-auto md:px-10">
        

        <div className="mb-4 md:mb-18">
            <h2 className="text-xl sm:text-2xl  xl:text-4xl font-bold mb-0 md:mb-1 lg:mb-2 xl:mb-3 text-[#172541]">Himachal – A Paradise for Trekkers! </h2>
            <p className="mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb:0 md:mb-1 lg:mb-2 xl:mb-3">
           Nestled in the lap of the majestic Himalayas and surrounded by breathtaking scenic splendour, Himachal Pradesh is truly a haven for those seeking peace, adventure, and solitude amidst pristine nature. With its diverse terrains and countless well-marked trekking trails in Himachal, the state has rightfully earned its reputation as a paradise for trekking enthusiasts from across the globe. 
            </p>
            <p className="mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb:0 md:mb-1 lg:mb-2 xl:mb-3">
         Whether you are a beginner taking your first step into the world of trekking in Himachal, a casual hiker looking for scenic routes, or a seasoned mountaineer in search of challenging ascents, the region offers trails for every level. From gentle walks through flower-filled valleys to demanding high-altitude climbs, Himachal trekking promises unforgettable experiences against the backdrop of snow-capped peaks and lush alpine meadows. 
            </p>
            <p className="mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb:0 md:mb-1 lg:mb-2 xl:mb-3">
          Considered an all-year trekking destination, each season in Himachal offers its own unique charm. In summer and monsoon, the valleys burst into life with colourful wildflowers and gushing streams, while in winter, thick blankets of snow transform the landscape into a wonderland, offering a magical and unmatched experience of snow trekking. 
            </p>
          </div>



        
          <div className='mb-4 md:mb-18'>
            <span className="text-[#f47a2a] font-semibold text-[0.8rem] md:[text-0.9rem] xl:text-[1rem]">Top Attractions in Himachal</span>
            <h3 className="text-xl sm:text-2xl  xl:text-4xl font-bold text-[#172541] mb-0  md:mb-1 lg:mb-2 xl:mb-3">What to Experience During Trekking in Himachal? <span className="text-[#f47a2a] font-semibold ">?</span></h3>
      
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
                    <h4 className="text-2xl font-bold text-white">Alpine Landscapes & Terrain Transitions</h4>
                  </div>
                  {/* Hover description */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className=" text-[#313137] bg-[#ffffff] transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-[#313137] text-[0.7rem] 
 md:text-[0.8rem] xl:text-[0.9rem] justify-center p-1 md:p-2 xl:p-3 text-justify">
                       On treks like Hampta Pass at an elevation of over 4000 m, you begin in lush Kullu Valley, with dense pine and maple forests, open wildflower meadows, and glacier-fed rivers. Over a few days, the landscape shifts as you cross the high pass into the barren, arid terrain of Lahaul Valley, with stark ridges and barren mountains. The contrast from green to dry, humid to harsh, is compelling, keeping the trek visually engaging. The crossing above 14,000 ft offers stunning views of peaks like Indrasan and Deo Tibba. Stream crossings, rocky trails, and high mountain deserts make this trek one of Himachal’s most celebrated terrain transitions. 
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
                    <h4 className="text-2xl font-bold text-white"> Wildlife Encounters</h4>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="text-[#313137] bg-[#ffffff] transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-[#313137] text-[0.7rem] 
 md:text-[0.8rem] xl:text-[0.9rem] justify-center p-1 md:p-2 xl:p-3 text-justify">
                       In and around the Great Himalayan National Park, Tirthan Valley, and Sainj region, you may spot Himalayan birds like the rainbow Himalayan Monal or hear the whistling thrush at dawn. Treks into the higher valleys, especially Spiti and Lahaul, are snow leopard habitat zones; while sightings are rare, trekkers may find tracks or prey evidence. One can also spot blue sheep (bharal) and ibex (mountain goats).  
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 3 - Wildlife */}

              <div>
                <div className="group relative   h-[180px] sm:h-[220px] md:h-[220px] lg:h-[380px] xl:h-[470px]  overflow-hidden shadow-md  mx-2">
                  <img
                    src="https://images.unsplash.com/photo-1534187886935-1e1236e856c3"
                    alt="Wildlife"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                    <h4 className="text-2xl font-bold text-white">Spiritual Sites along Remote Routes</h4>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="text-[#313137] bg-[#ffffff] transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-[#313137] text-[0.7rem] 
 md:text-[0.8rem] xl:text-[0.9rem] justify-center p-1 md:p-2 xl:p-3 text-justify">
                       Trekking in Himachal often leads through landscapes that are deeply sacred to local communities, blending adventure with spiritual discovery. Many trails intersect with ancient pilgrimage routes or end at revered shrines tucked away in the mountains. Treks like Bijli Mahadev offer insight into Shiva worship and local legends tied to natural elements like lightning. In Spiti, trails pass centuries-old Buddhist monasteries such as Dhankar, Key, and Lhalung. The Kinner Kailash Circuit in Kinnaur is considered one of the holiest treks, offering views of a naturally formed rock pillar worshipped as Shiva’s symbolic abode. 
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
                    <h4 className="text-2xl font-bold text-white">High‑Altitude Lakes</h4>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="text-[#313137] bg-[#ffffff] transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-[#313137] text-[0.7rem] 
 md:text-[0.8rem] xl:text-[0.9rem] justify-center p-1 md:p-2 xl:p-3 text-justify">
                       Destinations like Bhrigu Lake, Chandratal, Kareri Lake, and Dashir Lake are known for their unique blend of raw alpine beauty and changing terrain. Most of these lakes sit at elevations between 3,000 and 4,300 meters. Trekkers begin in lower-altitude forests and gradually reach alpine zones where oxygen is thinner and the climate noticeably colder. These glacial or snow-fed lakes are often crystal-clear or partially frozen, especially between May and early July. Surroundings include open meadows, moraine fields, and rugged ridgelines, with views of prominent ranges like Dhauladhar, Pir Panjal, and CB peaks in Lahaul. 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Column 5 - Wildlife */}
              <div>
                <div className="group relative   h-[180px] sm:h-[220px] md:h-[220px] lg:h-[380px] xl:h-[470px]  overflow-hidden shadow-md  mx-2">
                  <img
                    src="https://images.unsplash.com/photo-1534187886935-1e1236e856c3"
                    alt="Wildlife"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                    <h4 className="text-2xl font-bold text-white">Cultural Trails of Himachal</h4>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="text-[#313137] bg-[#ffffff] transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-[#313137] text-[0.7rem] 
 md:text-[0.8rem] xl:text-[0.9rem] justify-center p-1 md:p-2 xl:p-3 text-justify">
                     Several popular treks in Himachal Pradesh, such as the Chandrakhani Pass Malana trek, Tosh Valley, Jibhi Serolsar Lake, and Bara Bhangal, offer an opportunity to experience mountain life up close. On the Malana Chandrakhani Pass trek, you pass through the Malana village, renowned for its distinct social customs, unique language, and strict rules, including a ban on touching or sharing objects between locals and trekkers. In the Parvati Valley, villages like Tosh and Jibhi feature traditional Himachali wooden architecture, homestays run by locals, and cuisine that includes dishes such as siddu and chana madra. These treks frequently include stays in locally run homestays, observation of seasonal farming, and moments to see traditional weaving or cooking.  
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>


          {/* Best Time Section (NO hover - always visible) */}
          <div className="mb-4 md:mb-18">
            <h3 className="text-xl sm:text-2xl  xl:text-4xl font-bold text-[#172541] mb-0  md:mb-1 lg:mb-2 xl:mb-3">Best Time for Trekking in Himachal </h3>
            <p className="text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">Ideally, the best time for The ideal time for trekking in Himachal spans from March to June and September to November, when most trekking routes are accessible, and trail conditions remain stable. During these months, high-altitude passes are open, and daytime temperatures are moderate, typically ranging between 12°C and 20°C depending on the elevation. These windows avoid the heavy snow of winter and the unpredictable monsoon period, ensuring safer and more reliable treks. For low-altitude snow treks like Prashar Lake or Nag Tibba, January to early March is preferred. Timing your trek with the season ensures optimal trail access and safety across the best trekking places in Himachal.</p>
          </div>

          <div className='mb-4 md:mb-18'>
            <h3 className="text-xl sm:text-2xl  xl:text-4xl  font-bold text-[#172541]  mb-0 md:mb-1 lg:mb-2 xl:mb-3">Some pre-requisites for trekking in Himachal</h3>
            <p className="text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]"> Trekking in Himachal is not everyone's cup of tea and requires some early preparations. Here are some basic pre-requisites to get on with a trekking expedition is this stunningly beautiful kingdom.</p>
            <ul>
              <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'> <span className="text-[#f47a2a] text-xl mr-2">•</span>The first and foremost important requisite is building up your physical and mental fitness. Trekking in Himachal requires endless walking and hiking at times. Without a physical stamina, a trek in Himachal is out of question.</li>
              <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'> <span className="text-[#f47a2a] text-xl mr-2">•</span>The second most important point is to get yourselves medically examined to make sure you are fit enough to access great mountain heights. Most trekking routes in Himachal start from a height of around 3500 metres above sea level and needless to say, at greater heights thickness of air can result in acute mountain sickness. So, be sure you don't have any sort of asthmatic and cardiac problems.</li>
              <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Getting required permits from different authorities before commencing with your trek is the third most important requisite. For accessing Tso-Moriri, Hemis National Park and Stok-Kangri peaks, these permissions are of utmost importance.</li>
            </ul>


          </div>



        </div>
        <div>



        </div>
      </section>
      <CtaButton />

      <Faq faqs={Himachaltrekfaq} />
    </>
  );
};

export default HimachalTrek;