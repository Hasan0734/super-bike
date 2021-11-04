import React from 'react';

const SubMenu = () => {
    return (
        <>
            <li className="py-1 sm:text-white md:text-black"><a href="#">Bicycle</a>
                <ul className="md:text-gray-500">
                    <li className="py-1 sm:px-5 md:px-0 md:text-xs"><a href="">Dual-Sport Bikes</a></li>
                    <li className="py-1 sm:px-5 md:px-0 md:text-xs"><a href="">Cruiser Bikes</a></li>
                    <li className="py-1 sm:px-5 md:px-0 md:text-xs"><a href="">City Bikes</a></li>
                    <li className="py-1 sm:px-5 md:px-0 md:text-xs"><a href="">BMX Bikes</a></li>
                </ul>
            </li>
            <li className="py-1 sm:text-white md:text-black"><a href="">Accessories</a>
                <ul className="md:text-gray-500">
                    <li className="py-1 sm:px-5 md:px-0 md:text-xs"><a href="">Folding Bikes</a></li>
                    <li className="py-1 sm:px-5 md:px-0 md:text-xs"><a href="">Recumbent Bikes</a></li>
                    <li className="py-1 sm:px-5 md:px-0 md:text-xs"><a href="">Tandem Bikes</a></li>
                    <li className="py-1 sm:px-5 md:px-0 md:text-xs"><a href="">Cycle Pumps</a></li>
                </ul>
            </li>
            <li className="py-1 sm:text-white md:text-black"><a href="">Touring Bikes</a>
                <ul className="md:text-gray-500">
                    <li className="py-1 sm:px-5 md:px-0 md:text-xs"><a href="">Time Trial Bikes</a></li>
                    <li className="py-1 sm:px-5 md:px-0 md:text-xs"><a href="">Fitness Bikes</a></li>
                    <li className="py-1 sm:px-5 md:px-0 md:text-xs"><a href="">Fixed-Gear Bikes</a></li>
                    <li className="py-1 sm:px-5 md:px-0 md:text-xs"><a href="">Mountain Bikes</a></li>
                </ul>
            </li>
        </>
    );
};

export default SubMenu;