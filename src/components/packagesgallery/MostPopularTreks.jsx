"use client"
import React from 'react';

import "./packagegallery.css";
import { FaPhone, FaStar, FaStarHalfAlt, FaRegStar, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { renderStars } from '../starratings/starratings';

import Link from 'next/link';
 import trekData from '../trekdestinationcard/trekdata';

import DestinationsTrekCard from '../trekdestinationcard/DestinationsTrekCard';


const MostPopularTreks = () => {


  const mostPopTrek = trekData.filter(trek => trek.isPopular === true);
  return (
    <div className='section-package-gallery-lists'>
      <h2>Most Popular Treks</h2>
      <div className="grid-container">
        {mostPopTrek.map(trek => (
         <DestinationsTrekCard key={trek.id} trek={trek} renderStars={renderStars} />
        ))}
      </div>
    </div>
  );
}

export default MostPopularTreks;
