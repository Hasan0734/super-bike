import { faBars, faBiking } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import MobileMenu from '../MobileMenu/MobileMenu';
import PrimaryNav from '../PrimaryNav/PrimaryNav';
import SecondaryNav from '../SecondaryNav/SecondaryNav';
import './Navbar.css'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="border-b-8 border-green-200">


            {/* mobile menu */}

            <div className={`bg-green-500 fixed  w-10/12 min-h-screen z-50 ${isOpen ? 'block' : 'hidden'}`}>
                <MobileMenu></MobileMenu>
            </div>

            <div className="bg-green-500">
                <div className="max-w-6xl mx-auto ">
                    <div className={`flex px-4 transition duration-200 items-center justify-center justify-${isOpen ? 'end' : 'between'}`}>
                        <div className="flex space-x-4 ">
                            <div className='flex space-x-3 items-center py-4'>
                                {/* menu button */}
                                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden sm:block text-2xl font-semibold text-white py-1"><FontAwesomeIcon icon={faBars} /></button>

                                {/* logo */}
                                <span className={`${isOpen ? 'hidden' : 'block'} text-2xl font-semibold text-white`} href="#">
                                    <FontAwesomeIcon className="text-black" icon={faBiking} /> Super Bike</span>
                            </div>
                        </div>
                        {/* primary nav */}
                        <div className="flex items-center relative" >
                            <div className="">
                                <PrimaryNav />
                            </div>
                        </div>

                        {/* secondary nav */}

                        <div className={`${isOpen ? 'hidden' : 'block'} flex items-center space-x-3 relative`}>
                            <SecondaryNav />
                        </div>


                    </div>

                </div>
            </div>

        </nav>

    );
};

export default Navbar;