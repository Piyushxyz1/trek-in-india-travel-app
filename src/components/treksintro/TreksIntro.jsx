"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa6';

const TreksIntro = () => {
  const trekHighlights = [
    {
      title: "Himalayan Adventures",
      description: "Explore India's stunning trekking routes that soothes your soul",
      image: "/images/trekking-tours-in-india.webp"
    },
    {
      title: "Adventurous Peaks",
      description: "Challenge yourself with  High-altitude Peaks",
      image: "/images/peaks-in-india.webp"
    },
    {
      title: "Motor Bike Tours",
      description: "Enjoy the bike tours on high mountain passes",
      image: "/images/bike-tours-in-india.webp"
    },
    {
      title: "Jeep Safari Tours",
      description: "Experience the thrill of a Jeep Safari through the rugged Himalayan terrain",
      image: "/images/jeep-safari-tours-in-india.webp"
    }
  ];

  return (
 <section className="relative bg-[url('/images/flat-home-intro-map.png')] bg-no-repeat bg-bottom bg-cover">
  <div className=" max-w-4xl md:max-w-6xl  xl:max-w-7xl   mx-auto flex flex-col lg:flex-row items-center justify-between h-full relative py-8 px-4 sm:px-6 lg:px-8">
    
    {/* Text Content */}
    <div className="bg-white shadow-lg rounded-md p-6 md:p-10 z-10 mb-12 lg:mb-0 w-full lg:w-[40%]">
      <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold text-[#172541] mt-2 mb-4">
        <span className="text-[#f47a2a]">India's</span> Diverse Trekking Experiences
      </h2>
      <p className="mt-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
        From 8,000m Himalayan giants to coastal cliffside trails, discover trekking adventures for every skill level...
      </p>
    </div>

    {/* Swiper + Arrows */}
    <div className="w-full lg:w-[60%] relative">
     <Swiper
  modules={[Autoplay, EffectCreative, Navigation]}
  loop={true}
  autoplay={{ delay: 4000 }}
  navigation={{
    nextEl: ".hero-next",
    prevEl: ".hero-prev",
  }}
  effect="creative"
  creativeEffect={{
    prev: { shadow: true, translate: [0, 0, -400] },
    next: { translate: ['100%', 0, 0] },
  }}
  className="w-full h-[200px] sm:h-[250px] md:h-[250px] xl:h-[400px]"
>
  {trekHighlights.map((trek, index) => (
    <SwiperSlide key={index}>
      <div className="relative h-full rounded-md overflow-hidden">
        <img
          src={trek.image}
          alt={trek.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-6 left-6 text-white z-10">
          <h3 className="text-lg sm:text-xl font-bold">{trek.title}</h3>
          <p className="text-xs sm:text-sm mt-2">{trek.description}</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>


      {/* Arrows */}
      <div className="absolute top-0 -translate-y-1/2 right-4 flex gap-4 z-10">
        <div className="hero-prev w-10 h-10 sm:w-12 sm:h-12 bg-[#f47a2a] text-white rounded-full flex items-center justify-center border border-[#f47a2a] hover:bg-white hover:text-[#f47a2a] transition cursor-pointer">
          <FaChevronLeft />
        </div>
        <div className="hero-next w-10 h-10 sm:w-12 sm:h-12 bg-[#f47a2a] text-white rounded-full flex items-center justify-center border border-[#f47a2a] hover:bg-white hover:text-[#f47a2a] transition cursor-pointer">
          <FaChevronRight />
        </div>
      </div>
    </div>
  </div>
</section>



  );
};

export default TreksIntro;