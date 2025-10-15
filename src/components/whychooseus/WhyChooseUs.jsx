"use client";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";

const WhyChooseUs = () => {
  const sliderData = [
    {
      id: 1,
      image: "/images/safety-foucs.jpg",
      title: "30+ Years of Expertise:",
      description:
        "Since 1989, we have organized thousands of successful trekking trips across India. Our experience as a top trekking tour operator allows us to plan safe, rewarding, and well-managed excursions in all conditions.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      title: "Certified and Experienced Trek Leaders:",
      description:
        "Our team includes guides trained at top institutes like NIM and HMI. This makes us one of the best trekking companies in India. Your safety, route knowledge, and comfort are always a top priority.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      title: "Tailor-Made Trekking Experiences:",
      description:
        "We don’t believe in one-size-fits-all treks. Each of our trekking tours is thoughtfully customized to match your interests, fitness level, and goals, ensuring a truly personal and rewarding Himalayan adventure.",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      title: "Stress-Free Trekking Logistics:",
      description:
        "We handle everything from permits to transport, gear, and meals. This lets you focus entirely on the trekking and hiking experience, not the planning.",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      title: "Eco-Conscious and Responsible Travel:",
      description:
        "As a responsible trekking operator, we follow Leave No Trace principles and actively support sustainable tourism. By partnering with local communities, we help protect fragile ecosystems while ensuring our treks benefit the people and places we visit.",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      title: "Client Satisfaction:",
      description:
        "Our customers return time and again for the impeccable service we offer. With strong reviews and referrals, we are recognized as one of the best trekking companies in India.",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      title: "Transparent Service:",
      description:
        "We believe in open communication, no hidden costs, and personalized support before, during, and after your trip. That’s why we are trusted as the best trekking company in India.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setCardsToShow(2); // Show 2 on tablets and up
      } else {
        setCardsToShow(1); // Show 1 on mobile
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev + cardsToShow >= sliderData.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? sliderData.length - cardsToShow : prev - 1
    );
  };

  const visibleSlides = sliderData.slice(
    currentSlide,
    currentSlide + cardsToShow
  );

  return (
    <section className="py-12 bg-[#fefaf7] ">
      <div className="max-w-4xl md:max-w-6xl  xl:max-w-7xl  mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] text-[#f47a2a] font-bold ">
              New to Trekking India?
            </span>
            <h2 className="text-xl sm:text-2xl  xl:text-4xl font-semibold text-[#172541] mt-0 md:mt-1 mb-0 md:mb-2 xl:mb-4">
              Why you should travel with us
            </h2>
            <p className="text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]  text-[#313137] mb-2 md:mb-5 xl:mb-6">
              At Trekking in India, we believe that every journey through the Himalayas should be as meaningful as it is adventurous. With over 30 years of experience organizing mountain expeditions and trekking tours in the Indian Himalayas, Nepal, and Bhutan, we have built a reputation for reliability, safety, and unmatched service. We work with highly trained, certified local guides, many of whom have grown up in these mountains and know every trail, pass, and hidden gem.
            </p>
            <Link href = "/about" className="bg-[#f47a2a] text-white px-4 md:px-4 py-3 rounded-md hover:bg-[#d9641c] transition text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
              Learn More
            </Link>
          </div>

          {/* Right Slider */}
          <div className="relative">
            <div className="flex gap-4 overflow-hidden">
              {visibleSlides.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden w-full  h-200px  sm:h-[520px]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className=" h-[170px] sm:h-[200px] md:h-[220px] lg:h-[230px] xl:h-[200px] w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] text-[#313137] mb-2 md:mb-4">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Arrows */}
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={prevSlide}
            className="text-white text-xs sm:text-sm lg:text-md
               opp-arrow opp-prev absolute
              bottom[10%] sm:bottom[10%] md:bottom[10%] lg:bottom[10%]
               right-[60px] sm:right-[65px] md:right-[70px] lg:right-[75px]
               bg-[#f47a2a] rounded-full p-2
               cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.2)]
               transition-transform duration-300 ease-in-out
               h-[35px] w-[35px] sm:h-[40px] sm:w-[40px] md:h-[42px] md:w-[42px] lg:h-[45px] lg:w-[45px]
               flex justify-center items-center gap-2
               border border-[#f47a2a]
               hover:scale-110 hover:bg-white hover:text-[#f47a2a]
               z-[2]"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextSlide}
             className="text-white text-xs sm:text-sm  lg:text-md
               opp-arrow opp-next absolute
              bottom[10%] sm:bottom[10%] md:bottom[10%] lg:bottom[10%]
               right-[10px]
               bg-[#f47a2a] rounded-full p-2
               cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.2)]
               transition-transform duration-300 ease-in-out
               h-[35px] w-[35px] sm:h-[40px] sm:w-[40px] md:h-[42px] md:w-[42px] lg:h-[45px] lg:w-[45px]
               flex justify-center items-center gap-2
               border border-[#f47a2a]
               hover:scale-110 hover:bg-white hover:text-[#f47a2a]
               z-[2]"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
