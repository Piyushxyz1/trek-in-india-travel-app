"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Banner from '@/components/banners/Banner';
import Breadcrumb from '@/components/breadcrumbs/Breadcrumb';
import trekData from '../../components/trekdestinationcard/trekdata';
import { FaPhone } from 'react-icons/fa';
import { renderStars } from '@/components/starratings/starratings';
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import DestinationsTrekCard from '@/components/trekdestinationcard/DestinationsTrekCard';

const WeekendTreks = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const weekendTrekData = trekData.filter(trek => trek.category === 'weekend');
    
    return (
        <div className="bg-white">
            <Banner title="Weekend Treks" image="/images/darjeeling-banner.webp" />
            <Breadcrumb href="/destinations" current="Weekend Treks" />

            <div className="w-full max-w-[1200px] px-4 py-8 mx-auto">
                <section className=" ">
                    <h1 className="text-4xl font-bold text-[#172541] mb-5">Weekend Treks from Delhi</h1>
                    <p className="mt-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                     The mighty Himalayas are the cure for those bitten by the adventure bug. The Himalayan Mountains, glaciers, trails and destinations offer just the kind of thrills an adventure buff is on the lookout. In this direction, the Indian Himalayas are a platform to realize all the adventure fantasies. Trekking in the Indian Himalayas has been reckoned as a way to experience the real enthrallment. There are opportunities to explore some exquisite destinations in Himachal Pradesh and Uttarakhand, for that matter. There are several Indian Himalayan Treks that can also be done over a weekend from Delhi. On these adventurous treks get the opportunity to witness scenic villages; lofty and undulating mountain ranges; vast meadows and unparalleled scenes of rivers flowing through valleys, also if lucky, sight exclusive Himalayan wild animals and beautiful sunrise and sunsets. Take delight in the intermittent interactions with locals and a sneak-peek at their simple lives and enjoy treks that are all-season open to all but still remain to be a secret amongst trekkers.
                    </p>
                    <p className="mt-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                        We give you the chance to rejuvenate yourself with the help of our exclusive Weekend Treks from Delhi. Seeking to make the most of a weekend for adventurists and to cater to the requirements of revitalizing, refreshing and curing the wanderlust after a hectic or a lazy week; our weekend treks ensure a unique and holistic experience altogether.
                    </p>
                </section>

                <section className="flex flex-col items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                        {weekendTrekData.map(trek => (
                            <DestinationsTrekCard key={trek.id} trek={trek} renderStars={renderStars} />
                        ))}
                    </div>
                </section>

                <section className="py-8">
                    <h2 className="text-4xl text-[#172541] font-semibold mb-8 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-1 after:bg-[#f47a2a]">
                        GETTING THERE:
                    </h2>
                    <p className="mt-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                        The nearest airstrip to Darjeeling and Sikkim is Bagdogra in North Bengal. Flights from Calcutta, Delhi and the north east connect this sector. The nearest railhead is Siliguri (114 km) and New Jalpaiguri (125 km) connecting Calcutta, Delhi, Guwahati and other important cities in India, to Darjeeling and Sikkim.
                    </p>
                    
                    <h2 className="text-4xl text-[#172541] font-semibold mb-8 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-1 after:bg-[#f47a2a]">
                        TREKKING ROUTES:
                    </h2>
                    <p className="mt-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                        Treks in the Darjeeling area join up with the feeder Sikkim valleys of the Rangit river adjoining the Singalia ridge. Kanchenjunga is the prominent feature, its subsidiary peaks spread alongside with distant Everest also in view. Medium or strenuous grade trekking trips can be undertaken using Darjeeling as a convenient departure point.
                    </p>
                    <p className="mt-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                        <b>Darjeeling-Batasi-Tonglu-Sandakphu:</b> This is a 6-7 days moderate trek from Maneshanjang which is 26 km by road from Darjeeling. Ideal for views along a standard trail. The route is famed for its view of Kanchenjunga, Mt. Everest and rhododendrons from Phalut and Sandakphu.
                        <br/>Darjeeling-Pemayangtse-Yoksam-Dzongri: 6 days exhilarating trek with exclusive views of the brilliant Dzongri sunset over Kanchenjunga.
                    </p>

                    <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
                        <div className="lg:w-1/2">
                            <h3 className="text-3xl text-[#34495e] font-normal mb-4">Frozen 'Chadar Trek'</h3>
                            <p className="text-base text-[#313137] leading-relaxed">
                                Frozen 'Chadar Trek': For many ardent trekkers, the major draw to Ladakh is the magical 'Chadar Trek'. Undoubtedly, the most fascinating and challenging of all the treks in the region, the Chadar trek offers you an unparalleled experience of witnessing the sheer beauty of Himalayas in peak winters. The trek takes you through the serene Zanskar valley tucked away in deep remoteness of Zanskar ranges covered in thick layers of snow. As you walk along the frozen Zanskar River, the eye-catching scenery of frozen waterfalls, ever-changing shades of snow-covered mountains and miraculous natural rock formations keep you engaged and mesmerized. Offering a feast to your eyes, the trek tests both, your physical and mental endurance. Navigating your ways through deep ravines and narrow ridges braving a sub-zero temperature and feeling your senses going numb; this trek, for sure, can run down a chill down your spine and simultaneously, present you with the most blissful experience of your lifetime.
                            </p>
                        </div>
                        <div className="lg:w-1/2 flex justify-center">
                            <img 
                                src="/images/ladakh.webp" 
                                className="w-96 h-96 rounded-full object-cover border-8 border-[#ADD8E6] shadow-lg transition-all duration-300 hover:shadow-xl" 
                                alt="Chadar Trek"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-16">
                        <div className="lg:w-1/2">
                            <h3 className="text-3xl text-[#34495e] font-normal mb-4">Sham Valley Trek</h3>
                            <p className="text-base text-[#313137] leading-relaxed">
                                Sham Valley Trek: Also known as the 'Baby Trek', the Sham Valley trek is the easiest of the treks in Ladakh and offers ample opportunities to witness various beautiful monasteries including Alchi, Lamayuru, Spituk and Likir. This trek is a perfect choice for trekkers who along with revelling in the fun of trekking, also wish to have a glimpse at lifestyle and culture of Ladakh. Needless to say, the scenic beauty and the tranquillity of the trek is also something to cherish for your lifetimes.
                            </p>
                        </div>
                        <div className="lg:w-1/2 flex justify-center">
                            <img 
                                src="/images/trek-photo-2.jpeg" 
                                className="w-96 h-96 rounded-full object-cover border-8 border-[#ADD8E6] shadow-lg transition-all duration-300 hover:shadow-xl" 
                                alt="Sham Valley"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
                        <div className="lg:w-1/2">
                            <h3 className="text-3xl text-[#34495e] font-normal mb-4">Markha Valley Trek</h3>
                            <p className="text-base text-[#313137] leading-relaxed">
                                Markha Valley Trek: Situated on the foothills of the majestic 'Kang Yatse' peak, Markha Valley is the most beautiful valley of Ladakh. A paradise for trekkers, the valley is dotted with some of the most varied and scenic trekking trails of entire Ladakh region. Luring many ardent trekkers from across the globe, the trek offers splendid vistas of nature that include but, are not limited to bustling rivers, narrow and deep gorges, steep canyons, emerald green meadows, fairy-tale villages and terrains of multi-hued rocks. For wildlife lovers, the trek is a dream come true as it takes them through the hub of Himalayan wildlife, the gorgeous 'Hemis National Park' giving them ample opportunities to witness rare species of Himalayan animals and birds. The trek also provides with a chance to have a closer look at the Ladakhi lifestyle by staying in remote village houses and interacting with local people. The captivating views of the 'Stok Kangri' peak are the additional highlights of this trek.
                            </p>
                        </div>
                        <div className="lg:w-1/2 flex justify-center">
                            <img 
                                src="/images/markha-valley-trek.webp" 
                                className="w-96 h-96 rounded-full object-cover border-8 border-[#ADD8E6] shadow-lg transition-all duration-300 hover:shadow-xl" 
                                alt="Markha Valley"
                            />
                        </div>
                    </div>

                    <h2 className="text-4xl text-[#172541] font-semibold mb-8 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-1 after:bg-[#f47a2a]">
                        Best season for traveller to Darjeeling
                    </h2>
                    <p className="mt-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                        The most rewarding season for travelling through Darjeeling and Sikkim is between May to October. The winters are very cold and the region is swamped by fog. The rainy season makes trekking unsafe. Plan your trip well in advance and enquire about the weather conditions before setting out.
                    </p>
                    <p className="mt-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                        The monsoon in the Teesta valley is heavy, lasting from early June till mid September for Sikkim and Darjeeling. For this reason, winter treks are recommended, beginning with October. Though the period from April to end May is also preferred.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default WeekendTreks;