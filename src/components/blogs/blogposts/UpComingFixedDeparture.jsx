"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import ActivitiesCard from '@/components/activitiesCard/ActivitiesCard';
import activities from '@/components/activitiesCard/activitiesdetail';
import { renderStars } from '@/components/starratings/starratings';
import Banner from '@/components/banners/Banner';
import Breadcrumb from '@/components/breadcrumbs/Breadcrumb';
import CtaButton from '@/components/ctabutton/CtaButton';
import { FiChevronLeft, FiChevronRight, FiInfo, FiBookOpen, FiMapPin } from 'react-icons/fi';
import ModalPortal from '@/components/ModalPortal';
import TripBookingForm from '@/components/form/TripBookingForm';
import { BlogsList } from './bloglist';
const UpComingFixedDeparture = () => {

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

                            <h1 className="text-xl sm:text-2xl  xl:text-4xl font-semibold text-[#172541] mt-0 mb-0 md:mb-2 lg:mb-3">Upcoming Fixed Departure Winter Treks You Should Plan Right Away</h1>
                            <p className=" mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb:0 md:mb-1 lg:mb-2 xl:mb-3">
                               Walking over the frozen river; crossing the wintry grasses and snow-covered trails, a mixture of exploration and adventure, trekking himalayas in winter is an experience of a lifetime. So as to introduce you to the best winter treks in India, we are offering winter special fixed departure treks 2020 with adventurers that share the same enthusiasm as you. So plan the following treks right away to satisfy your wanderlust
                            </p>                           

                            {/* Best Time Section */}
                            <div className="mb-8">
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-6 mt-6">1.Gomukh Tapovan – Witness the journey of Ganga from the source to the cities</h2>
                                 <img src="/images/blogs/Singalila-Ridge-Trek.webp" alt='' className='h-[250px] md:h-[350px] lg:h-[400px] w-full mb-8 mt-8  ' />
                                <p className="text-[#313137] ">
                                   One of the popular treks of Garhwal, Gomukh Tapovan trek will introduce you to places like Uttarkashi, Gangotri, Gomukh, Tapovan, and Nandanvan, which are the melange of natural beauty and spiritual enhancement. Throughout the journey, travelers will see a vast display of natural beauty including glaciers, peaks, high altitude meadows, and varied species of Himalayan birds. <a href='/sources-ganges-trekking'>Click here for detailed itinerary</a>
                                </p>
                            </div>

                            {/* Why Us Section */}
                            <div className="">
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-6 mt-6">2. Chopta Chandrashila Trek – From the painter’s muse</h2>
                                  <img src="/images/blogs/Singalila-Ridge-Trek.webp" alt='' className='h-[250px] md:h-[350px] lg:h-[400px] w-full mb-8 mt-8'/>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                  Famous and comparatively easy trek of Uttarakhand, Chopta Chandrashila will take you to highest Shiva temple; unspoiled high altitude lakes and remote villages tremendously lit in the beautiful backdrop of Chopta Valley. From the top of the honorary Chandrashila summit, tourists can get the gratifying view of magnificent surrounding peaks of Trishul, Nanda Devi, and Chaukhamba.<a href='/chopta-chandrashila-trek'>Click here for detailed itinerary</a>
                                </p>
                            </div>
                            {/* Why Us Section */}
                            <div className="">
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-6 mt-6">3. Stok Kangri Trek – Uncover the best-kept secrets of Ladakh</h2>
                                  <img src="/images/blogs/Singalila-Ridge-Trek.webp" alt='' className='h-[250px] md:h-[350px] lg:h-[400px] w-full mb-8 mt-8'/>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                Get, set, ready for the journey of the lifetime. Exhilarating, nerve-racking yet beautiful, Stok Kangri Trek would take you to an unending adventure journey that will blaze in your memory forever. 
                                <a href = "/stok-kangri-trek">Click here for detailed itinerary</a>
                                </p>
                            </div>
                            {/* Why Us Section */}
                            <div className="">
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-6 mt-6">4. Dzongri – Goechala Trek – Best trekking trail for novices</h2>
                                  <img src="/images/blogs/Singalila-Ridge-Trek.webp" alt='' className='h-[250px] md:h-[350px] lg:h-[400px] w-full mb-8 mt-8'/>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                               A fascinating trip for all the adventure enthusiasts and novices alike, Dzongri – Goechala trek is another great trek for winters that will take you through the high altitude meadows and jungles of Sikkim, giving ample chances to sight wildlife of the region. One of the finest treks in India, Dzongri – Goechala trek would introduce you to some excellent landscapes and excellent campsites. <a href = "yuksom-dzongir-goechala">Click here for detailed itinerary</a> 
                                </p>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                              Hills, high meadows, treks – the seasoned travelers swear by the pristine nature of the places mentioned above. Those who wish to venture out and pump up the adrenaline rush, missing these treks would be a sin. So don’t wait any further; book your seats before it gets too late. For more information, please call +91-9212553109 or send us a query at info@trekkinginindia.com 
                                </p>

                            </div>

                            <div className='author-section'>
                                <h2 className="text-xl sm:text-2xl xl:text-3xl text-[#f47a2a] mb-4 mt-4">About Arun Joshi</h2>

                                <div className="flex items-start gap-4 mt-4">
                                    {/* Left Side Image */}
                                    <img
                                        src="/images/blogs/arunjoshi.jpg"
                                        alt="Arun Joshi"
                                        className="w-24 h-24 object-cover rounded-md"
                                    />
                                    <p className="text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                        A thoroughbred adventurer, Arun Joshi was born in the picturesque and landlocked district of Chamoli, Uttarakhand. He is well known for his close association with the Indian Himalayas for the past 16 years, and knows the region inside out. His vast knowledge and first-hand experience of trekking to the many challenging regions of the Indian Himalayas have also helped him to establish himself as the go-to guide in the region.
                                    </p>

                                    {/* Right Side Text */}
                                    <div>
                                    </div>
                                </div>
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
                                            .slice(0, 5) // make a copy so the original array isn't mutated
                                            .sort((a, b) => b.views - a.views) // sort by most viewed first
                                            .map((post, index) => (
                                                <div key={index} className="flex gap-3 pb-3 border-b last:border-b-0 last:pb-0">
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
                                                </div>
                                            ))}

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
                                                <a href="tel:+1234567890" className="secondary-cta">CALL NOW
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

export default UpComingFixedDeparture