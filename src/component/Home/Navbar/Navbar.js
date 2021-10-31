import { faBars, faBiking, faSearch, faShoppingBasket, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setisOpen] = useState(false)

    return (
        <div className="flex">
            <div className="fixed z-40 w-10/12">
                <div className={`bg-gray-200 h-screen   ${isOpen ? 'block' : 'hidden'}`}>

                    <div className="flex ">
                        <button className="bg-gray-500  hover:bg-green-500 py-5">Menu</button>
                        <button className="bg-gray-500  hover:bg-green-500 py-5">Account</button>
                        <button className="bg-gray-500  hover:bg-green-500 py-5">Settings</button>
                    </div>
                    <ul>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>

                </div>
            </div>
            <nav className="bg-green-500 p-5 flex-1">
                <div className="container">
                    <div className={`flex items-center justify-${isOpen ? 'end' : 'between'}`}>
                        <div className="flex space-x-5 text-2xl text-white font-semibold items-center">
                            <span onClick={() => setisOpen(!isOpen)} className="cursor-pointer lg:hidden md:hidden sm:block"><FontAwesomeIcon icon={faBars} /></span>
                            <h1 className={`${isOpen ? 'hidden' : 'block'}`}><span className="text-gray-600"><FontAwesomeIcon icon={faBiking} /></span> SuperBike</h1>
                        </div>

                        <div className={`flex space-x-10 ${isOpen ? 'hidden' : 'block'}`}>
                            <div className="sm:hidden md:block">
                                <div className="flex space-x-3 md:space-x-3 lg:space-x-8  text-white text-base ">
                                    <a className="hover:text-gray-600" href="#">Home</a>
                                    <a className="hover:text-gray-600" href="#">Touring Bikes</a>
                                    <a className="hover:text-gray-600" href="#">Bicycle</a>
                                    <a className="hover:text-gray-600" href="#">Road Bikes</a>
                                    <a className="hover:text-gray-600" href="#">Blog</a>
                                </div>
                            </div>
                            <ul className="flex space-x-5 text-xl items-center justify-center">
                                <li><FontAwesomeIcon className="cursor-pointer " icon={faSearch} /></li>
                                <li><FontAwesomeIcon className="cursor-pointer" icon={faUserAlt} /></li>
                                <li><a className="relative" href="#"><FontAwesomeIcon icon={faShoppingBasket} /><span className="bg-yellow-300 text-sm absolute mt-2 -ml-3 rounded-full inline-flex justify-center items-center w-3 h-3">0</span></a></li>
                            </ul>
                        </div>
                    </div>

                </div>


            </nav>
        </div>
    );
};

export default Navbar;