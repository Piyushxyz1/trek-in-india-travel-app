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
import { Kumaontrekfaq } from '@/components/faqs/faqs';
import Faq from '@/components/faqs/Faq';
import CtaButton from '@/components/ctabutton/CtaButton';

const UttarakhandTrek = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [showAllCards, setShowAllCards] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedSections, setExpandedSections] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const TrekData = trekData.filter(trek => trek.region.includes("Uttarakhand") );

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



    const breadcrumbPath = [
    { label: 'Trekking in kumaon' },
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
      <Banner title="Trekking in Kumaon" image="/images/kumaon-banner.jpg" />
      <Breadcrumb path={breadcrumbPath} />
      <section className="bg-white">

        <div className="w-full  max-w-4xl md:max-w-6xl  xl:max-w-7xl  px-4 py-8 mx-auto md:px-10">
          <div className="">
            <h1 className="text-xl sm:text-2xl  xl:text-4xl font-bold mb-0 md:mb-1 lg:mb-2 xl:mb-3 text-[#172541]">Trekking in Kumaon</h1>
           <p className="mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb:0 md:mb-1 lg:mb-2 xl:mb-3">
              Come, be a part of these thrilling trekking adventures in Kumaon, a rich land that offers barren places, tapestry monastery, great mountain kingdoms, and exotic flora and fauna in a spectacular way. Explore our tailor-made itineraries that will lead you to beautiful wonders of nature and point out interesting spots in Kumaon you don't want to miss. Book your Kumaon adventure trekking holidays at best prices and services.
            </p>
          </div>

          <div className="mt-3 md:mt-8 xl:mt-10">

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


                        <div className="grid [grid-template-columns:repeat(1,1fr)] justify-center gap-8 mt-2 md:mt-3 lg:mt-4 xl:mt-6 md:grid-cols-2 lg:grid-cols-3   mx-auto py-0 sm:py-2 lg:py-4 xl:py-10  ">

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
          {/* Overview Header */}
          <div className="mb-4 md:mb-6 lg:mb-10  xl:mb-12">
            <h2 className="text-xl sm:text-2xl  xl:text-4xl font-bold mb-0  md:mb-1 lg:mb-2 xl:mb-3 text-[#172541]">Why Kumaon is a Great Trekking Destination</h2>
            <p className=" text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
              Bestowed with an incredible topography of hilly terrains, enchanting valleys and serene alpine glacial lakes; Kumaon is undoubtedly an epitome of mountain beauty and a hub of exhilarating adventure activities like mountaineering, white water rafting, mountain biking and most importantly, trekking. Snuggled in the lap of Himalayas and hiding in its store, some unexplored and enticing trekking trails, no wonder why this mystical land is called an empyrean for trekkers all across the globe. Also, with its huge offerings of trekking options ranging from easy to moderate to challenging grades, the treks of Kumaon do not disappoint any avid trekking enthusiast, whether he is a beginner or an expert.
            </p>
          </div>


          <div className='mb-4 md:mb-6 lg:mb-10  xl:mb-12'>
              <span className="text-[#f47a2a] font-semibold text-[0.8rem] md:[text-0.9rem] xl:text-[1rem]">Top Attractions in Kumaon</span>
            <h3 className="text-xl sm:text-2xl  xl:text-4xl font-bold text-[#000] mb-0  md:mb-1 lg:mb-2 xl:mb-3">What to Look For in Kumaon <span className="text-[#f47a2a] font-semibold ">?</span></h3>
            <p className='text-[#313137]  mb-20'>Making your traverse through dense verdant forests, cross over glacial beds and cut through rocky moraines; the trekking trails of Kumaon offers you unmatched thrills, excitement and challenges that an ardent trekker looks forward to in his trekking expedition. Besides offering ample chances to test your physical and mental strengths, trekking in Kumaon also provides with extraordinary scenic vistas of snow-clad Himalayan peaks, sacred alpine lakes, flower embellished valleys, lush pasturelands, enchanting fruit orchards and lush alpine meadows.</p>
            <Slider {...settings} >

              {/* Column 1 - Scenic Beauty */}
              <div >
                <div className="group relative   h-[180px] sm:h-[220px] md:h-[220px] lg:h-[380px] xl:h-[470px]  overflow-hidden shadow-md  mx-2">
                  <img
                    src="https://images.unsplash.com/photo-1509316785289-025f5b846b35"
                    alt="Scenic beauty"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Always visible title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                    <h4 className="text-2xl font-bold text-white">rich flora and fauna</h4>
                  </div>
                  {/* Hover description */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className=" text-[#313137] bg-[#ffffff] transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-[#313137] text-[0.7rem] 
 md:text-[0.8rem] xl:text-[0.9rem] justify-center p-1 md:p-2 xl:p-3 text-justify">
                    Home to a rich flora and fauna, while on a trekking trip Kumaon, you just cannot miss on having a memorable rendezvous with rich Himalayan wildlife that can only be experienced in this pious land of Uttarakhand. With many of the trails crossing through high altitude wildlife sanctuaries and parks, you can feast your eyes to rare glimpses of Musk Deer, Himalayan Brown Bear, Bharal, Cheetal and Jungle Cat. The Himalayan region of Kumaon is also a paradise for birders and photographers providing them ample opportunities to capture in their cameras, rare sights of Himalayan Pheasants, Warblers, Rose Finches and Ruby Throated Parakeets.
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
                    <h4 className="text-2xl font-bold text-white">Buddhist Culture</h4>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="text-[#313137] bg-[#ffffff] transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-[#313137] text-[0.7rem] 
 md:text-[0.8rem] xl:text-[0.9rem] justify-center p-1 md:p-2 xl:p-3 text-justify">
                        The land of Kumaon is deeply immersed in age-old Buddhist cultures and traditions. During your trekking trip in the region, you will come across various picturesque monasteries perched precariously atop steep and sharp peaks. These monasteries are a lifeline of Kumaon and offer you immense serenity and peace. Nothing can be more holistic and divine than sitting in the prayer hall of one of these monasteries and dipping your souls in peaceful echoes and chants of Buddhist monks.
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
                    <h4 className="text-2xl font-bold text-white">Unique Wildlife</h4>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="text-[#313137] bg-[#ffffff] transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-[#313137] text-[0.7rem] 
 md:text-[0.8rem] xl:text-[0.9rem] justify-center p-1 md:p-2 xl:p-3 text-justify">
                        The landscape of Kumaon has been blessed with a spectacular animal and bird life. While spotting Himalayan sheep, goat and yaks is a common sight, it would not come as a surprise if all of a sudden, you also come across a Himalayan Ibex and Antelope or are treated with a rare glimpse of the elusive Snow Leopard while on a hiking and walking tour in Kumaon. Needless to say, a treasure trove of myriad endemic bird species, Kumaon also mesmerizes you with unusual sights of Tibetan Snowcocks, Golden Eagles, White and Brown throated Dippers and various species of Wall creepers, Pipits and Ibis.
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
                    <h4 className="text-2xl font-bold text-white">Warm hospitality of Kumaoni people</h4>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="text-[#313137] bg-[#ffffff] transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-[#313137] text-[0.7rem] 
 md:text-[0.8rem] xl:text-[0.9rem] justify-center p-1 md:p-2 xl:p-3 text-justify">
                        Being a remote and an unspoiled scenic destination, you will not find hotels and resorts in Kumaon and moreover for a real rustic trekking experience, there is no better choice than staying in village homestays and getting an insight into the simple lifestyle of Kumaoni people. As you interact and spend few moments with the local people of the region, you would realize how simple they are and how beautiful their lives are, away from any kind of interferences from technology, internet and social media that has, kind of made the lives of city dwellers so complex and complicated. The people here eat simple food, live peaceful lives and celebrate all festivals with zealous spirits. Also, they will leave no stones unturned to provide you with best of their limited resources, be it accommodation or food.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>


          {/* Best Time Section (NO hover - always visible) */}
          <div className="mb-10">
            <h3 className="text-xl sm:text-2xl  xl:text-4xl font-bold text-[#172541]  mb-0 md:mb-1 lg:mb-2 xl:mb-3">Best Time to Visit Kumaon</h3>
          <p className="text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">Ideally, the best time for trekking & hiking in Kumaon is between the months of May and September when the weather is salubrious and rejuvenating. Also, this is the best time to explore nature teeming with lush meadows, carpets of wild alpine flowers and striking peach and apricot orchards. For those who wish to witness the snow-white mountain beauty, the ideal time is during winter months, especially for the 'Chadar Trek' that you can attempt only in January-February when the Zanskar River is completely frozen.</p>
          </div>

          <div className='mb-20'>
            <h3 className="text-xl sm:text-2xl  xl:text-4xl font-bold text-[#172541]  mb-0 md:mb-1 lg:mb-2 xl:mb-3">Some pre-requisites for trekking in Kumaon</h3>
            <p className="mt-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]"> Trekking in Kumaon is not everyone's cup of tea and requires some early preparations. Here are some basic pre-requisites to get on with a trekking expedition is this stunningly beautiful kingdom.</p>
            <ul>
              <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'> <span className="text-[#f47a2a] text-xl mr-2">•</span>The first and foremost important requisite is building up your physical and mental fitness. Trekking in Kumaon requires endless walking and hiking at times. Without a physical stamina, a trek in Kumaon is out of question.</li>
              <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'> <span className="text-[#f47a2a] text-xl mr-2">•</span>The second most important point is to get yourselves medically examined to make sure you are fit enough to access great mountain heights. Most trekking routes in Kumaon start from a height of around 3500 metres above sea level and needless to say, at greater heights thickness of air can result in acute mountain sickness. So, be sure you don't have any sort of asthmatic and cardiac problems.</li>
              <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Getting required permits from different authorities before commencing with your trek is the third most important requisite. For accessing Tso-Moriri, Hemis National Park and Stok-Kangri peaks, these permissions are of utmost importance.</li>
            </ul>


          </div>



        </div>
        <div>



        </div>
      </section>

<CtaButton/>
    <Faq faqs={Kumaontrekfaq}/>
    </>
  );
};

export default UttarakhandTrek;