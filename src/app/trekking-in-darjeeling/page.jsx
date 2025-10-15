"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Banner from '@/components/banners/Banner';
import Breadcrumb from '@/components/breadcrumbs/Breadcrumb';
import trekData from '../../components/trekdestinationcard/trekdata';
import { FaPhone, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { renderStars } from '@/components/starratings/starratings';
import DestinationsTrekCard from '@/components/trekdestinationcard/DestinationsTrekCard';

const Darjeeling = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const TrekData = trekData.filter(trek => trek.region === 'Jammu and Kashmir');

  return (
    <section className="bg-white">
      <Banner title="Trekking in Darjeeling" image="/images/darjeeling.jpg" />
      <Breadcrumb  href = "/destinations"  current="Darjeeling" />
      
      <div className=" max-w-4xl md:max-w-6xl  xl:max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Introduction Section */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Trekking in Jammu & Kashmir
          </h1>
          <p className="text-lg text-[#313137]  leading-relaxed">
            Witness the wild side of Jammu and Kashmir that is thrilling, mesmerizing and sometimes nerve wrecking by going for a trekking tour. Explore the best of Kashmir by simply signing up a trek mentioned below that will thrill you to pieces.
          </p>
        </div>

        {/* Trek Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {TrekData.map(trek => (
            <DestinationsTrekCard key={trek.id} trek={trek} renderStars={renderStars} />
          ))}
        </div>

        {/* Detailed Content Section */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-2 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-20 after:h-1 after:bg-orange-500">
            What to look out on your trekking expedition in Kashmir?
          </h2>
          <p className="text-[#313137]  mb-8 leading-relaxed">
            Making way through the red carpet of Chinar leaves, snow-swept mountains whiter than the Pashmina goat and lattices of green fields; Kashmir let out your collective gasp the movement you enter here. And of course, Sun coupled with rain and cloud gave an iridescent effect something hard to miss. For adventurers and wanderlust-struck, there are unlimited trekking options in Kashmir, with every nook and cranny having a unique story to tell and something to offer. While trekking, you will come across several species of flora and fauna sprinkled across the green meadows, experience some spitters (snowfall) as the Scotts like to call it, apple orchards, and if you sum up all these together, you will realize why Kashmir is referred to as the paradise on this earth. Even in the night, ineffable beauty of this place can keep you awake as the sky changes its colour in the evening. Even for relatively season trekkers, the prospect of hiking through the alpine pastures around Gulmarg, even if just for three days, can be exhilarating.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-2 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-20 after:h-1 after:bg-orange-500">
            Meet and greet local people
          </h2>
          <p className="text-[#313137]  mb-8 leading-relaxed">
            People in this part of India are charming and welcoming. So when you visit Kashmir, don't forget to pay a visit to the nomadic villages, where goatherds and shepherds will welcome you with a generous smile. Enjoy a cup of tea with them and get to know more about the region. As you interact and spend few moments with the local people of the area, you would realize that how they live their lives, without any interferences from technology, the internet, and social media.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-2 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-20 after:h-1 after:bg-orange-500">
            Explore one of the most beautiful destinations in India
          </h2>
          <p className="text-[#313137]  mb-8 leading-relaxed">
            Kashmir is beautiful and indeed a paradise! From gardens to mountains to lakes, there are multiple sightseeing options in Kashmir. Gulmarg, Sonmarg, Pahalgam, Aru valley, Yusmarg and Narana, are some mesmerizing places in Kashmir that deserve to be a part of your itinerary. With every step you take, a different side of Kashmir unfolds, making your trek even more memorable. So don't forget to take your camera to capture the panoramas of dewy meadows, carpets of colourful alpine flowers, snow-white glaciers, alpine woodlands, gurgling rivers and beautiful fruit orchards.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-2 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-20 after:h-1 after:bg-orange-500">
            To get close to nature
          </h2>
          <p className="text-[#313137]  mb-16 leading-relaxed">
            Simply adding thrill to the Trek is the fact that the trek in Kashmir offers multiple opportunities to spot animals like Tibetan antelopes, Himalayan Thar, Musk Deer, Bharals, leopard cats and even the elusive snow leopard. Also, here bird watchers can see a huge variety of birds flying free in the sky. Also if lucky, you might spot Changthangi, goat bread which is known for growing ultra-fine cashmere wool.
          </p>

          {/* Trek Highlights Section */}
          <div className="space-y-16 mb-16">
            {/* Pin Parvati Trek */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Pin Parvati Trek:</h3>
                <p className="text-[#313137] ">
                  One of the most challenging and enthralling treks in Himachal, the trek requires you to have excellent trekking skills. Taking you through dense forests of Himalayan National Park, making your cross burbling rivers, negotiating through snow fields and glacial beds; the trek is a test of both, your physical and mental fitness. Needless to say enchanting vistas of snow-capped peaks and hanging glaciers keep you engaged and motivated along the journey.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-blue-100 shadow-xl">
                  <img src="/images/ladakh.webp" alt="Pin Parvati Trek" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Chandrakhani Pass Trek */}
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="md:w-1/2">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Chandrakhani Pass Trek:</h3>
                <p className="text-[#313137] ">
                  Taking you to a height of 3600 metres above sea level, the Chandrakhani Pass Trek makes you traverse through beautiful alpine meadows, lush walnut & cherry orchards, blue pines & silver oaks forests and picturesque valleys. Offering you gorgeous views of snow-covered Pir-Panjal and Parvati mountain ranges, the trek is a magical experience for its every traveller.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-blue-100 shadow-xl">
                  <img src="/images/trek-photo-2.jpeg" alt="Chandrakhani Pass Trek" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Malana Village Trek */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Malana Village Trek:</h3>
                <p className="text-[#313137] ">
                  An extension of Chandrakhani Pass Trek, the Malana Village trek takes you to the isolated village notoriously known for its marijuana and malana cream. Wary of any outside influence, the villagers of Malana have their own laws and jurisdictions. Forgetting the notorious side of Malana, the tranquil settings, serene beauty and inimitable location of the place provides extreme peace and solace to fatigued souls of city dwellers. The trek, for sure provides a unique and wonderful experience to every trekker.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-blue-100 shadow-xl">
                  <img src="/images/markha-valley-trek.webp" alt="Malana Village Trek" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* Best Time Section */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-2 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-20 after:h-1 after:bg-orange-500">
            What is the best time to go for trekking in Kashmir?
          </h2>
          <p className="text-[#313137]  mb-8 leading-relaxed">
            Best time to go for trekking to Kashmir is monsoon season; May, June, July, August, September and October, as this when the landscapes are in full bloom and the sky is clear to see the view of mountains. Also, this is the best time to see the real colours of nature teaming with a carpet of lush meadow and striking orchards, flanked by the looming mountains.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-2 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-20 after:h-1 after:bg-orange-500">
            Which are best treks in the Kashmir region?
          </h2>
          <p className="text-[#313137]  mb-8 leading-relaxed">
            Dominated by the Great Karakoram Range and Nun-Kun mountains to the north, Shivalik and Zanskar Range to the south, Gurals Valley to the west and Kailash, Pangong and Lokzhung Range to the east, geographical location of Kashmir makes it a paradise for trekkers. In and out there are more than ten treks in Kashmir that can charm and enthrall anyone with its beauty. Talking about the easy going treks, you can opt for Mohanmarg Meadow, which takes hardly few days to complete. More audacious trekkers can take Gangabal Lake Trek, Kashmir Great Lakes Trek and Tarsar-Marsar Lake trek. Even after Kashmir being the talk of every trekker, many treks in Kashmir still remain unspoilt and untouched.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Darjeeling;