import April from '@/components/trekbymonths/April'
import August from '@/components/trekbymonths/August'
import December from '@/components/trekbymonths/December'
import February from '@/components/trekbymonths/February'
import January from '@/components/trekbymonths/January'
import July from '@/components/trekbymonths/July'
import June from '@/components/trekbymonths/June'
import March from '@/components/trekbymonths/March'
import May from '@/components/trekbymonths/May'
import November from '@/components/trekbymonths/November'
import October from '@/components/trekbymonths/October'
import September from '@/components/trekbymonths/September'
import { notFound } from 'next/navigation'
import Autumn from '@/components/bestseasontovisit/Autumn'
import Monsoon from '@/components/bestseasontovisit/Monsoon'
import Spring from '@/components/bestseasontovisit/Spring'
import Summer from '@/components/bestseasontovisit/Summer'
import Winter from '@/components/bestseasontovisit/Winter'
import BaraBhangalTrek from '@/components/trekdetailspages/trekitinerarydetails/himachaltreksitinerary/BaraBhangalTrek'
import BhabhaPassTrek from '@/components/trekdetailspages/trekitinerarydetails/himachaltreksitinerary/BhabhaPassTrek'
import ChandraTalTrek from '@/components/trekdetailspages/trekitinerarydetails/himachaltreksitinerary/DeoTibbaBaseCampTrek'
import HamptaPassTrek from '@/components/trekdetailspages/trekitinerarydetails/himachaltreksitinerary/HamptaPassTrek'
import IndraHarPassTrek from '@/components/trekdetailspages/trekitinerarydetails/himachaltreksitinerary/IndraHarPassTrek'
import KareriLakeTrek from '@/components/trekdetailspages/trekitinerarydetails/himachaltreksitinerary/KareriLakeTrek'
import KinnerKailashTrek from '@/components/trekdetailspages/trekitinerarydetails/himachaltreksitinerary/KinnerKailashTrek'
import ManiMaheshTrek from '@/components/trekdetailspages/trekitinerarydetails/himachaltreksitinerary/ManiMaheshTrek'
import PinParvatiTrek from '@/components/trekdetailspages/trekitinerarydetails/himachaltreksitinerary/PinParvatiTrek'
import AudensColTrek from "@/components/trekdetailspages/trekitinerarydetails/gadhwaltreksitinerary/AudensColTrek"
import ChandrashilaSummitTrek from "@/components/trekdetailspages/trekitinerarydetails/gadhwaltreksitinerary/ChandrashilaSummitTrek"
import DamdarKandiTrek from "@/components/trekdetailspages/trekitinerarydetails/gadhwaltreksitinerary/DamdarKandiTrek"
import DayaraBugyalTrek from "@/components/trekdetailspages/trekitinerarydetails/gadhwaltreksitinerary/DayaraBugyalTrek"
import DoditalTrek from "@/components/trekdetailspages/trekitinerarydetails/gadhwaltreksitinerary/DoditalTrek"
import GangotriGaumukhTrek from "@/components/trekdetailspages/trekitinerarydetails/gadhwaltreksitinerary/GangotriGaumukhTrek"
import GangotriNandaVanTrek from "@/components/trekdetailspages/trekitinerarydetails/gadhwaltreksitinerary/GangotriNandaVanTrek"
import KagbhusandiLakeTrek from "@/components/trekdetailspages/trekitinerarydetails/gadhwaltreksitinerary/KagbhusandiLakeTrek"
import KalindiKhalTrek from "@/components/trekdetailspages/trekitinerarydetails/gadhwaltreksitinerary/KalindiKhalTrek"
import KedartalTrek from "@/components/trekdetailspages/trekitinerarydetails/gadhwaltreksitinerary/KedartalTrek"
import KhatLingSehstraTalTrek from "@/components/trekdetailspages/trekitinerarydetails/gadhwaltreksitinerary/KhatLingSehstraTalTrek"
import KuariPassTrek from "@/components/trekdetailspages/trekitinerarydetails/gadhwaltreksitinerary/KuariPassTrek"
import NandaDeviTrek from "@/components/trekdetailspages/trekitinerarydetails/gadhwaltreksitinerary/NandaDeviTrek"
import NandiKundTrek from "@/components/trekdetailspages/trekitinerarydetails/gadhwaltreksitinerary/NandiKundTrek"
import PanchKedar from "@/components/trekdetailspages/trekitinerarydetails/gadhwaltreksitinerary/PanchKedar"
import PanPatiaColTrek from "@/components/trekdetailspages/trekitinerarydetails/gadhwaltreksitinerary/PanPatiaColTrek"
import RoopKundTrek from "@/components/trekdetailspages/trekitinerarydetails/gadhwaltreksitinerary/RoopKundTrek"
import ShivLingTrek from "@/components/trekdetailspages/trekitinerarydetails/gadhwaltreksitinerary/ShivLingTrek"
import SourcesofGangesTrek from "@/components/trekdetailspages/trekitinerarydetails/gadhwaltreksitinerary/SourcesofGangesTrek"
import ValleyofFlowersTrek from "@/components/trekdetailspages/trekitinerarydetails/gadhwaltreksitinerary/ValleyofFlowersTrek"
import ChenapLakeTrek from "@/components/trekdetailspages/trekitinerarydetails/gadhwaltreksitinerary/ChenapLakeTrek"
import SnowLeopard from "@/components/trekdetailspages/trekitinerarydetails/SnowLeopard"
import HarKiDunTrek from "@/components/trekdetailspages/trekitinerarydetails/gadhwaltreksitinerary/HarKiDunTrek"
import FrozenRiver from '@/components/trekdetailspages/trekitinerarydetails/FrozenRiver'
import MarkhaValley from '@/components/trekdetailspages/trekitinerarydetails/MarkhaValley'
import ShamValley from '@/components/trekdetailspages/trekitinerarydetails/ShamValley'
import WildLadakh from '@/components/trekdetailspages/trekitinerarydetails/WildLadakhRemoteZanskarTrek'
import ManaliLadakh from '@/components/trekdetailspages/trekitinerarydetails/TheZanskarValley'
import NubraValley from '@/components/trekdetailspages/trekitinerarydetails/NubraValley'
import DzongriTrek from '@/components/trekdetailspages/trekitinerarydetails/sikkimtreksitinerary/DzongriTrek'
import GreenLake from '@/components/trekdetailspages/trekitinerarydetails/sikkimtreksitinerary/GreenLake'
import SingaliaRidgeandGoechala from '@/components/trekdetailspages/trekitinerarydetails/sikkimtreksitinerary/SingaliaRidgeandGoechala'
import SundarDhungaBaseCampTrek from "@/components/trekdetailspages/trekitinerarydetails/kumaontrekitinerary/SundarDhungaBaseCampTrek"
import PindariGlacierTrek from "@/components/trekdetailspages/trekitinerarydetails/kumaontrekitinerary/PindariGlacierTrek"
import NandaDeviEastBaseCamp from "@/components/trekdetailspages/trekitinerarydetails/kumaontrekitinerary/NandaDeviEastBaseCamp"
import GangabalLakeTrek from '@/components/trekdetailspages/trekitinerarydetails/Jammutreksitinerary/GangabalLakeTrek'
import KashmirAlpinesLakeTrek from '@/components/trekdetailspages/trekitinerarydetails/Jammutreksitinerary/KashmirAlpinesLakeTrek'
import KolahoiBaseCampTrek from '@/components/trekdetailspages/trekitinerarydetails/Jammutreksitinerary/KolahoiBaseCampTrek'
import MountLadakhi from '@/components/peakclimbingtours/himachalpeaks/MountLadakhi'
import MountShitidhar from '@/components/peakclimbingtours/himachalpeaks/MountShitidhar'
import FriendshipPeak from '@/components/peakclimbingtours/himachalpeaks/FriendshipPeak'
import SevenSisters from '@/components/peakclimbingtours/himachalpeaks/SevenSisters'
import MountMenthosa from '@/components/peakclimbingtours/himachalpeaks/MountMenthosa'
import MountHanumanTibba from '@/components/peakclimbingtours/himachalpeaks/MountHanumanTibba'
import Papsura from '@/components/peakclimbingtours/himachalpeaks/MountPapsura'
import IndrasanPeak from '@/components/peakclimbingtours/himachalpeaks/IndrasanPeak'
import ManaliPeak from '@/components/peakclimbingtours/himachalpeaks/ManaliPeak'
import MountYunam from '@/components/peakclimbingtours/himachalpeaks/MountYunam'
import MountPapsura from '@/components/peakclimbingtours/himachalpeaks/MountPapsura'
import ChandraBhaga from '@/components/peakclimbingtours/himachalpeaks/ChandraBhaga'
import GoechalaTrek from '@/components/trekdetailspages/trekitinerarydetails/sikkimtreksitinerary/GoechalaTrek'
import RhododendronTrek from '@/components/trekdetailspages/trekitinerarydetails/sikkimtreksitinerary/RhododendronTrek'
import KasturiOrarRoundTrek from '@/components/trekdetailspages/trekitinerarydetails/sikkimtreksitinerary/KasturiOrarRoundTrek'
import SingaliaSandakphuTrek from '@/components/trekdetailspages/trekitinerarydetails/sikkimtreksitinerary/SingaliaSandakphuTrek'
import PhokteyDaraTrek from '@/components/trekdetailspages/trekitinerarydetails/sikkimtreksitinerary/PhokteyDaraTrek'
import SatopanthSwargarohiniTrek from '@/components/trekdetailspages/trekitinerarydetails/gadhwaltreksitinerary/SatopanthSwargarohiniTrek'
import MiyarPangiTrek from '@/components/trekdetailspages/trekitinerarydetails/himachaltreksitinerary/MiyarPangiTrek'
import DalaiLamaTrek from '@/components/trekdetailspages/trekitinerarydetails/himachaltreksitinerary/DalaiLamaTrek'
import ParangLaTrek from '@/components/trekdetailspages/trekitinerarydetails/himachaltreksitinerary/ParangLaTrek'
import ChandraKhaniPassTrek from '@/components/trekdetailspages/trekitinerarydetails/himachaltreksitinerary/ChandraKhaniPassTrek'
import KalihaniPassTrek from '@/components/trekdetailspages/trekitinerarydetails/himachaltreksitinerary/KalihaniPassTrek'
import DeoTibbaBaseCampTrek from '@/components/trekdetailspages/trekitinerarydetails/himachaltreksitinerary/DeoTibbaBaseCampTrek'
import TwinKailashTrek from '@/components/trekdetailspages/trekitinerarydetails/himachaltreksitinerary/TwinKailashTrek'
import RumptseToTsomoririLake from '@/components/trekdetailspages/trekitinerarydetails/RumptseToTsomoririLake'
import TsomoririToKibber from '@/components/trekdetailspages/trekitinerarydetails/TsomorirIToKibber'
import ChalungKangri from '@/components/trekdetailspages/trekitinerarydetails/ChalungKangri'
import TheGreatZanskar from '@/components/trekdetailspages/trekitinerarydetails/TheGreatZanskar'
import LamayurutoKanjiTrekViaPhirtseLa from '@/components/trekdetailspages/trekitinerarydetails/LamayurutoKanjiTrekViaPhirtseLa'
import LadakhHighValleyTrek from '@/components/trekdetailspages/trekitinerarydetails/LadakhHighValleyTrek'
import RipcharValley from '@/components/trekdetailspages/trekitinerarydetails/RipcharValley'
import RupshuValley from '@/components/trekdetailspages/trekitinerarydetails/RupshuValley'
import TheZanskarValley from '@/components/trekdetailspages/trekitinerarydetails/TheZanskarValley'
import MiyarValleyKangLaJot from '@/components/trekdetailspages/trekitinerarydetails/MiyarValleyKangLaJot'
import TheLandofGompas from '@/components/trekdetailspages/trekitinerarydetails/TheLandofGompas'
import TheGrandTreverse from '@/components/trekdetailspages/trekitinerarydetails/TheGrandTreverse'
import MarkhaValleyDzoJongo from '@/components/trekdetailspages/trekitinerarydetails/MarkhaValleyDzoJongo'
import RalamDhuraPassTrek from '@/components/trekdetailspages/trekitinerarydetails/kumaontrekitinerary/RalamDhuraPassTrek'
import TrailsPassTrekking from '@/components/trekdetailspages/trekitinerarydetails/kumaontrekitinerary/TrailsPassTrekking'
import BhantoiPeakSummit from '@/components/trekdetailspages/trekitinerarydetails/kumaontrekitinerary/BhantoiPeakSummit'
import BaljuriPeakExpedition from '@/components/trekdetailspages/trekitinerarydetails/kumaontrekitinerary/BaljuriPeakExpedition'
import NamikGlacier from '@/components/trekdetailspages/trekitinerarydetails/kumaontrekitinerary/NamikGlacier'
import PangiValleyTrek from '@/components/trekdetailspages/trekitinerarydetails/himachaltreksitinerary/PangiValleyTrek'
import ShrikhandMahadevTrek from '@/components/trekdetailspages/trekitinerarydetails/himachaltreksitinerary/ShrikhandMahadevTrek'
import ChandratalBaralachaTrek from '@/components/trekdetailspages/trekitinerarydetails/himachaltreksitinerary/ChandratalBaralachaTrek'
import AdiKailashTrek from '@/components/trekdetailspages/trekitinerarydetails/kumaontrekitinerary/AdiKailashTrek'
import MountDeoTibba from '@/components/peakclimbingtours/himachalpeaks/MountDeoTibba'



