import React from 'react';

import { FooterItem } from './FooterItems';
import FooterLinkItem from './FooterLinkItem';
import FooterContact from './FooterContact';
import Summary from './Summary';
import FooterBottom from './FooterBottom';



const Footer = () => {


    return (
        <footer className="bg-gray-600 ">
            <div className="max-w-6xl mx-auto  px-4">
                <ul className="lg:flex gap-7 py-10 justify-between border-b border-green-300">

                    <Summary/>
                    {FooterItem.map(item => <FooterLinkItem item={item} key={item.id}></FooterLinkItem>)}

                    <FooterContact />
                </ul>
                <FooterBottom/>
            </div>
        </footer>
    );
};

export default Footer;