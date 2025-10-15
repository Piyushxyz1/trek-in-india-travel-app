"use client"
import React, { useState } from 'react'
import ActivitiesCard from '../activitiesCard/ActivitiesCard';
import activities from '../activitiesCard/activitiesdetail';
import { renderStars } from '../starratings/starratings';

const HimachalPeakClimbing = () => {
   const filteredData = activities.filter((data) => data.region === "Himachal" && data.activity === "Peak-Climbing");
  return (
   <div className="section-package-gallery-lists">

         <div className="grid-container">
  
         {filteredData.map(peaks => (
             <ActivitiesCard key={peaks.id} activities={peaks} renderStars={renderStars} />
           ))
          
         }
         </div>
       
   
       </div>
  )
}

export default HimachalPeakClimbing