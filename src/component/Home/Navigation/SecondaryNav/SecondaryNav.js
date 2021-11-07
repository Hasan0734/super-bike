import { faSearch, faShoppingBasket, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import AccountMenu from '../AccountMenu/AccountMenu';
import Language from '../Language/Language';
import './SecondaryNav.css'
const SecondaryNav = () => {
    return (
        <>
            <ul className="flex space-x-5 text-xl items-center justify-center">
                <li className="space-x-2 flex items-center justify-center">
                    <input className="rounded-md focus:outline-none px-3 py-1 text-sm"
                        placeholder="Search" type="text" />
                    <button className="hover:text-white"><FontAwesomeIcon  icon={faSearch} /></button></li>

                <li className="relative sm:hidden md:block account-drop hover:text-white py-5"><FontAwesomeIcon className="cursor-pointer" icon={faUserAlt} />
                    <div className="divide-y-2 divide-gray-400 z-50 divide-dashed bg-gray-100 hidden account-drop-menu absolute p-2 -left-36 top-16 w-48">
                        <ul className="sm:text-white md:text-black pb-4 ">
                            <AccountMenu />

                        </ul>
                        <ul className="sm:text-white md:text-black pt-4">
                            <Language />
                        </ul>

                    </div>

                </li>
                <li className="py-5">
                    <a className="relative py-5 hover:text-white" href="#">
                        <FontAwesomeIcon icon={faShoppingBasket} />
                        <span className="bg-yellow-300 text-black text-sm absolute mt-2 -ml-3 rounded-full inline-flex justify-center items-center w-3 h-3">0</span>
                    </a>
                </li>
            </ul>
        </>
    );
};

export default SecondaryNav;