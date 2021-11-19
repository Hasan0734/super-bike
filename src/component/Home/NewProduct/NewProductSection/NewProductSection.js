import { faBiking } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NewProducts } from '../NewProducts';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './NewProductSection.css'
import NewProductCard from '../NewProductCard/NewProductCard';

const NewProductSection = () => {

    return (
        <div className="py-4 px-4">
            <div className="max-w-6xl mx-auto">
                {/* title section */}

                <div className="pb-5">
                    <div className="flex gap-2 text-3xl font-semibold">
                        <span className="text-green-400"><FontAwesomeIcon icon={faBiking} /></span>
                        <sapn className="title">New Product</sapn>
                    </div>

                </div>

                {/* poroduct section  */}
                <div className="px-3">

                    <OwlCarousel className='owl-theme'
                        items={4}
                        margin={25}
                        nav={true}
                        navClass={['product-owl-prev hover:text-gray-700', 'product-owl-text hover:text-gray-700']}
                        navContainerClass={'product-owl-nav flex gap-1 text-3xl text-gray-400'}
                        navText={["<i class='fas fa-reply'></i>", "<i class='fas fa-share'></i>"]}
                        dots={false}>

                        {NewProducts.map(pd => <NewProductCard product={pd} key={pd.id}></NewProductCard>)}
                    </OwlCarousel>
                </div>


            </div>
        </div>

    );
};

export default NewProductSection;