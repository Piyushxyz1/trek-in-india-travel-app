"use client"
import React from 'react'
import { useState } from 'react'
import "./cta.css"
import { FaMessage } from 'react-icons/fa6'
import ModalPortal from '../ModalPortal'
import TripBookingForm from '../form/TripBookingForm'
const CtaButton = () => {

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (

    <section className='form-booking-section'>
      {/* Booking Section */}
      <div className="bg-[url('/images/background.webp')] relative bg-cover bg-bottom  pt-8 pb-8 text-center h-52 sm:h-85 md:h-90 lg:h-100">
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/50 to-transparent"></div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[30%] z-10" >

          <h2 className="text-[1.1rem]  md:text-3xl lg:text-4xl font-bold text-[#ffffff]   mb-2 md:mb-4">Ready for Your Adventure Trip With Us?</h2>
          <p className="hidden md:block text-[#ffffff] mb-2 md:mb-6 lg:mb-8 mt-2 md:mt-4 text-[0.9rem] md:text-[1.1rem] lg:text-[1.2rem]">
            Our expert-planned treks include experienced guides, quality equipment, and authentic cultural experiences to make your journey unforgettable.
          </p>
          <button className="bg-[#ffffff] hover:bg-[#f47a2a] text-[#f47a2a] hover:text-[#ffffff] font-semibold px-2  sm:px-4 md:px-6 lg:px-8 py-2  md:py-3 rounded-lg transition transform hover:scale-105 text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] lg:text-[1.2rem] cursor-pointer " onClick={openModal}>
            Book Your Trek Now
          </button>


        </div>
      </div>
      {isOpen && (
        <ModalPortal>
     <TripBookingForm closeModal={closeModal}/>
        </ModalPortal>
      )}
    </section>
  )
}

export default CtaButton