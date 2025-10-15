// TrekCard.js
"use client"
import React from 'react';
import Link from 'next/link';
import { FaClock, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const ActivitiesCard = ({ activities, renderStars }) => {

  return (
    <div
      className={`  flex flex-col overflow-hidden transition-transform duration-300 ease-in-out relative rounded-lg `}
    >
      {/* Image Section */}
      <div className="relative h-[270px] overflow-hidden rounded-lg">
        <Link href={`/${activities.slug}`}>
          <img
            src={activities.image}
            alt={activities.title}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </Link>

        {/* Difficulty Label */}
        {activities.difficulty && (
          <span className="absolute top-1 right-1 text-[0.8rem] font-semibold uppercase bg-white border-2 border-[#f47a2a] px-2 py-1 rounded-full">
            {activities.difficulty}
          </span>
        )}
      </div>

      {/* Info Icons (Duration & Region) */}


      {activities.duration && <div className="absolute top-0 left-0 bg-white px-3 py-2 rounded-br-md rounded-tb-xl flex items-center text-xs font-semibold z-10">  <p className="flex items-center gap-1 text-black text-[0.8rem]">
        <FaClock className="text-yellow-500 border border-yellow-500 rounded-full p-[2px] " />{activities.duration}</p>   <p className="flex items-center gap-1 text-black text-[0.8rem]">

          <span className="mx-2 text-black">|</span>
          <FaMapMarkerAlt className="text-yellow-500 border border-yellow-500 rounded-full p-[2px] " />
          {activities.region}
        </p>
      </div>}


      {/* Card Content */}
      <div className="flex justify-between items-center text-[0.9rem] text-[#313137]">
        <Link href={`/${activities.slug}`}>
          <h3 className="text-[1.3rem] text-[#000] font-semibold mt-2 mb-2">
            {activities.title}
          </h3>
        </Link>
        <div className="flex items-center text-sm">
          ({activities.rating}){renderStars(activities.rating)}
        </div>
      </div>

      {/* Description */}
      <p className="text-[0.9rem] text-[#313137] mb-2 text-justify">
        {activities.description}
      </p>

      {/* Price + Rating */}

      <p className="flex items-center gap-1 text-[0.9rem]">
        Starting from   <span className="text-[#f47a2a] font-bold text-[0.9rem] "> INR 12,300</span> / Per person
      </p>

      {/* Call & View Details Buttons */}
      <div className="flex justify-center items-center gap-2  mt-4">
        <a
          href="https://wa.me/1234567890?text=Hi%2C%20I%27m%20interested%20in%20your%20travel%20services"
          className="flex items-center justify-center rounded-md p-3 xl:p-3 border border-[#f47a2a] y text-[#f47a2a] hover:bg-[#f47a2a]/10 transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-[0.8rem] md:text-[1rem] xl:text-[1.1rem] h-2 sm:h-2 md:h-3 xl:h-5 " />
        </a>

        <Link
          href={`/${activities.slug}`}
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
            name: activities.title,
            image: `https://yourdomain.com${activities.image}`,
            description: activities.description,
            brand: {
              "@type": "Brand",
              name: "Your Company Name",
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "INR",
              price: activities.price || "12300",
              availability: "https://schema.org/InStock",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: activities.rating,
              ratingCount: "120",
            },
          }),
        }}
      />
    </div>
  );
};

export default ActivitiesCard;