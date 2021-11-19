import React from 'react';
import AboutSection from '../AboutSection/AboutSection';
import HeaderSlider from '../HeaderSlider/HeaderSlider';
import Navbar from '../Navigation/Navbar/Navbar';
import NewProductSection from '../NewProduct/NewProductSection/NewProductSection';

const Home = () => {
    return (
        <>
            <Navbar />
            <HeaderSlider></HeaderSlider>
            <AboutSection/>
            <NewProductSection/>
            <h1>this is home</h1>
        </>
    );
};

export default Home;