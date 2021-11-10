import { faSearch, faShoppingBasket, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import AccountMenu from '../AccountMenu/AccountMenu';
import Language from '../Language/Language';
import './SecondaryNav.css'
const SecondaryNav = () => {
    const [searchBox, setSearchBox] = useState(false)
    console.log(searchBox)
    return (
        <>
            <ul className="flex space-x-5 text-xl items-center justify-center">
                <li className={``} >
                      <input className={`rounded-md absolute right-16 top-6 sm:static focus:outline-none px-3 py-1 text-sm transition duration-150 ${searchBox ? 'block' : 'hidden'}`}
                        placeholder="Search" type="text" />
                </li>
                <li className="space-x-2 flex items-center justify-center">
                  
                    <button onClick={() => setSearchBox(!searchBox)}><FontAwesomeIcon  icon={faSearch} /></button></li>

                <li className="relative hidden md:block account-drop hover:text-white py-5"><FontAwesomeIcon className="cursor-pointer" icon={faUserAlt} />
                    <div className="divide-y-2 divide-gray-400 z-50 divide-dashed bg-gray-100 hidden account-drop-menu absolute p-2 -left-36 top-16 w-48">
                        <ul className="text-white sm:text-black pb-4 ">
                            <AccountMenu />

                        </ul>
                        <ul className="text-white sm:text-black pt-4">
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