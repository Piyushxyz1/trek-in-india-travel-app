"use client"
import React, { useState, useRef, useEffect } from "react";
import MostPopularTreks from "../packagesgallery/MostPopularTreks";
import LadakhRegions from "../packagesgallery/LadakhRegions";
import SikkimRegions from "../packagesgallery/SikkimRegions";
import KumaonRegions from "../packagesgallery/KumaonRegions";
import KashmirRegions from "../packagesgallery/KashmirRegions";
import HimachalRegions from "../packagesgallery/HimachalRegions";
import GarhwalRegions from "../packagesgallery/GarhwalRegions";

const TrekPackages = () => {
  const tabs = [
    { id: "Most Popular Treks", label: "Most Popular Treks"},
    { id: "Garhwal Treks", label: "Garhwal Treks"},
    { id: "Himachal Treks", label: "Himachal Treks"},
    { id: "Ladakh Treks", label: "Ladakh Treks"},
    { id: "Sikkim Treks", label: "Sikkim Treks"},
    { id: "Kumaon Treks", label: "Kumaon Treks" },
    { id: "Kashmir Treks", label: "Kashmir Treks"},
  ];

  const [activeTab, setActiveTab] = useState("Most Popular Treks");
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
    <section className="w-full  max-w-4xl md:max-w-6xl  xl:max-w-7xl px-4 sm:px-6 md:px-8   mx-auto py-0 sm:py-2 lg:py-4 xl:py-10   bg-white text-center">
     <span className="text-[#f47a2a] font-semibold text-[0.8rem] md:[text-0.9rem] xl:text-[1rem]">Explore</span>
      <h2 className="text-xl sm:text-2xl  xl:text-4xl font-semibold text-[#172541] mt-0 mb-0 md:mb-2 lg:mb-3">
        Explore Amazing Trekking Packages In India
      </h2>
      <p className="text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] text-[#313137] mb-3 md:mb-4 lg:mb-4 xl:mb-6 max-w-3xl mx-auto">
        Discover our selection of more than 200 trekking tours and other adventure
        sports activities...
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
              className={`flex-shrink-0 px-4 py-2 md:px-6 md:py-3 text-[0.8rem] sm:text-[0.9rem] md:text-[0.9rem] xl:text-[1rem] rounded-full font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === tab.id
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
        {activeTab === "Most Popular Treks" && <MostPopularTreks/>}
        {activeTab === "Garhwal Treks" && <GarhwalRegions/>}
        {activeTab === "Himachal Treks" && <HimachalRegions/>}
        {activeTab === "Ladakh Treks" && <LadakhRegions />}
        {activeTab === "Sikkim Treks" && <SikkimRegions />}
        {activeTab === "Kumaon Treks" && <KumaonRegions />}
        {activeTab === "Kashmir Treks" && <KashmirRegions/>}
      </div>
    </section>
  );
};

export default TrekPackages;