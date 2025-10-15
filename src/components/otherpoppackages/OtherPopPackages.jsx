"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';
import "./otherpoppackages.css"

const NextArrow = ({ onClick }) => (
  <div 
    className="text-white text-xs sm:text-sm md:text-base lg:text-lg
               opp-arrow opp-next absolute
               top-[-30%] sm:top-[-20%] md:top-[-20%] lg:top-[-20%]
               right-[10px]
               bg-[#f47a2a] rounded-full p-2
               cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.2)]
               transition-transform duration-300 ease-in-out
               h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] md:h-[45px] md:w-[45px] lg:h-[42px] lg:w-[42px] xl:h-[50px] xl:w-[50px] 
               flex justify-center items-center gap-2
               border border-[#f47a2a]
               hover:scale-110 hover:bg-white hover:text-[#f47a2a]
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
               top-[-30%] sm:top-[-20%] md:top-[-20%] lg:top-[-20%]
               right-[48px] sm:right-[65px] md:right-[70px] lg:right-[75px]
               bg-[#f47a2a] rounded-full p-2
               cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.2)]
               transition-transform duration-300 ease-in-out
               h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] md:h-[45px] md:w-[45px] lg:h-[42px] lg:w-[42px] xl:h-[50px] xl:w-[50px] 
               flex justify-center items-center gap-2
               border border-[#f47a2a]
               hover:scale-110 hover:bg-white hover:text-[#f47a2a]
               z-[2]"
    onClick={onClick}
  >
    <FaChevronLeft />
  </div>
);

const OtherPopPackages = () => {
  const [slider, setSlider] = useState(null);

  const poppackages = [
    { id: 1,name: "Trekking", img: "/images/trekking.webp",slug:"trekking" },
    { id: 2,name: "Peak Climbing", img: "/images/peak-climbing.webp",slug:"peak-climbing" },
    { id: 3,name: "Mountain Biking", img: "/images/mountain-biking.webp",slug:"mountain-bike-tours" },
    { id: 4,name: "Motor Biking", img: "/images/motor-bike-tours.webp",slug:"motor-bike-tours" },
    { id: 5,name: "Jeep Safari", img: "/images/jeep-safari-tours-in-india.webp",slug:"jeep-safari-tours" },
    { id: 6,name: "Bird Watching Treks", img: "/images/bird-watching-in-india.webp" ,slug:"bird-watching"},
    { id: 7,name: "River Rafting", img: "/images/river-rafting-in-india.webp",slug:"rafting-in-india" },
    { id: 9,name: "Wildlife Treks", img: "/images/wildife-trek.jpeg" ,slug:"wildlife"},
    { id: 10,name: "Skiing", img: "/images/skiing.webp" ,slug:"skiing-in-india"},
    { id: 11,name: "Fishing", img: "/images/fishing.jpeg",slug:"angling-in-india" },
    { id: 12,name: "Tribal Treks", img: "/images/tribal.jpg",slug:"tribal-treks-india" }
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
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
   <section className="other-pop-packages-section z-0 bg-gradient-to-t from-white via-white to-[#ffeede] py-6 sm:py-8 md:py-10 lg:py-[2.5vw] mb-0 md:mb-4 lg:mb-6 xl:mb-10">
  <div
    className="other-popular-packages w-full px-4 sm:px-6 md:px-8  max-w-4xl md:max-w-6xl  xl:max-w-7xl  mx-auto z-[2] relative"
  >
<span className="text-[#f47a2a] font-semibold text-[0.8rem] md:[text-0.9rem] xl:text-[1rem]">
  Trending Activities
</span>
    <h2 className="text-xl sm:text-2xl md:3xl xl:text-4xl font-bold text-[#172541]  mb-6">Enjoy Thrilling Activities</h2>
    <Slider {...settings} ref={slider => setSlider(slider)}>
      {poppackages.map((poppackage) => (
        <div key={poppackage.id}>
           <Link href={`/${poppackage.slug}`}>
          <div className="pop-packages mr-3 sm:mr-4 md:mr-5 cursor-pointer overflow-hidden rounded-md relative h-[180px] sm:h-[250px] md:h-[270px] lg:h-[320px] xl:h-[350px]">
            <div className="overlay-text-pop-packages absolute left-0 w-full h-full bg-gradient-to-b from-transparent to-black/40 z-0"></div>
            <img 
              src={poppackage.img} 
              alt={poppackage.name} 
              className="w-full h-full object-cover shadow-md transition-transform duration-300 ease-in-out hover:scale-[1.02]"
            />
            <div className="pop-packages-content absolute bottom-0 right-0 p-2 sm:p-3 md:p-4 cursor-pointer z-[3]">
              <h3 className="text-white text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] font-semibold m-0">{poppackage.name}</h3>
            </div>
          </div>
        </Link>
        </div>
      ))}
    </Slider>
  </div>
</section>
  );
};

export default OtherPopPackages;


