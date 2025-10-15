import { notFound } from 'next/navigation'
import FreyPeak from '@/components/peakclimbingtours/sikkimpeaks/FreyPeak'
import MountTenchenKhang from '@/components/peakclimbingtours/sikkimpeaks/MountTenchenKhang'
import MountJopuno from '@/components/peakclimbingtours/sikkimpeaks/MountJopuno'
import LamaWangden from '@/components/peakclimbingtours/sikkimpeaks/LamaWangden'
import BrumKhangse from '@/components/peakclimbingtours/sikkimpeaks/BrumKhangse'

const itineraryMap = {

  'frey-peak': FreyPeak,
  'mount-tenchenkang': MountTenchenKhang,
  'mount-jopuno': MountJopuno,
   'lama-wangden': LamaWangden,
   'brumkhangse': BrumKhangse

}

export default function Page({ params }) {
  const ItineraryComponent = itineraryMap[params.slug]

  if (!ItineraryComponent) {
    return notFound()
  }

  return <ItineraryComponent />
}
