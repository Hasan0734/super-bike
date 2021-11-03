import React, { useState } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MobileMenu.css'
const MobileMenu = () => {
    const [openTab, setOpenTab] = useState(1)
    const [dropdown, setDropdown] = useState(false)

    return (
        <div>
            <div className="flex justify-between pb-5">
                <button onClick={() => setOpenTab(1)} className={`p-5 w-full ${openTab === 1 ? 'bg-green-500' : 'bg-gray-500'}`}>Menu</button>
                <button onClick={() => setOpenTab(2)} className={`p-5 w-full ${openTab === 2 ? 'bg-green-500' : 'bg-gray-500'}`}>Account</button>
                <button onClick={() => setOpenTab(3)} className={`p-5 w-full ${openTab === 3 ? 'bg-green-500' : 'bg-gray-500'}`}>Settings</button>
            </div>

            <div className="">

                {/* Menu */}

                <ul className={`text-white ${openTab === 1 ? 'block' : 'hidden'}`}>
                    <li className="py-1 px-5 border-t border-b dropdown">
                        <button onClick={() => setDropdown(!dropdown)} className="space-x-5">
                            <span>Touring Bikes</span>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                        {/* Dropdonw menu */}

                        <ul className={`text-gray-700 pt-1 ${dropdown ? 'block' : 'hidden'}`}>
                            <li className="py-1 text-white "><a href="#">All Touring Bikes</a></li>
                            <li className="py-1 text-white "><a href="#">Bicycle</a>
                                <ul>
                                    <li className="py-1 px-5"><a href="">Dual-Sport Bikes</a></li>
                                    <li className="py-1 px-5"><a href="">Cruiser Bikes</a></li>
                                    <li className="py-1 px-5"><a href="">City Bikes</a></li>
                                    <li className="py-1 px-5"><a href="">BMX Bikes</a></li>
                                </ul>
                            </li>
                            <li className="py-1 text-white "><a href="">Accessories</a>
                                <ul>
                                    <li className="py-1 px-5"><a href="">Folding Bikes</a></li>
                                    <li className="py-1 px-5"><a href="">Recumbent Bikes</a></li>
                                    <li className="py-1 px-5"><a href="">Tandem Bikes</a></li>
                                    <li className="py-1 px-5"><a href="">Cycle Pumps</a></li>
                                </ul>
                            </li>
                            <li className="py-1 text-white "><a href="">Touring Bikes</a>
                                <ul>
                                    <li className="py-1 px-5"><a href="">Time Trial Bikes</a></li>
                                    <li className="py-1 px-5"><a href="">Fitness Bikes</a></li>
                                    <li className="py-1 px-5"><a href="">Fixed-Gear Bikes</a></li>
                                    <li className="py-1 px-5"><a href="">Mountain Bikes</a></li>
                                </ul>
                            </li>
                        </ul>

                    </li>
                    <li className="py-1 px-5 border-b "><a href="#">Bicycle</a></li>
                    <li className="py-1 px-5 border-b"><a href="#">Road Bikes</a></li>
                    <li className="py-1 px-5 border-b "><a href="#">Cycle Pumps</a></li>
                    <li className="py-1 px-5 border-b"><a href="#">Blog</a></li>
                </ul>

                {/* Account  */}

                <ul className={`text-white ${openTab === 2 ? 'block' : 'hidden'}`}>
                    <li className="py-1 px-5 border-t border-b"><a href="#">Default welcom msg!</a></li>
                    <li className="py-1 px-5 border-b "><a href="#">Sign in</a></li>
                    <li className="py-1 px-5 border-b"><a href="#">yourlink</a></li>
                    <li className="py-1 px-5 border-b "><a href="#">Create an Account</a></li>
                </ul>

                {/* Language */}

                <ul className={`text-white ${openTab === 3 ? 'block' : 'hidden'}`}>
                    <li className="py-1 px-5 border-b border-t">Language: <br />
                        <a className="hover:text-gray-700" href="#">English</a> <br />
                        <a className="hover:text-gray-700" href="#">Franch</a> <br />
                        <a className="hover:text-gray-700" href="#">Spanish</a>
                    </li>
                </ul>
            </div>
        </div >


    );
};

export default MobileMenu;