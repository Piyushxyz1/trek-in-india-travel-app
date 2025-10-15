"use client"
import React from 'react'
import { useState } from 'react';
import TripBookingForm from '../form/TripBookingForm';
import ModalPortal from '../ModalPortal';
import { FaHiking } from 'react-icons/fa'; // Choose either icon

const StickyCtaButton = () => {

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
   <div className="fixed bottom-4 left-1/2 -translate-x-1/2 sm:left-auto sm:right-4 sm:translate-x-0 z-[999]">
      <button
        className="bg-[#ffffff] hover:bg-[#f47a2a] text-[#f47a2a] hover:text-white font-semibold px-2 sm:px-2 md:px-3 lg:px-4 py-2 md:py-3 rounded-lg transition-all duration-300 transform hover:scale-105 text-xs sm:text-xs md:text-sm mt-2 cursor-pointer border-2 border-[#f47a2a] whitespace-nowrap flex items-center gap-2 group"
        onClick={openModal}
      >
        <FaHiking className="flex-shrink-0 text-lg md:text-xl group-hover:rotate-12 transition-transform" />
        <span>Book Your Trek</span>
      </button>

      {/* Modal */}
      {isOpen && (
        <ModalPortal>
       
              <TripBookingForm closeModal = {closeModal} />
         
        </ModalPortal>
      )}
    </div>
  )
}

export default StickyCtaButton