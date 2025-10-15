"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import ActivitiesCard from '@/components/activitiesCard/ActivitiesCard';
import activities from '@/components/activitiesCard/activitiesdetail';
import { renderStars } from '@/components/starratings/starratings';
import Banner from '@/components/banners/Banner';
import Breadcrumb from '@/components/breadcrumbs/Breadcrumb';
import "../../trekdetailspages/trekitinerarydetails/itinerarypage.css"
import CtaButton from '@/components/ctabutton/CtaButton';
import { FiChevronLeft, FiChevronRight, FiInfo, FiBookOpen, FiMapPin } from 'react-icons/fi';
import TripBookingForm from '@/components/form/TripBookingForm';
import ModalPortal from '@/components/ModalPortal';
import PeakClimbingPackages from '@/components/peakclimbingpackages/PeakClimbingPackages';
import Faq from '@/components/faqs/Faq';
import { Peakclimbingfaq } from '@/components/faqs/faqs';
import PeakModalContent from '../PeakModalContent';
import { peakdataHimachal } from '../peaksmodalcontent';
import ClimbingTourSlider from '../ClimbingToursSlider';


const ManaliPeak = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const peakclimbinghimachal = activities.filter((activity) => activity.activity === "Peak-Climbing" && activity.region === "Himachal")
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
    const breadcrumbPath = [
        { href: "//peak-climbing", label: "Peak Climbing" },
        { href: "/himachal-peak-climbing", label: "Himachal" },
        { label: "Manali peak" },
    ]

    return (

        <>
            <Breadcrumb path={breadcrumbPath} />
            <section className="destinations-page__section py-8 px-4 sm:px-6 lg:px-8 my-5 sm:my-10 md:my-6 xl:my-8 ">
                <div className=' max-w-4xl md:max-w-6xl  xl:max-w-7xl  mx-auto px-4 md:px-8 '>
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Content Column */}
                        <div className="lg:w-2/3">



                            <h1 className="text-xl sm:text-2xl  xl:text-4xl font-semibold text-[#172541] mt-0 mb-0 md:mb-3 lg:mb-4">Manali Peak Expedition, Himachal </h1>

                           
                            <p className=" mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb:0 md:mb-1 lg:mb-2 xl:mb-3">
                               Located in the serene embrace of the Pir Panjal Range in Himachal Pradesh, Manali Peak (5669 m) is a perfect expedition destination for the first-timers as well as those wanting to test their endurance. The entire trail is secluded, offering one an opportunity to be up close with nature. It is also an ideal practice expedition in the Indian Himalayas for those aiming to conquer a 6000er. If you are new to mountaineering and eager to learn climbing techniques and skills, Manali Peak expedition in Himachal Pradesh is the right place for you. 
                            </p>
                            <p className=" mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb:0 md:mb-1 lg:mb-2 xl:mb-3">
                               he expedition begins with a trek from Dhundhi to Bakarthatch, an expansive alpine meadow that serves as the first acclimatization campsite.  The trail further continues through a rocky terrain and a huge moraine section towards the sacred, high-altitude glacial lake, Beas Kund. As the climbers gradually ascend, they are rewarded with the stunning panoramic views of the Pir Panjal and Dhauladhar ranges.  
                            </p>
                            <p className=" mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb:0 md:mb-1 lg:mb-2 xl:mb-3">
                               After two days of acclimatization at high-altitude campsites, the summit push begins in the pre-dawn hours. Climbing Manali Peak is an exhilarating challenge that requires not only technical skills with trekking gear but also strong physical endurance and mental grit. As you reach the summit, the effort is richly rewarded with breathtaking panoramic views of the Himalayan peaks that glow in the golden hue of the rising sun…the feeling is surreal. 
                            </p>

                            <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-6 mt-6">Highlights of Manali Peak Expedition  </h2>

                            {/* Ladakh Section */}
                            <div className="mb-8 bg-white">
                                <ul>
                                    <li className=' text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Manali Peak expedition (5,645 m) is a rewarding Himalayan climb, ideal for trekkers who want to try mountaineering or those training and preparing for 6000m+ climbs. </li>
                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span>TTrek through the picturesque Solang Valley, with lush forests, alpine meadows, and glacier-fed streams.</li>
                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span>TThe climb offers a technical ascent, requiring crampons, ice axe, and ropework, perfect for building essential mountaineering skills. </li>

                                    <li className=' text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Enjoy breathtaking 360° summit views of Hanuman Tibba (5982 m), Deo Tibba (6001 m), and the other peaks of Pir Panjal and Dhauladhar ranges. 
                                    </li>
                                </ul>

                            </div>





                            {/* Best Time Section */}
                            <div className="mb-8">
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-6 mt-6">Fitness and Technical Climbing Skills Requirements for Manali Peak Expedition</h2>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    The Manali Peak expedition is both physically and mentally exhausting and it is suggested that one follows a structured fitness routine, 4 to 6 weeks prior the journey that would help their body push through the challenges on the way.  
                                </p>
                                <ul>
                                    <li className=' text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Elevated Levels of Physical Endurance:</b>
                                    Pushing to the 5669 meters elevated summit and the descent from the peak to the base camp on rugged terrain for up to 8 days, requires excellent stamina and cardiovascular endurance.  

                                   </li>
                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Technical Climbing Proficiency:</b> While formal mountaineering training is not mandatory, familiarity with technical climbing equipment like ropes, crampons, harnesses and ice axes are crucial in this journey.</li>

                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Heart and Lung Endurance: </b>Due to the scarcity of oxygen in high-altitude areas, having a strong heart and excellent lung capacity is essential for effectively handling physical exertion.</li>
                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Muscular Strength:</b>A successful ascent to the peak demands upper body strength and stable core muscles to manage through the steep icy slopes, efficient handling of technical gears and maintaining balance throughout the journey while carrying a heavy backpack.</li>

                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Mental Fortitude and Resilience:</b>High-altitude trekking expeditions challenge both physical strength and mental resilience. Staying calm and focused through unpredictable weather, fatigue and strenuous physical conditions, ensure a successful summit reach and safe return.</li>

                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Altitude Acclimization:</b>Even though the expedition includes structured altitude acclimation days, it is best for the trekkers to have prior high-altitude trekking experiences to minimize the chances of acute mountain sickness mid-journey.</li>
                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Sound General Health:</b>A thorough overall physical and mental health evaluation before undertaking the expedition is essential to make sure the participants are fit for hiking.</li>
                                </ul>
                            </div>

                            <div className="mb-8">
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-6 mt-6">How to Prepare for Manali Peak Expedition?</h2>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    Climbing Manali Peak is a rewarding challenge for mountaineers and one of the best mountain expeditions in India. It is also important to remember that the embankment on this high-altitude terrain cannot be achieved solely by passion but requires thorough preparation. The crisp glacier terrain, steep icy slopes of the isolated alpine region, requires proper training to understand and manage your body’s response at high elevations.
                                </p>
                                <ul>
                                    <li className=' text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span>
                                      It is best to begin training 2-3 months prior to the trek. Hiking, stair climbing and running are the best activities that stimulate expedition conditions.
                                    </li>

                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span>To increase cardiovascular endurance, it is best to cycle and take swimming lessons for at least 30 to 60 minutes.</li>
                    
                                    < li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span>It is essential to be familiar with technical mountaineering gear, such as climbing ropes and harness, crampon, ice-axe and how to use them.</li>
                                    < li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Practicing breathworks daily helps with adjusting to low levels of oxygen at high altitudes.  
                                    </li>
                                    < li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span>It is best to consult with a doctor before participating in trekking to ensure overall well-being.</li>
                                </ul>
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
                                   <ul>
                                <li className=' text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Location</b> Manali, Himachal Pradesh</li>
                                <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Maximum Altitude:</b> 5669 meters</li>
                                <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Grade:</b> Hard (Fully Technical) </li>
                                <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Number of Days:</b>10 Nights/11 Days</li>
                                <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Best Time for Expedition:</b> May to June, August to October </li>
                                <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Base Point/Starting and Ending Points:</b>Dhundi</li>
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

                    <div className='mt-1 mb-1 sm:mt-2 md:mt-3 lg:mt-18  sm:mb-2 md:mb-3 lg:mb-4 '>

                        <ClimbingTourSlider TrekData={peakclimbinghimachal} />

                    </div>
                </div>

            </section>


        </>


    )



}

export default ManaliPeak;