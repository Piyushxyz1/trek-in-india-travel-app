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
import ModalPortal from '@/components/ModalPortal';
import "../../components/trekdetailspages/trekitinerarydetails/itinerarypage.css";
import TripBookingForm from '@/components/form/TripBookingForm';

const UttarakhandMountainBikeTours = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const [expandedSections, setExpandedSections] = useState({});
    const [currentSlide, setCurrentSlide] = useState(0);


    const breadcrumbPath = [
        { label: 'Mountain bike tours' },
    ]



    const slides = [
        {
            image: "https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            alt: "Jeep Safari in Himalayas",
            caption: "Exploring the majestic Himalayas by Jeep"
        },
        {
            image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            alt: "Ladakh Jeep Safari",
            caption: "The rugged beauty of Ladakh"
        },
        {
            image: "https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            alt: "Uttarakhand Jeep Safari",
            caption: "Spiritual journey through Uttarakhand"
        }
    ];



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


    const activitiesData = activities.filter(activity => activity.activity === "Mountain-Biking" && activity.region === "Uttarakhand")
    return (
        <>
            <Banner title="Mountain Bike Tours" image="/images/motor-biking-banner.jpg" />
            <Breadcrumb path={breadcrumbPath} />


            <section className='packages px-4 sm:px-6 lg:px-8'>
                <div className='w-full  max-w-4xl md:max-w-6xl  xl:max-w-7xl  px-4 py-8 mx-auto md:px-10'>
                    <h1 className="text-xl sm:text-2xl  xl:text-4xl font-semibold text-[#172541] mt-0 mb-0 md:mb-2 lg:mb-3">Mountain Bike Tours In Garhwal</h1>
                    <p className=" mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb:0 md:mb-1 lg:mb-2 xl:mb-3">
                        Explore the Indian terrains on ace motorbikes; learn what it feels to discover the undiscovered and to cross challenging yet incredible destinations of the country. With our selective tour packages make each motorbiking experience in India a happy one. Book your motor biking holidays at best prices and services.
                    </p>
                    <div className="grid [grid-template-columns:repeat(1,1fr)] justify-center gap-8 mt-2 md:mt-3 lg:mt-4 xl:mt-6 md:grid-cols-2 lg:grid-cols-3   mx-auto py-0 sm:py-2 lg:py-4 xl:py-10  ">


                        {activitiesData.map((activities) => {
                            return (

                                <ActivitiesCard key={activities.id} activities={activities} renderStars={renderStars} />
                            )

                        })}

                    </div>
                </div>
            </section>


            <section className="destinations-page__section py-8 px-4 sm:px-6 lg:px-8">
                <div className=' max-w-4xl md:max-w-6xl  xl:max-w-7xl  mx-auto px-4 md:px-8 '>
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Content Column */}
                        <div className="lg:w-2/3">

                            <h1 className="text-xl sm:text-2xl  xl:text-4xl font-semibold text-[#172541] mt-0 mb-0 md:mb-2 lg:mb-3">Motorbiking in Uttarakhand </h1>
                            <p className=" mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb:0 md:mb-1 lg:mb-2 xl:mb-3">
                                Uttarakhand is a paradise for thrill-seekers, and mountain biking is one of the most exciting ways to take in its stunning beauty, rich culture, and spiritual atmosphere. With its rugged landscapes, hilly paths, thick forests, and charming valleys, the state offers an unforgettable mountain biking adventure.
                            </p>
                            <p className=" mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb:0 md:mb-1 lg:mb-2 xl:mb-3">
                                In Kumaon, mountain biking trails carve through terraced fields, pine-clad ridges, and sleepy hamlets. Ride the winding roads of Almora, push through heritage routes that cut past centuries-old Kumaoni villages, or chase switchbacks near Bageshwar, Baijnath, and Kausani with snow peaks towering in the backdrop. Around Nainital, oak and deodar forests create natural singletracks, while in Bhatrajkhan and Kaladhungi, the routes shift into dense sal forests alive with bird calls, perfect for those who like their rides wild and raw.
                            </p>
                            <p className=" mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb:0 md:mb-1 lg:mb-2 xl:mb-3">
                                Mountain biking in Garhwal offers a different rhythm: high-altitude trails where off-road grit is tested. Ride the misty Mussoorie–Dhanaulti stretch, grind up rocky ascents above Joshimath to Auli, or flow along riverside tracks from Rishikesh to Shivpuri, crossing suspension bridges, hammering through sandy patches, and tackling tight hairpins with the Ganga roaring below. Wildlife sightings add to the unpredictability, with Himalayan langurs swinging overhead or a burst of pheasants across the path.
                            </p>
                            <p className=" mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb:0 md:mb-1 lg:mb-2 xl:mb-3">

                                Our Uttarakhand mountain biking tours are built for riders who want more than distance; they’re for those chasing challenge, flow, and meaning. Nights are spent in village homestays or riverside camps by the Ganga and Alaknanda, giving you time to refuel and connect with the land. From beginner-friendly loops like Bhimtal – Sattal to full-throttle climbs and descents at Joshimath – Auli, every mountain biking trail in Uttarakhand leaves you with stories etched in dust, sweat, and the Himalayas themselves.

                            </p>








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
                                                <a href="tel:+1234567890" className="secondary-cta">   CALL NOW
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

                                            <TripBookingForm closeModal={closeModal} />

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



export default UttarakhandMountainBikeTours