const itineraryMap = {
  //Trek By Months Routes
  'january': January,
  'february': February,
  'march': March,
  'april': April,
  'may': May,
  'june': June,
  'july': July,
  'august': August,
  'september': September,
  'october': October,
  'november': November,
  'december': December,
  'spring': Spring,
  'summer': Summer,
  'monsoon': Monsoon,
  'autumn': Autumn,
  'winter': Winter,

  /////////////////////


  //Himachal Treks Routes
  'hampta-pass-trek': HamptaPassTrek,
  'deo-tibba-base-camp-trek': DeoTibbaBaseCampTrek,
  'miyar-pangi-valley-trek': MiyarPangiTrek,
  'pangi-valley': PangiValleyTrek,
  'indrahar-pass-trek': IndraHarPassTrek,
  'chandratal-trek': ChandraTalTrek,
  'chandratal-baralacha-trek': ChandratalBaralachaTrek,
  'kinner-kailash-trek': KinnerKailashTrek,
  'manimahesh_kailash_trek': ManiMaheshTrek,
  "shrikhand-mahadev-trek": ShrikhandMahadevTrek,
  "twin-kailash-trek": TwinKailashTrek,
  'parang-la-trek': ParangLaTrek,
  'miyar-pangi-valley-trek': MiyarPangiTrek,
  'kalihani-pass-trek': KalihaniPassTrek,
  'charang-valley-trek': ChandraTalTrek,
  'pinparvati_passtrek': PinParvatiTrek,
  'dalai-lama-trek': DalaiLamaTrek,
  'chandrakhani-pass-trek': ChandraKhaniPassTrek,
  'bara-bhangal-trek': BaraBhangalTrek,
  'bhabha-pass-trek': BhabhaPassTrek,
  'twin-Kailash-trek': TwinKailashTrek,
  'kareri-lake-trek': KareriLakeTrek,

  ///////////////////

  // Garhwal Treks Routes   
  'chopta-chandrashila-trek': ChandrashilaSummitTrek,
  'dodital-darwa-pass-trek': DoditalTrek,
  'valley-of-flowers-trek': ValleyofFlowersTrek,
  'dayara-bugyal-trek': DayaraBugyalTrek,
  'nanda-devi-trek': NandaDeviTrek,
  'panch-kedar-trek': PanchKedar,
  'gangotri-gaumukh': GangotriGaumukhTrek,
  'roopkund-trek': RoopKundTrek,
  'sources-ganges-trekking': SourcesofGangesTrek,
  'kauri-pass-trek': KuariPassTrek,
  'snow-leopard-trek': SnowLeopard,
  'kuari-pass-roopkund-trek': KuariPassTrek,
  'kuari-pass-valley-of-flowers-trek': ValleyofFlowersTrek,
  'khatling-sahastra-tal': KhatLingSehstraTalTrek,
  'gangotri-nandanvan-trek': GangotriNandaVanTrek,
  'kedartal-trek': KedartalTrek,
  'satopanth-swargarohini-trek': SatopanthSwargarohiniTrek,
  'shivling-trek': ShivLingTrek,
  'khatling-sahasratal-trek': KhatLingSehstraTalTrek,
  'kalindikhal-pass-trek': KalindiKhalTrek,
  'audens-col-trek': AudensColTrek,
  'damdar-kandi-pass-trek': DamdarKandiTrek,
  'kagbhusandi-lake-trek': KagbhusandiLakeTrek,
  'nandikund-trek': NandiKundTrek,
  'panpatia-col-trek': PanPatiaColTrek,
  'chenap-lake-trek': ChenapLakeTrek,
  'har-ki-dun-ruinsara-tal-trek': HarKiDunTrek,
  'dodi-tal-trek': DoditalTrek,
  //////////////////////////




  // Ladakh Treks Routes
  'frozen-river-trek': FrozenRiver,
  'markha-valley-trek': MarkhaValley,
  'sham-trek': ShamValley,
  'chalung-kangri-trek': ChalungKangri,
  'nubra-valley-trek-via-lasermo-la': NubraValley,
  'lamayuru-kanji-via-phirtse-la': LamayurutoKanjiTrekViaPhirtseLa,
  'miyar-valley-kang-la-jot': MiyarValleyKangLaJot,
  'tsomoriri-to-kibber-via-parang-la': TsomoririToKibber,
  'ripchar-valley-trek': RipcharValley,
  'wild-ladakh-trek': WildLadakh,
  'manali-ladakh-trek': ManaliLadakh,
  'zanskar-valley-trek': TheZanskarValley,
  'markha-valley-dzo-jongo-climb': MarkhaValleyDzoJongo,
  'the-great-zanskar': TheGreatZanskar,
  'ladakh-high-valley-trek': LadakhHighValleyTrek,
  'rumptse-to-tsomoiri-lake-trek': RumptseToTsomoririLake,
  'the-land-of-gompas': TheLandofGompas,
  'lamayuru-padum-trek': TheGrandTreverse,
  'rupshu-valley': RupshuValley,

  /////////////



  // Sikkim Treks Routes
  'dzongri-trek': DzongriTrek,
  'goechala-trek': GoechalaTrek,
  'singalila-ridge-goecha-la-trek': SingaliaRidgeandGoechala,
  'rhododendron-trek': RhododendronTrek,
  'kasturi-orar-trek': KasturiOrarRoundTrek,
  'singalia-sandakphu-trek': SingaliaSandakphuTrek,
  'phoktey-dara-trek': PhokteyDaraTrek,
  'green-lake-trek': GreenLake,
  ///////////////////////////


  // Kumaon Trek Routes

  'adi-kailash-trek': AdiKailashTrek,
  'trails-pass-trekking-expedition': TrailsPassTrekking,
  'sunderdhunga_base_camp': SundarDhungaBaseCampTrek,
  'baqershwar-pindari-trek': PindariGlacierTrek,
  'namik-glacier-trek': NamikGlacier,
  'ralam-dhura-pass-trek': RalamDhuraPassTrek,
  'bhantoi-peak-expedition': BhantoiPeakSummit,
  'nandadevi_eastbase_camp': NandaDeviEastBaseCamp,
  'baljuri-peak-expedition': BaljuriPeakExpedition,

  ////////////////////////////////////////////



  //Kashmir Treks
  'gangabal-lake-trek': GangabalLakeTrek,
  'kashmir-alpine-lakes-trek': KashmirAlpinesLakeTrek,
  'kolahoi-base-camp-trek': KolahoiBaseCampTrek,

  ///////////////////////////////////////////////




  // Himachal Peak Climbing Routes 

  'mount-ladakhi': MountLadakhi,
  'mount-shitidhar': MountShitidhar,
  'friendship-peak': FriendshipPeak,
  'seven-sisters': SevenSisters,
  'mount-methosa': MountMenthosa,
  'mount-hanuman-tibba': MountHanumanTibba,
  'papsura': Papsura,
  'indrasan-peak': IndrasanPeak,
  'manali-peak': ManaliPeak,
  'mount-menthosa': MountMenthosa,
  'mount-yunam': MountYunam,
  'mount-shitidhar': MountShitidhar,
  'mount-papsura': MountPapsura,
  'mount-cb-13-cb-14': ChandraBhaga,
  'mount-deo-tibba': MountDeoTibba

  /////////////////////////////////////////////////

  // Motorbike Tours Routes





////////////////////////////////////////////////////


}
// Metadata info map
const metadataMap = {
  'mount-ladakhi': {
    title: 'Mount Ladakhi - Peak Climbing in Himachal',
    description: 'Experience the thrill of climbing Mount Ladakhi, one of Himachal’s prime peaks. Detailed itinerary and tips.',
  },
  'mount-shitidhar': {
    title: 'Mount Shitidhar Peak Climbing Adventure',
    description: 'Discover the challenging Mount Shitidhar peak climbing tour with expert guides and itinerary details.',
  },
  'friendship-peak': {
    title: 'Friendship Peak Expedition in Himachal Pradesh, Himalayas',
    description: 'Explore information on conquering the Friendship Peak Expedition in Himachal Pradesh, Himalayas, for an unforgettable alpine adventure.',
  },
  'seven-sisters': {
    title: 'Seven Sisters Peak Climbing Tours',
    description: 'Explore the majestic Seven Sisters peaks with our specially curated climbing tours and itineraries.',
  },
  'mount-deo-tibba': {
    title: 'Mount Deo Tibba - Himachal Peak Climbing',
    description: 'Join our Mount Deo Tibba peak climbing expeditions with full itinerary and expert guidance.',
  },
  'mount-menthosa': {
    title: 'Mount Menthosa Expedition in Himachal Pradesh, Himalayas',
    description: 'Get detailed info on the Mount Menthosa Expedition in Himachal Pradesh—a thrilling Himalayan adventure for experienced mountaineers.',
  },
  'mount-hanuman-tibba': {
    title: 'Hanuman Tibba Peak Expedition in Himachal Pradesh, Himalayas ',
    description: 'Explore information on conquering the Friendship Peak Expedition in Himachal Pradesh, Himalayas, for an unforgettable alpine adventure.',
  },
  'papsura': {
    title: 'Papsura Peak - A Challenging Himalayan Trek',
    description: 'Detailed guides and tours for Papsura peak climbing adventure in Himachal.',
  },
  'indrasan-peak': {
    title: 'Indrasan Peak Expedition in Himachal Pradesh, Himalayas',
    description: 'Explore the thrilling Indrasan Peak Expedition in Himachal Pradesh—perfect for seasoned trekkers seeking adventure in the Himalayas.',
  },
  'manali-peak': {
    title: 'Manali Peak Expedition in Himachal Pradesh, Himalayas',
    description: 'Get detailed info on the Manali Peak Expedition in Himachal Pradesh — an adventurous Himalayan climb offering stunning views and thrilling experiences.',
  },
  'mount-deo-tibba': {
    title: 'Mt. Deo Tibba Peak Expedition in Himachal Pradesh, Himalayas',
    description: 'Get detailed info on the Mt. Deo Tibba Peak Expedition—a challenging Himalayan climb in Himachal Pradesh with breathtaking alpine views.',
  },
  'mount-yunam': {
    title: 'Mount Yunam Peak Expedition in Himachal Pradesh, Himalayas',
    description: 'Discover detailed info on Yunam Peak Expedition in Himachal Pradesh, Himalayas – a thrilling high-altitude adventure for trekkers!',
  },
  'mount-shitidhar': {

    title: 'Mount Shitidhar Climbing Expedition in Himachal Pradesh, Himalayas',
    description: 'Get detailed info on Mount Shitidhar Climbing Expedition in Himachal Pradesh, Himalayas – a perfect adventure for alpine enthusiasts! ',

  },
  'mount-papsura': {

    title: 'Mount Papsura Peak Expedition in Himachal Pradesh, Himalayas',
    description: 'Get detailed info on Mount Papsura Peak Expedition in Himachal Pradesh – a challenging climb for thrill-seekers in the mighty Himalayas!',

  },
  'mount-cb-13-cb-14': {

    title: 'Mount CB 13 and CB 14 Expedition in Himachal Pradesh, Himalayas',
    description: 'Get detailed info on Mount CB 13 & CB 14 Expedition in Himachal Pradesh, Himalayas – perfect for seasoned climbers seeking true adventure!',

  }
}


// ✅ Metadata function (separate from the page component)
export function generateMetadata({ params }) {
  const meta = metadataMap[params.activities]

  if (!meta) {
    return {
      title: '',
      description: '',
    }
  }

  return {
    title: meta.title,
    description: meta.description,
  }
}

// ✅ Page component
export default function Page({ params }) {
  const activities = params.activities?.toLowerCase()
  const ItineraryComponent = itineraryMap[activities]

  if (!ItineraryComponent) {
    notFound()
  }

  return <ItineraryComponent />
}

