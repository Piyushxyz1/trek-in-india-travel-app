"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import ActivitiesCard from '@/components/activitiesCard/ActivitiesCard';
import activities from '@/components/activitiesCard/activitiesdetail';
import { renderStars } from '@/components/starratings/starratings';
import Banner from '@/components/banners/Banner';
import Breadcrumb from '@/components/breadcrumbs/Breadcrumb';
import CtaButton from '@/components/ctabutton/CtaButton';
import { FiChevronLeft, FiChevronRight, FiInfo, FiBookOpen, FiMapPin } from 'react-icons/fi';
import ModalPortal from '@/components/ModalPortal';
import TripBookingForm from '@/components/form/TripBookingForm';
import { BlogsList } from './bloglist';
import Link from 'next/link';

const BestMonsoonTreks = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const [expandedSections, setExpandedSections] = useState({});
    const [currentSlide, setCurrentSlide] = useState(0);

    const breadcrumbPath = [
        { label: 'best monsoon treks' },
    ]

    const recentPosts = [
        {
            title: "Best Motorcycle Routes in Ladakh",
            excerpt: "Discover the most thrilling motorcycle routes in Ladakh that will test your riding skills.",
            date: "May 15, 2023",
            image: "/images/ladakh-bike.jpg"
        },
        {
            title: "Essential Gear for Himalayan Motorcycle Tours",
            excerpt: "A complete checklist of gear you need for a safe and comfortable motorcycle tour in Himalayas.",
            date: "April 28, 2023",
            image: "/images/bike-gear.jpg"
        },
        {
            title: "Motorcycle Maintenance Tips for Long Tours",
            excerpt: "Learn how to keep your motorcycle in top condition during extended touring.",
            date: "March 10, 2023",
            image: "/images/bike-maintenance.jpg"
        }
    ];

    const popularPosts = [
        {
            title: "Spiti Valley Motorcycle Tour Guide",
            excerpt: "Everything you need to know about planning a motorcycle trip to Spiti Valley.",
            date: "June 2, 2023",
            image: "/images/spiti-bike.jpg"
        },
        {
            title: "Riding the Manali-Leh Highway",
            excerpt: "A day-by-day account of riding one of the world's most dangerous roads.",
            date: "May 22, 2023",
            image: "/images/manali-leh.jpg"
        },
        {
            title: "Monsoon Motorcycle Riding Tips",
            excerpt: "How to stay safe while motorcycle touring during monsoon season.",
            date: "April 15, 2023",
            image: "/images/monsoon-riding.jpg"
        }
    ];

    const toggleSection = (sectionId) => {
        setExpandedSections(prev => ({
            ...prev,
            [sectionId]: !prev[sectionId]
        }));
    };

    const activitiesData = activities.filter(activity => activity.activity === "Motor-Biking")
    return (
        <>
            <Breadcrumb path={breadcrumbPath} />



            <section className="destinations-page__section py-8 px-4 sm:px-6 lg:px-8">
                <div className=' max-w-4xl md:max-w-6xl  xl:max-w-7xl  mx-auto px-4 md:px-8 '>
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Content Column */}
                        <div className="lg:w-2/3">

                            <h1 className="text-xl sm:text-2xl  xl:text-4xl font-semibold text-[#172541] mt-0 mb-0 md:mb-2 lg:mb-3">8 Best Monsoon Treks in the Indian Himalayas that You Must Do in 2020</h1>
                            <p className=" mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb:0 md:mb-1 lg:mb-2 xl:mb-3">

                                Hey folks, as monsoon has already knocked on the door, I am sure you must be having some monsoon holiday plans at the back of your mind. And why not… as we all wait for monsoon season so that we can witness the breathtaking beauty of nature when the clouds come crashing down, the skies turn darker and the earth greener! Umm. what could be the better place than the Himalayas to experience such an amazing view? Obviously not all the regions are meant for trekking in the Himalayas due to heavy rainfall and the risks of landslides, but there are some places where you can enjoy trekking by exploring the beauties of this surreal region. Confused about deciding which place you should visit to make the most out of this monsoon season in 2020? Well, it can become a bit tricky when it comes to deciding the perfect destination for a monsoon trekking, but hold on and take a pen and notebook and choose one from our list of the best trekking places for monsoon season in the Indian Himalayas. Here we go-
                            </p>


                            <div className="mb-8 bg-white">
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-4 mt-4">Kashmir Great Lakes Trek, Jammu & Kashmir: A Paradise Like Experience amidst Green and Blue of Nature</h2>

                                <img src="/images/kashmir-banner.webp" alt='' className='h-[250px] md:h-[350px] lg:h-[400px] w-full mb-8 mt-8  ' />

                                <span className='text-[#f47a2a] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] '> <b>Highlights</b></span>
                                <ul className='mb-4 mt-4'>
                                    <li className=' text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Enjoy the sight of milky white icebergs floating on the lake’s blue surface</li>
                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Take long walks on the grassy shores of the lakes</li>
                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Explore Vishnu Sar and Kishan Sar Twin Lakes</li>
                                </ul>

                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    Ready to start with your monsoon trekking that is considered as one of the prettiest treks in India? Ah, then you surely have to visit Jammu & Kashmir. Not on every trekking expedition you are going to get the chance to see five beautiful alpine lakes. But it is the Kashmir Great Lake trek, wherein each lake competes with the beauty of the other. The snow that you see sliding down from the mountain to lakes, is basically what makes it prettier. The milky icebergs floating on the lake’s blue surface is no less than treat to the eyes. Would you leave the chance of hiking in the Himalayas and get a lifetime experience of the beauty of grassy shores of the lakes? Oh, that’s really going to be an amazing experience that you will cherish. Also, in the meanwhile just 100 ft. above the camp site and 0.5kms to the left, you’ll get to see the huge Vishnu Sar Lake which is covered by 4 mountains. Similarly, the Kishan Sar peak reflects in the lake which is a wonderful sight when the water is still.
                                    <a href='/trekking-in-jammu-kashmir/kashmir-alpine-lakes-trek' className='text-[#f47a2a] font-semibold'>Click here for Kashmir Great Lakes Trek Detailed Itinerary</a>
                                </p>

                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-4 mt-4">How to Reach?</h2>
                                <p className="text-[#313137] ">
                                    The starting point of the trek would be Sonamarg, which is 79.6kms via NH1 from Srinagar. If you are planning to travel by air then the nearest airport is the Srinagar International Airport which is 80 km away from Sonamarg and Jammu is the nearest rail-head to Sonamarg at a distance of some 360 km.
                                </p>
                                <p className="mb-2 mt-2 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    <b>Altitude:</b>
                                    13,800 ft (4,206 m)
                                </p>
                                <p className="mb-2 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">

                                    <b>Duration:</b>
                                    7-8 days
                                </p>
                                <p className="text-[#313137] ">
                                    <b>Best time to Visit:</b>
                                    July to August
                                </p>

                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-4 mt-4">Travel Tip :</h2>
                                <p className="text-[#313137] ">
                                    The starting point of the trek would be Sonamarg, which is 79.6kms via NH1 from Srinagar. If you are planning to travel by air then the nearest airport is the Srinagar International Airport which is 80 km away from Sonamarg and Jammu is the nearest rail-head to Sonamarg at a distance of some 360 km.

                                </p>

                            </div>
                            <div className="mb-8 bg-white">
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-4 mt-4">Valley of Flowers Trek, Uttarakhand: Walk Through the Meadows Replete with Alpine Flora and Fauna</h2>

                                <img src="/images/kashmir-banner.webp" alt='' className='h-[250px] md:h-[350px] lg:h-[400px] w-full mb-8 mt-8  ' />

                                <span className='text-[#f47a2a] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] '> <b>Highlights</b></span>
                                <ul className='mb-4 mt-4'>
                                    <li className=' text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Enjoy the sight of milky white icebergs floating on the lake’s blue surface</li>
                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Take long walks on the grassy shores of the lakes</li>
                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Explore Vishnu Sar and Kishan Sar Twin Lakes</li>
                                </ul>

                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    Ready to start with your monsoon trekking that is considered as one of the prettiest treks in India? Ah, then you surely have to visit Jammu & Kashmir. Not on every trekking expedition you are going to get the chance to see five beautiful alpine lakes. But it is the Kashmir Great Lake trek, wherein each lake competes with the beauty of the other. The snow that you see sliding down from the mountain to lakes, is basically what makes it prettier. The milky icebergs floating on the lake’s blue surface is no less than treat to the eyes. Would you leave the chance of hiking in the Himalayas and get a lifetime experience of the beauty of grassy shores of the lakes? Oh, that’s really going to be an amazing experience that you will cherish. Also, in the meanwhile just 100 ft. above the camp site and 0.5kms to the left, you’ll get to see the huge Vishnu Sar Lake which is covered by 4 mountains. Similarly, the Kishan Sar peak reflects in the lake which is a wonderful sight when the water is still.
                                    <a href='/trekking-in-garhwal/valley-of-flowers-trek' className='text-[#f47a2a] font-semibold'>Click here for Valley of flowers Trek Detailed Itinerary</a>
                                </p>
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-4 mt-4">How to Reach?</h2>
                                <p className="text-[#313137] ">
                                    The starting point of the trek would be Sonamarg, which is 79.6kms via NH1 from Srinagar. If you are planning to travel by air then the nearest airport is the Srinagar International Airport which is 80 km away from Sonamarg and Jammu is the nearest rail-head to Sonamarg at a distance of some 360 km.
                                </p>
                                <p className="mb-2 mt-2 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    <b>Altitude:</b>
                                    13,800 ft (4,206 m)
                                </p>
                                <p className="mb-2 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">

                                    <b>Duration:</b>
                                    7-8 days
                                </p>
                                <p className="text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    <b>Best time to Visit:</b>
                                    July to August
                                </p>

                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-4 mt-4">Travel Tip :</h2>
                                <p className="text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    The starting point of the trek would be Sonamarg, which is 79.6kms via NH1 from Srinagar. If you are planning to travel by air then the nearest airport is the Srinagar International Airport which is 80 km away from Sonamarg and Jammu is the nearest rail-head to Sonamarg at a distance of some 360 km.

                                </p>



                            </div>
                            <div className="mb-8 bg-white">
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-4 mt-4">Sham Valley Trek Ladakh, Jammu & Kashmir: Baby Trek in the Himalayas that Takes You on Surreal Apricot Orchard Trail</h2>

                                <img src="/images/kashmir-banner.webp" alt='' className='h-[250px] md:h-[350px] lg:h-[400px] w-full mb-8 mt-8  ' />

                                <span className='text-[#f47a2a] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] '> <b>Highlights</b></span>
                                <ul className='mb-4 mt-4'>
                                    <li className=' text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Enjoy the sight of milky white icebergs floating on the lake’s blue surface</li>
                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Take long walks on the grassy shores of the lakes</li>
                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Explore Vishnu Sar and Kishan Sar Twin Lakes</li>
                                </ul>

                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    Ready to start with your monsoon trekking that is considered as one of the prettiest treks in India? Ah, then you surely have to visit Jammu & Kashmir. Not on every trekking expedition you are going to get the chance to see five beautiful alpine lakes. But it is the Kashmir Great Lake trek, wherein each lake competes with the beauty of the other. The snow that you see sliding down from the mountain to lakes, is basically what makes it prettier. The milky icebergs floating on the lake’s blue surface is no less than treat to the eyes. Would you leave the chance of hiking in the Himalayas and get a lifetime experience of the beauty of grassy shores of the lakes? Oh, that’s really going to be an amazing experience that you will cherish. Also, in the meanwhile just 100 ft. above the camp site and 0.5kms to the left, you’ll get to see the huge Vishnu Sar Lake which is covered by 4 mountains. Similarly, the Kishan Sar peak reflects in the lake which is a wonderful sight when the water is still.
                                    <a href='/trekking-in-ladakh/sham-trek' className='text-[#f47a2a] font-semibold'>Click here for Sham Valley Trek Detailed Itinerary Trek Detailed Itinerary</a>


                                </p>
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-4 mt-4">How to Reach?</h2>
                                <p className="text-[#313137] ">
                                    The starting point of the trek would be Sonamarg, which is 79.6kms via NH1 from Srinagar. If you are planning to travel by air then the nearest airport is the Srinagar International Airport which is 80 km away from Sonamarg and Jammu is the nearest rail-head to Sonamarg at a distance of some 360 km.
                                </p>
                                <p className="mb-2 mt-2 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    <b>Altitude:</b>
                                    13,800 ft (4,206 m)
                                </p>
                                <p className="mb-2 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">

                                    <b>Duration:</b>
                                    7-8 days
                                </p>
                                <p className="text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    <b>Best time to Visit:</b>
                                    July to August
                                </p>

                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-4 mt-4">Travel Tip :</h2>
                                <p className="text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    The starting point of the trek would be Sonamarg, which is 79.6kms via NH1 from Srinagar. If you are planning to travel by air then the nearest airport is the Srinagar International Airport which is 80 km away from Sonamarg and Jammu is the nearest rail-head to Sonamarg at a distance of some 360 km.
                                </p>



                            </div>

                            <div className="mb-8 bg-white">
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-4 mt-4">Chopta Chandrashila Trek, Uttarakhand: Feast Your Eyes on the View of Lofty Mountain Ranges and Lush Greenery</h2>

                                <img src="/images/kashmir-banner.webp" alt='' className='h-[250px] md:h-[350px] lg:h-[400px] w-full mb-8 mt-8  ' />

                                <span className='text-[#f47a2a] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] '> <b>Highlights</b></span>
                                <ul className='mb-4 mt-4'>
                                    <li className=' text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Enjoy the sight of milky white icebergs floating on the lake’s blue surface</li>
                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Take long walks on the grassy shores of the lakes</li>
                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Explore Vishnu Sar and Kishan Sar Twin Lakes</li>
                                </ul>

                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    Ready to start with your monsoon trekking that is considered as one of the prettiest treks in India? Ah, then you surely have to visit Jammu & Kashmir. Not on every trekking expedition you are going to get the chance to see five beautiful alpine lakes. But it is the Kashmir Great Lake trek, wherein each lake competes with the beauty of the other. The snow that you see sliding down from the mountain to lakes, is basically what makes it prettier. The milky icebergs floating on the lake’s blue surface is no less than treat to the eyes. Would you leave the chance of hiking in the Himalayas and get a lifetime experience of the beauty of grassy shores of the lakes? Oh, that’s really going to be an amazing experience that you will cherish. Also, in the meanwhile just 100 ft. above the camp site and 0.5kms to the left, you’ll get to see the huge Vishnu Sar Lake which is covered by 4 mountains. Similarly, the Kishan Sar peak reflects in the lake which is a wonderful sight when the water is still.


                                    <a href='/trekking-in-garhwal/chandrashila-summit-trek' className='text-[#f47a2a] font-semibold'>Click here Chopta Chandrashila Trek Detailed Itinerary</a>
                                </p>
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-4 mt-4">How to Reach?</h2>
                                <p className="text-[#313137] ">
                                    The starting point of the trek would be Sonamarg, which is 79.6kms via NH1 from Srinagar. If you are planning to travel by air then the nearest airport is the Srinagar International Airport which is 80 km away from Sonamarg and Jammu is the nearest rail-head to Sonamarg at a distance of some 360 km.
                                </p>
                                <p className="mb-2 mt-2 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    <b>Altitude:</b>
                                    13,800 ft (4,206 m)
                                </p>
                                <p className="mb-2 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">

                                    <b>Duration:</b>
                                    7-8 days
                                </p>
                                <p className="text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    <b>Best time to Visit:</b>
                                    July to August
                                </p>

                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-4 mt-4">Travel Tip :</h2>
                                <p className="text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    The starting point of the trek would be Sonamarg, which is 79.6kms via NH1 from Srinagar. If you are planning to travel by air then the nearest airport is the Srinagar International Airport which is 80 km away from Sonamarg and Jammu is the nearest rail-head to Sonamarg at a distance of some 360 km.
                                </p>



                            </div>

                            <div className="mb-8 bg-white">
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-4 mt-4">Hampta Pass Trek, Himachal Pradesh: A Perfect Trek to Get that Adrenaline Rush</h2>

                                <img src="/images/kashmir-banner.webp" alt='' className='h-[250px] md:h-[350px] lg:h-[400px] w-full mb-8 mt-8  ' />

                                <span className='text-[#f47a2a] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] '> <b>Highlights</b></span>
                                <ul className='mb-4 mt-4'>
                                    <li className=' text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Enjoy the sight of milky white icebergs floating on the lake’s blue surface</li>
                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Take long walks on the grassy shores of the lakes</li>
                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Explore Vishnu Sar and Kishan Sar Twin Lakes</li>
                                </ul>

                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    Ready to start with your monsoon trekking that is considered as one of the prettiest treks in India? Ah, then you surely have to visit Jammu & Kashmir. Not on every trekking expedition you are going to get the chance to see five beautiful alpine lakes. But it is the Kashmir Great Lake trek, wherein each lake competes with the beauty of the other. The snow that you see sliding down from the mountain to lakes, is basically what makes it prettier. The milky icebergs floating on the lake’s blue surface is no less than treat to the eyes. Would you leave the chance of hiking in the Himalayas and get a lifetime experience of the beauty of grassy shores of the lakes? Oh, that’s really going to be an amazing experience that you will cherish. Also, in the meanwhile just 100 ft. above the camp site and 0.5kms to the left, you’ll get to see the huge Vishnu Sar Lake which is covered by 4 mountains. Similarly, the Kishan Sar peak reflects in the lake which is a wonderful sight when the water is still.

                                    <a href='/trekking-in-himachal/hampta-pass-trek' className='text-[#f47a2a] font-semibold'>Click here Hampta Pass Trek Detailed Itinerary</a>


                                </p>
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-4 mt-4">How to Reach?</h2>
                                <p className="text-[#313137] ">
                                    The starting point of the trek would be Sonamarg, which is 79.6kms via NH1 from Srinagar. If you are planning to travel by air then the nearest airport is the Srinagar International Airport which is 80 km away from Sonamarg and Jammu is the nearest rail-head to Sonamarg at a distance of some 360 km.
                                </p>
                                <p className="mb-2 mt-2 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    <b>Altitude:</b>
                                    13,800 ft (4,206 m)
                                </p>
                                <p className="mb-2 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">

                                    <b>Duration:</b>
                                    7-8 days
                                </p>
                                <p className="text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    <b>Best time to Visit:</b>
                                    July to August
                                </p>

                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-4 mt-4">Travel Tip :</h2>
                                <p className="text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    The starting point of the trek would be Sonamarg, which is 79.6kms via NH1 from Srinagar. If you are planning to travel by air then the nearest airport is the Srinagar International Airport which is 80 km away from Sonamarg and Jammu is the nearest rail-head to Sonamarg at a distance of some 360 km.
                                </p>



                            </div>

                            <div className="mb-8 bg-white">
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-4 mt-4">Zanskar Valley Trek Ladakh, Jammu & Kashmir: An Ideal Trek for those Craving for that Unsurpassed Thrill of Exploring a Land Lesser-Known</h2>

                                <img src="/images/kashmir-banner.webp" alt='' className='h-[250px] md:h-[350px] lg:h-[400px] w-full mb-8 mt-8  ' />

                                <span className='text-[#f47a2a] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] '> <b>Highlights</b></span>
                                <ul className='mb-4 mt-4'>
                                    <li className=' text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Enjoy the sight of milky white icebergs floating on the lake’s blue surface</li>
                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Take long walks on the grassy shores of the lakes</li>
                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Explore Vishnu Sar and Kishan Sar Twin Lakes</li>
                                </ul>

                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    Ready to start with your monsoon trekking that is considered as one of the prettiest treks in India? Ah, then you surely have to visit Jammu & Kashmir. Not on every trekking expedition you are going to get the chance to see five beautiful alpine lakes. But it is the Kashmir Great Lake trek, wherein each lake competes with the beauty of the other. The snow that you see sliding down from the mountain to lakes, is basically what makes it prettier. The milky icebergs floating on the lake’s blue surface is no less than treat to the eyes. Would you leave the chance of hiking in the Himalayas and get a lifetime experience of the beauty of grassy shores of the lakes? Oh, that’s really going to be an amazing experience that you will cherish. Also, in the meanwhile just 100 ft. above the camp site and 0.5kms to the left, you’ll get to see the huge Vishnu Sar Lake which is covered by 4 mountains. Similarly, the Kishan Sar peak reflects in the lake which is a wonderful sight when the water is still.
                                </p>
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-4 mt-4">How to Reach?</h2>
                                <p className="text-[#313137] ">
                                    The starting point of the trek would be Sonamarg, which is 79.6kms via NH1 from Srinagar. If you are planning to travel by air then the nearest airport is the Srinagar International Airport which is 80 km away from Sonamarg and Jammu is the nearest rail-head to Sonamarg at a distance of some 360 km.
                                </p>
                                <p className="mb-2 mt-2 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    <b>Altitude:</b>
                                    13,800 ft (4,206 m)
                                </p>
                                <p className="mb-2 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">

                                    <b>Duration:</b>
                                    7-8 days
                                </p>
                                <p className="text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    <b>Best time to Visit:</b>
                                    July to August
                                </p>

                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-4 mt-4">Travel Tip :</h2>
                                <p className="text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    The starting point of the trek would be Sonamarg, which is 79.6kms via NH1 from Srinagar. If you are planning to travel by air then the nearest airport is the Srinagar International Airport which is 80 km away from Sonamarg and Jammu is the nearest rail-head to Sonamarg at a distance of some 360 km.
                                </p>



                            </div>
                            <div className="mb-8 bg-white">
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-4 mt-4">Bhrigu Lake Trek, Himachal Pradesh: Trek through the Pool of Gods</h2>

                                <img src="/images/kashmir-banner.webp" alt='' className='h-[250px] md:h-[350px] lg:h-[400px] w-full mb-8 mt-8  ' />

                                <span className='text-[#f47a2a] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] '> <b>Highlights</b></span>
                                <ul className='mb-4 mt-4'>
                                    <li className=' text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Enjoy the sight of milky white icebergs floating on the lake’s blue surface</li>
                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Take long walks on the grassy shores of the lakes</li>
                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Explore Vishnu Sar and Kishan Sar Twin Lakes</li>
                                </ul>

                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    Ready to start with your monsoon trekking that is considered as one of the prettiest treks in India? Ah, then you surely have to visit Jammu & Kashmir. Not on every trekking expedition you are going to get the chance to see five beautiful alpine lakes. But it is the Kashmir Great Lake trek, wherein each lake competes with the beauty of the other. The snow that you see sliding down from the mountain to lakes, is basically what makes it prettier. The milky icebergs floating on the lake’s blue surface is no less than treat to the eyes. Would you leave the chance of hiking in the Himalayas and get a lifetime experience of the beauty of grassy shores of the lakes? Oh, that’s really going to be an amazing experience that you will cherish. Also, in the meanwhile just 100 ft. above the camp site and 0.5kms to the left, you’ll get to see the huge Vishnu Sar Lake which is covered by 4 mountains. Similarly, the Kishan Sar peak reflects in the lake which is a wonderful sight when the water is still.
                                    <a href='/trekking-in-himachal/bhrigu-lake-trek' className='text-[#f47a2a] font-semibold'>Click here for Bhrigu Lake Trek Detailed Itinerary</a>
                                </p>
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-4 mt-4">How to Reach?</h2>
                                <p className="text-[#313137] ">
                                    The starting point of the trek would be Sonamarg, which is 79.6kms via NH1 from Srinagar. If you are planning to travel by air then the nearest airport is the Srinagar International Airport which is 80 km away from Sonamarg and Jammu is the nearest rail-head to Sonamarg at a distance of some 360 km.
                                </p>
                                <p className="mb-2 mt-2 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    <b>Altitude:</b>
                                    13,800 ft (4,206 m)
                                </p>
                                <p className="mb-2 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">

                                    <b>Duration:</b>
                                    7-8 days
                                </p>
                                <p className="text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    <b>Best time to Visit:</b>
                                    July to August
                                </p>

                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-4 mt-4">Travel Tip :</h2>
                                <p className="text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    The starting point of the trek would be Sonamarg, which is 79.6kms via NH1 from Srinagar. If you are planning to travel by air then the nearest airport is the Srinagar International Airport which is 80 km away from Sonamarg and Jammu is the nearest rail-head to Sonamarg at a distance of some 360 km.
                                </p>



                            </div>
                            <div className="mb-8 bg-white">
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-4 mt-4">Tarsar Marsar Trek, Jammu & Kashmir: Memorable Trek to the Serene and Scenic Twin Lakes</h2>

                                <img src="/images/kashmir-banner.webp" alt='' className='h-[250px] md:h-[350px] lg:h-[400px] w-full mb-8 mt-8  ' />

                                <span className='text-[#f47a2a] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] '> <b>Highlights</b></span>
                                <ul className='mb-4 mt-4'>
                                    <li className=' text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Enjoy the sight of milky white icebergs floating on the lake’s blue surface</li>
                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Take long walks on the grassy shores of the lakes</li>
                                    <li className='text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'> <span className="text-[#f47a2a] text-xl mr-2">•</span>Explore Vishnu Sar and Kishan Sar Twin Lakes</li>
                                </ul>

                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    Ready to start with your monsoon trekking that is considered as one of the prettiest treks in India? Ah, then you surely have to visit Jammu & Kashmir. Not on every trekking expedition you are going to get the chance to see five beautiful alpine lakes. But it is the Kashmir Great Lake trek, wherein each lake competes with the beauty of the other. The snow that you see sliding down from the mountain to lakes, is basically what makes it prettier. The milky icebergs floating on the lake’s blue surface is no less than treat to the eyes. Would you leave the chance of hiking in the Himalayas and get a lifetime experience of the beauty of grassy shores of the lakes? Oh, that’s really going to be an amazing experience that you will cherish. Also, in the meanwhile just 100 ft. above the camp site and 0.5kms to the left, you’ll get to see the huge Vishnu Sar Lake which is covered by 4 mountains. Similarly, the Kishan Sar peak reflects in the lake which is a wonderful sight when the water is still.
                                    <a href='/trekking-in-jammu-kashmir' className='text-[#f47a2a] font-semibold'>Click here for Jammu & Kashmir Trekking Itineraries</a>
                                </p>
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-4 mt-4">How to Reach?</h2>
                                <p className="text-[#313137] ">
                                    The starting point of the trek would be Sonamarg, which is 79.6kms via NH1 from Srinagar. If you are planning to travel by air then the nearest airport is the Srinagar International Airport which is 80 km away from Sonamarg and Jammu is the nearest rail-head to Sonamarg at a distance of some 360 km.
                                </p>
                                <p className="mb-2 mt-2 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    <b>Altitude:</b>
                                    13,800 ft (4,206 m)
                                </p>
                                <p className="mb-2 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">

                                    <b>Duration:</b>
                                    7-8 days
                                </p>
                                <p className="text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    <b>Best time to Visit:</b>
                                    July to August
                                </p>

                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-4 mt-4">Travel Tip :</h2>
                                <p className="text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    The starting point of the trek would be Sonamarg, which is 79.6kms via NH1 from Srinagar. If you are planning to travel by air then the nearest airport is the Srinagar International Airport which is 80 km away from Sonamarg and Jammu is the nearest rail-head to Sonamarg at a distance of some 360 km.
                                </p>



                            </div>






                            <div className='author-section'>
                                <h2 className="text-xl sm:text-2xl xl:text-3xl text-[#f47a2a] mb-4 mt-4">About Arun Joshi</h2>

                                <div className="flex items-start gap-4 mt-4">
                                    {/* Left Side Image */}
                                    <img
                                        src="/images/blogs/arunjoshi.jpg"
                                        alt="Arun Joshi"
                                        className="w-24 h-24 object-cover rounded-md"
                                    />
                                    <p className="text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                        A thoroughbred adventurer, Arun Joshi was born in the picturesque and landlocked district of Chamoli, Uttarakhand. He is well known for his close association with the Indian Himalayas for the past 16 years, and knows the region inside out. His vast knowledge and first-hand experience of trekking to the many challenging regions of the Indian Himalayas have also helped him to establish himself as the go-to guide in the region.
                                    </p>

                                    {/* Right Side Text */}
                                    <div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Right Sidebar Column */}
                        <div className="lg:w-1/3">
                            <div className="sticky top-4 space-y-6">
                                {/* Recent Posts Section */}
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <h3 className="text-xl font-semibold text-[#313137] mb-4 border-b pb-2">Recent Posts</h3>
                                    <div className="space-y-4">
                                        {BlogsList
                                            .slice(0, 5) // copy to avoid mutating the original array
                                            .sort((a, b) => new Date(b.date) - new Date(a.date)) // sort by date descending
                                            .map((post, index) => (
                                                <Link href={`/${post.slug}`} key={index}>
                                                    <div className="flex gap-3 mb-4 border-b pb-3 border-b-[#f47a2a]">
                                                        <div className="flex-shrink-0 w-20 h-20 overflow-hidden rounded-md">
                                                            <img
                                                                src={post.image}
                                                                alt={post.title}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                        <div>
                                                            <h4 className="text-sm font-semibold text-[#172541] mb-1">{post.title}</h4>
                                                            <p className="text-xs text-gray-500 mb-1">{post.date}</p>
                                                            <p className="text-xs text-[#313137] line-clamp-2">{post.excerpt}</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                    </div>
                                </div>


                                {/* Popular Posts Section */}
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <h3 className="text-xl font-semibold text-[#313137] mb-4 border-b pb-2">Most Popular</h3>
                                    <div className="space-y-4">
                                        {BlogsList
                                            .slice(0, 5)
                                            .sort((a, b) => b.views - a.views)
                                            .map((post, index) => (
                                                <Link href={`/${post.slug}`} key={index} passHref>
                                                    <div className="flex gap-3 pb-3 border-b last:border-b-0 last:pb-0">
                                                        <div className="flex-shrink-0 w-20 h-20 overflow-hidden rounded-md">
                                                            <img
                                                                src={post.image}
                                                                alt={post.title}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                        <div>
                                                            <h4 className="text-sm font-semibold text-[#172541] mb-1">{post.title}</h4>
                                                            <p className="text-xs text-gray-500 mb-1">{post.date}</p>
                                                            <p className="text-xs text-[#313137] line-clamp-2">{post.excerpt}</p>
                                                            <p className="text-[10px] text-gray-400">{post.views} views</p> {/* optional */}
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </div>

                                {/* Booking Form Section */}
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
        </>
    )
}

export default BestMonsoonTreks