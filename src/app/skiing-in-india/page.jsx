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



const Skiing = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const [expandedSections, setExpandedSections] = useState({});
    const [currentSlide, setCurrentSlide] = useState(0);

    const activitiesData = activities.filter(activity => activity.activity === "Peak-Climbing")


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


    return (
        <>
            <Banner title="Skiing In India" image="/images/jeep-safari-tours.jpg" />
            <Breadcrumb href="/destinations" current="Skiing" />



            <section className="destinations-page__section mt-8 ">
                <div className='w-full  max-w-4xl md:max-w-6xl  xl:max-w-7xl  px-4 py-8 mx-auto md:px-10'>
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Content Column */}
                        <div className="lg:w-2/3">
                            <span className=" text-[#f47a2a] font-bold">Skiing</span>
                            <h1 className="text-xl sm:text-2xl  xl:text-4xl font-semibold text-[#172541] mt-0 mb-0 md:mb-2 lg:mb-3">Skiing in India</h1>
                            <p className=" mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb:0 md:mb-1 lg:mb-2 xl:mb-3">
                                India is a beautiful destination, blessed with a variety of natural attractions. The destination is also perfect for adventure enthusiasts who are looking for novel ways to experience the surge of adrenaline rush in their veins. There are many adventures based activities available in India, right from motor biking, trekking, skiing, rafting, cycling and many more, but one activity that has made India popular all over the world is- skiing. The majestic Himalayas beckon people from all over the world to enjoy exhilarating skiing experience. We offer many skiing tours in various parts of India but following are some of the most popular skiing destinations in India that are included in our skiing tour programs.
                            </p>

                            <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                Manali, Himachal Pradesh: Manali is a beautiful destination located in the state of Himachal Pradesh. Almost 12 kms away from Manali, the beautiful Solang Valley is located, which is known for being one of the top skiing destinations in India. Referred to as Solang Nala, this skiing slope is perfect for the beginners as it has gentle as well as steep slopes. In order to encourage more skiing enthusiasts to this amazing destination, winter skiing festival is organized on an annual basis, which is attended by skiers from all over the world. The Mountaineering and Allied Sports Institute located here also offer training sessions to people who wish to learn this exciting sport.
                            </p>


                            <h2 className='text-[2rem] font-semibold leading-[1.2] text-[#172541] mb-4'>
                                Top Places for Skiing In India
                            </h2>
                         <div className="mb-8 bg-white">
                                <h3 className="text-xl font-semibold text-[#313137] mb-1">Auli, Uttarakhand:</h3>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                  Auli is a beautiful destination that is known for its amazing beauty and serenity. One of the best skiing destinations in India, Auli is located in the state of Uttrakhand. The skiing slopes of this destination offer a pristine and well maintained retreat that offers a sense of relief and stress free existence. The destination also enjoyed the pleasure of being the host of 2011's first SAF Winter Games in India. Hosting this event helped Auli come up as an important site on the World's Tourism Map.
                                </p>
                            </div>
                         <div className="mb-8 bg-white">
                                <h3 className="text-xl font-semibold text-[#313137] mb-1">Pahalgam, Jammu & Kashmir:</h3>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                               Located in the state of Jammu and Kashmir, Pahalgam is another perfect destination for skiing. Close to Pahalgam, Aru is a serene place where skiing activity takes place. It is fun to watch surreal and breathtaking landscape and a terrific skiing experience on the superb slopes of Pahalgam. If you wish to enjoy once in a life time skiing experience, coming to Aru is the best idea.
                                </p>
                            </div>
                         <div className="mb-8 bg-white">
                                <h3 className="text-xl font-semibold text-[#313137] mb-1">Gulmarg, Jammu & Kashmir:</h3>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                Nestled amidst awe inspiring geographical location, Gulmarg is a famous skiing destination. Skiers, amateurs as well as experienced, come here to enjoy skiing on these beyond compare skiing slopes. In Gulmarg, there are two points from where skiing activity begins. These points are Aparwahat Peak and Kongdori. At Kongdori, amateur skiers find it comfortable when initiating with this activity for the first time, owing to its gentle slopes, while at Aparwahat Peak, the slope descends from a peak of 800 m, which is perfectly suitable for experienced skiers.
                                </p>
                            </div>
                         <div className="mb-8 bg-white">
                                <h3 className="text-xl font-semibold text-[#313137] mb-1">Kufri, Himachal Pradesh:</h3>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                               Located close to Shimla in Himachal Pradesh, Kufri is another jewel in the crown of the country. It is a beautiful ski destination. This is a perfect haunt for skiing enthusiasts and they gather here in large numbers to enjoy this activity, particularly during the winter season. Amateurs can also learn skiing as there are trainers available. Vast expanse of snow covered slopes allows out of the world skiing experience to the skiers.
                                </p>
                            </div>
                         <div className="mb-8 bg-white">
                                <h3 className="text-xl font-semibold text-[#313137] mb-1">Narkanda, Himachal Pradesh:</h3>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                            Besides Kufri, Narkanda is another skiing destination in Himachal Pradesh, located at almost 65 kms distance from Shimla. Though, it is not as popular as Kufri or other skiing destinations, the pleasure derived from this activity is as much as experienced elsewhere. Here there are different slopes for different skiers with varying degrees of slopes. Many advanced skiers love to enjoy skiing experience at steeper descents and to train the amateurs, there are skiing training sessions conducted by HPTDC in the month of January.


                                </p>
                                <p  className="text-[#313137]  mb-4">All these skiing destinations offer a stunning skiing experience which is unmatched.</p>
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

export default Skiing;