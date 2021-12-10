import React from 'react';

const FooterLinkItem = ({item}) => {
    return (
        <div>
            <h4 className="text-white text-2xl font-semibold">{item.title}</h4>
            <ul className=" text-xs leading-6 pt-4">
                {item.items.map(item => <li className="text-gray-300 hover:text-white"><a href="">{item.itemName}</a></li>)}
                

            </ul>
        </div>
    );
};

export default FooterLinkItem;