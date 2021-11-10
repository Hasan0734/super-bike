import React from 'react';

const Language = () => {
    return (
        <>
            <li className="py-1 px-5 sm:px-0 sm:text-xs border-b border-t sm:border-t-0 sm:border-b-0">Language: <br />
                <a className="hover:text-gray-700" href="#">English</a> <br />
                <a className="hover:text-gray-700" href="#">Franch</a> <br />
                <a className="hover:text-gray-700" href="#">Spanish</a>
            </li>
        </>
    );
};

export default Language;