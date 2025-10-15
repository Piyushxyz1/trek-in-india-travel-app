"use client"
import React from 'react';

import { FaPhone, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { renderStars } from '../starratings/starratings';
import trekData from '../trekdestinationcard/trekdata';
import "./packagegallery.css";
import Link from 'next/link';
import DestinationsTrekCard from '../trekdestinationcard/DestinationsTrekCard';

const GarhwalRegions = () => {

  const filteredData = trekData.filter((data)=>data.region.includes("Garhwal"))
  return (
    <div className="section-package-gallery-lists">
      <h2>Garhwal Treks</h2>
      <div className="grid-container">
      {filteredData.slice(0, 6).map(trek => (
  <DestinationsTrekCard key={trek.id} trek={trek} renderStars={renderStars} />
))}
      </div>
          <div className="explore-more-section">
        <div className="line"></div>
        <Link href="/trekking-in-garhwal" className="mx-4 px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all">Explore More</Link>
        <div className="line"></div>
      </div>
      
    </div>
  );
};

export default GarhwalRegions;
