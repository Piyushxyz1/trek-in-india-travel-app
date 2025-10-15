import React, { useState, useEffect } from 'react';
import ActivitiesCard from '@/components/activitiesCard/ActivitiesCard';
import activities from '@/components/activitiesCard/activitiesdetail';
import { renderStars } from '@/components/starratings/starratings';
import "../../components/activities/activities.css";
import Banner from '@/components/banners/Banner';
import Breadcrumb from '@/components/breadcrumbs/Breadcrumb';
import CtaButton from '@/components/ctabutton/CtaButton';
import { FiChevronLeft, FiChevronRight, FiInfo, FiMap, FiClock, FiCalendar } from 'react-icons/fi';

const MotorBiking = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const activitiesData = activities.filter(activity => activity.activity === "Motor-Biking");

  const slides = [
    {
      image: "/images/motor-biking-1.jpg",
      alt: "Motor Biking in Himalayas",
      caption: "Riding through the majestic Himalayan trails"
    },
    {
      image: "/images/ladakh-biking.jpg",
      alt: "Ladakh Motor Biking",
      caption: "Conquering the high passes of Ladakh"
    },
    {
      image: "/images/spiti-biking.jpg",
      alt: "Spiti Valley Biking",
      caption: "Exploring the rugged beauty of Spiti"
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

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Banner title="Motor Bike Tours" image="/images/motor-biking-banner.jpg" />
      <Breadcrumb href="/destinations" current="Motor Biking" />
      
      <section className="bg-white">
        <div className=" max-w-4xl md:max-w-6xl  xl:max-w-7xl  mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Content Column */}
            <div className="lg:w-2/3">
              <div className="destinations-page__intro mb-8">
                <span className="text-[#f47a2a] font-bold text-lg">Bike Tours In India</span>
                <h1 className="text-4xl md:text-4xl font-bold leading-tight text-[#172541] mb-4">Motor Bike Tours in India</h1>
                <p className="text-[#313137]  mb-6">
                  Explore the Indian terrains on ace motorbikes; learn what it feels to discover the undiscovered and to cross challenging yet incredible destinations of the country. With our selective tour packages make each motorbiking experience in India a happy one.
                </p>
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6">
                  <p className="text-[#313137] ">
                    Book your motor biking holidays at best prices and services with our expert guides and well-maintained bikes.
                  </p>
                </div>
              </div>

              {/* Activities Grid */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#172541] mb-6">Featured Motor Biking Tours</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {activitiesData.map((activity) => (
                    <ActivitiesCard key={activity.id} activities={activity} renderStars={renderStars} />
                  ))}
                </div>
              </div>

              {/* Content Sections */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#172541] mb-4">What makes India a great motor biking destination?</h2>
                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                  Motor biking in the mountains is an adventure sport. It's tried by the audacious people who ride the motorbikes in the rocky stacks. Motor biking is the best option for those who are the typical escapade enthusiasts...
                </p>
                <div className={`read-more-content ${expandedSections['intro'] ? 'block' : 'hidden'}`}>
                  <p className="text-[#313137] ">
                    The beautiful and diverse geography of India makes a wide scope for biking. It's always filled with great contentment. The Indian Himalayas offer an incredible drive to the motorcycle riders.
                  </p>
                </div>
                <button 
                  onClick={() => toggleSection('intro')} 
                  className="text-[#f47a2a] font-medium hover:text-orange-700 transition flex items-center mt-2"
                >
                  {expandedSections['intro'] ? 'Read Less' : 'Read More'}
                  <FiChevronRight className={`ml-1 transition-transform ${expandedSections['intro'] ? 'rotate-90' : ''}`} />
                </button>
              </div>

              {/* Ladakh Section */}
              <div className="mb-8 bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
                <h3 className="text-2xl font-bold text-[#172541] mb-4">Ladakh Motorbiking</h3>
                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                  Ladakh gives an unforgettable and breathtaking experience to the motorbike enthusiasts. The Ladakh motorbike tour does not only consist of the attractive landscapes, astounding views of the Himalayas...
                </p>
                <div className={`read-more-content ${expandedSections['ladakh'] ? 'block' : 'hidden'}`}>
                  <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                    Center of unique cultures and traditions like Buddhist Gompas; but also provides the view of the rich flora and fauna. At Trekking in India, we offer you energizing Ladakh Motorbike Tours.
                  </p>
                  <p className="text-[#313137] ">
                    Mid June to Mid of October is the best time to enjoy the motorcycle riding here.
                  </p>
                </div>
                <button 
                  onClick={() => toggleSection('ladakh')} 
                  className="text-[#f47a2a] font-medium hover:text-orange-700 transition flex items-center mt-2"
                >
                  {expandedSections['ladakh'] ? 'Read Less' : 'Read More'}
                  <FiChevronRight className={`ml-1 transition-transform ${expandedSections['ladakh'] ? 'rotate-90' : ''}`} />
                </button>
              </div>

              {/* Himachal Section */}
              <div className="mb-8 bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-[#172541] mb-4">Himachal Motorbiking</h3>
                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                  Biking in the 'Adobe of Gods: Himachal', allows you to travel around the breathtaking landscapes, rich culture and traditions of the state. The remarkable Himachal motorbike tour starts from Shimla...
                </p>
                <div className={`read-more-content ${expandedSections['himachal'] ? 'block' : 'hidden'}`}>
                  <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                    And ends at Manali via Spiti Valley. At 'Trekking in India', we offer attractive motor biking tours to Himachal.
                  </p>
                  <p className="text-[#313137] ">
                    Mid June to Mid October is the best time to get the thrill of motor biking in Himachal.
                  </p>
                </div>
                <button 
                  onClick={() => toggleSection('himachal')} 
                  className="text-[#f47a2a]font-medium hover:text-blue-800 transition flex items-center mt-2"
                >
                  {expandedSections['himachal'] ? 'Read Less' : 'Read More'}
                  <FiChevronRight className={`ml-1 transition-transform ${expandedSections['himachal'] ? 'rotate-90' : ''}`} />
                </button>
              </div>

              {/* Kumaon Section */}
              <div className="mb-8 bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-[#172541] mb-4">Kumaon Motorbiking</h3>
                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                  Biking in Kumaon allows you to explore the natural beauty that consists of the thick forests, muttering waterfalls, snow covered mountains and much more...
                </p>
                <div className={`read-more-content ${expandedSections['kumaon'] ? 'block' : 'hidden'}`}>
                  <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                    On this biking tour, you enjoy the view of Jim Corbett National Park, Binsar Bird Sanctuary, Munsiyari, Mukteshwar and Ramgarh.
                  </p>
                  <p className="text-[#313137] ">
                    'Trekking in India' offers exciting motorbike tours to the adventure freaks and makes their holidays more daring and interesting.
                  </p>
                </div>
                <button 
                  onClick={() => toggleSection('kumaon')} 
                  className="text-green-600 font-medium hover:text-green-800 transition flex items-center mt-2"
                >
                  {expandedSections['kumaon'] ? 'Read Less' : 'Read More'}
                  <FiChevronRight className={`ml-1 transition-transform ${expandedSections['kumaon'] ? 'rotate-90' : ''}`} />
                </button>
              </div>
            </div>

            {/* Image Slider Column */}
            <div className="lg:w-1/3">
              <div className="sticky top-4">
                <div className="image-slider relative rounded-xl overflow-hidden shadow-lg mb-6">
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

                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h3 className="text-xl font-semibold text-[#172541] mb-4">Motor Biking Essentials</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FiCalendar className="h-5 w-5 text-[#f47a2a] mt-0.5 mr-2" />
                      <span className="text-[#313137] "><strong>Best Season:</strong> June to October</span>
                    </li>
                    <li className="flex items-start">
                      <FiClock className="h-5 w-5 text-blue-500 mt-0.5 mr-2" />
                      <span className="text-[#313137] "><strong>Duration:</strong> 7-15 days typically</span>
                    </li>
                    <li className="flex items-start">
                      <FiMap className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                      <span className="text-[#313137] "><strong>Top Routes:</strong> Manali-Leh, Spiti Circuit, Kumaon Hills</span>
                    </li>
                    <li className="flex items-start">
                      <FiInfo className="h-5 w-5 text-purple-500 mt-0.5 mr-2" />
                      <span className="text-[#313137] "><strong>Difficulty:</strong> Moderate to Challenging</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                  <h3 className="text-xl font-semibold text-[#172541] mb-3">Why Choose Our Tours?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-orange-100 p-1 rounded-full mr-3">
                        <svg className="h-4 w-4 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-[#313137] ">Well-maintained bikes with safety gear</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-orange-100 p-1 rounded-full mr-3">
                        <svg className="h-4 w-4 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-[#313137] ">Experienced local guides</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-orange-100 p-1 rounded-full mr-3">
                        <svg className="h-4 w-4 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-[#313137] ">Support vehicle on most tours</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-orange-100 p-1 rounded-full mr-3">
                        <svg className="h-4 w-4 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-[#313137] ">Comfortable accommodations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CtaButton />
    </>
  );
};

export default MotorBiking;