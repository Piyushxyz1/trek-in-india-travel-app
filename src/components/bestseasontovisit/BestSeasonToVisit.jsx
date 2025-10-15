"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const BestSeasonToVisit = () => {
  const [activeSeason, setActiveSeason] = useState('spring');
const seasons = {
  spring: {
    slug: "spring",
    title: "Spring (March - April)",
    description: "As winter fades, spring brings new life to the Himalayas. During this season, the trails fill with blooming rhododendrons, clear skies, and mild weather. This creates the perfect setting for scenic trekking in India. It’s a great time for nature lovers and photographers looking for peaceful trails and colorful floral landscapes. ",
    image: "https://images.pexels.com/photos/31240116/pexels-photo-31240116/free-photo-of-pink-cherry-blossom-tree-in-a-sunlit-park.jpeg?auhref=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    highlights: [
      "Trails are decked with rhododendron and other flowers",
      "Daytime temperatures ranges from 12°C to 18°C",
      "Snow-capped peaks contrasting with fresh green valleys",
      "Best for: Chandrashila Trek, Brahmatal Trek,Sandakphu – Phalut Trek and Goechala Trek "
    ],
    pros: ["Stunning spring landscapes and lush trails ", "Comfortable trekking weather", "Less footfall compared to summer and autumn"],
    cons: ["Higher mountain passes may remain inaccessible ", "Sudden snowfall can still occur at higher altitudes "]
  },
  summer: {
    slug: "summer",
    title: "Summer (May - June)",
    description: "Summer is the perfect time for high-altitude trekking in the Himalayas. The snow starts to melt, and trails that were closed for a long time are reopening. Clear skies and longer days make this one of the most enjoyable seasons for both new and experienced trekkers.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    highlights: [
      "High-altitude passes become accessible after months of snow cover",
      "Long daylight hours perfect for extended trekking days",
      "Daytime temperatures range from 15°C to 25°C",
      "Best for: Dayara Bugyal Trek,Ali Bedni Bugyal Trek,Gaumukh Tapovan Trek and more"
    ],
    pros: ["Warm and stable weather, conducive to longer treks ", "Most Himalayan routes are fully operational", "An excellent time for beginners"],
    cons: ["Popular trails can get crowded", "Strong sun and dry heat may lead to dehydration on lower-altitude stretches"]
  },
  monsoon: {
    slug: "monsoon",
    title: "Monsoon (July - Sept)",
    description: "While much of India gets heavy rainfall, monsoon trekking is still very active, especially in rain-shadow regions of Kashmir and Ladakh and the lush valleys of Uttarakhand. This is the season when the mountains come alive. Meadows bloom, clouds swirl around the peaks, and the trails are lush but quieter. Trekking in India during the monsoon is perfect for those looking for beauty away from the crowded paths.",
    image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766",
    highlights: [
      "Valley of Flowers Trek and Hemkund Sahib treks are accessible",
      "Limited footfall for a more serene experience",
      "All treks in Kashmir and Ladakh are accessible",
      "Best for: Markha Valley Trek,Pin Bhaba Pass Trek,Valley of Flowers Trek and more"
    ],
    pros: ["Rich vegetation and vibrant wildflowers", "Great time for photographers and solitude seekers", "Witness all stunning alpine lakes of Kashmir"],
    cons: ["Leech encounters on trails in lower altitude", "Occasional landslides or road blocks,Fewer treks are accessible in Uttarakhand, Himachal and Sikkim"]
  },
  autumn: {
    slug: "autumn",
    title: "Autumn (Oct - Nov)",
    description: "Crisp air, golden landscapes, and unmatched mountain visibility make this the most optimum season for trekking in India. Post-monsoon clarity and festive energy enhance the experience across popular Himalayas adventure trails.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
    highlights: [
      "Clear, panoramic mountain views ideal for photography",
      "Autumn hues painting the landscapes gold and rust",
      "Mild daytime temperature",
      "Best for: Kuari Pass Trek ,Phulara Ridge Trek,Ranthan Kharak Trek and more"
    ],
    pros: ["Best season for long high-altitude trekking tours in India", "Ideal weather for both beginners and seasoned trekkers", "Many regions celebrate local festivals"],
    cons: ["Increased demand on popular routes", "Nights can get chilly, especially above 3,000m","Fewer treks are accessible in Uttarakhand, Some routes may begin closing by late November due to snowfall"]
  },
  winter: {
    slug: "winter",
    title: "Winter (Dec - Feb)",
    description: "Snow-covered trails, quiet surroundings, and a real test of stamina make this season perfect for trekking. Trails at lower and mid-altitudes in the Indian Himalayas become amazing winter playgrounds. They are ideal for anyone seeking solitude and the enchanting beauty of snow during their trekking tours in India.",
    image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5",
    highlights: [
      "Peaceful routes with hardly any crowd",
      "Winter charm and frozen rivers",
      "Best time to spot snow leopards and Himalayan wildlife in certain regions",
      "Best for: Chadar Trek,Dayara Bugyal Trek,Winter Kuari Pass Trek and more"
    ],
    pros: ["Picture-perfect snowy backdrops for photography", "A chance to experience real alpine trekking conditions", "Ideal for challenging treks"],
    cons: ["Sub-zero temperatures require layered clothing and winter-grade gear", "Several routes remain closed due to heavy snowfall"]
  }
};


  return (
    <>
      
      <section className=" bg-white mb-10">
        <div className='max-w-4xl md:max-w-5xl  xl:max-w-7xl mx-auto px-4 md:px-8 py-0 sm:py-2 md:py-8 xl:py-10'>
          <div className="text-center mb-3 sm:mb-5 md:mb-6 lg:mb-7">
            <span className="text-[#f47a2a] font-semibold text-[0.8rem] md:[text-0.9rem] xl:text-[1rem]">Best Time to Visit</span>
            <h2 className="text-xl sm:text-2xl  xl:text-4xl font-semibold text-[#172541] mt-0 mb-0 md:mb-2 xl:mb-3">Best Time for Trekking in the Himalayas</h2>
            <p className="text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]  text-[#313137]  max-w-3xl mx-auto">
              Each season offers unique experiences in the Indian Himalayas. Choose based on your preferences:
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2  mb-3 md:mb-8">
            {Object.keys(seasons).map(season => (
              <button
                key={season}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold  text-[0.8rem] sm:text-[0.9rem] md:text-[0.9rem] xl:text-[1rem] transition-all ${activeSeason === season
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-[#313137] hover:bg-gray-200'
                  }`}
                onClick={() => setActiveSeason(season)}
              >
                {seasons[season].title.split(' (')[0]}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] font-semibold text-[#000000] mb-0 md:mb-1">{seasons[activeSeason].title}</h3>
              <p className="text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]  text-[#313137]  mb-1 md:mb-2">{seasons[activeSeason].description}</p>

              <div>
                <h4 className="text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] font-semibold text-[#000000] mb-0 md:mb-1">Season Highlights</h4>
                <ul className="space-y-2">
                  {seasons[activeSeason].highlights.map((item, index) => (
                    <li key={index} className="flex items-start text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]  text-[#313137] mb-0 md:mb-1">
                      <span className="text-[#f47a2a] mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h5 className="font-semibold mb-0 md:mb-1 text-[#000000]">Advantages</h5>
                  <ul className="space-y-1">
                    {seasons[activeSeason].pros.map((item, index) => (
                      <li key={`pro-${index}`} className="text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]  text-[#313137] mb-0 md:mb-1">✓ {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                  <h5 className="font-semibold text-[#000000] mb-0 md:mb-1">Considerations</h5>
                  <ul className="space-y-1">
                    {seasons[activeSeason].cons.map((item, index) => (
                      <li key={`con-${index}`} className="text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]  text-[#313137] mb-0 md:mb-1">⚠️ {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="h-[170px] sm:h-[220px] md:h-[260px] lg:h-[290px] xl:h-[320px] rounded-xl overflow-hidden shadow-lg relative">
                <img
                  src={seasons[activeSeason].image}
                  alt={seasons[activeSeason].title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="bg-white p-4 sm:p-4 md:p-5 lg:p-6 rounded-xl shadow-lg w-[90%] mx-auto -mt-12 relative z-10">
                <h4 className="text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] font-semibold text-[#313137] mb-2">Recommended Treks</h4>
                <p className="text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]  text-[#313137] mb-4">{seasons[activeSeason].highlights[3].replace('Best for: ', '')}</p>
                <Link href={`/${seasons[activeSeason].slug}`} className="bg-orange-500 text-white px-4 md:px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition-all hover:translate-x-1 text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                  {seasons[activeSeason].title} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BestSeasonToVisit;