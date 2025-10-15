import React from 'react'
import Banner from '../banners/Banner';
import Breadcrumb from '../breadcrumbs/Breadcrumb';
import ActivitiesCard from '../activitiesCard/ActivitiesCard';
import activities from '../activitiesCard/activitiesdetail';
import { renderStars } from '../starratings/starratings';
import CtaButton from '../ctabutton/CtaButton';

const AnglingTours = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activitiesData = activities.filter(items => items.activity === "Angling-Tours");

  return (
    <>
      <Banner title="Angling Tours" image="/images/ladakh.webp" />
      <Breadcrumb current="Angling Tours" />

      <section className='bg-white'>
        <div className='max-w-[1200px] mx-auto my-7'>
          <div className=" text-center">
            <span className=" text-[#f47a2a] font-bold">Angling Tours</span>
            <h1 className="text-[3rem] font-semibold leading-[1.2] text-[#172541]">Angling Tours in India</h1>
            <p className=" mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb:0 md:mb-1 lg:mb-2 xl:mb-3">
              Angling is an interesting activity that is enjoyed by many people who are adventurously inclined. Though, India is not too famous for this activity, but for last few years, it has been gaining popularity as a perfect destination providing exhilarating angling activity. This recreational activity is a pleasure to be enjoyed by many naturalists. In India, there is no dearth of fast flowing rivers. These streams and rivers originate from glaciers and allow perfect points where angling activity can be enjoyed. Some of the rivers where this activity is allowed are.
            </p>
          </div>

          <div className='destinations-page__trek-grades' >

                   <div className="grid [grid-template-columns:repeat(1,1fr)] justify-center gap-8 mt-2 md:mt-3 lg:mt-4 xl:mt-6 md:grid-cols-2 lg:grid-cols-3   mx-auto py-0 sm:py-2 lg:py-4 xl:py-10  ">


              {activitiesData.map((activities) => {
                return (

                  <ActivitiesCard activities={activities} renderStars={renderStars} />
                )

              })}

            </div>
          </div>
          <div class="destinations-page__section max-w-4xl md:max-w-6xl  xl:max-w-7xl  mx-auto px-4 md:px-8 ">
            <h2 className="mt-4 mb-4 text-[#000] font-semibold text-2xl">Upper Ramganga River:</h2>
            <p className=" mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb:0 md:mb-1 lg:mb-2 xl:mb-3">Ramganga River, located in the Jim Corbett National Park. People who visit this place to indulge in angling activity are assisted by fishing guide who take the visitors to appropriate place to enjoy the activity more. Here, the river is supported by unique aquatic life that encompasses the fish eating Ghariyal, Mugger, Common Otter, Fishing Eagles and many more. For anglers, this river is considered to be the most appropriate. People love to catch Rohu, Goonch, Malee and Trout.</p>
            <h2 className="mt-4 mb-4 text-[#000] font-semibold text-2xl">Tirthan Valley :</h2>
            <p className='destinations-page__text'>Another beautiful place where people love to enjoy angling is Tirthan Valley, which get its name from the Tirth River, the source of which is Hanskund Peak. The place enjoys pleasant weather all round the year. The Great Himalayan National Park is also located in this area. Emerald meadows, lush green Coniferous forests, snowy peaks, exotic flowers and pristine glaciers make this destination truly divine. The fast moving Tirthan River allows anglers to spot clear pools of fish and this makes the activity all the more interesting.</p>
            <h2 className="mt-4 mb-4 text-[#000] font-semibold text-2xl">Angling in Kashmir:</h2>
            <p className='destinations-page__text'>Kashmir is considered as one of the best angling destinations in India. This is because the rivers in Kashmir are crystal clear. There are streams, springs, high altitude lakes, gigantic mountain peaks that are snow capped, verdant meadows, pine forests, and a rich array of flora and fauna, that makes the destination truly divine. This state is visited by anglers from the different parts of the world to enjoy the activity in the beautiful lakes and rivers. Anglers love to catch trout like Gurez, Wangath, Lidder, Lam, Hamal, Bringi, Hirpora, Kokernag, Aharbal, and many more. The angling season starts from the month of April and continues till September.</p>
            <h2 className="mt-4 mb-4 text-[#000] font-semibold text-2xl">Angling in Kali River:</h2>
            <p  className="mt-4 mb-4 text-[#313137]">Angling enthusiasts love to enjoy this activity in the famous Kali River, located in the Himalayan region. Anglers love to catch Mahseer, which is the most common fish species found here. People love to enjoy the famous fish catching activity. This activity has been famous since the time of Britishers who used to enjoy angling as their favorite pass time. A popular sporting fish, the Golden Mahseer is found in great abundance in the Kali river and allows angling enthusiasts to enjoy a great time catching them. The activity is allowed in Pancheshwar, Gaht, Chuka, Jauljibi and Boom.</p>
            <h2 className="mt-4 mb-4 text-[#000] font-semibold text-2xl">Angling in Sangla Valley:</h2>
            <p className=" mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb:0 md:mb-1 lg:mb-2 xl:mb-3">Sangla Valley is another popular angling destination in India. Anglers love to enjoy this activity and it is also the place where the first Trout breeding farm came into existence in the year 1926. An extensive trout hatchery can be found in the river Baspa. Small sized trout is also available in great abundance and people love to enjoy a great catch once in a while. People love to enjoy the whole day at River Baspa.</p>
            <p className=" mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb:0 md:mb-1 lg:mb-2 xl:mb-3">In India, there are many suitable destinations having fast flowing rivers and streams where this activity can be enjoyed to a considerable extent. These exclusive locations offer amazing angling activity options that is loved and enjoyed by people from all over the world. There is a great variety of fish that makes this activity more interesting.</p>
          </div>
        </div>

      </section>
      <CtaButton />

    </>
  )
}

export default AnglingTours;