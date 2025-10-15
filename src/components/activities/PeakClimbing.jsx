import React from 'react'
import ActivitiesCard from '../../../assets/activitiesCard/ActivitiesCard';
import activities from '../../../assets/activitiesCard/activitiesdetail';
import { renderStars } from '../../../assets/starratings/starratings';
import "./activities.css";
import Banner from '../../../assets/banners/Banner';
import Breadcrumb from '../../../assets/breadcrumbs/Breadcrumb';
import CtaButton from '../../../assets/ctabutton/CtaButton';
const PeakClimbing = () => {

  const activitiesData = activities.filter(items => items.activity === "Peak-Climbing");



  return (
    <>

        <Banner title="Peak Climbing" image="/images/ladakh.webp" />
        <Breadcrumb  href = "/destinations"  current="Peak Climbing" />
      <section className='destinations-page'>

       <div className=' max-w-4xl md:max-w-6xl  xl:max-w-7xl  mx-auto px-4 md:px-8 '>
          <div className="destinations-page__intro">
            <h1>Peak Climbing in India</h1>
            <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
              Unleash the adventurers in you. Sign up for any peak climbing expedition and you earn the license to silence the call of nature.
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

              <div class=" max-w-4xl md:max-w-6xl  xl:max-w-7xl  mx-auto px-4 md:px-8">
                    <h2 class="destinations-page__heading">Peak Climbing in Indian Himalayas - A Growing Adventure Sport!</h2>
                    <p class="destinations-page__text">One of the most exquisite adventures, peak climbing is all about taking over sharp peaks and braving the obstacles offered by rigorous and rough terrains of mountain regions. Gradually taking up as a favourite sport amongst adventure aficionados, peak climbing takes extreme guts, physical endurance and mental strength to get to the top of the peak. Offering an imperative array of high mountain peaks, mesmerizing scenic beauty and deep wilderness; Indian Himalayas are an apt choice to venture on an exciting and thrilling journey of peak climbing while witnessing brilliant views of picturesque surroundings and defying the challenges of rough terrains.</p>
                    <h2 class="destinations-page__heading">Best Mountaineering Places in India</h2>
                    <p className='destinations-page__text'>The regions of Sikkim, Himachal Pradesh, Jammu & Kashmir and Uttarakhand, prove to be the best of the destinations in India to embark on a mountain climbing expedition. Offering you unmatched challenges of walking over glacial beds, crossing rocky moraines, climbing steep rock faces and ascending perpendicularly sharp slopes; a peak climbing adventure in these regions also offer you opportunities to witness spellbinding beauty of verdant oak and pine forests, high altitude alpine meadows, rhododendron bushes, bubbling streams and enchanting glacial lakes. Some of the toughest peaks to climb in these regions include Mount Shivlinga, Kedar Dome, Bhagirathi group of peaks, Mount Kamet, Mount Satopanth and Mount Trishul.</p>

                    <h2 class="destinations-page__heading">Best Time For Peak Expedition in India</h2>
                    <p className='destinations-page__text'>The ideal time for peak climbing in India falls between the months starting mid-June to September/mid-October. Even though, these months are quite favourable for peak climbing, it is still recommended to gain an insight in weather and snow conditions before embarking on the expedition.</p>

                    <h2 class="destinations-page__heading">Why Embark on a Peak Climbing With Us?</h2>
                    <p className='destinations-page__text'>We offer exclusive deals and packages for peak climbing in Himalayas. With our carefully designed peak climbing packages, we make sure that you get ample time for acclimatization while venturing on this thrilling expedition. For beginners, we also make sure that they get enough training and guidance by expert climbers before undertaking the adventure. Leaving no stones unturned in making your dream of peak climbing a reality, you can trust us for providing you best of the services that include but, are not limited to the following.</p>

                     <ul className='pre-requisites'>
            <li>Arrangements for knowledgeable and experienced mountaineering guides and climbing experts.</li>
            <li>Arrangements for necessary trekking/mountaineering permits.</li>
            <li>Arrangements for trekking and mountaineering gears including fix ropes, tents, sleeping bags, mattress, oxygen cylinders and first aid kits.</li>
            <li>Arrangements for accommodations including hotel stays, village homestays and camps.</li>
            <li>Provisions for sight-seeing with experienced local guides.</li>
            <li>Arrangements for kitchen staff, cooks, helpers and cooking equipment.</li>

                  </ul>

                     <p className='destinations-page__text'>Peak climbing excursions in India are awaiting to give you a newer and an insightful perspective to life, are you ready to get on with this enthralling adventure with us?</p>

                </div>



        </div>

                <CtaButton/>




      </section>

    </>

  )
}
export default PeakClimbing