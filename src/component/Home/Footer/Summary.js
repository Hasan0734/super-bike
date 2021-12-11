import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBiking, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';

const Summary = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <li className="lg:w-2/12">
            <ul className=' border-b lg:border-0 border-gray-400 py-2'>
                <li className="text-white text-2xl font-semibold lg:hidden flex justify-between items-center" onClick={() => setToggle(!toggle)}>
                    <span>SupperBike</span>
                    <span className='mr-4'><FontAwesomeIcon icon={toggle ? faSortUp : faSortDown} /> </span>
                </li>

                <li className={` ${toggle ? 'block' : 'hidden lg:block'} `}>
                    <div className="flex gap-2 text-3xl font-semibold">
                        <span className="text-green-400"><FontAwesomeIcon icon={faBiking} /></span>
                        <sapn className="text-white text-3xl">SuperBike</sapn>
                    </div>
                    <p className="text-gray-300 pt-4  text-justify text-base  lg:text-xs">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. The standard chunk of Lorem Ipsum</p>
                </li>
            </ul>

        </li>
    );
};

export default Summary;