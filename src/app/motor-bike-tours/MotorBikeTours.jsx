"use client"
import HimachalPeakClimbing from "@/components/peakclimbingpackages/HimachalPeakClimbing";
import MostPopularPeakClimbing from "@/components/peakclimbingpackages/MostPopularPeakClimbing";
import SikkimPeakClimbing from "@/components/peakclimbingpackages/SikkimPeakClimbing";
import UttrakhandPeakClimbing from "@/components/peakclimbingpackages/UttrakhandPeakClimbing";
import React, { useState, useRef, useEffect } from "react";
import Banner from "@/components/banners/Banner";
import Breadcrumb from "@/components/breadcrumbs/Breadcrumb";
import CtaButton from "@/components/ctabutton/CtaButton";
import MostPopularMotorBikeToursPackages from "@/components/motorbiketourspackages/MostPopularMotorBikeToursPackages";
import UttarakhandMotorBikeTourPackages from "@/components/motorbiketourspackages/UttarakhandMotorBikeTourPackages";
import SikkimMotorBikeToursPackages from "@/components/motorbiketourspackages/SikkimMotorBikeToursPackages";
import HimachalMotorBikeToursPackages from "@/components/motorbiketourspackages/HimachalMotorBikeToursPackages";


const MotorBikeTours = () => {



  const breadcrumbPath = [
    { label: 'Motor Bike Tours' },

  ];
  const tabs = [
    { id: "Most Popular Tours", label: "Most Popular Tours" },
    { id: "Garhwal Tours", label: "Garhwal Tours" },
    { id: "Himachal Tours", label: "Himachal Tours" },
    { id: "Sikkim Tours", label: "Sikkim Tours" },
    { id: "Uttarakhand Tours", label: "Uttarakhand Tours" },

  ];

  const [activeTab, setActiveTab] = useState("Most Popular Tours");
  const [canScrollRight, setCanScrollRight] = useState(true);
  const tabsContainerRef = useRef(null);

  useEffect(() => {
    const checkScroll = () => {
      if (tabsContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = tabsContainerRef.current;
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
      }
    };

    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const handleScroll = () => {
    if (tabsContainerRef.current) {
      tabsContainerRef.current.scrollBy({ left: 100, behavior: 'smooth' });

      // Re-check scroll position after animation
      setTimeout(() => {
        const { scrollLeft, scrollWidth, clientWidth } = tabsContainerRef.current;
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
      }, 300);
    }
  };

  return (
    <>
      <Banner title="Motor Bike Tours" image="/images/peak-climbing-banner.jpg" />
      <Breadcrumb path={breadcrumbPath} />
      <section className="w-full  max-w-4xl md:max-w-6xl  xl:max-w-7xl px-4 sm:px-6 md:px-8   mx-auto py-0 sm:py-2 lg:py-4 xl:py-10   bg-white text-center">
        <span className="text-[#f47a2a] font-semibold text-[0.8rem] md:[text-0.9rem] xl:text-[1rem]">Explore</span>
        <h1 className="text-xl sm:text-2xl  xl:text-4xl font-semibold text-[#172541] mt-0 mb-0 md:mb-2 lg:mb-3">
          Explore Amazing Motor  Bike Tour Packages In India
        </h1>
        <p className="text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] text-[#313137] mb-3 md:mb-4 lg:mb-4 xl:mb-6 max-w-3xl mx-auto">
          Discover our selection of Motor Bike Torus and other adventure activities.
          Challenge yourself with breathtaking summits and unforgettable alpine experiences.
        </p>

        {/* Tabs Section */}
        <div className="mb-4 relative">
          {/* Tabs Container */}
          <div
            ref={tabsContainerRef}
            id="tabs-container"
            className="
            flex 
            gap-2 md:gap-3 
            justify-start md:justify-center 
            overflow-x-auto 
            scrollbar-hide 
            md:flex-wrap 
            w-full 
            px-8 md:px-2
            scroll-smooth
          "
            onScroll={() => {
              if (tabsContainerRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = tabsContainerRef.current;
                setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
              }
            }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`flex-shrink-0 px-4 py-2 md:px-6 md:py-3 text-[0.8rem] sm:text-[0.9rem] md:text-[0.9rem] xl:text-[1rem] rounded-full font-semibold transition-all duration-300 cursor-pointer ${activeTab === tab.id
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-900 hover:bg-orange-500 hover:text-white"
                  }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Right Arrow (visible on mobile) */}
          <button
            className={`
            md:hidden absolute right-0 bottom-0 translate-y-[110%] transform mr-1
            z-10 
            rounded-full 
            w-7 h-7 
            flex items-center justify-center 
            shadow 
            transition-colors duration-200
            ${canScrollRight ? 'bg-[#f47a2a]' : 'bg-gray-300 cursor-default'}
          `}
            onClick={handleScroll}
            disabled={!canScrollRight}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#ffffff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Content Section */}
        <div className="px-4 py-6 text-left">
          {activeTab === "Most Popular Tours" && <MostPopularMotorBikeToursPackages />}
          {activeTab === "Garhwal Tours" && <UttarakhandMotorBikeTourPackages/>}
          {activeTab === "Sikkim Tours" && <SikkimMotorBikeToursPackages />}
          {activeTab === "Himachal Tours" && <HimachalMotorBikeToursPackages />}
          {activeTab === "Uttarakhand Tours" && <UttarakhandMotorBikeTourPackages/>}

        </div>
      </section>

      <section className="bg-[#ffffff]">
        <div className="max-w-4xl md:max-w-6xl xl:max-w-7xl mx-auto px-4 md:px-8 py-0 sm:py-2 md:py-8 xl:py-10">

          {/* --- INTRO TEXT --- */}
          <div className="mb-10">
            <h2 className="text-xl  md:text-2xl xl:text-3xl font-semibold text-[#172541] mt-2 mb-4">
              Motor biking  in the Indian Himalayas – A Growing Adventure Sport!
            </h2>
            <div className="relative mb-8">
              <p className=" text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2">
                One of the most exquisite adventures, peak climbing is all about conquering sharp peaks and braving the challenges posed by the rigorous and rough terrains of mountainous regions. Gradually becoming a favorite sport among adventure aficionados, peak climbing demands extreme courage, physical endurance, and mental strength to reach the summit. Offering a stunning array of high mountain peaks, mesmerizing scenic beauty, and deep wilderness, the Indian Himalayas are an ideal choice for those seeking an exciting and thrilling journey—witnessing breathtaking views and overcoming the challenges of rough terrain.
              </p>

            </div>

            {/* --- INLINE FEATURES --- */}
            <div className="">
              <h2 className="text-xl  md:text-2xl xl:text-3xl font-semibold text-[#172541] mt-2 mb-4">
                Best Mountaineering & Peak Climbing Expedition Places in India
              </h2>
              {/* Feature 1 */}
              <div className="bg-white">
                <p
                  className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]"
                >
                  The regions of Sikkim, Himachal Pradesh, Jammu & Kashmir, and Uttarakhand are among the best destinations in India for mountain climbing expeditions. These regions present unmatched challenges—walking over glacial beds, crossing rocky moraines, climbing steep rock faces, and ascending near-vertical slopes. A peak climbing adventure here also provides opportunities to witness the spellbinding beauty of verdant oak and pine forests, high-altitude alpine meadows, rhododendron bushes, bubbling streams, and enchanting glacial lakes. Some of the toughest peaks to climb in these areas include Mount Shivling, Kedar Dome, the Bhagirathi group of peaks, Mount Kamet, Mount Satopanth, and Mount Trishul.
                </p>
              </div>


            </div>
            <div className="">
              <h2 className="text-xl  md:text-2xl xl:text-3xl font-semibold text-[#172541] mt-2 mb-4">
                Best Time for Peak Expeditions in India
              </h2>
              {/* Feature 1 */}
              <div className="bg-white">
                <p
                  className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]"
                >
                  The ideal time for peak climbing in India is from mid-June to September or mid-October. Although these months are generally favorable, it is still recommended to check the weather and snow conditions before embarking on any expedition.
                </p>
              </div>
            </div>

          </div>

          {/* --- DESTINATIONS SECTION --- */}
          <div className="mb-10">
            <h2 className="text-xl  md:text-2xl xl:text-3xl font-semibold text-[#172541] mt-2 mb-4">
              Why Embark on a Peak Climbing Expedition with Us?
            </h2>

            <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">We offer exclusive deals and packages for peak climbing in the Himalayas. With our carefully curated itineraries, we ensure ample time for acclimatization during the expedition. For beginners, we provide thorough training and guidance from expert climbers before the journey begins. Committed to making your dream of peak climbing a reality, we provide the best services, including but not limited to: </p>
            <ul>
              <li className=' text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Experienced and knowledgeable mountaineering guides and climbing experts.</li>
              <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Arrangements for necessary trekking/mountaineering permits.</li>
              <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Trekking and mountaineering gear, including fixed ropes, tents, sleeping bags, mattresses, oxygen cylinders, and first-aid kits. </li>
              <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Accommodation arrangements, including hotels, village homestays, and camps.</li>
              <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Sightseeing with experienced local guides.</li>
              <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Kitchen staff, cooks, helpers, and cooking equipment.</li>
            </ul>
             <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">Peak climbing excursions in India are ready to offer you a new and insightful perspective on life. Are you ready to embark on this enthralling adventure with us? </p>

          </div>
        </div>
      </section>

      <CtaButton/>




    </>
  );
};

export default MotorBikeTours;