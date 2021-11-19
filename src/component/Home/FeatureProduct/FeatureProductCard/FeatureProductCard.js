import { faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FeatureProductCard.css'
const FeatureProductCard = ({ product }) => {


    return (
        <>
            <div className="card-area">
                <a href="">
                    <img className="border-b-8 image-1 border-gray-200" src={product.img1} alt="" />
                    <img className="border-b-8 image-2 hidden border-gray-200" src={product.img2} alt="" />
                </a>

                <div className="py-3 mb-3 border-b-2">
                    <h4>{product.title}</h4>
                </div>
                <div className="flex justify-between">
                    <span className="text-lg font-semibold text-green-500">$ {product.price}.00</span>
                    <div className="flex gap-2">
                        <button className="hover:text-green-400"><FontAwesomeIcon icon={faCartPlus} /></button>
                        <button className="hover:text-green-400"><FontAwesomeIcon icon={faHeart} /></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureProductCard;