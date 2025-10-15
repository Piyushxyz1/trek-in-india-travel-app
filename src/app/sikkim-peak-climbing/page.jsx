"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import ActivitiesCard from '@/components/activitiesCard/ActivitiesCard';
import activities from '@/components/activitiesCard/activitiesdetail';
import { renderStars } from '@/components/starratings/starratings';
import Banner from '@/components/banners/Banner';
import Breadcrumb from '@/components/breadcrumbs/Breadcrumb';
import "../../components/trekdetailspages/trekitinerarydetails/itinerarypage.css"
import CtaButton from '@/components/ctabutton/CtaButton';
import { FiChevronLeft, FiChevronRight, FiInfo, FiBookOpen, FiMapPin } from 'react-icons/fi';
import TripBookingForm from '@/components/form/TripBookingForm';
import ModalPortal from '@/components/ModalPortal';
import PeakClimbingPackages from '@/components/peakclimbingpackages/PeakClimbingPackages';
import Faq from '@/components/faqs/Faq';
import { Peakclimbingfaq } from '@/components/faqs/faqs';
import SikkimPeakClimbing from '@/components/peakclimbingpackages/SikkimPeakClimbing';


const SikkimPeaks = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const [expandedSections, setExpandedSections] = useState({});
    const [currentSlide, setCurrentSlide] = useState(0);

      const breadcrumbPath = [
    { label: 'Peak climbing' },
    
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
            <Banner title="Peak Climbing In Sikkim" image="/images/peak-climbing-banner.jpg" />
            <Breadcrumb path={breadcrumbPath}/>
            {/* <section className='packages px-4 sm:px-6 lg:px-8'>
                <div className='w-full  max-w-4xl md:max-w-6xl  xl:max-w-7xl  px-4 py-8 mx-auto md:px-10'>
                    <h2 className="text-xl sm:text-2xl  xl:text-4xl font-semibold text-[#172541] mt-0 mb-0 md:mb-2 lg:mb-3"> Peak Climbing In India</h2>
                    <p className=" mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb:0 md:mb-1 lg:mb-2 xl:mb-3">
                      One of the most exquisite adventures, peak climbing is all about taking over sharp peaks and braving the obstacles offered by rigorous and rough terrains of mountain regions.
                    </p>
                </div>
            </section> */}

              <section className="w-full  max-w-4xl md:max-w-6xl  xl:max-w-7xl   px-4 py-8 mx-auto md:px-10   bg-white text-center mb-2 md:mb-6">
     <span className="text-[#f47a2a] font-semibold text-[0.8rem] md:[text-0.9rem] xl:text-[1rem]">Explore</span>
      <h2 className="text-xl sm:text-2xl  xl:text-4xl font-semibold text-[#172541] mt-0 mb-0 md:mb-2 lg:mb-3">
        Explore Sikkim Peak Climbing Packages In India
      </h2>
      <p className="text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] text-[#313137] mb-3 md:mb-4 lg:mb-6 max-w-3xl mx-auto">
        Discover our selection of various peak climbing packages for you..
      </p>

      {/* Tabs Section */}
      <div className="mb-4 relative">
        {/* Tabs Container */}
        <div
          id="tabs-container"
          className="
            flex 
            gap-2 md:gap-3 
            justify-start md:justify-center 
            overflow-x-auto 
            scrollbar-hide 
            md:flex-wrap 
            w-full 
            px-8 md:px-2
            scroll-smooth
          "
        >
        </div>

        {/* Right Arrow (visible on mobile) */}
        <button 
          className="
            md:hidden absolute right-0 bottom-0 translate-y-[110%] transform mr-1
            z-10 
            rounded-full 
            w-7 h-7 
            flex items-center justify-center 
            shadow 
            transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#ffffff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Content Section */}
      <div className="py-6 text-left">
   
    <SikkimPeakClimbing />
   

      </div>
    </section>


            <section className="bg-white">
                 <div className="w-full  max-w-4xl md:max-w-6xl  xl:max-w-7xl  px-4 py-8 mx-auto md:px-10">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Content Column */}
                        <div className="lg:w-2/3">

                            <h1 className="text-xl sm:text-2xl  xl:text-4xl font-semibold text-[#172541] mt-0 mb-0 md:mb-2 lg:mb-3">Peak Climbing in Sikkim Himalayas - A Growing Adventure Sport!</h1>
                           
                            <div className="mb-8">
                                <div className="flex items-start">
                                    <div className="flex-1">
                                        <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                            One of the most exquisite adventures, peak climbing is all about taking over sharp peaks and braving the obstacles offered by rigorous and rough terrains of mountain regions. Gradually taking up as a favourite sport amongst adventure aficionados, peak climbing takes extreme guts, physical endurance and mental strength to get to the top of the peak. Offering an imperative array of high mountain peaks, mesmerizing scenic beauty and deep wilderness; Indian Himalayas are an apt choice to venture on an exciting and thrilling journey of peak climbing while witnessing brilliant views of picturesque surroundings and defying the challenges of rough terrains.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-6 mt-6">Best Mountaineering Places in India</h2>

                            {/* Ladakh Section */}
                           <div className="mb-8 bg-white">
                                <h3 className="text-xl font-semibold text-[#313137] mb-1">Ladakh</h3>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    The regions of Sikkim, Himachal Pradesh, Jammu & Kashmir and Uttarakhand, prove to be the best of the destinations in India to embark on a mountain climbing expedition. Offering you unmatched challenges of walking over glacial beds, crossing rocky moraines, climbing steep rock faces and ascending perpendicularly sharp slopes; a peak climbing adventure in these regions also offer you opportunities to witness spellbinding beauty of verdant oak and pine forests, high altitude alpine meadows, rhododendron bushes, bubbling streams and enchanting glacial lakes. Some of the toughest peaks to climb in these regions include Mount Shivlinga, Kedar Dome, Bhagirathi group of peaks, Mount Kamet, Mount Satopanth and Mount Trishul.
                                </p>
                            </div>

                            {/* Uttarakhand Section */}
                           <div className="mb-8 bg-white">
                                <h3 className="text-xl font-semibold text-[#313137] mb-1">Best Time For Peak Expedition in India</h3>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    The ideal time for peak climbing in India falls between the months starting mid-June to September/mid-October. Even though, these months are quite favourable for peak climbing, it is still recommended to gain an insight in weather and snow conditions before embarking on the expedition.
                                </p>
                            </div>
                            {/* Uttarakhand Section */}
                           <div className="mb-8 bg-white">
                                <h3 className="text-xl font-semibold text-[#313137] mb-1">Why Embark on a Peak Climbing With Us?</h3>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    We offer exclusive deals and packages for peak climbing in Himalayas. With our carefully designed peak climbing packages, we make sure that you get ample time for acclimatization while venturing on this thrilling expedition. For beginners, we also make sure that they get enough training and guidance by expert climbers before undertaking the adventure. Leaving no stones unturned in making your dream of peak climbing a reality, you can trust us for providing you best of the services that include but, are not limited to the following.
                                </p>

                                <ul className={`read-more-content ${expandedSections['ladakh'] ? 'block' : 'hidden'}`}>
                                    <li className="text-[#313137]  mb-4">Arrangements for knowledgeable and experienced mountaineering guides and climbing experts.</li>
                                    <li className="text-[#313137]  mb-4">Arrangements for necessary trekking/mountaineering permits.</li>
                                    <li className="text-[#313137]  mb-4">Arrangements for trekking and mountaineering gears including fix ropes, tents, sleeping bags, mattress, oxygen cylinders and first aid kits.</li>
                                    <li className="text-[#313137]  mb-4">Arrangements for accommodations including hotel stays, village homestays and camps.</li>
                                    <li className="text-[#313137]  mb-4">Provisions for sight-seeing with experienced local guides.</li>
                                    <li className="text-[#313137]  mb-4">Arrangements for kitchen staff, cooks, helpers and cooking equipment.</li>
                                </ul>
                                <button
                                    onClick={() => toggleSection('ladakh')}
                                    className="read-more-btn text-[#f47a2a] font-medium hover:text-blue-800 transition flex items-center"
                                >
                                    {expandedSections['ladakh'] ? 'Read Less' : 'Read More'}
                                    <FiChevronRight className={`ml-1 transition-transform ${expandedSections['ladakh'] ? 'rotate-90' : ''}`} />
                                </button>
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
 
 
<Faq faqs={Peakclimbingfaq} />




        </>
    )
}

export default SikkimPeaks;