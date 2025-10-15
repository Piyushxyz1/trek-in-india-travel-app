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



const TribalTreks = () => {
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
            <Banner title="Tribal Treks In India" image="/images/jeep-safari-tours.jpg" />
            <Breadcrumb href="/destinations" current="Tribal Treks" />



            <section className="destinations-page__section mt-8 ">
                <div className='itinerary-page_container  max-w-4xl md:max-w-6xl  xl:max-w-7xl  mx-auto px-4 md:px-8 '>
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Content Column */}
                        <div className="lg:w-2/3">
                            <span className=" text-[#f47a2a] font-bold">Tribal Treks</span>
                            <h1 className="text-xl sm:text-2xl  xl:text-4xl font-semibold text-[#172541] mt-0 mb-0 md:mb-2 lg:mb-3">Tribal Treks In India</h1>
                            <p className=" mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb:0 md:mb-1 lg:mb-2 xl:mb-3">
                                In India, trekking activity is gaining a lot of popularity. People love to enjoy the natural beauty and attractions of the country while indulging in this adventurous activity. These days, a variation of this activity is gaining immense popularity and that is trekking in the tribal areas
                            </p>


                            <h2 className='text-[2rem] font-semibold leading-[1.2] text-[#172541] mb-4'>
                                Top Places For Tribal Treks In India
                            </h2>
                           <div className="mb-8 bg-white">
                                <h3 className="text-xl font-semibold text-[#313137] mb-1">Tawang Trekking the Bailey Trail:</h3>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    The Bailey Train is one of the renowned tribal treks, that is also one of the historic route. This route was taken by two British officers, Capt. HT Morshed and Lt. Col. F M Bailey. This trek is also known as Bailey Trail these days and it passes through the Eastern Himalayas pristine forests. In this forest region, the major trees that are found are oak, pine and rhododendrons. While embarking on this lovely trek, trekkers can enjoy the magnificent views of scenic landscapes all around them. Kangto and Gorichen peaks can also be enjoyed from this trek route. Monpa tribe is the major tribe located in this region.
                                </p>
                            </div>
                           <div className="mb-8 bg-white">
                                <h3 className="text-xl font-semibold text-[#313137] mb-1">Tashingang Village to Payangdam Trek:</h3>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    This trek begins from Pasighat and to reach here, one has to travel via Dibrugarh. From Pasighat, one has to move to Janging where trekkers can stay overnight in tented accommodation. While passing through Janging, Tuting, and Tashigang village, a lot of scenic beauty can be enjoyed and admired. Trekkers love to spot some of the rare flora and fauna species, while passing through this route. Upper Pyangdam, Tatipuri, Mankota, Singha, Davokota, Lower Payangdam and Bolang areas also need to be passed before returning to Pasighat. The entire area is blessed with nature's bounties.
                                </p>
                            </div>
                           <div className="mb-8 bg-white">
                                <h3 className="text-xl font-semibold text-[#313137] mb-1">Monpa Tribal Rhododendrons Trek:</h3>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    Arunachal Pradesh is a beautiful state located in the North East of India. The state has been blessed with amazing natural beauty, virgin faunal and floral varieties, evergreen forests, roaring rivers and turbulent streams, deep gorges and more and trekkers love to go on this trek. The trek begins from Tezpur/Nameri, Namsu Village, Sangti, Sela Pass, Bangachang, Mokto Village, Shanu Village, Tawang, Bomdila, and back to Tezpur.
                                </p>
                            </div>
                           <div className="mb-8 bg-white">
                                <h3 className="text-xl font-semibold text-[#313137] mb-1">Monpa Tribal Trek:</h3>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    Monpa Tribal Trek is also located in Arunachal Pradesh and offers amazing natural beauty all around. The state offers a wide range of interesting activities besides trekking like river rafting, mountaineering and more. This trek begins from Nameri Dirang, passes through Thembang, Semnak, Lagam, Chander, Namshu, Sangti, and then back to Tawang. While enjoying this trek, people come across various tribal settlements that give them a lot of information about the way of living of tribals.
                                </p>
                            </div>
                           <div className="mb-8 bg-white">
                                <h3 className="text-xl font-semibold text-[#313137] mb-1">Tawang Meghalaya Kaziranga ECO Camp:</h3>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    This is a popular ECO Camp in Assam. This trek begins from Guwahati, and passes through the Shillong Peak. From Shillong Peak, one moves on to Tezpur, Bhulakpong, Dirang, Tawang, Zimethang, Bomdila, Tezpur, Kaziranga, and then back to Guwahati. At Zimethang, trekkers can visit the famous Buddhist Monastery located in this area. While passing through Kaziranga, they can enjoy a visit to the famous National Park. People love to enjoy the elephant ride and jeep safari while exploring the national park and spotting wildlife in their natural habitat.
                                </p>
    
                            </div>
                           <div className="mb-8 bg-white">
                                <h3 className="text-xl font-semibold text-[#313137] mb-1">Assam Nagaland Festival Tour:</h3>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                Nagaland and Assam are two beautiful Indian states located in the north east of the country but have not been explored a lot. Visitors love to enjoy and find out more about the rich Nagaland culture and immense beauty of Assam. Many people visit these places during the famous Hornbill Festival, during which they can enjoy the traditional songs, dances and culture of these places.
                                </p>
    
                            </div>
                           <div className="mb-8 bg-white">
                                <h3 className="text-xl font-semibold text-[#313137] mb-1">Tawang Kaziranga:</h3>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                              People love to visit Tawang and Kaziranga, both famous for a variety of reasons. In Tawang, they can visit the famous Tawang Monastery, Gorsham Chorten, PT Tso, and many more attractions. In Kaziranga National Park, they can visit the famous National Park, where they can enjoy spotting a variety of wildlife in its natural habitat.
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

export default TribalTreks;