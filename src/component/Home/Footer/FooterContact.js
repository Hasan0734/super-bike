import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
const FooterContact = () => {
    const [toggle, setToggle] = useState(false)
    return (

        <li>
            <ul className="border-b lg:border-0 border-gray-400 py-2">
                <li className="text-white text-2xl font-semibold flex justify-between items-center" onClick={() => setToggle(!toggle)}>
                    <span>Contact</span>
                    <span className="mr-4 lg:hidden"><FontAwesomeIcon icon={toggle ? faSortUp : faSortDown} /> </span>
                    
                    </li>

                <li className={`${toggle ? 'block' : 'hidden lg:block'}`}>
                    <ul className="text-white text-xs leading-6 pt-4">
                        <li className="flex gap-3 text-gray-300 hover:text-white">
                            <span className="text-xl text-green-400"><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
                            <span> 44 Shirley Ave, West <br /> Chicago, IL 60185 Angelo</span>
                        </li>
                        <li className="flex gap-3 text-gray-300 hover:text-white">
                            <span className="text-xl text-green-400"><FontAwesomeIcon icon={faPhoneAlt} /></span>
                            <span>  0123 456 789</span>
                        </li>
                        <li className="flex gap-3 text-gray-300 hover:text-white">
                            <span className="text-xl text-green-400"><FontAwesomeIcon icon={faEnvelope} /></span>
                            <span>Dixit0611@gmail.com</span>
                        </li>

                    </ul>
                </li>
            </ul>
        </li>

    );
};

export default FooterContact;