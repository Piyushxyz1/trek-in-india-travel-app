
"use client"
import React, { useState } from 'react';

import Banner from '../../../assets/banners/Banner';
import Breadcrumb from '../../../assets/breadcrumbs/Breadcrumb';
import "./css/trekdestinations.css";
import { FaPhone } from 'react-icons/fa';
import { renderStars } from '../../../assets/starratings/starratings';
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';
import DestinationsTrekCard from '../../../assets/DestinationsTrekCard';
 import trekData from '../../../assets/trekdata';




const JammuKashmir = () => {

    const [activeFilter, setActiveFilter] = useState('all');
    const TrekData = trekData.filter(trek => trek.region === 'Jammu and Kashmir');

    return (
        <section className="destinations-page">
            <Banner title="Trekking in Jammu & Kashmir" image="/images/jkbanner.webp" />
            <Breadcrumb  href = "/destinations"  current="Jammu & Kashmir" />
            <div className="destinations-page__container">
                <div className="destinations-page__intro">
                    <h1>Trekking in Jammu & Kashmir</h1>
                    <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                        Witness the wild side of Jammu and Kashmir that is thrilling, mesmerizing and sometimes nerve wrecking by going for a trekking tour. Explore the best of Kashmir by simply signing up a trek mentioned below that will thrill you to pieces.</p>
                </div>

                <div className="destinations-page__trek-grades">

                    <div className="destinations-page__trek-cards">
                        {TrekData.map(trek => (
                      <DestinationsTrekCard key={trek.id}  trek = {trek}  renderStars={renderStars}/>
                        ))}
                    </div>
                </div>
                <div class="destinations-page__section max-w-4xl md:max-w-6xl  xl:max-w-7xl  mx-auto px-4 md:px-8 ">
                    <h2 class="destinations-page__heading">What to look out on your trekking expedition in Kashmir?</h2>
                    <p class="destinations-page__text">Making way through the red carpet of Chinar leaves, snow-swept mountains whiter than the Pashmina goat and lattices of green fields; Kashmir let out your collective gasp the movement you enter here. And of course, Sun coupled with rain and cloud gave an iridescent effect something hard to miss. For adventurers and wanderlust-struck, there are unlimited trekking options in Kashmir, with every nook and cranny having a unique story to tell and something to offer. While trekking, you will come across several species of flora and fauna sprinkled across the green meadows, experience some spitters (snowfall) as the Scotts like to call it, apple orchards, and if you sum up all these together, you will realize why Kashmir is referred to as the paradise on this earth. Even in the night, ineffable beauty of this place can keep you awake as the sky changes its colour in the evening. Even for relatively season trekkers, the prospect of hiking through the alpine pastures around Gulmarg, even if just for three days, can be exhilarating.</p>
                    <h2 class="destinations-page__heading">Meet and greet local people</h2>
                    <p className='destinations-page__text'>People in this part of India are charming and welcoming. So when you visit Kashmir, don't forget to pay a visit to the nomadic villages, where goatherds and shepherds will welcome you with a generous smile. Enjoy a cup of tea with them and get to know more about the region. As you interact and spend few moments with the local people of the area, you would realize that how they live their lives, without any interferences from technology, the internet, and social media</p>

                    <h2 class="destinations-page__heading">Explore one of the most beautiful destinations in India</h2>
                    <p className='destinations-page__text'>Kashmir is beautiful and indeed a paradise! From gardens to mountains to lakes, there are multiple sightseeing options in Kashmir. Gulmarg, Sonmarg, Pahalgam, Aru valley, Yusmarg and Narana, are some mesmerizing places in Kashmir that deserve to be a part of your itinerary. With every step you take, a different side of Kashmir unfolds, making your trek even more memorable. So don't forget to take your camera to capture the panoramas of dewy meadows, carpets of colourful alpine flowers, snow-white glaciers, alpine woodlands, gurgling rivers and beautiful fruit orchards.</p>

                    <h2 class="destinations-page__heading">To get close to nature:</h2>
                    <p className='destinations-page__text'>Simply adding thrill to the Trek is the fact that the trek in Kashmir offers multiple opportunities to spot animals like Tibetan antelopes, Himalayan Thar, Musk Deer, Bharals, leopard cats and even the elusive snow leopard. Also, here bird watchers can see a huge variety of birds flying free in the sky. Also if lucky, you might spot Changthangi, goat bread which is known for growing ultra-fine cashmere wool.</p>

                    <div class="destinations-page__trek-detail trek-with-image">
                        <div class="trek-text">
                            <h3 class="destinations-page__subheading">Pin Parvati Trek:</h3>
                            <p class="destinations-page__text">
                                One of the most challenging and enthralling treks in Himachal, the trek requires you to have excellent trekking skills. Taking you through dense forests of Himalayan National Park, making your cross burbling rivers, negotiating through snow fields and glacial beds; the trek is a test of both, your physical and mental fitness. Needless to say enchanting vistas of snow-capped peaks and hanging glaciers keep you engaged and motivated along the journey.
                            </p>'
                        </div>
                        <div class="trek-image right-image">
                            <img src="/images/ladakh.webp" class="image-circle" alt="Chadar Trek" />
                        </div>
                    </div>

                    <div class="destinations-page__trek-detail trek-with-image reverse">
                        <div class="trek-image left-image">
                            <img src="/images/trek-photo-2.jpeg" className="image-circle" alt="Sham Valley" />
                        </div>
                        <div className="trek-text">
                            <h3 class="destinations-page__subheading">Chandrakhani Pass Trek: </h3>
                            <p class="destinations-page__text">
                                Taking you to a height of 3600 metres above sea level, the Chandrakhani Pass Trek makes you traverse through beautiful alpine meadows, lush walnut & cherry orchards, blue pines & silver oaks forests and picturesque valleys. Offering you gorgeous views of snow-covered Pir-Panjal and Parvati mountain ranges, the trek is a magical experience for its every traveller.
                            </p>
                        </div>
                    </div>

                    <div class="destinations-page__trek-detail trek-with-image reverse">
                        <div class="trek-text">
                            <h3 className="destinations-page__subheading">Malana Village Trek:</h3>
                            <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                An extension of Chandrakhani Pass Trek, the Malana Village trek takes you to the isolated village notoriously known for its marijuana and malana cream. Wary of any outside influence, the villagers of Malana have their own laws and jurisdictions. Forgetting the notorious side of Malana, the tranquil settings, serene beauty and inimitable location of the place provides extreme peace and solace to fatigued souls of city dwellers. The trek, for sure provides a unique and wonderful experience to every trekker.
                            </p>
                        </div>
                        <div class="trek-image left-image">
                            <img src="/images/markha-valley-trek.webp" class="image-circle" alt="Sham Valley" />
                        </div>
                    </div>
                    <div class="destinations-page__trek-detail trek-with-image reverse">
                        <div class="trek-image left-image">
                            <img src="/images/markha-valley-trek.webp" class="image-circle" alt="Sham Valley" />
                        </div>
                        <div class="trek-text">
                            <h3 className="destinations-page__subheading">Chandrakhani Pass Trek:</h3>
                            <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                Taking you to a height of 3600 metres above sea level, the Chandrakhani Pass Trek makes you traverse through beautiful alpine meadows, lush walnut & cherry orchards, blue pines & silver oaks forests and picturesque valleys. Offering you gorgeous views of snow-covered Pir-Panjal and Parvati mountain ranges, the trek is a magical experience for its every traveller.
                            </p>
                        </div>
                    </div>

                    <h2 class="destinations-page__heading">What is the best time to go for trekking in Kashmir?</h2>
                    <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">Best time to go for trekking to Kashmir is monsoon season; May, June, July, August, September and October, as this when the landscapes are in full bloom and the sky is clear to see the view of mountains. Also, this is the best time to see the real colours of nature teaming with a carpet of lush meadow and striking orchards, flanked by the looming mountains.</p>
                    <h2 class="destinations-page__heading">Which are best treks in the Kashmir region?</h2>
                    <p className='destinations-page__text'>Dominated by the Great Karakoram Range and Nun-Kun mountains to the north, Shivalik and Zanskar Range to the south, Gurals Valley to the west and Kailash, Pangong and Lokzhung Range to the east, geographical location of Kashmir makes it a paradise for trekkers. In and out there are more than ten treks in Kashmir that can charm and enthrall anyone with its beauty. Talking about the easy going treks, you can opt for Mohanmarg Meadow, which takes hardly few days to complete. More audacious trekkers can take Gangabal Lake Trek, Kashmir Great Lakes Trek and Tarsar-Marsar Lake trek. Even after Kashmir being the talk of every trekker, many treks in Kashmir still remain unspoilt and untouched.</p>
                </div>
            </div>
        </section>
    );
};


export default JammuKashmir