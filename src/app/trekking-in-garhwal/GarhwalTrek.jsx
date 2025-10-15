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
import { Garhwaltrekfaq } from '@/components/faqs/faqs';

const GarhwalTrek = () => {

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [showAllCards, setShowAllCards] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const TrekData = trekData.filter(trek => trek.region.includes("Garhwal"));
  const filteredTreks = activeFilter === 'all'
    ? TrekData
    : TrekData.filter(trek => trek.difficulty === activeFilter);

  const breadcrumbPath = [
    { label: 'Trekking in garhwal' },

  ];

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
      <Banner title="Trekking in Garhwal" image="/images/Garhwal.webp" />
      <Breadcrumb path={breadcrumbPath} />
      <section className="bg-white">

        <div className="w-full  max-w-4xl md:max-w-6xl  xl:max-w-7xl  px-4 py-8 mx-auto md:px-10">
          {/* Intro Section */}
          <div className="">
            <h1 className="text-xl sm:text-2xl  xl:text-4xl font-bold mb-0 md:mb-1 lg:mb-2 xl:mb-3 text-[#172541]">Trekking in Garhwal Himalayas</h1>
            <p className=" mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb:0 md:mb-1 lg:mb-2 xl:mb-3">
              Trekking in the Garhwal Himalayas is an immersive experience that blends adventure, spirituality, and cultural richness. This region invites trekkers to journey through sacred landscapes, alpine lakes, high passes, and some of the most picturesque meadows in India. Explore our all-inclusive guided trekking tour packages in Garhwal, Uttarakhand — complete with all essential safety measures.
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
          </div>



          {/* Trek Cards Grid */}
          <div className="grid [grid-template-columns:repeat(1,1fr)] justify-center gap-8 mt-2 md:mt-3 lg:mt-0 xl:mt-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredTreks.slice(0, showAllCards ? filteredTreks.length : 9).map(trek => (
              <DestinationsTrekCard key={trek.id} trek={trek} renderStars={renderStars} />
            ))}
          </div>

          {/* Explore More Button */}
          {filteredTreks.length > 9 && (
            <div className="flex items-center justify-center my-8">
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


      <section className="bg-white">
        <div className="max-w-4xl md:max-w-6xl  xl:max-w-7xl  mx-auto px-4 md:px-8">
          {/* Overview Header */}
          <div className="mb-4 md:mb-6 lg:mb-10  xl:mb-12">
            <h2 className="text-xl sm:text-2xl  xl:text-4xl font-bold text-[##172541] mb-0 md:mb-1 lg:mb-2 xl:mb-3">Garhwal Himalayas – An Empyrean for Trekkers! </h2>
            <p className="mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-1 md:mb-2">
              The Garhwal Himalayan region of Uttarakhand is blessed with tremendous natural beauty. The rugged charm of this Himalayan region draws thousands of trekkers every year to uncover its unexplored and untouched scenic trails. These paths lead you deep into a wilderness of mountains, where it's just you and the profound silence of snow-bound, lofty peaks. Ranging from easy to strenuous, Garhwal offers all kinds of trekking routes, giving adventure enthusiasts the perfect opportunity to test their endurance while revelling in breathtaking vistas.
            </p>
            <p className="mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
              Trekking through dense verdant forests, crossing glacial beds, and cutting through rocky moraines — the trails of Garhwal offer unmatched thrill, excitement, and challenges every passionate trekker seeks. Beyond testing your physical and mental strength, trekking in Garhwal rewards you with extraordinary views of snow-clad Himalayan peaks, sacred alpine lakes, flower-laden valleys, lush pasturelands, fruit orchards, and alpine meadows.
            </p>
          </div>


          <div className='mb-4 md:mb-6 lg:mb-10  xl:mb-12'>
            <span className="text-[#f47a2a] font-semibold text-[0.8rem] md:[text-0.9rem] xl:text-[1rem]">Top Attractions in Garhwal</span>
            <h2 className="text-xl sm:text-2xl  xl:text-4xl font-bold text-[#000] mb-15">What to Experience During Trekking in Garhwal? <span className="text-[#f47a2a] font-semibold">?</span></h2>
            <Slider {...settings} >
              {/* Column 1 - Scenic Beauty */}
              <div >
                <div className="group relative h-[180px] sm:h-[220px] md:h-[220px] lg:h-[380px] xl:h-[470px]  overflow-hidden shadow-md  mx-2">
                  <img
                    src="https://images.unsplash.com/photo-1509316785289-025f5b846b35"
                    alt="Scenic beauty"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Always visible title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                    <h3 className="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text[1.3rem] font-bold text-white">Rich Wildlife Encounters</h3>
                  </div>
                  {/* Hover description */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className=" text-[#313137] bg-[#ffffff] transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="mt-0 text-[#313137] text-[0.8rem] sm:text-[0.9rem] md:text-[0.9rem] p-2">
                        Home to diverse flora and fauna, Garhwal is also a treasure trove for wildlife lovers. Many trails pass through high-altitude wildlife sanctuaries and national parks, offering rare glimpses of species like the Musk Deer, Himalayan Brown Bear, Bharal, Cheetal, and Jungle Cat. Garhwal is a paradise for birdwatchers and photographers as well, presenting incredible chances to capture Himalayan Pheasants, Warblers, Rose Finches, and Ruby-Throated Parakeets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Column 2 - Buddhist Culture */}
              <div>
                <div className="group relative h-[180px] sm:h-[250px] md:h-[270px] lg:h-[470px] overflow-hidden shadow-md  mx-2 ">
                  <img
                    src="/images/buddhist-culture.jpg"
                    alt="Buddhist culture"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                    <h3 className="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text[1.3rem] text-white">Glacial Lakes</h3>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="text-[#313137] bg-[#ffffff] transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="mt-0 text-[#313137] text-[0.8rem] sm:text-[0.9rem] md:text-[0.9rem] p-2">
                        Garhwal is home to some of the most stunning glacial lakes in the Indian Himalayas. During your trekking tour in Garhwal, you might see emerald-green lakes like Roopkund, Satopanth, and Hemkund. These high-altitude lakes not only mirror snow-covered peaks but are also connected to local myths and spiritual beliefs. Trekking to these lakes provides moments of pure solitude and wonder. Many of the top trekking spots in Garhwal are centered around these water sources.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 3 - Wildlife */}

              <div>
                <div className="group relative h-[180px] sm:h-[250px] md:h-[270px] lg:h-[470px] overflow-hidden shadow-md  mx-2 ">
                  <img
                    src="https://images.unsplash.com/photo-1534187886935-1e1236e856c3"
                    alt="Wildlife"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                    <h3 className="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text[1.3rem] font-bold text-white">High Mountain Passes and Adventure Trails </h3>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="text-[#313137] bg-[#ffffff] transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="mt-0 text-[#313137] text-[0.8rem] sm:text-[0.9rem] md:text-[0.9rem] p-2">
                        Garhwal offers challenging mountain passes such as Kuari Pass (3,650 m), Rupin Pass (4,650 m), and Auden’s Col (5,490 m). These high-altitude passes connect remote valleys.The treks leading to these passes include steep climbs, rough ground, and sometimes snow-covered areas, even during the summer season.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Column 4 - Wildlife */}
              <div>
                <div className="group relative h-[180px] sm:h-[250px] md:h-[270px] lg:h-[470px] overflow-hidden shadow-md  mx-2 ">
                  <img
                    src="https://images.unsplash.com/photo-1534187886935-1e1236e856c3"
                    alt="Wildlife"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                    <h4 className="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text[1.3rem] text-white">Sacred Trails</h4>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="text-[#313137] bg-[#ffffff] transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="mt-0 text-[#313137] text-[0.8rem] sm:text-[0.9rem] md:text-[0.9rem] p-2">
                        Garhwal is deeply spiritual, serving as the source of the Ganga at Gomukh and the Yamuna at Yamunotri. Many trekking trails in Garhwal connect with pilgrimage routes, letting trekkers enjoy both adventure and spirituality. The trails often pass ancient temples like Tungnath on the way to Chandrashila Summit, Madhyamaheshwar, and Rudranath. This sacred aspect gives Garhwal treks a unique cultural and spiritual meaning.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Column 5*/}
              <div>
                <div className="group relative h-[180px] sm:h-[250px] md:h-[270px] lg:h-[470px] overflow-hidden shadow-md  mx-2 ">
                  <img
                    src="https://images.unsplash.com/photo-1534187886935-1e1236e856c3"
                    alt="Wildlife"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                    <h4 className="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text[1.3rem] text-white">Flora-Filled Valleys & Blooming Meadows </h4>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="text-[#313137] bg-[#ffffff] transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="mt-0 text-[#313137] text-[0.8rem] sm:text-[0.9rem] md:text-[0.9rem] p-2">
                        Garhwal’s alpine valleys come alive during spring and summer. Popular treks in Garhwal, such as Dayara Bugyal (3,408 m), Bedni Bugyal (3,354 m), and the Valley of Flowers (3,658 m), are famous for their wildflower blooms and expansive meadows. These bugyals, or high-altitude grasslands, transform into vibrant carpets of herbs, orchids, and medicinal plants. The stunning scenery, fresh mountain air, and colorful flora make trekking here a truly refreshing experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>


          {/* Best Time Section (NO hover - always visible) */}
          <div className="mb-4 md:mb-6 lg:mb-12  xl:mb-14">
            <h3 className="text-xl sm:text-2xl  xl:text-4xl font-bold text-[#172541]  mb-0 md:mb-1 lg:mb-2 xl:mb-3">Best Season for Trekking in Garhwal </h3>
            <p className="mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">The ideal time to trek in the Garhwal Himalayas is from mid-May to mid-October, avoiding the monsoon months. Heavy rains can cause landslides, slippery trails, and other hazards, making trekking dangerous during that period.</p>
          </div>

          <div className='mb-4 md:mb-6 lg:mb-10  xl:mb-12'>
            <h2 className="text-xl sm:text-2xl  xl:text-4xl font-bold text-[##172541]  mb-0 md:mb-1 lg:mb-2 xl:mb-3">Some pre-requisites for trekking in Garhwal</h2>
            <p className="mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]"> While trekking in Garhwal sounds exciting, it’s not as easy as it appears. It demands both physical and mental fitness. You’ll need strong endurance to walk for long hours on hilly terrain, ascend steep slopes, navigate rocky paths, and cross narrow gorges. A medical check-up is essential before attempting a trek—those with asthma, breathing issues, or cardiac conditions should refrain from trekking in this region. </p>



          </div>
          {/* <div className='mb-4 md:mb-6 lg:mb-10  xl:mb-12'>
            <h2 className="text-xl sm:text-2xl  xl:text-4xl font-bold text-[#172541]  mb-0 md:mb-1 lg:mb-2 xl:mb-3">Why Trek with Us? </h2>
            <p className="mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]  mb-1 md:mb-2"> While trekking in Garhwal We offer exclusive Garhwal trekking packages and leave no stone unturned in turning your dream into reality. With over 30 years of experience organizing Himalayan treks, we ensure world-class service with attention to detail. Our packages include:</p>
            <p className="mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]  mb-1 md:mb-2" >Trekking and camping gear: tents, sleeping bags, mattresses, oxygen cylinders, first aid kits </p>
            <ul>
              <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-0 lg:mb-1'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Experienced guides and porters.</li>
              <li className='text-[#313137]  text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]mb-0 lg:mb-1 '> <span className="text-[#f47a2a] text-xl mr-2">•</span>Ponies and horses for carrying equipment to high-altitude camps.</li>
              <li className='text-[#313137]  text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-0 lg:mb-1'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Sightseeing and temple tours with local guides. </li>
              <li className='text-[#313137]  text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-0 lg:mb-1'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Comfortable accommodations: hotels, village homestays, parachute camps.</li>
              <li className='text-[#313137]  text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-0 lg:mb-1'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Cooks, kitchen staff, and necessary cooking equipment Assistance with all trekking permits. </li>
            </ul>
                <p className="mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]  mb-1 md:mb-2" >If you're captivated by the idea of breathtaking natural beauty and endless adventure, the unexplored Himalayan trails and pristine campsites of Garhwal are waiting for you. So, lace up your trekking boots and embark on the most fulfilling journey of your life—with us by your side.</p>

          </div> */}



        </div>
        <div>



        </div>
      </section>

      <CtaButton />
      <Faq faqs={Garhwaltrekfaq} />
    </>
  );
};

export default GarhwalTrek;





