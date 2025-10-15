"use client"
import React, { useState } from 'react'
import ActivitiesCard from '../activitiesCard/ActivitiesCard';
import activities from '../activitiesCard/activitiesdetail';
import { renderStars } from '../starratings/starratings';

const SikkimMotorBikeToursPackages = () => {
    
   const filteredData = activities.filter((data) => data.region === "Sikkim" && data.activity === "Motor-Biking");
  return (
   <div className="section-package-gallery-lists">

         <div className="grid-container">
  
         {filteredData.map(tours => (
             <ActivitiesCard key={tours.id} activities={tours} renderStars={renderStars} />
           ))
          
         }
         </div>
       
   
       </div>
  )
}

export default SikkimMotorBikeToursPackages