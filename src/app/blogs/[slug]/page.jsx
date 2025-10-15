
import { notFound } from 'next/navigation'
import BestHikingTrails from '@/components/blogs/blogposts/BestHikingTrails'
import BestMonsoonTreks from '@/components/blogs/blogposts/BestMonsoonTreks'
import TopTreksSikkimSummer from '@/components/blogs/blogposts/TopTreksSikkimSummer'
import HowToTrekUttarakhand from '@/components/blogs/blogposts/HowToTrekUttarakhand'
import UpComingFixedDeparture from '@/components/blogs/blogposts/UpComingFixedDeparture'

const itineraryMap = {
  'best-hiking-trails':BestHikingTrails,
  'best-monsoon-treks': BestMonsoonTreks,
  'top-treks-to-do-sikkim-in-summer': TopTreksSikkimSummer,
  'trekking-in-uttarakhand-himalaya-how-to-do-it':HowToTrekUttarakhand,
  'upcoming-fixed-departure-winter-treks': UpComingFixedDeparture

    // Add other slugs here...
}

export default function Page({ params }) {
  const slug = params.slug?.toLowerCase()
  const ItineraryComponent = itineraryMap[slug]

  if (!ItineraryComponent) {
    notFound() // ✅ Just call it
  }

  return <ItineraryComponent />
}
