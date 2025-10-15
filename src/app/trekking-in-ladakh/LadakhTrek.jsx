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
import { Ladakhtrekfaq } from '@/components/faqs/faqs';
import Faq from '@/components/faqs/Faq';
import CtaButton from '@/components/ctabutton/CtaButton';

const LadakhTrek = () => {

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [showAllCards, setShowAllCards] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');




  const TrekData = trekData.filter(trek => trek.region === 'Ladakh');

  const breadcrumbPath = [
    { label: 'Trekking in ladakh' },
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
               h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] md:h-[45px] md:w-[45px] lg:h-[42px] lg:w-[42px] xl:h-[50px] xl:w-[50px] 
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
               h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] md:h-[45px] md:w-[45px] lg:h-[42px] lg:w-[42px] xl:h-[50px] xl:w-[50px] 
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
      <Banner title="Trekking in Ladakh" image="/images/ladakh.webp" />
      <Breadcrumb path={breadcrumbPath} />

      <section className="bg-white">
        <div className="w-full  max-w-4xl md:max-w-6xl  xl:max-w-7xl  px-4 py-8 mx-auto md:px-10">
          <div className="">
            <h1 className="text-xl sm:text-2xl  xl:text-4xl font-bold mb-0 md:mb-1 lg:mb-2 xl:mb-3 text-[#172541]">Trekking in Ladakh</h1>
            <p className="mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb:0 md:mb-1 lg:mb-2 xl:mb-3">
              A trek in Ladakh is more than just a physical journey. It’s a chance to witness life in remote mountain villages, encounter unique wildlife, and walk through landscapes unlike anywhere else in India. Be a part of these thrilling trekking adventures in Ladakh — a land of barren beauty, ancient monasteries, majestic mountain ranges, and exotic flora and fauna. Explore our tailor-made Ladakh trekking tour packages that unveil the natural wonders and hidden gems of this incredible region. Book your Ladakh adventure trekking holiday now for the best prices and top-notch services.
            </p>
          </div>

          <div className="mt-3 md:mt-8 xl:mt-10">

            {/* Filter Buttons */}
            <div
              className="
            flex 
            gap-2 md:gap-3  
            overflow-x-auto 
            scrollbar-hide 
            md:flex-wrap 
            w-full 
            px-2 md:px-2            
          "
            >
              <button
                className={`px-1 py-2  text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] font-semibold border-b-3 transition-all ${activeFilter === 'all'
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-[#313137]  hover:text-[#f47a2a] '
                  }`}
                onClick={() => setActiveFilter('all')}
              >
                All Treks ({TrekData.length})
              </button>

              <button
                className={`px-1 py-2  text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] font-semibold border-b-3 transition-all ${activeFilter === 'easy'
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-[#313137]  hover:text-[#f47a2a]'
                  }`}
                onClick={() => setActiveFilter('easy')}
              >
                Easy Treks
              </button>

              <button
                className={`px-1 py-2 text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] font-semibold border-b-3 transition-all ${activeFilter === 'moderate'
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-[#313137]  hover:text-[#f47a2a] '
                  }`}
                onClick={() => setActiveFilter('moderate')}
              >
                Moderate Treks
              </button>

              <button
                className={`px-1 py-2  text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] font-semibold border-b-3 transition-all ${activeFilter === 'hard'
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-[#313137]  hover:text-[#f47a2a] '
                  }`}
                onClick={() => setActiveFilter('hard')}
              >
                Hard Treks
              </button>
            </div>

            <div className="grid [grid-template-columns:repeat(1,1fr)] justify-center gap-8 mt-3 md:mt-3 lg:mt-3 xl:mt-4 md:grid-cols-2 lg:grid-cols-3   mx-auto py-0 sm:py-2 lg:py-4 xl:py-10  ">

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

      <section className=" bg-white">
        <div className='max-w-4xl md:max-w-6xl  xl:max-w-7xl  mx-auto px-4 md:px-8'>
          {/* Overview Header */}
          <div className="mb-4 md:mb-18">
            <h2 className="text-xl sm:text-2xl  xl:text-4xl font-bold mb-0  md:mb-1 lg:mb-2 xl:mb-3 text-[#172541]">Why Ladakh is a Great Trekking Destination</h2>
            <p className=" text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
              Blessed with an incredible topography of rugged terrains, enchanting valleys, and serene alpine lakes, Ladakh is undoubtedly an epitome of mountain beauty and a hub for exhilarating adventure activities like mountaineering, white-water rafting, mountain biking, and most notably, trekking. Snuggled in the lap of the Himalayas and hiding within its folds several unexplored and enticing trekking trails, it’s no surprise this mystical land is often referred to as a paradise for trekkers across the globe. With its wide range of trekking options—from easy and moderate to highly challenging—the treks in Ladakh cater to all, whether you’re a beginner or a seasoned adventurer.
            </p>
          </div>


          <div className='mb-4 md:mb-18'>
            <span className="text-[#f47a2a] font-semibold text-[0.8rem] md:[text-0.9rem] xl:text-[1rem]">Top Attractions in Ladakh</span>
            <h2 className="text-xl sm:text-2xl  xl:text-4xl font-bold text-[#172541] mb-15">What to Experience During Trekking in Ladakh?  <span className="text-[#f47a2a] font-semibold ">?</span></h2>
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
                    <h3 className="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] font-bold text-white">Enchanting Scenic Beauty </h3>
                  </div>
                  {/* Hover description */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className=" text-[#313137] bg-[#ffffff] transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-[#313137] text-[0.7rem] 
 md:text-[0.8rem] xl:text-[1rem] justify-center p-1 md:p-2 xl:p-3 text-justify">
                        On a trekking expedition in Ladakh, you'll be rewarded with spectacular mountain vistas featuring snow-capped peaks, glacier-fed rivers, and pristine alpine lakes. While some landscapes are stark and arid, others are lush with greenery and vibrant wildflowers—a rare contrast found only in Ladakh.
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
                    <h3 className="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] font-bold text-white">Deep-Rooted Buddhist Culture</h3>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="text-[#313137] bg-[#ffffff] transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-[#313137] text-[0.7rem] 
 md:text-[0.8rem] xl:text-[0.9rem] justify-center p-1 md:p-2 xl:p-3 text-justify">
                        Ladakh is steeped in centuries-old Buddhist traditions. Along your trekking path, you’ll encounter picturesque monasteries perched on dramatic cliffs. These spiritual havens offer immense peace and serenity. Sitting in a prayer hall, soaking in the tranquil chants of monks, is a divine experience not to be missed.
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
                    <h3 className="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] font-bold text-white">Rare and Exotic Wildlife </h3>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="text-[#313137] bg-[#ffffff] transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-[#313137] text-[0.7rem] 
 md:text-[0.8rem] xl:text-[0.9rem] justify-center p-1 md:p-2 xl:p-3 text-justify">
                        Ladakh's unique ecosystem is home to diverse wildlife. While sightings of yaks, Himalayan sheep, and goats are common, you might also spot the elusive Snow Leopard, Himalayan Ibex, or Tibetan Antelope. The region is also a haven for birdwatchers, offering glimpses of rare species like Golden Eagles, Tibetan Snowcocks, and White-throated Dippers.
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
                    <h3 className="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] font-bold text-white">Alpine Lakes and Cold Desert Landscapes </h3>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="text-[#313137] bg-[#ffffff] transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-[#313137] text-[0.7rem] 
 md:text-[0.8rem] xl:text-[0.9rem] justify-center p-1 md:p-2 xl:p-3 text-justify">
                        Trekking through Ladakh means walking across one of the most extreme landscapes on Earth, such as a cold desert and frozen rivers. This high-altitude desert ecosystem is stark yet striking, with harsh winds, minimal vegetation, and temperature shifts that shape both the terrain and the life it sustains. Trails in the Changthang region lead through Salt Lake Valley (Rupshu Valley), the vast Changthang wetlands, one of the world’s highest wetland zones, where alpine lakes like Tso Moriri and Tso Kar shimmer amid the arid backdrop. This basin, recognized under the Ramsar Site, offers a rare blend of brackish (Tso Kar) and freshwater (Startsapuk Tso) lakes, salt pans, grasslands, and seasonal marshes, all surrounded by barren ridgelines. Tso Moriri, in particular, serves as a nesting ground for rare migratory birds like the Black-necked crane and Bar-headed goose, making this cold desert one of the most unique and ecologically rich trekking zones in Ladakh.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Column 5 */}
              <div>
                <div className="group relative   h-[180px] sm:h-[220px] md:h-[220px] lg:h-[380px] xl:h-[470px]  overflow-hidden shadow-md  mx-2">
                  <img
                    src="https://images.unsplash.com/photo-1534187886935-1e1236e856c3"
                    alt="Wildlife"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                    <h3 className="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] font-bold text-white">Alpine Lakes and Cold Desert Landscapes </h3>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="text-[#313137] bg-[#ffffff] transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-[#313137] text-[0.7rem] 
 md:text-[0.8rem] xl:text-[0.9rem] justify-center p-1 md:p-2 xl:p-3 text-justify">
                        Trekking through Ladakh means walking across one of the most extreme landscapes on Earth, such as a cold desert and frozen rivers. This high-altitude desert ecosystem is stark yet striking, with harsh winds, minimal vegetation, and temperature shifts that shape both the terrain and the life it sustains. Trails in the Changthang region lead through Salt Lake Valley (Rupshu Valley), the vast Changthang wetlands, one of the world’s highest wetland zones, where alpine lakes like Tso Moriri and Tso Kar shimmer amid the arid backdrop. This basin, recognized under the Ramsar Site, offers a rare blend of brackish (Tso Kar) and freshwater (Startsapuk Tso) lakes, salt pans, grasslands, and seasonal marshes, all surrounded by barren ridgelines. Tso Moriri, in particular, serves as a nesting ground for rare migratory birds like the Black-necked crane and Bar-headed goose, making this cold desert one of the most unique and ecologically rich trekking zones in Ladakh.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Column 5 */}
              <div>
                <div className="group relative   h-[180px] sm:h-[220px] md:h-[220px] lg:h-[380px] xl:h-[470px]  overflow-hidden shadow-md  mx-2">
                  <img
                    src="https://images.unsplash.com/photo-1534187886935-1e1236e856c3"
                    alt="Wildlife"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                    <h3 className="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] font-bold text-white">Ruins from the Silk Trade Era </h3>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="text-[#313137] bg-[#ffffff] transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-[#313137] text-[0.7rem] 
 md:text-[0.8rem] xl:text-[0.9rem] justify-center p-1 md:p-2 xl:p-3 text-justify">
                        High above the valleys and trekking trails of Ladakh lie crumbling forts and old trading outposts that once guarded the ancient Silk Route connecting India with Tibet. Structures like Basgo Fort, Chiktan Fort, and watchtowers scattered near Zanskar and Nubra valleys served both defense and trade functions. Though many are in ruins, trekkers can still spot mud-brick walls and granaries inside abandoned forts perched on rocky cliffs. These places can often be found near trekking detours offering a window into medieval Ladakhi kingdoms, caravan routes, and military strategy adapted to high-altitude terrain.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Column 6 */}
              <div>
                <div className="group relative   h-[180px] sm:h-[220px] md:h-[220px] lg:h-[380px] xl:h-[470px]  overflow-hidden shadow-md  mx-2">
                  <img
                    src="https://images.unsplash.com/photo-1534187886935-1e1236e856c3"
                    alt="Wildlife"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                    <h3 className="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] font-bold text-white">Warm Hospitality of Ladakhi People </h3>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="text-[#313137] bg-[#ffffff] transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-[#313137] text-[0.7rem] 
 md:text-[0.8rem] xl:text-[0.9rem] justify-center p-1 md:p-2 xl:p-3 text-justify">
                        In Ladakh, where luxury resorts are rare, village homestays offer an authentic experience. Here, you'll enjoy simple yet warm hospitality and gain insights into a lifestyle untouched by modern distractions. The people lead humble lives, celebrate traditions with zeal, and always go the extra mile to make guests feel at home.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>


          {/* Best Time Section (NO hover - always visible) */}
          <div className="mb-4 md:mb-18">
            <h2 className="text-xl sm:text-2xl  xl:text-4xl font-bold text-[#172541]  mb-0 md:mb-1 lg:mb-2 xl:mb-3">Best Time for Trekking in Ladakh </h2>
            <p className=' text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'>Ideally, the best time for Peak season for trekking in Ladakh is from June to September, when most trails and high mountain passes are open, and daytime temperatures are comfortable, typically between 10°C and 25°C. This summer window offers the best trail conditions, clear skies, and plenty of support infrastructure. Summer also aligns with seasonal festivals and local events, such as the Hemis Festival, adding cultural highlights to the Ladakh trekking tour. For winter specific routes like the Chadar Trek, the ideal period is mid-January to mid-February, when the Zanskar River is completely frozen. Due to its difficulty and extreme temperatures, this trek is included in more specialized Ladakh trekking packages that cater to experienced trekkers. </p>
          </div>

          <div className='mb-4 md:mb-18'>
            <h2 className='text-xl sm:text-2xl  xl:text-4xl font-bold text-[#172541]  mb-0 md:mb-1 lg:mb-2 xl:mb-3'>Essential Prerequisites for Trekking in Ladakh </h2>
            <p className=' text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'> Trekking in Ladakh is not everyone's cup of tea and requires some early preparations. Here are some basic pre-requisites to get on with a trekking expedition is this stunningly beautiful kingdom.</p>
            <ul>
              <li className=' text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Physical Fitness:</b>Trekking here demands long hours of walking and hiking. Building stamina is essential.
              </li>
              <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Medical Clearance:</b>Most treks start at altitudes above 3,500 meters. It's important to get a health check-up, especially for those with respiratory or cardiac issues. </li>
              <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Permits:</b>Obtain necessary permits before trekking to restricted areas like Tso Moriri, Hemis National Park, or Stok Kangri.</li>
            </ul>
            <p className=' text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mt-1 md:mt-2'> With our customizable Leh-Ladakh trekking packages, you are guaranteed top-notch services and safety. Whether you want a light hike or an extreme adventure, we’ve got something for everyone.</p>

          </div>
          
        </div>
        <div>

        </div>
      </section>
      <CtaButton />
      <Faq faqs={Ladakhtrekfaq} />
    </>
  );
};

export default LadakhTrek;