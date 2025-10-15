
"use client"
import React from 'react';
import trekData from '../trekdestinationcard/trekdata';
import { renderStars } from '../starratings/starratings';
import TrekCardSlider from '../treckcardslider/TrekCardSlider';
import Banner from '../banners/Banner';
import Breadcrumb from '../breadcrumbs/Breadcrumb';
import CtaButton from '../ctabutton/CtaButton';

const Trekking = () => {
  const gadhwaltrekData = trekData.filter((trek => trek.region === "Garhwal"));
  const himachaltrekData = trekData.filter((trek => trek.region === "Himachal"));
  const sikkimtrekData = trekData.filter((trek => trek.region === "Sikkim"));
  const ladakhltrekData = trekData.filter((trek => trek.region === "Ladakh"));
  const kumaontrekData = trekData.filter((trek => trek.region === "Kumaon"));
  return (

    <>

<Banner title="Activities" image="/images/ladakh.webp"/>
<Breadcrumb/>
    <section className='bg-white'>
      <div className='container mx-auto px-4 py-8 max-w-[1200px]'>
        <div className=' mb-12'>
          <h1 className='text-4xl md:text-4xl font-bold text-gray-900 mb-6'>
            Hiking & Trekking Tours in the Himalayas
          </h1>
          <p className='text-[#313137]  text-base  leading-relaxed mb-4'>The mighty Indian Himalayas, jewel of the delicate nature and stupendous atmosphere provides spectacular overflow of trails available for adventure lovers. Trekking & hiking in the Indian Himalayas is every climbers dream come true and doing so in the winter months is even more alluring as the snow covers the trees and the mountain ranges also clad themselves with thick white blankets. This sight attracts the globe trotters and climbers from across the world. Some of the best treks of the Himalayas are accessible from every part of the Himalayan region like Sikkim to Ladakh, Uttarakhand to Himachal and Kashmir to Arunachal Pradesh.</p>
          <p className='text-[#313137]  text-base  leading-relaxed mb-4'>When it comes to trekking in Garhwal, this region of Uttarakhand has been entrusted with magnetic natural beauty. The rugged terrain and landscape of this untouched divine call thousands of trekkers every year to fast track the slippery slopes. Garhwal Himalayas offers ample opportunities to endurance travellers to taste their hiking capabilities. Their deep wildernesses of mountains are ranged from moderate to tough, it is home to many glaciers and lakes making mountain expeditions fun and spruce and one can swing along the spiritual treks that Garhwal range offers like the Chandrashila Trek which is one of the famous treks liked by adventurers and Har ki dun trek for those who like peaceful and moderate trekking experience.</p>
          <p className='text-[#313137]  text-base  leading-relaxed mb-4'>Experience Himalayan hiking in the Kumaon hills of Uttarakhand, this region offers picturesque trails skirted by thick forests and dim sunlight. The out of this world charm of this region is its meandering trails with pine trees on each side, its waterfalls and criss-crossing narrow trails will mesmerise and dazzle you. The trekking trails will take you to some of amazing points overlooking the alluring contrast of earth and the sky. Kumaon's pristine beauty and whiff of pine and oak forests and enchanting, brimming wild flora and fauna make it an incredible place for trekking in India. You can find such appealing trails in the form of Panchchuli Base Camp Trek and Pindari Glacier trek which are though regarded as tough but are worth it.</p>
          <p className='text-[#313137]  text-base  leading-relaxed mb-4'>Himalayas in Ladakh region offers arid compass and provides a rich trekking opportunity for adrenaline junkies. Its incredible topography of hilly terrains is no doubt a paradise and a hub of breathtaking activities venturing the enchanting valleys and glacier. Ladakh trekking expedition is surely to come across scenic beauty of the hills and you can connect with the spiritual world of Buddhist culture. The landscape of Ladakh region has been blessed with pristine backdrop and artistic view, Nubra valley and Markha Valley for instance holds some spectacular wildlife and scenic scenes as you ascend further.</p>
          <p className='text-[#313137]  text-base  leading-relaxed mb-4'>Sikkim on the other side has its own share of rustic charm and mesmerising landscape. Blanket of snow cover the mountain tops, and icy water gushes between the charming meadows, it is an abode of peace and serene ambiance. The Himalayas of Sikkim is dotted with enchanting trails that run in the midst of rich flora and fauna. An adventure holiday in the Sikkim Himalayas can help replenish and relax that imaginative brain before you head out to the real-life. Whether you are an amateur or an expert trekker the snow clad Sikkim Himalayan Mountains has flavours for everybody, and you can attempt trek like Singalila Ridge which is one of the famous trails in all of Himalayan peaks.</p>
          <p className='text-[#313137]  text-base  leading-relaxed mb-4'>Himachal Pradesh is truly a paradise and splendid with astonishing scenic views of the Himalayan peaks. It offers numerous trekking trails like the Chandra Tal which is also known as "Moon Lake" and Beas Kund Trek to name a few, and it is rightly a paradise for trekkers who adore solitude as these trails offer wilderness amidst serene settings. Every year the mountains and valleys of Himachal blooms with vibrant and colourful flowers during the season of summers and monsoon. Experience snow trekking during winters, an exposure worth blabbering for as the winter brings snow to the region covering the entire valley and landscape with winter flurry. Explore the untouched beauty of the Himachal's Himalayan peaks and remote lands that exude of pure bliss.</p>
          <p className='text-[#313137]  text-base  leading-relaxed mb-4'>Trekking in the Himalayas is worldliness an experience, which is to show and tell about its calm and vigorous facet. With the Himalayan adventure tours to dwell upon, we provide some first hand information about deals and promise to venture these gigantic mountains and lush valleys to make your trekking in India an experience of a lifetime.</p>
          <p className='text-[#313137]  text-base  leading-relaxed mb-4'>Trekking in the Himalayas is worldliness an experience, which is to show and tell about its calm and vigorous facet. With Indian Himalayan adventure tours to dwell upon, with tour operators like us who offer first hand information about deals and promise to venture out these gigantic mountains and lush valleys, trekking in India is probably an experience of a lifetime.</p>
        </div>

        <div className="">
          <div  className="trek-slider" >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 relative pb-2" >Garhwal Trekking Holidays</h2>
            <TrekCardSlider TrekData={gadhwaltrekData} />
          </div>


          <div  className="trek-slider">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 relative pb-2"> Himachal Trekking Holidays</h2>
            <TrekCardSlider TrekData={himachaltrekData} />
          </div>



          <div  className="trek-slider">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 relative pb-2">Sikkim Trekking Holidays</h2>
            <TrekCardSlider TrekData={sikkimtrekData} />
          </div>
       
          <div className="trek-slider">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 relative pb-2">Ladakh Trekking Holidays</h2>
            <TrekCardSlider TrekData={ladakhltrekData} />
          </div>


          <div className="trek-slider">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 relative pb-2"> Kumaon Trekking Holidays</h2>
            <TrekCardSlider TrekData={kumaontrekData} />
          </div>
        </div>


        </div>

    </section>
    <CtaButton/>

  </>
  )
}

export default Trekking