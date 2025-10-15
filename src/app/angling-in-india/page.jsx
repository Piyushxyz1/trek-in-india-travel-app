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

const AnglingTours = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const [expandedSections, setExpandedSections] = useState({});
    const [currentSlide, setCurrentSlide] = useState(0);
    const activitiesData = activities.filter(activity => activity.activity === "Angling-Tours")


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
            <Banner title="Angling Tours" image="/images/motor-biking-banner.jpg" />
            <Breadcrumb href="/destinations" current="Mountain Biking" />
            <section className='bg-white'>
                <div className=' max-w-4xl md:max-w-6xl  xl:max-w-7xl  mx-auto my-7 '>
                    <div className="destinations-page__intro">
                        <span className="text-[#f47a2a] font-semibold text-[0.8rem] md:[text-0.9rem] xl:text-[1rem]">Angling Tour Packages</span>
                        <h1 className="text-xl sm:text-2xl  xl:text-4xl font-semibold text-[#172541] mt-0 mb-0 md:mb-2 lg:mb-3">Angling Tours in India</h1>
                        <p className=" mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb:0 md:mb-1 lg:mb-2 xl:mb-3">

                        </p>
                    </div>
                    <div className='destinations-page__trek-grades'>
                                    <div className="grid [grid-template-columns:repeat(1,1fr)] justify-center gap-8 mt-2 md:mt-3 lg:mt-4 xl:mt-6 md:grid-cols-2 lg:grid-cols-3   mx-auto py-0 sm:py-2 lg:py-4 xl:py-10  ">


                            {activitiesData.map((activities) => {
                                return (

                                    <ActivitiesCard key={activities.id} activities={activities} renderStars={renderStars} />
                                )

                            })}

                        </div>

                    </div>
                </div>
            </section>


            <section className="destinations-page__section py-8 px-4 sm:px-6 lg:px-8">
                <div className='itinerary-page_container  max-w-4xl md:max-w-6xl  xl:max-w-7xl  mx-auto px-4 md:px-8 '>
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Content Column */}
                        <div className="lg:w-2/3">
                         <span className="text-[#f47a2a] font-semibold text-[0.8rem] md:[text-0.9rem] xl:text-[1rem]">Overview</span>
                            <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-6 mt-6">Angling Tours Overview</h2>

                            <div className="mb-8">
                                <div className="flex items-start">
                                    <div className="flex-1">
                                        <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                            Angling is an interesting activity that is enjoyed by many people who are adventurously inclined. Though, India is not too famous for this activity, but for last few years, it has been gaining popularity as a perfect destination providing exhilarating angling activity. This recreational activity is a pleasure to be enjoyed by many naturalists. In India, there is no dearth of fast flowing rivers. These streams and rivers originate from glaciers and allow perfect points where angling activity can be enjoyed. Some of the rivers where this activity is allowed are.
                                        </p>

                                    </div>
                                </div>
                            </div>

                            <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-6 mt-6">Popular Motor Biking Tours</h2>

                            {/*Upper Ramganga River */}
                           <div className="mb-8 bg-white">
                                <h3 className="text-xl font-semibold text-[#313137] mb-1">Upper Ramganga River:</h3>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">Ramganga River, located in the Jim Corbett National Park. People who visit this place to indulge in angling activity are assisted by fishing guide who take the visitors to appropriate place to enjoy the activity more. Here, the river is supported by unique aquatic life that encompasses the fish eating Ghariyal, Mugger, Common Otter, Fishing Eagles and many more. For anglers, this river is considered to be the most appropriate. People love to catch Rohu, Goonch, Malee and Trout.</p>

                            </div>

                            {/* Ladakh Section */}
                           <div className="mb-8 bg-white">
                                <h3 className="text-xl font-semibold text-[#313137] mb-1">Tirthan Valley:</h3>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    Another beautiful place where people love to enjoy angling is Tirthan Valley, which get its name from the Tirth River, the source of which is Hanskund Peak. The place enjoys pleasant weather all round the year. The Great Himalayan National Park is also located in this area. Emerald meadows, lush green Coniferous forests, snowy peaks, exotic flowers and pristine glaciers make this destination truly divine. The fast moving Tirthan River allows anglers to spot clear pools of fish and this makes the activity all the more interesting.
                                </p>

                            </div>
                            {/* Kumaon Section */}
                           <div className="mb-8 bg-white">
                                <h3 className="text-xl font-semibold text-[#313137] mb-1">Angling in Kashmir:</h3>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    Kashmir is considered as one of the best angling destinations in India. This is because the rivers in Kashmir are crystal clear. There are streams, springs, high altitude lakes, gigantic mountain peaks that are snow capped, verdant meadows, pine forests, and a rich array of flora and fauna, that makes the destination truly divine. This state is visited by anglers from the different parts of the world to enjoy the activity in the beautiful lakes and rivers. Anglers love to catch trout like Gurez, Wangath, Lidder, Lam, Hamal, Bringi, Hirpora, Kokernag, Aharbal, and many more. The angling season starts from the month of April and continues till September.
                                </p>

                            </div>

                            {/* Kali Rriver Section */}
                           <div className="mb-8 bg-white">
                                <h3 className="text-xl font-semibold text-[#313137] mb-1">Angling in Kali River:</h3>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    Angling enthusiasts love to enjoy this activity in the famous Kali River, located in the Himalayan region. Anglers love to catch Mahseer, which is the most common fish species found here. People love to enjoy the famous fish catching activity. This activity has been famous since the time of Britishers who used to enjoy angling as their favorite pass time. A popular sporting fish, the Golden Mahseer is found in great abundance in the Kali river and allows angling enthusiasts to enjoy a great time catching them. The activity is allowed in Pancheshwar, Gaht, Chuka, Jauljibi and Boom.
                                </p>
                            </div>

                            {/* Angling in Sangla Valley */}
                           <div className="mb-8 bg-white">
                                <h3 className="text-xl font-semibold text-[#313137] mb-1">Angling in Sangla Valley:</h3>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    Sangla Valley is another popular angling destination in India. Anglers love to enjoy this activity and it is also the place where the first Trout breeding farm came into existence in the year 1926. An extensive trout hatchery can be found in the river Baspa. Small sized trout is also available in great abundance and people love to enjoy a great catch once in a while. People love to enjoy the whole day at River Baspa.
                                </p>
                                <div className={`read-more-content ${expandedSections['ladakh'] ? 'block' : 'hidden'}`}>
                                    <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                        In India, there are many suitable destinations having fast flowing rivers and streams where this activity can be enjoyed to a considerable extent. These exclusive locations offer amazing angling activity options that is loved and enjoyed by people from all over the world. There is a great variety of fish that makes this activity more interesting.
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

                            {/* Best Time Section */}
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-[#f47a2a] mb-4">Best Season for Angling</h2>
                                <p className="text-[#313137] ">
                                    The best season and time for embarking on a jeep safari tour in Indian Himalayas depends on the region you wish to explore. Ideally, the best time for jeep safari in Ladakh is between the months of May and September when the weather is salubrious and rejuvenating. For a jeep safari tour in Himachal and Uttarakhand, the best time is during the months of May and October, except the monsoon months in between.
                                </p>
                            </div>

                            {/* Why Us Section */}
                            <div className="bg-blue-50 rounded-lg p-6">
                                <h2 className="text-3xl font-bold text-[#f47a2a] mb-4">Why Choose Us ?</h2>
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
                            <div className="sticky top-4">
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


            <CtaButton />
        </>
    )
}

export default AnglingTours