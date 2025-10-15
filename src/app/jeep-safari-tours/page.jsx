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

const JeepSafari = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const [expandedSections, setExpandedSections] = useState({});
    const [currentSlide, setCurrentSlide] = useState(0);
    const activitiesData = activities.filter(activity => activity.activity === "Jeep-Safari")


    const breadcrumbPath = [
        { label: 'Jeep safari' },

    ];



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
            <Banner title="Jeep Safari Tours" image="/images/jeep-safari-tours.jpg" />
            <Breadcrumb path={breadcrumbPath} />


            <section className="bg-white">
                <div className='w-full  max-w-4xl md:max-w-6xl  xl:max-w-7xl  px-4 py-8 mx-auto md:px-10'>

                    <h1 className="text-xl sm:text-2xl  xl:text-4xl font-semibold text-[#172541] mt-0 mb-0 md:mb-2 lg:mb-3">Jeep Safari Tour Packages</h1>
                    <p className=" mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb:0 md:mb-1 lg:mb-2 xl:mb-3">
                        Checkout our best of Jeep Safari Tour Packages
                    </p>
                    <div className="grid [grid-template-columns:repeat(1,1fr)] justify-center gap-8 mt-2 md:mt-3 lg:mt-4 xl:mt-6 md:grid-cols-2 lg:grid-cols-3 ">

                        {activitiesData.map((activities) => {
                            return (

                                <ActivitiesCard key={activities.id} activities={activities} renderStars={renderStars} />
                            )

                        })}

                    </div>
                </div>
            </section>

            <section className="bg-white">
                <div className="w-full  max-w-4xl md:max-w-6xl  xl:max-w-7xl  px-4 py-8 mx-auto md:px-10">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Content Column */}
                        <div className="lg:w-2/3">
                            <h2 className="text-xl sm:text-2xl  xl:text-4xl font-bold mb-0 md:mb-1 lg:mb-2 xl:mb-3 text-[#172541]">Jeep Safari in Indian Himalayas - An Introduction!</h2>

                            <div className="mb-8">
                                <div className="flex items-start">
                                    <div className="flex-1">
                                        <p className="mb-3 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] text-justify">
                                            According to many people, mountains are only meant for adventure activities like mountaineering, trekking and mountain biking. Well! that is actually a misconception. Mountains also offer great opportunities for jeep safari tours...
                                        </p>
                                        <p className="mb-3 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] text-justify">
                                            Blessed with diverse hilly landscapes and varied topographies, India is gradually becoming a favourite destination for adventure aficionados who love to explore mountain beauty sitting in their 4X4 vehicles, witnessing unmatched scenic vistas simultaneously, braving the challenges of rugged terrains and craggy roads. A jeep safari expedition in India can be best experienced in Himalayan regions of Ladakh, Garhwal, Kumaon and Himachal.
                                        </p>
                                        <div className={`read-more-content ${expandedSections['intro'] ? 'block' : 'hidden'}`}>
                                            <p className="text-[#313137] ">
                                                Taking you through high Himalayan roads, a jeep safari offers you mesmerizing vistas of snow-draped Himalayan peaks and ample opportunities to bedazzled with the azure beauty of high altitude lakes. Well! that is not all, on a jeep safari, you can also experience a melange of cultures, soak your souls in deep spirituality and witness an endemic Himalayan wildlife.
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => toggleSection('intro')}
                                            className="read-more-btn text-[#f47a2a] font-medium hover:text-blue-800 transition flex items-center"
                                        >
                                            {expandedSections['intro'] ? 'Read Less' : 'Read More'}
                                            <FiChevronRight className={`ml-1 transition-transform ${expandedSections['intro'] ? 'rotate-90' : ''}`} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-6 mt-6">Popular Jeep Safari Destinations</h2>

                            {/* Ladakh Section */}
                            <div className="mb-8 bg-white">
                                <h3 className="text-xl font-semibold text-[#313137] mb-1">Ladakh</h3>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    The most popular and inarguably, the favourite jeep safari destination in India is the mystical land of Ladakh. The Manali-Leh tour in the region is the most popular amongst adventure enthusiasts...
                                </p>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    Known as the land of high passes, Ladakh Jeep Safari also provides you with unmatched thrills of crossing some of the world's highest mountain passes and overcoming the challenges of harsh and unpredictable weather conditions. On a jeep safari expedition in Ladakh, you also get ample opportunities to feast your eyes with hypnotic beauty of its picturesque Tso Moriri and Pangong Tso lakes known for their picture postcard perfect beauty.
                                </p>
                                <div className={`read-more-content ${expandedSections['ladakh'] ? 'block' : 'hidden'}`}>
                                    <p className="text-[#313137] ">
                                        Soaked in deep Buddhist culture, Ladakh Safari trip also allows you to have a glimpse at its enticing monasteries. Perched atop hills and sitting amidst tranquil locations, a tour of these monasteries is sure to fill your hearts with deep peace and solitude.
                                    </p>
                                </div>
                                <button
                                    onClick={() => toggleSection('ladakh')}
                                    className="read-more-btn text-[#f47a2a] font-medium hover:text-blue-800 transition flex items-center"
                                >
                                    {expandedSections['ladakh'] ? 'Read Less' : 'Read More'}
                                    <FiChevronRight className={`ml-1 transition-transform ${expandedSections['ladakh'] ? 'rotate-90' : ''}`} />
                                </button>
                            </div>

                            {/* Uttarakhand Section */}
                            <div className="mb-8 bg-white">
                                <h3 className="text-xl font-semibold text-[#313137] mb-1">Uttarakhand</h3>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    Known as the land of Gods, Uttarakhand sits amidst beautiful peaks of Garhwal Himalayas and provides for some of the most adventurous and exhilarating jeep safari holidays in India...
                                </p>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    Adding a spiritual touch to your adventurous expedition, a safari holiday in Uttarakhand takes you through the pious land of Rishikesh where you can also indulge yourselves in the fun of water rafting. Further, traversing through the regions of Barkot, Yamunotri, Harsil, Gangotri, Auli and Uttarkashi; a jeep safari tour through Uttarakhand not only offers you opportunities to pay your homage in sacred 'Char Dhams' but, also provides you with unmatched spectacles of scenic landscapes that fill your hearts with joy, freshness and spirituality.
                                </p>
                                <div className={`read-more-content ${expandedSections['uttarakhand'] ? 'block' : 'hidden'}`}>
                                    <p className="text-[#313137] ">
                                        For wildlife enthusiasts, a jeep safari tour through the regions of Binsar, Munsyari and finally ending in the Corbett National Park, is an experience to die for. Offering you mesmerizing vistas of snow-covered peaks of Trishul, Chaukhamba, Nanda Devi and Kedarnath, unfolding spellbinding beauty of numerous waterfalls and last but not the least, presenting you with the exhilaration and excitement of spotting an elusive tiger hidden in thick grasslands of the Corbett reserve; a jeep safari tour in Uttarakhand is a perfect choice for those who crave for adventures and thrills.
                                    </p>
                                </div>
                                <button
                                    onClick={() => toggleSection('uttarakhand')}
                                    className="read-more-btn text-[#f47a2a] font-medium hover:text-blue-800 transition flex items-center"
                                >
                                    {expandedSections['uttarakhand'] ? 'Read Less' : 'Read More'}
                                    <FiChevronRight className={`ml-1 transition-transform ${expandedSections['uttarakhand'] ? 'rotate-90' : ''}`} />
                                </button>
                            </div>

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

export default JeepSafari