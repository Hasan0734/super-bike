import React from 'react';
import AboutSection from '../AboutSection/AboutSection';
import FeatureProductSection from '../FeatureProduct/FeatureProductSection/FeatureProductSection';
import HeaderSlider from '../HeaderSlider/HeaderSlider';
import HomeBanner from '../HomeBanner/HomeBanner';
import LatestNewsSection from '../LatestNewsSection/LatestNewsSection';
import Navbar from '../Navigation/Navbar/Navbar';
import NewProductSection from '../NewProduct/NewProductSection/NewProductSection';
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
            <h1>this is home</h1>
        </>
    );
};

export default Home;