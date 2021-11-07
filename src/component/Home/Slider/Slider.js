import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import bannar1 from '../../../images/slider-1.jpg'
import bannar2 from '../../../images/slider-2.jpg'
import bannar4 from '../../../images/slider-4.jpg'
import './Slider.css'
const Slider = () => {
  return (
    <>
      <OwlCarousel className='owl-theme'
        loop={true}
        autoplay={true}
        autoPlaySpeed= {5000}
        autoPlayTimeout= {5000}
        autoplayHoverPause= {true}
       
        nav={true}
        navText = {["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]}
        items={1}
        margin={10}
        dots={false}>
        <div className="item h-11/12 ">
          <div className="relative">
            <img className=" w-full" src={bannar1} alt="" />
            <div className="absolute top-60 left-72 space-y-3">
              <h1 className="text-6xl font-bold">Largest Bicycle <br /> Manufacture</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cum <br /> reprehenderit illum quidem laborum quas.</p>
              <button className="rounded-md hover:bg-green-500 bg-green-400 p-2 text-white text-lg">Shop Now</button>
            </div>
          </div>
        </div>
        <div className="item h-11/12 ">
          <img className=" w-full" src={bannar2} alt="" />

        </div>
        <div className="item h-11/12 ">
          <img className=" w-full" src={bannar4} alt="" />
        </div>


      </OwlCarousel>


    </>
  );
};

export default Slider;