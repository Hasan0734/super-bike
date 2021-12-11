import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';

const FooterLinkItem = ({ item }) => {
    const [toggle, setToggle] = useState(false)

    return (
        <li>
            <ul className=' border-b lg:border-0 border-gray-400 py-2'>
                <li className="text-white text-2xl font-semibold flex justify-between items-cetner" onClick={() => setToggle(!toggle)}>
                    <span>{item.title}</span>

                    <span className='mr-4 lg:hidden'><FontAwesomeIcon icon={toggle ? faSortUp : faSortDown} /> </span>
                </li>
                <li>
                    <ul className={`text-xs leading-6 pt-4 ${toggle ? 'block' : 'hidden lg:block'}`}>
                        {item.items.map(item => <li className="text-gray-300 hover:text-white"><a href="">{item.itemName}</a></li>)}


                    </ul>
                </li>
            </ul>

        </li>
    );
};

export default FooterLinkItem;