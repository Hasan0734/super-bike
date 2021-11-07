import React from 'react';
import HeaderSlider from '../HeaderSlider/HeaderSlider';
import Navbar from '../Navigation/Navbar/Navbar';

const Home = () => {
    return (
        <>
            <Navbar />
            <HeaderSlider></HeaderSlider>
            <h1>this is home</h1>
        </>
    );
};

export default Home;