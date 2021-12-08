import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const NewsLetter = () => {
    return (
        <div className="bg-green-500 border-t-8 border-green-100">

            <div className="p-4">
                <div className="max-w-6xl mx-auto">
                    <div className="md:flex gap-4 space-y-4 items-center  ">
                        <div className="flex gap-7 justify-center">
                            <div className="flex  gap-3 items-center">
                                <span className="text-xl font-semibold"><FontAwesomeIcon icon={faPaperPlane} /></span>
                                <h3 className="text-3xl font-medium text-white">Newsletter</h3>
                            </div>
                            <div className="flex items-center hidden md:block">
                                <p className="text-xs text-white">Enter Your Email And Well Send You A Coupon With 10 Off Your Next Orde</p>
                            </div>
                        </div>
                        <div className="relative sm:float-left sm:w-9/12">
                            <form>
                            <input required  className="bg-white w-full py-2 pr-36 pl-5 focus:outline-none" id="NewsEmail" type="email" placeholder="Enter your email address" />
                            <button style={{ right: '4px', top: '4px' }} className="absolute px-4 py-1 text-white bg-gray-800 hover:bg-green-500">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;