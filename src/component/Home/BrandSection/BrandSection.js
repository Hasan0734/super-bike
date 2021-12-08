import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Brands from './Brands';
import './BrandSection.css';

const Brand = [
    { id: 3040, img: 'https://i.ibb.co/ChBRhwH/blogo1.png' },
    { id: 3041, img: 'https://i.ibb.co/tPsQCzQ/blogo2.png' },
    { id: 3042, img: 'https://i.ibb.co/NSkzFDg/blogo3.png' },
    { id: 3043, img: 'https://i.ibb.co/CM7rSfq/blogo4.png' },
    { id: 3044, img: 'https://i.ibb.co/2tt6vYM/blogo5.png' },
    { id: 3045, img: 'https://i.ibb.co/V9TRV4x/blogo6.png' },
    { id: 3046, img: 'https://i.ibb.co/cQmhWJT/blogo7.png' },
    { id: 3047, img: 'https://i.ibb.co/r2dPy9G/blogo8.png' },
    { id: 3048, img: 'https://i.ibb.co/PQC6yzC/blogo9.png' }
]

const BrandSection = () => {
    const options = {
        items: 4,
        margin: 25,
        nav: true,
        navClass: ['product-owl-prev focus:text-gray-700 ', 'product-owl-text focus:text-gray-700 '],
        navContainerClass: 'flex justify-between header-owl-nav  text-3xl text-gray-400',
        navText: ["<i class='fas fa-reply'></i>", "<i class='fas fa-share'></i>"],
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }

        }
    }
    return (
        <div className="p-4 my-14">
            <div className="max-w-6xl mx-auto">
                <OwlCarousel className='owl-theme' {...options} >
                    {Brand.map(brand => <Brands brand={brand} key={brand.id}></Brands>)}
                </OwlCarousel>
            </div>
        </div>
    );
};

export default BrandSection;