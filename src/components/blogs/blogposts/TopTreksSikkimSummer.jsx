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

const TopTreksSikkimSummer = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const [expandedSections, setExpandedSections] = useState({});
    const [currentSlide, setCurrentSlide] = useState(0);

    const breadcrumbPath = [
        { label: 'Moter bike tours' },
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

                            <h1 className="text-xl sm:text-2xl  xl:text-4xl font-semibold text-[#172541] mt-0 mb-0 md:mb-2 lg:mb-3">Top Treks in Sikkim To Make Your Summer 2020 Adventuresome</h1>
                            <p className=" mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb:0 md:mb-1 lg:mb-2 xl:mb-3">
                                Home to one of the highest peaks in the world – Kanchenjunga, Sikkim awaits to offer you the best experience of trekking on some of the thrilling treks in 2020. The high-altitude peaks, tricky topography, green highlands, exotic mountain views, sparkling lakes, picturesque valleys, misty clouds and sprawling forests make Sikkim amongst the best trekking places in India. And in summer the state bestow an authentic flavour of adventure, thrill, and excitement to savour as then open some of the best treks, which you probably want to add on your list of trekking excursions. Amongst those best summer treks in Sikkim, we have shortlisted top 5 treks of 2020, to which you cannot afford to say no if you are a true adventurist.
                            </p>


                            <div className="mb-8 bg-white">
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-4 mt-4">Dzongri – Goecha La Trek: Gateway to Khangchendzonga</h2>

                                <img src="/images/blogs/Dzongri-Goecha-La-Trek-1.webp" alt='' className='h-[250px] md:h-[350px] lg:h-[400px] w-full mb-8 mt-8  ' />


                                <p className="mb-2 mt-2 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    <b>Altitude:</b>
                                    13,800 ft (4,206 m)
                                </p>
                                <p className="mb-2 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    <b>Grade:</b>
                                    Moderate
                                </p>
                                <p className="text-[#313137] mb-2 mt-2 text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] ">
                                    <b>Duration:</b>
                                    10 days
                                </p>
                                <p className="text-[#313137] mb-2 mt-2 text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] ">
                                    <b>Trekking Distance:</b>
                                    80 km
                                </p>
                                <p className="text-[#313137] mb-2 mt-2 text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    <b>Route:</b>
                                    Yuksom-Tshoka-Dzongri-Thangsing-Samiti Lake-Goecha La
                                </p>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    First on the list is Dzongri, an ideal trek for those who are bushed of their life and, for a change, want to do some adventure activity. The venturous trail of Dzongri is best to trek in March, April and May when the enticing views of Kanchenjunga Peak awaits you to give a momentous experience to cherish. Commencing from Yuksom, a small historical town in West Sikkim, Dzongri Trek cuts through the spectacular vistas of meadows of moss, maple, and chestnut along with the Himalayan trees of oak, pine, and rhododendron. This 10 days trekking trail is perfectly suitable for those can’t afford to spend much time for an adventure trip in Sikkim. The main attraction during the trail of Dzongri – Goecha la Trek is the pleasing views of mighty mountains and their towering peaks. From Yuksom the trail ascends towards Tshoka, which is situated at an elevation of 3000 m, the journey cuts through the sublime rhododendron forests and the splashing small water streams. After Tshoka, strolling through the ravishing valleys and beauty gorges, the trek will lead off to Dzongri via Phedang (3650 m). The treasures worthy moments during this entire voyage are the impeccable sights of Sikkim Himalayan Peaks, especially Kanchenjunga. Other peaks include Mt Pandim (6691 m), Mt Jopuno, Mt Kabru South (7317 m), Mt Kabru North (7338 m), Mt Kokthang (6147 m), and few more Himalayan Peaks.


                                </p>


                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-4 mt-4">Yuksom Dzongri Trek: Discover the Different Hues of the Nature</h2>

                                <p className="mb-2 mt-2 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    <b>Altitude:</b>
                                    45000m
                                </p>
                                <p className="mb-2 mt-2 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    <b>Best time to Visit:</b>
                                    March to May and September to November
                                </p>
                                <p className="mb-2 mt-2 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    <b>Grade:</b>
                                    Moderate
                                </p>
                                <p className="text-[#313137] mb-2 mt-2 text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] ">
                                    <b>Duration:</b>
                                    7 days
                                </p>
                                <p className="text-[#313137] mb-2 mt-2 text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] ">
                                    <b>Trekking Distance:</b>
                                    60 km
                                </p>
                                <p className="text-[#313137] mb-2 mt-2 text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    <b>Route:</b>
                                    Yuksom – Tshoka – Dzongri
                                </p>

                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    The scenic hiking trail of Yuksom to Dzongri Trek is perfect to enjoy the mesmerizing views of Kanchenjunga from a binocular distance. Yuksom Dzongri is one of best treks to do between March and May in order to have a venturesome experience in Sikkim. The trekking course begins at Yuksom. By passing through the dense forests of pine, bamboo, oaks, and fir, the trail will lead to Tshoka (3000 m), a place which will fill the eyes with sights of unblemished verdure and a large species of birds at a different height. From there, the trail follows a steep climb to the mountain of Phedang (3650 m) in order to reach Dzongri (4030 m). Here, the appealing beauty of various Himalayan Peaks like Narshing (5825 m) Kabru (7353 m) Kanchenjunga (8534 m), Ratong (6678 m), Koktang (6147 m), and Pandim (6691 m), awaits to amaze trekkers. However, one can also take his/her trekking excursion to Goecha La from Dzongri. The route from Dzongri to Goecha La cuts through the walking tour of Thangsing Village (3800 m) and Samiti Lake (4500 m), which is enriched with the splendid vistas of alpine and glacial meadows.


                                    <a href='/trekking-in-sikkim/yuksom-dzongri-goecha-la' className='text-[#f47a2a] font-semibold'>Click here for Yuksom Dzongri Goecha La Trek Detailed Itinerary</a>


                                </p>
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-4 mt-4">Singalila Ridge Trek: A Perfect Family Trek</h2>
                                <img src="/images/blogs/Singalila-Ridge-Trek.webp" alt='' className='h-[250px] md:h-[350px] lg:h-[400px] w-full mb-8 mt-8  ' />
                                <p className="mb-2 mt-2 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    <b>Altitude:</b>
                                    3800m
                                </p>
                                <p className="text-[#313137] ">
                                    <b>Best time to Visit:</b>
                                    Mid-March to May and October to November
                                </p>
                                <p className="mb-2 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">

                                    <b>Duration:</b>
                                    7 days
                                </p>
                                <p className="mb-2 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">

                                    <b>grade: Easy to Moderate</b>
                                    7-8 days
                                </p>
                                <p className="mb-2 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">

                                    <b>Trekking Distance:</b>
                                    60 kms
                                </p>
                                <p className="mb-2 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">

                                    <b>Route:</b>
                                    Darjeeling-Manebhanjang-Tonglu-Gairibas-Sandakphu-Phalut-Raman-Rimbik
                                </p>

                                <p className="text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    Singalila Ridge is another best summer trek in Sikkim which an adventurist won’t mind adding in his summer trekking list. The beautiful nature trail of Singalila trek takes travellers from the garden-fresh tea estates of North Bengal to the mesmerizing views of various Sikkim Himalayan Peaks in order to reach the base Kanchenjunga Peak. Singalila Ridge Trek offers hikers a chance to sight the different hues of nature in the Eastern Himalayas. The trekking part of Singalila Ridge commences from Manebhanjan (2134 m) which is also esteemed as the Gateway to Singalila trek. This easy to moderate trail is also best to trek with your family as it offers jaw-dropping sights of prosperous verdure – alpine trees and medicinal plants, awe-inspiring sunrise, beaut streams, highlands, and various species of birds to capture. As the trekking trail continues to Gairibas (2620 m), Sandakphu (3640 m), Phalut (3600 m), and Rimbik (2280 m), travellers will get a chance to treat their eyes with the glimpse of mountains ornamented with verdure under the lustrous clouds.
                                    <a href='/trekking-in-sikkim/singalila-ridge-trek' className='text-[#f47a2a] font-semibold'>Click here for Singalia Ridge Trek Detailed Itinerary</a>

                                </p>

                            </div>
                            <div className="mb-8 bg-white">
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-4 mt-4">Green Lake Trek: Treasure Trove for Photographers</h2>

                                <img src="/images/blogs/green-lake-trek.webp" alt='' className='h-[250px] md:h-[350px] lg:h-[400px] w-full mb-8 mt-8  ' />


                                <p className="mb-2 mt-2 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    <b>Altitude:</b>
                                    4935m
                                </p>
                                <p className="text-[#313137] ">
                                    <b>Best time to Visit:</b>
                                    April and October
                                </p>
                                <p className="mb-2 mt-2 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">

                                    <b>Duration:</b>
                                    16 days
                                </p>
                                <p className="mb-2 mt-2 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">

                                    <b>grade:</b>
                                    Tough
                                </p>
                                <p className="mb-2 mt-2 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">

                                    <b>Trekking Distance:</b>
                                    92 km
                                </p>
                                <p className="mb-2 mt-2 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">

                                    <b>Route:</b>
                                    Lachen – Tallem – Jakthang – Yabuk – Green Lake
                                </p>


                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    Take yourself to the bold experience of North East India’s famous Green Lake Trek for an adventure tour. This less known yet amazing trek offers a melange of virgin views of green landscape, unalloyed sky and spectacular Sikkim Himalayas. The trail of this adventure tour leads you to the base of Kanchenjunga, a lush green terrain, painted with beauteous picturesque of frozen lakes and alpine trees. Green Lake trek, an unexplored excursion in the Sikkim Himalayas trudges through the enthralling tribal villages nestled on the transcending heights of the mountains. Along with the alpine trees, the travellers get the sights of rhododendrons forest, blooming plants and affluent wildlife to savour in the course of this trekking trail. However, the journey of Green Lake Trek commences from Lachen (2730 m) which is around 130 km from Gangtok followed by the trail to Tallem (3240 m) passing through Zema. The trail further ascends to Jakthang (3430 m) from Tallem and there to Yabuk (4040 m) through the panorama of splendid alpine timberland and small streams along with lush green landscapes.
                                    <a href='/trekking-in-sikkim/green-lake-trek' className='text-[#f47a2a] font-semibold'>Click here for Green Lake Trek Detailed Itinerary</a>
                                </p>
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-4 mt-4">Kanchenjunga Base Camp Trek: A Trek towards the Third Highest Peak in the World</h2>
                                <img src="/images/blogs/kanchenjunga-base-camp-trek.webp" alt='' className='h-[250px] md:h-[350px] lg:h-[400px] w-full mb-8 mt-8  ' />
                                <p className="mb-2 mt-2 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    <b>Altitude:</b>
                                    5200m
                                </p>


                                <p className="text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    <b>Best time to Visit:</b>
                                    Mid-March to Mid-June and Mid-September to November
                                </p>

                                <p className="text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    <b>Grade:</b>
                                    Moderate
                                </p>


                                <p className="mb-2 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">

                                    <b>Duration:</b>
                                    11 days
                                </p>
                                <p className="mb-2 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">

                                    <b>Trekking Distance:</b>
                                    90 km
                                </p>
                                <p className="mb-2 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">

                                    <b>Route:</b>
                                    Yuksom-Tshoka-Dzongri-Bikhbari-Chaurikhang and Rathong Glacier (Kanchenjunga Base Camp)
                                </p>

                                <p className="text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    Unfurl bewitching vistas of verdure-filled forests, tribal villages, remote valleys, and frozen lakes in the trek of world’s third highest peak and an esteemed tourist attraction, Kanchenjunga. Starting from Yuksom (3000 m) to Bakhim, the trail of Kanchenjunga base camp passes by covering Dzongri, Laxmi Pokhari, Bikhbari, Chaurikhang, and Rathong Glacier. Amidst of this trekking expedition, there come several moments when the travellers get flabbergasted by the ravishing vistas of Mt Khangchendzonga (8586 m), Mt Kokthang (6148 m), Mt Pandim (6691 m), Frey Peak (5830), Kabru Peak (7412 m) and few more peaks. Apart from all this, what makes this trek undoubtedly a trekkers’ soulmate is the beauty of serene villages, affluent tea-estates, snow-clad lustrous mountains, dense tropical forests concealed by nebulous clouds, and not forgetting, and the appealing landscapes. Being the third highest peak on the planet, the massifs of Kanchenjunga are spread over the boundaries of three countries – India, Tibet, and Nepal. Therefore, this year, plan your summer adventure holidays in the care of Kanchenjunga Peak.
                                    <a href='/trekking-in-sikkim/kanchenjunga-basecamp-trek' className='text-[#f47a2a] font-semibold'>Click here for Kanchenjunga Base Camp  Detailed Itinerary</a>

                                </p>


                                <p className=" mt-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">If you are in hunt of a tourism place for an indelible summer adventure experience in India, then give a shot to trekking in Sikkim. Trekking is a prominent adventure activity in Sikkim which makes the state amongst the best destinations to plan adventure tours. For any assistance, you can email or call us at +91-9212553109/9810352536 or mail us on info@trekkinginindia.com. We are an esteemed trekking tour operator and a travel agency, which provides the best adventure trips that too at an affordable price.</p>

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
                                        {[...BlogsList] // Create a copy of the array to avoid mutating the original
                                            .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date (newest first)
                                            .slice(0, 5) // Optional: only show the 5 most recent posts
                                            .map((post, index) => (
                                                <Link href={`/${post.slug}`} key={index}>
                                                    <div key={index} className="flex gap-3 mb-4 border-b pb-3 border-b-[#f47a2a]">
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
                                        {BlogsList.slice(0,5).map((post, index) => (
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

export default TopTreksSikkimSummer