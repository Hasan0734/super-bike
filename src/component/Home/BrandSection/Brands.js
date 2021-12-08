import React from 'react';

const Brands = ({brand}) => {
    return (
        <div className="p-5">
            <img className="" src={brand.img} alt="" />
        </div>
    );
};

export default Brands
