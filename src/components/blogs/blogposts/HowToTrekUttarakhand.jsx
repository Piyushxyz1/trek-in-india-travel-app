"use client"
import React from 'react'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import ActivitiesCard from '@/components/activitiesCard/ActivitiesCard';
import activities from '@/components/activitiesCard/activitiesdetail';
import { renderStars } from '@/components/starratings/starratings';
import Banner from '@/components/banners/Banner';
import Breadcrumb from '@/components/breadcrumbs/Breadcrumb';
import CtaButton from '@/components/ctabutton/CtaButton';
import { FiChevronLeft, FiChevronRight, FiInfo, FiBookOpen, FiMapPin } from 'react-icons/fi';
import ModalPortal from '@/components/ModalPortal';
import TripBookingForm from '@/components/form/TripBookingForm';
import { BlogsList } from './bloglist';

const HowToTrekUttarakhand = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const [expandedSections, setExpandedSections] = useState({});
    const [currentSlide, setCurrentSlide] = useState(0);
  

    const breadcrumbPath = [
        { label: 'Moter bike tours' },
    ]

    const activitiesData = activities.filter(activity => activity.activity === "Motor-Biking")
    return (
        <>

            <Breadcrumb path={breadcrumbPath} />


            <section className="destinations-page__section py-8 px-4 sm:px-6 lg:px-8">
                <div className=' max-w-4xl md:max-w-6xl  xl:max-w-7xl  mx-auto px-4 md:px-8 '>
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Content Column */}
                        <div className="lg:w-2/3">

                            <h1 className="text-xl sm:text-2xl  xl:text-4xl font-semibold text-[#172541] mt-0 mb-0 md:mb-2 lg:mb-3">Trekking in Uttarakhand, Himalaya- How to Do It?</h1>
                            <p className=" mt-0 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem] mb:0 md:mb-1 lg:mb-2 xl:mb-3">
                                Uttarakhand, located in the Himalayan region of India is also called as ‘The Land of Gods’ or ‘Dev Bhumi’ and is very well known for its mountain peaks, glaciers, natural lakes, waterfalls, temples, rivers and wildlife reserves that attract hundreds or perhaps thousands of nature lovers and adventure enthusiasts . If you are interested in doing some great hiking, trekking or climbing, why not challenge yourselves at one of the trekking trails in this beautiful state? Mountain trekking in the Uttarakhand Himalayas will definitely excite you as you are not only going to hike all the way to the base camp, however, you will also be treated with the scenic views and the natural beauty that is absolutely unparalleled.

                                Wondering where to go for walking tours in the Himalayas? Consider one of these then…
                            </p>


                            {/* Best Time Section */}
                            <div className="mb-8">
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-6 mt-6">VALLEY OF FLOWERS TREK</h2>
                                <img
                                    src="/images/blogs/valley-of-flowers.webp"
                                    alt="Valley of Flowers"
                                    className='h-[250px] md:h-[350px] lg:h-[400px] w-full mb-8 mt-8'
                                />
                                <p className="text-[#313137] ">
                                    The Valley of Flowers Trek is a monsoon trek where you can enjoy the breathtaking landscape whilst having a pleasure walking in the Himalayas; this valley is definitely a botanist’s delight! The trek begins at Govind Ghat after crossing a hanging bridge. You will walk along the river of Lakshman Ganga and pass by the Bhyundaar village before reaching Ghanghria, the base camp for treks to Valley of Flowers. The Valley of Flowers is a 3 km uphill climb from Ganghria and the trail is not getting any easier. The path is narrow with a river flowing underneath and pays a great caution to the rocky slopes on both sides.
                                </p>
                                <p> <strong>Expert tips:</strong> It is considered as a moderate trek which means you need to have a strong cardiovascular endurance and strength. Wear a pair of comfortable trekking shoes and since it is a monsoon trek, it is advisable to bring along a poncho for this trek. Pack three layers clothes as you will be climbing at a high altitude and in case you are not able to withstand the cold.</p>
                            </div>
                            {/* Best Time Section */}
                            <div className="mb-8">
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-6 mt-6">GANGOTRI TAPOVAN TREK</h2>
                                <img
                                    src="/images/blogs/gomukh-tapovan-trek.webp"
                                    alt="Gaumukh Tapovan Trek"
                                    className='h-[250px] md:h-[350px] lg:h-[400px] w-full mb-8 mt-8'
                                />
                                <p className="text-[#313137] ">
                                    Gangotri Tapovan trek is one of the famous hiking destinations in Uttarakhand that has never failed to mesmerize the trekkers. The trek will start at Gangotri and you may set up your tent at Bhojwasa. Later you will pass through an orchard of coniferous pine trees that will lead you to Lanka and Gaumukh. Along the way you will reach the Gaumukh Glacier, so do not forget to stop by and explore the surroundings before you continue walking on the trek to Tapovan. It is the base for many treks in Garhwal and is a meadow area with a flowing stream. Overall, the trekkers rate the climb up the Gangotri Tapovan trek as a moderate hike.
                                </p>
                                <p> <strong>Expert tips:</strong> The best times to hike on the trek are between the months of May and June, as well as August until the mid of October. Since it is a moderate trek, make sure you are physically fit before you start trekking along the Gangotri Tapovan trek.</p>
                            </div>
                            {/* Best Time Section */}
                            <div className="mb-8">
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-6 mt-6">DAYARA BUGYAL TREK</h2>
                                <img
                                    src="/images/blogs/dayara-bugyal.webp"
                                    alt="Dayara Bugyal"
                                    className='h-[250px] md:h-[350px] lg:h-[400px] w-full mb-8 mt-8'
                                />
                                <p className="text-[#313137] ">
                                    Dayara Bugyal trek is most probably one of the best trekking places in Uttarakhand, even those who enjoyed skiing prefer to spend their winter season or holiday here as this place offers one of the greatest ski slopes in the country. The 4 km trek starts from Barsu to Barnala and you can set up your campsite nearby the sparkling lake of Barnala Lake. The ascending 5 km trail will then bring you to walk through a lush alpine forest that leads you to Dayara Bugyal and ends at Dodital.
                                </p>
                                <p> <strong>Expert tips:</strong> : For the best experience, you should go for an adventure there between mid March until mid November. As for the trail, it is an easy trek and it is suitable for any age group, so bring your family along! Basically, it is a family trekking activity where you can easily have a sufficient amount of rest if you get tired along the way.</p>
                            </div>
                            {/* Best Time Section */}
                            <div className="mb-8">
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-6 mt-6">DODITAL TREK</h2>
                                <img
                                    src="/images/blogs/Dodi-Tal-Trek.webp"
                                    alt="Dayara Bugyal"
                                    className='h-[250px] md:h-[350px] lg:h-[400px] w-full mb-8 mt-8'
                                />
                                <p className="text-[#313137] ">
                                    Wishing to have camping treks while you are on the move in Uttarakhand? Then do have one by joining the trek at Dodital, a perfect retreat as the lake nearby is surrounded by a diversity of flora and fauna, a paradise for bird watchers. The trek will start at Sangamchatti to Bhevra and later you will reach the Dodi Lake where you are allowed to set up a camp alongside the lake which is the home of the famous Himalayan Golden Mahseer fish. You have two options then, either to stay and explore the Dodi Lake or trek to the Darwa Pass. The panorama of this trek is definitely going to blow up your mind, it is fantastic!
                                </p>
                                <p> <strong>Expert tips:</strong> : The trek is easy, bring along your family members! You can even shop for your needs along the way to Dodital as there are small shops on this route.</p>
                            </div>
                            {/* Best Time Section */}
                            <div className="mb-8">
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-6 mt-6">NANDA DEVI EAST BASE CAMP TREK</h2>
                                <img
                                    src="/images/blogs/nanda-devi-east-base-camp.webp"
                                    alt="Dayara Bugyal"
                                    className='h-[250px] md:h-[350px] lg:h-[400px] w-full mb-8 mt-8'
                                />
                                <p className="text-[#313137] ">
                                    The Nanda Devi East Base Camp trek is perhaps one of the best hiking destinations in Kumaon Region of Uttarakhand. The trail to the base of India’s second highest peak, the Nanda Devi is a dream for every trekker from all over the world. Out of all the treks in the Himalayas, it can be said that this trek is the toughest of all. The trek to the base started from Lilam, passing through a thick forest of bamboo and a few shepherd villages, you will then set up your camp at Bugdiar. Going uphill you will then pass through a beautiful valley of Gori Ganga. The trek will then continue from Milam where you can see the Milam Glacier before you reach Lwani, the last trek before you arrive at the Nanda Devi East Base Camp. The journey to the base is long, so be prepared fellow trekkers.
                                </p>
                                <p> <strong>Expert tips:</strong> Being one of the toughest treks, keep yourselves fit and pack clothes suitable for a climb at a high altitude. You are always welcome to climb here at any seasons.</p>
                            </div>
                            {/* Best Time Section */}
                            <div className="mb-8">
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-6 mt-6">KUARI PASS TREK</h2>
                                <img
                                    src="/images/blogs/Kauri-Pass-Trek.webp"
                                    alt="Dayara Bugyal"
                                    className='h-[250px] md:h-[350px] lg:h-[400px] w-full mb-8 mt-8'
                                />
                                <p className="text-[#313137] ">
                                    The Kuari Pass trek is located just nearby the Nanda Devi Sanctuary, and it is basically ideal for the novices as the trek is being described as an easy trek among the trekkers. You will have the opportunity to experience camping in a snow whilst enjoying the snowfall as well as catch the breathtaking view of snow-capped mountains. Out of all the hiking destinations in Uttarakhand, the Kuari Pass trek has the best oak forests at a relative moderate altitude of 12, 200 feet. The trek starts at Chitrakantha to Tali Top, a 6 km uphill trek and you will later on reach the Kuari Pass via the Khullar Top trek.
                                </p>
                                <p> <strong>Expert tips:</strong> Even though to some trekkers this trail is easy, it might also be quite hard for others as the trek demands continuous ascends. Any child above the age of 7 is fit to go for this trek. Do not forget to pack more layers of clothes as the temperature might fall below zero at night.</p>
                            </div>
                            {/* Best Time Section */}
                            <div className="mb-8">
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-6 mt-6">KALINDI KHAL PASS TREK</h2>
                                <img
                                    src="/images/blogs/kalindikhal-trek.webp"
                                    alt="Dayara Bugyal"
                                    className='h-[250px] md:h-[350px] lg:h-[400px] w-full mb-8 mt-8'
                                />
                                <p className="text-[#313137] ">
                                    Need another adrenaline rush trek in the winter holidays? Pack your bags and get ready for the Kalindi Khal Pass Trek! It is undoubtedly another adventurous trekking experience in the Uttarakhand Himalayas, nevertheless, you will be rewarded by spectacular views of various other peaks such as the Satopanth and the Vasuki. This trail is an extremely-challenging expedition-style trek as it involves a trek over rough glaciers, rocky screens and crevassed snowfields. The long trek starts from Gangotri to Chirbasa and further to Bhojwasa, passing through Gaumukh until you arrive at Tapovan. From there the trek continues to Nandavan, Vasuki Tal and Kharar Pathar. You will come across the Shweta Glacier before finally arriving at the Kalindi Khal Base Camp.
                                </p>
                                <p> <strong>Expert tips:</strong> T: It is advisable for you to wear micro-spikes on snow to make your climb much easier. There are chances of hypothermia as the temperature during the winter might drop to about 7 degree at night, so bring enough layers of clothes to keep yourselves warm.</p>
                            </div>
                            {/* Best Time Section */}
                            <div className="mb-8">
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-6 mt-6">KEDARKANTHA TREK</h2>
                                <img
                                    src="/images/blogs/kedarkantha-trek.webp"
                                    alt="Dayara Bugyal"
                                    className='h-[250px] md:h-[350px] lg:h-[400px] w-full mb-8 mt-8'
                                />
                                <p className="text-[#313137] ">
                                    Kedarkantha Trek area is the most popular trekking areas that are best climbed during winter. Do spend some time and experience some of the prettiest campsites in the Himalayas including Juda Ka Talab, Kedarkantha base and Hargaon. You will start your trek in a dense pine forest and later on walking on the snow before arriving at the Shepherd Camp. It will then take you another 4 hours trek before you reach the Kedarkantha Base. There are not many tricky sections, so it will be safe even if you bring your children along.
                                </p>
                                <p> <strong>Expert tips:</strong>  It is advisable for you to wear micro-spikes on snow to make your climb much easier. There are chances of hypothermia as the temperature during the winter might drop to about 7 degree at night, so bring enough layers of clothes to keep yourselves warm.</p>
                            </div>
                            {/* Best Time Section */}
                            <div className="mb-8">
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-6 mt-6">HAR KI DUN VALLEY TREK</h2>
                                <img
                                    src="/images/blogs/har-ki-doon-trek.webp"
                                    alt="Dayara Bugyal"
                                    className='h-[250px] md:h-[350px] lg:h-[400px] w-full mb-8 mt-8'
                                />
                                <p className="text-[#313137] ">
                                    Whether it is during summer or winter except when the monsoon comes, the Har Ki Dun Valley Trek becomes one of the famous preferred hiking destinations in Uttarakhand. One of the reasons is because the trek offers something unique, in which you can experience walking through ancient villages that are over 3,000 years old. The trek starts from Sankri to Taluka and continues to Osla before you reach Har Ki Dun and enjoy the pleasant views of the valleys.
                                </p>
                                <p> <strong>Expert tips:</strong>  This trek is a good trail for the beginners as it is known as an easy to moderate trek and the gradients are not too steep. However, the journey may be quite long for some trekkers, so you need to have a good stamina for this trek.</p>
                            </div>
                            {/* Best Time Section */}
                            <div className="mb-8">
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-6 mt-6">PINDARI GLACIER TREK</h2>
                                <img
                                    src="/images/blogs/har-ki-doon-trek.webp"
                                    alt="Dayara Bugyal"
                                    className='h-[250px] md:h-[350px] lg:h-[400px] w-full mb-8 mt-8'
                                />
                                <p className="text-[#313137] ">
                                    Pindari Glacier Trek in Kumaon is the best to trek in summer holidays. From Dhakuri you will walk through the peaceful surrounding of a forest to Khati and the trekking continues until Dwali. Another 5 km trek will lead you to Phurkia. Then come the tougher part of the hiking in which you have to traverse a number of mountain ridges, spider-walls and stream crossings. However, once you reach the Pindari Glacier, you will realize that your effort is being paid off. The panorama is nothing that you can ignore, it is simply breathtaking!
                                </p>
                                <p> <strong>Expert tips:</strong>  Even though it may be quite a tough trek for some trekkers, it is not impossible for you to bring your children who are at least 9 years old.</p>
                            </div>
                            {/* Best Time Section */}
                            <div className="mb-8">
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-6 mt-6">SUNDERDHUNGA BASE CAMP TREK</h2>
                                <img
                                    src="/images/blogs/sunderghunga.webp"
                                    alt="Dayara Bugyal"
                                    className='h-[250px] md:h-[350px] lg:h-[400px] w-full mb-8 mt-8'
                                />
                                <p className="text-[#313137] ">
                                    This trekking expedition of Sunderdhunga Base Camp Trek guarantees you an amazing hiking and adventure throughout the journey starting from Loharkhet to Dhakuri. Being a moderate trail from Khati to Jatoli and Khatalia, you should expect to encounter lots of steep climbing and descents, winding trails, less inhabited villages and a few unknown tracks. You will pass through thick alpine forests along the trail, crossing and walking along rivers like Pindari and Saria before you reach at the Sunderdhunga Base Camp Trek where you can enjoy the panoramic view of few other peaks.
                                </p>
                                <p> <strong>Expert tips:</strong>Wear comfortable and suitable shoes for this type of trek as it requires a lot of climbing. It is advisable for you to get a service of a tour guide if you are new to this trail as there are few unknown trails that might be dangerous to you.</p>
                            </div>
                            {/* Best Time Section */}
                            <div className="mb-8">
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-6 mt-6">ADI KAILASH TREK</h2>
                                <img
                                    src="/images/blogs/adi-kailash-trek.webp"
                                    alt="Dayara Bugyal"
                                    className='h-[250px] md:h-[350px] lg:h-[400px] w-full mb-8 mt-8'
                                />
                                <p className="text-[#313137] ">
                                    Summer months of May and June are the best time for you to head up to another well-known trek in Kumaon, the Adi Kailash Trek. The region around the peak is extremely peaceful, soothing and incredibly beautiful. You can find Gaurikund Lake at the bottom of the peak, so do not miss the opportunity to explore the ground! The long trek starts from Dharchula, moving on to Pangu and many more stops before reaching Mt. Adi Kailash. This is definitely a long trek. Please bear in mind, the Adi Kailash Trek is a tough trek where you definitely have to cross a number of streams and rivers, passing through several mountains and remote villages.
                                </p>
                                <p> <strong>Expert tips:</strong> Difficulty level keeps increasing along the way. So be prepared mentally, physically and make sure you have a strong endurance.</p>
                            </div>
                            {/* Best Time Section */}
                            <div className="mb-8">
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-6 mt-6">PANCHACHULI BASE CAMP TREK</h2>
                                <img
                                    src="/images/blogs/panchachuli-trek.webp"
                                    alt="Dayara Bugyal"
                                    className='h-[250px] md:h-[350px] lg:h-[400px] w-full mb-8 mt-8'
                                />
                                <p className="text-[#313137] ">
                                    The Panchachuli Base Camp Trek is relatively an easy trek that starts from Urthing and the journey continues to Naagling and Saun. It is basically a trek used by the local villagers during summer. The only tricky section of the trek is after the Dhar village where extra caution is a must. A long walk from Saun will finally brings you to the Panchachuli Base Camp. The trail is quite narrow and there is a river flowing below. During the journey, you will come across the majestic Darma valley where you can appreciate the scenic view of the Panchachuli peaks.
                                </p>

                                <p> <strong>Expert tips:</strong>  It is best for you to climb up this trek during summer or spring as you will find it much easier to cope with the weather. However, it is not advisable for you to do the trekking here during monsoon and winter</p>
                                <p className="text-[#313137] ">
                                Basically, these are the treks that are very well-known among the trekkers in Uttarakhand. This list does not mark the end of numerous treks available in the state. For those who enjoyed trekking in the Uttarakhand Himalayas, you will find more treks at the mountains waiting for your arrival to conquer their peaks. So now work up your muscles, be fit physically and mentally, pack your bags and get ready to climb up the Himalayas treks!
                                </p>
                            </div>

                            {/* Why Us Section */}
                            <div className="">
                                <h2 className="text-xl sm:text-2xl  xl:text-3xl text-[#f47a2a] mb-6 mt-6">Why Choose Us ?</h2>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    We offer exclusive deals and packages for jeep safari tours in Himalayas. With an experience of more than three decades in the travel industry and with a team of experienced staff, we make sure that our jeep safari holiday packages are specially designed as per your needs and requirements.
                                </p>
                                <p className="mb-4 text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                    We also help you have cherishable memories of diverse cultural encounters by assisting you have interactions with local people and understand their ways of living. Arrangements for sight-seeing and shopping are few of our other services that you can rely on us for.
                                </p>
                                <p className="text-[#313137] ">
                                    Having associated with us, you can also be ensured of being provided with best of the services including accommodations, transportations and hotel transfers. We have a trusted name in the industry and with us, you are sure to have the most enriching and memorable experiences on your jeep safari adventure holiday.
                                </p>
                            </div>
                             <div className='author-section'>
                                <h2 className="text-xl sm:text-2xl xl:text-3xl text-[#f47a2a] mb-4 mt-4">About Arun Joshi</h2>

                                <div className="flex items-start gap-4 mt-4">
                                    {/* Left Side Image */}
                                    <img
                                        src="/images/blogs/arunjoshi.jpg"
                                        alt="Arun Joshi"
                                        className="w-24 h-24 object-cover rounded-md"
                                    />
                                    <p className="text-[#313137] text-[0.8rem] sm:text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                                        A thoroughbred adventurer, Arun Joshi was born in the picturesque and landlocked district of Chamoli, Uttarakhand. He is well known for his close association with the Indian Himalayas for the past 16 years, and knows the region inside out. His vast knowledge and first-hand experience of trekking to the many challenging regions of the Indian Himalayas have also helped him to establish himself as the go-to guide in the region.
                                    </p>

                                    {/* Right Side Text */}
                                    <div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Sidebar Column */}
                        <div className="lg:w-1/3">
                            <div className="sticky top-4 space-y-6">
                                {/* Recent Posts Section */}
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <h3 className="text-xl font-semibold text-[#313137] mb-4 border-b pb-2">Recent Posts</h3>
                                    <div className="space-y-4">
                                        {BlogsList
                                            .slice(0, 5) // copy to avoid mutating the original array
                                            .sort((a, b) => new Date(b.date) - new Date(a.date)) // sort by date descending
                                            .map((post, index) => (
                                                <Link href={`/${post.slug}`} key={index}>
                                                    <div className="flex gap-3 mb-4 border-b pb-3 border-b-[#f47a2a]">
                                                        <div className="flex-shrink-0 w-20 h-20 overflow-hidden rounded-md">
                                                            <img
                                                                src={post.image}
                                                                alt={post.title}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                        <div>
                                                            <h4 className="text-sm font-semibold text-[#172541] mb-1">{post.title}</h4>
                                                            <p className="text-xs text-gray-500 mb-1">{post.date}</p>
                                                            <p className="text-xs text-[#313137] line-clamp-2">{post.excerpt}</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                    </div>
                                </div>

                                {/* Popular Posts Section */}
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <h3 className="text-xl font-semibold text-[#313137] mb-4 border-b pb-2">Most Popular</h3>
                                    <div className="space-y-4">
                                        {BlogsList
                                            .slice(0, 5)
                                            .sort((a, b) => b.views - a.views)
                                            .map((post, index) => (
                                                <Link href={`/${post.slug}`} key={index} passHref>
                                                    <div className="flex gap-3 mb-4 border-b pb-3 border-b-[#f47a2a]">
                                                        <div className="flex-shrink-0 w-20 h-20 overflow-hidden rounded-md">
                                                            <img
                                                                src={post.image}
                                                                alt={post.title}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                        <div>
                                                            <h4 className="text-sm font-semibold text-[#172541] mb-1">{post.title}</h4>
                                                            <p className="text-xs text-gray-500 mb-1">{post.date}</p>
                                                            <p className="text-xs text-[#313137] line-clamp-2">{post.excerpt}</p>
                                                            <p className="text-[10px] text-gray-400">{post.views} views</p> {/* optional */}
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </div>

                                {/* Booking Form Section */}
                                <div className="booking-form">
                                    <div className="form-cta-section modern-cta">
                                        <div className="form-cta-ribbon premium-badge">
                                            <span>✨ Best Value Guarantee</span>
                                        </div>

                                        <div className="form-cta-content">
                                            <div className="pricing-header">
                                                <h3>All-Inclusive Luxury Package</h3>
                                                <p className="package-description">Experience the perfect blend of adventure and relaxation with our carefully curated itinerary</p>
                                            </div>

                                            <div className="price-container">
                                                <p className="price-tag">$710 <span className="price-unit">USD</span></p>
                                                <p className="price-note">per person (based on double occupancy)</p>
                                            </div>

                                            <div className="package-details">
                                                <div className="detail-item">
                                                    <svg className="detail-icon" viewBox="0 0 24 24">
                                                        <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
                                                    </svg>
                                                    <span>7 Nights 8 Days</span>
                                                </div>
                                                <div className="detail-item">
                                                    <svg className="detail-icon" viewBox="0 0 24 24">
                                                        <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
                                                    </svg>
                                                    <span>5-Star Accommodations</span>
                                                </div>
                                                <div className="detail-item">
                                                    <svg className="detail-icon" viewBox="0 0 24 24">
                                                        <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
                                                    </svg>
                                                    <span>All Meals Included</span>
                                                </div>
                                                <div className="detail-item">
                                                    <svg className="detail-icon" viewBox="0 0 24 24">
                                                        <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
                                                    </svg>
                                                    <span>Private Guided Tours</span>
                                                </div>
                                            </div>

                                            <div className="cta-actions">
                                                <button onClick={openModal} className="form-book-trip-button primary-cta">
                                                    BOOK THIS TRIP
                                                </button>
                                                <a href="tel:+1234567890" className="secondary-cta">                                                  CALL NOW
                                                </a>
                                            </div>

                                            <div className="trust-badges">
                                                <div className="trust-item">
                                                    <svg className="trust-icon" viewBox="0 0 24 24">
                                                        <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z" />
                                                    </svg>
                                                    <span>Secure Booking</span>
                                                </div>
                                                <div className="trust-item">
                                                    <svg className="trust-icon" viewBox="0 0 24 24">
                                                        <path d="M12,15A2,2 0 0,1 10,13A2,2 0 0,1 12,11A2,2 0 0,1 14,13A2,2 0 0,1 12,15M12,17C9.24,17 7,14.76 7,12C7,9.24 9.24,7 12,7C14.76,7 17,9.24 17,12C17,14.76 14.76,17 12,17M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z" />
                                                    </svg>
                                                    <span>24/7 Support</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {isOpen && (
                                        <ModalPortal>

                                            <TripBookingForm closeModal={closeModal} />

                                        </ModalPortal>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HowToTrekUttarakhand