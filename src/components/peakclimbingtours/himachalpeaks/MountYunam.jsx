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


const MountYunam = () => {
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
        { label: "Mount Yunam" },
    ]

    return (

        <>
            <Breadcrumb path={breadcrumbPath} />
            <section className="destinations-page__section py-8 px-4 sm:px-6 lg:px-8 my-5 sm:my-10 md:my-6 xl:my-8 ">
                <div className=' max-w-4xl md:max-w-6xl  xl:max-w-7xl  mx-auto px-4 md:px-8 '>
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Content Column */}
                        <div className="lg:w-2/3">



                            <h1 className="text-xl sm:text-2xl  xl:text-4xl font-semibold text-[#172541] mt-0 mb-0 md:mb-3 lg:mb-4">Mount Yunam Expedition, Himachal </h1>



                            <p className=" mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb:0 md:mb-1 lg:mb-2 xl:mb-3">
                                If you’re seeking a transition from high-altitude trekking to semi-technical mountaineering, Mount Yunam could be your next adventure. The peak in Himachal Pradesh stands out for offering the thrill of a real summit climb without demanding highly technical expertise. Located in the remote Lahaul region of Himachal Pradesh, Mount Yunam is also for those preparing for more challenging peak climbing expeditions in the Indian Himalayas, such as Kang Yatse II, Mentok Kangri, and other 6000+ meter technical climbs.
                            </p>
                            <p className=" mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb:0 md:mb-1 lg:mb-2 xl:mb-3">
                                The Mount Yunam expedition begins from Bharatpur, the last motorable point in Lahaul at 4500 m. From here, a challenging 4-hour trek that gradually becomes steeper, covering moraine and crossing many streams leads to the base camp at 5,200 m.
                            </p>
                            <p className=" mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb:0 md:mb-1 lg:mb-2 xl:mb-3">
                                Though categorized as semi-technical, the ascent to the summit involves high winds, sub-zero temperatures, and steep slopes that demand good fitness, mental resilience, and basic alpine awareness. Climbers begin their summit attempt in the dark hours of the early morning, gradually ascending over moraines, pointy rocks, snow patches and the top of a snow wall. The thin air, combined with freezing gusts, challenges every step, making it a true Himalayan adventure. Reaching the summit rewards climbers with sweeping, unobstructed views of the Zanskar region and the majestic Chandra Bhaga Range, a sight that becomes even more surreal as the rising sun bathes the peaks in golden light, transforming the landscape into a breathtaking spectacle.
                            </p>

                            <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-6 mt-6">Highlights of Mount Yunam Expedition</h2>

                            {/* Ladakh Section */}
                            <div className="mb-8 bg-white">
                                <ul>
                                    <li className=' text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Compared to crowded peaks like Stok Kangri, Yunam remains remote and less frequented, offering a sense of wilderness and solitude on the 6000ers.
                                    </li>
                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span>The climbers are rewarded with panoramic views of the Chandra Bhaga Range, including CB-13 (6,264 m), Mulkila Peak (6,517 m), and the vast barren expanse of the Zanskar region. </li>
                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Mount Yunam is one of the few 6,000-meter peaks in India that can be attempted without prior mountaineering experience.
                                    </li>

                                    <li className=' text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span>The expedition route crosses iconic high passes like Baralacha La and landmarks such as Suraj Tal and Deepak Tal. </li>
                                </ul>

                            </div>





                            {/* Best Time Section */}
                            <div className="mb-8">
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-6 mt-6">Fitness Requirements for Mount Yunam Expedition </h2>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    Before heading out on the Mount Yunam Expedition, it’s essential to understand what your body needs to handle. This is a challenging expedition in the Indian Himalayas involving altitude, steep climbs, and technical gear. Building a solid fitness base helps ensure both safety and enjoyment.
                                </p>
                                <ul>
                                    <li className=' text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>High Physical Stamina:</b>Trekking 6 kilometers to Base Camp at 4200 meters and climbing steep, rugged terrain for up to 12 days, including the summit push, requires strong endurance.</li>
                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Basic Climbing Skills:</b> Knowing how to use climbing gear like ropes, crampons, and ice axes is crucial. Previous experience with high-altitude or technical climbing is a significant advantage.</li>

                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Strong Heart and Lung Fitness:</b>High elevations mean less oxygen, so good cardiovascular health is vital for trekking and climbing. </li>


                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Solid Strength and Core Fitness:</b>PStrong legs, core, and upper body are necessary to carry a 20-kilogram pack and navigate rocky, icy trails while using climbing equipment.

                                    </li>
                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Mental Resilience: </b>Staying focused and managing tough conditions, such as unpredictable weather and long days, are key for this high-altitude expedition.  </li>
                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Altitude Adaptation: </b>The body must adjust to heights above 4000 meters to prevent altitude sickness. Prior high-altitude trekking experience is recommended. </li>
                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Overall Good Health:</b>Being free from serious health issues like heart or lung conditions is important. A medical check-up before the trip is advised.</li>
                                </ul>
                            </div>

                            <div className="mb-8">
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-6 mt-6">How to Prepare for Yunam Peak Expedition? </h2>

                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    The Mount Yunam expedition may not require advanced technical climbing, but its altitude, steep scree ascent, and freezing summit conditions demand focused preparation.
                                </p>

                                <ul>
                                    <li className=' text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span>
                                        Begin physical training at least 8 to 10 weeks prior, focusing on stair climbing, incline treadmill hikes, and brisk walking with a 10 kg backpack to simulate the final summit push.

                                    </li>

                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Target a cardiovascular base with daily cardio like cycling and jogging to prepare for low oxygen levels above 5,000 meters.
                                    </li>

                                    < li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Practice back-to-back hikes on weekends, covering 12 to 15 km with elevation gain to mimic continuous trekking days and build muscle endurance.</li>
                                    < li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Acclimatization is crucial; try to do one high-altitude trek in the month leading up to Yunam to familiarize your body with thin air.
                                    </li>
                                    < li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Start training your body to drink 4 to 5 litres of water per day to combat dehydration at high altitude.
                                    </li>
                                    < li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Cold-weather adaptation is important; expose yourself to cold during practice treks or camps, and learn to layer efficiently, as summit night temperatures can dip below -10°C.
                                    </li>
                                    < li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Strengthen your breathing with daily pranayama or deep-breathing exercises like Anulom Vilom to support oxygen efficiency at altitude.
                                    </li>
                                    < li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Get comfortable with summit timing, practice early morning hikes (2–4 am starts) to simulate summit day conditions and test headlamps, gear, and energy levels.
                                    </li>
                                    < li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Visit a physician before departure, especially if you have asthma, altitude sickness history, or cardiac issues. Yunam’s altitude can trigger complications.
                                    </li>
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
                                        <li className=' text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Location</b>: Lahaul, Himachal </li>
                                        <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Maximum Altitude:</b>6111 m</li>
                                        <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Grade:</b> Moderate and Semi-Technical</li>
                                        <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Distance:</b> 22 KM (till basecamp and summit)</li>
                                        <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Number of Days:</b>07Nights/08Ddays</li>
                                        <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Best Time for Expedition:</b> July to August</li>
                                        <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Base Point/Starting and Ending Points:</b>Bharatpur</li>
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

export default MountYunam;