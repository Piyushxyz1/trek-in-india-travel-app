"use client"
import React from 'react';
import TreksIntro from './treksintro/TreksIntro';
import Header from './trekdestinations/Header'
import  OtherPopPackages from "./otherpoppackages/OtherPopPackages";
import BestSeasonToVisit from './bestseasontovisit/BestSeasonToVisit';
import TrekPackages from   "./trekpackages/TrekPackages"
import WhyChooseUs from './whychooseus/WhyChooseUs';
import Blogs from './blogs/BlogsSlider';
import Faq from './faqs/Faq';
import PhotoGallery from "./galleries/PhotoGallery"
import CustomerReviews from './customerreviews/CustomerReviews';
import { Homepagefaq } from './faqs/faqs';
import MainContent from './maintextcontent/MainContent';


const Home = () => {
  return (
    <div>
<Header/>
<TreksIntro/>
<TrekPackages/>
<OtherPopPackages/>
<BestSeasonToVisit/>
<WhyChooseUs/>
<PhotoGallery/>
<CustomerReviews/>
<MainContent/>
<Faq faqs={Homepagefaq} />
<Blogs/>

    </div>
  )
}

export default Home