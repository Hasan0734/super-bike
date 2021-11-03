import { faBars, faBiking, faSearch, faShoppingBasket, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import MobileMenu from '../MobileMenu/MobileMenu';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className={` bg-gray-500  `}>

            <div className={`bg-green-500 fixed  w-11/12 min-h-screen  ${isOpen ? 'block' : 'hidden'}`}>
              <MobileMenu></MobileMenu>
            </div>

            <div className="bg-green-500 py-3">
                <div className="max-w-6xl mx-auto m">
                    <div className={`flex px-4 transition duration-200 justify-${isOpen ? 'end' : 'between'}`}>
                        <div className="flex space-x-4">
                            <div className='flex space-x-3 items-center'>
                                {/* menu button */}
                                <button onClick={() => setIsOpen(!isOpen)} className=" md:hidden sm:block text-2xl font-bold text-white py-1"><FontAwesomeIcon icon={faBars} /></button>

                                {/* logo */}
                                <a className={`${isOpen ? 'hidden' : 'block'} text-2xl font-bold text-white`} href="#"><FontAwesomeIcon className="text-black" icon={faBiking} /> Super Bike</a>

                            </div>

                            {/* primary nav */}

                            <div className="hidden md:flex flex items-center space-x-1 text-white">
                                <a className="py-2 px-2" href="#">Home</a>
                                <a className="py-2 px-2" href="#">Touring Bikes</a>
                                <a className="py-2 px-2" href="#">Bicycle</a>
                                <a className="py-2 px-2" href="#">Road Bikes</a>
                                <a className="py-2 px-2" href="#">Cycle Pumps</a>
                                <a className="py-2 px-2" href="#">Blog</a>
                            </div>

                            {/* secondary nav */}

                        </div>
                        <div className={`${isOpen ? 'hidden' : 'block'} flex items-center space-x-3 `}>
                            <ul className="flex space-x-5 text-xl items-center justify-center">
                                <li><FontAwesomeIcon className="cursor-pointer " icon={faSearch} /></li>
                                <li><FontAwesomeIcon className="cursor-pointer" icon={faUserAlt} /></li>
                                <li><a className="relative" href="#"><FontAwesomeIcon icon={faShoppingBasket} /><span className="bg-yellow-300 text-sm absolute mt-2 -ml-3 rounded-full inline-flex justify-center items-center w-3 h-3">0</span></a></li>
                            </ul>
                        </div>


                    </div>

                </div>
            </div>

        </nav>

    );
};

export default Navbar;