"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import ActivitiesCard from '@/components/activitiesCard/ActivitiesCard';
import activities from '@/components/activitiesCard/activitiesdetail';
import { renderStars } from '@/components/starratings/starratings';
import "../../components/trekdetailspages/trekitinerarydetails/itinerarypage.css"
import Banner from '@/components/banners/Banner';
import Breadcrumb from '@/components/breadcrumbs/Breadcrumb';
import CtaButton from '@/components/ctabutton/CtaButton';
import { FiChevronLeft, FiChevronRight, FiInfo, FiBookOpen, FiMapPin } from 'react-icons/fi';
import TripBookingForm from '@/components/form/TripBookingForm';
import ModalPortal from '@/components/ModalPortal';
import PeakClimbingPackages from '@/components/peakclimbingpackages/PeakClimbingPackages';
import Faq from '@/components/faqs/Faq';
import { Peakclimbingfaq } from '@/components/faqs/faqs';
import HimachalPeakClimbing from '@/components/peakclimbingpackages/HimachalPeakClimbing';
import UttrakhandPeakClimbing from '@/components/peakclimbingpackages/UttrakhandPeakClimbing';


const GarhwalPeakClimbing = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const [expandedSections, setExpandedSections] = useState({});
    const [currentSlide, setCurrentSlide] = useState(0);

    const breadcrumbPath = [
        { label: 'Garhwal Peak Climbing' },

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
            <Banner title="Peak Climbing In Garhwal" image="/images/peak-climbing-banner.jpg" />
            <Breadcrumb path={breadcrumbPath} />
            {/* <section className='packages px-4 sm:px-6 lg:px-8'>
                <div className='w-full  max-w-4xl md:max-w-6xl  xl:max-w-7xl  px-4 py-8 mx-auto md:px-10'>
                    <h2 className="text-xl sm:text-2xl  xl:text-4xl font-semibold text-[#172541] mt-0 mb-0 md:mb-2 lg:mb-3"> Peak Climbing In India</h2>
                    <p className=" mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb:0 md:mb-1 lg:mb-2 xl:mb-3">
                      One of the most exquisite adventures, peak climbing is all about taking over sharp peaks and braving the obstacles offered by rigorous and rough terrains of mountain regions.
                    </p>
                </div>
            </section> */}

            <section className="w-full  max-w-4xl md:max-w-6xl  xl:max-w-7xl  px-4 py-8 mx-auto md:px-10   bg-white text-center mb-2 md:mb-6">
                <span className="text-[#f47a2a] font-semibold text-[0.8rem] md:[text-0.9rem] xl:text-[1rem]">Explore</span>
                <h1 className="text-xl sm:text-2xl  xl:text-4xl font-semibold text-[#172541] mt-0 mb-0 md:mb-2 lg:mb-3">
                    Peak Climbing Tours in Garhwal Himalayas
                </h1>
                <p className="text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] text-[#313137] mb-3 md:mb-4 lg:mb-6 max-w-3xl mx-auto">
                    Discover our selection of peak climbing expeditions in the Garhwal Himalayas of Uttarakhand, along with other high-altitude adventure activities. Challenge yourself with breathtaking summits and unforgettable alpine experiences in Garhwal.
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
                <div className=" py-6 text-left">

                    <UttrakhandPeakClimbing />


                </div>
            </section>


            <section className="bg-white">
                <div className="w-full  max-w-4xl md:max-w-6xl  xl:max-w-7xl  px-4 py-8 mx-auto md:px-10">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Content Column */}
                        <div className="lg:w-2/3">

                            <h2 className="text-xl sm:text-2xl  xl:text-4xl font-semibold text-[#172541] mt-0 mb-0 md:mb-2 lg:mb-3">Peak Climbing Expedition in Garhwal Himalayas, Uttarakhand </h2>

                            <div className="mb-8">
                                <div className="flex items-start">
                                    <div className="flex-1">
                                        <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                            A challenging peak climb among the highest and most spectacular Himalayan peaks!

                                            "Great things are achieved when both men and mountains meet. They are not achieved by simply jostling on the streets."

                                            The most beautiful part of life is that you can mold it the way you want. Undoubtedly, adventure is one of the best ways to experience the most remarkable and memorable days of your life. If an element of thrill is missing in your life, you need to fuel up and embark on an amazing adventure trip to the extensive mountain peaks of the Indian Himalayas.
                                        </p>
                                        <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                            Today, peak climbing is booming at an unbelievable pace in India. Every year, thousands of tourists visit India to scale the high peaks of the Himalayas, bringing back exciting and unforgettable climbing experiences.

                                            Garhwal is undoubtedly the center stage of the Indian Himalayas. Since time immemorial, Garhwal—the land of countless forts or Garhs—has been deeply connected with the Indian people. It embodies a magical truth beyond the general perception, a supreme quality that has attracted pilgrims and sages for centuries. The peaks of Garhwal evoke a sense of eternity, awe, and poetic inspiration. The two holy rivers—the Ganga and the Yamuna—originate here. The Char Dhams are also located in this region. Every Himalayan stone holds sanctity, and the peaks of Garhwal are ideal for thrilling climbing expeditions.
                                        </p>
                                        <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                            Dr. T.G. Longstaff, a seasoned mountaineer and traveler, beautifully remarked on the grandeur of Garhwal’s peaks. He believed that Garhwal is the most beautiful region in all of Asia. Neither the aloof dominance of Mount Everest, the primitive vastness of the Karakoram, the gentler beauty of the Hindu Kush, nor the other regions of Himachal can compare to the enchanting beauty of Garhwal. Lush green valleys, towering mountains, alpine birds, dense forests, wildlife, blooming flowers, and fluttering butterflies together provide a delightful experience for any traveler.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-6 mt-6">Some of the Great Peaks for Climbing Expeditions in Garhwal </h2>

                            {/* Ladakh Section */}
                            <div className="mb-8 bg-white">
                                <h3 className="text-xl font-semibold text-[#313137] mb-1">Black Peak (Bandarpunch) </h3>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    Also known as Kalanag or Black Serpent, Black Peak is located northwest of Bandarpunch in Garhwal. Named for its resemblance to a black cobra, the peak’s northern slope is steep and vertical. Best months to climb: May, June, September, October.
                                </p>
                            </div>

                            {/* Uttarakhand Section */}
                            <div className="mb-8 bg-white">
                                <h3 className="text-xl font-semibold text-[#313137] mb-1">Kamet </h3>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    The second-highest peak in the Garhwal region after Nanda Devi, Kamet rises over 25,000 ft and is situated in northern Garhwal. Best time to climb: July to September.
                                </p>
                            </div>
                            {/* Uttarakhand Section */}


                            <div>
                            <div className="mb-8 bg-white">
                                <h3 className="text-xl font-semibold text-[#313137] mb-1">Arwa Tower</h3>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    Located in the Chamoli district, along the Arwa Spire and Arwa Crest, it is a massive rocky peak with a steep granite wall and a needle-like summit on the eastern ridge.
                                </p>

                              </div>  

                             <div className="mb-8 bg-white">
                                        <h3 className="text-xl font-semibold text-[#313137] mb-1">Neelkanth Peak</h3>
                                        <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                            One of the most accessible yet formidable peaks. With a vertical difference of 3,500m from Badrinath, Neelkanth is known for avalanche-prone faces and volatile weather conditions.
                                        </p>
                              </div>
                                <div className={`read-more-content ${expandedSections['ladakh'] ? 'block' : 'hidden'}`}>


                                    <div className="mb-8 bg-white">
                                        <h3 className="text-xl font-semibold text-[#313137] mb-1">Changabang Peak</h3>
                                        <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                            This north-facing peak offers a world-class climbing experience. Its milky-white granite glow under moonlight gives it a bridal lace appearance—simply awe-inspiring.
                                        </p>
                                    </div>
                                    <div className="mb-8 bg-white">
                                        <h3 className="text-xl font-semibold text-[#313137] mb-1">Pangarchulla Peak</h3>
                                        <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                            The trek to this peak is scenic and challenging, passing through green meadows, remote villages, and snow-covered trails. It's perfect for adventure seekers.
                                        </p>
                                    </div>
                                    <div className="mb-8 bg-white">
                                        <h3 className="text-xl font-semibold text-[#313137] mb-1">Gangotri I, II & III</h3>
                                        <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                        Ranging from 6577m to 6672m, these peaks lie between Jaonli Bamak and Rudugaira Bamak. Technically demanding, best climbed in May, June, and September. 
                                        </p>
                                    </div>
                                    <div className="mb-8 bg-white">
                                        <h3 className="text-xl font-semibold text-[#313137] mb-1">Swargarohini I, II </h3>
                                        <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                            This group includes peaks at 6252m, 6247m, and 6209m. Technically challenging, they offer thrilling climbs on both ice and rock. 
                                        </p>
                                    </div>
                                    <div className="mb-8 bg-white">
                                        <h3 className="text-xl font-semibold text-[#313137] mb-1">Jogin I, II & III </h3>
                                        <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                           Located southwest of Kedartal, these peaks are best approached starting with Jogin II. They offer a visually striking expedition. 
                                        </p>
                                    </div>
                                    <div className="mb-8 bg-white">
                                        <h3 className="text-xl font-semibold text-[#313137] mb-1">Bhagirathi I, II & III </h3>
                                        <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                           These peaks near the Gangotri glacier offer a majestic expedition, surrounded by Shivling, Thalay Sagar, and Meru. Their dramatic snow-capped presence is unforgettable. 
                                        </p>
                                    </div>
                                    <div className="mb-8 bg-white">
                                        <h3 className="text-xl font-semibold text-[#313137] mb-1">Thalay Sagar</h3>
                                        <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                           North of Gangotri, this 6900m peak is known for its difficulty. First approached via the Northwest route, climbing involves icy ascents. Best months: May to September. 
                                        </p>
                                    </div>
                                    <div className="mb-8 bg-white">
                                        <h3 className="text-xl font-semibold text-[#313137] mb-1">Shivling Peak</h3>
                                        <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                           At 6543m, Shivling is a sacred and scenic peak known for its resemblance to the Linga of Lord Shiva and its Alpine-like appearance.  
                                        </p>
                                    </div>
                                    <div className="mb-8 bg-white">
                                        <h3 className="text-xl font-semibold text-[#313137] mb-1">Bhirgupanth</h3>
                                        <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                           Known for its panoramic beauty, Bhirgupanth offers a spectacular backdrop and a unique trekking experience. 
                                        </p>
                                    </div>
                                    <div className="mb-8 bg-white">
                                        <h3 className="text-xl font-semibold text-[#313137] mb-1">Chaukhamba</h3>
                                        <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                           A four-summit massif, Chaukhamba reaches up to 23,418 ft. Among its routes, the south face remains unclimbed. Best months: June, July, and September. 
                                        </p>
                                    </div>
                                    <div className="mb-8 bg-white">
                                        <h3 className="text-xl font-semibold text-[#313137] mb-1">Kedarnath</h3>
                                        <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                           At 3584m, this moderate-level trek starts from Gaurikund and passes through forests and waterfalls, offering a scenic and spiritual experience.
                                        </p>
                                    </div>
                                    <div className="mb-8 bg-white">
                                        <h3 className="text-xl font-semibold text-[#313137] mb-1">Kedar Dome</h3>
                                        <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                          This 16,000 ft peak is part of the Gangotri group, near Kedarnath. The northwest approach is easier compared to the east. Best months: May to October. 
                                        </p>
                                    </div>

                                    <div className="mb-8 bg-white">
                                        <h3 className="text-xl font-semibold text-[#313137] mb-1">Satopanth</h3>
                                        <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                          Located in remote Garhwal, it offers majestic views of Shivling, Thalay Sagar, and Bhagirathi III. Its cultural significance is enhanced by proximity to Gaumukh. 
                                        </p>
                                    </div>
                                    <div className="mb-8 bg-white">
                                        <h3 className="text-xl font-semibold text-[#313137] mb-1">Trishul I, II, III </h3>
                                        <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                          Rising to 23,360 ft, the Trishul group is ideal for mountaineers. Located near Nanda Devi, it presents a rewarding climb for experienced adventurers.  
                                        </p>
                                    </div>

                                </div>
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

export default GarhwalPeakClimbing;