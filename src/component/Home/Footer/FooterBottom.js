import React from 'react';
import payment1 from '../../../images/payment/payment1.png'
import payment2 from '../../../images/payment/payment2.png'
import payment3 from '../../../images/payment/payment3.png'
import payment4 from '../../../images/payment/payment4.png'
const FooterBottom = () => {
    return (
        <div className='py-3'>
            <div className='flex lg:flex-row flex-col gap-3 justify-between items-center'>
                <p className='text-gray-300 lg:text-xs text-sm'>Copyright © 2013-present Magento, Inc. All rights reserved</p>
                <ul className='flex gap-2'>
                    <li><a href="#"><img className='w-12' src={payment1} alt="" /></a></li>
                    <li><a href="#"><img className='w-12' src={payment2} alt="" /></a></li>
                    <li><a href="#"><img className='w-12' src={payment3} alt="" /></a></li>
                    <li><a href="#"><img className='w-12' src={payment4} alt="" /></a></li>
                </ul>
            </div>
        </div>
    );
};

export default FooterBottom;