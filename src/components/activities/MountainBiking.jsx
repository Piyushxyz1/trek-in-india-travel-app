import React from 'react'
import Banner from '../../../assets/banners/Banner';
import Breadcrumb from '../../../assets/breadcrumbs/Breadcrumb';
import ActivitiesCard from '../../../assets/activitiesCard/ActivitiesCard';
import activities from '../../../assets/activitiesCard/activitiesdetail';
import { renderStars } from '../../../assets/starratings/starratings';
import CtaButton from '../../../assets/ctabutton/CtaButton';

const MountainBiking = () => {
 
  const activitiesData = activities.filter(items => items.activity === "Moter-Biking");



  return (
    <>
        <Banner title="Mountain Bike Tours" image="/images/ladakh.webp" />
        <Breadcrumb  href = "/destinations"  current="Mountain Biking" />

      <section className='destinations-page'>
       <div className=' max-w-4xl md:max-w-6xl  xl:max-w-7xl  mx-auto px-4 md:px-8 '>
          <div className="destinations-page__intro">
            <h1>Mountain Bike Tours In India</h1>
            <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
         Let the level of adrenaline rush pump up as you live your ultimate dream of paddling through India's most incredible trails. Find popular mountain biking destinations and book for a kind of deal that you like.
            </p>
          </div>

          <div  className='destinations-page__trek-grades' >

            <div className="destinations-page__trek-cards">

              {activitiesData.map((activities) => {
                return (

                  <ActivitiesCard activities={activities} renderStars={renderStars} />
                )

              })}

            </div>

          </div>
              <div class="destinations-page__section max-w-4xl md:max-w-6xl  xl:max-w-7xl  mx-auto px-4 md:px-8 ">
                    <h2 class="destinations-page__heading">What makes India a great mountain biking destination?</h2>
                    <p class="destinations-page__text">Mountain biking in India is not only about satiating your craving for challenges but, it is also about taking in and admiring the artwork of nature that India has been blessed with. As you get on with a mountain biking expedition in India, be ready to capture mesmerizing vistas of snow-capped Himalayan peaks, lush carpeted meadows, gushing waterfalls, sparkling streams, crystal clear rivers and beautiful fruit orchards. That's not all, with trails navigating you through alpine villages and verdant forests, you also get to have a close insight into the lifestyle and culture of local people living at higher altitudes and braving the atrocities of harsh weather conditions.</p>
                    <h2 class="destinations-page__heading">Best places for mountain biking in India</h2>
                    <p className='destinations-page__text'>If you are looking for a memorable mountain biking adventure holiday in India, the mystical land of Ladakh makes for the top mountain biking destination. Be, it an unforgettable and thrilling ride through world's highest motorable road at Khardung La, the enticing journey through parched and arid landscape of breath-taking Nubra Valley or an extraordinary excursion to the remote Pangong Lake brimming with its enchanting alpine beauty; a mountain biking tour in Ladakh is a must for every passionate mountain biker.</p>
                    <p className='destinations-page__text'>For those who yearn for an unparalleled scenic beauty while riding through high altitude routes, the regions of Himachal and Sikkim make for the perfect choice. With the scenic trails navigating you along gushing rivers offering unmatched vistas of precariously hanging glaciers, picturesque alpine villages, vibrant Buddhist monasteries and majestic snow-laden Himalayan peaks; a mountain biking tour in these regions also make you brave challenges of traversing through boulder fields, crossing over rustic bridges and cutting your way through icy cold waters of flowing streams. Witnessing a breath-taking scenic beauty and overcoming countless thrilling twists and turns along the journey, a mountain biking expedition in Sikkim and Himachal, undoubtedly will leave you asking for more.</p>

                    <h2 class="destinations-page__heading">Why mountain biking with us?</h2>
                    <p className='destinations-page__text'>If the mountain biking challenges thrill you and make you crave for new destinations, the unexplored trails of Indian Himalayas await you. If you are not sure of whom to contact to for arranging a mountain biking tour in India, our team of expert professionals is always there to help you. With great expertise and years-long experience in arranging biking tours in India Himalayan regions, we make sure you are taken through the most scenic and challenging routes depending on your calibre. Inclusion of Sight-seeing, homestays and an insight into local cultures and cuisines is what makes our biking tours more appealing and interesting. This is not all; our team also makes arrangements for obtaining permits and permissions from concerned authorities wherever required. So, what are you waiting for? Join us on one of your most thrilling and memorable mountain biking trips of your lifetime.</p>
                </div>



        </div>





      </section>
                <CtaButton/>

    </>
  )
}

export default MountainBiking