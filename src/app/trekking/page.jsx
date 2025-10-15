
"use client"
import React from 'react';
import { useState } from 'react';
import trekData from '../../components/trekdestinationcard/trekdata';
import TrekCardSlider from '@/components/treckcardslider/TrekCardSlider';
import Banner from '@/components/banners/Banner';
import Breadcrumb from '@/components/breadcrumbs/Breadcrumb';
import CtaButton from '@/components/ctabutton/CtaButton';
import ModalPortal from '@/components/ModalPortal';
import TripBookingForm from '@/components/form/TripBookingForm';

const page = () => {
  const [showMore, setShowMore] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const gadhwaltrekData = trekData.filter((trek => trek.region === "Garhwal"));
  const himachaltrekData = trekData.filter((trek => trek.region === "Himachal"));
  const sikkimtrekData = trekData.filter((trek => trek.region === "Sikkim"));
  const ladakhltrekData = trekData.filter((trek => trek.region === "Ladakh"));
  const kumaontrekData = trekData.filter((trek => trek.region === "Kumaon"));
  return (
    <>

      <Banner title="Trekking" image="/images/trekking-banner.jpg" />
      <Breadcrumb current="trekking" />
      <section className='packages py-4 px-4 sm:px-6 lg:px-8'>
        <div className='destinations-page__trek-grades max-w-4xl md:max-w-6xl  xl:max-w-7xl mx-auto my-5'>
          <h1 className="text-xl sm:text-2xl  xl:text-4xl font-bold text-[#172541]">
            Hiking & Trekking Tours in the Himalayas
          </h1>

          <p className="mt-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-4">
            The mighty Indian Himalayas, jewel of the delicate nature and stupendous atmosphere provides spectacular overflow of trails available for adventure lovers. Trekking & hiking in the Indian Himalayas is every climbers dream come true and doing so in the winter months is even more alluring as the snow covers the trees and the mountain ranges also clad themselves with thick white blankets. This sight attracts the globe trotters and climbers from across the world. Some of the best treks of the Himalayas are accessible from every part of the Himalayan region like Sikkim to Ladakh, Uttarakhand to Himachal and Kashmir to Arunachal Pradesh.
          </p>

          <p className="mt-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-4">
            When it comes to trekking in Garhwal, this region of Uttarakhand has been entrusted with magnetic natural beauty. The rugged terrain and landscape of this untouched divine call thousands of trekkers every year to fast track the slippery slopes. Garhwal Himalayas offers ample opportunities to endurance travellers to taste their hiking capabilities. Their deep wildernesses of mountains are ranged from moderate to tough, it is home to many glaciers and lakes making mountain expeditions fun and spruce and one can swing along the spiritual treks that Garhwal range offers like the Chandrashila Trek which is one of the famous treks liked by adventurers and Har ki dun trek for those who like peaceful and moderate trekking experience.
          </p>

          <p className="mt-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-4">
            Experience Himalayan hiking in the Kumaon hills of Uttarakhand, this region offers picturesque trails skirted by thick forests and dim sunlight. The out of this world charm of this region is its meandering trails with pine trees on each side, its waterfalls and criss-crossing narrow trails will mesmerise and dazzle you. The trekking trails will take you to some of amazing points overlooking the alluring contrast of earth and the sky. Kumaon's pristine beauty and whiff of pine and oak forests and enchanting, brimming wild flora and fauna make it an incredible place for trekking in India. You can find such appealing trails in the form of Panchchuli Base Camp Trek and Pindari Glacier trek which are though regarded as tough but are worth it.
          </p>

          <p className="mt-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-4">
            Himalayas in Ladakh region offers arid compass and provides a rich trekking opportunity for adrenaline junkies. Its incredible topography of hilly terrains is no doubt a paradise and a hub of breathtaking activities venturing the enchanting valleys and glacier. Ladakh trekking expedition is surely to come across scenic beauty of the hills and you can connect with the spiritual world of Buddhist culture. The landscape of Ladakh region has been blessed with pristine backdrop and artistic view, Nubra valley and Markha Valley for instance holds some spectacular wildlife and scenic scenes as you ascend further.
          </p>


          {/* Toggle section starts here */}
          {showMore && (
            <>
              <p className="mt-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-4">
                Sikkim on the other side has its own share of rustic charm and mesmerising landscape. Blanket of snow cover the mountain tops, and icy water gushes between the charming meadows, it is an abode of peace and serene ambiance. The Himalayas of Sikkim is dotted with enchanting trails that run in the midst of rich flora and fauna. An adventure holiday in the Sikkim Himalayas can help replenish and relax that imaginative brain before you head out to the real-life. Whether you are an amateur or an expert trekker the snow clad Sikkim Himalayan Mountains has flavours for everybody, and you can attempt trek like Singalila Ridge which is one of the famous trails in all of Himalayan peaks.
              </p>
              <p className="mt-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-4">
                Himachal Pradesh is truly a paradise and splendid with astonishing scenic views of the Himalayan peaks. It offers numerous trekking trails like the Chandra Tal which is also known as "Moon Lake" and Beas Kund Trek to name a few, and it is rightly a paradise for trekkers who adore solitude as these trails offer wilderness amidst serene settings. Every year the mountains and valleys of Himachal blooms with vibrant and colourful flowers during the season of summers and monsoon. Experience snow trekking during winters, an exposure worth blabbering for as the winter brings snow to the region covering the entire valley and landscape with winter flurry. Explore the untouched beauty of the Himachal's Himalayan peaks and remote lands that exude of pure bliss.
              </p>

              <p className="mt-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-4">
                Trekking in the Himalayas is worldliness an experience, which is to show and tell about its calm and vigorous facet. With the Himalayan adventure tours to dwell upon, we provide some first hand information about deals and promise to venture these gigantic mountains and lush valleys to make your trekking in India an experience of a lifetime.
              </p>

              <p className="mt-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb-4">
                Trekking in the Himalayas is worldliness an experience, which is to show and tell about its calm and vigorous facet. With Indian Himalayan adventure tours to dwell upon, with tour operators like us who offer first hand information about deals and promise to venture out these gigantic mountains and lush valleys, trekking in India is probably an experience of a lifetime.
              </p>
            </>
          )}

          <button
            onClick={() => setShowMore(!showMore)}
            className="text-sm sm:text-base mt-2 text-[#ffffff] bg-[#f47a2a] hover:underline focus:outline-none p-3 rounded-md"
          >
            {showMore ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </section>



      <section className='section-trek-packages'>
        <div className='bg-[#fefaf7] pb-4 pt-4 mb-6 px-6'>
          <div className="" >
            <h2 className=" mb-3 text-[1rem]  sm:text-[1.1rem] md:text-[2rem] lg:text-[2.5rem] text-center font-bold text-[#172541]  relative" >Garhwal Trekking Holidays</h2>
            <TrekCardSlider TrekData={gadhwaltrekData} />
          </div>

        </div>

        <div className='bg-[] pt-4 pb-4 mb-6 px-6'>
          <div className=" ">
            <h2 className=" mb-3 text-[1rem]  sm:text-[1.1rem] md:text-[2rem] lg:text-[2.5rem] text-center font-bold text-[#172541] relative ">Himachal Trekking Holidays</h2>
            <TrekCardSlider TrekData={himachaltrekData} />
          </div>
        </div>


        <div className='bg-[#fefaf7] pb-4 pt-4 mb-6 px-6'>
          <div className="">
            <h2 className=" mb-3 text-[1rem]  sm:text-[1.1rem] md:text-[2rem] lg:text-[2.5rem] text-center font-bold text-[#172541]  relative">
              Sikkim Trekking Holidays</h2>
            <TrekCardSlider TrekData={sikkimtrekData} />
          </div>
        </div>

        <div className='bg-[]  pb-4 pt-4 mb-6 px-6'>
          <div className="">
            <h2 className=" mb-3 text-[1rem]  sm:text-[1.1rem] md:text-[2rem] lg:text-[2.5rem] text-center font-bold text-[#172541]  relative ">Ladakh Trekking Holidays</h2>
            <TrekCardSlider TrekData={ladakhltrekData} />
          </div>
        </div>

        <div className='bg-[#fefaf7] pb-4 pt-4  mb-6 px-6'>
          <div className="">
            <h2 className="mb-3 text-[1rem] sm:text-[1.1rem] md:text-[2rem] lg:text-[2.5rem] text-center font-bold text-[#172541]  relative">Kumaon Trekking Holidays</h2>
            <TrekCardSlider TrekData={kumaontrekData} />
          </div>
        </div>


      </section>

      <CtaButton />


    </>
  )
}

export default page