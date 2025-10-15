

const trekData = [
    // 🏔️ Ladakh Treks
    {
      id: 1,
      title: "Sham Valley Trek",
      month : ["january","february","march"],
      season: "winter",
      duration: "07 Days",
      weather: "winter",
      difficulty: "easy",
      region: "Ladakh",
      image: "/images/trekking-tours/ladakh/sham-valley.webp",
      description:"A peaceful walk through charming villages and monasteries like Alchi, Lamayuru.",
      rating: 4.5,
      price: "12000",
      slug:"sham-trek",
    },
    {
      id: 2,
      title: "Tsomoriri to Kibber Trek via Parang La",
      month : ["april","may","june"],
      season: "summer",
      duration: "06 Days",
      difficulty: "easy",
      region: "Ladakh",
      image: "/images/trekking-tours/ladakh/kibber-trek.webp",
      description: "Perfect for beginners with views of the Indus Valley and access to Buddhist monasteries.",
      rating: 4.5,
      price: "12000",
      slug: "tsomoriri-to-kibber-via-parang-la"
    },
    {
      id: 3,
      title: "Chalung Kangri Trek",
      month : ["april","may","june"],
      season: "summer",
      duration: "06 Days",
      difficulty: "easy",
      region: "Ladakh",
      image: "/images/trekking-tours/ladakh/chalung-kangri.webp",
      description: "Perfect for beginners with views of the Indus Valley and access to Buddhist monasteries.",
      rating: 4.5,
      price: "12000",
      slug: "chalung-kangri-trek"
    },
    {
      id: 4,
      title: "Markha Valley Trek",
      month : "January",
      season: "monsoon",
      duration: "09 Days",
      difficulty: "moderate",
      region: "Ladakh",
      image: "/images/trekking-tours/ladakh/markha-valley-trek.webp",
      description: "Scenic route through Hemis National Park with a close view of Kang Yatse peak.",
      rating: 4.5,
      price: "12000",
      isPopular: true,
      slug:"markha-valley-trek",
    },
    
    {
      id: 5,
      title: "Lamayuru to Kanji Trek via Phirtse La",
      month : "January",
      season: "winter",
      duration: "12 Days",
      difficulty: "hard",
      region: "Ladakh",
      image: "/images/trekking-tours/ladakh/lamayuru-kanji.webp",
      description: "A challenging summit trek for experienced mountaineers with panoramic Himalayan views.",
      rating: 4.5,
      price: "12000",

      isPopular: true,
      slug: "lamayuru-kanji-via-phirtse-la"
    },
    {
      id: 6,
      title: "Frozen River Chadar Trek",
      month : "January",
      season: "winter",
      duration: "10 Days",
      weather:"winter",
      difficulty: "hard",
      region: "Ladakh",
      image: "/images/trekking-tours/ladakh/chadar-trek.webp",
      description: "An iconic frozen river trek on the Zanskar, full of adventure and extreme weather conditions.",
      rating: 4.5,
      price: "12000",
      slug: "frozen-river-trek"
    },
    {
      id: 7,
      title: "Nubra Valley via Lasermo La",
      month : "February", 
      duration: "08 Days",
      difficulty: "moderate",
      region: "Ladakh",
      image: "/images/trekking-tours/ladakh/nubra-valley-trek.webp",
      description: "Explore sand dunes, orchards, and a unique cold desert ecosystem in Nubra Valley.",
      rating: 4.5,
      price: "12000",
      slug:"nubra-valley-trek-via-lasermo-la"
    },
    
      {
        id:8,
        title: " Rumptse to Tsomoriri Lake",
        month : "March",
        season: "spring",
        duration: "23 Days",
        difficulty: "moderate",
        region: "Ladakh",
        image: "/images/trekking-tours/ladakh/tsomoriri-lake-trek.webp",
        description: "A scenic trek to the high-altitude Tsomoriri Lake, known for its pristine beauty and wildlife.",
        rating: 4.5,
        price: "12000",
        slug: "rumptse-to-tsomoiri-lake-trek"
      },
     
      {
        id:9,
        title: "The Land of Gompas; Ladak Trek",
        month : "March",
        season: "march",
        duration: "12 Days",
        difficulty: "moderate",
        region: "Ladakh",
        image: "/images/trekking-tours/ladakh/land-of-gompas.webp",
        description: "A moderate trek connecting Lamayuru to Chilling via the scenic Dung-Dung La Pass.",
        rating: 4.5,
        price: "12000",

        slug: "the-land-of-gompas"
      },
      {
        id: 10,
        title: "Miyar Valley and Kang La Jot",
        month : "March",
        season: "march",
        duration: "12 Days",
        difficulty: "moderate",
        region: "Ladakh",
        image: "/images/trekking-tours/ladakh/miyar-valley.webp",
        description: "A moderate trek connecting Lamayuru to Chilling via the scenic Dung-Dung La Pass.",
        rating: 4.5,
        price: "12000",
        slug: "miyar-valley-kang-la-jot"
      },
      {
        id: 11,
        title: "Ladakh High Valley Trek",
        month : "March",
        duration: "11 Days",
        difficulty: "moderate",
        region: "Ladakh",
        image: "/images/trekking-tours/ladakh/ladakh-high-valley.webp",
        description: "Explore the heart of Ladakh along the Indus River with rich culture and landscapes.",
        rating: 4.5,
        price: "12000",
        slug: "ladakh-high-valley-trek"
      },
      {
        id: 12,
        title: "Ripchar Valley Trek",
        month : "February",
        season: "winter",
        duration: "13 Days",
        difficulty: "moderate",
        region: "Ladakh",
        image: "/images/trekking-tours/ladakh/ripchar-valley.webp",
        description: "A relatively easy trek through the Sham region, ideal for beginners in Ladakh.",
        rating: 4.5,
        price: "12000",
        slug: "ripchar-valley-trek"
      },
      {
        id: 13,
        title: " Rupshu Valley",
        month : "February",
        season: "winter",
        duration: "16 Days",
        difficulty: "moderate",
        category: "bird-watching",
        region: "Ladakh",
        image: "/images/trekking-tours/ladakh/rupshu-valley.webp",
        description: "An adventurous trans-Himalayan trek through remote valleys and high passes.",
        rating: 4.5,
        price: "12000",
        slug: "rupshu-valley"
      },

      {
        id: 14,
        title: "Markha Valley Trek with Dzo Jongo climb ",
        month : "August",
        season: "monsoon",
        duration: "24 Days",
        difficulty: "moderate",
        region: "Ladakh",
        image: "/images/trekking-tours/ladakh/dzo-jongo-climb.webp",
        description: "A thrilling trek connecting the cold deserts of Spiti and Ladakh across rugged terrain.",
        rating: 4.5,
        price: "12000",
        slug: "markha-valley-dzo-jongo-climb"
      },
      {
        id: 15,
        title: "The Wild Ladakh and Remote Zanskar Trek",
        month : "March",
        season: "summer",
        duration: "23 Days",
        difficulty: "moderate",
        region: "Ladakh",
        image: "/images/trekking-tours/ladakh/remote-zanskar.webp",
        description: "Discover the wild, untouched landscapes of Ladakh with offbeat trails and wildlife.",
        rating: 4.5,
        price: "12000",
        slug: "wild-ladakh-remote-zanskar"
      },
      {
        id: 16,
        title: "The Great Zanskar Traverse",
        month : "March",
        duration: "17 Days",
        season: "summer",
        difficulty: "moderate",
        region: "Ladakh",
        image: "/images/trekking-tours/ladakh/the-great-zanskar-traverse.webp",
        description: "A spiritual trek across Ladakh’s iconic monasteries with scenic Himalayan backdrops.",
        rating: 4.5,
        price: "12000",
        slug: "the-great-zanskar"
      },
      {
        id: 17,
        title: "Zanskar Valley Trek ",
        month : "October",
        season: "monsoon",
        duration: "23 Days",
        difficulty: "moderate",
        region: "Ladakh",
        image: "/images/trekking-tours/ladakh/the-zanskar-valley.webp",
        description: "An epic journey from Manali to Ladakh crossing high passes and diverse terrain.",
        rating: 4.5,
        price: "12000",
        slug: "zanskar-valley-trek"
      },
      {
        id: 18,
        title: "Lamayuru – Padum Trek",
        month : "October",
        season: "monsoon",
        duration: "23 Days",
        difficulty: "moderate",
        region: "Ladakh",
        image: "/images/trekking-tours/ladakh/lamayuru-padum.webp",
        description: "An epic journey from Manali to Ladakh crossing high passes and diverse terrain.",
        rating: 4.5,
        price: "12000",
        slug: "lamayuru-padum-trek"
      },
    
      {
        id:19,
        title: "Snow leopard Trek",
        month : "October",
        season: "monsoon",
        duration: "23 Days",
        difficulty: "moderate",
        region: "Ladakh",
        image: "/images/trekking-tours/ladakh/snow-leopard-trek.webp",
        description: "An epic journey from Manali to Ladakh crossing high passes and diverse terrain.",
        rating: 4.5,
        price: "12000",
        slug: "snow-leopard-trek"
      },
    
    // 🌸 Sikkim Treks
    
    {
      id:20,
      title: "Dzongri Trek",
      month : "October",
      duration: "05 Days",
      weather: "winter",
      season: "monsoon",
      difficulty: "easy",
      region: "Sikkim",
      image: "/images/trekking-tours/sikkim/dzongri-trek.webp",
      description: "A short trek to beautiful Dzongri meadows.",
      rating: 4.5,
      price: "12000",
      slug : "dzongri-trek"
    },
    
    {
      id:21,
      title: " Goechala Trek",
      month : "October",
      duration: "05 Days",
      weather: "winter",
      season: "monsoon",
      difficulty: "easy",
      region: "Sikkim",
      image: "/images/trekking-tours/sikkim/goecha-la-trek.webp",
      description: "A short trek to beautiful Dzongri meadows.",
      rating: 4.5,
      price: "12000",
      slug : "goechala-trek"
    },

    {
      id:22,
      title: "Rhododendron Trek in Sikkim",
      month : "April",
      duration: "11 Days",
      weather: "winter",
      difficulty: "easy",
      region: "Sikkim",
      image: "/images/trekking-tours/sikkim/rhododendron-trek.webp",
      description:"Winter trek to Goecha La with Mt. Kanchenjunga views.",
      rating: 4.5,
      price: "12000",
      isPopular: true,
      slug: "rhododendron-trek"
    },
    {
      id:23,
      title: "Kasturi Orar Round Trek",
      month : "April",
      duration: "09 Days",
      weather: "winter",
      difficulty: "easy",
      region: "Sikkim",
      image: "/images/trekking-tours/sikkim/kasturi-orar.webp",
      description: "A scenic ridge trek along the India-Nepal border.",
      rating: 4.5,
      price: "12000",
      slug: "kasturi-orar-trek"
    },
    
    {
      id: 24,
      title: "Singalila – Sandakphu trek",
      month : "April",
      season: "spring",
      duration: "10 Days",
      weather: "winter",
      difficulty: "easy",
      region: "Sikkim",
      image: "/images/trekking-tours/sikkim/sandakphu-trek.webp",
      description: "Everest, Kanchenjunga, Lhotse, and Makalu .",
      rating: 4.5,
      price: "12000",
      slug: "singalia-sandakphu-trek"
    },
    
    {
      id: 25,
      title: "Singalila Ridge & Goecha La Circuit Round Trek",
      month : "April",
      duration: "23 Days",
      weather: "winter",
      difficulty: "moderate",
      category: "bird-watching",
      region: "Sikkim",
      image: "/images/singalia-ridge-goecha-la.jpg",
      description: "A thrilling crossover trek , the best of Singalila Ridge.",
      rating: 4.5,
      price: "12000",
      slug: "singalila-ridge-goecha-la-trek"
    },
    
    {
      id: 26,
      title: "Green Lake Trek North Sikkim",
      month : "April",
      duration: "15 Days",
      weather: "winter",
      difficulty: "moderate",
      region: "Sikkim",
      image: "/images/trekking-tours/sikkim/green-lake-trek-1.webp",
      description: "An offbeat high-altitude trek to the Green Lake",
      rating: 4.5,
      price: "12000",
      slug: "green-lake-trek"
    },
    
    {
      id: 27,
      title: "Phoktey Dara Trek",
      month : "April",
      duration: "15 Days",
      weather: "winter",
      difficulty: "moderate",
      region: "Sikkim",
      image: "/images/trekking-tours/sikkim/phoktey-dara.webp",
      description: "Explore the untouched trails of Sikkim.",
      rating: 4.5,
       price: "12000",
      slug: "phoktey-dara-trek"
    },
    
  
    // 🏞️ Himachal Treks
    {
      id:28,
      title: "Hampta Pass Trek",
      month : "November",
      duration: "05 Days",
      difficulty: "moderate",
      category: "",
      region: "Himachal",
      image: "/images/trekking-tours/himachal/hampta-pass-trek.webp",
      description: "An amazing crossover trek from lush Kullu Valley to the barren Spiti landscape.",
      rating: 4.5,
      price: "12000",
      isPopular: true,
      slug: "hampta-pass-trek"
    },
    {
      id:29,
      title: "Miyar Pangi Valley Trek ",
      month : "May",
      duration: "04 Days",
      difficulty: "easy",
      category: "",
      region: "Himachal",
      image: "/images/trekking-tours/himachal/miyar-valley.webp",
      description: "Quick-access high-altitude lake trek with beautiful meadows and alpine scenery.",
      rating: 4.5,
      price: "12000",
      slug: "miyar-pangi-valley-trek"
    },
       {
      id:30,
      title: "Pangi Valley Trek",
      month : "May",
      duration: "04 Days",
      difficulty: "easy",
      category: "",
      region: "Himachal",
      image: "/images/trekking-tours/himachal/pangi-valley.webp",
      description: "Quick-access high-altitude lake trek with beautiful meadows and alpine scenery.",
      rating: 4.5,
      price: "12000",
      slug: "pangi-valley"
    },


    {
        id:31,
        title: "Indrahar Pass Trek",
        month : "May",
        duration: "09 Days",
        difficulty: "easy",
        region: "Himachal",
        image: "/images/trekking-tours/himachal/indrahar-pass.webp",
        description: "Quick-access high-altitude lake trek with beautiful meadows and alpine scenery.",
        rating: 4.5,
        price: "12000",
        slug: "indrahar-pass-trek"
      },

  
  
    {
        id:32,
        title: "Kinner Kailash Trek",
        month : "May",
        duration: "13 Days",
        difficulty: "easy",
        region: "Himachal",
        image: "/images/trekking-tours/himachal/kinner-kailash.webp",
        description: "Quick-access high-altitude lake trek with beautiful meadows and alpine scenery.",
        rating: 4.5,
        price: "12000",
        slug: "kinner-kailash-trek"
      },
    {
        id:33,
        title: "Mani Mahesh Kailash Trek",
        month : "June",
        duration: "09 Days",
        difficulty: "easy",
        region: "Himachal",
        image: "/images/trekking-tours/himachal/mani-mahesh-kailash-trek.webp",
        description: "Quick-access high-altitude lake trek with beautiful meadows and alpine scenery.",
        rating: 4.5,
        price: "12000",
        slug: "manimahesh_kailash_trek"
      },
    {
        id:34,
        title: "Parang La Trek - Kibber to Tsomoriri",
        month : "June",
        duration: "12 Days",
        difficulty: "easy",
        region: "Himachal",
        image: "/images/trekking-tours/himachal/parang-la.webp",
        description: "Quick-access high-altitude lake trek with beautiful meadows and alpine scenery.",
        rating: 4.5,
        price: "12000",
        slug: "parang-la-trek"
      },
   
    {
        id:35,
        title: "Chandratal to Baralacha Trek",
         month : "July",
        duration: "11 Days",
        difficulty: "moderate",
        region: "Himachal",
        image: "/images/trekking-tours/himachal/chandratal-trek.webp",
        description: "Quick-access high-altitude lake trek with beautiful meadows and alpine scenery.",
        rating: 4.5,
        price: "12000",
        slug: "chandratal-baralacha-trek"
      },
    {
        id:36,
        title: "Kareri Lake Trek",
         month : "July",
        duration: "07 Days",
        difficulty: "moderate",
        category: "",
        region: "Himachal",
        image: "/images/trekking-tours/himachal/kareri-lake-trek.webp",
        description: "Quick-access high-altitude lake trek with beautiful meadows and alpine scenery.",
        rating: 4.5,
        price: "12000",
        slug : "kareri-lake-trek"
      },
    {
        id:37,
        title: "Pin Parvati Pass Trek",
         month : "July",
        duration: "17 Days",
        difficulty: "moderate",
        region: "Himachal",
        image: "/images/trekking-tours/himachal/pin-parvati-trek.webp",
        description: "Quick-access high-altitude lake trek with beautiful meadows and alpine scenery.",
        rating: 4.5,
       price: "12000",
        slug: "pinparvati_passtrek"
      },
    {
        id:38,
        title: "Dalai Lama Trek",
        month : "July",
        duration: "12 Days",
        difficulty: "moderate",
        region: "Himachal",
        image: "/images/trekking-tours/himachal/dalai-lama-trek.webp",
        description: "Quick-access high-altitude lake trek with beautiful meadows and alpine scenery.",
        rating: 4.5,
       price: "12000",

        slug: "dalai-lama-trek"
      },
    {
        id:39,
        title: "Chandrakhani Pass Trek",
        season: "autumn",
         month : "July",
        duration: "10 Days",
        difficulty: "moderate",
        region: "Himachal",
        image: "/images/trekking-tours/himachal/chandrakhani-pass-trek.webp",
        description: "Quick-access high-altitude lake trek with beautiful meadows and alpine scenery.",
        rating: 4.5,
        price: "12000",
        slug : "chandrakhani-pass-trek"
      },
   
    {
      id:40,
      title: "Deo Tibba Base Camp Trek",
      month : "Decmeber",
      duration: "12 Days",
      difficulty: "moderate",
      region: "Himachal",
      image: "/images/trekking-tours/himachal/deo-tibba-trek.webp",
      description: "Quick-access high-altitude lake trek with beautiful meadows and alpine scenery.",
      rating: 4.5,
      price: "12000",
      slug :"deo-tibba-base-camp-trek"
      },
    {
        id:41,
        title: "Kalhani Pass Trek",
         month : "Decmeber",
        duration: "12 Days",
        difficulty: "moderate",
        region: "Himachal",
        image: "/images/trekking-tours/himachal/Kalihani-pass-Trek.webp",
        description: "Quick-access high-altitude lake trek with beautiful meadows and alpine scenery.",
           rating: 4.5,
   price: "12000",

        slug : "kalihani-pass-trek"
      },
  
   
    {
        id:42,
        title: "Shrikhand Mahadev Trek",
        month : "August",
        duration: "10 Days",
        difficulty: "moderate",
        category: "spiritual",
        region: "Himachal",
        image: "/images/trekking-tours/himachal/shrikhand-mahadev.webp",
        description: "Quick-access high-altitude lake trek with beautiful meadows and alpine scenery.",
        rating: 4.5,
        price: "12000",
        slug : "shrikhand-mahadev-trek"
      },
   
  


      {
        id:43,
        title: "Twin Kailash Trek(Kinner and Shrikhand)",
        month: "September",
        duration: "10 Days",
        difficulty: "moderate",
        region: "Himachal",
        image: "/images/trekking-tours/himachal/kailash-shrikhand.webp",
        description: "Quick-access high-altitude lake trek with beautiful meadows and alpine scenery.",
        rating: 4.5,
        price: "12000",
        slug : "twin-kailash-trek"
      },
    
      {
        id:44,
        title: "Bara Bhangal Trek",
        month: "November",
        duration: "13 Days",
        difficulty: "hard",
        region: "Himachal",
        image: "/images/trekking-tours/himachal/bara-bhangal.webp",
        description: "Quick-access high-altitude lake trek with beautiful meadows and alpine scenery.",
        rating: 4.5,
        price: "12000",
        slug :  "bara-bhangal-trek"
      },
      {
        id:45,
        title: " Pin Bhabha Pas Trek",
        month: "November",
        duration: "13 Days",
        difficulty: "hard",
        region: "Himachal",
        image: "/images/trekking-tours/himachal/pin-bhabha.webp",
        description: "Quick-access high-altitude lake trek with beautiful meadows and alpine scenery.",
        rating: 4.5,
       price: "12000",
        slug: "bhabha-pass-trek"
      },
    
    // 🏔️ Uttarakhand Treks
    {
      id: 46,
      title: "Chopta Chandrashila Trek",
      month: "March",
      season: "spring",
      duration: "09 Days",
      difficulty: "easy",
      weather: "winter",
      category:"bird-watching",
      region: ["Garhwal","Uttarakhand"],
      image: "/images/trekking-tours/garhwal/chandrashila-summit-trek.webp",
      description:"Chandrashila Trek in Uttarakhand with scenic views and cultural charm.",
      rating: 4.5,
      price: "12000",
      slug : "chopta-chandrashila-trek"
    },
    {
      id: 47,
      title: "Dodital Darwa Pass Trek",
      duration: "08 Days",
      difficulty: "easy",
      weather: "winter",
      category: "",
      region: ["Garhwal","Uttarakhand"],
      image: "/images/trekking-tours/garhwal/dodital-trek.webp",
      description: "Dodital Trek is a popular trek in Uttarakhand with scenic views and cultural significance.",
         rating: 4.5,
   price: "12000",

      slug: "dodital-darwa-pass-trek"
    },
    {
      id: 48,
      title: "Har Ki Dun Ruinsara Tal Trek",
      season: "summer",
      duration: "10 Days",
      weather : "winter",
      difficulty: "easy",
      region: ["Garhwal","Uttarakhand"],
      image: "/images/trekking-tours/garhwal/har-ki-dun-trek.webp",
      description: "Har Ki Dun Trek is a popular trek in Uttarakhand with scenic views and cultural significance.",
         rating: 4.5,
   price: "12000",

      isPopular:true,
      slug: "har-ki-dun-ruinsara-tal-trek"
    },

    {
      id: 49,
      title: "Valley of Flowers Trek",
      duration: "09 Days",
      season: "monsoon",
      difficulty: "easy",
      category: "bird-watching",
      region: ["Garhwal","Uttarakhand"],
      image: "/images/trekking-tours/garhwal/valley-of-flowers.webp",
      description: "Valley of Flowers Trek is a popular trek in Uttarakhand with scenic views and cultural significance.",
      rating: 4.5,
      price: "12000",
      slug: "valley-of-flowers-trek"
    },
 
    {
      id: 50,
      title: "Chenap Lake Trek",
      duration: "12 Days",
      difficulty: "easy",
      region: ["Garhwal","Uttarakhand"],
      image: "/images/trekking-tours/garhwal/chenap-lake-trek.webp",
      description: "Chenap Lake Trek is a popular trek in Uttarakhand with scenic views and cultural significance.",
         rating: 4.5,
   price: "12000",

      slug: "chenap-lake-trek"
    },
    {
      id: 51,
      title: "Dayara Bugyal Trek",
      season: "summer",
      duration: "07 Days",
      weather:"winter",
      difficulty: "easy",
      category: "family",
      region: ["Garhwal","Uttarakhand"],
      image: "/images/trekking-tours/garhwal/dayara-bugyal.webp",
      description: "Dayara Bugyal Trek is a popular trek in Uttarakhand with scenic views and cultural significance.",
         rating: 4.5,
   price: "12000",

      slug: "dayara-bugyal-trek"
    },
 


    {
      id: 52,
      title: "Nanda Devi Trek",
      duration: "11 Days",
      difficulty: "moderate",
      region: ["Garhwal","Uttarakhand"],
      image: "/images/trekking-tours/garhwal/nanda-devi-trek.webp",
      description: "Nanda Devi Trek is a popular trek in Uttarakhand with scenic views and cultural significance.",
         rating: 4.5,
   price: "12000",

      slug: "nanda-devi-trek"
    },
    {
      id: 53,
      title: "Panch Kedar Trek",
      duration: "17 Days",
      difficulty: "moderate",
      category: "spiritual",
      region: ["Garhwal","Uttarakhand"],
      image: "/images/trekking-tours/garhwal/panch-kedar.webp",
      description: "Panch Kedar Trek is a popular trek in Uttarakhand with scenic views and cultural significance.",
         rating: 4.5,
   price: "12000",

      slug : "panch-kedar-trek"
    },
    {
      id: 62,
      title: "Sahastra Tal to Kedarnath",
      duration: "17 Days",
      difficulty: "moderate",
      category: "spiritual",
      region: ["Garhwal","Uttarakhand"],
      image: "/images/trekking-tours/garhwal/sahastra-tal.webp",
      description: "Panch Kedar Trek is a popular trek in Uttarakhand with scenic views and cultural significance.",
      rating: 4.5,
      price: "12000",
      slug : "sahastratal-kedarnath"
    },
    {
      id: 54,
      title: "Gangotri-Goumukh Trek",
      season: "summer",
      duration: "11 Days",
      difficulty: "moderate",
      category: "wildlife",
      region: ["Garhwal","Uttarakhand"],
      image: "/images/trekking-tours/garhwal/gangotri-goumukh-trek.webp",
      description: "Gangotri-Goumukh Trek is a popular trek in Uttarakhand with scenic views and cultural significance.",
         rating: 4.5,
   price: "12000",

      slug : "gangotri-gaumukh"

    },
 
    {
      id:56,
      title: "Roopkund Trek",
      duration: "09 Days",
      weather:"winter",
      difficulty: "moderate",
      region: ["Garhwal","Uttarakhand"],
      image: "/images/trekking-tours/garhwal/roop-kund-trek.webp",
      description: "Roopkund Trek is a popular trek in Uttarakhand with scenic views and cultural significance.", 
      rating: 4.5,
      price: "12000",
      slug: "roopkund-trek"
    },
    {
      id:57,
      title: "Sources of Ganges Trek",
      duration: "18 Days",
      difficulty: "moderate",
      region: ["Garhwal","Uttarakhand"],
      image: "/images/trekking-tours/garhwal/sources-of-ganges-trek.webp",
      description: "Sources of Ganges Trek is a popular trek in Uttarakhand with scenic views and cultural significance.",
      rating: 4.5,
      price: "12000",
      slug: "sources-ganges-trekking"
    },
    {
      id:58,
      title: "Lord Curzon Trail; Kuari Pass Trek",
      season:"autumn",
      duration: "10 Days",
      weather: "winter",
      difficulty: "moderate",
      region: ["Garhwal","Uttarakhand"],
      image: "/images/trekking-tours/garhwal/kuari-pass-terk.webp",
      description: "Kuari Pass Trek is a popular trek in Uttarakhand with scenic views and cultural significance.",
      rating: 4.5,
      price: "12000",
      slug: "kauri-pass-trek"
    },
   
   
 
    
  
    {
      id:59,
      title: "Khatling Sahastra Tal Trek",
      duration: "0 Days",
      difficulty: "moderate",
      region: ["Garhwal","Uttarakhand"],
      image: "/images/trekking-tours/garhwal/drona-giri-trek.webp",
      description: "Dronagiri Trek is a popular trek in Uttarakhand with scenic views and cultural significance.",
         rating: 4.5,
   price: "12000",

      slug : "khatling-sahastra-tal"
    },
    {
      id:60,
      title: "Gangotri Nandanvan Trek",
      duration: "11 Days",
      difficulty: "moderate",
      region: ["Garhwal","Uttarakhand"],
      image: "/images/trekking-tours/garhwal/gangotri-nandavan-trek.webp",
      description: "Gangotri Nandanvan Trek is a popular trek in Uttarakhand with scenic views and cultural significance.",
      rating: 4.5,
      price: "12000",
      slug : "gangotri-nandanvan-trek"

    },
    
    {
      id: 61,
      title: "Kedartal Trek",
      duration: "09 Days",
      difficulty: "moderate",
      region: ["Garhwal","Uttarakhand"],
      image: "/images/trekking-tours/garhwal/kedar-tal-trek.webp",
      description: "Kedartal Trek is a popular trek in Uttarakhand with scenic views and cultural significance.",
         rating: 4.5,
   price: "12000",

      slug: "kedartal-trek"
    },
  
    {
      id:62,
      title: "Satopanth Swargarohini Trek",
      duration: "08 Days",
      difficulty: "moderate",
      region: ["Garhwal","Uttarakhand"],
      image: "/images/trekking-tours/garhwal/satopanth-lake-trek.webp",
      description: "Satopanth Lake Trek is a popular trek in Uttarakhand with scenic views and cultural significance.",
      rating: 4.5,
      price: "12000",
      slug: "satopanth-swargarohini-trek"
    },

    {
      id:63,
      title: "Shivling BC Trek",
      duration: "16 Days",
      difficulty: "hard",
      category: "spiritual",
      region: ["Garhwal","Uttarakhand"],
      image: "/images/shivling-trek.webp",
      description: "Shivling Trek is a popular trek in Uttarakhand with scenic views and cultural significance.",
      rating: 4.5,
      price: "12000",
      slug : "shivling-trek"
    },
    {
      id:64,
      title: " Sahastra Tal to Kedarnath Trek",
      duration: "17 Days",
      difficulty: "hard",
      region: ["Garhwal","Uttarakhand"],
      image: "/images/trekking-tours/garhwal/khatling-sehestra-tal.webp",
      description: "Khatling Sahastra Tal Trek is a popular trek in Uttarakhand with scenic views and cultural significance.",
      rating: 4.5,
      price: "12000",
      slug: "-sahasratal-trek-to-kedarnath-trek"
    },
    {
      id:65,
      title: "Kalindikhal Pass Trek",
      duration: "17 Days",
      difficulty: "hard",
      region: ["Garhwal","Uttarakhand"],
      image: "/images/trekking-tours/garhwal/kalindikhal-pass-trek.webp",
      description: "Kalindikhal Pass Trek is a popular trek in Uttarakhand with scenic views and cultural significance.",
      rating: 4.5,
      price: "12000",
      slug : "kalindikhal-pass-trek"
    },
    {
      id:66,
      title: "Auden's Col Trek",
      duration: "18 Days",
      difficulty: "hard",
      region: ["Garhwal","Uttarakhand"],
      image: "/images/audens-col-trek.webp",
      description: "Auden's Col Trek is a popular trek in Uttarakhand with scenic views and cultural significance.",
      rating: 4.5,
      price: "12000",
      slug : "audens-col-trek"
    },

    {
      id:67,
      title: "Kagbhusandi Lake Trek",
      duration: "06 Days",
      difficulty: "moderate",
      region: ["Garhwal","Uttarakhand"],
      image: "/images/trekking-tours/garhwal/kagbhusandi-lake-trek.webp",
      description: "Kagbhusandi Lake Trek is a popular trek in Uttarakhand with scenic views and cultural significance.",
      rating: 4.5,
      price: "12000",
      slug: "kagbhusandi-lake-trek"
    },
 
    {
      id:68,
      title: "Nandikund Trek",
      duration: "13 Days",
      difficulty: "moderate",
      region: ["Garhwal","Uttarakhand"],
      image: "/images/trekking-tours/garhwal/nandikund.webp",
      description: "Nandikund Trek is a popular trek in Uttarakhand with scenic views and cultural significance.",
      rating: 4.5,
      price: "12000",
      slug:"nandikund-trek"
    },
    {
      id:69,
      title: "Panpatia Col Trek",
      duration: "14 Days",
      difficulty: "hard",
      region: ["Garhwal","Uttarakhand"],
      image: "/images/trekking-tours/garhwal/panpatia-col.webp",
      description: "Panpatia Col Trek is a popular trek in Uttarakhand with scenic views and cultural significance.",
      rating: 4.5,
      price: "12000",
      slug: "panpatia-col-trek"
    },
  
    
  
  // 🌄 Kumaon Treks
    {
      id:79,
      title: "Adi Kailash Trek",
      duration: "10 Days",  // Assuming duration (adjust if needed)
      difficulty: "easy",
      region: ["Kumaon","Uttarakhand"],
      image: "/images/trekking-tours/kumaon/adi-kailash-trek.webp",
      description: "A gentle trek to the scenic Pindari Glacier, perfect for beginners.",
      rating: 4.5,
      price: "12000",
      slug: "adi-kailash-trek"
    },
    {
      id:70,
      title: "Pindari Glacier Trek",
      duration: "10 Days",  // Assuming duration (adjust if needed)
      difficulty: "easy",
      region: ["Kumaon","Uttarakhand"],
      image: "/images/trekking-tours/kumaon/pindari-glacier-trek.webp",
      description: "A gentle trek to the scenic Pindari Glacier, perfect for beginners.",
      rating: 4.5,
      price: "12000",
      slug: "baqershwar-pindari-trek"
    },
    {
      id:71,
      title: "Traill’s Pass Trekking Expedition",
      duration: "12 Days",
      difficulty: "easy",
      region: ["Kumaon","Uttarakhand"],
      image: "/images/trekking-tours/kumaon/trails-pass.webp",
      description: "A stunning trek to the Kafni Glacier with breathtaking Himalayan views.",
      rating: 4.5,
      price: "12000",
      slug: "trails-pass-trekking-expedition"
},
{
      id:72,
      title: "Namik Glacier Trek",
      duration: "17 Days",
      difficulty: "moderate",
      region: ["Kumaon","Uttarakhand"],
      image: "/images/trekking-tours/kumaon/namik-glacier.webp",
      description: "Explore remote valleys and high-altitude meadows in this challenging trek.",
      rating: 4.5,
       price: "12000",
      slug: "namik-glacier-trek"
},
{
      id:73,
      title: "Ralam Dhura Pass Trek",
      duration: "12 Days",
      difficulty: "hard",
      region: ["Kumaon","Uttarakhand"],
      image: "/images/trekking-tours/kumaon/ralam-dhura.webp",
      description: "A Spiritual journey to the sacred Adi Kailash peak.",
      rating: 4.5,
      price: "12000",
      slug : "ralam-dhura-pass-trek"
},
{
  id:74,
  title: "Bhantoi Peak Summit Expedition ",
  duration: "18 Days",
  difficulty: "moderate",
  region: ["Kumaon","Uttarakhand"],
  image: "/images/trekking-tours/kumaon/bhantoi-peak.webp",
  description: "One of the longest glacier treks in India.",
  rating: 4.5,
   price: "12000",

  isPopular: true,
  slug: "bhantoi-peak-expedition"
},
{
  id:75,
  title: "Sunderdhunga Base Camp",
  duration: "14 Days",
  difficulty: "moderate",
  region: ["Kumaon","Uttarakhand"],
  image: "/images/trekking-tours/kumaon/sunderdhunga-base-camp.webp",
  description: "A rugged trek to the base of Sunderdhunga Valley.",
  rating: 4.5,
   price: "12000",
  slug: "sunderdhunga_base_camp"
},
{
  id:76,
  title: "Nanda Devi East Base Camp",
  duration: "18 Days",
  difficulty: "hard",
  region: ["Kumaon","Uttarakhand"],
  image: "/images/trekking-tours/kumaon/nanda-devi-trek.webp",
  description: "An expedition-style trek to the base of India's second-highest peak.",
  rating: 4.5,
  price: "12000",
  slug : "nandadevi_eastbase_camp"
},
{
  id:77,
  title: "Baljuri Peak Expedition",
  duration: "13 Days",
  difficulty: "hard",
  region: ["Kumaon","Uttarakhand"],
  image: "/images/trekking-tours/kumaon/baljuri-peak.webp",
  description: "A demanding trek to the base of the five iconic Panchachuli peaks.",
  rating: 4.5,
  price: "12000",
  slug: "baljuri-peak-expedition"
},
{


// Jammu and Kashmir Treks

  id:78,
  title: "Gangabal Lake Trek",
  duration: "13 Days",
  region: "Jammu and Kashmir",
  image: "/images/Gangabal-Lakes-Trek.webp",
  description: "A demanding trek to the base of the five iconic Panchachuli peaks.",
  rating: 4.5,
  price: "12000",
  slug : "trekking-in-jammu-kashmir/gangabal-lake-trek"
},
{
  id:79,
  title: "Kashmir Alpine Lakes Trek",
  duration: "13 Days",
  region: "Jammu and Kashmir",
  image: "/images/kashmir-alpines-lake-trek.webp",
  description: "A demanding trek to the base of the five iconic Panchachuli peaks.",
  rating: 4.5,
  price: "12000",
  slug: "trekking-in-jammu-kashmir/kashmir-alpine-lakes-trek"
},
{
  id:80,
  title: "Kolahoi Base Camp Trek",
  duration: "13 Days",
  region: "Jammu and Kashmir",
  image: "/images/kolahoi-trek.webp",
  description: "A demanding trek to the base of the five iconic Panchachuli peaks.",
  rating: 4,
  slug: "trekking-in-jammu-kashmir/kolahoi-base-camp-trek"
},

  ];
  






  export default trekData;
  