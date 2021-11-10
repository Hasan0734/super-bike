import React, { useState } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MobileMenu.css'
import SubMenu from '../SubMenu/SubMenu';
import AccountMenu from '../AccountMenu/AccountMenu';
import Language from '../Language/Language';
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
                    <li className="py-1 px-5 border-t  "><a href="#">Home</a></li>
                    <li className="py-1 px-5 border-t border-b dropdown">
                        <button onClick={() => setDropdown(!dropdown)} className="space-x-5">
                            <span>Touring Bikes</span>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                        {/* Dropdonw menu */}

                        <ul className={`text-gray-700 pt-1 ${dropdown ? 'block' : 'hidden'}`}>
                            <li className="py-1 text-white "><a href="#">All Touring Bikes</a></li>
                            <SubMenu></SubMenu>
                        </ul>

                    </li>
                    <li className="py-1 px-5 border-b "><a href="#">Bicycle</a></li>
                    <li className="py-1 px-5 border-b"><a href="#">Road Bikes</a></li>
                    <li className="py-1 px-5 border-b "><a href="#">Cycle Pumps</a></li>
                    <li className="py-1 px-5 border-b"><a href="#">Blog</a></li>
                </ul>

                {/* Account  */}
                <div className={` ${openTab === 2 ? 'block' : 'hidden'}`}>
                    <ul className="text-white sm:text-black">
                        <AccountMenu />
                    </ul>
                </div>
                {/* Language */}
                <div className={`${openTab === 3 ? 'block' : 'hidden'}`}>
                    <ul className="text-white sm:text-black">
                        <Language />
                    </ul>
                </div>
            </div>
        </div>


    );
};

export default MobileMenu;