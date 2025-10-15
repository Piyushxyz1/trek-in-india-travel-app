"use client"
import React, { useState } from 'react'
import ActivitiesCard from '../activitiesCard/ActivitiesCard';
import activities from '../activitiesCard/activitiesdetail';
import { renderStars } from '../starratings/starratings';
import Link from 'next/link';

const UttrakhandPeakClimbing = () => {
  const [showAll, setShowAll] = useState(false);
  const filteredData = activities.filter((data) => data.region === "Uttarakhand" && data.activity === "Peak-Climbing");

  return (
    <div className="section-package-gallery-lists">
      <div className="grid-container">

       {showAll ? filteredData.slice(6).map(peaks => (
          <ActivitiesCard key={peaks.id} activities={peaks} renderStars={renderStars} />
             ))
          :
      filteredData.slice(0, 6).map(peaks => (
          <ActivitiesCard key={peaks.id} activities={peaks} renderStars={renderStars} />
        ))
       
      }
      </div>
      <div className="explore-more-section">
        <div className="line"></div>
        <button className="mx-4 px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"  onClick={() => setShowAll(!showAll)}>{showAll ? 'Show Less' : 'Explore More'}</button>

        <div className="line"></div>
      </div>

    </div>
  );
}

export default UttrakhandPeakClimbing