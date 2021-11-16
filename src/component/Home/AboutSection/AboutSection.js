import React from 'react';
import About from '../../../images/about-images.jpg'
import About1 from '../../../images/about-1.jpg'
import About2 from '../../../images/about-2.jpg'
import About3 from '../../../images/about-3.jpg'
const AboutSection = () => {
    return (
        <div className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid sm:grid-cols-5 sm:gap-5">
                    <div className="col-span-3 sm:py-14 sm:pr-14">
                        <img src={About} alt="" />
                    </div>
                    <div className="col-span-2 pt-10 sm:pt-0">
                        <h1 className="text-2xl sm:text-6xl font-bold text-gray-700 font-sans">Best Adventure Tourer Bikes</h1>
                        <p className="py-6 sm:py-11">Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable sourceand going through.
                        </p>
                        <div className="grid grid-cols-3 sm:gap-4 gap-3 max-w-sm">
                            <img className=" sm:h-36 sm:w-36" src={About1} alt="" />
                            <img className=" sm:h-36 sm:w-36" src={About2} alt="" />
                            <img className=" sm:h-36 sm:w-36" src={About3} alt="" />
                        </div>
                    </div> 
                </div>

            </div>
        </div>
    );
};

export default AboutSection;