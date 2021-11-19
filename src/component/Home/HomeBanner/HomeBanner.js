import React from 'react';

import './HomeBanner.css'
const HomeBanner = () => {
    return (
        <div className="p-4 mt-14">
            <div className="max-w-6xl mx-auto">
                <div className="grid sm:grid-cols-2 home-banner">
                    <div className="banner-img-1 h-36 sm:h-72">

                        <div className="bannerImg relative h-36 sm:h-72 flex justify-end">

                            <div className="p-4 sm:p-11">
                                <h4 className="text-base sm:text-3xl  font-semibold text-gray-600">Women's Special <br /> Bicycle sale</h4>
                                <p className="text-gray-600 text-sm">Explore wide collections of <br /> cycles for women.</p>
                            </div>

                        </div>
                    </div>
                    <div className="banner-img-2 h-36 sm:h-72">

                        <div className="bannerImg relative h-36 sm:h-72">
                            <div className="p-4 sm:p-11">
                                <h1 className="text-base sm:text-3xl  font-semibold text-white">Buy Bicycles & <br /> Accessories</h1>
                                <p className="text-white text-sm">Top Brands, Hugs selection. <br /> Great Offers, Best Deals</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;