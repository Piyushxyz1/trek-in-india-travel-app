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


const MountShitidhar = () => {
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
        { label: "Mount Shitidhar" },
    ]

    return (

        <>
            <Breadcrumb path={breadcrumbPath} />
            <section className="destinations-page__section py-8 px-4 sm:px-6 lg:px-8 my-5 sm:my-10 md:my-6 xl:my-8 ">
                <div className=' max-w-4xl md:max-w-6xl  xl:max-w-7xl  mx-auto px-4 md:px-8 '>
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Content Column */}
                        <div className="lg:w-2/3">



                            <h1 className="text-xl sm:text-2xl  xl:text-4xl font-semibold text-[#172541] mt-0 mb-0 md:mb-3 lg:mb-4">Mount Shitidhar Climbing</h1>



                            <p className=" mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb:0 md:mb-1 lg:mb-2 xl:mb-3">
                                Mount Shitidhar, also known as the “White Peak,” offers a perfect introduction to peak climbing in the Indian Himalayas. Standing tall at 5,290 meters in the scenic Kullu District, this expedition is ideal for beginners seeking their first high-altitude summit, while also serving as an excellent training ground for seasoned climbers to refine their skills. With its moderate difficulty level, Mount Shitidhar invites adventurers to experience the thrill of mountaineering amidst stunning Himalayan landscapes.
                            </p>
                            <p className=" mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb:0 md:mb-1 lg:mb-2 xl:mb-3">
                                The Mount Shitidhar expedition kicks off with a scenic trek from Dhundhi to the base camp, known as Lady Leg, a serene alpine meadow with a stream meandering through it. This tranquil spot serves as the acclimatization camp and also offers striking views of Friendship Peak (5,289 m). The summit push begins in the pre-dawn hours, marking the start of the most demanding phase of the expedition. From here, the route becomes more technical and gear-intensive, with snow-covered slopes and steep inclines challenging your endurance and skill. The ascent to the summit typically takes around six hours (or more), timed to coincide with sunrise, an unforgettable moment when the golden light washes over the Himalayan peaks, making the entire climb even more worthwhile.
                            </p>


                            <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-6 mt-6">Highlights of Mount Shitidhar Climbing </h2>

                            {/* Ladakh Section */}
                            <div className="mb-8 bg-white">
                                <ul>
                                    <li className=' text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Climbing Mount Shitidhar is a complete high-altitude trekking experience, blending breathtaking natural beauty, glimpses of local culture and physical endurance.


                                    </li>
                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span>TThe trail has spectacular views of Himalayan peaks including Hanuman Tibba (5982 m), Deo Tibba (6001 m),  and Indrasan (6221 m). </li>

                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Mount Shitidhar serves as an excellent introduction to Himalayan mountaineering offering the thrill of a semi-technical 5,000+ meter summit, ideal for trekkers looking to transition into high-altitude peak climbing.
                                    </li>


                                </ul>

                            </div>





                            {/* Best Time Section */}
                            <div className="mb-8">
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-6 mt-6">Required Fitness and Technical Climbing Abilities for Climbing Mount Shitidhar </h2>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    The climb to Mount Shitidhar is classified as a semi-technical peak climbing expedition in India, but is still physically demanding and requires precise knowledge of rope techniques, crevasse recovery and understanding of snow-anchors and how to handle altitude sickness, weather shifts and passing through inclined snowy slopes.
                                </p>
                                <ul>

                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Heightened Physical Stamina :</b>The summit push through elevated landscapes through snowy, rocky steep slopes demands excellent physical stamina and cardiovascular endurance.  </li>

                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Fundamental Technical Abilities and Understanding of Mountaineering Equipments :</b>Even though Mount Shitidhar expedition is semi-technical, it is essential for all mountaineers to be aware of fundamental mountaineering equipment and strategies.</li>


                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Increased Respiratory Stamina :</b>Oxygen levels rapidly deplete at high-altitude regions, thus it is essential to have a strong heart and excellent lung capacity for effectively managing tedious physical activity.

                                    </li>
                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Altitude Acclimization : </b>To avoid altitude sickness and battle cold winds, sudden weather changes, it is important to adjust oneself to elevated landscapes.  </li>
                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Physical, Mental Strength and Perseverance : </b>Himalayan peak climbing expeditions test both mental and physical resilience. Sudden shifts in weather can reduce visibility to nothing in a few minutes, and summit push can get difficult. These situations demand the climbers to remain calm and act mindfully.  </li>

                                </ul>
                            </div>

                            <div className="mb-8">
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-6 mt-6">Preparatory Tips to Climb Mount Shitidhar</h2>

                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    Even though the climb to Mount Shitidhar is considered comparatively easier than other Himalayan mountain expeditions, it is essential to prepare beforehand, since embarking on these elevated landscapes cannot be achieved through enthusiasm alone and necessitate proper planning.
                                </p>

                                <ul>
                                    <li className=' text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span>
                                        Following a robust cardiovascular workout routine consisting of jogging, running, biking and weighted star-climbing is crucial.
                                    </li>

                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Resistance training should be taken up for developing muscular strength and endurance.
                                    </li>

                                    < li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Familiarity with fundamental mountaineering gear such as ropes, climbing harness, ice-axes and crampon is necessary. </li>
                                    < li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Consultation with a doctor to ensure overall well-being before a trekking attempt is essential.
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
                                        <li className=' text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Location</b>: Near Manali, Himachal Pradesh</li>
                                        <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Maximum Altitude:</b>5250 meters</li>
                                        <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Grade:</b>Moderate and semi technical</li>
                                        <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Distance:</b> 22 KM (till basecamp and summit)</li>
                                        <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Number of Days:</b>07Nights/08Ddays</li>
                                        <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Best Time for Expedition:</b> April to May, September to October</li>
                                        <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-2'> <span className="text-[#f47a2a] text-xl mr-2">•</span><b>Base Point/Starting and Ending Points:</b> Dhundi</li>
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

export default MountShitidhar;