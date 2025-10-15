import GadhwalHimalayanJeepSafari from "@/components/activities/jeepsafari/GadhwalHimalayanJeepSafari"



const itineraryMap = {
  'garhwal-himalayan-jeepsafari-tours': GadhwalHimalayanJeepSafari
 

}


export default  async function  Page ( { params }) {
  const ItineraryComponent =  await itineraryMap[params.slug]

  if (!ItineraryComponent) {
    return notFound()
  }

  return <ItineraryComponent />
}
