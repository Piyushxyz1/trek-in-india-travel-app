
import GangabalLakeTrek from '@/components/trekdetailspages/trekitinerarydetails/Jammutreksitinerary/GangabalLakeTrek'
import KashmirAlpinesLakeTrek from '@/components/trekdetailspages/trekitinerarydetails/Jammutreksitinerary/KashmirAlpinesLakeTrek'
import KolahoiBaseCampTrek from '@/components/trekdetailspages/trekitinerarydetails/Jammutreksitinerary/KolahoiBaseCampTrek'

import { notFound } from 'next/navigation'

const itineraryMap = {

}

export default function Page({ params }) {
  const ItineraryComponent = itineraryMap[params.slug]
  if (!ItineraryComponent) {
    return notFound()
  }

  return <ItineraryComponent />
}
