"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import ActivitiesCard from '@/components/activitiesCard/ActivitiesCard';
import activities from '@/components/activitiesCard/activitiesdetail';
import { renderStars } from '@/components/starratings/starratings';
import "../../components/activities/activities.css";
import Banner from '@/components/banners/Banner';
import Breadcrumb from '@/components/breadcrumbs/Breadcrumb';
import CtaButton from '@/components/ctabutton/CtaButton';
import { FiChevronLeft, FiChevronRight, FiInfo, FiBookOpen, FiMapPin } from 'react-icons/fi';
import TripBookingForm from '@/components/form/TripBookingForm';
import "../../components/trekdetailspages/trekitinerarydetails/itinerarypage.css";
import ModalPortal from '@/components/ModalPortal';


const RaftingInIndia = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const [expandedSections, setExpandedSections] = useState({});
    const [currentSlide, setCurrentSlide] = useState(0);


    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('body-no-scroll');
        } else {
            document.body.classList.remove('body-no-scroll');
        }

        return () => {
            document.body.classList.remove('body-no-scroll');
        };
    }, [isOpen]);

    const toggleSection = (sectionId) => {
        setExpandedSections(prev => ({
            ...prev,
            [sectionId]: !prev[sectionId]
        }));
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    // Auto-rotate slides
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    const slides = [
        {
            image: "/images/beas-kund.webp",
            alt: "Jeep Safari in Himalayas",
            caption: "Explore the majestic Himalayas by Jeep"
        },
        {
            image: "/images/banner3.jpg",
            alt: "Kumaon Jeep Safari",
            caption: "The rugged beauty of Kumaon"
        },
        {
            image: "/images/banner10.webp",
            alt: "Uttarakhand Jeep Safari",
            caption: "Spiritual journey through Uttarakhand"
        }
    ];


    return (
        <>
            <Banner title="River Rafting" image="/images/Himachal.webp" />
            <Breadcrumb href="/destinations" current="rafting" />
            <section className="destinations-page__section m-8">
                <div className='w-full  max-w-4xl md:max-w-6xl  xl:max-w-7xl  px-4 py-8 mx-auto md:px-10'>
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Content Column */}
                        <div className="lg:w-2/3">
                            <span className=" text-[#f47a2a] font-bold">River Rafting</span>
                            <h1 className="text-xl sm:text-2xl  xl:text-4xl font-semibold text-[#172541] mt-0 mb-0 md:mb-2 lg:mb-3">Rafting Tours in India</h1>
                            <p className=" mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb:0 md:mb-1 lg:mb-2 xl:mb-3">India has several destinations that offer high end river rafting options. The potential for this sport to become quite popular in India is immense. In Uttarakhand, the rivers Bhagirathi, Ganga and Alaknanda allows river rafting. This is an adventurous activity and perfect to experience an adrenaline high. Some of the major rafting destinations in India are-
                            </p>
                            {/* Ladakh Section */}
                           <div className="mb-8 bg-white">
                                <h3 className="text-xl font-semibold text-[#313137] mb-1">The Alaknanda River Rafting:</h3>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    Rafting enthusiasts love to enjoy rafting activities in the rapids, and the activity begins from Chamoli and continues to Rishikesh. The expedition duration continues for seven days. There are high rapids in the area like Kakad Fall, Hillary Fall, the Wall and more. The thrilling experience of enjoying rafting has made many people fond of this activity.
                                </p>
                            </div>

                            {/* Uttarakhand Section */}
                           <div className="mb-8 bg-white">
                                <h3 className="text-xl font-semibold text-[#313137] mb-1">The Spiti - Pin River Rafting:</h3>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    Located in the Kullu Valley, which is more like a cold desert, as it embraces high ridges, glaciers, pastures, broad valleys and fast moving rivers, this is a famous rafting destination. The Spiti-Pin river expedition starts from Spiti and travels almost 100 km, criss crossing through this amazing valley.
                                </p>
                            </div>
                            {/* Uttarakhand Section */}
                           <div className="mb-8 bg-white">
                                <h3 className="text-xl font-semibold text-[#313137] mb-1">The Brahmaputra River Rafting:</h3>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    This rafting activity takes place in the River Brahmaputra, also referred to as the Tsangpo, when originates from Tibet. It crosses the mighty Himalayas and Tibet and the Brahmaputra river rafting activity begins from Tuting and covers 180 kms reaching Pasighat. The rafters traverse through exciting rapids and inaccessible gorges during this journey. The dense forests on the both sides add a dash of thrill and adventure in this activity.
                                </p>
                            </div>
                           <div className="mb-8 bg-white">
                                <h3 className="text-xl font-semibold text-[#313137] mb-1">The Kali/Sarda River Rafting:</h3>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    The Kali Valley is another interesting river rafting expedition. This area was famous as Tibet's trading route. Many people with an adventurous bent of mind, love to indulge in rafting in Kali or Sarda river. People enjoy thrilling Grade IV rafting activities. Bouncy and big rapids are quite enjoyable and thrilling to enjoy. Excellent forest cover also makes the expedition interesting and exciting.
                                </p>
                            </div>
                           <div className="mb-8 bg-white">
                                <h3 className="text-xl font-semibold text-[#313137] mb-1">Lower Tons River Rafting:</h3>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    In lower Tons river rafting, people enjoy exploring the amazing Garhwal area. The river originates from Bundarpunchh mountain and flows through the Uttrakhand area. This river also separates the Uttrakhand and Himachal Pradesh states. After a normal run for some time, it offers an electrifying rafting experience. Avid rafters love to enjoy this rafting course as it allows them to experience a variety of thrilling options.
                                </p>
                            </div>

                           <div className="mb-8 bg-white">
                                <h3 className="text-xl font-semibold text-[#313137] mb-1">The Kameng River Rafting:</h3>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    This river is located in the state of Arunachal Pradesh. This destination is a dream place for adventure lovers and enjoys rafting experience to their heart's content. This area has now been allowed to be explored after taking special permission. This untapped place has a lot of potential and many rafters are visiting this destination to enjoy a unique river rafting experience. Beautiful gorges and rapids offer a lot of thrill and fun to the activity.
                                </p>
                            </div>
                           <div className="mb-8 bg-white">
                                <h3 className="text-xl font-semibold text-[#313137] mb-1">The Zanskar River Rafting:</h3>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    Rafting in the Zanskar River is an experience that is unmatched and unparalleled to any other in the world. This area is not only known for its natural beauty manifested in gigantic snow clad mountains, deep gorges, hilltop monasteries, unique wildlife, sleepy mountains, but amazing Zanskar Valley and the Zanskar River meanders through the gorges. People enjoy the fast paced rafting in the rapids and enjoy a dose of adrenaline rush like never before!
                                </p>
                            </div>



                        </div>

                        {/* Image Slider Column */}
                     <div className="lg:w-1/3">
                            <div className="sticky top-4 z-10">

                                <div className="image-slider relative rounded-xl overflow-hidden shadow-lg">
                                    {slides.map((slide, index) => (
                                        <div
                                            key={index}
                                            className={`slide transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'}`}
                                        >
                                            <img
                                                src={slide.image}
                                                alt={slide.alt}
                                                className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl"
                                            />
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                                
                                            </div>
                                        </div>
                                    ))}

                                    <div className="absolute bottom-4 right-4 flex space-x-2">
                                        <button
                                            onClick={prevSlide}
                                            className="slider-prev bg-white/30 backdrop-blur-sm rounded-full p-2 hover:bg-white/50 transition"
                                        >
                                            <FiChevronLeft className="h-5 w-5 text-white" />
                                        </button>
                                        <button
                                            onClick={nextSlide}
                                            className="slider-next bg-white/30 backdrop-blur-sm rounded-full p-2 hover:bg-white/50 transition"
                                        >
                                            <FiChevronRight className="h-5 w-5 text-white" />
                                        </button>
                                    </div>
                                </div>

                                <div className="mt-6 bg-white rounded-lg shadow-md p-6">
                                    <h3 className="text-xl font-semibold text-[#313137] mb-4">Quick Facts</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <FiInfo className="h-5 w-5 text-[#f47a2a] mt-0.5 mr-2" />
                                            <span className="text-[#313137] "><strong>Best Season:</strong> May to October</span>
                                        </li>
                                        <li className="flex items-start">
                                            <FiBookOpen className="h-5 w-5 text-[#f47a2a] mt-0.5 mr-2" />
                                            <span className="text-[#313137] "><strong>Difficulty:</strong> Moderate to Challenging</span>
                                        </li>
                                        <li className="flex items-start">
                                            <FiMapPin className="h-5 w-5 text-[#f47a2a] mt-0.5 mr-2" />
                                            <span className="text-[#313137] "><strong>Top Routes:</strong> Manali-Leh, Spiti Valley, Char Dham</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="booking-form mt-6 ">

                                    <div className="form-cta-section modern-cta">
                                        <div className="form-cta-ribbon premium-badge">
                                            <span>✨ Best Value Guarantee</span>
                                        </div>

                                        <div className="form-cta-content">
                                            <div className="pricing-header">
                                                <h3>All-Inclusive Luxury Package</h3>
                                                <p className="package-description">Experience the perfect blend of adventure and relaxation with our carefully curated itinerary</p>
                                            </div>

                                            <div className="price-container">
                                                <p className="price-tag">$710 <span className="price-unit">USD</span></p>
                                                <p className="price-note">per person (based on double occupancy)</p>
                                            </div>

                                            <div className="package-details">
                                                <div className="detail-item">
                                                    <svg className="detail-icon" viewBox="0 0 24 24">
                                                        <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
                                                    </svg>
                                                    <span>7 Nights 8 Days</span>
                                                </div>
                                                <div className="detail-item">
                                                    <svg className="detail-icon" viewBox="0 0 24 24">
                                                        <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
                                                    </svg>
                                                    <span>5-Star Accommodations</span>
                                                </div>
                                                <div className="detail-item">
                                                    <svg className="detail-icon" viewBox="0 0 24 24">
                                                        <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
                                                    </svg>
                                                    <span>All Meals Included</span>
                                                </div>
                                                <div className="detail-item">
                                                    <svg className="detail-icon" viewBox="0 0 24 24">
                                                        <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
                                                    </svg>
                                                    <span>Private Guided Tours</span>
                                                </div>
                                            </div>

                                            <div className="cta-actions">
                                                <button onClick={openModal} className="form-book-trip-button primary-cta">
                                                    BOOK THIS TRIP
                                                </button>
                                               <a href="tel:+1234567890" className="secondary-cta">                                                  CALL NOW
</a>
                                            </div>

                                            <div className="trust-badges">
                                                <div className="trust-item">
                                                    <svg className="trust-icon" viewBox="0 0 24 24">
                                                        <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z" />
                                                    </svg>
                                                    <span>Secure Booking</span>
                                                </div>
                                                <div className="trust-item">
                                                    <svg className="trust-icon" viewBox="0 0 24 24">
                                                        <path d="M12,15A2,2 0 0,1 10,13A2,2 0 0,1 12,11A2,2 0 0,1 14,13A2,2 0 0,1 12,15M12,17C9.24,17 7,14.76 7,12C7,9.24 9.24,7 12,7C14.76,7 17,9.24 17,12C17,14.76 14.76,17 12,17M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z" />
                                                    </svg>
                                                    <span>24/7 Support</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    {isOpen && (
                                       <ModalPortal>
                                           
                                                    <TripBookingForm  closeModal={closeModal}  />
                                        
                                        </ModalPortal>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>


    )
}

export default RaftingInIndia;