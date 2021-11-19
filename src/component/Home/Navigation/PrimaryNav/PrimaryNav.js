import React from 'react';
import SubMenu from '../SubMenu/SubMenu';

const PrimaryNav = () => {
    return (
        <>
            <ul className="hidden lg:flex  items-center space-x-4 md:space-x-2 text-white">

                <li className="py-5">
                    <a className="py-5 px-2 hover:text-gray-600" href="#">Home</a>
                </li>
                <li className="relative dropdown py-5">
                    <a className="py-5 px-2 hover:text-gray-600 " href="#">Touring Bikes</a>

                    <ul className="flex absolute hidden dropdown-menu z-50  w-96 p-2 left-3 top-16 bg-gray-100 space-x-6">
                        <SubMenu />
                    </ul>
                </li>

                <li className="py-5">
                    <a className="py-5 px-2 hover:text-gray-600" href="#">Bicycle</a>
                </li>
                <li className="py-5">
                    <a className="py-5 px-2 hover:text-gray-600" href="#">Road Bikes</a>
                </li>

                <li className="py-5">
                    <a className="py-5 px-2 hover:text-gray-600" href="#">Cycle Pumps</a>
                </li>
                <li className="py-5">
                    <a className="py-5 px-2 hover:text-gray-600" href="#">Blog</a>
                </li>
            </ul>
        </>
    );
};

export default PrimaryNav;