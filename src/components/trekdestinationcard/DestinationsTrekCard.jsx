// TrekCard.js
"use client";
import React from "react";
import Link from "next/link";
import { FaClock, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const DestinationsTrekCard = ({ trek, renderStars }) => {
  

  return (
    <div
      className={`  flex flex-col overflow-hidden transition-transform duration-300 ease-in-out relative rounded-lg `}
    >
      {/* Image Section */}
      <div className="relative h-[150px] sm:h-[220px] md:h-[230px] xl:h-[270px] overflow-hidden rounded-lg">
        <Link href={`/${trek.slug}`}>
          <img
            src={trek.image}
            alt={trek.title}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </Link>

        {/* Difficulty Label */}
        {trek.difficulty && (
          <span className="absolute top-1 right-1 text-[0.5rem] sm:text-[0.6rem] md:text-[0.7rem] xl:text-[0.8rem] font-semibold uppercase bg-white border-2 border-[#f47a2a] px-2 py-1 rounded-full">
            {trek.difficulty}
          </span>
        )}
      </div>

      {/* Info Icons (Duration & Region) */}
      <div className="absolute top-0 left-0 bg-white px-1 md:px-2 xl:px-3   py-1 md:py-2 xl:py-3 rounded-br-md rounded-tb-xl flex items-center text-xs font-semibold">
        <p className="flex items-center gap-1 text-black text-[0.7rem]  xl:text-[0.8rem] ">
          <FaClock className="text-yellow-500 border border-yellow-500 rounded-full p-[2px] " />
          {trek.duration}
        </p>
        <span className="mx-2 text-black">|</span>
        <p className="flex items-center gap-1 text-black text-[0.7rem] xl:text-[0.8rem]">
          <FaMapMarkerAlt className="text-yellow-500 border border-yellow-500 rounded-full p-[2px] " />
          {trek.region}
        </p>
      </div>
      {/* Card Content */}
      <div className="flex justify-between items-center text-[0.9rem] text-[#313137]">
        <Link href={`/${trek.slug}`}>
          <h3 className="text-[0.8rem] sm:text-[1rem] xl:text-[1.2rem] 2xl:text-[1.3rem] text-[#000] font-semibold mt-2 mb-1">
            {trek.title}
          </h3>
        </Link>
        <div className="flex items-center text-sm">
          ({trek.rating}){renderStars(trek.rating)}
        </div>
      </div>

      {/* Description */}
      <p className=" text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem]  text-[#313137] mb-1 text-justify">
        {trek.description}
      </p>

      {/* Price + Rating */}

      <p className="flex items-center gap-1 text-[0.8rem]  sm:text-[0.8rem]  md:text-[0.9rem]">
        Starting from   <span className="text-[#f47a2a] font-bold text-[0.8rem]  sm:text-[0.9rem]  md:text-[1rem]"> INR {trek.price}</span> / Per person
      </p>

      {/* Call & View Details Buttons */}
      <div className="flex justify-center items-center gap-2  mt-4">
        <a
          href="https://wa.me/1234567890?text=Hi%2C%20I%27m%20interested%20in%20your%20travel%20services"
          className="flex items-center justify-center rounded-md p-3 xl:p-3 border border-[#f47a2a] y text-[#f47a2a] hover:bg-[#25D366]/10 transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="h-3 sm:h-2 md:h-3 xl:h-5 " />
        </a>
        <Link
          href={`/${trek.slug}`}
          className="flex items-center justify-center  py-2 md:py-2 xl:py-3   w-full bg-[#f47a2a] text-white rounded-[5px]  text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]  font-medium transition-all duration-300"
        >
          View Details
        </Link>

      </div>


      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: trek.title,
            image: `https://yourdomain.com${trek.image}`,
            description: trek.description,
            brand: {
              "@type": "Brand",
              name: "Your Company Name",
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "INR",
              price: trek.price || "12300",
              availability: "https://schema.org/InStock",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: trek.rating,
              ratingCount: "120",
            },
          }),
        }}
      />
    </div>
  );
};

export default DestinationsTrekCard;
