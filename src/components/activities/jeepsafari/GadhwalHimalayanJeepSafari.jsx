"use client"
import React from 'react';

import { useState } from 'react';
import Breadcrumb from '@/components/breadcrumbs/Breadcrumb';
import Banner from '@/components/banners/Banner';
import ImageGrid from '@/components/trekdetailspages/trekitinerarydetails/ImageGrid';
import "../../trekdetailspages/trekitinerarydetails/itinerarypage.css"
import TripBookingForm from '@/components/form/TripBookingForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import TrekCardSlider from '@/components/treckcardslider/TrekCardSlider';
import trekData from '../../trekdestinationcard/trekdata';
import Incursion from '@/components/incursions/Incursion';
import DepartureDates from '@/components/departuredates/DepartureDates';

import ModalPortal from '@/components/ModalPortal';

const GadhwalHimalayanJeepSafari= () => {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const [activeTab, setActiveTab] = useState('inclusions');
    const [openDay, setOpenDay] = useState(null);


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

    const [activeFilter, setActiveFilter] = useState('all');
    const TrekData = trekData.filter(trek => trek.region === 'Ladakh');
    const toggleDay = (day) => {
        setOpenDay(openDay === day ? null : day);
    };

    const images = [
        '/images/markha-valley-trek.webp',
        '/images/Audens-Col-Trek.webp',
        '/images/dayara-bugyal-trek.webp',
        '/images/kashmir-alpines-lake-trek.webp',
        '/images/hamta-pass-trek.webp',
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

    return (


        <>

            <section className='itinerary-page-section-first'>
                <div className='itinerary-page_container  max-w-4xl md:max-w-6xl  xl:max-w-7xl  mx-auto px-4 md:px-8 '>
                    <Breadcrumb  href = "/destinations"  current="Markha Valley" />
                    <h1>Garhwal Himalayan Jeep Safari</h1>


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

            <section  className = 'bg-white  py-4'>

                <div className='max-w-4xl md:max-w-6xl  xl:max-w-7xl  mx-auto px-4 md:px-8'>
               <h2 className="text-xl sm:text-2xl  xl:text-4xl font-semibold text-[#172541] mt-0 md:mt-1 mb-0 md:mb-2 xl:mb-4">Overview</h2>
                    <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">Walking on Frozen river of Zanskar is an ultimate experience for adventure lover. The traditional name of the trek is "Chadar trek" the frozen sheet, which was only way in and out for Zanskaris in winter when all other ways are closed due to heavy snow fall at high passes. Therefore, it had been trade route for centuries for Zanskari People. Now the route is also famous as winter trekking among adventure lovers. For last several years, we have been organizing this winter trek in three different options with trained local Zanskari potters and our well-experienced guide and staff.</p>
                    <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">The most isolated and made inaccessible for nearly eight months a year due to heavy snowfall resulting in closure of all the access passes, Zanskar has the distinction of being the least interfered with microcosms of Ladakh, and thus one of the last few surviving cultural satellites of Tibet. This geographical isolation together with the esoteric nature of Buddhism practiced here has enabled its some ten thousand inhabitants to preserve and perpetuate their cultural identity. This Chadar trek allows you to penetrate this isolation and to examine some of the villages along the Zanskar River in the midst of winter and thus catch a glimpse of the lifecycle during this unique time of the year. A visit to the ancient monastic establishments of Karsha and Zangla promises to heighten your insight into the mysteries of this Shangri-la, a land and culture frozen in time behind the ramparts of the Zanskar mountains. Chilling and Lingshed are the only sizeable villages on this trek until Hanamur and Pidmo before Pishu and Zangla in Zanskar, all the rest are names of places and caves along the route.</p>
                </div>
            </section>



            <section className="itinerary-section py-4 ">
                <div className='itinerary-content max-w-4xl md:max-w-6xl  xl:max-w-7xl  mx-auto px-4 md:px-8'>
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
                                    <button className="secondary-cta">
                                        REQUEST ITINERARY
                                    </button>
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

                        {/* SIMPLE MODAL */}
                        {isOpen && (
                            <div className="form-modal-overlay">
                                <div className="form-modal-content">
                                    <button className="form-modal-close" onClick={closeModal}>
                                        &times;
                                    </button>
                                    <TripBookingForm />
                                </div>
                            </div>
                        )}
                    </div>
                    </div>
                </div>
                    </section>
                <Incursion />

                  <DepartureDates />
   <TrekCardSlider TrekData={TrekData}/>

      


        </>
    )
}

export default GadhwalHimalayanJeepSafari