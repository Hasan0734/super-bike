import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const FooterContact = () => {
    return (

        <div>
            <h4 className="text-white text-2xl font-semibold">Contact</h4>
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
        </div>

    );
};

export default FooterContact;