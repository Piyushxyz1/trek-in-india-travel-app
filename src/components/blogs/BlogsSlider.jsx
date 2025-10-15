"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Blog from "./Blog";
import { BlogsList } from "./blogposts/bloglist";



const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 bg-[#f47a2a] rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all border border-gray-200"
    aria-label="Next"
  >
    <FaChevronRight className="text-white text-lg" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 bg-[#f47a2a] rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all border border-gray-200"
    aria-label="Previous"
  >
    <FaChevronLeft className="text-white text-lg" />
  </button>
);

const BlogSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className=" bg-[#ffffff] py-12 md:py-16">
      <div
        className="container mx-auto  max-w-4xl md:max-w-6xl  xl:max-w-7xl  px-4 md:px-8 "
      >

        <div className="text-center">
          <span className="text-sm text-[#f47a2a] font-bold ">Our Blogs</span>
          <h2 className="text-xl sm:text-2xl  xl:text-4xl font-semibold text-[#172541] mt-2 mb-6 text-center">
            Latest Blog Posts
          </h2>
        </div>

        <div className="relative px-2">
          <Slider {...settings}>
            {BlogsList.map((post, index) => (
              <div className="px-3"> {/* Adjust px value as needed */}
                <Blog key={index} post={post} />
              </div>

            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default BlogSlider;
