"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaChevronLeft, FaChevronRight, FaMapMarkedAlt } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const trekDestinations = [
  { id: 1, title: "Uttarakhand Treks", img: "/images/new-background.webp", slug: "trekking-in-garhwal" },
  { id: 2, title: "Ladakh Treks", img: "/images/banner3.webp", slug: "trekking-in-ladakh" },
  { id: 3, title: "Sikkim Treks", img: "/images/banner10.webp", slug: "trekking-in-sikkim" },
  { id: 4, title: " Jammu & Kashmir Treks", img: "/images/kashmir-banner.webp", slug: "trekking-in-jammu-kashmir" },
  { id: 5, title: "Himachal Treks", img: "/images/himachal-banner.jpg", slug: "trekking-in-himachal" },
  { id: 6, title: "Kumaon Treks", img: "/images/kumaon.webp", slug: "trekking-in-kumaon" },
];

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const experiences = ["Spiritual", "Wildlife", "Family", "Bird-watching"];

const Header = () => {
  const router = useRouter();

  const handleDestinationChange = (e) => {
    const selectedTitle = e.target.value;
    const destination = trekDestinations.find(t => t.title === selectedTitle);
    if (destination) {
      router.push(`/${destination.slug}`);
    }
  };

  const handleMonthChange = (e) => {
    const month = e.target.value;
    if (month) {
      router.push(`/${encodeURIComponent(month.toLowerCase())}`);
    }
  };

  const handleExperienceChange = (e) => {
    const experience = e.target.value;
    if (experience) {
      router.push(`/${encodeURIComponent(experience.toLowerCase())}`);
    }
  };

  return (
    <section className="relative w-full">
      {/* Swiper Section */}
      <div className="relative w-full">
        <Swiper
          effect=""
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={1}
          spaceBetween={0}
          slidesPerGroup={1}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[Navigation, Pagination]}
          className="w-full"
        >
          {trekDestinations.map((trek) => (
            <SwiperSlide key={trek.id}>
              <div className="relative w-full h-[250px] sm:h-[300px] md:h-[380px] xl:h-[500px]">
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Background Image with Framer Motion Zoom Effect */}
                  <motion.div 
                    className="absolute inset-0 w-full h-full overflow-hidden"
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.1 }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                  >
                    <img
                      src={trek.img}
                      alt={trek.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                  
                  {/* Text Content */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 text-center z-20">
                    <span className="flex items-center text-sm sm:text-lg mb-1 sm:mb-2">
                      <FaMapMarkedAlt className="mr-1 sm:mr-2" /> Explore The Peaks
                    </span>
                    <h2 className="text-xl sm:text-3xl md:text-4xl xl:text-5xl font-bold mb-2 sm:mb-4">
                      India's Premier Trekking Destinations
                    </h2>
                    <h3 className="text-lg sm:text-2xl md:text-2xl xl:text-3xl font-semibold">
                      {trek.title}
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div className="custom-prev absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 rounded-full p-2 sm:p-3 cursor-pointer hover:bg-opacity-100">
          <FaChevronLeft className="text-[#313137] text-lg sm:text-xl" />
        </div>
        <div className="custom-next absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 rounded-full p-2 sm:p-3 cursor-pointer hover:bg-opacity-100">
          <FaChevronRight className="text-[#313137] text-lg sm:text-xl" />
        </div>
      </div>

      {/* Search Form Section */}
      <div className="bg-white shadow-lg -mt-5 sm:-mt-10 mx-4 sm:mx-auto max-w-6xl rounded-lg relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 p-4 sm:p-6">
          {/* Destination Select */}
          <div className="space-y-1">
            <span className="block text-xs sm:text-sm font-bold text-[#f47a2a]">Select Treks By Region</span>
            <select
              onChange={handleDestinationChange}
              defaultValue=""
              className="w-full p-2 text-sm sm:text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Choose a destination</option>
              {trekDestinations.map((trek) => (
                <option key={trek.id} value={trek.title}>{trek.title}</option>
              ))}
            </select>
          </div>

          {/* Month Select */}
          <div className="space-y-1">
            <span className="block text-xs sm:text-sm font-bold text-[#f47a2a]">Select Treks By Month</span>
            <select
              onChange={handleMonthChange}
              defaultValue=""
              className="w-full p-2 text-sm sm:text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Choose a month</option>
              {months.map(month => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
          </div>

          {/* Experience Select */}
          <div className="space-y-1">
            <span className="block text-xs sm:text-sm font-bold text-[#f47a2a]">Select Treks By Interest</span>
            <select
              onChange={handleExperienceChange}
              defaultValue=""
              className="w-full p-2 text-sm sm:text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Choose What Interests you</option>
              {experiences.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;