import React from 'react';
import trekData from '../trekdestinationcard/trekdata';
import DestinationsTrekCard from '../trekdestinationcard/DestinationsTrekCard';
import { renderStars } from '../starratings/starratings';
import CtaButton from '../ctabutton/CtaButton';

const July = () => {

    const filteredTreks = trekData.filter(treks => treks.month === "July")
    return (
<>
        <section className='bg-white'>

        <div className='w-full  max-w-4xl md:max-w-6xl  xl:max-w-7xl px-4 sm:px-6 md:px-8   mx-auto py-0 sm:py-2 lg:py-4 xl:py-10   bg-white text-center'>   

            <h1 className='text-xl sm:text-2xl  xl:text-4xl font-bold mb-0 md:mb-1 lg:mb-2 xl:mb-3 text-[#172541]'>Top July Treks for the Himalayas</h1>
             <div className="grid [grid-template-columns:repeat(1,1fr)] justify-center gap-8 mt-2 md:mt-3 lg:mt-4 xl:mt-6 md:grid-cols-2 lg:grid-cols-3   mx-auto py-0 sm:py-2 lg:py-4 xl:py-10">

                {filteredTreks.map(treks => {
                    return(
                   <DestinationsTrekCard key={treks.id} trek ={treks} renderStars={renderStars}/>
                    )
                })}


            </div>

        </div> 
        </section>

             <section className=" bg-white">
        <div className='max-w-4xl md:max-w-6xl  xl:max-w-7xl  mx-auto px-4 md:px-8'>
          {/* Overview Header */}
          <div className="mb-4 md:mb-6 lg:mb-10  xl:mb-12">
            <h2 className="text-xl sm:text-2xl  xl:text-4xl font-bold mb-0  md:mb-1 lg:mb-2 xl:mb-3 text-[#172541]">Why Trek In July ?</h2>
            <p className=" text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
              Bestowed with an incredible topography of hilly terrains, enchanting valleys and serene alpine glacial lakes; Ladakh is undoubtedly an epitome of mountain beauty and a hub of exhilarating adventure activities like mountaineering, white water rafting, mountain biking and most importantly, trekking. Snuggled in the lap of Himalayas and hiding in its store, some unexplored and enticing trekking trails, no wonder why this mystical land is called an empyrean for trekkers all across the globe. Also, with its huge offerings of trekking options ranging from easy to moderate to challenging grades, the treks of Ladakh do not disappoint any avid trekking enthusiast, whether he is a beginner or an expert.
            </p>
          </div>

          {/* Weather and Condtions  Section (NO hover - always visible) */}
          <div className="mb-4 md:mb-6 lg:mb-12  xl:mb-14">
            <h2 className="text-xl sm:text-2xl  xl:text-4xl font-bold text-[#172541]  mb-0 md:mb-1 lg:mb-2 xl:mb-3">Weather and Conditions</h2>
            <p className=' text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]'>Ideally, the best time for trekking & hiking in Ladakh is between the months of May and September when the weather is salubrious and rejuvenating. Also, this is the best time to explore nature teeming with lush meadows, carpets of wild alpine flowers and striking peach and apricot orchards. For those who wish to witness the snow-white mountain beauty, the ideal time is during winter months, especially for the 'Chadar Trek' that you can attempt only in January-February when the Zanskar River is completely frozen.</p>
          </div>
        </div>
        <div>

        </div>
      </section>
<CtaButton/> 

</>
    
    )

}

export default July