"use client"
import React from 'react';

import { FaPhone, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { renderStars } from '../starratings/starratings';

import Link from 'next/link';
 import trekData from '../trekdestinationcard/trekdata';

import DestinationsTrekCard from '../trekdestinationcard/DestinationsTrekCard';



const KashmirRegions = () => {

  const filteredData = trekData.filter((data)=>data.region === "Jammu and Kashmir")

  return (
    <div className='section-package-gallery-lists'>
      <h2>Kashmir Treks</h2>
      <div className="grid-container">
        {filteredData.map((trek, index) => (
        <DestinationsTrekCard key={trek.id} trek={trek} renderStars={renderStars} />
        ))}
      </div>
          <div className="explore-more-section">
        <div className="line"></div>
        <Link href="/trekking-in-jammu-kashmir" className="mx-4 px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all">Explore More</Link>
        <div className="line"></div>
      </div>
      
    </div>
  );
};

export default KashmirRegions;
