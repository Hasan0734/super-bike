import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import bannar1 from '../../../images/slider-1.jpg'
import bannar2 from '../../../images/slider-2.jpg'
import bannar4 from '../../../images/slider-4.jpg'
import './Slider.css'
const Slider = () => {
  const options = {
    loop: true,
    autoplay: true,
    autoPlaySpeed: 5000,
    autoPlayTimeout: 5000,
    autoplayHoverPause: true,
    navContainerClass: 'header-owl-nav flex hidden  sm:flex',
    navClass: ['header-owl-prev', 'header-owl-next'],
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],

    items: 1,
    responsiveClass: true,
    responsive: {
      0: {
        nav: false,
        dots: true,
      },
      400: {
        nav: false,
        dots: true,
      },
      600: {
        nav: true,
        dots: false
      }

    }

  }
  return (
    <>
      <OwlCarousel className='owl-theme' {...options}>
        <div className="">
          <div className="relative h-48 sm:h-auto flex items-center justify-center">
            <img className=" w-full h-full" src={bannar1} alt="" />
            <div className="absolute md:left-64  md:p-2 md:space-y-3 sm:space-y-1">
              <h1 className="text-xl md:text-2xl  lg:text-5xl font-bold">Largest Bicycle <br /> Manufacture</h1>
              <p className="sm:text-xs"><small>Check out our exclusive collection of mountain bikes, <br /> city bikes,girls cycles and more.</small></p>
              <button className="rounded-md hover:bg-green-500 bg-green-400 md:p-2 p-1 text-white sm:text-xs md:text-lg">Shop Now</button>
            </div>
          </div>
        </div>
        <div className=" ">

          <div className="relative h-48 sm:h-auto flex items-center justify-center">
            <img className=" w-full h-full" src={bannar2} alt="" />
            <div className="absolute md:left-64 text-white md:p-2 md:space-y-3 sm:space-y-1">
              <h1 className="text-xl md:text-2xl lg:text-5xl font-bold">Electric and<br /> City Bicycles</h1>
              <p className="sm:text-xs md:text-base"><small>Electric Bikes, Kid Cycles, Road Bikes <br />Hybrid Bikes, Fat Bikes</small></p>
              <button className="rounded-md hover:bg-green-500 bg-green-400 md:p-2 p-1 text-white sm:text-xs md:text-lg">Shop Now</button>
            </div>
          </div>
        </div>

        <div className=" ">
          <div className="relative h-48 sm:h-auto flex items-center justify-center">
            <img className=" w-full h-full" src={bannar4} alt="" />
            <div className="absolute md:left-1/2 md:p-2  text-white md:space-y-3 sm:space-y-1">
              <h1 className="text-xl md:text-2xl lg:text-5xl font-bold">Buy Best Bicycles <br /> Online for Men, Women <br /> and Children</h1>
              <p className="sm:text-xs md:text-base">Up to 80% off on Bicycles</p>
              <button className="rounded-md hover:bg-green-500 bg-green-400 md:p-2 p-1 text-white sm:text-xs md:text-lg">Shop Now</button>
            </div>
          </div>
        </div>


      </OwlCarousel>


    </>
  );
};

export default Slider;