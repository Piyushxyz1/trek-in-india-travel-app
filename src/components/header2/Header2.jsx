import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./header.css"; // Add custom styles;
import { motion } from "framer-motion";

const bannerSlides = [
  {
    img: "/images/climber.webp",
    text: "Explore the Wilderness of Jim Corbett National Park",
  },
  {
    img: "/images/climber-2.webp",
    text: "Experience Nature Like Never Before",
  },
  {
    img: "/images/climber-3.jpeg",
    text: "Your Gateway to Adventure and Serenity",
  },
];

const Header = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
  };

  return (
    <div className="banner-slider">
      <Slider {...settings}>
        {bannerSlides.map((slide, index) => (
          <div key={index} className="banner-slide">
            <img src={slide.img} alt={`Slide ${index}`} className="banner-image" />
            <div className="banner-text">
              <motion.h2
                 initial={{ x: -100 }} // Start 100 pixels to the right
                 animate={{ x: 0 }} // Move to the original position
                 transition={{ duration: 1}} // Animation duration
              >{slide.text}</motion.h2>
              <button className="banner-section-button"> Read More</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Header;
