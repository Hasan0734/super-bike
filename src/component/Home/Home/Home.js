import React from 'react';
import AboutSection from '../AboutSection/AboutSection';
import BrandSection from '../BrandSection/BrandSection';
import FeatureProductSection from '../FeatureProduct/FeatureProductSection/FeatureProductSection';
import Footer from '../Footer/Footer';
import HeaderSlider from '../HeaderSlider/HeaderSlider';
import HomeBanner from '../HomeBanner/HomeBanner';
import LatestNewsSection from '../LatestNewsSection/LatestNewsSection';
import Navbar from '../Navigation/Navbar/Navbar';
import NewProductSection from '../NewProduct/NewProductSection/NewProductSection';
import NewsLetter from '../NewsLetter/NewsLetter';
import TestimonialSection from '../TestimonialSection/TestimonialSection';

const Home = () => {
    return (
        <>
            <Navbar />
            <HeaderSlider></HeaderSlider>
            <AboutSection/>
            <NewProductSection/>
            <HomeBanner/>
            <FeatureProductSection/>
            <TestimonialSection/>
            <LatestNewsSection/>
            <BrandSection />
            <NewsLetter/>
            <Footer/>
          
        </>
    );
};

export default Home;