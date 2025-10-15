"use client"
import React, { useState, useRef, useEffect } from "react";
import MostPopularTreks from "../packagesgallery/MostPopularTreks";
import LadakhRegions from "../packagesgallery/LadakhRegions";
import SikkimRegions from "../packagesgallery/SikkimRegions";
import KumaonRegions from "../packagesgallery/KumaonRegions";
import KashmirRegions from "../packagesgallery/KashmirRegions";
import HimachalRegions from "../packagesgallery/HimachalRegions";
import GarhwalRegions from "../packagesgallery/GarhwalRegions";
import UttrakhandPeakClimbing from "./UttrakhandPeakClimbing";
import MostPopularPeakClimbing from "./MostPopularPeakClimbing";
import HimachalPeakClimbing from "./HimachalPeakClimbing";
import SikkimPeakClimbing from "./SikkimPeakClimbing";

const PeakClimbingPackages = () => {
  const tabs = [
    { id: "Most Popular", label: "Most Popular" },
    { id: "Uttarakhand Region", label: "Uttarakhand Region" },
    { id: "Himachal Region", label: "Himachal Region" },
    { id: "Sikkim Region", label: "Sikkim Region" },

  ];

  const [activeTab, setActiveTab] = useState("Most Popular");
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
    <section className="w-full  max-w-4xl md:max-w-6xl  xl:max-w-7xl  px-4 py-8 mx-auto md:px-10   bg-white text-center mb-2 md:mb-6">
     <span className="text-[#f47a2a] font-semibold text-[0.8rem] md:[text-0.9rem] xl:text-[1rem]">Explore</span>
      <h2 className="text-xl sm:text-2xl  xl:text-4xl font-semibold text-[#172541] mt-0 mb-0 md:mb-2 lg:mb-3">
        Explore Peak Climbing Packages In India
      </h2>
      <p className="text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] text-[#313137] mb-3 md:mb-4 lg:mb-6 max-w-3xl mx-auto">
        Discover our selection of various peak climbing packages for you..
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
              className={`flex-shrink-0 px-4 py-2 md:px-6 md:py-3 text-[0.8rem] sm:text-[0.9rem] md:text-[0.9rem] xl:text-[1rem] rounded-full font-semibold transition-all duration-300 ${
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
        {activeTab === "Most Popular" && <MostPopularPeakClimbing/>}
        {activeTab === "Uttarakhand Region" && <UttrakhandPeakClimbing />}
        {activeTab === "Himachal Region" && <HimachalPeakClimbing />}
        {activeTab === "Sikkim Region" && <SikkimPeakClimbing/>}

      </div>
    </section>
  );
};

export default PeakClimbingPackages;