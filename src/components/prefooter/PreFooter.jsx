"use client"
import React from 'react';
import { FaMountain, FaBiking, FaLink, FaCertificate, FaMapMarkerAlt, FaCalendarAlt, FaHeart } from 'react-icons/fa';
import Link from 'next/link';


const trekDestinations = [
  { id: 1, title: "Uttarakhand Treks", img: "/images/new-background.jpg", slug: "trekking-in-garhwal" },
  { id: 2, title: "Ladakh Treks", img: "/images/banner3.jpg", slug: "trekking-in-ladakh" },
  { id: 3, title: "Sikkim Treks", img: "/images/banner10.jpg", slug: "trekking-in-sikkim" },
  { id: 4, title: " Jammu & Kashmir Treks", img: "/images/kashmir-banner.jpg", slug: "trekking-in-jammu-kashmir" },
  { id: 5, title: "Himachal Treks", img: "/images/himachal-banner.jpg", slug: "trekking-in-himachal" },
  { id: 6, title: "Kumaon Treks", img: "/images/kumaon.webp", slug: "trekking-in-kumaon" },
];

const adventureTours = [
  { id: 1, title: "Mountain Bike Tours", img: "/images/new-background.jpg", slug: "mountain-bike-tours" },
  { id: 2, title: "Motor Bike Tours", img: "/images/banner3.jpg", slug: "motor-bike-tours" },
  { id: 3, title: "Peak Climbing Tours", img: "/images/banner10.jpg", slug: "peak-climbing" },
  { id: 4, title: "Jeep Safari Tours", img: "/images/kashmir-banner.jpg", slug: "jeep-safari-tours" },
  { id: 5, title: "Cycling Tours", img: "/images/kashmir-banner.jpg", slug: "cycling-tours" },
]


const PreFooter = () => {
  return (
    <section className='bg-gradient-to-t from-white via-white to-[#ffeede]'>
    <div className="max-w-4xl md:max-w-6xl xl:max-w-7xl mx-auto py-8 px-4 md:px-8">
      {/* Categories Section with Box Shadow */}
      <div className=" p-10 rounded-xl shadow-lg bg-white border border-gray-100">
<h2 className="text-xl sm:text-2xl xl:text-4xl font-semibold text-[#172541] mt-0 md:mt-1 mb-2 md:mb-4 xl:mb-4 border-b-2 border-orange-400 p-3">
  Explore Categories
</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 mt-0 md:mt-6">
          {/* Trek by Region Column */}
          <div className="space-y-4">
            <div className="flex items-center text-[#f47a2a]">
              <FaMapMarkerAlt className="mr-1 text-lg" />
              <h4 className="font-semibold text-gray-700">Treks by Region</h4>
            </div>
            <ul className="space-y-3 pl-2">
              {trekDestinations.map((destination,index) => (
                <li key={index}>
                  <Link href={destination.slug} className="text-[#313137] hover:text-[#f47a2a] text-sm transition-colors flex items-center">
                    <span className="w-1 h-1 bg-orange-400 rounded-full mr-2"></span>
                    {destination.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          
      
          {/* Trek by Interest Column */}
          <div className="space-y-4">
            <div className="flex items-center text-[#f47a2a]">
              <FaHeart className="mr-1 text-lg" />
              <h4 className="font-semibold text-gray-700">Treks by Interest</h4>
            </div>
            <ul className="space-y-3 pl-2">
              {['Family', 'Spiritual', 'Wildlife', 'Bird-Watching'].map((interest) => (
                <li key={interest}>
                  <Link href = {`/${interest.toLowerCase().replace(' ', '-')}`}  className="text-[#313137] hover:text-[#f47a2a] text-sm transition-colors flex items-center">
                    <span className="w-1 h-1 bg-orange-400 rounded-full mr-2"></span>
                    {interest}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Peak Climbing & Biking Column */}
          <div className="space-y-4">
            <div className="flex items-center text-[#f47a2a]">
              <div className="flex items-center mr-1">
                <FaBiking className="text-lg ml-1" />
              </div>
              <h4 className="font-semibold text-gray-700">Adventure Tours</h4>
            </div>
            <ul className="space-y-3 pl-2">
              {adventureTours.map((adventure,index) => (
                <li key={index}>
                  <Link href={adventure.slug.toLowerCase().replace(/\s+/g, '-')} className="text-[#313137] hover:text-[#f47a2a] text-sm transition-colors flex items-center">
                    <span className="w-1 h-1 bg-orange-400 rounded-full mr-2"></span>
                    {adventure.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trek by Season*/}
          <div className="space-y-4">
            <div className="flex items-center text-[#f47a2a]">
              <FaCalendarAlt className="mr-1 text-lg" />
              <h4 className="font-semibold text-gray-700">Treks by Season</h4>
            </div>
            <ul className="space-y-3">
              {['spring','summer','monsoon', 'autumn', 'winter'].map((season) => (
                <li key={season}>
                  <Link href={season} className="text-[#313137] hover:text-[#f47a2a] text-sm transition-colors flex items-center">
                    <span className="w-1 h-1 bg-orange-400 rounded-full mr-2"></span>
                    {season}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Trek by Month Column */}
          <div className="space-y-4">
            <div className="flex items-center text-[#f47a2a]">
              <FaCalendarAlt className="mr-1 text-lg" />
              <h4 className="font-semibold text-gray-700">Treks by Month</h4>
            </div>
            <ul className="space-y-3 pl-2 grid grid-cols-2">
              {['January','February','March', 'April', 'May', 'June','July'].map((month) => (
                <li key={month}>
                  <Link href={month} className="text-[#313137] hover:text-[#f47a2a] text-sm transition-colors flex items-center">
                    <span className="w-1 h-1 bg-orange-400 rounded-full mr-2"></span>
                    {month}
                  </Link>
                </li>
              ))}
              {['January','August', 'September', 'October','November','December'].map((month) => (
                <li key={month}>
                  <Link href={month} className="text-[#313137] hover:text-[#f47a2a] text-sm transition-colors flex items-center">
                    <span className="w-1 h-1 bg-orange-400 rounded-full mr-2"></span>
                    {month}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default PreFooter;