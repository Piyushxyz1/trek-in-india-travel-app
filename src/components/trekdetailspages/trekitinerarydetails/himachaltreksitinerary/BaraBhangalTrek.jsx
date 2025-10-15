"use client"
import React from 'react';

import { useState } from 'react';
import Breadcrumb from '@/components/breadcrumbs/Breadcrumb';
import ImageGrid from '../ImageGrid';
import "../itinerarypage.css";
import Incursion from '@/components/incursions/Incursion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FiChevronLeft, FiChevronRight, FiInfo, FiBookOpen, FiMapPin } from 'react-icons/fi';
import TrekCardSlider from '@/components/treckcardslider/TrekCardSlider';
import trekData from '../../../trekdestinationcard/trekdata'; 

const BaraBhangalTrek= () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const [expandedSections, setExpandedSections] = useState({});
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeTab, setActiveTab] = useState('inclusions');
    const [openDay, setOpenDay] = useState(null);
         const breadcrumbPath = [
{ href: "/trekking-in-himachal", label: "Trekking in Himachal" },
  { label: "Bara Bhangal Trek" },
];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

  const tabs = [
    { name: "Inclusions", key: "inclusions" },
    { name: "Exclusions", key: "exclusions" },
    { name: "Cancellation Policy", key: "cancellation" }
  ];

  const content = {
    inclusions: `
1. Accommodation:
  - Guest house in Pipalkoti (Day 1 & 5)
  - Ghangharia (Day 2, 3 & 4)

2. Meals (Veg + Egg):
  - All meals from Day 1 dinner to Day 5 dinner
  - Morning & evening tea with snacks

3. Support:
  - Base camp manager, trek leader, chef, local guides & support staff

4. Equipment:
  - Sleeping bags, tents, mattresses, kitchen utensils
  - Trekking gear: helmets, ropes, ice axe, etc.

5. First Aid:
  - Medical kit, stretcher, oxygen cylinder, BP monitor

6. Transportation:
  - Rishikesh ↔ Pipalkoti, Pipalkoti ↔ Govindghat/Badrinath


  `,
    exclusions: `
- Insurance (Mandatory)
- Food during transit
- Personal expenses
- Mules/porters for personal luggage
- Emergency evacuation, hospitalization
- Anything not listed in inclusions

Optional (paid extra):
  - Satellite phone
  - Gamow/PAC HAPO bag
  - AED (Automated Defibrillator)
  `,
    cancellation: `
Cancellation Policy:
- 90% refund if cancelled 30+ days before trek
- 70% refund if cancelled 15-30 days before trek
- 50% refund if cancelled 7-15 days before trek
- No refund if cancelled <7 days before trek
- Refunds processed within 7–10 working days
`
  };

  const TrekData = trekData.filter(trek => trek.region === 'Himachal');

  const toggleDay = (day) => {
    setOpenDay(openDay === day ? null : day);
  };


  const images = [
    '/images/trekking-tours/himachal/itinerary-images/bara-bhangal-1.webp',
    '/images/trekking-tours/himachal/itinerary-images/bara-bhangal-2.webp',
    '/images/trekking-tours/himachal/itinerary-images/bara-bhangal-3.webp',
    '/images/trekking-tours/himachal/itinerary-images/bara-bhangal-4.webp',
    '/images/trekking-tours/himachal/itinerary-images/bara-bhangal-5.webp',
    
  ];

  const activities = [
    {
      title: 'Photoshoot Session',
      description: 'Professional photoshoot with our team',
      date: '2025-04-15'
    },
    {
      title: 'Editing Workshop',
      description: 'Learn advanced photo editing techniques',
      date: '2025-04-02'
    },
  ];


    const slides = [
        {
            image: "/images/beas-kund.webp",
            alt: "Jeep Safari in Himalayas",
            caption: "Explore the majestic Himalayas by Jeep"
        },
        {
            image: "/images/banner3.jpg",
            alt: "Ladakh Jeep Safari",
            caption: "The rugged beauty of Ladakh"
        },
        {
            image: "/images/banner10.webp",
            alt: "Uttarakhand Jeep Safari",
            caption: "Spiritual journey through Uttarakhand"
        }
    ];

  return (


    <>
                <Breadcrumb path={breadcrumbPath} />
<section className='itinerary-page-section-first'>
        <div className='itinerary-page_container  max-w-4xl md:max-w-6xl  xl:max-w-7xl  mx-auto px-4 md:px-8 '>

          <h1 className="text-xl sm:text-2xl  xl:text-4xl font-semibold text-[#172541] mt-0 md:mt-1 mb-0 md:mb-2 xl:mb-4">Hampta Pass Trekking Tours</h1>


       
                    <div className='itinerary-package-desc'>
                        <div className="itinerary-package-desc-details">
                            <div className="itinerary-package-desc-detail-grid">
                                <div className="itinerary-package-desc-detail-item">
                                    <div className="detail-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="label">Area</div>
                                        <div className="value">Zanskar (Ladakh)</div>
                                    </div>
                                </div>

                                <div className="itinerary-package-desc-detail-item">
                                    <div className="detail-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="label">Season</div>
                                        <div className="value">Mid Jan to End Feb</div>
                                    </div>
                                </div>

                                <div className="itinerary-package-desc-detail-item">
                                    <div className="detail-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 3L4 9v12h16V9l-8-6zm-2.25 9.5c.69 0 1.25.56 1.25 1.25S10.44 15 9.75 15s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25zM17 18h-1v-1.5H8V18H7v-7h1v4.5h3.5V12H17v6z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="label">Altitude</div>
                                        <div className="value">3850 mts/12628 ft</div>
                                    </div>
                                </div>

                                <div className="itinerary-package-desc-detail-item">
                                    <div className="detail-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 4H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="label">Duration</div>
                                        <div className="value">13 days</div>
                                    </div>
                                </div>

                                <div className="itinerary-package-desc-detail-item">
                                    <div className="detail-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 2.8L18 10v8h-2v-6H8v6H6v-8l6-4.2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="label">Grade</div>
                                        <div className="value">Hard</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>

      </section>
      <ImageGrid images={images} activities={activities} />

      <section className='itinerary-overview-section'>

        <div className='max-w-4xl md:max-w-6xl  xl:max-w-7xl  mx-auto px-4 md:px-8'>
     <h2 className="text-xl sm:text-2xl  xl:text-4xl font-semibold text-[#172541] mt-0 md:mt-1 mb-0 md:mb-2 xl:mb-4">Overview</h2>
          <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">The major attraction remains the Deo Tibba peak, which looms at an elevation of 6,001 meters, and is surrounded by several other 6thousander peaks. Indrasan at an elevation of 6,221 meters also dominates the region and is a treat to the eyes from the vicinity of Hampa Pass. One of the popular alpine treks in Himachal Pradesh, the Hampta Pass trek occupies the mind of devoted trekkers during the peak summer season in India. Lying at an elevation of about 4,268 meters, the Hampta Pass stands as a bridge that connects the Kullu valley with Lahaul. The Hampta Pass trek passes through thick forest of walnut, oak and pine trees, lush green alpine meadows crisscrossed by numerous small streams and several villages tucked in the mountains. The journey truly is a threshold of natural spectrum and remote culture. All though the entire journey is easy to moderate but it turns out to be the most difficult part when it embarks upon a steep climb to Hampta Pass from Balu Ka Gera. The tracks at certain levels become tricky and narrow and further the trail slows down when you step on to the thick bed of snow.</p>
          <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">The Hampta Pass trek, which is one of the high altitude treks in the Indian Himalayan region, stretches from an elevation of 2,050 meters to 4,268 meters. The actual trail commences from Prini, which is a few hours of drive from Manali. From Prini the trail leads to Pandu Ropa via the village of Saythen. From a certain point on this trail one can capture the panoramic view of the Kullu valley. The trail from Pandu Ropa continues to Chikka, which is further 5 - 6 hours of trek uphill through thick forest and meadows dotted with colourful flowers. Here you will encounter a few patches of snow. The trek to Hampta Pass then is followed by Balu Ka Gera and thereafter descends to Chattru. From Chattru the route turns to Solang, which is a steep trek downhill and thereafter wheels to Manali.</p>
          <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">The Hampta Pass trek is one of the most beautiful alpine treks in Himachal Pradesh, which is recommended for experienced trekkers. The best time to hit the tracks is during the months of May, June, July and September and October.</p>

        </div>

      </section>

      <section className="itinerary-section py-4 ">
              <div className='itinerary-content max-w-4xl md:max-w-6xl  xl:max-w-7xl  mx-auto px-4 md:px-8'>
        <div className="flex flex-col lg:flex-row gap-8">
                        {/* Content Column */}
                        <div className="lg:w-2/3">
                            <span className="text-[#f47a2a] font-semibold text-[0.8rem] md:[text-0.9rem] xl:text-[1rem]">Itinerary</span>
                            <h2 className="text-xl sm:text-2xl  xl:text-4xl font-semibold text-[#172541] mt-0 md:mt-1 mb-0 md:mb-2 xl:mb-4">Frozen River Chadar Trek Itinerary</h2>
                            <div className="itinerary-flex-container">
                                <div className="timeline">

                                    {/* DAY 1 */}
                                    <div className="timeline-item">
                                        <div className="timeline-content">
                                            <h3 onClick={() => toggleDay(1)} className="dropdown-title">
                                                <span><b>Day 01:</b>Delhi - Leh (Complete Rest in Leh for acclimatisation)</span>
                                                <FontAwesomeIcon icon={openDay === 1 ? faChevronUp : faChevronDown} />
                                            </h3>
                                            <div className={`dropdown-content ${openDay === 1 ? 'open' : ''}`}>
                                                <p>Take the morning flight for Leh. Check into the guest house and relax the whole day. This is necessary for getting acclimatised. Overnight at the guesthouse.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* DAY 2 */}
                                    <div className="timeline-item">
                                        <div className="timeline-content">
                                            <h3 onClick={() => toggleDay(2)} className="dropdown-title">
                                                <span><b>Day 02:</b>Leh - Shey - Thiksey - Hemis</span>
                                                <FontAwesomeIcon icon={openDay === 2 ? faChevronUp : faChevronDown} />
                                            </h3>
                                            <div className={`dropdown-content ${openDay === 2 ? 'open' : ''}`}>
                                                <p>On this day you will go a sightseeing trip to some ancient monasteries in this area.</p>
                                                <p>Shey Gompa is about 15 kms from Leh. It used to be the summer palace of the kings of Ladakh. There are lots of Stupas and Gompas built around the palace. Shey palace was built by Deldan Namgyal in the beginning of 17'Th century AD. Main attraction in Shey is the 12m Shakyamuni Buddha statue inside the Dresthang Gompa.</p>
                                                <p>Thiksey Gompa, close to Shey is about 17 kms from Leh. The monastery is considered to be one of the most beautiful in Ladakh and belongs to the Gelukspa order.</p>
                                                <p>Hemis, about 45 kms south of Leh it is one of the most famous and largest monastery in Ladakh. It belongs to the Drukpa order and was founded in the early 17'Th century. The setting is perfect with the monastery cradled in a lovely valley, surrounded by streams and fronted by long Mani walls. Overnight stay at the guest house.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Continue same pattern for the rest of the days */}

                                    <div className="timeline-item">
                                        <div className="timeline-content">
                                            <h3 onClick={() => toggleDay(3)} className="dropdown-title">
                                                <span><b>Day 03:</b>Leh - Chilling(5 hrs drive)</span>
                                                <FontAwesomeIcon icon={openDay === 3 ? faChevronUp : faChevronDown} />
                                            </h3>
                                            <div className={`dropdown-content ${openDay === 3 ? 'open' : ''}`}>
                                                <p>In the morning drive to chilling along with our porters from Pishu village of Zanskar, visit coppersmith workshops. Dinner and overnight stay at guest house.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="timeline-item">
                                        <div className="timeline-content">
                                            <h3 onClick={() => toggleDay(4)} className="dropdown-title">
                                                <span><b>Day 04:</b>Chilling - Zaribago</span>
                                                <FontAwesomeIcon icon={openDay === 4 ? faChevronUp : faChevronDown} />
                                            </h3>
                                            <div className={`dropdown-content ${openDay === 4 ? 'open' : ''}`}>
                                                <p>We begin our Chadar trek by walking on the frozen Zanskar river from Chilling to Zaribago. The trek is of about 5 hours. Overnight at Camp.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="timeline-item">
                                        <div className="timeline-content">
                                            <h3 onClick={() => toggleDay(5)} className="dropdown-title">
                                                <span><b>Day 05:</b>Day 05: Zaribago - Deepyokma</span>
                                                <FontAwesomeIcon icon={openDay === 5 ? faChevronUp : faChevronDown} />
                                            </h3>
                                            <div className={`dropdown-content ${openDay === 5 ? 'open' : ''}`}>
                                                <p>Walk on the frozen Zanskar river for about 4 hours from Zaribago to Deepyokma. Overnight at Camp.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="timeline-item">
                                        <div className="timeline-content">
                                            <h3 onClick={() => toggleDay(6)} className="dropdown-title">
                                                <span><b>Day 06:</b> Deepyokma - Nyrakpulu</span>
                                                <FontAwesomeIcon icon={openDay === 6 ? faChevronUp : faChevronDown} />
                                            </h3>
                                            <div className={`dropdown-content ${openDay === 6 ? 'open' : ''}`}>
                                                <p>Walk for almost 4 to 5 hours from Deepyokma to reach Nyarakpulu below the Nyarak village. Over night at Camp.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="timeline-item">
                                        <div className="timeline-content">
                                            <h3 onClick={() => toggleDay(7)} className="dropdown-title">
                                                <span><b>Day 07:</b>Nyarakpulu - Lingshed</span>
                                                <FontAwesomeIcon icon={openDay === 7 ? faChevronUp : faChevronDown} />
                                            </h3>
                                            <div className={`dropdown-content ${openDay === 7 ? 'open' : ''}`}>
                                                <p>Frozen River (Chadar) TrekLeaving Nyarakpulu it's a one hour walk to the small village of Lingshed. Enjoy the comfort and cozy atmosphere of a private house with central heating.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="timeline-item">
                                        <div className="timeline-content">
                                            <h3 onClick={() => toggleDay(8)} className="dropdown-title">
                                                <span><b>Day 08:</b>Lingshed</span>
                                                <FontAwesomeIcon icon={openDay === 8 ? faChevronUp : faChevronDown} />
                                            </h3>
                                            <div className={`dropdown-content ${openDay === 8 ? 'open' : ''}`}>
                                                <p>Spend rest of the day in the warmth of a private home in Lingshed. Explore the nearby monasteries, meet the monks and hospitable people of the village. Overnight stay at the private home.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="timeline-item">
                                        <div className="timeline-content">
                                            <h3 onClick={() => toggleDay(9)} className="dropdown-title">
                                                <span><b>Day 09:</b>Lingshed - Nyarakpulu</span>
                                                <FontAwesomeIcon icon={openDay === 9 ? faChevronUp : faChevronDown} />
                                            </h3>
                                            <div className={`dropdown-content ${openDay === 9 ? 'open' : ''}`}>
                                                <p>Lingshed to Nyarakpulu - a walk of about five hours to the campsite.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="timeline-item">
                                        <div className="timeline-content">
                                            <h3 onClick={() => toggleDay(10)} className="dropdown-title">
                                                <span><b>Day 10:</b>Nyarakpulu - Tso Mopoaldar</span>
                                                <FontAwesomeIcon icon={openDay === 10 ? faChevronUp : faChevronDown} />
                                            </h3>
                                            <div className={`dropdown-content ${openDay === 10 ? 'open' : ''}`}>
                                                <p>Nyarakpulu to Tso Mopoaldar a four hour walk to the campsite.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <div className="timeline-content">
                                            <h3 onClick={() => toggleDay(11)} className="dropdown-title">
                                                <span><b>Day 11:</b>Tso Mopoaldar - Tilatdo</span>
                                                <FontAwesomeIcon icon={openDay === 11 ? faChevronUp : faChevronDown} />
                                            </h3>
                                            <div className={`dropdown-content ${openDay === 11 ? 'open' : ''}`}>
                                                <p >Frozen River (Chadar) Trek Mopoaldar to Tilatdo - another day of walking about 5 hours.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <div className="timeline-content">
                                            <h3 onClick={() => toggleDay(12)} className="dropdown-title">
                                                <span><b>Day 12:</b>Tilatdo - Chilling - Leh</span>
                                                <FontAwesomeIcon icon={openDay === 12 ? faChevronUp : faChevronDown} />
                                            </h3>
                                            <div className={`dropdown-content ${openDay === 12 ? 'open' : ''}`}>
                                                <p>From Tilatdo walk up to Chilling village from where a Jeep will take you back to the hotel in Leh by evening. Overnight stay at hotel.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="timeline-item">
                                        <div className="timeline-content">
                                            <h3 onClick={() => toggleDay(13)} className="dropdown-title">
                                                <span><b>Day 13:</b>Day 13: Leh - Delhi</span>
                                                <FontAwesomeIcon icon={openDay === 13 ? faChevronUp : faChevronDown} />
                                            </h3>
                                            <div className={`dropdown-content ${openDay === 13 ? 'open' : ''}`}>
                                                <p>Early in the morning transfer to airport and from here catch a flight for Delhi.</p>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                            </div>

                        </div>

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
      <Incursion />
      <TrekCardSlider TrekData={TrekData} />

    </>
  )
}

export default BaraBhangalTrek