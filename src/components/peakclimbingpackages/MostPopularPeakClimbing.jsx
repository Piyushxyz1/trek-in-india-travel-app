"use client"
import React from 'react';

import "../packagesgallery/packagegallery.css";
import { FaPhone, FaStar, FaStarHalfAlt, FaRegStar, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { renderStars } from '../starratings/starratings';
import activities from '../activitiesCard/activitiesdetail';
import Link from 'next/link';
import ActivitiesCard from '../activitiesCard/ActivitiesCard';


const MostPopularPeakClimbing = () => {


    const mostPopPeak = activities.filter(peaks=> peaks.isPopular)
  return (
    <div className='section-package-gallery-lists'>
      <div className="grid-container">
        {mostPopPeak.map(peaks => (
         <ActivitiesCard key={peaks.id} activities={peaks} renderStars={renderStars} />
        ))}
      </div>
    </div>
  );
}

export default MostPopularPeakClimbing;
