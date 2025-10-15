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


const IndrasanPeak = () => {
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
        { label: "Indrasan peak" },
    ]

    return (

        <>
            <Breadcrumb path={breadcrumbPath} />
            <section className="destinations-page__section py-8 px-4 sm:px-6 lg:px-8 my-5 sm:my-10 md:my-6 xl:my-8 ">
                <div className=' max-w-4xl md:max-w-6xl  xl:max-w-7xl  mx-auto px-4 md:px-8 '>
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Content Column */}
                        <div className="lg:w-2/3">



                            <h1 className="text-xl sm:text-2xl  xl:text-4xl font-semibold text-[#172541] mt-0 mb-0 md:mb-3 lg:mb-4">Indrasan Peak Expedition, Himachal </h1>


                            <p className=" mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb:0 md:mb-1 lg:mb-2 xl:mb-3">
                                The sacred Indrasan Peak standing tall at 6222 m is one of the most difficult and technically challenging expeditions in the Indian Himalayas. Part of the Pir Panjal Range, this Himalayan peak demands the true test of endurance and skill and is indeed an expedition not suitable for the faint hearted.
                            </p>
                            <p className=" mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb:0 md:mb-1 lg:mb-2 xl:mb-3">
                                The Indrasan Peak expedition begins with a scenic 12 km trek from Solang Valley to Patalsu Peak. This trail, though moderately challenging, rewards with stunning views of alpine meadows, dense forests, and glimpses of majestic peaks such as Mount Indrasan, Deo Tibba, Hanuman Tibba, Friendship Peak, and the vast Kullu Valley. After spending some time soaking in the views from Patalsu Peak, you return to the Solang Valley campsite. The following day, the journey continues with a drive to Khanol, from where you trek to Chikka, a peaceful route that follows the banks of the Duhangan Nala through dense forests and lush grazing grounds. From Chikka, the trail to Seri offers a blend of mixed woodlands and alpine meadows before the landscape shifts to rocky paths and glacial moraines. This dramatic terrain marks your approach to the Deo Tibba Base Camp and then further to the Advanced Base Camp.
                            </p>
                            <p className=" mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb:0 md:mb-1 lg:mb-2 xl:mb-3">
                                The ascent from base camp to the summit via the West Ridge of Indrasan is a fully technical climb, demanding advanced mountaineering skills along with strong physical and mental endurance. The route from Camp 1 to Camp 2 involves a challenging glacier traverse, ultimately reaching a saddle between Deo Tibba and Indrasan. The final summit ridge is steep, exposed, and truly formidable but it offers an unforgettable climbing experience. As you ascend above 6,000 meters, the surreal panorama unfolds: Deo Tibba, Hanuman Tibba, the towering peaks of Kullu, and the grand expanse of the Greater Himalayas come into view, making your summit moment truly spectacular.
                            </p>

                            <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-6 mt-6">Highlights of Indrasan Peak Expedition  </h2>

                            {/* Ladakh Section */}
                            <div className="mb-8 bg-white">
                                <ul>
                                    <li className=' text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span>

                                        The Indrasan (Seat of Lord Indra) Peak is an extremely difficult and one of the highest, fully technical expeditions in the Indian Himalayas.  </li>
                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span>This peak holds deep religious and mythological significance, especially for locals, who believe it to be the celestial throne of Lord Indra, the Hindu god of thunder, storms, and cosmic warfare.</li>
                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span>The mountaineers who were successful in the Indrasan Peak expedition have described the summit view as other-worldly and a life altering experience, to say the least.</li>
                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span>The majestic peaks of Pir Panjal and Dhauladhar Range are visible from the Indrasan summit. </li>

                                </ul>

                            </div>





                            {/* Best Time Section */}
                            <div className="mb-8">
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-6 mt-6">Required Fitness and Technical Climbing Abilities for Indrasan Peak Expedition</h2>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    Climbing Indrasan Peak is a challenging but highly rewarding venture that requires the mountaineers to journey through highly crevassed glaciers, steep ice slopes, volatile weather etc. Thus, it is important to build a proper fitness foundation ensuring a safe and enriching trekking experience.
                                </p>
                                <ul>
                                    <li className=' text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>High Levels of Physical Energy:</b>
                                        Trekking for more than 6 kilometers through diverse and difficult terrain in volatile weather conditions, demands high levels of physical energy and endurance.

                                    </li>
                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Excellent Mountaineering Abilities:</b> Indrasan peak is a difficult and completely technical trekking tour that requires previous experiences as a mountaineer and excellent knowledge of trekking gears such as ice ropes, ice axes, crampons etc.  </li>

                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Heightened Cardiovascular Abilities and Endurance : </b>Oxygen levels deplete drastically at high-altitude terrain, hence good cardiovascular health is crucial for a safe and sound climb to the sound.   </li>
                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Solid Core Strength :</b>Traversing through steep icy slopes, glacial trails while carrying a heavy backpack requires solid upper body and core strength. </li>

                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Adaptation to High-altitude Area :</b>Acclimatizing to high-altitude terrains is essential to avoid altitude sickness during the journey. </li>

                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Mental Resilience and Perseverance:</b>Climbing Indrasan Peak is not only a test of mountaineering abilities and physical strength but also a test of emotional resilience and presence of mind. To successfully handle the challenges in the way, such as the unpredictable weather, avalanche prone zones, steep icy slopes require the climbers to be calm, composed and not panic amidst a difficult situation. </li>

                                </ul>
                            </div>

                            <div className="mb-8">
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-6 mt-6">Preparatory Tips for Indrasan Peak Expedition </h2>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    Venturing on the Indrasan Peak is a test of precision, preparation and tenacity as much as it is of passion and devotion. The mountain’s glacier sections, knife-edge ridgelines and highly technical ascent routes sets it apart from typical peak climbing expeditions in the Indian Himalayas. Following a proper training schedule, adapting to oxygen scarcity, maintaining mental clarity in remote, unpredictable alpine conditions are necessary to navigate through the mountain’s formidable challenges.
                                </p>
                                <ul>
                                    <li className=' text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span>
                                        Daily jogging, uphill running, cycling, weighted stair climbing helps in building a strong cardiovascular foundation.
                                    </li>

                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Resistance and strength training help in increasing core and upper body strength.</li>

                                    < li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Focusing on gaining expertise in handling various mountaineering gears is crucial.</li>
                                    < li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span>A complete medical checkup and consulting with a doctor before embarking on the expedition is important to ensure a safe trip.
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
                                        <li className=' text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Location</b> Near Manali, Himachal Pradesh</li>
                                        <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Maximum Altitude:</b> 6222 meters</li>
                                        <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Grade:</b> Hard and technical </li>
                                        <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Distance: </b>48 km</li>
                                        <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Number of Days: </b>17 nights/18 days</li>
                                        <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Best Time for Expedition:</b> June and September </li>
                                        <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Starting and Ending Points:</b> Solang Valley </li>
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

export default IndrasanPeak;