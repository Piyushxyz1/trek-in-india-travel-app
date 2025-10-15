"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import ActivitiesCard from '@/components/activitiesCard/ActivitiesCard';
import activities from '@/components/activitiesCard/activitiesdetail';
import { renderStars } from '@/components/starratings/starratings';
import Banner from '@/components/banners/Banner';
import Breadcrumb from '@/components/breadcrumbs/Breadcrumb';
import CtaButton from '@/components/ctabutton/CtaButton';
import { FiChevronLeft, FiChevronRight, FiInfo, FiBookOpen, FiMapPin } from 'react-icons/fi';
import ModalPortal from '@/components/ModalPortal';
import "../../trekdetailspages/trekitinerarydetails/itinerarypage.css";
import TripBookingForm from '@/components/form/TripBookingForm';
import { BlogsList } from './bloglist';

const BestHikingTrails = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const [expandedSections, setExpandedSections] = useState({});
    const [currentSlide, setCurrentSlide] = useState(0);




    const breadcrumbPath = [
        { label: 'Moter bike tours' },
    ]



    const activitiesData = activities.filter(activity => activity.activity === "Motor-Biking")
    return (
        <>
            <Breadcrumb path={breadcrumbPath} />


            <section className="destinations-page__section py-8 px-4 sm:px-6 lg:px-8">
                <div className=' max-w-4xl md:max-w-6xl  xl:max-w-7xl  mx-auto px-4 md:px-8 '>
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Content Column */}
                        <div className="lg:w-2/3">

                            <h1 className="text-xl sm:text-2xl  xl:text-4xl font-semibold text-[#172541] mt-0 mb-0 md:mb-2 lg:mb-3">Motor Bike Tours in India</h1>
                            <p className=" mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb:0 md:mb-1 lg:mb-2 xl:mb-3">
                                Explore the Indian terrains on ace motorbikes; learn what it feels to discover the undiscovered and to cross challenging yet incredible destinations of the country. With our selective tour packages make each motorbiking experience in India a happy one. Book your motor biking holidays at best prices and services.
                            </p>

                            <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-6 mt-6">Popular Motor Biking Tours</h2>

                           

                            {/* Best Time Section */}
                            <div className="mb-8">
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-6 mt-6">Best Time to Visit </h2>
                                <p className="text-[#313137] ">
                                    The best season and time for embarking on a jeep safari tour in Indian Himalayas depends on the region you wish to explore. Ideally, the best time for jeep safari in Ladakh is between the months of May and September when the weather is salubrious and rejuvenating. For a jeep safari tour in Himachal and Uttarakhand, the best time is during the months of May and October, except the monsoon months in between.
                                </p>
                            </div>

                            {/* Why Us Section */}
                            <div className="">
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-6 mt-6">Why Choose Us ?</h2>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    We offer exclusive deals and packages for jeep safari tours in Himalayas. With an experience of more than three decades in the travel industry and with a team of experienced staff, we make sure that our jeep safari holiday packages are specially designed as per your needs and requirements.
                                </p>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    We also help you have cherishable memories of diverse cultural encounters by assisting you have interactions with local people and understand their ways of living. Arrangements for sight-seeing and shopping are few of our other services that you can rely on us for.
                                </p>
                                <p className="text-[#313137] ">
                                    Having associated with us, you can also be ensured of being provided with best of the services including accommodations, transportations and hotel transfers. We have a trusted name in the industry and with us, you are sure to have the most enriching and memorable experiences on your jeep safari adventure holiday.
                                </p>
                            </div>
                        </div>

                        {/* Right Sidebar Column */}
                        <div className="lg:w-1/3">
                            <div className="sticky top-4 space-y-6">
                                {/* Recent Posts Section */}
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <h3 className="text-xl font-semibold text-[#313137] mb-4 border-b pb-2">Recent Posts</h3>
                                    <div className="space-y-4">
                                        {BlogsList
                                            .slice(0, 5) // copy to avoid mutating the original array
                                            .sort((a, b) => new Date(b.date) - new Date(a.date)) // sort by date descending
                                            .map((post, index) => (
                                                <Link href={`/${post.slug}`} key={index}>
                                                    <div className="flex gap-3 mb-4 border-b pb-3 border-b-[#f47a2a]">
                                                        <div className="flex-shrink-0 w-20 h-20 overflow-hidden rounded-md">
                                                            <img
                                                                src={post.image}
                                                                alt={post.title}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                        <div>
                                                            <h4 className="text-sm font-semibold text-[#172541] mb-1">{post.title}</h4>
                                                            <p className="text-xs text-gray-500 mb-1">{post.date}</p>
                                                            <p className="text-xs text-[#313137] line-clamp-2">{post.excerpt}</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                    </div>
                                </div>

                                {/* Popular Posts Section */}
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <h3 className="text-xl font-semibold text-[#313137] mb-4 border-b pb-2">Most Popular</h3>
                                    <div className="space-y-4">
                                        {BlogsList
                                            .slice(0, 5)
                                            .sort((a, b) => b.views - a.views)
                                            .map((post, index) => (
                                                <Link href={`/${post.slug}`} key={index} passHref>
                                                    <a className="flex gap-3 pb-3 border-b last:border-b-0 last:pb-0">
                                                        <div className="flex-shrink-0 w-20 h-20 overflow-hidden rounded-md">
                                                            <img
                                                                src={post.image}
                                                                alt={post.title}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                        <div>
                                                            <h4 className="text-sm font-semibold text-[#172541] mb-1">{post.title}</h4>
                                                            <p className="text-xs text-gray-500 mb-1">{post.date}</p>
                                                            <p className="text-xs text-[#313137] line-clamp-2">{post.excerpt}</p>
                                                            <p className="text-[10px] text-gray-400">{post.views} views</p> {/* optional */}
                                                        </div>
                                                    </a>
                                                </Link>
                                            ))
                                        }

                                    </div>
                                </div>

                                {/* Booking Form Section */}
                                <div className="booking-form">
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

export default BestHikingTrails