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
import CtaButton from '@/components/ctabutton/CtaButton';

const WinterTreks = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const weekendTrekData = trekData.filter(trek => trek.category === 'weekend');
    
    return (
      <>
        <div className="bg-white">
            <Banner title="Winter Treks" image="/images/darjeeling-banner.webp" />
            <Breadcrumb href="/destinations" current="Weekend Treks" />

            <div className="w-full max-w-6xl px-4 py-8 mx-auto">
                <section className=" mx-auto">
                    <h1 className="text-4xl font-bold text-[#172541] mb-5">Winter Trekking in the Himalayas</h1>
                    <p className="mt-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                    INDIAN HIMALAYA TREKKING! That too during winter! While thinking about this expedition; teeth would have started clinching, and mind started picturing trekking in biting cold under the burning sun. Everything white and grey all around, Indian Himalaya is a sight to behold during the winter season, especially when you are going for trekking. Walking on ice sheets in sub-zero temperatures through snow drenched mountain, magical oak forests, frozen waterfall, snowy grasses, and rare animals, winter trekking in Indian Himalaya is a hair-raising experience. Ardent trekkers from different corners of the world visit Indian Himalaya in the winter months just to feel the heat of trekking, not caring about the bruises and exploring forbidding terrains to experience the Earth like no others. Not only winter is the best time to feel the adrenaline rush, but also a good opportunity to visit for animals lovers. Snow Leopard Trek, which happens in Ladakh, gives you a chance to sight the rarest of the species like snow leopard, Tibetan wolves, blue sheep, and horned sheep. Even trekking in winters gives one an opportunity to walk on the snow. Chadar Trek, which takes place in Ladakh, gives one an idea of experiencing first-hand the thrill of trekking on snow in sub-zero temperatures in a terrain completely unfamiliar and often challenging. Besides thrill and adventure quotient, trekking in winter can be scenic too. Offering the breathtaking snow view of the Himalayas, Chopta Chandrashila is one of the most beautiful and picturesque winter trekking spots in India that has always pulled the attention of many adventure seekers. From birdies to thrill seekers to wanderlust, in India you can find winter trek for every interest.
                    </p>
                    <p className="mt-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                  So what are you waiting for? Lace up your boots, gather your wits and prepare yourself to hike through narrow pathways, snow clad mountains, and dense thickets of the winter treks. All the treks offered by us are designed, and tailor made keeping in mind all the requirements that a trekker looks for in an ideal trip- relaxing, refreshing and breathtaking.
                    </p>
                </section>

                <section className="flex flex-col items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                        {weekendTrekData.map(trek => (
                            <DestinationsTrekCard key={trek.id} trek={trek} renderStars={renderStars} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
        <CtaButton/>
        </>
    );
};

export default WinterTreks;