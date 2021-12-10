import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBiking} from '@fortawesome/free-solid-svg-icons';
import { FooterItem } from './FooterItems';
import FooterLinkItem from './FooterLinkItem';
import FooterContact from './FooterContact';



const Footer = () => {
    return (
        <footer className="bg-gray-600 ">
            <div className="max-w-6xl mx-auto py-16 px-4">
                <div className="flex gap-7 justify-between">
                    <div className="w-2/12 ">
                        <div className="flex gap-2 text-3xl font-semibold">
                            <span className="text-green-400"><FontAwesomeIcon icon={faBiking} /></span>
                            <sapn className="text-white text-3xl">SuperBike</sapn>
                        </div>
                        <p className="text-gray-300 pt-4 hover:text-white text-justify  text-xs">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. The standard chunk of Lorem Ipsum</p>
                    </div>
                    {FooterItem.map(item => <FooterLinkItem item={item} key={item.id}></FooterLinkItem>)}
                   <FooterContact/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;