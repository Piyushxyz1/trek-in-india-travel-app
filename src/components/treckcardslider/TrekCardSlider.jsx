"use client"
import React from 'react';
import Link from 'next/link';
import { FaPhone, FaClock, FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { renderStars } from '../starratings/starratings';
import DestinationsTrekCard from '../trekdestinationcard/DestinationsTrekCard';
// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-[40%] -translate-y-1/2 z-10 bg-orange-500 text-white rounded-full w-8 h-8 md:w-12 md:h-12 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-110"
    style={{ right: '-0.75rem', md: { right: '-1.5rem' } }}
    onClick={onClick}
  >
    <FaChevronRight className="text-sm md:text-lg" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-[40%] -translate-y-1/2 z-10 bg-orange-500 text-white rounded-full w-8 h-8 md:w-12 md:h-12 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-110"
    style={{ left: '-0.75rem', md: { left: '-1.5rem' } }}
    onClick={onClick}
  >
    <FaChevronLeft className="text-sm md:text-lg" />
  </div>
);

const TrekCardSlider = ({ TrekData }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className="py-10">
      <div className='max-w-4xl md:max-w-6xl  xl:max-w-7xl  mx-auto px-4 md:px-8'>
      <h2 className='text-xl sm:text-2xl  xl:text-4xl font-semibold text-[#172541] mt-0 md:mt-1 mb-0 md:mb-5 xl:mb-6'>Similiar Treks</h2>
      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {TrekData.map(trek => (
            <div key={trek.id} className="px-4 md:px-2 lg:px-3">
              <DestinationsTrekCard trek={trek} renderStars={renderStars} />
      </div>
          ))}
        </Slider>
      </div>
     </div>
    </section>
  );
};

export default TrekCardSlider;